// this module implements the withdrawal functionality of the banking application

// import our hooks
import { useState, useContext } from "react";

// import React-Bootstrap components
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

// import our context
import { UserContext } from './../App';

// page wrapper
import PageCard from "./PageCard";

function Withdraw({ addWithdrawal }) {

  // create our state variables
  const [ amount, setAmount ] = useState(0);
  const [ submitted, setSubmitted ] = useState(false);

  // grab our logged in user
  const { currentUser } = useContext(UserContext);

  // handle input change
  const handleAmountChange = (e) => {
    setSubmitted(false);
    setAmount(e.target.value);
  }

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    currentUser.balance -= Number(amount);
    addWithdrawal(currentUser.name, currentUser.email, Number(amount))
    setAmount(0);
    setSubmitted(true);
  }

  return (
    <PageCard header="Withdraw">
            {currentUser == null && (
        <Alert variant="danger">You must log in to make a withdrawal</Alert>
      )}
      {currentUser != null && <>
        <h3 className="p-2">{`Balance: $${currentUser.balance}`}</h3>
          {submitted && <Alert variant="success">Success! You've withdrawn from your account</Alert>}
          <Form>
            <Form.Group>
              <FloatingLabel controlId="withdraw" label="Withdraw">
                <Form.Control type="number" 
                  min={.01}
                  step={.01}
                  placeholder={0} 
                  onChange={handleAmountChange} />
              </FloatingLabel>
              <Button className="mt-3" type="submit" onClick={handleSubmit}>
                Withdraw
              </Button>
            </Form.Group>
          </Form>
      </>} 
    </PageCard>
    )

export default Withdraw;
