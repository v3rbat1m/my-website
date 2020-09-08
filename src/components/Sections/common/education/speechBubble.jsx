import React from "react";

const Bubble = ({ school, graduation, comment, bubblePosition, subject }) => {
  return (
    <div className={`education-bubble speech-bubble-${bubblePosition} ${subject}`}>
      <h5>{school}</h5>
      <h6>{graduation}</h6>
      <p>{comment}</p>
    </div>
  );
};

export default Bubble;
