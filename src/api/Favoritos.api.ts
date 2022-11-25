import { IFavoritos } from "../types/favoritos.types";
import CommonApi from "./Common.api";

export default class FavoritosApi extends CommonApi {
    constructor() {
        super();
    }

    public async postFavoritos(model: IFavoritos) {
        return await this._postFavoritos('api/favoritos', model);
    }

} 