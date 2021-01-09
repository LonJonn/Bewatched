import { useState } from "react";
import styles from "../styles/VideoSetter.module.css";

const VideoSetter: React.FC = () => {
  const [url, setUrl] = useState("");

  async function setVideoUrl() {
    const res = await fetch("api/video", {
      method: "POST",
      body: JSON.stringify({ url }),
    });

    if (!res.ok) {
      alert("Unable to set video url 😣");
    }
  }

  return (
    <div className={styles.setter}>
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className={styles.urlInput}
      />
      <button onClick={setVideoUrl} className={styles.setButton}>
        Set Video 😚
      </button>
    </div>
  );
};

export default VideoSetter;
