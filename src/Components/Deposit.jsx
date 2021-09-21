// this module implements the deposit functionality of the banking application

// import our React-Bootstrap components
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

function Deposit() {
  return (
    <Card>
      <Card.Header>Deposit</Card.Header>
      <Card.Body>
        <h3 className="p-2">Balance</h3>
        <Form>
          <Form.Group>
            <FloatingLabel controlId="deposit" label="Deposit">
              <Form.Control type="number" placeholder={0} />
            </FloatingLabel>
            <Button className="mt-3" type="submit">Deposit</Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Deposit;
