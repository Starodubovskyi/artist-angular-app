export interface LoginResponse {
  tokens: { access: { expires: any; token: string; }; };
  user: { email: string; }
}
