# 概要
Node.js + Express + TypeScriptを用いたXライクなtoy application  
JSON APIのみ  
製作期間：5日(16.5時間)  

# できること
各`http/*.http`ファイルを参照。  
各`http/*.http`ファイルはVSCodeのREST Client拡張機能を使うことでAPIを叩けるようになっている。  
各ファイルのURLはローカルで動かすことを想定している。このアプリケーションをローカルで動かす場合、index.tsのコメント部分を入れ替え、Node.jsが入った環境にて`npm install`した後`npm run dev:watch`で動作させる。  
  
follow_relationは同じものを複数作れないようにしている。  

# URL
https://nodejs-ts-toy-1.onrender.com  
注意：エラー処理とかを一切していないので変なリクエストを送るとそのまま止まる  

# できてないことの中でやりたいこと
* 各種エラー処理
* 何らかの認証
