import { API } from "../constants";
import { IItem } from "../types/item";
import getUrl from "../utils/getUrl";

export const fetchItemsRequest = async (
  userId?: string
): Promise<Array<IItem>> => {
  const url = getUrl(API.Items, {
    userId,
  });
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (response.status > 400) throw new Error("Not authorised");

  const data = await response.json();

  return data.items;
};

export const loginRequest = async (username: string, password: string) => {
  const url = getUrl(API.Login, {
    username,
    password,
  });

  const response = await fetch(url);
  if (response.status > 400) {
    throw new Error("Credentials invalid");
  }
  const data = await response.json();
  const { token } = data;

  return token;
};

export const logoutRequest = async () => {
  const url = getUrl(API.Logout);
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const getUserInfo = async () => {
  const response = await fetch(getUrl(API.User), {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();

  return data;
};

export const updateRequest = async (item: IItem) => {
  const response = fetch(getUrl(API.Items), {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return await response;
};
