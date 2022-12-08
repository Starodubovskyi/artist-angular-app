import {ConfigBase} from "./config-base";

export class ConfigItems extends ConfigBase<ConfigBase<any>[]> {
  override controlType = 'items';
}

