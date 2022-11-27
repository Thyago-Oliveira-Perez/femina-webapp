import CommonApi from "./Common.api";

export default class CategoriasApi extends CommonApi {
    constructor() {
        super();
    }

    public async getCategorias() {
        return await this._getCategorias('api/categorias');
    }
}