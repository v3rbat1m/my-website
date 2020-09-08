import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Info = () => {
  const phoneIcon = <FontAwesomeIcon icon={faPhoneSquareAlt} size="2x" />;
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} size="2x" />;
  const facebookIcon = <FontAwesomeIcon icon={faFacebook} size="2x" />;

  return (
    <div>
      <div className="address">
        <h3>Address</h3>
        <div className="content">
          <p>Lietuva, Vilnius, Pavilnio sodų 6-oji g. 10</p>
        </div>
      </div>
      <div className="contacts">
        <h3>Contacts</h3>
        <div className="content">
          <p>{emailIcon} k.krivicius@gmail.com</p>
          <p>{phoneIcon} + 370 609 07 803</p>
        </div>
      </div>
      <div className="social">
        <h3>Social</h3>
        <div className="content">{facebookIcon}</div>
      </div>
    </div>
  );
};

export default Info;
