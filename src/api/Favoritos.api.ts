import { IFavoritos, IFavoritosGet } from "../types/favoritos.types";
import { IPageable } from "../types/pageable.types";
import CommonApi from "./Common.api";

export default class FavoritosApi extends CommonApi {
    constructor() {
        super();
    }

    public async postFavoritos(model: IFavoritos) {
        return await this._postFavoritos('api/favoritos/insert', model);
    }

    public async getFavoritos(pageable: IPageable) {
        return await this._getFavoritos('api/favoritos/my-favoritos', pageable)
    }

    public async deleteFavorito(model: IFavoritos) {
        return await this._deleteFavorito('api/favoritos/delete', model)
    }

} 