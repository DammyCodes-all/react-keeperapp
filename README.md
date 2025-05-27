# Keeper - Note-Taking Application

A modern, responsive note-taking application built with React and Vite. This application allows users to create, edit, delete, and manage notes with an intuitive interface and advanced state management.

**Live Demo**: [https://react-keeperapp.vercel.app/](https://react-keeperapp.vercel.app/)


## Features

- **Create Notes**: Add new notes with title and content
- **Edit Notes**: In-place editing with save/cancel functionality
- **Delete Notes**: Remove unwanted notes with undo capability
- **Undo System**: 5-second undo window for deleted notes with progress indicator
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Local Storage**: Persistent note storage across browser sessions
- **Modern UI**: Clean interface built with Tailwind CSS and Material-UI icons

## Project Structure
```javascript
src/
  ├── components/
  │   ├── header.jsx - Application header with theme toggle
  │   ├── note.jsx - Individual note display component with actions
  │   ├── noteadd.jsx - Form for creating new notes
  │   ├── noteedit.jsx - In-place note editing component
  │   ├── notespace.jsx - Main container managing notes state with useReducer
  │   └── App.jsx - Root component with layout
  ├── index.css - Global styles and Tailwind configuration
  └── main.jsx - Application entry point
```

## Component Workflow

### NoteSpace (Main Container)
- Manages application state using React's useReducer hook
- Handles all note operations through a centralized reducer
- Implements undo functionality with automatic timer
- Persists data to localStorage automatically

### NoteAdd
- Form component for creating new notes
- Expandable interface that shows full form on focus
- Generates unique IDs for new notes
- Submits new note data to the main container

### Note
- Displays individual note content with actions
- Provides buttons for editing, deleting, and marking complete
- Responsive design with dark mode support
- Conditional styling based on note state

### NoteEdit
- In-place editing component that replaces Note component
- Real-time editing with save/cancel options
- Preserves original data until save is confirmed
- Seamless transition back to display mode

### Header
- Houses the application title and theme toggle
- Implements dark/light mode switching with persistence
- Responsive design with Material-UI icons

### UndoDelete
- Toast-style notification for deleted notes
- 5-second countdown with visual progress indicator
- One-click undo functionality
- Auto-dismisses when timer expires

## Implementation Details

1. **Advanced State Management**: Uses React's useReducer hook for predictable state updates
2. **Reducer Pattern**: Centralized state logic with action-based updates (addNote, deleteNote, editNote, etc.)
3. **Local Storage Integration**: Automatic persistence using useEffect hooks
4. **Undo System**: Sophisticated undo functionality with timer-based auto-cleanup
5. **Conditional Rendering**: Dynamic component switching between view and edit modes
6. **Responsive Design**: Mobile-first approach using Tailwind CSS utilities
7. **Dark Mode Implementation**: System preference detection with manual override capability
8. **CSS Transitions**: Smooth animations and state transitions throughout the UI
9. **Material UI Integration**: Professional icons and progress indicators
10. **Component Architecture**: Modular design with clear separation of concerns
11. **Error Handling**: Defensive programming with optional chaining and fallbacks
12. **Performance Optimization**: Efficient re-renders through proper state management



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

- **React 19** - Latest UI library with improved concurrent features
- **Vite 6** - Fast build tool and development server with HMR
- **Tailwind CSS 4** - Utility-first CSS framework with dark mode support
- **Material UI 7** - Component library with pre-built icons and components
- **useReducer Hook** - Advanced state management for complex state logic
- **LocalStorage API** - Browser-based persistence for notes
- **Optional Chaining** - Modern JavaScript for safe property access
- **Vercel** - Hosting and deployment platform

## Dark Mode Implementation

The application features a comprehensive dark mode implementation:

1. **Theme Toggle**: Located in the header for easy access
2. **Smooth Transitions**: All components transition smoothly between themes with CSS
3. **Persistent Preference**: User theme choice is saved to localStorage
4. **System Preference Detection**: Defaults to system preference on first visit
5. **Consistent Experience**: All components maintain readability and aesthetics in both modes
6. **Tailwind Integration**: Uses Tailwind's dark mode class strategy for consistent styling

```jsx
// Example of useReducer state management
function noteReducer(state, action) {
  switch (action.type) {
    case 'addNote':
      return {...state, noteList: [...state.noteList, action.note]};
    case 'deleteNote':
      return {
        ...state, 
        noteList: state.noteList.filter(note => note.id !== action.id),
        isUndoVisible: true,
        notesBeforeDelete: state.noteList
      };
    case 'undoDelete':
      return {
        ...state,
        noteList: state.notesBeforeDelete,
        isUndoVisible: false,
        notesBeforeDelete: []
      };
    case 'editNote':
      return {...state, editingNoteId: action.id};
    default:
      return state;
  }
}

// Usage in component
const [state, dispatch] = useReducer(noteReducer, initialState);
dispatch({ type: 'addNote', note: newNote });
```

## Accessibility Features

- **Color Contrast**: Maintains WCAG AA standard contrast ratios in both themes
- **Semantic HTML**: Uses appropriate HTML elements for better screen reader support
- **Focus Indicators**: Visible focus states for keyboard navigation
- **Descriptive Button Labels**: All interactive elements have descriptive text or aria-labels
- **Responsive Text Sizing**: Text scales appropriately across device sizes
- **ARIA Attributes**: Proper use of aria-label, aria-describedby, and role attributes
- **Keyboard Navigation**: All features accessible without a mouse
- **Undo Functionality**: Provides sufficient time to react to actions like deletion
- **Error Prevention**: Confirmation for destructive actions with clear undo options

## Future Enhancements

- **Note Categories**: Organize notes with tags and categories
- **Search Functionality**: Find notes quickly with text search
- **Rich Text Editing**: Add formatting options like bold, italic, lists
- **Note Sharing**: Share notes via URL or export to different formats
- **Cloud Sync**: User authentication with cloud-based storage
- **Collaborative Editing**: Real-time collaborative note editing
- **Note Templates**: Pre-defined templates for different note types
- **Advanced Filtering**: Filter by date, category, completion status
- **Keyboard Shortcuts**: Power-user features with hotkeys
- **Note Archiving**: Archive old notes without deleting them
- **Backup/Export**: Export notes to PDF, Markdown, or JSON
- **Drag and Drop**: Reorder notes with drag-and-drop functionality

## Performance Optimization

- **useReducer Pattern**: Efficient state updates with predictable state transitions
- **Minimal Re-renders**: Optimized component structure to prevent unnecessary updates
- **Local Storage Efficiency**: Batched localStorage operations with useEffect
- **Component Memoization**: Strategic use of React patterns for performance
- **Tailwind CSS Optimization**: Purged unused styles in production builds
- **Lazy Loading**: Efficient component loading and bundle splitting
- **Memory Management**: Proper cleanup of timers and event listeners

## Live Demo

Visit the live application at [https://react-keeperapp.vercel.app/](https://react-keeperapp.vercel.app/)


## State Management Architecture

The application uses a sophisticated state management approach with React's useReducer:

```javascript
const initialState = {
  noteList: JSON.parse(localStorage.getItem('storedNotes')) || [],
  editingNoteId: null,
  isUndoVisible: false,
  notesBeforeDelete: []
};

// Centralized state updates through actions
dispatch({ type: 'addNote', note: newNote });
dispatch({ type: 'deleteNote', id: noteId });
dispatch({ type: 'editNote', id: noteId });
dispatch({ type: 'undoDelete' });
```

This pattern provides:
- **Predictable State Updates**: All state changes go through the reducer
- **Time Travel Debugging**: Easy to track state changes and debug issues
- **Undo/Redo Capability**: Built-in support for complex state rollbacks
- **Scalability**: Easy to add new actions and state properties

## Acknowledgments

- Inspired by Google Keep
- Icons from Material UI
- Tailwind CSS for styling
- React community for best practices and patterns
