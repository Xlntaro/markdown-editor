import { useState, useEffect } from 'react';
import { getMarkdown, saveMarkdown } from '../utils/storage';

export const useMarkdown = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        const stored = getMarkdown();
        setMarkdown(stored);
    }, []);

    const updateMarkdown = (value: string) => {
        setMarkdown(value);
        saveMarkdown(value);
    };

    return { markdown, updateMarkdown };
};
