import { HashRouter, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import CreateAccount from "./Components/CreateAccount";
import Deposit from "./Components/Deposit";
import Withdraw from "./Components/Withdraw";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/createaccount" component={CreateAccount} />
        <Route path="/deposit" component={Deposit} />
        <Route path="/withdraw" component={Withdraw} />
        {/*<Route path="/login" component={Login} />
        <Route path="/balance" component={Balance} />
  <Route path="/alldata" component={AllData} />*/}
      </HashRouter>
    </div>
  );
}

export default App;
