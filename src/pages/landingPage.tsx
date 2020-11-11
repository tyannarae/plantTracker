import React from "react";
import { useHistory } from "react-router-dom";
import backgroundImg from "../media/pages/testimg2.jpeg";
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
      <img alt="backgroundImg" src={backgroundImg} />
    </div>
  );
};

export default LandingPage;
