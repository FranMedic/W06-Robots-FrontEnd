import axios from "axios";
import { loadRobotsAction } from "../actions/actionCreators";

const urlApi = process.env.REACT_APP_API_URL;

export const loadRobotsThunk = () => async (dispatch) => {
  const robots = await axios.get(urlApi);

  dispatch(loadRobotsAction(robots.data));
};
