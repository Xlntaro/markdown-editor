export interface FileData {
  content: string;
  name: string;
  lastModified: Date;
}

export class FileManager {
  private static instance: FileManager;
  private files: Map<string, FileData>;

  private constructor() {
    this.files = new Map();
    this.loadFromLocalStorage();
  }

  public static getInstance(): FileManager {
    if (!FileManager.instance) {
      FileManager.instance = new FileManager();
    }
    return FileManager.instance;
  }

  private loadFromLocalStorage(): void {
    const savedFiles = localStorage.getItem('markdown-files');
    if (savedFiles) {
      const parsedFiles = JSON.parse(savedFiles);
      Object.entries(parsedFiles).forEach(([key, value]) => {
        this.files.set(key, {
          ...value as FileData,
          lastModified: new Date((value as FileData).lastModified)
        });
      });
    }
  }

  private saveToLocalStorage(): void {
    const filesObject = Object.fromEntries(this.files);
    localStorage.setItem('markdown-files', JSON.stringify(filesObject));
  }

  public saveFile(name: string, content: string): void {
    const fileData: FileData = {
      content,
      name,
      lastModified: new Date()
    };
    this.files.set(name, fileData);
    this.saveToLocalStorage();
  }

  public getFile(name: string): FileData | undefined {
    return this.files.get(name);
  }

  public getAllFiles(): FileData[] {
    return Array.from(this.files.values());
  }

  public deleteFile(name: string): void {
    this.files.delete(name);
    this.saveToLocalStorage();
  }

  public exportToFile(name: string, content: string): void {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
} 