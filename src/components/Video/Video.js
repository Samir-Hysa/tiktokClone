import React, { useRef, useState, useEffect } from "react";
import "./Video.css";
import VideoFooter from "../VideoFooter/VideoFooter";
import VideoSidebar from "../VideoSidebar/VideoSidebar";

const Video = ({ url, likes, messages, share, description, song, channel }) => {
  // var that keep the state of the video
  const [playing, setPlaying] = useState(true);
  // Reference for the Video
  const videoRef = useRef(null);
  // Function that handle the video start and stop
  const handleVideoClick = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoClick}
        className="video__player"
        loop
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} share={share} />
    </div>
  );
};

export default Video;
