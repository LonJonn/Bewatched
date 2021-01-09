import { useRef, useState } from "react";
import Hls from "hls.js";
import styles from "../styles/VideoPlayer.module.css";

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>();
  const [playing, setPlaying] = useState(false);

  async function loadVideo() {
    const res = await fetch("api/video");
    const { url } = await res.json();

    if (!url) {
      alert("No Video Set!");
      return;
    }

    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(videoRef.current);

    videoRef.current.play();
    setPlaying(true);
  }

  return (
    <div className={styles.player}>
      <video ref={videoRef} controls></video>
      {!playing && (
        <button onClick={loadVideo} className={styles.playButton}>
          Play 🎥
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
