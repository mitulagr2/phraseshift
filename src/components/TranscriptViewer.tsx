import { Fragment, useEffect, useState } from "react";
import type { WordData } from "../shared/types";

interface TranscriptViewerProps {
  transcript: WordData[];
  currentIdx: number;
  handleSeek: (idx: number) => void;
  handleEditToggle: () => void;
}

const TranscriptViewer = ({
  transcript,
  currentIdx,
  handleSeek,
  handleEditToggle,
}: TranscriptViewerProps) => {
  const [lines, setLines] = useState(1);

  useEffect(() => {
    const scriptElem = document.querySelector<HTMLElement>("#script");
    if (scriptElem) {
      const divHeight = scriptElem.offsetHeight;
      const lineHeight = window
        .getComputedStyle(scriptElem)
        .getPropertyValue("line-height")
        .slice(0, -2);

      const fallbackCount = transcript
        .map(({ word }) => word)
        .join("")
        .split("\n").length;

      setLines(divHeight / +lineHeight || fallbackCount);
    }
  }, [transcript]);

  return (
    <pre
      data-testid="transcript-viewer"
      className="px-4 py-3 mt-8 font-mono text-base text-left bg-transparent border rounded border-zinc-600 focus:border-zinc-100/80 focus:ring-0 sm:text-sm text-zinc-100"
    >
      <div className="flex items-start px-1">
        <div
          data-testid={lines}
          aria-hidden="true"
          className="pr-4 font-mono border-r select-none border-zinc-300/5 text-zinc-700"
        >
          {Array.from({
            length: lines,
          }).map((_, index) => (
            <Fragment key={index}>
              {(index + 1).toString().padStart(2, "0")}
              <br />
            </Fragment>
          ))}
        </div>

        <div
          id="script"
          className="text-wrap w-full p-0 text-base bg-transparent border-0 appearance-none resize-none hover:resize text-zinc-100 placeholder-zinc-500 focus:ring-0 sm:text-sm"
        >
          {transcript.map((item, idx) => (
            <Fragment key={idx}>
              <span
                key={idx}
                onClick={() => handleSeek(idx)}
                onDoubleClick={handleEditToggle}
                className={`rounded-sm ${
                  idx > currentIdx ? "text-zinc-500" : ""
                } ${
                  idx === currentIdx
                    ? "outline outline-2 outline-yellow-300 outline-offset-2"
                    : ""
                }`}
              >
                {item.word}
              </span>{" "}
            </Fragment>
          ))}
        </div>
      </div>
    </pre>
  );
};

export default TranscriptViewer;
