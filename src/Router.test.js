import App from "./App";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("Test routing", () => {
  test("router test", async () => {
    render(
      <MemoryRouter initialEntries={["/fjfjjfjf"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId("error-page")).toBeInTheDocument();

    // const mainLink = screen.getByTestId("main-link");
    // const aboutLink = screen.getByTestId("about-link");

    // userEvent.click(aboutLink);
    // await waitFor(() =>
    //   expect(screen.getByTestId("about-page")).toBeInTheDocument()
    // );

    // userEvent.click(mainLink);
    // await waitFor(() =>
    //   expect(screen.getByTestId("main-page")).toBeInTheDocument()
    // );
  });
});
