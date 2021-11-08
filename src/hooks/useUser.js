import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../redux/actions/actionCreators";
import { userLoginThunk } from "../redux/thunks/userThunks";

const useUser = () => {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const login = (user) => {
    dispatch(userLoginThunk(user));
  };
  const logout = () => {
    dispatch(userLogoutAction());
  };

  return {
    user,
    login,
    logout,
  };
};

export default useUser;
