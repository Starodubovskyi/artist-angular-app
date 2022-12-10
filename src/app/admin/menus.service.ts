import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Menu, PublicMenuPage} from "./menu";


@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Menu[]>(environment.apiUrl + '/v1/menu/manage-menu', {
      headers: {
        "ngrok-skip-browser-warning": "any",
      }
    });
  }

  getMenuById(menuId: string) {
    return this.http.get<Menu>(environment.apiUrl + '/v1/menu/manage-menu/' + menuId, {
      headers: {
        "ngrok-skip-browser-warning": "any",
      }
    });
  }

  deleteById(menuId: string) {
    return this.http.delete(environment.apiUrl + '/v1/menu/manage-menu/' + menuId);
  }

  //TODO create menu DTO
  updateMenu(menuId: string, data: any) {
    return this.http.patch(environment.apiUrl + '/v1/menu/manage-menu/' + menuId, data);
  }

  createMenu(data: any) {
    return this.http.post(environment.apiUrl + '/v1/menu/manage-menu/', data);
  }

  getMenuBySlug(path: string) {
    return this.http.get<PublicMenuPage>(environment.apiUrl + '/v1/menu/public/menu-item', {
      params: {
        slug: path
      },
      headers: {
        "ngrok-skip-browser-warning": "any",
      }
    });
  }
}
