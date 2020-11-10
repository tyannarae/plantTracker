import React from "react";
import { useHistory } from "react-router-dom";
// import "../media/pages/landingPageImg.png";
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
      {/* <img alt="timer" src={require("../media/landingPageImg.jpg")} /> */}
      <img
        className="backgroundImg "
        src={
          "https://d2r55xnwy6nx47.cloudfront.net/uploads/2020/07/Photosynthesis_2880_Lede.jpg"
        }
        alt="backgroundImg"
      />
      {/* <img className="backgroundImg " src={backgroundImg} alt="backgroundImg" /> */}
    </div>
  );
};

export default LandingPage;
