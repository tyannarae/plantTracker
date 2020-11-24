import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/pages/landingPage";
import SearchPage from "./components/pages/searchPage";
import reportWebVitals from "./reportWebVitals";
import UserCollections from "./components/pages/userCollection";
import "./styles/global/app.scss";

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
      </div>
      <Route path="/search" component={SearchPage}></Route>
      <Route exact path="/" component={LandingPage}></Route>
      <Route exact path="/collections" component={UserCollections}></Route>
    </Router>
  );
}

reportWebVitals();
export default App;
