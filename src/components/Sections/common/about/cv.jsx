import React from "react";

const CV = (props) => {
  return (
    <div>
      <h3 className="section-item-header">Professional profile</h3>
      <div className="cv-content">
        <p>{props.text}</p>
        <div className="buttons">
          <button
            className="btn btn-left btn-dark btn-lg"
            onClick={() => {
              alert("Sorry, not implemented yet.");
            }}
          >
            Download
          </button>
          <button
            className="btn btn-right btn-dark btn-lg"
            onClick={() => window.scrollTo({ top: 9999, behavior: "smooth" })}
          >
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
};

export default CV;
