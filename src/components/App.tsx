import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { marked } from 'marked';
import Toolbar from './Toolbar';
import { FileManager } from '../utils/FileManager';
import { useTheme } from '../context/ThemeContext';

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('# Hello World\n\nStart typing your markdown here...');
  const [preview, setPreview] = useState<string>('');
  const [currentFileName, setCurrentFileName] = useState<string>('');
  const fileManager = FileManager.getInstance();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const html = marked.parse(markdown);
    setPreview(html as string);
  }, [markdown]);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setMarkdown(value);
    }
  };

  const handleNewFile = () => {
    setMarkdown('# New File\n\nStart typing your markdown here...');
    setCurrentFileName('');
  };

  const handleSaveFile = (name: string) => {
    fileManager.saveFile(name, markdown);
    setCurrentFileName(name);
  };

  const handleExportFile = (name: string) => {
    fileManager.exportToFile(name, markdown);
  };

  return (
    <div className={`flex flex-col h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Toolbar
        onNewFile={handleNewFile}
        onSaveFile={handleSaveFile}
        onExportFile={handleExportFile}
        currentFileName={currentFileName}
      />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Editor Panel */}
        <div className="w-1/2 p-4">
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg h-full`}>
            <Editor
              height="100%"
              defaultLanguage="markdown"
              value={markdown}
              onChange={handleEditorChange}
              theme={theme === 'dark' ? 'vs-dark' : 'light'}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: 'on',
                lineNumbers: 'on',
                renderWhitespace: 'selection',
              }}
            />
          </div>
        </div>

        {/* Preview Panel */}
        <div className="w-1/2 p-4">
          <div className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-lg shadow-lg h-full p-6 overflow-auto`}>
            <div
              className={`prose max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}
              dangerouslySetInnerHTML={{ __html: preview }}
            />
          </div>
        </div>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed bottom-4 right-4 p-2 rounded-full ${
          theme === 'dark' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'
        }`}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </div>
  );
};

export default App; 