import CommonApi from "./Common.api";
import {IProduto} from "../types/product.types";
import { IPageable } from "../types/pageable.types";

export default class ProdutoApi extends CommonApi {
    constructor() {
        super();
    }

    public async getProdutos(pageable: IPageable) {
        return await this._getProducts(`/api/produtos/catalogo/list`,pageable);
    }

    public async getProdutoById(id: string) {
        return await this._getProductById(id, 'api/produtos/catalogo')
    }
}