import { logoutRequest } from "~/api/index";
const logout = async () => {
  try {
    await logoutRequest();
    localStorage.removeItem("token");
  } catch (error) {
    alert(error.message);
  }
};

export default logout;
