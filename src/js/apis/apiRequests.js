import axios from "axios";
import { PARAMS } from "../utils/urls";

const axiosInstance = axios.create({ ...PARAMS });

export const userInfo = () =>
  axiosInstance.get("https://jsonplaceholder.typicode.com/todos/1");
