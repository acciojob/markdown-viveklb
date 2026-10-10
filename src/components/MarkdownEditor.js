import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "../styles/App.css";

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("");
  const [previewMarkdown, setPreviewMarkdown] = useState("");

  useEffect(() => {
    setPreviewMarkdown(markdown);
  }, [markdown]);

  return (
    <main className="app">
      <header className="app-header">
        <div>
          <p className="eyebrow">WRITE / PREVIEW</p>
          <h1>Markdown Studio</h1>
        </div>
        <span className="status-indicator">LIVE</span>
      </header>

      <div className="editor-layout">
        <section className="editor-panel" aria-labelledby="input-heading">
          <div className="panel-heading">
            <h2 id="input-heading">Markdown</h2>
            <span>.md</span>
          </div>
          <textarea
            aria-label="Markdown input"
            className="textarea"
            onChange={(event) => setMarkdown(event.target.value)}
            placeholder="# Start writing\n\nType Markdown here..."
            value={markdown}
          />
        </section>

        <section className="preview-panel" aria-labelledby="preview-heading">
          <div className="panel-heading">
            <h2 id="preview-heading">Preview</h2>
            <span>RENDERED OUTPUT</span>
          </div>
          <div className="preview" aria-live="polite">
            {previewMarkdown ? (
              <ReactMarkdown>{previewMarkdown}</ReactMarkdown>
            ) : (
              <p className="empty-preview">Your rendered Markdown will appear here.</p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}