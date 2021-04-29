import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onSelectVideo }) => {
  return (
    <div className="item video-item" onClick={() => onSelectVideo(video)}>
      <img
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
        className="ui image"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
