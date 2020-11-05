import React from "react";
import logo from "../landingPageImg.jpg";
import "../styles/landingPage.scss";

const LandingPage = () => {
  return (
    <div className="landingPageContainer">
      <button className="CTA " onClick={() => alert("Let's get to planting!")}>
        <p>Your Personal Green Thumb</p>
      </button>
      <img className="logo " src={logo} alt="logo" />
    </div>
  );
};

export default LandingPage;
