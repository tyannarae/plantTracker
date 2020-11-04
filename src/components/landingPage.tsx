import React from "react";
import logo from "../landingPageImg.jpg";
import "../styles/landingPage.scss";

const LandingPage = () => {
  return (
    <div className="landingPageContainer">
      <button className="CTA ">The Grass is Greener</button>
      <img className="logo " src={logo} alt="logo" />
    </div>
  );
};

export default LandingPage;
