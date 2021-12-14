import React from "react";

import { render, cleanup } from "@testing-library/react";

import Appointment from "components/Appointment";
afterEach(cleanup);

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });

  ///////////////EXAMPLES/////////////////

  it("Doesn't call the function", () => {
    const fn = jest.fn();

    expect(fn).toHaveBeenCalledTimes(0);
  });

  it("calls the function", () => {
    const fn = jest.fn();

    fn();

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("calls the function with specific arguements", () => {
    const fn = jest.fn();

    fn(10);

    expect(fn).toHaveBeenCalledWith(10);
  });
});
