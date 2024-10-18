import { counterSlice, decrement, increment } from "../counterReducer";

describe("counterReducer", () => {
  test("increment", () => {
    expect(counterSlice.reducer({ value: 0 }, increment())).toEqual({
      value: 1,
    });
  });

  test("decrement", () => {
    expect(counterSlice.reducer({ value: 34 }, decrement())).toEqual({
      value: 33,
    });
  });

  test("with empty state", () => {
    expect(counterSlice.reducer(undefined, increment())).toEqual({
      value: 1,
    });
    expect(counterSlice.reducer(undefined, decrement())).toEqual({
      value: -1,
    });
  });
});
