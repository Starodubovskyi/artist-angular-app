import {Component, ViewChild} from '@angular/core';
import {Menu} from "../../menu";
import {MenuItem} from "../../../theme-settings/theme-settings";
import {IAllowDragFn, IAllowDropFn, TreeModel, TreeNode} from "@circlon/angular-tree-component";
import {MenusService} from "../../menus.service";
import {ThemeSettingsService} from "../../../theme-settings/theme-settings.service";

@Component({
  selector: 'app-new-page-list',
  templateUrl: './new-page-list.component.html',
  styleUrls: ['./new-page-list.component.css']
})
export class NewPageListComponent {
  menus: Menu[] = [];

  toDeleteMenuId: null | string = null;
  @ViewChild('mainTree') mainTree: any;
  @ViewChild('footerTree') footerTree: any;

  mainMenuNodes: MenuItem[] = [];

  footerMenuNodes: MenuItem[] = [];

  options = {
    allowDrag: (node: boolean | IAllowDragFn | undefined): boolean => {
      return true;
    },
    allowDrop: (node: boolean | IAllowDropFn | undefined): boolean => {
      return true;
    }
  };

  constructor(private menuService: MenusService, private themeSettingsService: ThemeSettingsService) {
  }

  ngOnInit(): void {
    this.fetchMenuList();
    this.themeSettingsService.getSettings().subscribe((response) => {
      //TODO should be changed when we fix the api
      this.footerMenuNodes = response.footerMenu;
      this.mainMenuNodes = response.mainMenu;

      // find another way to wait for the response..
      setTimeout(() => {
        this.footerTree.treeModel.expandAll();
        this.mainTree.treeModel.expandAll();
      }, 100);
    });
  }

  ngAfterViewInit() {
    // this.footerTree.treeModel.expandAll();
    // this.mainTree.treeModel.expandAll();
  }

  fetchMenuList() {
    this.menuService.getAll().subscribe((response) => {
      this.menus = response;
    });
  }

  deleteMenu() {
    if (!this.toDeleteMenuId) {
      return;
    }

    this.menuService.deleteById(this.toDeleteMenuId).subscribe(() => {
      this.toDeleteMenuId = null;
      this.fetchMenuList();
    });
  }

  saveMenu() {
    this.themeSettingsService.saveSettings({
      footerMenu: this.footerMenuNodes,
      mainMenu: this.mainMenuNodes
    }).subscribe(() => {
    });
  }
}
