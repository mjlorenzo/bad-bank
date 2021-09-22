// this module implements the deposit functionality of the banking application

// import our React hooks
import { useState, useContext } from "react";

// import our React-Bootstrap components
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

// import our context
import { UserContext } from "./../App";

function Deposit({ addDeposit }) {
  // declare our state variable
  const [amount, setAmount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // grab our current user from the context
  const { currentUser } = useContext(UserContext);

  // handle input change
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setSubmitted(false);
  }

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // this isn't good practice!
    currentUser.balance += Number(amount);
    addDeposit(currentUser.name, currentUser.email, Number(amount));
    setAmount(0);
    setSubmitted(true);
  }

  return (
    <Card>
      <Card.Header>Deposit</Card.Header>
      {currentUser == null && (
        <Alert variant="danger">You must log in to make a deposit</Alert>
      )}
      {currentUser != null && (
        <Card.Body>
          <h3 className="p-2">{`Balance: $${currentUser.balance}`}</h3>
          {submitted && <Alert variant="success">Success! You've deposited into your account</Alert>}
          <Form>
            <Form.Group>
              <FloatingLabel controlId="deposit" label="Deposit">
                <Form.Control type="number" 
                  min={.01}
                  step={.01}
                  placeholder={0} 
                  onChange={handleAmountChange} />
              </FloatingLabel>
              <Button className="mt-3" type="submit" onClick={handleSubmit}>
                Deposit
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      )}
    </Card>
  );
}

export default Deposit;
