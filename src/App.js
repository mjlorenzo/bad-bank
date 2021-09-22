// top level module defining our application

import React, { useState, createContext } from "react";
import { Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import CreateAccount from "./Components/CreateAccount";
import Deposit from "./Components/Deposit";
import Withdraw from "./Components/Withdraw";
import AllData from "./Components/AllData";
import Login from "./Components/Login";
import "./App.css";

// context for users database and current user
export const UserContext = createContext(null);

function App() {

  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const addUser = (name, email, password, balance = 0) => {
    setUsers([...users, { name, email, password, balance }]);
  }

  const addTransaction = (type, name, email, amount) => {
    setTransactions([...transactions, { type, name, email, amount }]);
  }

  const addDeposit = addTransaction.bind(null, "Deposit");
  const addWithdrawal = addTransaction.bind(null, "Withdrawal");

  return (
    <div className="App">
      <React.StrictMode>
        <UserContext.Provider value={{ users, currentUser, transactions }}>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/createaccount">
            <CreateAccount addUser={addUser} />
          </Route>
          <Route path="/deposit">
            <Deposit addDeposit={addDeposit} />
          </Route>
          <Route path="/withdraw">
            <Withdraw addWithdrawal={addWithdrawal} />
          </Route>
          <Route path="/alldata" component={AllData} />
          <Route path="/login">
            <Login setCurrentUser={setCurrentUser} />
          </Route>
        </UserContext.Provider>
      </React.StrictMode>
    </div>
  );
}

export default App;
