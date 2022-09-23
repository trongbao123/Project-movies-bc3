// những gì kết nối vs be
import axios from "axios";
import { DOMAIN, TOKEN, TOKEN_CYBER } from "../util/setting/config";

export class baseService {
  put = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "PUT",
      data: model,
      headers: {
        Authorization: `Bearer ${TOKEN}` + localStorage.getItem(TOKEN),
        TokenCybersoft: TOKEN_CYBER,
      },
    });
  };
  post = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "POST",
      data: model,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem(TOKEN),
        TokenCybersoft: TOKEN_CYBER,
      },
    });
  };
  get = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "GET",
      data: model,
      headers: {
        Authorization: `Bearer ${TOKEN}` + localStorage.getItem(TOKEN),
        TokenCybersoft: TOKEN_CYBER,
      },
    });
  };
  delete = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "DELETE",
      data: model,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem(TOKEN),
        TokenCybersoft: TOKEN_CYBER,
      }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };
}
