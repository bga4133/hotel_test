import { SEND_INFO, DELETE_INFO } from "./types";

export const addInfoAction = info => ({
  type: SEND_INFO,
  payload: info
});

export const deleteInfoAction = info => ({
  type: DELETE_INFO,
  payload: info
});
