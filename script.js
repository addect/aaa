// script.js

// エリア2の選択肢データ
const area2Options = {
  ランド: [
    "ワールドバザール",
    "アドベンチャーランド",
    "ウエスタンランド",
    "クリッターカントリー",
    "ファンタジーランド",
    "トゥーンタウン",
    "トゥモローランド",
  ],
  シー: [
    "メディテレーニアンハーバー",
    "アメリカンウォーターフロント",
    "ポートディスカバリー",
    "ロストリバーデルタ",
    "マーメイドラグーン",
    "アラビアンコースト",
    "ミステリアスアイランド",
    "ファンタジースプリングス",
  ],
};

// エリア1とエリア2の要素
const area1Select = document.getElementById("area1");
const area2Select = document.getElementById("area2");

// エリア1が変更されたときのイベントリスナー
area1Select.addEventListener("change", () => {
  const selectedArea1 = area1Select.value;

  // エリア2の選択肢をクリア
  area2Select.innerHTML = "";

  if (selectedArea1 && area2Options[selectedArea1]) {
    // エリア2の選択肢を追加
    area2Options[selectedArea1].forEach(option => {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.textContent = option;
      area2Select.appendChild(optionElement);
    });
    area2Select.disabled = false; // 有効化
  } else {
    // エリア1が未選択の場合
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "エリア1を選択してください";
    area2Select.appendChild(defaultOption);
    area2Select.disabled = true; // 無効化
  }
});

// 検索ボタンのクリックイベント
document.getElementById("search-button").addEventListener("click", () => {
  const storeName = document.getElementById("store-name").value.trim();
  const area1 = area1Select.value;
  const area2 = area2Select.value;
  const tag = document.getElementById("tag").value.trim();

  const results = stores.filter(store => {
    // AND条件で検索
    return (
      (!storeName || store.name.includes(storeName)) &&
      (!area1 || store.area === area1) &&
      (!area2 || store.area2 === area2) &&
      (!tag || store.tags.includes(tag))
    );
  });

  displayResults(results);
});

