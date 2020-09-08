import React from "react";

const Bubble = ({ position, company, workDuration, text, bubblePosition }) => {
  return (
    <div className={`experience-bubble speech-bubble-${bubblePosition}`}>
      <h5>{position}</h5>
      <h6>{company}</h6>
      <p>{workDuration}</p>
      <p>{text}</p>
    </div>
  );
};

export default Bubble;
