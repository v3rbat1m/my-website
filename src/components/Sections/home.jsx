import React from "react";
import Typical from "react-typical";

const Home = () => {
  return (
    <div className="home">
      <h1>I'm Karolis Šarskus</h1>
      Junior{" "}
      <Typical
        className="typical"
        steps={[
          "Front-End developer",
          1000,
          "Back-End developer",
          1000,
          "Full-Stack developer",
          1000,
        ]}
        loop={Infinity}
        wrapper="b"
      />
    </div>
  );
};

export default Home;
