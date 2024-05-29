import { api } from "../config/network";

export const saveBoard = async (data) => {
  const res = await api("/api/boards", "post", data);
  return res;
};

export const getBoard = async () => {
  const res = await api("/api/boards", "get");
  return res;
};

export const delBoard = async () => {
  const res = await api("/api/boards", "delete");
  return res;
};

export const delByBoard = async (data) => {
  const res = await api("/api/boards/" + data, "delete");
  return res;
};
