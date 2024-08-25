import { Fragment, useEffect, useState } from "react";
import type { WordData } from "../shared/types";

interface TranscriptEditorProps {
  initialTranscript: WordData[];
}

const TranscriptEditor = ({ initialTranscript }: TranscriptEditorProps) => {
  const [lines, setLines] = useState(1);

  useEffect(() => {
    const scriptElem = document.querySelector<HTMLElement>("#script");
    if (scriptElem) {
      const divHeight = scriptElem.offsetHeight;
      const lineHeight = window
        .getComputedStyle(scriptElem)
        .getPropertyValue("line-height")
        .slice(0, -2);
      setLines(divHeight / +lineHeight);
    }
  }, []);

  return (
    <div className="container px-8 mx-auto pt-16 lg:pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="py-4 text-5xl font-bold text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/60 to-white">
          Transcript Editor
        </h1>

        <pre className="px-4 py-3 mt-8 font-mono text-base text-left bg-transparent border rounded border-zinc-600 focus:border-zinc-100/80 focus:ring-0 sm:text-sm text-zinc-100">
          <div className="flex items-start px-1">
            <div
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
              {initialTranscript.map((item, idx) => (
                <span key={idx}>{item.word} </span>
              ))}
            </div>
          </div>
        </pre>
      </div>
    </div>
  );
};

export default TranscriptEditor;
