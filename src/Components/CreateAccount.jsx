// this module exports a component for the CreateAccount page of the application

// import the necessary Bootstrap components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function CreateAccount() {
  return (
    <Card>
      <Card.Header>Create Account</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <FloatingLabel controlId="name" label="Name">
              <Form.Control type="text" placeholder="Name" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <FloatingLabel controlId="email" label="Email">
              <Form.Control type="email" placeholder="Email" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <FloatingLabel controlId="password" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CreateAccount;
