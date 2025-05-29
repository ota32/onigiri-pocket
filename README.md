プロジェクトの実行方法

このプロジェクトをローカル環境で起動し、確認するための手順は以下の通りです。

1, プロジェクトのセットアップ
プロジェクトフォルダのルートディレクトリで、必要な依存関係をインストールします。

> npm install

2, 開発サーバーの起動
開発サーバーを起動し、アプリケーションを実行します。

> npm run dev

3, ブラウザでのアクセス
上記コマンド実行後、ターミナルに表示されるURL（例：http://localhost:5173/）にブラウザからアクセスしてください。

4, 各ページの確認
以下のURLにアクセスすることで、対応するページを確認できます。

http://localhost:<数字>/hanesan
http://localhost:<数字>/okeyan
http://localhost:<数字>/kaneyan

5, ファイルとURLの対応関係
各ページは、以下のファイルパスに対応しています。
/<プロジェクトルート>/onigiri-pocket/app/routes/admin/ フォルダ内の各ファイルが、上記URLのパスと対応しています。

hanesan.tsx → http://localhost:<数字>/hanesan
okeyan.tsx → http://localhost:<数字>/okeyan
kaneyan.tsx → http://localhost:<数字>/kaneyan