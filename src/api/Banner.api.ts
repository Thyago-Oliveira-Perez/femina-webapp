import { IBannersGet } from "../types/banners.types";
import { IPageable } from "../types/pageable.types";
import CommonApi from "./Common.api";

export default class FavoritosApi extends CommonApi {
    constructor() {
        super();
    }

    public async getBanners(type: string) {
        return await this._getBanners(`api/banners`, type)
    }
} 