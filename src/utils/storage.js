// src/utils/storage.js

const STORAGE_KEY = 'markdown-content';

export const getMarkdown = () => {
    return localStorage.getItem(STORAGE_KEY) || '';
};

export const saveMarkdown = (content) => {
    localStorage.setItem(STORAGE_KEY, content);
};
