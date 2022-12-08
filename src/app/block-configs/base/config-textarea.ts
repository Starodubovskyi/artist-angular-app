import {ConfigBase} from "./config-base";

export class ConfigTextarea extends ConfigBase<string> {
  override controlType = 'textarea';
}

