import React, { Component } from 'react';
import { Button }  from 'react-bootstrap';
import html2canvas from 'html2canvas';

class Download extends Component {
  constructor(props){
    super(props);

    this.doAction = this.doAction.bind(this);
  }

  doAction(e){
    console.log("test");
    const input = document.getElementById('seatOrder');
    //ページを下にスクロールしている場合に描画がずれる現象への対応オプション
    const option = {
      scrollX: 0,
      scrollY: -window.scrollY
    }

    html2canvas(input, option).then(canvas => {
      this.saveCanvas(canvas);
    });
    
  }

  // canvas上のイメージを保存
  saveCanvas(canvas){
    // base64エンコードされたデータを取得 「data:image/png;base64,iVBORw0k～」
    var base64 = canvas.toDataURL("image/jpeg");
    // base64データをblobに変換
    var blob = this.Base64toBlob(base64);
    // blobデータをa要素を使ってダウンロード
    this.saveBlob(blob, "seatOrder.jpg");
  }

  // Base64データをBlobデータに変換
  Base64toBlob(base64){
    // カンマで分割して以下のようにデータを分ける
    // tmp[0] : データ形式（data:image/png;base64）
    // tmp[1] : base64データ（iVBORw0k～）
    var tmp = base64.split(',');
    // base64データの文字列をデコード
    var data = atob(tmp[1]);
    // tmp[0]の文字列（data:image/png;base64）からコンテンツタイプ（image/png）部分を取得
	  var mime = tmp[0].split(':')[1].split(';')[0];
    //  1文字ごとにUTF-16コードを表す 0から65535 の整数を取得
	  var buf = new Uint8Array(data.length);
	  for (var i = 0; i < data.length; i++) {
        buf[i] = data.charCodeAt(i);
    }
    // blobデータを作成
	  var blob = new Blob([buf], { type: mime });
    return blob;
  }

  //画像のダウンロード
  saveBlob(blob, fileName){
    var url = (window.URL || window.webkitURL);
    // ダウンロード用のURL作成
    var dataUrl = url.createObjectURL(blob);
    // イベント作成
    var event = document.createEvent("MouseEvents");
    event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    // a要素を作成
    var a = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    // ダウンロード用のURLセット
    a.href = dataUrl;
    // ファイル名セット
    a.download = fileName;
    // イベントの発火
    a.dispatchEvent(event);
  }

  render(){
    return(
      <p>
        4. 生成された座席表を画像としてダウンロードできます。<br />
        Twitterなどでシェアする際は
        <a href="https://twitter.com/search?q=%23%E5%AD%A6%E5%9C%92%E5%A4%A9%E5%9B%BD%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC&src=typed_query">#学園天国ジェネレーター</a>
        をつけてくれると嬉しいです！<br/>
        <Button variant="primary" onClick={this.doAction}>ダウンロード</Button>
      </p>
    );
  }
}
export default Download;