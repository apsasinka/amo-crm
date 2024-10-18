import { screen, waitFor } from "@testing-library/react";
import { renderWithRouter } from "../../tests/helpers/renderWithRouter";
import userEvent from "@testing-library/user-event";
import NavBar from "./NavBar";

describe("NavBar Test", () => {
  test("Renders Link", async () => {
    renderWithRouter(<NavBar />);

    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");
    const usersLink = screen.getByTestId("users-link");

    userEvent.click(aboutLink);
    await waitFor(() =>
      expect(screen.getByTestId("about-page")).toBeInTheDocument()
    );

    userEvent.click(usersLink);
    await waitFor(() =>
      expect(screen.getByTestId("users-page")).toBeInTheDocument()
    );

    userEvent.click(mainLink);
    await waitFor(() =>
      expect(screen.getByTestId("main-page")).toBeInTheDocument()
    );
  });
});
