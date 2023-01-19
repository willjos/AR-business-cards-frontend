import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import UserLoginPage from "./components/UserLoginPage";

describe("User Login Screen", () => {
  test("Log In Button appears", () => {
    //When styling is pushed to main, change buttons to pressables
    render(<UserLoginPage />);
    const loginButton = screen.getByTestId("Login-Button");
    expect(loginButton).toBeOnTheScreen();
  });

  test("Create Account Button appears", () => {
    //When styling is pushed to main, change buttons to pressables
    render(<UserLoginPage />);
    const createAccntButton = screen.getByTestId("Create-Account-Button");
    expect(createAccntButton).toBeOnTheScreen();
  });

  test("View Business Card Button appears", () => {
    //When styling is pushed to main, change buttons to pressables
    render(<UserLoginPage />);
    const viewCardButton = screen.getByTestId("View-Card-Button");
    expect(viewCardButton).toBeOnTheScreen();
  });
});
