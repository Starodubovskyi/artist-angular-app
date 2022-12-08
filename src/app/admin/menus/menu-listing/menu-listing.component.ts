import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MenusService} from "../../menus.service";
import {Menu} from "../../menu";
import {IAllowDragFn, IAllowDropFn, TreeModel, TreeNode} from "@circlon/angular-tree-component";
import {ThemeSettingsService} from "../../../theme-settings/theme-settings.service";
import {MenuItem} from "../../../theme-settings/theme-settings";

@Component({
  selector: 'app-menu-listing',
  templateUrl: './menu-listing.component.html',
  styleUrls: ['./menu-listing.component.css']
})
export class MenuListingComponent implements OnInit, AfterViewInit {
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

  addToMainMenu(menu: Menu) {
    this.mainMenuNodes = [...this.mainMenuNodes, {
      children: [],
      parentId: null,
      id: menu.label,
      label: menu.label,
      slug: menu.slug
    }];
  }

  addToFooterMenu(menu: Menu) {
    this.footerMenuNodes = [...this.footerMenuNodes, {
      children: [],
      parentId: null,
      id: menu.label,
      label: menu.label,
      slug: menu.slug
    }];
  }

  deleteNode(node: TreeNode, tree: any, isMain = true) {
    if (!node.isRoot) {
      const parentNode = node.realParent ? node.realParent : node.treeModel.virtualRoot;

      parentNode.data.children = parentNode.data.children.filter((child: TreeModel) => {
        return child !== node.data;
      });

      if (node && node.parent && node.parent.data && node.parent.data.children.length === 0) {
        node.parent.data.hasChildren = false;
      }

      tree.treeModel.update();

    } else if(isMain){
      this.mainMenuNodes = this.mainMenuNodes.filter((menuNode) => menuNode.id !== node.id)
    } else {
      this.footerMenuNodes = this.footerMenuNodes.filter((menuNode) => menuNode.id !== node.id)
    }
  }

  saveMenu() {
    this.themeSettingsService.saveSettings({
      footerMenu: this.footerMenuNodes,
      mainMenu: this.mainMenuNodes
    }).subscribe(() => {
      console.log("save menu");
    });
  }
}
