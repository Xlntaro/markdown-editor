# Markdown Text Editor

A modern text editor with Markdown support, built with React and TypeScript.

## Features

- Rich text editing with Markdown support
- Live preview of Markdown content
- File management (create, open, save)
- Syntax highlighting
- Auto-save functionality
- Dark/Light theme support
- Keyboard shortcuts
- Export to HTML/PDF
- Search and replace functionality
- Multiple tabs support
- File history

## Technical Stack

- React
- TypeScript
- Electron (for desktop app)
- Monaco Editor (for code editing)
- Marked (for Markdown parsing)
- TailwindCSS (for styling)
- IndexedDB (for local storage)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/     # React components
├── utils/         # Utility functions
├── styles/        # CSS and styling
├── hooks/         # Custom React hooks
├── context/       # React context providers
└── types/         # TypeScript type definitions
```

## Programming Principles

1. **Single Responsibility Principle (SRP)**
   - Each component and class has a single responsibility
   - Example: `MarkdownEditor.tsx` handles only editor functionality

2. **Open/Closed Principle (OCP)**
   - Components are open for extension but closed for modification
   - Example: Plugin system for extending editor features

3. **Interface Segregation Principle (ISP)**
   - Interfaces are specific to client needs
   - Example: Separate interfaces for file operations and editor operations

4. **Dependency Inversion Principle (DIP)**
   - High-level modules don't depend on low-level modules
   - Example: Using dependency injection for file system operations

5. **DRY (Don't Repeat Yourself)**
   - Reusable components and utilities
   - Example: Common editor operations in utility functions

## Design Patterns

1. **Observer Pattern**
   - Used for implementing the auto-save feature
   - File: `src/utils/AutoSaveManager.ts`

2. **Factory Pattern**
   - Used for creating different types of documents
   - File: `src/utils/DocumentFactory.ts`

3. **Strategy Pattern**
   - Used for different export strategies (HTML, PDF)
   - File: `src/utils/ExportStrategies.ts`

4. **Command Pattern**
   - Used for implementing undo/redo functionality
   - File: `src/utils/CommandManager.ts`

## Refactoring Techniques

1. **Extract Method**
   - Breaking down large methods into smaller, focused ones
   - Example: Editor operations in `MarkdownEditor.tsx`

2. **Replace Conditional with Polymorphism**
   - Using strategy pattern for different export formats
   - Example: `ExportStrategies.ts`

3. **Introduce Parameter Object**
   - Grouping related parameters into objects
   - Example: Editor configuration options

4. **Replace Magic Numbers with Named Constants**
   - Using constants for configuration values
   - Example: `src/utils/constants.ts`

5. **Extract Class**
   - Separating concerns into different classes
   - Example: File management operations

## Contributing

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

