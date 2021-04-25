
import { useHistory } from "react-router";
import { API, Routes } from "~/constants";
import getUrl from "~/utils/getUrl";
const logout = async() => {

    const url = getUrl(API.Logout);
    const response = await fetch(url, {
     headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
      localStorage.removeItem('token')
      return response;
};

export default logout;