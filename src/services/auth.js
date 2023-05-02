import axios from "axios";


//const BASE_URL = "http://localhost:5000";

export function signup(body) {
  const response = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body);
  return response;
}

export function signin(body) {
  const response = axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, body).catch((error) => {
    return error.response;
  });
  return response;
}

