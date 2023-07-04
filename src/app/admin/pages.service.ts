import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Page} from "./page";


@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Page[]>(environment.apiUrl + '/v1/pages/manage-pages', {
    });
  }

  getPageById(pageId: string) {
    return this.http.get<Page>(environment.apiUrl + '/v1/pages/manage-pages/' + pageId, {
    });
  }

  deleteById(pageId: string) {
    return this.http.delete(environment.apiUrl + '/v1/pages/manage-pages/' + pageId);
  }

  //TODO create page DTO
  updatePage(pageId: string, data: any) {
    return this.http.patch(environment.apiUrl + '/v1/pages/manage-pages/' + pageId, data);
  }

  createPage(data: any) {
    return this.http.post(environment.apiUrl + '/v1/pages/manage-pages/', data);
  }

  getTags() {
    return this.http.get<any[]>(environment.apiUrl + '/v1/pages/manage-tags/', {
    });
  }
}
