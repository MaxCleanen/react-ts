import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body/index.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/footer">Footer</Link>
              </li>
              <li>
                <Link to="/body">Body</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/footer">
              <Footer />
            </Route>
            <Route path="/body">
              <Body />
            </Route>
            <Route path="/">
              <Header />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
