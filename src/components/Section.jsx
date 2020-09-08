import React from "react";

const Section = ({title, dark, id, content}) => {
  return (
    <div className={`section${dark ? " section-dark" : ""} section-${id}`}>
      <div className={`section-content section-content-${id}`} id={id}>
        {content}
      </div>
    </div>
  );
};

export default Section;
