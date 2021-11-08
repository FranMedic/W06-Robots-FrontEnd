import { render, screen } from "@testing-library/react";

import RobotList from "./RobotList";
import configureStore from "../../redux/store/index";
import { Provider } from "react-redux";

import { server } from "../../mocks/server";
import { getFakeRobots } from "../../factories/robotsFactory";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

const robots = getFakeRobots();

describe("Given a RobotList component", () => {
  describe("When it is called", () => {
    test("Then it should render a list", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <RobotList robots={robots} />
        </Provider>
      );

      const robotList = screen.getByRole("list");

      expect(robotList).toBeInTheDocument();
    });
  });
});
