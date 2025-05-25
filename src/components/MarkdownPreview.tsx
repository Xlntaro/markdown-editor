import React from 'react';
import { parseMarkdown } from '../utils/markdown';

interface Props {
    content: string;
}

const MarkdownPreview: React.FC<Props> = ({ content }) => {
    return (
        <div
            className="preview"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
        />
    );
};

export default MarkdownPreview;
