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

  test("Login Form appears after pressing Log In Button", () => {
    //When styling is pushed to main, change buttons to pressables
    render(<UserLoginPage />);

    const loginButton = screen.getByTestId("Login-Button");
    expect(loginButton).toBeOnTheScreen();

    fireEvent(loginButton, "press");

    const usernameInput = screen.getByTestId("Username-Input");
    const passwordInput = screen.getByTestId("Password-Input");
    const loginSubmitButton = screen.getByTestId("Login-Submit-Button");

    expect(usernameInput).toBeOnTheScreen();
    expect(passwordInput).toBeOnTheScreen();
    expect(loginSubmitButton).toBeOnTheScreen();
  });

  test("Create Account Form appears after pressing Create Account Button", () => {
    //When styling is pushed to main, change buttons to pressables
    render(<UserLoginPage />);

    const createAccntButton = screen.getByTestId("Create-Account-Button");
    expect(createAccntButton).toBeOnTheScreen();

    fireEvent(createAccntButton, "press");

    const createUsernameInput = screen.getByTestId("Create-Username-Input");
    const createPasswordInput = screen.getByTestId("Create-Password-Input");
    const createAccntSubmitButton = screen.getByTestId("Create-Account-Submit");

    expect(createUsernameInput).toBeOnTheScreen();
    expect(createPasswordInput).toBeOnTheScreen();
    expect(createAccntSubmitButton).toBeOnTheScreen();
  });
});
