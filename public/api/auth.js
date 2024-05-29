import { api } from "../config/network";

export const saveBoard = async (data) => {
  const res = await axios({
    url: "/api/boards",
    method: "post",
    data: data,
    headers: {
      Authorization: localStorage.getItem("id"),
    },
  });

  return res;
};

export const getBoard = async () => {
  const res = await axios({
    url: "/api/boards",
    method: "get",
    data: data,
    headers: {
      Authorization: localStorage.getItem("id"),
    },
  });

  return res;
};

export const delBoard = async () => {
  const res = await axios({
    url: "/api/boards",
    method: "delete",
    data: data,
    headers: {
      Authorization: localStorage.getItem("id"),
    },
  });

  return res;
};

export const delByBoard = async (boardId) => {
  const res = await axios({
    url: `/api/boards/${boardId}`,
    method: "delete",
    headers: {
      Authorization: localStorage.getItem("id"),
    },
  });

  return res;
};
