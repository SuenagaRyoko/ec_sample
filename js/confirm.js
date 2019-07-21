window.onload = function () {
  'use strict';
  const items = JSON.parse(localStorage.getItem("items")),//ローカルストレージの商品データの配列
  ele = document.getElementById('js_shopping_list'),//カートの商品を追加する要素
  fragment = document.createDocumentFragment(),//DOMの追加処理用のフラグメント
  total_ele = document.getElementById('js_total'),//商品の合計金額表示用の要素
  confirm_btn = document.getElementById('js_confirm');//購入確定ボタン

  let total = 0;//商品の合計金額

  if (items) {
    // カート商品の数分、要素を作成
    /*
      <li>
        <h2>{{ 商品名 }}</h2>
        <div class="price">{{ 金額 }}</div>
      </li>
    */

  }

  // 作成した要素の追加
  ele.appendChild(fragment);
  // 合計金額の表示
  total_ele.innerHTML = format_cs(total);

  confirm_btn.addEventListener('click',function () {
    window.alert(`購入が確定しました。\xA5${ format_cs(total) }`);
    //localStorageを削除
  });


};