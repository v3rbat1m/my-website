import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Info = () => {
  const phoneIcon = <FontAwesomeIcon icon={faPhoneSquareAlt} size="2x" />;
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} size="2x" />;
  const facebookIcon = <FontAwesomeIcon icon={faFacebook} size="2x" />;
  const githubIcon = <FontAwesomeIcon icon={faGithub} size="2x" />;
  const instagramIcon = <FontAwesomeIcon icon={faInstagram} size="2x" />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedinIn} size="2x" />;

  return (
    <div>
      <div className="address">
        <h3  className='section-item-header'>Address</h3>
        <div className="content">
          <p>Lietuva, Vilnius, Pavilnio sodų 6-oji g. 10</p>
        </div>
      </div>
      <div className="contacts">
        <h3  className='section-item-header'>Contacts</h3>
        <div className="content">
          <p>{emailIcon} k.krivicius@gmail.com</p>
          <p>{phoneIcon} + 370 609 07 803</p>
        </div>
      </div>
      <div className="social">
        <h3  className='section-item-header'>Social</h3>
        <div className="content">
          <a href="https://www.facebook.com/karolis.sarskus/">{facebookIcon}</a>
          <a href="https://github.com/v3rbat1m">{githubIcon}</a>
          <a href="https://www.instagram.com/karol1sss/?hl=en">
            {instagramIcon}
          </a>
          <a href="https://linkedin.com/in/karolis-šarskus-2b22231a1">
            {linkedinIcon}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
