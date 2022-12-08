import {ConfigBase} from "./config-base";

export class ConfigSwitch extends ConfigBase<boolean> {
  override controlType = 'switch';
}

