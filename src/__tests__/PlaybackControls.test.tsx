import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PlaybackControls from "../components/PlaybackControls";

test("renders play button initially", () => {
  render(
    <PlaybackControls
      isPlaying={false}
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
      isPlaying={true}
      time={0}
      totalTime={100}
      handlePlayToggle={() => {}}
    />
  );

  expect(screen.getByText("Pause")).toBeInTheDocument();
});
