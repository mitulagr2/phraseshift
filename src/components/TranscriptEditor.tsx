import { useState } from "react";
import { CorrectionType, type WordData } from "../shared/types";
import Title from "./Title";
import TranscriptViewer from "./TranscriptViewer";
import EditModal from "./EditModal";

interface TranscriptEditorProps {
  initialTranscript: WordData[];
}

const TranscriptEditor = ({ initialTranscript }: TranscriptEditorProps) => {
  const [transcript, setTranscript] = useState(initialTranscript);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const handleSeek = (idx: number) => {
    setCurrentIdx(idx);
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

  return (
    <div className="container px-8 mx-auto pt-16 lg:pt-32">
      <div className="max-w-3xl mx-auto">
        <Title>Transcript Editor</Title>

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
