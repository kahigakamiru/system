import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  GET_USERS,
} from "../types";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import axios from "axios";

export const register =
  (firstname, lastname, email, password) => (dispatch) => {
    // const Navigate = useNavigate();
    return AuthService.register(firstname, lastname, email, password).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
        // Navigate("/sign-in");

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: REGISTER_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {
      console.log(data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};

export const getUsers = () => async (dispatch) => {
  try {
    let { data } = await axios.get("http://localhost:3300/api/auth/all");

    dispatch({
      type: GET_USERS,
      payload: data,
    });
  } catch (error) {}
};
