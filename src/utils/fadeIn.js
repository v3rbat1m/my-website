import React from 'react';
import { InView } from 'react-intersection-observer';

export function fadeInStyle(inView, side) {
  //Distance in percentage of view port
  const distance = 4;

  let transform;

  switch (side) {
    case "left":
      transform = `translate(-${distance}%, 0%)`;
      break;
    case "right":
      transform = `translate(${distance}%, 0%)`;
      break;
    case "bottom":
      transform = `translate(0%, ${distance}%)`;
      break;
    default:
      return "Cannot assign value to transform variable";
  }

  return {
    opacity: inView ? 1 : 0,
    transform: inView ? "translate(0%, 0%)" : transform,
    transition: "opacity 250ms ease-in, transform 400ms ease-in",
  };
}

export const inViewProperties = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px",
  triggerOnce: true,
};

export function simplifyInView(Component, side, className) {
  return (
    <InView {...inViewProperties}>
      {({ inView, ref, entry }) => (
        <div className={className} ref={ref} style={fadeInStyle(inView, side)}>
          {Component}
        </div>        
      )}
    </InView>
  );
}  

