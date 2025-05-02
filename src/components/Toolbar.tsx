import React, { useState } from 'react';
import { FileManager } from '../utils/FileManager';
import { useTheme } from '../context/ThemeContext';

interface ToolbarProps {
  onNewFile: () => void;
  onSaveFile: (name: string) => void;
  onExportFile: (name: string) => void;
  currentFileName: string;
}

const Toolbar: React.FC<ToolbarProps> = ({
  onNewFile,
  onSaveFile,
  onExportFile,
  currentFileName,
}) => {
  const [showFileList, setShowFileList] = useState(false);
  const fileManager = FileManager.getInstance();
  const { theme } = useTheme();

  const handleSave = () => {
    if (currentFileName) {
      onSaveFile(currentFileName);
    } else {
      const name = prompt('Enter file name:');
      if (name) {
        onSaveFile(name);
      }
    }
  };

  const handleExport = () => {
    const name = currentFileName || 'untitled.md';
    onExportFile(name);
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-700'} text-white p-2 flex items-center space-x-4`}>
      <button
        onClick={onNewFile}
        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded transition-colors"
      >
        New File
      </button>
      
      <button
        onClick={handleSave}
        className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded transition-colors"
      >
        Save
      </button>
      
      <button
        onClick={handleExport}
        className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded transition-colors"
      >
        Export
      </button>
      
      <div className="relative">
        <button
          onClick={() => setShowFileList(!showFileList)}
          className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded transition-colors"
        >
          Open File
        </button>
        
        {showFileList && (
          <div className={`absolute top-full left-0 mt-1 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } text-gray-800 rounded shadow-lg w-64 z-10`}>
            {fileManager.getAllFiles().map((file) => (
              <div
                key={file.name}
                className={`p-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center ${
                  theme === 'dark' ? 'text-white hover:bg-gray-700' : ''
                }`}
                onClick={() => {
                  onSaveFile(file.name);
                  setShowFileList(false);
                }}
              >
                <span>{file.name}</span>
                <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {new Date(file.lastModified).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Toolbar; 