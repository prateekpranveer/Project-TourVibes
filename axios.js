import axios from "axios";

const baseURL = `https://tour-api-production-end.up.railway.app/`;

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL: `${baseURL}`
});

export default instance;