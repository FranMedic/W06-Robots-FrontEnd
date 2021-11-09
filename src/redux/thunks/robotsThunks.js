import axios from "axios";

import { createRobotAction, loadRobotsAction } from "../actions/actionCreators";

const urlApi = process.env.REACT_APP_API_URL;

export const loadRobotsThunk = () => async (dispatch) => {
  const { token } = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
  );
  console.log(token);
  const robots = await axios.get(urlApi, {
    headers: { Authorization: "Bearer " + token },
  });

  dispatch(loadRobotsAction(robots.data));
};

/*export const createRobotThunk = (robot) => async (dispatch) => {
  const response = await fetch(
    `https://robotos-franny-medic.herokuapp.com/robots/create?token=CATTOKEN`,
    {
      method: "POST",
      body: JSON.stringify(robot),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const newRobot = await response.json();

  dispatch(createRobotAction(newRobot));
};*/
export const createRobotThunk = (robot) => async (dispatch) => {
  const { token } = JSON.stringify(
    localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
  );
  const newRobot = await axios.post(
    `https://robotos-franny-medic.herokuapp.com/robots/create?token=CATTOKEN`,
    robot,
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
  dispatch(createRobotAction(newRobot.data));
};
