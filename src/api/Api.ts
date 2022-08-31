import axios, { AxiosInstance } from "axios";

export class Api{
  url = "";

  axiosClient: AxiosInstance = axios.create({
    baseURL: this.url,
    headers: {"Content-type": "application/json"}
  })

}