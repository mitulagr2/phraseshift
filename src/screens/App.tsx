import styles from "./App.module.css";
import { initialTranscript } from "../shared/constants";
import TranscriptEditor from "../components/TranscriptEditor/TranscriptEditor";

function App() {
  return (
    <div className={styles.App}>
      <TranscriptEditor initialTranscript={initialTranscript} />
    </div>
  );
}

export default App;
