import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  constructor(private http: HttpClient) {
  }

  saveMedia(file: File): Observable<any> {
    const formData = new FormData();

    formData.append("image", file, file.name);

    return this.http.post(`${environment.apiUrl}/v1/images`, formData);
  }
}
