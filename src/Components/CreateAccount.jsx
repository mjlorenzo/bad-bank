// this module exports a component for the CreateAccount page of the application

// import the necessary Bootstrap components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CreateAccount() {
  return (
    <Card>
      <h1>Create Account</h1>
      <form name="CreateAccount">
        <label for="name">Name:</label>
        <input type="text" id="name"></input>
        <label for="email">Email:</label>
        <input type="text" id="email"></input>
        <label for="password">Password:</label>
        <input type="password" id="password"></input>
        <Button type="submit">Create</Button>
      </form>
    </Card>
  );
}