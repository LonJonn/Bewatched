import { useState } from "react";
import styles from "../styles/VideoSetter.module.css";

const VideoSetter: React.FC = () => {
  const [url, setUrl] = useState("");

  async function setVideoUrl() {
    const res = await fetch("api/video", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });

    if (res.ok) {
      alert("Video set successfully! 😍");
    } else {
      alert("Unable to set video url 😣");
    }

    setUrl("");
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
