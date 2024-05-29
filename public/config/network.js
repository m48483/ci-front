// config/network.js
// 통신 http 데이터를 받아오고 넣는 작업을 할거다
//  url, method, body
// 자바스크립트

import axios from "axios";
//async 비동기 함수

export const api = async (url, method, body) => {
  axios.defaults.baseURL = `http://${window.location.host}:8080`;
  const res = await axios({
    url,
    method,
    data: body,
    headers: {
      Authorization: localStorage.getItem("id"),
    },
  });

  return res;
};
