import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PlaybackControls from "../components/PlaybackControls";

test("renders play button initially", () => {
  render(
    <PlaybackControls
      isPlaying={false} // paused state
      time={0}
      totalTime={100}
      handlePlayToggle={() => {}}
    />
  );

  expect(screen.getByText("Play")).toBeInTheDocument();
});

test("displays pause after play event", () => {
  render(
    <PlaybackControls
      isPlaying={true} // playing state
      time={0}
      totalTime={100}
      handlePlayToggle={() => {}}
    />
  );

  expect(screen.getByText("Pause")).toBeInTheDocument();
});
