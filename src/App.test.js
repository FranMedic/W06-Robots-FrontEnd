import { server } from "./mocks/server";
import App from "./App";
import { Provider } from "react-redux";
import { render, screen, waitFor } from "@testing-library/react";
import configureStore from "./redux/store";

import userEvent from "@testing-library/user-event";

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

  describe("When the user types robot information and clicks on submit", () => {
    test.skip("Then the new robot should be rendered", async () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const nameInput = screen.getByPlaceholderText("Name");
      const imageInput = screen.getByPlaceholderText("Image");
      const dateInput = screen.getByLabelText("Creation date");
      const velocidadInput = screen.getByPlaceholderText("Velocity");
      const resistenciaInput = screen.getByPlaceholderText("Resistance");

      userEvent.type(nameInput, "textodeejemplo");
      userEvent.type(imageInput, "test");
      userEvent.type(dateInput, "0");
      userEvent.type(velocidadInput, "0");
      userEvent.type(resistenciaInput, "0");

      const addButton = screen.getByRole("button");
      userEvent.click(addButton);

      await waitFor(() => {
        const text = screen.queryByText("textodeejemplo");
        expect(text).toBeInTheDocument();
      });
    });
  });
});
