# Keeper - Note-Taking Application

A modern, responsive note-taking application built with React and Vite. This application allows users to create, edit, delete, and search through notes with an intuitive interface and advanced state management.

**Live Demo**: [https://react-keeperapp.vercel.app/](https://react-keeperapp.vercel.app/)


## Features

- **Create Notes**: Add new notes with title and content
- **Edit Notes**: In-place editing with save/cancel functionality
- **Delete Notes**: Remove unwanted notes with undo capability
- **Search Notes**: Real-time search functionality across note titles and content
- **Undo System**: 5-second undo window for deleted notes with progress indicator
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Local Storage**: Persistent note storage across browser sessions
- **Modern UI**: Clean interface built with Tailwind CSS and Material-UI icons

## Project Structure
```javascript
src/
  ├── components/
  │   ├── header.jsx - Application header with search bar and theme toggle
  │   ├── note.jsx - Individual note display component with actions
  │   ├── noteadd.jsx - Form for creating new notes
  │   ├── noteedit.jsx - In-place note editing component
  │   ├── notespace.jsx - Main container managing notes state with useReducer
  │   └── App.jsx - Root component with layout
  ├── index.css - Global styles and Tailwind configuration
  └── main.jsx - Application entry point
```

## Component Workflow

### Header (Application Header)
- **SearchBar**: Real-time search functionality with responsive design
  - Expandable search input with smooth animations
  - Clear button for easy query reset
  - Responsive width scaling from mobile to desktop
  - Theme-aware styling with amber accent colors
- **ThemeToggle**: Dark/light mode switching with persistence
- Responsive layout with proper spacing and alignment

### NoteSpace (Main Container)
- Manages application state using React's useReducer hook
- Handles all note operations through a centralized reducer
- **Search Implementation**: Real-time filtering of notes based on query
- Implements undo functionality with automatic timer
- Persists data to localStorage automatically
- Conditional rendering between full notes and filtered search results

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

### UndoDelete
- Toast-style notification for deleted notes
- 5-second countdown with visual progress indicator
- One-click undo functionality
- Auto-dismisses when timer expires

## Search Functionality

The application includes a comprehensive search system:

```jsx
// Search implementation in reducer
case 'search': {
  if(action.query === '') {
    return {...state, searchedNotes: []} // Reset when empty
  }
  const searchResult = state.noteList.filter((note) => 
    note.title.toLowerCase().includes(action.query.toLowerCase()) ||
    note.note.toLowerCase().includes(action.query.toLowerCase())
  )
  return {...state, searchedNotes: searchResult}
}

// Conditional rendering based on search state
const notesToDisplay = query.trim() ? state.searchedNotes : state.noteList;
```

**Search Features**:
- **Real-time filtering**: Results update as you type
- **Case-insensitive**: Matches regardless of capitalization
- **Multi-field search**: Searches both note titles and content
- **Responsive UI**: Search bar adapts to different screen sizes
- **Clear functionality**: Easy to reset search with X button
- **Visual feedback**: Animated underline indicates active search

## Implementation Details

1. **Advanced State Management**: Uses React's useReducer hook for predictable state updates
2. **Reducer Pattern**: Centralized state logic with action-based updates (addNote, deleteNote, editNote, search, etc.)
3. **Local Storage Integration**: Automatic persistence using useEffect hooks
4. **Search System**: Sophisticated real-time search with filter-based implementation
5. **Undo System**: Sophisticated undo functionality with timer-based auto-cleanup
6. **Conditional Rendering**: Dynamic component switching between view and edit modes
7. **Responsive Design**: Mobile-first approach using Tailwind CSS utilities
8. **Dark Mode Implementation**: System preference detection with manual override capability
9. **CSS Transitions**: Smooth animations and state transitions throughout the UI
10. **Material UI Integration**: Professional icons and progress indicators
11. **Component Architecture**: Modular design with clear separation of concerns
12. **Error Handling**: Defensive programming with optional chaining and fallbacks
13. **Performance Optimization**: Efficient re-renders through proper state management

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
- **Lucide React** - Modern icon library for search and UI elements
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
7. **Search Bar Theming**: Search component adapts colors and contrast for both themes

```jsx
// Example of theme-aware search component
<form className="bg-white dark:bg-gray-700 focus-within:rounded-[1px] shadow-sm hover:shadow-md">
  <div className="bg-amber-500 dark:bg-amber-400 origin-center scale-x-0 transition-transform"></div>
  <button className="text-amber-500 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300">
    <Search className="w-3 h-3 md:w-4 md:h-4" />
  </button>
  <input className="text-gray-800 dark:text-gray-200 placeholder:text-[#8b8ba7] dark:placeholder:text-gray-400" />
</form>
```

## State Management Architecture

The application uses a sophisticated state management approach with React's useReducer:

```javascript
const initialState = {
  noteList: JSON.parse(localStorage.getItem('storedNotes')) || [],
  editingNoteId: null,
  isUndoVisible: false,
  notesBeforeDelete: [],
  searchedNotes: []
};

// Centralized state updates through actions
dispatch({ type: 'addNote', note: newNote });
dispatch({ type: 'deleteNote', id: noteId });
dispatch({ type: 'editNote', id: noteId });
dispatch({ type: 'search', query: searchQuery });
dispatch({ type: 'undoDelete' });
```

This pattern provides:
- **Predictable State Updates**: All state changes go through the reducer
- **Time Travel Debugging**: Easy to track state changes and debug issues
- **Undo/Redo Capability**: Built-in support for complex state rollbacks
- **Search State Management**: Dedicated search state with filtering logic
- **Scalability**: Easy to add new actions and state properties

## Accessibility Features

- **Color Contrast**: Maintains WCAG AA standard contrast ratios in both themes
- **Semantic HTML**: Uses appropriate HTML elements for better screen reader support
- **Focus Indicators**: Visible focus states for keyboard navigation
- **Descriptive Button Labels**: All interactive elements have descriptive text or aria-labels
- **Search Accessibility**: Search form with proper labels and keyboard navigation
- **Responsive Text Sizing**: Text scales appropriately across device sizes
- **ARIA Attributes**: Proper use of aria-label, aria-describedby, and role attributes
- **Keyboard Navigation**: All features accessible without a mouse
- **Undo Functionality**: Provides sufficient time to react to actions like deletion
- **Error Prevention**: Confirmation for destructive actions with clear undo options

## Performance Optimization

- **useReducer Pattern**: Efficient state updates with predictable state transitions
- **Minimal Re-renders**: Optimized component structure to prevent unnecessary updates
- **Search Optimization**: Efficient filtering with proper array methods
- **Local Storage Efficiency**: Batched localStorage operations with useEffect
- **Component Memoization**: Strategic use of React patterns for performance
- **Tailwind CSS Optimization**: Purged unused styles in production builds
- **Lazy Loading**: Efficient component loading and bundle splitting
- **Memory Management**: Proper cleanup of timers and event listeners

## Future Enhancements

- **Advanced Search**: 
  - Search result highlighting
  - Fuzzy search implementation
  - Search suggestions and autocomplete
  - Search history
- **Note Categories**: Organize notes with tags and categories
- **Rich Text Editing**: Add formatting options like bold, italic, lists
- **Note Sharing**: Share notes via URL or export to different formats
- **Cloud Sync**: User authentication with cloud-based storage
- **Collaborative Editing**: Real-time collaborative note editing
- **Note Templates**: Pre-defined templates for different note types
- **Advanced Filtering**: Filter by date, category, completion status
- **Keyboard Shortcuts**: Power-user features with hotkeys including search shortcuts
- **Note Archiving**: Archive old notes without deleting them
- **Backup/Export**: Export notes to PDF, Markdown, or JSON
- **Drag and Drop**: Reorder notes with drag-and-drop functionality

## Live Demo

Visit the live application at [https://react-keeperapp.vercel.app/](https://react-keeperapp.vercel.app/)

Try the search functionality by:
1. Creating several notes with different titles and content
2. Using the search bar in the header to filter notes in real-time
3. Clearing the search to return to all notes
4. Testing the responsive search bar on different device sizes

## Acknowledgments

- Inspired by Google Keep
- Icons from Material UI and Lucide React
- Tailwind CSS for styling
- React community for best practices and patterns
