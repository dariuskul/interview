import Login from "../Login";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
describe("Login", () => {
  test("Login form should be in the document", () => {
    const component = render(<Login />);
    const usernameInput = component.getByPlaceholderText("Username");
    const passwordInput = component.getAllByPlaceholderText("Password");
    expect(passwordInput && usernameInput).toBeInTheDocument;
  });

  test("Username and password should accept text", () => {
    const { getByLabelText } = render(<Login />);

    const usernameInput = getByLabelText("username");
    const passwordInput = getByLabelText("password");
    expect(usernameInput.value).toEqual("");
    expect(passwordInput.value).toEqual("");

    fireEvent.change(usernameInput, { target: { value: "test" } });
    fireEvent.change(passwordInput, { target: { value: "testPassword" } });
    expect(usernameInput.value).toMatch("test");
    expect(passwordInput.value).toMatch("testPassword");
  });
});
