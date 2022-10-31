import { UserLogin } from "../pages/Login/FormLogin.types";
import { IUser, LoginResponse } from "../types/user.types";
import CommonApi from "./Common.api";

export default class UserApi extends CommonApi {
  constructor() {
    super();
  }

  public async login(user: UserLogin) {
    return await this._login<UserLogin, LoginResponse>(
      user,
      "/auth/login"
    );
  }

  public async getUserInfo() {
    return await this._getDatas<IUser>("/api/usuarios/my-infos");
  }
}
