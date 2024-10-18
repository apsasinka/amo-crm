import {
  render,
  screen,
  fireEvent,
  findAllByTestId,
  waitFor,
} from "@testing-library/react";
import { act } from "react";
import Users from "./Users";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import UserDetailPage from "../pages/UserDetailPage";

beforeEach(() => {
  //важно поместить наш мок в данную конструкцию для корректной работы
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          { id: 1, name: "User 1" },
          { id: 2, name: "User 2" },
        ]),
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Users test", () => {
  test("Render userlist", async () => {
    render(<Users />);

    // await waitFor(() => {
    //   expect(screen.getByText("User 1")).toBeInTheDocument();
    //   expect(screen.getByText("User 2")).toBeInTheDocument();
    // });
    // или

    const users = await screen.findAllByTestId("user-item");

    expect(users.length).toBe(2);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
  });

  test("Test redirect to details page", async () => {
    render(
      <MemoryRouter initialEntries={["/users"]}>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<UserDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    const users = await screen.findAllByTestId("user-item");
    userEvent.click(users[0]);
    await waitFor(() =>
      expect(screen.getByTestId("user-page")).toBeInTheDocument()
    );
  });
});
