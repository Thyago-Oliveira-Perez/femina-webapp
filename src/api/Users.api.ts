import { Api } from "./Api";

export default class UserApi extends Api {
  constructor() {
    super();
    this.url = "http://localhost:8080";
  }

  private handleError(error: any){
    return Promise.reject(error.response)
  }

  public async _login<T>(): Promise<T> {
    try {
      return (await this.axiosClient.post(`${this.url}/login`)).data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

}
