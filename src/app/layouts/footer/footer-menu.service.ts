import {Injectable} from '@angular/core';
import {MenuItem} from "../../theme-settings/theme-settings";

@Injectable({
  providedIn: 'root'
})
export class FooterMenuService {

  constructor() {
  }

  flattenMenu(menu: MenuItem[], result: MenuItem[] = [], level = 0, index = 0) {
    menu.forEach((menuItem, itemIndex) => {
      if (level === 0) {
        result.push({
          ...menuItem,
          children: []
        });
      }

      if (level !== 0 && result[index] && result[index].children) {
        // @ts-ignore
        result[index].children.push(menuItem);
      }

      if (menuItem.children) {
        this.flattenMenu(menuItem.children, result, level + 1, level === 0 ? itemIndex : index);
      }
    });

    return result;
  }
}
