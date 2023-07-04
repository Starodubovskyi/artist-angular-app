import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ConfigBase} from "../config-base";

@Component({
  selector: 'app-dynamic-config',
  templateUrl: './dynamic-config.component.html',
  styleUrls: ['./dynamic-config.component.css']
})
export class DynamicConfigComponent {
  @Input() config!: ConfigBase<any>;
  @Input() form!: any;

  @Output('addItem') addItem = new EventEmitter();
  @Output('removeItem') removeItem = new EventEmitter();
  @Output('fileUpload') fileUpload = new EventEmitter();

  get isValid() {
    return this.form.controls[this.config.key].valid;
  }

  statusHiddenEditItems = []

  hideEditItem(index) {
    this.statusHiddenEditItems[index]=!this.statusHiddenEditItems[index]
  }

  triggerAddItem() {
    this.addItem.emit(this.config.key);
    this.statusHiddenEditItems.push(false)
  }

  triggerRemoveItem(index: number) {
    this.removeItem.emit({
      index,
      key: this.config.key
    });
    this.statusHiddenEditItems.splice(index,1)
  }

  triggerFileUpload(event: Event, key: string = '', isNested: boolean = false, index: number = 0): null | void {
    const target = event.target as HTMLInputElement;


    if (!target || !target.files || !key) {
      return null;
    }

    const file: File = target.files[0];

    this.fileUpload.emit({
      isNested,
      key,
      index,
      file
    });
  }
}
