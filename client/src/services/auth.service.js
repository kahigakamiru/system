import axios from "axios";

const API_URL = "http://localhost:3300/api/auth/";

const register = (firstname, lastname, email, password) => {
  console.log(firstname, lastname, email, password);
  return axios
    .post(API_URL + "register", {
      firstname,
      lastname,
      email,
      password,
    })
    .then((res) => {
      console.log(res.data);
    });
};

const login = (email, password) => {
  return axios
    .post(`${API_URL}login`, {
      email,
      password,
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
