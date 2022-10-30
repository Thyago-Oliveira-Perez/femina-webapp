import axios, { AxiosInstance } from "axios";
import {AuthContext} from "../context/AuthContext";
import { useContext } from "react";

export class Api{
  url = "http://localhost:8080/api";

  axiosClient: AxiosInstance = axios.create({
    baseURL: this.url,
    headers: {"Content-type": "application/json"},
  })
 
}