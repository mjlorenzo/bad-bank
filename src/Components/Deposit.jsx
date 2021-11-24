// this module implements the deposit functionality of the banking application

// import our React hooks
import { useState, useContext } from "react";

// import our React-Bootstrap components
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

// import our context
import { UserContext } from "./../App";
import PageCard from "./PageCard";

function Deposit({ addDeposit }) {
  // declare our state variable
  const [amount, setAmount] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);

  // grab our current user from the context
  const { currentUser } = useContext(UserContext);

  // handle input change
  const handleAmountChange = (e) => {
    setAmount(Number(e.target.value));
    if (submitted) setSubmitted(false);
    if (validated) setValidated(false);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setValidated(true);

    const form = e.currentTarget;
    // check if the input is valid
    if (!form.checkValidity())
      // if it isn't valid, just return
      return;

    // this isn't good practice!
    currentUser.balance += Number(amount);
    addDeposit(currentUser.name, currentUser.email, Number(amount));
    setSubmitted(true);
  };

  const isFormEmpty = () => {
    return !amount;
  }

  return (
    <PageCard header="Deposit">
      {currentUser == null && (
        <Alert variant="danger">You must log in to make a deposit</Alert>
      )}
      {currentUser != null && (
        <>
          <h3 className="p-2">{`Balance: $${currentUser.balance}`}</h3>
          {submitted && (
            <Alert variant="success">
              Success! You've deposited into your account
            </Alert>
          )}
          <Form noValidate validated={validated} onSubmit={handleSubmit} >
            <Form.Group>
              <FloatingLabel controlId="deposit" label="Deposit">
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
            </Form.Group>
            <Button className="mt-3" type="submit" disabled={isFormEmpty()}>
              Deposit
            </Button>
          </Form>
        </>
      )}
    </PageCard>
  );
}

export default Deposit;
