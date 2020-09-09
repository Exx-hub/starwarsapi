import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import GlobalContextProvider from "./contexts/GlobalContextProvider";

import NavBarr from "./components/NavBarr";
import Home from "./components/Home";
import People from "./components/People";
import Planets from "./components/Planets";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalContextProvider>
          <NavBarr />
          <Container>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/people" component={People}></Route>
              <Route exact path="/planets" component={Planets}></Route>
            </Switch>
          </Container>
        </GlobalContextProvider>
      </Router>
    </div>
  );
}

export default App;
