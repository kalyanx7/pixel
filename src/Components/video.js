import React from 'react';
import ReactPlayer from 'react-player';
import './video.css';

const Video = () => {
  return (
    <div className="video-container">
      <div className="video-background">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=CGUQ0G1OX6c"
          playing={true}
          muted={true}
          loop={true}
          controls={false} // Hides the controls
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: {
                controls: 0,    // Hides the YouTube player controls
                rel: 0,         // Prevents related videos from showing up
                showinfo: 0,    // Hides video title
                modestbranding: 1, // Reduces YouTube branding
                fs: 0,          // Disables fullscreen button
                iv_load_policy: 3, // Hides annotations
                autohide: 1     // Hides controls when not in use
              }
            }
          }}
        />
        <div className="overlay"></div> {/* Overlay to hide UI elements */}
      </div>
    </div>
  );
}

export default Video;
    