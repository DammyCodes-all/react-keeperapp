# Keeper - Note-Taking Application

A modern, responsive note-taking application built with React and Vite. This application allows users to create, edit, delete, and mark notes as completed, with a beautiful dark mode implementation.

**Live Demo**: [https://react-keeperapp.vercel.app/](https://react-keeperapp.vercel.app/)


## Features

- **Create Notes**: Add new notes with titles and content
- **Edit Notes**: Update existing notes with ease
- **Delete Notes**: Remove unwanted notes
- **Mark as Complete**: Toggle completion status for notes
- **Dark/Light Mode**: Seamless theme switching with smooth transitions
- **System Theme Detection**: Automatically matches system preference for dark/light mode
- **Persistent Storage**: Notes and theme preferences are saved to localStorage
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Expandable Textareas**: Content areas expand as you type
- **Modern UI**: Clean, intuitive interface with Tailwind CSS

## Project Structure
```javascript
src/
  ├── components/
  │   ├── header.jsx - Application header with theme toggle functionality
  │   ├── note.jsx - Individual note display component with dark mode styling
  │   ├── noteadd.jsx - Form for adding notes with theme-aware design
  │   ├── noteedit.jsx - Component for editing existing notes with theme support
  │   └── notespace.jsx - Main component managing note state and operations
  ├── App.jsx - Root application component with theme container
  ├── index.css - Global styles including Tailwind dark mode configuration
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
- Supports dark mode with appropriate contrast and styling

### NoteEdit

- Dedicated component for editing existing notes
- Maintains separate editing state from display state
- Provides save and cancel options
- Preserves readability in both light and dark themes

### Note

- Displays individual note content
- Provides buttons for completion, editing, and deletion
- Shows visual indicators for completed tasks
- Adapts appearance based on selected theme

### Header

- Houses the application title and branding
- Contains theme toggle component
- Adapts colors and styling based on current theme
- Preserves accessibility in both modes

### ThemeToggle

- Handles theme switching between light and dark modes
- Persists user preference in localStorage
- Syncs with system preference by default
- Provides smooth transition animations between themes

## Implementation Details

1. **State Management**: Uses React's useState and useEffect hooks for local state management
2. **Local Storage**: Persists notes and theme preferences using browser localStorage API
3. **Conditional Rendering**: Dynamically changes UI based on application state and theme
4. **Responsive Design**: Uses Tailwind CSS for responsive styling across all device sizes
5. **Dark Mode Implementation**: Leverages Tailwind CSS dark mode with custom theme toggle
6. **CSS Transitions**: Smooth transitions between themes using CSS transition properties
7. **Material UI Icons**: Leverages Material UI for consistent, clean iconography
8. **Component Architecture**: Modular components with clear separation of concerns
9. **System Theme Detection**: Uses matchMedia API to detect system dark mode preference

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
- **Tailwind CSS 4** - Utility-first CSS framework with dark mode support
- **Material UI 7** - Component library with pre-built icons
- **LocalStorage API** - Browser-based persistence for notes and theme
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
// Example of dark mode toggle implementation
const toggleTheme = () => {
  if (theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setTheme("light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  }
};
```

## Accessibility Features

- **Color Contrast**: Maintains WCAG AA standard contrast ratios in both themes
- **Semantic HTML**: Uses appropriate HTML elements for better screen reader support
- **Focus Indicators**: Visible focus states for keyboard navigation
- **Descriptive Button Labels**: All interactive elements have descriptive text or aria-labels
- **Responsive Text Sizing**: Text scales appropriately across device sizes

## Future Enhancements

- User authentication for cloud-based note storage
- Rich text formatting options
- Note categories and tags
- Search functionality
- Collaborative note editing
- Export notes to PDF or other formats
- Drag and drop reordering

## Performance Optimization

- Minimal re-renders with proper React component structure
- Efficient localStorage interactions
- Optimized Tailwind CSS with purging unused styles
- Responsive images and assets

## Live Demo

Visit the live application at [https://react-keeperapp.vercel.app/](https://react-keeperapp.vercel.app/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by Google Keep
- Icons from Material UI
- Tailwind CSS for styling
- React community for best practices and patterns
