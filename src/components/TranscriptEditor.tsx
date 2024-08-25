import { useEffect, useState } from "react";
import { CorrectionType, type WordData } from "../shared/types";
import Title from "./Title";
import TranscriptViewer from "./TranscriptViewer";
import PlaybackControls from "./PlaybackControls";
import EditModal from "./EditModal";

interface TranscriptEditorProps {
  initialTranscript: WordData[];
}

const TranscriptEditor = ({ initialTranscript }: TranscriptEditorProps) => {
  const [transcript, setTranscript] = useState(initialTranscript);
  const [time, setTime] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const playing =
      isPlaying &&
      setInterval(() => {
        setTime((prev) => prev + 5);
      }, 5);

    return () => {
      playing && clearInterval(playing);
    };
  }, [isPlaying]);

  const handleSeek = (idx: number) => {
    setCurrentIdx(idx);
    setTime(transcript[idx].start_time);
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleEditAction = (
    newWord: string,
    correctionType: CorrectionType
  ) => {
    handleEditToggle();

    const oldWord = transcript[currentIdx].word;
    let newTranscript;

    if (correctionType === CorrectionType.ALL) {
      newTranscript = transcript.map((item) =>
        item.word === oldWord ? { ...item, word: newWord } : item
      );
    } else {
      newTranscript = transcript.map((item, idx) =>
        idx === currentIdx ? { ...item, word: newWord } : item
      );
    }

    setTranscript(newTranscript);
  };

  const handlePlayToggle = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="container px-8 mx-auto pt-16 lg:pt-32">
      <div className="max-w-3xl mx-auto">
        <Title>Transcript Editor</Title>

        <PlaybackControls
          isPlaying={isPlaying}
          time={time}
          totalTime={
            transcript.at(-1)
              ? transcript.at(-1)!.start_time + transcript.at(-1)!.duration
              : 0
          }
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
