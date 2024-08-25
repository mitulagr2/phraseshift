import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TranscriptEditor from "../components/TranscriptEditor";

test("renders on missing script", () => {
  render(<TranscriptEditor />); // initialTranscript is not passed

  expect(screen.getByText("Transcript Editor")).toBeInTheDocument();
});
