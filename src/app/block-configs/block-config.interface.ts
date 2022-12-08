import {Block} from "../blocks/block.interface";

export interface BlockConfig {
  component?: any
}

export interface BlockConfigComponent {
  data: any
}

export interface BlockDetails {
  config: BlockConfig
  block: Block
}
