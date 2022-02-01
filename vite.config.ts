import { defineConfig } from 'vite';

// TODO: ここのエラーが解決できない。ビルドは成功した
import * as packageJson from './package.json';

import { resolve } from 'path';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // デフォルトではjsx-runtime形式の肥大化したコードが生成されてしまう。
    // ライブラリとしては、jsx-runtime形式の出力のメリットは薄いため、クラシックスタイルの出力に変更する
    plugin({
      jsxRuntime: 'classic',
    }),
  ],
  // ライブラリ用のビルドを設定できる
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: 'react-note-iframe-component',
      formats: ['es', 'cjs'],
      fileName: (ext) => `index.${ext}.js`,
    },
    rollupOptions: {
      // 依存関係のバンドルを無効にする
      external: [...Object.keys(packageJson.peerDependencies), ...Object.keys(packageJson.dependencies)],
    },
    target: 'ESNext',
    sourcemap: true,
  },
});
