import { server } from "./mocks/server";
import App from "./App";
import { Provider } from "react-redux";
import { render, screen, waitFor } from "@testing-library/react";
import configureStore from "./redux/store";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given an App component", () => {
  describe("When its rendered", () => {
    test("then it should show the names of the robots loaded", async () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const stringToSearch = await screen.findByRole("heading", {
        name: "Manivela",
      });

      await waitFor(() => {
        expect(stringToSearch).toBeInTheDocument();
      });
    });
  });
});
