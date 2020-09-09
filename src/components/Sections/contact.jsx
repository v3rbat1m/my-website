import React from "react";
import MyForm from "../Sections/common/contact/form";
import Info from "./common/contact/info";
import { simplifyInView } from "./../../utils/fadeIn";

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="section-header">Contact me!</h2>
      <div className="contact-content">
        {simplifyInView(<MyForm />, "left", "form")}
        {simplifyInView(<Info />, "right", "info")}
      </div>
    </div>
  );
};

export default Contact;
