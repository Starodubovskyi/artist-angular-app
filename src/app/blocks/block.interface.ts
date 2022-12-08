import {BlockTypes} from "./block-types";

export interface Block {
  id: string
  type: BlockTypes
  component?: any
  title?: string
}

export interface TextBlock extends Block {
  description?: string
}

export interface BlockComponent {
  data: any
}
