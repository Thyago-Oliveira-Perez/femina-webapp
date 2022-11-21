import CommonApi from "./Common.api";
import {IProduto} from "../types/product.types";

export default class ProdutoApi extends CommonApi {
    constructor() {
        super();
    }

    public async getProdutos( model: IProduto, page: string) {
        return await this._getProducts(model, `/api/produtos/list?page=${page}`);
    }
}