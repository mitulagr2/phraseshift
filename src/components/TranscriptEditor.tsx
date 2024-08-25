import { useEffect, useState } from "react";
import { CorrectionType, type WordData } from "../shared/types";
import Title from "./Title";
import TranscriptViewer from "./TranscriptViewer";
import PlaybackControls from "./PlaybackControls";
import EditModal from "./EditModal";

interface TranscriptEditorProps {
  /** (Optional) Transcript to be shown */
  initialTranscript?: WordData[];
}

/**
 * Transcript editor component
 */
const TranscriptEditor = ({ initialTranscript }: TranscriptEditorProps) => {
  const [transcript, setTranscript] = useState<WordData[]>(
    initialTranscript || []
  );
  /** Current playback position in millis */
  const [time, setTime] = useState(0);
  /** Current cursor index */
  const [currentIdx, setCurrentIdx] = useState(0);
  /** Current edit modal state */
  const [isEditing, setIsEditing] = useState(false);
  /** Current playback state */
  const [isPlaying, setIsPlaying] = useState(false);

  /** Max timer position in millis */
  const totalTime = transcript.at(-1)
    ? transcript.at(-1)!.start_time + transcript.at(-1)!.duration
    : 0;

  // Update timer every 16ms
  useEffect(() => {
    const playing =
      isPlaying &&
      setInterval(() => {
        setTime((prev) => prev + 16);
      }, 16);

    return () => {
      playing && clearInterval(playing);
    };
  }, [isPlaying]);

  // Update current cursor index in sync with timer
  useEffect(() => {
    let nextStamp = 0;
    if (transcript[currentIdx])
      nextStamp =
        transcript[currentIdx].start_time + transcript[currentIdx].duration;

    if (time >= totalTime) {
      setIsPlaying(false);
    } else if (time > nextStamp) setCurrentIdx(currentIdx + 1);
  }, [currentIdx, time, totalTime, transcript]);

  /** Modify current cursor index and playback position */
  const handleSeek = (idx: number) => {
    setCurrentIdx(idx);
    setTime(transcript[idx].start_time);
  };

  /** Switch modal view state */
  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  /** Update word at current cursor index */
  const handleEditAction = (
    newWord: string,
    correctionType: CorrectionType
  ) => {
    handleEditToggle();

    const oldWord = transcript[currentIdx].word;
    let newTranscript;

    if (correctionType === CorrectionType.ALL) {
      // Modify word at current cursor index only
      newTranscript = transcript.map((item) =>
        item.word === oldWord ? { ...item, word: newWord } : item
      );
    } else {
      // Modify all word instances
      newTranscript = transcript.map((item, idx) =>
        idx === currentIdx ? { ...item, word: newWord } : item
      );
    }

    setTranscript(newTranscript);
  };

  /** Switch playback state */
  const handlePlayToggle = () => {
    if (time >= totalTime) {
      setCurrentIdx(0);
      setTime(0);
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="container px-8 mx-auto pt-16 lg:pt-32">
      <div className="max-w-3xl mx-auto">
        <Title>Transcript Editor</Title>

        <PlaybackControls
          isPlaying={isPlaying}
          time={time}
          totalTime={totalTime}
          handlePlayToggle={handlePlayToggle}
        />

        <TranscriptViewer
          transcript={transcript}
          currentIdx={currentIdx}
          handleSeek={handleSeek}
          handleEditToggle={handleEditToggle}
        />

        <EditModal
          isEditing={isEditing}
          current={transcript[currentIdx]}
          handleEditToggle={handleEditToggle}
          handleEditAction={handleEditAction}
        />
      </div>
    </div>
  );
};

export default TranscriptEditor;
