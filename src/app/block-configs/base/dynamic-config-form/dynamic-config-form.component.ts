import {Component, Input, OnInit} from '@angular/core';
import {ConfigBase} from "../config-base";
import {FormArray, FormGroup} from "@angular/forms";
import {GenerateConfigFormService} from "../generate-config-form.service";
import {BlockConfigEditingService} from "../../block-config-editing.service";
import {MediaService} from "../../../media/media.service";

@Component({
  selector: 'app-dynamic-config-form',
  templateUrl: './dynamic-config-form.component.html',
  styleUrls: ['./dynamic-config-form.component.css']
})
export class DynamicConfigFormComponent implements OnInit {
  @Input() configs: ConfigBase<any>[] | null = [];
  @Input() id: string = '';

  form!: FormGroup;

  constructor(private generateConfigFormService: GenerateConfigFormService, private blockConfigEditingService: BlockConfigEditingService, private mediaService: MediaService) {
  }

  ngOnInit() {
    this.form = this.generateConfigFormService.toFormGroup(this.configs as ConfigBase<any>[]);

    this.form.valueChanges.subscribe((val) => {
      this.blockConfigEditingService.configObservable.next({
        ...val,
        id: this.id,
      });
    });
  }

  addItem(key: string): null | void {
    const config = this.configs?.find((conf) => conf.key === key);

    if (!config) {
      return null;
    }

    return (this.form.controls[key] as FormArray).push(this.generateConfigFormService.generateItem(config.configs, config.defaultValues || {}));
  }

  removeItem({index, key}: { index: number, key: string }): null | void {
    if (!this.form.controls[key]) {
      return null;
    }

    (this.form.controls[key] as FormArray).removeAt(index);
  }

  fileUpload({file, index, key, isNested}: { file: File, isNested: boolean, index: number, key: string }): null | void {
    const uploadReq = this.mediaService.saveMedia(file);
    if (isNested) {
      const formItem: any = (this.form.controls['items'] as FormArray).at(index);

      if (!formItem) {
        return null;
      }

      uploadReq.subscribe((response) => {

        formItem.controls[key].setValue(response.name);
      });
    } else {
      uploadReq.subscribe(response => {
        this.form.controls[key].setValue(response.name);
      });
    }
  }
}
