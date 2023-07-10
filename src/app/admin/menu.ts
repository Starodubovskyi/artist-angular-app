import {Block} from "../blocks/block.interface";

export interface Menu {
  _id: string;
  public: boolean;
  label: string;
  slug: string;
  keywords:string;
  description:string;
  pages: string[];
  isSystem: boolean;
  image: string;
  mtaCode: string;
}

export interface PublicMenuPage {
  slug: string;
  blocks?: Block[]
  response?: any[]
}
