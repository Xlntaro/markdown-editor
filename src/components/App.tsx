import './App.css';
import { useMarkdown } from '../hooks/useMarkdown';
import MarkdownPreview from './MarkdownPreview';

function App() {
    const { markdown, updateMarkdown } = useMarkdown();

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        updateMarkdown(e.target.value);
    };

    return (
        <div className="App">
            <textarea value={markdown} onChange={handleChange} />
            <MarkdownPreview content={markdown} />
        </div>
    );
}

export default App;
