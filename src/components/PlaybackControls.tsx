import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

interface PlaybackControlsProps {
  isPlaying: boolean;
  time: number;
  totalTime: number;
  handlePlayToggle: () => void;
}

const PlaybackControls = ({
  isPlaying,
  time,
  totalTime,
  handlePlayToggle,
}: PlaybackControlsProps) => {
  let minutes = Math.floor(time / 60000);
  let seconds = ((time % 60000) / 1000).toFixed(2);
  if (+seconds === 60) {
    minutes += 1;
    seconds = "0.00";
  }

  let minutesTotal = Math.floor(totalTime / 60000);
  let secondsTotal = ((totalTime % 60000) / 1000).toFixed(2);
  if (+secondsTotal === 60) {
    minutesTotal += 1;
    secondsTotal = "0.00";
  }

  return (
    <div>
      <button
        className="mt-6 w-full h-12 inline-flex justify-center items-center transition-all rounded px-4 py-1.5 md:py-2 text-base font-semibold leading-7 bg-zinc-200 ring-1 ring-transparent duration-150 text-zinc-900 hover:text-zinc-100 hover:ring-zinc-600/80 hover:bg-zinc-900/20"
        onClick={handlePlayToggle}
      >
        {isPlaying ? (
          <PauseIcon className="w-5 h-5 mr-2" />
        ) : (
          <PlayIcon className="w-5 h-5 mr-2" />
        )}
        <span>{isPlaying ? "Pause" : "Play"}</span>
      </button>
      <div className="flex justify-end">
        <span
          className="h-12 inline-flex justify-center items-center px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-zinc-100"
          onClick={handlePlayToggle}
        >
          {("" + minutes).padStart(2, "0") +
            ":" +
            seconds.padStart(5, "0") +
            " / " +
            ("" + minutesTotal).padStart(2, "0") +
            ":" +
            secondsTotal.padStart(5, "0")}
        </span>
      </div>
    </div>
  );
};

export default PlaybackControls;
