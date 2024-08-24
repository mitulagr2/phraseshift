import type { WordData } from "../../shared/types";

interface TranscriptEditorProps {
  initialTranscript: WordData[];
}

const TranscriptEditor = ({ initialTranscript }: TranscriptEditorProps) => {
  console.log(initialTranscript);

  return <></>;
};

export default TranscriptEditor;
