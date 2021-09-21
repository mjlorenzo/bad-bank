// this module implements the withdrawal functionality of the banking application

// import React-Bootstrap components
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

function Withdraw() {
  return (
    <Card>
      <Card.Header>Withdraw</Card.Header>
      <Card.Body>
        <h3 className="p-2">Balance</h3>
        <Form>
          <Form.Group>
            <FloatingLabel controlId="withdraw" label="Withdraw">
              <Form.Control type="number" placeholder={0} />
            </FloatingLabel>
            <Button className="mt-3" type="submit">
              Withdraw
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Withdraw;
