# PhraseShift

Your transcript, transformed.

https://github.com/user-attachments/assets/315c8055-a233-4661-ab4b-72ab84177933

## Project structure

```bash
/src
├── components
│   ├── EditModal.tsx               # Edit word UI logic
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── PlaybackControls.tsx        # Playback UI Logic
│   ├── Title.tsx
│   ├── TranscriptEditor.tsx        # Script State logic and handlers
│   └── TranscriptViewer.tsx        # Viewer UI logic
├── index.css
├── index.tsx
├── screens
│   └── App.tsx                     # Wrapper for TranscriptEditor, Header, Footer
└── shared
    ├── constants.ts                # Initial script is contained here
    └── types.ts                    # WordData interface, CorrectionType enum
```
