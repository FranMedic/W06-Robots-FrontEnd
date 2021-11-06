import { getFakeRobots } from "../../factories/robotsFactory";
import { loadRobotsAction } from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given a load actionCreator", () => {
  describe("When it receives a list of robots", () => {
    test("then it should return a load type action with the robots received", () => {
      const robotsList = getFakeRobots();
      const expectedAction = {
        type: actionTypes.loadRobots,
        robots: robotsList,
      };

      const actionResult = loadRobotsAction(robotsList);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
