import React from "react";
import Bubble from "./common/education/speechBubble";
import { getEducation } from "./../../services/fakeEducationService";
import { fadeInStyle, inViewProperties } from "./../../utils/fadeIn";
import { InView } from "react-intersection-observer";

const Education = () => {
  const education = getEducation();
  let bubblePosition = "left";

  return (
    <div className="education">
      <h2 className='section-header'>Education.</h2>
      {education.map((item) => {
        let prevBubblePos = bubblePosition;
        bubblePosition = bubblePosition === "left" ? "right" : "left";

        return (
          <InView key={item.school} {...inViewProperties}>
            {({ inView, ref, entry }) => (
              <div ref={ref} style={fadeInStyle(inView, prevBubblePos)}>
                <Bubble
                  school={item.school}
                  graduation={item.graduation}
                  comment={item.comment}
                  bubblePosition={prevBubblePos}
                  subject={item.subject}
                />
              </div>
            )}
          </InView>
        );
      })}
    </div>
  );
};

export default Education;
