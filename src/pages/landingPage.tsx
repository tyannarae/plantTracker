import React from "react";
import { useHistory } from "react-router-dom";
import backgroundImg from "../media/pages/landingPageImg.jpg";
import "../styles/pages/landingPage.scss";

const LandingPage = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <div className="landingPageContainer">
      <button className="CTA " onClick={handleClick}>
        <p>Time to Get Planting</p>
      </button>
      <img className="backgroundImg " src={backgroundImg} alt="backgroundImg" />
    </div>
  );
};

export default LandingPage;
