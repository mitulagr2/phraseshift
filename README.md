# PhraseShift

Your transcript, transformed.

https://github.com/user-attachments/assets/315c8055-a233-4661-ab4b-72ab84177933

## Implementation

- App.tsx renders the application, passing transcript to TranscriptEditor
- TranscriptEditor maintains states for current script, timer position (in millis), cursor position, playback state, and edit word state.
- TranscriptEditor updates timer every 16ms while playing
- PlaybackControls consumes prop timer to handle the formatted display of time and related action buttons
- PlaybackControls allows re-playing the script after timer has reached end
- TranscriptViewer consumes prop cursor position to display sequential highlighting and line-wise script
- TranscriptViewer allows seeking timer to any word by clicking on it
- TranscriptViewer allows launching editing any word by double-clicking on it
- EditModal consumes prop current word and provides edit capability
- EditModal allows updating only current word or all occurrences of current word
- EditModal prevents deleting words to ensure the transcript remains intact

## Project structure

```bash
/src
├── components
│   ├── EditModal.tsx               # Edit word UI logic
│   ├── Footer.tsx                  # Developer credits
│   ├── Header.tsx                  # Navbar and Brand Title
│   ├── PlaybackControls.tsx        # Playback UI Logic
│   ├── Title.tsx                   # Stylized large heading
│   ├── TranscriptEditor.tsx        # Script State logic and handlers
│   └── TranscriptViewer.tsx        # Viewer UI logic
├── index.css                       # Project-wide font styling
├── index.tsx
├── screens
│   └── App.tsx                     # Wrapper for TranscriptEditor, Header, Footer
└── shared
│   ├── constants.ts                # Initial script is contained here
│   └── types.ts                    # WordData interface, CorrectionType enum
└── __tests__
    ├── EditModal.test.tsx          # Renders current word and disables action on blank input
    ├── PlaybackControls.test.tsx   # Renders play and pause buttons appropriately
    ├── TranscriptEditor.test.tsx   # Renders appropriately on missing or empty transcript
    └── TranscriptViewer.test.tsx   # Renders transcript and line numbers appropriately
```
