import axios from "axios";
import jwtDecode from "jwt-decode";
import { userLoginAction } from "../actions/actionCreators";

const urlApi = "https://robotos-franny-medic.herokuapp.com/";

const userLocal = process.env.REACT_APP_LOCAL_STORAGE;

export const userLoginThunk = (user) => async (dispatch) => {
  const response = await axios.post(urlApi + "users/login", user, {
    mode: "cors",
  });

  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token);
    dispatch(userLoginAction(user));

    localStorage.setItem(userLocal, JSON.stringify({ token: token }));
  }
};
