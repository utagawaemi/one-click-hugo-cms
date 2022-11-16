// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "backend.php",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Test loop study",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "この度は、私たち帝京大学先端総合研究機構・岡ノ谷研究室の研究にご協力をいただき、誠にありがとうございます。\u003Cbr\u003E本研究では、音楽と感情に関わる心理実験をおこないます。本研究計画は、東京大学大学院総合文化研究科の倫理審査委員会、及び帝京大学先端総合研究機構の利益相反管理委員会で承認されたものです。",
          "title": "はじめに"
        },
        {
          "required": true,
          "type": "text",
          "title": "目的",
          "content": "この研究は、音楽による感情への影響の一端を明らかにすることが目的です。"
        },
        {
          "required": true,
          "type": "text",
          "title": "⚠️実験における注意事項⚠️ ",
          "content": "\u003Cfont color=\"red\"\u003E\u003Cb\u003Eこの実験では、ショッキングな写真が提示されます。心臓の弱い方やグロテスクな画像が苦手な方は、参加をご遠慮ください。\u003Cbr\u003E\nまた、必ず周りに誰もいないことを確認してから参加してください。\n\u003C\u002Fb\u003E\u003C\u002Ffont\u003E"
        },
        {
          "required": true,
          "type": "text",
          "title": "実験参加条件",
          "content": "以下の方を対象としています。\u003Cbr\u003E\n\u003Cb\u003E①18歳以上の方\u003Cbr\u003E\n②継続的な音楽経験が5年以下の方\u003Cbr\u003E\n③日本で生まれ育った方\n\u003C\u002Fb\u003E"
        },
        {
          "required": true,
          "type": "text",
          "title": "実験の手続き",
          "content": "ご自身のヘッドホンあるいはイヤホンを装着して、実験を行っていただきます。画面に表示される指示にしたがい、画面を見たり音楽を聞いていただきます。また、実験途中及び前後に、質問項目に回答していただく調査も行います。\u003Cbr\u003E\nまた、実験はご自身のPCを使って参加してください。\u003Cbr\u003E\nアプリ等の通知音は消して参加してください。"
        },
        {
          "required": true,
          "type": "text",
          "title": "実験の長さ",
          "content": "実験は平均で30分程度です。途中で適宜休憩をはさむことができます。実験中に気分が悪くなった場合などは随時中断していただいて構いません。ただし、実験を完遂されなかった場合は、謝金をお支払いすることはできませんので、ご了承ください。"
        },
        {
          "required": true,
          "type": "text",
          "title": "謝金",
          "content": "本実験にご協力を頂いた方には、実験完遂につき700円分のQUOカードPayを謝金としてお支払いします。"
        },
        {
          "required": true,
          "type": "text",
          "title": "匿名性",
          "content": "実験データは匿名化されて管理されます。私たちが名前や住所などの個人情報を得ることはありません。実験の性質上、年齢・聴力・音楽経験などについては実験サイト上でお答えいただく場合があります。これらのデータは、個人を特定できないよう当該研究室で責任を持って厳重に管理いたします。この研究に参加してもあなたのプライバシーが外に漏れたり発表されたりすることはありません。研究結果は論文や学会で発表しますが、発表の際は、実験データは集団の結果として扱います。"
        },
        {
          "required": true,
          "type": "text",
          "title": "参加と中止",
          "content": "この研究への参加の同意はあなたの自由意思で決めてください。参加に同意しなくても、あなたの不利益になることはありません。あなたが学生の場合も、学業評価とは関係なく、参加による利益も不利益もあなたに及ぼすものではありません。"
        },
        {
          "required": true,
          "type": "text",
          "title": "問い合わせ",
          "content": "参加前にわからない点や心配な点があれば、emi-utagawa\"@\"g.ecc.u-tokyo.ac.jpまでお問い合わせください。"
        },
        {
          "required": true,
          "type": "text",
          "title": "説明書の保管",
          "content": "実験に参加される方は、この説明を記載した\u003Ca href=\"https:\u002F\u002Fwww.dropbox.com\u002Fs\u002Fz0xapub1d7iy803\u002F%E5%AE%9F%E9%A8%93%E8%AA%AC%E6%98%8E%E6%9B%B8_%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E5%AE%9F%E9%A8%93.pdf?dl=0\"\u003EPDFファイル\u003C\u002Fa\u003Eをダウンロードして保存してください。\u003Cbr\u003E\u003Cbr\u003E\n\n実験実施者：\u003Cbr\u003E\n　宇田川 笑未 (東京大学 大学院総合文化研究科 大学院生)\u003Cbr\u003E\n研究責任者：\u003Cbr\u003E\n　岡ノ谷 一夫 (帝京大学 先端総合研究機構 教授)\n\u003Cbr\u003E\u003Cbr\u003E\n"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "\u003Cfont color=\"red\"\u003E実験参加に同意いただける場合はチェックをお願いします。同意いただけない方はウィンドウを閉じてください。\u003C\u002Ffont\u003E",
          "options": [
            {
              "label": "上記の説明をよく読み、理解した上で、実験への参加に同意します。",
              "coding": "agreement"
            }
          ],
          "name": "lessfont-color\"red\"greaterlessfontgreater"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "続ける →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Introduction"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "title": "実験に入る前に、アンケートと音量設定を行います。"
        },
        {
          "type": "text",
          "title": "アンケートにお答えください。"
        },
        {
          "required": true,
          "type": "input",
          "attributes": {
            "type": "number",
            "min": "18",
            "max": "60"
          },
          "label": "年齢",
          "help": "年齢を半角数字で入力してください。",
          "name": "age"
        },
        {
          "required": true,
          "type": "radio",
          "label": "性別",
          "options": [
            {
              "label": "男",
              "coding": "male"
            },
            {
              "label": "女",
              "coding": "female"
            },
            {
              "label": "その他",
              "coding": "others"
            },
            {
              "label": "回答しない",
              "coding": "hide"
            }
          ],
          "help": "性別を以下の選択肢からご回答ください。",
          "name": "sex"
        },
        {
          "required": true,
          "type": "input",
          "label": "メールアドレス（QUOカードPayのURLを送るのに使用します）",
          "name": "mail",
          "attributes": {
            "type": "email"
          }
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "age\u002Fsex\u002Femail"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {
        "message": "Transferring data",
        "subtitle": "Please wait a second…"
      },
      "responses": {
        "": ""
      },
      "messageHandlers": {
        "run": function anonymous(
) {
const transmitPlugins = this.parents[0].plugins.plugins
  .filter(p => p instanceof lab.plugins.Transmit)

if (transmitPlugins.length > 0) {
  // If a transmitPlugin is available,
  // pull out its options and transfer the data
  const ds = this.options.datastore
  const tp = transmitPlugins[0]
  ds.transmit(
    tp.url,
    { ...tp.metadata, payload: 'full' },
    { headers: tp.headers, encoding: tp.encoding },
  ).then(
    () => this.end('transmission successful')
  ).catch(
    () => this.end('transmission failed')
  )
} else if ('jatos' in window) {
  // If JATOS is available, send data there
  jatos.submitResultData(
    this.options.datastore.exportJson(),
    () => this.end('transmission successful'),
    () => this.end('transmission failed')
  )
} else {
  this.end('no compatible backend')
}
}
      },
      "title": "Data transmission (beta)",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n    \u003Cimg src=\"lib\u002Floading.svg\"\u003E\n    \u003Cp\u003E\n      \u003Cspan class=\"font-weight-bold\"\u003E\n        ${ this.parameters.message }\n      \u003C\u002Fspan\u003E\u003Cbr\u003E\n      \u003Cspan class=\"text-muted\"\u003E\n        ${ this.parameters.subtitle }\n      \u003C\u002Fspan\u003E\n    \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
      "notes": "This template transmits the study data to a compatible server-side backend. Currently, it supports the PHP, Open Lab and JATOS backends.\n\nIt will wait until the data is transferred, showing a waiting screen with the text defined below, and continue with the remainder of the study after the transmission is complete. Please note that this screen will be skipped if no compatible backend is available."
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "ご参加いただきありがとうございました。\u003Cbr\u003E\nescキーを押し、ウィンドウを閉じてください。",
          "title": "実験は以上となります。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {
        "download_csv1.png": "embedded\u002F647e254a4a3b0d1f79a7e5b75c3208abe087576d84c8af25a2b14437a1a0fe6e.png",
        "download_csv2.png": "embedded\u002Ff6667d46f641494409791cf19af038a9e9a2dfaffcab6878cf634a47ad7a375b.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "finish"
    }
  ]
})

// Let's go!
study.run()