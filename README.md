# Keeper - Note-Taking Application

A modern, responsive note-taking application built with React and Vite. This application allows users to create, edit, delete, and manage notes with an intuitive interface.

**Live Demo**: [https://react-keeperapp.vercel.app/](https://react-keeperapp.vercel.app/)


## Features

- **Create Notes**: Add new notes with title and content
- **Delete Notes**: Remove unwanted notes
- **Intuitive UI**: Clean and simple note-taking interface
- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Modern UI**: Clean interface built with Tailwind CSS

## Project Structure
```javascript
src/
  ├── components/
  │   ├── Header.jsx - Application header with app title
  │   ├── Footer.jsx - Application footer with copyright information
  │   ├── Note.jsx - Individual note display component
  │   ├── CreateArea.jsx - Form for creating new notes
  │   └── App.jsx - Main component managing notes state
  ├── index.css - Global styles and Tailwind configuration
  └── main.jsx - Application entry point
```

## Component Workflow

### App
- Main container component that manages the application state
- Stores the list of notes in state
- Passes handler functions to child components

### CreateArea
- Form component for creating new notes
- Manages form inputs for title and content
- Submits new note data to the App component

### Note
- Displays individual note content
- Provides buttons for editing and deletion
- Adapts appearance based on selected theme

### Header
- Houses the application title and branding

### Footer
- Displays copyright and additional information

## Implementation Details

1. **State Management**: Uses React's useState and useEffect hooks for local state management
2. **Local Storage**: Persists notes using browser localStorage API
3. **Conditional Rendering**: Dynamically changes UI based on application state
4. **Responsive Design**: Uses Tailwind CSS for responsive styling across all device sizes
5. **Dark Mode Implementation**: Leverages Tailwind CSS dark mode with custom theme toggle
6. **CSS Transitions**: Smooth transitions between themes using CSS transition properties
7. **Material UI Icons**: Leverages Material UI for consistent, clean iconography
8. **Component Architecture**: Modular components with clear separation of concerns
9. **System Theme Detection**: Uses matchMedia API to detect system dark mode preference
10. **Accessibility**: Implements ARIA attributes, keyboard navigation, and proper focus management



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
- **LocalStorage API** - Browser-based persistence for notes
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
- **ARIA Attributes**: Proper use of aria-label, aria-describedby, and role attributes
- **Keyboard Navigation**: All features accessible without a mouse
- **Undo Functionality**: Provides sufficient time to react to actions like deletion
- **Error Prevention**: Confirmation for destructive actions with clear undo options

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


## Acknowledgments

- Inspired by Google Keep
- Icons from Material UI
- Tailwind CSS for styling
- React community for best practices and patterns
