import AuthService from "../services/auth.service";
import { IFavoritos } from "../types/favoritos.types";
import { IPageable } from "../types/pageable.types";
import { IProduto } from "../types/product.types";
import { Api } from "./Api";

export default class CommonApi extends Api {
  constructor() {
    super();
    this.url = "http://localhost:8080";
  }

  authService = new AuthService();

  authorization = `Bearer ${this.authService.getUser() !== null
      ? this.authService.getUser()
      : ""
    }`;

  private handleError(error: any) {
    return Promise.reject(error.response)
  }

  //#region User
  protected async _login<T, U>(model: T, url: string): Promise<U> {
    try {
      
      return await this.axiosClient.post(`${this.url}` + url, model);
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  protected async _getDatas<T>(url: string): Promise<T> {
    try {
      return await this.axiosClient.get(`${this.url}` + url, {
        headers: {
          Authorization: this.authorization,
        },
      });
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  protected async _regiterUserBySelf<T>(model: T, url: string): Promise<T> {
    try {
      return await this.axiosClient.post(`${this.url}` + url, model);
    } catch (error: any) {
      return this.handleError(error);
    }
  }
  //#endregion
 
  //#region Produtos
  protected async _getProducts<T>(url: string, pageable: IPageable): Promise<T> {
    try {
      return await this.axiosClient.post(`${this.url}` + url, pageable.filters, {
        params: {
          page: pageable.currentPage, 
          size: pageable.pageSize
        }
      });
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  protected async _getProductById<T>(id: number, url: string): Promise<T> {
    try {
      
      return await this.axiosClient.get(`${this.url}/${url}/${id}`);
    } catch (error: any) {
      return this.handleError(error);
    }
  }
  //#endregion

  //#region Favoritos
  protected async _postFavoritos<T>(url: string, model: IFavoritos): Promise<T> {
    try {
      return await this.axiosClient.post(`${this.url}/${url}`, model);
    } catch (error: any) {
      return this.handleError(error);
    }
  }
  //#endregion
 
  //#region Categorias
  protected async _getCategorias<T>(url: string): Promise<T> {
    try {
      return await this.axiosClient.get(`${this.url}/${url}`);
    } catch (error: any) {
      return this.handleError(error);
    }
  }
  //#endregion

   //#region Categorias
   protected async _getMarcas<T>(url: string): Promise<T> {
    try {
      return await this.axiosClient.get(`${this.url}/${url}`);
    } catch (error: any) {
      return this.handleError(error);
    }
  }
  //#endregion


}