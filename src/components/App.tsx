// src/App.jsx

import { useState, useEffect } from 'react';
import './App.css';
import { parseMarkdown } from './utils/markdown';
import { getMarkdown, saveMarkdown } from './utils/storage';

function App() {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        const stored = getMarkdown();
        setMarkdown(stored);
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setMarkdown(value);
        saveMarkdown(value);
    };

    return (
        <div className="App">
      <textarea
          value={markdown}
          onChange={handleChange}
      />
            <div
                className="preview"
                dangerouslySetInnerHTML={{ __html: parseMarkdown(markdown) }}
            />
        </div>
    );
}

export default App;
