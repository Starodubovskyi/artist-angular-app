import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {differenceInSeconds} from 'date-fns';
import {LoginResponse} from "./login-response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(environment.apiUrl + '/v1/auth/login', {email, password});
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("user");
  }

  isLoggedIn() {
    return !!differenceInSeconds(new Date(), this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    return new Date(localStorage.getItem("expires_at") || new Date());
  }

  setSession(loginResponse: LoginResponse) {
    const expiresAt = loginResponse.tokens.access.expires;

    localStorage.setItem('token', loginResponse.tokens.access.token);
    localStorage.setItem("expires_at", expiresAt);
    localStorage.setItem('user', JSON.stringify(loginResponse.user));
  }
}
