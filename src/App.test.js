import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Test APP", () => {
  test("renders learn react link", () => {
    render(<App />);
    const leadsTextElem = screen.getByTestId("input-value");
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/write text/i);

    expect(leadsTextElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test("HZ", async () => {
    render(<App />);
    // const missingElem = screen.queryByText(/test/i);
    const dataElem = await screen.findByText(/data/i);

    // expect(missingElem).toBeNull();
    expect(dataElem).toHaveStyle({ color: "red" });
  });

  test("Test for event listener", () => {
    render(<App />);

    const btn = screen.getByTestId("toggle-btn"); //когда мы получаем объект, то можем заметить, что у него нет каких-либо методов из формы. Для использования методов нам необходим специальный объект fireEvent

    expect(screen.queryByTestId("toggle-elem")).toBeNull();

    fireEvent.click(btn); //первым аргументом передаем необходимый элемент, а вторым может передать дополнительные опции
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
  });

  test("Input event", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/write text.../i);
    expect(screen.queryByTestId("input-value")).toContainHTML(""); //при помощи данного метода мы можем установить соответствие текста внутри HTML

    fireEvent.input(input, {
      target: { value: "123123" },
    });

    expect(screen.queryByTestId("input-value")).toContainHTML("123123");
  });
});
