import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import UserLoginPage from "../components/UserLoginPage";
import App from "../App";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

const items = {};
jest.mock("react-native", () => ({
  AsyncStorage: {
    setItem: jest.fn((item, value) => {
      return new Promise((resolve, reject) => {
        items[item] = value;
        resolve(value);
      });
    }),
    getItem: jest.fn((item, value) => {
      return new Promise((resolve, reject) => {
        resolve(items[item]);
      });
    }),
    removeItem: jest.fn((item) => {
      return new Promise((resolve, reject) => {
        resolve(delete items[item]);
      });
    }),
  },
}));

jest.mock("react-native", () => ({
  StyleSheet: {
    create: jest.fn(),
  },
  Platform: {
    select: jest.fn(),
  },
  UIManager: {
    getViewManagerConfig: jest.fn(),
  },
  Animated: {
    createAnimatedComponent: jest.fn(),
  },
  I18nManager: {
    getConstants: jest.fn({ isRTL: 1 }),
  },
}));

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

  test("Navigate to QR Scanner upon clicking View Business Card", () => {
    render(<App />);

    const viewCardButton = screen.getByTestId("View-Card-Button");
    expect(viewCardButton).toBeOnTheScreen();
  });
});
