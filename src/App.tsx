import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "./components/landingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap"
            rel="stylesheet"
          ></link>
        </header>
        <Link to="/">Landing Page</Link>
        <Link to="/nothing">nothing</Link>
      </div>
      <Route path="/" exact component={LandingPage}></Route>
    </Router>
  );
}

export default App;
