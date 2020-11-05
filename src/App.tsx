import React from "react";
import "./App.scss";
import LandingPage from "./components/landingPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </header>
      <LandingPage />
    </div>
  );
}

export default App;
