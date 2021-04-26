import { loginRequest } from "../api/index";
const login = async (username: string, password: string) => {
  const token = await loginRequest(username, password);
  localStorage.setItem("token", token);
};

export default login;
