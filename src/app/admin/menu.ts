import {Block} from "../blocks/block.interface";

export interface Menu {
  _id: string;
  public: boolean;
  label: string;
  slug: string;
  pages: string[];
}

export interface PublicMenuPage {
  slug: string;
  blocks: Block[]
}
