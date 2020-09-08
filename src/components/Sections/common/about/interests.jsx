import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";
import { faChess } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

const Interests = () => {
  const icons = [
    { label: "Sports", icon: faVolleyballBall },
    { label: "Board games", icon: faChess },
    { label: "Travel", icon: faPlane },
    { label: "Reading", icon: faBookOpen },
    { label: "Video games", icon: faGamepad },
  ];

  return (
    <div>
      <h3 className="section-item-header">My interests</h3>
      <div className="icons">
        {icons.map((item) => (
          <div style={{display: 'flex'}}>
            <h5>{item.label}</h5>
            <FontAwesomeIcon icon={item.icon} size="2x" style={{marginLeft: '0.5em'}} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
