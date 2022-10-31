import AuthService from "../services/auth.service";
import { Api } from "./Api";

export default class CommonApi extends Api {
  constructor() {
    super();
    this.url = "http://localhost:8080";
  }

  authService = new AuthService();

  authorization = `Bearer ${
    this.authService.getUser() !== null
      ? this.authService.getUser()
      : ""
  }`;

  private handleError(error: any){
    return Promise.reject(error.response)
  }

  protected async _login<T, U>(model: T, url: string): Promise<U> {
    try {
      return await this.axiosClient.post(`${this.url}` + url, model);
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  protected async _getDatas<T>(url: string): Promise<T> {
    try {
      return await this.axiosClient.get(`${this.url}` + url, {
        headers: {
          Authorization: this.authorization,
        },
      });
    } catch (error: any) {
      return this.handleError(error);
    }
  }

}