// login page component

// React hooks
import { useState, useContext } from "react";

// React Bootstrap components
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

// page wrapper
import PageCard from "./PageCard";

// context
import { UserContext } from "../App";

function Login({ setCurrentUser }) {
  // state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // grab our context
  const context = useContext(UserContext);

  // input handlers
  const handleEmailChange = (e) => {
    if (error) setError("");
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    if (error) setError("");
    setPassword(e.target.value);
  };

  // submit handler
  const handleSubmit = (e) => {
    // pesky browser
    e.preventDefault();
    // a little string clean up
    const rawEmail = email.trim();
    const rawPassword = password.trim();

    // define our error message
    const errorMessage =
      "The provided username and password do not match our records";

    // look for the email in our "database"
    const user = context.users.find((user) => user.email === rawEmail);

    // if the user wasn't found, or it was but the password doesn't match
    if (!user || user.password !== rawPassword) {
      // set the error message and we're done here
      setError(errorMessage);
      return;
    }

    // otherwise, we've got our dude
    setCurrentUser(user);
    setSuccess(true);
  };

  return (
    <PageCard header="Log In">
      {!success && !context.currentUser && (
        <>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group className="mb-3">
              <FloatingLabel controlId="email" label="Email">
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={handleEmailChange}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel controlId="password" label="Password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                />
              </FloatingLabel>
            </Form.Group>
            <Button type="submit" onClick={handleSubmit}>Log In</Button>
          </Form>
        </>
      )}
      {success && <Alert variant="success">{`Thanks for logging in ${context.currentUser.name}`}</Alert>}
    </PageCard>
  );
}

export default Login;
