import { useDispatch, useSelector } from "react-redux";

const useUser = () => {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const userLogin = () => {};
};
