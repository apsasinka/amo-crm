import {
  render,
  screen,
  fireEvent,
  findAllByTestId,
  waitFor,
} from "@testing-library/react";
import { act } from "react";
import Users from "./Users";

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
    await act(async () => {
      render(<Users />);
    });

    // await waitFor(() => {
    //   expect(screen.getByText("User 1")).toBeInTheDocument();
    //   expect(screen.getByText("User 2")).toBeInTheDocument();
    // });
    // или

    const users = await waitFor(() => screen.findAllByTestId("user-item"));

    expect(users.length).toBe(2);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
  });
});
