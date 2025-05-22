# Keeper - Note-Taking Application

A modern, responsive note-taking application built with React and Vite. This application allows users to create, edit, delete, and mark notes as completed.

**Live Demo**: [https://react-keeperapp.vercel.app/](https://react-keeperapp.vercel.app/)

![Notes App Screenshot](public/to-do-list.png)

## Features

- **Create Notes**: Add new notes with titles and content
- **Edit Notes**: Update existing notes with ease
- **Delete Notes**: Remove unwanted notes
- **Mark as Complete**: Toggle completion status for notes
- **Persistent Storage**: Notes are saved to localStorage and persist across browser sessions
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Expandable Textareas**: Content areas expand as you type
- **Modern UI**: Clean, intuitive interface with Tailwind CSS

## Project Structure

```javascript
src/
  ├── components/
  │   ├── header.jsx - Application header component
  │   ├── note.jsx - Individual note display component
  │   ├── noteadd.jsx - Form for adding and editing notes
  │   ├── noteedit.jsx - Component for editing existing notes
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

- Creates new notes with title and content
- Provides clean interface for note creation
- Handles state for the new note data

### NoteEdit

- Dedicated component for editing existing notes
- Maintains separate editing state from display state
- Provides save and cancel options

### Note

- Displays individual note content
- Provides buttons for completion, editing, and deletion
- Shows visual indicators for completed tasks

## Implementation Details

1. **State Management**: Uses React's useState and useEffect hooks for local state management
2. **Local Storage**: Persists notes using browser localStorage API
3. **Conditional Rendering**: Dynamically changes UI based on application state
4. **Responsive Design**: Uses Tailwind CSS for responsive styling across all device sizes
5. **Material UI Icons**: Leverages Material UI for consistent, clean iconography
6. **Component Architecture**: Modular components with clear separation of concerns

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/react-project.git
   cd react-project
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser to the URL displayed in your terminal (typically http://localhost:5173)

## Technologies Used

- **React 19** - UI library for building user interfaces
- **Vite 6** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Material UI 7** - Component library with pre-built icons
- **LocalStorage API** - Browser-based persistence
- **Vercel** - Hosting and deployment platform

## Live Demo

Visit the live application at [https://react-keeperapp.vercel.app/](https://react-keeperapp.vercel.app/)
