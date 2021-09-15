import { HashRouter, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Route path="/" exact component={Home} />
        {/*<Route path="/createaccount" component={CreateAccount} />
        <Route path="/login" component={Login} />
        <Route path="/deposit" component={Deposit} />
        <Route path="/withdraw" component={Withdraw} />
        <Route path="/balance" component={Balance} />
  <Route path="/alldata" component={AllData} />*/}
      </HashRouter>
    </div>
  );
}

export default App;
