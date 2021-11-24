// defines the Home page of our application

import { useContext } from "react";

import Card from "react-bootstrap/Card";

import Logo from "../img/bank.png";

import { UserContext } from "../App";

function Home() {
  const { currentUser } = useContext(UserContext);

  return (
    <Card className="p-5">
      <Card.Body>
        <h2>Welcome to Bad Bank</h2>
        <Card.Img src={Logo} />
        {!currentUser && (
          <h4>Please create an account or log in to continue</h4>
        )}
        {currentUser && (
          <h4>
            {`Hello ${currentUser.name}. Use the navigation links above to manage
            your account`}
          </h4>
        )}

      </Card.Body>
    </Card>
  );
}

export default Home;
