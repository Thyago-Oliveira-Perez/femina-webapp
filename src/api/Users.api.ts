import { UserLogin } from "../pages/Login/FormLogin.types";
import { ICliente } from "../pages/Usuario/Usuario.types";
import { IUserReponse, LoginResponse, IUserRequest } from "../types/user.types";
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
    return await this._getDatas<IUserReponse>("/api/usuarios/my-infos");
  }

  public async registerUserBySelf(user: IUserRequest) {
    return await this._regiterUserBySelf<IUserRequest>(user, "/api/usuarios/register")
  }
}
