// src/utils/markdown.js
import { marked } from 'marked';

export const parseMarkdown = (text) => {
    return marked(text);
};
