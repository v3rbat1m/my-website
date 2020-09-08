import React from "react";
import BasicInfo from "./common/about/basicInfo";
import CV from "./common/about/cv";
import Interests from "./common/about/interests";
import { simplifyInView } from "./../../utils/fadeIn";

const AboutMe = () => {
  const cvText = `Looking for a junior Front-End/Back-End/Full-Stack job or internship position.`;

  return (
    <div className="about">
      <h2 className="section-header">About me!</h2>
      <div className="content">
        {simplifyInView(<BasicInfo />, "left", "basic-info")}
        {simplifyInView(<CV text={cvText} />, "right", "cv")}
        {simplifyInView(<Interests />, "bottom", "interests")}
      </div>
    </div>
  );
};

export default AboutMe;
