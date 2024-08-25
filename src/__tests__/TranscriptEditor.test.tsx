import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TranscriptEditor from "../components/TranscriptEditor";

test("renders on missing script", () => {
  render(<TranscriptEditor />);

  expect(screen.getByText("Transcript Editor")).toBeInTheDocument();
});
