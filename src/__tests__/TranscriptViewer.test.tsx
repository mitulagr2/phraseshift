import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TranscriptViewer from "../components/TranscriptViewer";

const testTranscript = [
  { word: "Hello, world!", start_time: 0, duration: 100 },
];

test("renders and displays script", () => {
  render(
    <TranscriptViewer
      transcript={testTranscript} // test word is passed
      currentIdx={0}
      handleSeek={() => {}}
      handleEditToggle={() => {}}
    />
  );

  expect(screen.getByText("Hello, world!")).toBeInTheDocument();
});

test("line count updates on longer script", () => {
  const { rerender } = render(
    <TranscriptViewer
      transcript={testTranscript} // test word is passed
      currentIdx={0}
      handleSeek={() => {}}
      handleEditToggle={() => {}}
    />
  );

  expect(screen.getByTestId("1")).toBeInTheDocument();
  expect(screen.queryByTestId("2")).not.toBeInTheDocument();

  rerender(
    <TranscriptViewer
      transcript={testTranscript.map((item) => ({
        ...item,
        word: item.word + "\n", // new line is added to end of test word
      }))}
      currentIdx={0}
      handleSeek={() => {}}
      handleEditToggle={() => {}}
    />
  );

  expect(screen.queryByTestId("1")).not.toBeInTheDocument();
  expect(screen.getByTestId("2")).toBeInTheDocument();
});
