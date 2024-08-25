import styles from "./App.module.css";
import { initialTranscript } from "../shared/constants";
import TranscriptEditor from "../components/TranscriptEditor";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <div className={styles.App}>
      <div className="relative min-h-screen bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30">
        <Header />

        <main className="min-h-[80vh]">
          <TranscriptEditor initialTranscript={initialTranscript} />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
