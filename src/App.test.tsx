import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<App />", () => {
  it("should display the welcome message", () => {
    const { getByText } = render(<App />);

    const welcomeMessage = getByText("Welcome to Pomodoro App!");

    expect(welcomeMessage).toBeInTheDocument();
  });
});
