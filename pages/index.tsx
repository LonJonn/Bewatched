import VideoPlayer from "../components/VideoPlayer";
import VideoSetter from "../components/VideoSetter";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <VideoPlayer />
      <VideoSetter />
    </div>
  );
}
