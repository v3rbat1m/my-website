import React from "react";
import Bubble from "./common/experience/speechBubble";
import { getExperience } from "./../../services/fakeExperienceService";
import { InView } from "react-intersection-observer";
import { fadeInStyle, inViewProperties } from "./../../utils/fadeIn";

const Experience = () => {
  const experience = getExperience().reverse();
  let bubblePosition = "left";

  
  return (
    <div className="experience">
      <h2 className='section-header'>Experience.</h2>
      {experience.map((job) => {
        let prevBubblePos = bubblePosition;
        bubblePosition = bubblePosition === "left" ? "right" : "left";

        return (
          <InView
            key={job.position}
            {...inViewProperties}
          >
            {({ inView, ref, entry }) => (
              <div ref={ref} style={fadeInStyle(inView, prevBubblePos)}>
                <Bubble
                  position={job.position}
                  company={job.company}
                  workDuration={job.workDuration}
                  text={job.text}
                  bubblePosition={prevBubblePos}
                />
              </div>
            )}
          </InView>
        );
      })}
    </div>
  );
};

export default Experience;
