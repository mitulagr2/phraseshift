![PhraseShift Banner](https://github.com/user-attachments/assets/eaec063b-565d-4d30-a3e1-356a02a068e5)

# PhraseShift

A user-friendly transcript editor designed to provide a seamless experience for editing and syncing transcripts.

## Demo

https://github.com/user-attachments/assets/8da4c3c1-3710-4183-a088-12d11909f534

## Implementation

- [App.tsx](https://github.com/mitulagr2/phraseshift/blob/master/src/screens/App.tsx) renders the application, passing transcript to `TranscriptEditor`
- [TranscriptEditor](https://github.com/mitulagr2/phraseshift/blob/master/src/components/TranscriptEditor.tsx) - **maintains states** for current script, timer position (in millis), cursor position, playback state, and edit word modal state
  - updates timer every 16ms (**60 fps**) while playing
- [PlaybackControls](https://github.com/mitulagr2/phraseshift/blob/master/src/components/PlaybackControls.tsx) - consumes prop timer to handle formatted display of **time and related action** buttons
  - allows re-playing the script after timer has reached end
- [TranscriptViewer](https://github.com/mitulagr2/phraseshift/blob/master/src/components/TranscriptViewer.tsx) - consumes prop cursor position to display **sequential highlighting** and line-wise script
  - allows **seeking timer** to any word by clicking on it
  - allows launching editing any word by **double-clicking** on it
- [EditModal](https://github.com/mitulagr2/phraseshift/blob/master/src/components/EditModal.tsx) - consumes prop current word and provides **edit capability**
  - allows updating only current word or all occurrences of current word
  - prevents deleting words to ensure the transcript remains intact

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

## Tech Stack

This project was built using Node v22.5 and uses the following technologies:

- [React](https://react.dev/) - Vanilla js with babel and webpack
- [TypeScript](https://www.typescriptlang.org/) - Language and transpiler
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [PostCSS](https://postcss.org/) - CSS processor
- [heroicons](https://heroicons.com/) - SVG library
- [Jest](https://jestjs.io/) - Testing framework
- [Bun](https://bun.sh/) - Package management
