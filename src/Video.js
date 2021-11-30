import React, { useRef } from 'react';

export const Video = () => {
  const videoRef = useRef();

  const handlePlay = () => {
    console.log('play');
    const video = videoRef.current;

    video.play();
  };

  const handleStop = () => {
    console.log('Stop');
    const video = videoRef.current;

    video.pause();
  };
  return (
    <>
      <video width='400' ref={videoRef}>
        <source src='video.mp4' type='video/mp4' />
      </video>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handleStop}>Pause</button>
    </>
  );
};
