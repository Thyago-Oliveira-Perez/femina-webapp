import { IFavoritos } from "../types/favoritos.types";
import CommonApi from "./Common.api";

export default class FavoritosApi extends CommonApi {
    constructor() {
        super();
    }

    public async postFavoritos(model: IFavoritos) {
        return await this._postFavoritos('api/favoritos/insert', model);
    }

    public async getFavoritos() {
        return await this._getFavoritos('api/favoritos/my-favoritos')
    }

    public async deleteFavorito(model: IFavoritos) {
        return await this._deleteFavorito('api/favoritos/delete', model)
    }

} 