import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class CustomBlockService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<any[]>(environment.apiUrl + '/v1/custom-blocks');
  }

  deleteById(id: string) {
    return this.http.delete(environment.apiUrl + '/v1/custom-blocks/' + id);
  }

  createCustomBlock(data) {
    return this.http.post(environment.apiUrl + '/v1/custom-blocks', data);
  }

  getBlockById(blockId: string) {
    return this.http.get<{name: string, _id: string, config: any}>(environment.apiUrl + '/v1/custom-blocks/' + blockId, {
      headers: {
        "ngrok-skip-browser-warning": "any",
      }
    });
  }

  updateCustomBlock(blockId: string, data: any) {
    return this.http.patch(environment.apiUrl + '/v1/custom-blocks/' + blockId, data);
  }
}
