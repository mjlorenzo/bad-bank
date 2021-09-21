// this module exports a component for the CreateAccount page of the application

// import our React hooks
import { useState, useContext } from "react";

// import the necessary Bootstrap components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Alert from "react-bootstrap/Alert";

// grab our UserContext
import { UserContext } from "../App";

function CreateAccount() {
  // create our React state variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // retrieve our context
  const userContext = useContext(UserContext);

  // function to determine if the entire form is empty (or just contains whitespace)
  const isFormEmpty = () =>
    name.trim() == "" && email.trim() == "" && password.trim() == "";

  // handling name change
  const handleNameChange = (e) => {
    if (validated) setValidated(false);
    setName(e.target.value);
  };

  // handling email change
  const handleEmailChange = (e) => {
    if (validated) setValidated(false);
    setEmail(e.target.value);
  };

  // handling password change
  const handlePasswordChange = (e) => {
    if (validated) setValidated(false);
    setPassword(e.target.value);
  };

  // handling submit
  const onSubmit = (e) => {
    // prevent the browser default behavior
    e.preventDefault();

    // mark that we've validated the form
    setValidated(true);

    const form = e.currentTarget;
    // check if the form is in a valid state
    if (!form.checkValidity())
      // if not just return
      return;

    // now let's check if this email already exists in our "database"
    if (userContext.users.some((user) => user.email == email)) {
      // if so, let's set an error message and return
      setError(
        "An account for this email address already exists in our database"
      );
      return;
    }

    // otherwise now we're good to go, let's add a new user to our users array
    userContext.users = [
      ...userContext.users,
      {
        name,
        email,
        password,
      },
    ];

    // mark the form as successfully submitted
    setIsSubmitted(true);
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setIsSubmitted(false);
    setValidated(false);
    setError("");
  };

  return (
    <Card>
      <Card.Header>Create Account</Card.Header>
      <Card.Body>
        {!isSubmitted && (
          <>
            {error != "" && <Alert variant="danger">{error}</Alert>}
            <Form validated={validated}>
              <Form.Group className="mb-3" controlId="formName">
                <FloatingLabel controlId="name" label="Name">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    required
                    onChange={handleNameChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Name must not be blank
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <FloatingLabel controlId="email" label="Email">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    required
                    onChange={handleEmailChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email address
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <FloatingLabel controlId="password" label="Password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    minLength={8}
                    required
                    onChange={handlePasswordChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Passwords must be at least 8 characters
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Button type="submit" disabled={isFormEmpty()} onClick={onSubmit}>
                Create
              </Button>
            </Form>
          </>
        )}
        {isSubmitted && (
          <>
            <Alert variant="success">{`Congrats! A new account was created for ${email}`}</Alert>
            <Button onClick={clearForm}>Create Another Account</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default CreateAccount;
