import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditModal from "../components/EditModal";

const testWordData = { word: "Hello, modal!", start_time: 0, duration: 100 };

test("renders and displays word", () => {
  render(
    <EditModal
      isEditing={true}
      current={testWordData}
      handleEditToggle={() => {}}
      handleEditAction={() => {}}
    />
  );

  expect(screen.getByDisplayValue("Hello, modal!")).toBeInTheDocument();
  expect(screen.getByTestId("correct-all")).toBeEnabled();
  expect(screen.getByTestId("correct")).toBeEnabled();
});

test("disables button on blank input", async () => {
  render(
    <EditModal
      isEditing={true}
      handleEditToggle={() => {}}
      handleEditAction={() => {}}
    />
  );

  expect(screen.queryByDisplayValue("Hello, modal!")).not.toBeInTheDocument();
  expect(screen.getByTestId("correct-all")).toBeDisabled();
  expect(screen.getByTestId("correct")).toBeDisabled();
});
