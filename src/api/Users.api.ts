import { UserLogin } from "../pages/Login/FormLogin.types";
import {IUser} from "../types/user.types";
import { Api } from "./Api";

export default class UserApi extends Api {
  constructor() {
    super();
    this.url = "http://localhost:8080";
  }

  private handleError(error: any){
    return Promise.reject(error.response)
  }

  public async _login<T>(user: UserLogin): Promise<T> {
    try {
      return (await this.axiosClient.post(`${this.url}/auth/login`, user)).data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  public async getUserInfo<T>(): Promise<T> {
    try {
      return(await this.axiosClient.get(`${this.url}/api/usuarios/my-infos`)).data
    } catch (error: any) {
      return this.handleError(error);
    }
  }

}
