import React from "react";
import { useHistory } from "react-router-dom";
import backgroundImg from "../media/pages/landingPageImg.jpg";
import "../styles/pages/landingPage.scss";

const LandingPage = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/search");
  }

  return (
    <div className="landingPageContainer">
      <button className="CTA " onClick={handleClick}>
        <p>Time to Get Planting</p>
      </button>
      <img alt="timer" src={backgroundImg} />
    </div>
  );
};

export default LandingPage;
