// contains the tests necessary for the CreateAccount component

// import render from the testing library
import { render } from "@testing-library/react";
// import our component
import CreateAccount from "./CreateAccount";

test("Renders necessary components", () => {
  // render our component and get our queries
  const { container, getByText, getByLabelText } = render(<CreateAccount />);

  // test conditions
  expect(getByText("Create Account")).toBeInTheDocument();
  expect(getByLabelText("Name:")).toBeInTheDocument();
  expect(getByLabelText("Email:")).toBeInTheDocument();
  expect(getByLabelText("Password:")).toBeInTheDocument();
});