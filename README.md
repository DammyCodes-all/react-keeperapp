# Note-Taking Application

A modern, responsive note-taking application built with React and Vite. This application allows users to create, edit, delete, and mark notes as completed.

![Notes App Screenshot](public/to-do-list.png)

## Features

- **Create Notes**: Add new notes with titles and content
- **Edit Notes**: Update existing notes with ease
- **Delete Notes**: Remove unwanted notes
- **Mark as Complete**: Toggle completion status for notes
- **Persistent Storage**: Notes are saved to localStorage and persist across browser sessions
- **Responsive Design**: Works on mobile, tablet, and desktop devices

## Project Structure

```
src/
  ├── components/
  │   ├── header.jsx - Application header component
  │   ├── note.jsx - Individual note display component
  │   ├── noteadd.jsx - Form for adding and editing notes
  │   └── notespace.jsx - Main component managing note state and operations
  ├── App.jsx - Root application component
  ├── index.css - Global styles
  └── main.jsx - Application entry point
```

## Component Workflow

### NoteSpace
- Manages the list of notes
- Handles operations: add, edit, delete
- Stores notes in localStorage

### NoteAdd
- Dual-purpose component for adding and editing notes
- Changes behavior based on props (add or edit mode)

### Note
- Displays individual note content
- Provides buttons for completion, editing, and deletion

## Implementation Details

1. **State Management**: Uses React's useState hook for local state management
2. **Local Storage**: Persists notes using browser localStorage
3. **Conditional Rendering**: Dynamically changes UI based on application state
4. **Responsive Design**: Uses Tailwind CSS for responsive styling

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser to the URL displayed in your terminal (typically http://localhost:5173)

## Technologies Used

- React
- Vite
- Tailwind CSS
- Font Awesome
- localStorage API
