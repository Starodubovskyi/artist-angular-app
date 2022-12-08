import {ConfigBase} from "./config-base";

export class ConfigFile extends ConfigBase<File> {
  override controlType = 'file';
}

