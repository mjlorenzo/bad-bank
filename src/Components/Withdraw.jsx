// this module implements the withdrawal functionality of the banking application

// import our hooks
import { useState, useContext } from "react";

// import React-Bootstrap components
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

// import our context
import { UserContext } from "./../App";

// page wrapper
import PageCard from "./PageCard";

function Withdraw({ addWithdrawal }) {
  // create our state variables
  const [amount, setAmount] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");

  // grab our logged in user
  const { currentUser } = useContext(UserContext);

  // handle input change
  const handleAmountChange = (e) => {
    if (submitted) setSubmitted(false);
    if (validated) setValidated(false);
    if (error) setError("");
    setAmount(Number(e.target.value));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentUser.balance < Number(amount)) {
      setError("You cannot withdraw more than your account balance");
      return;
    }

    setValidated(true);
    const form = e.currentTarget;
    if (!form.checkValidity())
      return;

    currentUser.balance -= Number(amount);
    addWithdrawal(currentUser.name, currentUser.email, Number(amount));
    setAmount(0);
    setSubmitted(true);
  };

  const isFormEmpty = () => !amount;

  return (
    <PageCard header="Withdraw">
      {currentUser == null && (
        <Alert variant="danger">You must log in to make a withdrawal</Alert>
      )}
      {currentUser != null && (
        <>
          <h3 className="p-2">{`Balance: $${currentUser.balance}`}</h3>
          {submitted && (
            <Alert variant="success">
              Success! You've withdrawn from your account
            </Alert>
          )}
          {error && (
            <Alert variant="danger">
              {error}
            </Alert>
          )}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
              <FloatingLabel controlId="withdraw" label="Withdraw">
                <Form.Control
                  type="number"
                  min={0.01}
                  step={0.01}
                  placeholder={0}
                  onChange={handleAmountChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid number greater than 0
                </Form.Control.Feedback>
              </FloatingLabel>
              <Button className="mt-3" type="submit" disabled={isFormEmpty()}>
                Withdraw
              </Button>
            </Form.Group>
          </Form>
        </>
      )}
    </PageCard>
  );
}

export default Withdraw;
