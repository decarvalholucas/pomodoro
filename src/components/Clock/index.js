import React, { useState } from "react";

import { Time, ClockContainer, ButtonsContainer, ClockMessage } from "./styles";
import { FaPlay, FaPause, FaRedoAlt } from "react-icons/fa";
import Song from "../../assets/song.mp3";

function Clock() {
  const dataTimeInitial = {
    minute: 25,
    second: 0,
    intervalTime: null,
    isRunning: false,
    working: false,
    sleeping: false,
    message: "Start your work by clicking the play button!",
  };

  const [time, setTime] = useState({ ...dataTimeInitial });

  const timeUpdatedOnRunning = ({ minute, second, working, intervalTime }) => {
    if (minute <= 0 && second <= 0 && working) {
      playMusicWhenTimeIsOver();
      return sleeping(intervalTime);
    }
    if (second <= 0) {
      minute = minute - 1;
      second = 60;
    }
    second = second - 1;
    return { minute, second };
  };

  const play = () => {
    if (time.isRunning) return;
    const interval = setInterval(() => {
      setTime((oldTime) => {
        const newTime = {
          ...oldTime,
          ...timeUpdatedOnRunning(oldTime),
          intervalTime: interval,
          isRunning: true,
          working: !oldTime.sleeping ? true : false,
          message: !oldTime.sleeping
            ? "Working, good job..."
            : "Enjoy your rest :)",
        };
        return { ...newTime };
      });
    }, 1000);
  };

  const pause = () => {
    if (!time.isRunning) return;
    clearInterval(time.intervalTime);
    console.log(time);
    setTime({
      ...time,
      isRunning: false,
      message: !time.sleeping
        ? "Paused :( come on, don't hesitate, focus on work, press play!"
        : "Sleeping paused",
    });
  };

  const reset = () => {
    if (!time.intervalTime) return;
    clearInterval(time.intervalTime);
    setTime({ ...dataTimeInitial });
  };

  const sleeping = (interval) => {
    clearInterval(interval);
    setTime({
      ...dataTimeInitial,
      minute: 5,
      second: 0,
      message:
        "Congratulations! Now you can rest for 5 minutes, press play to start",
      sleeping: true,
    });
  };

  const playMusicWhenTimeIsOver = async () => {
    return await document.querySelector("audio").play();
  };

  const addClickedClass = ({ parentElement }) => {
    parentElement.classList.add("clicked");
    setTimeout(() => {
      parentElement.classList.remove("clicked");
    }, 100);
  };

  return (
    <>
      <ClockContainer>
        <Time id="clock">
          {time.minute}:{time.second < 10 ? "0" : ""}
          {time.second}
        </Time>
      </ClockContainer>
      <ClockMessage>{time.message}</ClockMessage>
      <ButtonsContainer>
        <FaPlay
          onClick={({ target }) => {
            play();
            addClickedClass(target);
          }}
        />
        <FaPause
          onClick={({ target }) => {
            pause();
            addClickedClass(target);
          }}
        />
        <FaRedoAlt
          onClick={({ target }) => {
            reset();
            addClickedClass(target);
          }}
        />
      </ButtonsContainer>
      <audio>
        <source src={Song}></source>
      </audio>
    </>
  );
}

export default Clock;
