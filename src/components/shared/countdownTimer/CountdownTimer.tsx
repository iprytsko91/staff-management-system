import { useEffect, useState } from "react";

interface CountdownTimerProps {
  initSeconds: number,
  step?: number,
  timesOut?: Function
}

export const CountdownTimer = ({
                                 initSeconds,
                                 step = 1000,
                                 timesOut = () => {
                                 }
                               }: CountdownTimerProps) => {
  const [seconds, setSeconds] = useState(initSeconds);

  useEffect(() => {
    if (seconds <= -1) { // -1 because want to see `0 seconds` before close
      timesOut();
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, step);

    return () => {
      clearInterval(timer);
    }
  }, [seconds]); // TODO: how about make it without recursion.

  return <>{seconds}</>;
}
