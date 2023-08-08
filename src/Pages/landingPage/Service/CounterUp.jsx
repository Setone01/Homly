import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterUp = ({comment, start, end, duration}) => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
        <div className="flex justify-center text-primary items-center flex-col">
          <h1 className="text-2xl font-bold">
            {counterOn && <CountUp start={start} end={end} duration={duration} delay={0} />}+
          </h1>
          <span className="capitalize text-xs">{comment}</span>
        </div>
    </ScrollTrigger>
  );
};

export default CounterUp;
