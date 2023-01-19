import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import UserLoginPage from "./components/UserLoginPage";

describe("User Login Screen", () => {
  // test("adds 1 + 2 to equal 3", () => {
  //   expect(1 + 3).toBe(3);
  // });

  test("Log In Button appears", () => {
    //When styling is pushed to main, change buttons to pressables
    render(<UserLoginPage />);

    const loginButton = screen.findByTestId("Login-Button");
    expect(loginButton).toBeOnTheScreen();
  });
});
