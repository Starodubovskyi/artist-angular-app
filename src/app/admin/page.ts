import {Block} from "../blocks/block.interface";

export interface Page {
  public: boolean;
  tags: any[];
  _id: string;
  title: string;
  blocks: Block[];
}
