import React from "react";
import { useHistory } from "react-router-dom";
import backgroundImg from "../media/landingPageImgs/landingPageImg.jpeg";
import "../styles/pages/landingPage.scss";

const LandingPage = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/search");
  }

  return (
    <div>
      {" "}
      <div className="landingPageContainer">
        <button className="CTA " onClick={handleClick}>
          <p>Time to Get Planting</p>
        </button>
        <img
          className="backgroundImg"
          alt="backgroundImg"
          src={backgroundImg}
        />
      </div>
    </div>
  );
};

export default LandingPage;
