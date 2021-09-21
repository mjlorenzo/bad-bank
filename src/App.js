// top level module defining our application

import { createContext } from "react";
import { HashRouter, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import CreateAccount from "./Components/CreateAccount";
import Deposit from "./Components/Deposit";
import Withdraw from "./Components/Withdraw";
import "./App.css";

// context for users database and current user
export const UserContext = createContext(null);

function App() {
  return (
    <div className="App">
      <HashRouter>
        <UserContext.Provider value={{ users: [], currentUser: null }}>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/createaccount" component={CreateAccount} />
          <Route path="/deposit" component={Deposit} />
          <Route path="/withdraw" component={Withdraw} />
          {/*<Route path="/login" component={Login} />
  <Route path="/alldata" component={AllData} />*/}
        </UserContext.Provider>
      </HashRouter>
    </div>
  );
}

export default App;
