import { useEffect, useState } from "react";
import { CorrectionType, type WordData } from "../shared/types";

interface EditModalProps {
  isEditing: boolean;
  current: WordData;
  handleEditToggle: () => void;
  handleEditAction: (newWord: string, correctionType: CorrectionType) => void;
}

const EditModal = ({
  isEditing,
  current,
  handleEditToggle,
  handleEditAction,
}: EditModalProps) => {
  const [text, setText] = useState(current ? current.word : "");

  useEffect(() => {
    setText(current ? current.word : "");
  }, [current]);

  if (!isEditing) return <></>;

  const handleOutsideClick = () => {
    handleEditToggle();
  };

  const handleInsideClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div
      onClick={handleOutsideClick}
      className="overflow-y-auto overflow-x-hidden flex fixed top-0 right-0 left-0 bottom-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div
        onClick={handleInsideClick}
        className="relative p-4 w-full max-w-md max-h-full"
      >
        <div className="relative bg-slate-800 rounded-lg shadow ">
          <div className="p-4 space-y-4 md:p-5">
            <input
              name="word"
              id="word"
              className="bg-slate-900 focus:ring-2 ring-slate-600 outline-none text-white placeholder-slate-500 rounded-lg block w-full p-2.5"
              placeholder="Word cannot be deleted"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                onClick={() => handleEditAction(text, CorrectionType.ALL)}
                disabled={text.length === 0}
                className={`h-9 mr-4 inline-flex justify-center items-center transition-all rounded-lg px-4 py-1.5 md:py-2 text-base font-semibold leading-7 bg-zinc-700 ring-1 ring-zinc-600/80 duration-150 ${
                  text.length === 0
                    ? "text-zinc-400 cursor-not-allowed"
                    : "text-zinc-100 hover:text-zinc-900 hover:ring-transparent hover:bg-zinc-200"
                }`}
              >
                <span>Correct All</span>
              </button>
              <button
                onClick={() => handleEditAction(text, CorrectionType.SINGLE)}
                disabled={text.length === 0}
                className={`h-9 inline-flex justify-center items-center transition-all rounded-lg px-4 py-1.5 md:py-2 text-base font-semibold leading-7 bg-yellow-400 ring-1 ring-zinc-600/80 duration-150 ${
                  text.length === 0
                    ? "text-zinc-600 cursor-not-allowed"
                    : "text-zinc-900 hover:text-zinc-100 hover:ring-zinc-600/80 hover:bg-zinc-800"
                }`}
              >
                <span>Correct</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