// 検索結果を表示
function displayResults(results) {
  const resultsList = document.getElementById("results-list");
  resultsList.innerHTML = "";

  if (results.length === 0) {
    resultsList.innerHTML = "<li>該当する結果がありません。</li>";
    return;
  }

  results.forEach(store => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>店名:</strong> ${store.name}<br>
      <strong>エリア1:</strong> ${store.area}<br>
      <strong>エリア2:</strong> ${store.area2 || "未設定"}<br>
      <strong>タグ:</strong> ${store.tags.join(", ")}<br>
      <strong>料理:</strong> ${store.dishes.join(", ")}
    `;
    resultsList.appendChild(li);
  });
}

// サンプルデータ
const stores = [
  { name: "アイスクリームコーン", area: "ランド", area2: "ワールドバザール", tags: ["スイーツ"], dishes: ["ソフトクリーム"] },
  { name: "イーストサイドカフェ", area: "ランド", area2: "ワールドバザール", tags: ["洋食", "パスタ"], dishes: ["パスタセット", "スープ"] },
  { name: "グレートアメリカン・ワッフルカンパニー", area: "ランド", area2: "ワールドバザール", tags: ["スイーツ"], dishes: ["ワッフル"] },
  { name: "スウィートハート・カフェ", area: "ランド", area2: "ワールドバザール", tags: ["軽食", "ベーカリー"], dishes: ["サンドウィッチ"] },
  { name: "センターストリート・コーヒーハウス", area: "ランド", area2: "ワールドバザール", tags: ["カフェ"], dishes: ["コーヒー", "ケーキ"] },
  { name: "リフレッシュメントコーナー", area: "ランド", area2: "ワールドバザール", tags: ["軽食"], dishes: ["ホットドッグ"] },
  { name: "れすとらん北斎", area: "ランド", area2: "ワールドバザール", tags: ["和食"], dishes: ["天ぷら", "寿司"] },
  { name: "スウィートハート・カフェ前（ポップコーン）", area: "ランド", area2: "ワールドバザール", tags: ["スナック", "ポップコーン"], dishes: ["キャラメルポップコーン"] },
  { name: "カフェ・オーリンズ", area: "ランド", area2: "アドベンチャーランド", tags: ["洋食"], dishes: ["チキンプレート"] },
  { name: "クリスタルパレス・レストラン", area: "ランド", area2: "アドベンチャーランド", tags: ["ビュッフェ", "洋食", "イベント"], dishes: ["ビュッフェ料理"] },
  { name: "ザ・ガゼーボ", area: "ランド", area2: "アドベンチャーランド", tags: ["スープ"], dishes: ["スープ"] },
  { name: "スキッパーズ・ギャレー", area: "ランド", area2: "アドベンチャーランド", tags: ["軽食"], dishes: ["サンドウィッチ"] },
  { name: "スクウィーザーズ・トロピカル・ジュースバー", area: "ランド", area2: "アドベンチャーランド", tags: ["ジュース"], dishes: ["フルーツジュース"] },
  { name: "チャイナボイジャー", area: "ランド", area2: "アドベンチャーランド", tags: ["中華"], dishes: ["ラーメン"] },
  { name: "ブルーバイユー・レストラン", area: "ランド", area2: "アドベンチャーランド", tags: ["洋食", "イベント"], dishes: ["ステーキ"] },
  { name: "フレッシュフルーツオアシス", area: "ランド", area2: "アドベンチャーランド", tags: ["スナック"], dishes: ["フルーツ"] },
  { name: "ボイラールームバイツ", area: "ランド", area2: "アドベンチャーランド", tags: ["スナック"], dishes: ["チキン"] },
  { name: "ポリネシアンテラス・レストラン", area: "ランド", area2: "アドベンチャーランド", tags: ["洋食", "イベント"], dishes: ["チキン"] },
  { name: "キャンプ・ウッドチャック・キッチン", area: "ランド", area2: "ウエスタンランド", tags: ["軽食"], dishes: ["ハンバーガー"] },
  { name: "ザ・ダイヤモンドホースシュー", area: "ランド", area2: "ウエスタンランド", tags: ["洋食", "イベント"], dishes: ["ステーキセット"] },
  { name: "ハングリーベア・レストラン", area: "ランド", area2: "ウエスタンランド", tags: ["洋食", "カレー"], dishes: ["カレーライス"] },
  { name: "グランマ・サラのキッチン", area: "ランド", area2: "クリッターカントリー", tags: ["洋食"], dishes: ["チキンステーキ"] },
  { name: "ラケッティのラクーンサルーン", area: "ランド", area2: "クリッターカントリー", tags: ["軽食"], dishes: ["スナック"] },
  { name: "クイーン・オブ・ハートのバンケットホール", area: "ランド", area2: "ファンタジーランド", tags: ["洋食", "イベント"], dishes: ["ステーキ"] },
  { name: "ラ・タベルヌ・ド・ガストン", area: "ランド", area2: "ファンタジーランド", tags: ["フレンチ"], dishes: ["スープ"] },
  { name: "トゥモローランド・テラス", area: "ランド", area2: "トゥモローランド", tags: ["軽食"], dishes: ["バーガー"] },
  { name: "パン・ギャラクティック・ピザ・ポート", area: "ランド", area2: "トゥモローランド", tags: ["ピザ"], dishes: ["ピザ"] },
  { name: "ビッグポップ", area: "ランド", area2: "トゥモローランド", tags: ["スナック"], dishes: ["ポップコーン"] },
  { name: "プラザパビリオン・レストラン", area: "ランド", area2: "ファンタジーランド", tags: ["洋食", "イベント"], dishes: ["カレー", "サラダ"] },
  { name: "ペコスビル・カフェ", area: "ランド", area2: "ウエスタンランド", tags: ["軽食"], dishes: ["バーガー"] },
  { name: "キャプテンフックス・ギャレー", area: "ランド", area2: "ファンタジーランド", tags: ["ピザ"], dishes: ["ピザ"] },
  { name: "クレオズ", area: "ランド", area2: "ファンタジーランド", tags: ["軽食"], dishes: ["スナック"] },
  { name: "トルバドールタバン", area: "ランド", area2: "ファンタジーランド", tags: ["軽食"], dishes: ["スープ"] },
  { name: "ビレッジペイストリー", area: "ランド", area2: "ファンタジーランド", tags: ["スイーツ"], dishes: ["ペイストリー"] },
  { name: "マジカルマーケット", area: "ランド", area2: "トゥモローランド", tags: ["軽食"], dishes: ["スナック"] },
  { name: "ル・プティポッパー（ポップコーン）", area: "ランド", area2: "ファンタジーランド", tags: ["ポップコーン"], dishes: ["ポップコーン"] },
  { name: "キャッスルカルーセル前（ポップコーン）", area: "ランド", area2: "ファンタジーランド", tags: ["ポップコーン"], dishes: ["ポップコーン"] },
  { name: "プーさんのハニーハント前（ポップコーン）", area: "ランド", area2: "ファンタジーランド", tags: ["ポップコーン"], dishes: ["ポップコーン"] },
  { name: "ル・フウズ", area: "ランド", area2: "ファンタジーランド", tags: ["軽食"], dishes: ["スナック"] },
  { name: "トゥーン・トリート", area: "ランド", area2: "トゥーンタウン", tags: ["軽食"], dishes: ["スナック"] },
  { name: "ヒューイデューイルーイのグッドタイムカフェ", area: "ランド", area2: "トゥーンタウン", tags: ["軽食"], dishes: ["バーガー"] },
  { name: "ポップ・ア・ロット・ポップコーン", area: "ランド", area2: "トゥーンタウン", tags: ["ポップコーン"], dishes: ["ポップコーン"] },
  { name: "ミッキーのトレーラ", area: "ランド", area2: "トゥーンタウン", tags: ["軽食"], dishes: ["スナック"] }
];


