import {Injectable} from '@angular/core';
import {ConfigBase} from "./config-base";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ConfigItems} from "./config-items";

@Injectable({
  providedIn: 'root'
})
export class GenerateConfigFormService {

  constructor() {
  }

  toFormGroup(inputs: ConfigBase<any>[]) {
    const group: any = {};

    inputs.forEach((config) => {
      if (!(config instanceof ConfigItems)) {
        group[config.key] = config.required ? new FormControl(config.value || '', Validators.required) : new FormControl(config.value || '');
      } else if (config.value && Array.isArray(config.value)) {
        group[config.key] = new FormArray(
          config.value.map((item: any) => {
            return new FormGroup(
              config.configs.reduce((controls, currentConfig) => {
                return {
                  ...controls,
                  [currentConfig.key]: new FormControl(item[currentConfig.key]),
                };
              }, {})
            );
          })
        );
      }
    });

    return new FormGroup(group);
  }

  generateItem(configs: ConfigBase<any>[], defaultValues: any) {
    return new FormGroup(
      configs.reduce((controls, currentConfig) => {
        return {
          ...controls,
          [currentConfig.key]: new FormControl(defaultValues[currentConfig.key] || ''),
        };
      }, {})
    );
  }
}
