import actionTypes from "./actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const createRobotAction = (robot) => ({
  type: actionTypes.createRobot,
  robot,
});

export const userLoginAction = (user) => ({
  type: actionTypes.userlogin,
  user,
});

export const userLogoutAction = () => ({
  type: actionTypes.userlogout,
});
