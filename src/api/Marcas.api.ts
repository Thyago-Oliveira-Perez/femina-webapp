import CommonApi from "./Common.api";

export default class MarcasApi extends CommonApi {
    constructor() {
        super();
    }

    public async getMarcas() {
        return await this._getMarcas('api/marcas');
    }
}