import React, { useEffect } from 'react';

type Props = {
  url: string;
  index?: number;
};

const NoteIframe: React.FC<Props> = ({ url, index }) => {
  const BASE_URL = 'https://note.com/embed/notes';

  // Injection script
  useEffect(() => {
    const url = 'https://note.com/scripts/embed.js';
    const scriptTag = document.createElement('script');

    let el: Element | null;

    if (document.querySelectorAll('.note-embed').length > 1) {
      el = document.querySelector(`.note-embed-${index}`);
    } else {
      el = document.querySelector('.note-embed');
    }

    if (!el) return;

    scriptTag.src = url;
    scriptTag.charset = 'utf-8';

    el.appendChild(scriptTag);
  }, []);

  const generateClassName = (index: number | undefined) => {
    if (index === undefined) {
      return 'note-embed';
    } else if (index >= 0) {
      return `note-embed note-embed-${index}`;
    }
  };

  // Get note id
  const pickNoteId = (url: string) => {
    const str = url.replace(/https:\/\/note.com.+\/n\//, '');
    return str;
  };

  // Default style
  const noteIframeStyle: React.CSSProperties = {
    border: 0,
    display: 'block',
    maxWidth: '99%',
    width: '494px',
    padding: 0,
    margin: '10px 0',
    position: 'static',
    visibility: 'visible',
    height: 400,
  };

  // Default class
  const className = generateClassName(index);

  return <iframe className={className} src={`${BASE_URL}/${pickNoteId(url)}`} style={noteIframeStyle} />;
};

export default NoteIframe;
