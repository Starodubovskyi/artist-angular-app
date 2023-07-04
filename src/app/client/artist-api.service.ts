import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArtistApiService {

  constructor(private http: HttpClient) {
  }

  getBiography() {
    return this.http.get<any>(environment.apiUrl + '/v1/biography', {
    });
  }
  getOperas() {
    return this.http.get<any>(environment.apiUrl + '/v1/menu/public/menu-item/is-system');
  }

  getSingleOpera(id) {
    return this.http.get<any>(environment.apiUrl + '/v1/opera/every-image/' + id);
  }
}
