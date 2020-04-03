// キャラ操作アプリ
// 要件１: 
// キャラクター要素を上下左右に動かせるようにしましょう。
// ヒント：キャラクターは、「座標」を使うとx軸とy軸の値を指定して配置のスタイルを変更できます。

// 要件２：
// keyCode、イベント、テンプレートリテラル、引数を必ず使用します。

// 座標x軸とy軸の初期値
let x = 0;
let y = 0;

function charaCommand(event) {
  const character = document.getElementById('fairly');
  const keyNumber = event.keyCode;
  if(keyNumber === 38) {
    //y = y + 50;
    y += 50;
    character.style.top = `${y}px`;
  } else if(keyNumber === 39) {
    x += 50;
    character.style.right = `${x}px`;
  } else if(keyNumber === 40) {
    y += 50;
    character.style.bottom = `${y}px`;
  } else if(keyNumber === 37) {
    x += 50;
    character.style.left = `${x}px`;
  } else {
    
  }
  // ↑キー: キー番号38
  // →キー: キー番号39
  // ↓キー: キー番号40
  // ←キー: キー番号37

  // 条件に応じたpositionスタイル付与で、キャラクターを移動させます。positionスタイルの値は「数値px」です。この表記のアウトプットに工夫をしましょう。

}
window.addEventListener("keydown", charaCommand);


/* 機能
1. キーボードを押すとKeycodeを取得する

*/

/* 引数　代入式でいうxyと同じと考えて良い
x=3
y=5 
x+y=8

function calculate(sum, sum2) {
  console.log(sum+1);
  console.log(sum2+1);
}
calculate(5, 6);
↑sum=5と同じ

詳しい条件→if
どれにもあてはまらない→else
*/