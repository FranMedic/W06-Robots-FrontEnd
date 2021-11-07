import { getFakeRobot, getFakeRobots } from "../../factories/robotsFactory";
import actionTypes from "../actions/actionTypes";
import robotsReducer from "./robotsReducer";

describe("Given a robotsReducer reducer", () => {
  describe("When it receives an empty robots list and a load action with 3 robots", () => {
    test("Then it should return a new robots list with the 3 robots received", () => {
      const robots = [];
      const robotsList = getFakeRobots();
      const action = {
        type: actionTypes.loadRobots,
        robots: robotsList,
      };

      const newRobots = robotsReducer(robots, action);

      expect(newRobots).toEqual(robotsList);
    });
  });

  describe("When it receives a robots list and a createaction with a newrobot", () => {
    test("then it should return a list of tasks with the new robot in it", () => {
      const robots = getFakeRobots();
      const oneRobot = getFakeRobot();
      const action = {
        type: actionTypes.createRobot,
        robot: oneRobot,
      };

      const newRobots = robotsReducer(robots, action);

      expect(newRobots).toContain(oneRobot);
    });
  });

  describe("When it receives a robots list and an unknown action", () => {
    test("Then it shoul return the received robots list", () => {
      const robots = getFakeRobots();
      const action = {
        type: "wololo",
      };

      const newRobots = robotsReducer(robots, action);

      expect(newRobots).toEqual(robots);
    });
  });
});
