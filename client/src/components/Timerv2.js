import React, { useState } from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.25);
`;

const ProgressBar = styled.div`
  width: ${({ progress }) => `${progress}%`};
  height: 50px;
  background: dodgerblue;
`;

const Timerv2 = ({ initialMinutes = 0, initialSeconds = 5 }) => {
  const [time, setTime] = useState({
    m: initialMinutes,
    s: initialSeconds,
  });

  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    let myInterval = setInterval(() => {
      setTime((time) => {
        const updatedTime = { ...time };
        if (time.s > 0) {
          updatedTime.s--;
        }

        if (time.s === 0) {
          if (time.m === 0) {
            clearInterval(myInterval);
          } else if (time.m > 0) {
            updatedTime.m--;
            updatedTime.s = 59;
          }
        }

        return updatedTime;
      });
    }, 1000);
    setTimer(myInterval);
  };

  const restartTimer = () => {
    clearInterval(timer);
    setTime({
      m: initialMinutes,
      s: initialSeconds,
    });
  };

  return (
    <div>
      <h1 className="timer">
        {time.m === 0 && time.s === 0 ? (
          <>
            <h1>Game Over!</h1>
            <button onClick={restartTimer}>RESTART TIMER</button>
          </>
        ) : (
          <h1>
            Time Remaining: {time.m}:{time.s < 10 ? `0${time.s}` : time.s}
          </h1>
        )}
      </h1>
      <button onClick={startTimer}>START TIMER</button>
    </div>
  );
};

export default Timerv2;
