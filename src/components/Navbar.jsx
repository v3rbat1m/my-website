import React, { useState } from "react";
import { Link } from "react-scroll";
import { IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import myPhoto from "../photos/myPhoto.jpg";

const Sidebar = (props) => {
  const element = <FontAwesomeIcon icon={faCaretRight} size="lg" />;

  return (
    <nav className="nav">
      <img className="my-photo" src={myPhoto} />

      <button
        className="btn icon"
        style={{ position: "absolute", left: "240px", top: "50vh" }}
      >
        {element}
      </button>

      <div className="nav-content">
        <ul className="nav-items">
          {props.items.map((item) => {
            return (
              <li className="nav-item" key={item.name}>
                <Link
                  activeClass="active"
                  to={item.name === "home" ? "section-home" : item.name}
                  spy={false}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
