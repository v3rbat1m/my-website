import React, { useState } from "react";
import { Link } from "react-scroll";
import { IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import myPhoto from "../photos/myPhoto.jpg";

const Sidebar = (props) => {
  // const [isOpen, setIsOpen] = useState(true);

  // const toggle = () => setIsOpen(!isOpen);

  const element = <FontAwesomeIcon icon={faCaretRight} size="lg" />;

  return (
    <nav className="nav">
      <img className="my-photo" src={myPhoto} />

      <IconButton
        className="icon"
        style={{ position: "absolute", left: "250px", top: "50vh" }}
      >
        {element}
      </IconButton>

      <div className="nav-content">
        <ul className="nav-items">
          {props.items.map((item) => (
            <li className="nav-item" key={item.name}>
              <Link
                activeClass="active"
                to={item.name}
                spy={false}
                smooth={true}
                offset={0}
                duration={500}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
