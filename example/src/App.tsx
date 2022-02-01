// TODO: 型定義ファイルが必要そう
// エラーは出ているけどローカル環境で操作はしてる
import NoteIframe from '../../dist/index.es.js';

const App = () => {
  const urls = [
    'https://note.com/info/n/n5f3106c86543',
    'https://note.com/m_sato_eigo/n/n7806557cad8c',
    'https://note.com/info/n/n1b004a5e2804',
  ];

  return (
    <>
      <h2>一つのコンポーネントのみ表示</h2>
      <NoteIframe url="https://note.com/info/n/nae69e1311418" />
      <h2>複数のNoteコンポーネントを表示</h2>
      {urls.map((url, key) => (
        <NoteIframe key={key} url={url} index={key} />
      ))}
    </>
  );
};

export default App;
