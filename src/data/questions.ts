export type Question = {
  id: number;
  text: string;
  options: { id: string; text: string }[];
  correctAnswers: string[];
  sourceId: string;
};

export const questions: Question[] = [
  {
    id: 1,
    text: "自己免疫性膵炎で誤っているのはどれか。",
    options: [
      { id: 'a', text: "ａ 膵の萎縮を認める。" },
      { id: 'b', text: "ｂ 高齢男性に好発する。" },
      { id: 'c', text: "ｃ 病理で線維化を認める。" },
      { id: 'd', text: "ｄ IgG4 関連疾患に含まれる。" },
      { id: 'e', text: "ｅ 治療はグルココルチコイド投与が第一選択である。" }
    ],
    correctAnswers: ['a'],
    sourceId: "119A01"
  },
  {
    id: 2,
    text: "パソコンで長時間の作業をする若年労働者に生じやすい、頸部痛と上肢のしびれをきたす疾患はどれか。",
    options: [
      { id: 'a', text: "ａ 頸肩腕障害" },
      { id: 'b', text: "ｂ 肩関節周囲炎" },
      { id: 'c', text: "ｃ 肘部管症候群" },
      { id: 'd', text: "ｄ 変形性頸椎症" },
      { id: 'e', text: "ｅ 頸椎後縦靱帯骨化症" }
    ],
    correctAnswers: ['a'],
    sourceId: "119A02"
  },
  {
    id: 3,
    text: "Which of the following is the most common site of hypertensive intracerebral hemorrhage?",
    options: [
      { id: 'a', text: "ａ Amygdala" },
      { id: 'b', text: "ｂ Hippocampus" },
      { id: 'c', text: "ｃ Hypothalamus" },
      { id: 'd', text: "ｄ Putamen" },
      { id: 'e', text: "ｅ Red nucleus" }
    ],
    correctAnswers: ['d'],
    sourceId: "119A03"
  },
  {
    id: 4,
    text: "疾患と好発部位の組合せで誤っているのはどれか。",
    options: [
      { id: 'a', text: "ａ 疥　癬 外陰部" },
      { id: 'b', text: "ｂ ケロイド 耳　介" },
      { id: 'c', text: "ｃ 脂腺母斑 頭　部" },
      { id: 'd', text: "ｄ 血管性浮腫 口　唇" },
      { id: 'e', text: "ｅ ケラトアカントーマ 臍　部" }
    ],
    correctAnswers: ['e'],
    sourceId: "119A04"
  },
  {
    id: 5,
    text: "朝の家庭血圧を測定する条件で適切でないのはどれか。",
    options: [
      { id: 'a', text: "ａ 朝食前" },
      { id: 'b', text: "ｂ 排尿前" },
      { id: 'c', text: "ｃ 服薬前" },
      { id: 'd', text: "ｄ 座位安静後" },
      { id: 'e', text: "ｅ 起床後 1 時間以内" }
    ],
    correctAnswers: ['b'],
    sourceId: "119A05"
  },
  {
    id: 6,
    text: "むずむず脚症候群で正しいのはどれか。",
    options: [
      { id: 'a', text: "ａ 不眠を生じる。" },
      { id: 'b', text: "ｂ 明け方に生じる。" },
      { id: 'c', text: "ｃ 上肢から生じる。" },
      { id: 'd', text: "ｄ 歩行を続けると増悪する。" },
      { id: 'e', text: "ｅ 異常感覚は脚の表面に出現する。" }
    ],
    correctAnswers: ['a'],
    sourceId: "119A06"
  },
  {
    id: 7,
    text: "潰瘍性大腸炎に特徴的な所見はどれか。",
    options: [
      { id: 'a', text: "ａ 敷石像" },
      { id: 'b', text: "ｂ 縦走潰瘍" },
      { id: 'c', text: "ｃ 全層性炎症" },
      { id: 'd', text: "ｄ 難治性痔瘻" },
      { id: 'e', text: "ｅ 連続性病変" }
    ],
    correctAnswers: ['e'],
    sourceId: "119A07"
  },
  {
    id: 8,
    text: "尿路結石症の予防で正しいのはどれか。",
    options: [
      { id: 'a', text: "ａ 低カルシウム食が推奨される。" },
      { id: 'b', text: "ｂ 予防法は結石成分によらず同じである。" },
      { id: 'c', text: "ｃ 野菜と果実の摂取量を制限することが推奨される。" },
      { id: 'd', text: "ｄ 食事によるナトリウム摂取量を制限する必要はない。" },
      { id: 'e', text: "ｅ 1 日尿量が 2,000 mL 以上となるように水分摂取が推奨される。" }
    ],
    correctAnswers: ['e'],
    sourceId: "119A08"
  },
  {
    id: 9,
    text: "肩関節脱臼で正しいのはどれか。",
    options: [
      { id: 'a', text: "ａ 横隔神経麻痺の合併が多い。" },
      { id: 'b', text: "ｂ 肩関節周囲炎の原因となる。" },
      { id: 'c', text: "ｃ 後方に脱臼することが多い。" },
      { id: 'd', text: "ｄ 再脱臼は若年者で生じやすい。" },
      { id: 'e', text: "ｅ 肩関節内転位で脱臼することが多い。" }
    ],
    correctAnswers: ['d'],
    sourceId: "119A09"
  },
  {
    id: 10,
    text: "薬剤と尿細管作用部位の組合せで正しいのはどれか。",
    options: [
      { id: 'a', text: "ａ SGLT2 阻害薬 近位尿細管" },
      { id: 'b', text: "ｂ 抗アルドステロン薬 Henle の上行脚" },
      { id: 'c', text: "ｃ サイアザイド系利尿薬 集合管" },
      { id: 'd', text: "ｄ バソプレシン V2 受容体拮抗薬 遠位尿細管" },
      { id: 'e', text: "ｅ ループ利尿薬 Henle の下行脚" }
    ],
    correctAnswers: ['a'],
    sourceId: "119A10"
  },
  {
    id: 11,
    text: "随時血糖 250 mg/dL を示す非妊娠者で糖尿病の診断基準を満たすのはどれか。2 つ選べ。",
    options: [
      { id: 'a', text: "ａ 尿糖陽性" },
      { id: 'b', text: "ｂ 尿蛋白陽性" },
      { id: 'c', text: "ｃ HbA1c 6.7 %" },
      { id: 'd', text: "ｄ 尿ケトン体陽性" },
      { id: 'e', text: "ｅ 口渇、多飲、多尿の症状" }
    ],
    correctAnswers: ['c', 'e'],
    sourceId: "119A12"
  },
  {
    id: 12,
    text: "Brugada 症候群における突然死のリスクファクターはどれか。2 つ選べ。",
    options: [
      { id: 'a', text: "ａ 喫煙歴：あり" },
      { id: 'b', text: "ｂ 既往歴：糖尿病" },
      { id: 'c', text: "ｃ 既往歴：原因不明の失神あり" },
      { id: 'd', text: "ｄ 家族歴：父親が 43 歳で突然死" },
      { id: 'e', text: "ｅ アレルギー歴：抗菌薬でアレルギーあり" }
    ],
    correctAnswers: ['c', 'd'],
    sourceId: "119A13"
  },
  {
    id: 13,
    text: "65 歳以上で定期接種の対象となるワクチンはどれか。2 つ選べ。",
    options: [
      { id: 'a', text: "ａ 風疹ワクチン" },
      { id: 'b', text: "ｂ B 型肝炎ワクチン" },
      { id: 'c', text: "ｃ 髄膜炎菌ワクチン" },
      { id: 'd', text: "ｄ 肺炎球菌ワクチン" },
      { id: 'e', text: "ｅ インフルエンザワクチン" }
    ],
    correctAnswers: ['d', 'e'],
    sourceId: "119A14"
  }
  ,
  {
    id: 14,
    text: "疾患とその俗称の組合せで正しいのはどれか。",
    options: [
      { id: 'a', text: "ａ 鶏　眼 うおのめ" },
      { id: 'b', text: "ｂ 色素性母斑 とびひ" },
      { id: 'c', text: "ｃ 水　痘 みずいぼ" },
      { id: 'd', text: "ｄ 麦粒腫 そばかす" },
      { id: 'e', text: "ｅ 風　疹 はしか" }
    ],
    correctAnswers: ['a'],
    sourceId: "119B01"
  },
  {
    id: 15,
    text: "根拠に基づいた医療〈EBM〉を実践する過程に含まれないのはどれか。",
    options: [
      { id: 'a', text: "ａ 患者への適用" },
      { id: 'b', text: "ｂ 文献情報の収集" },
      { id: 'c', text: "ｃ 文献の批判的吟味" },
      { id: 'd', text: "ｄ 患者の問題の定式化" },
      { id: 'e', text: "ｅ 個人の経験に依存した判断" }
    ],
    correctAnswers: ['e'],
    sourceId: "119B02"
  },
  {
    id: 16,
    text: "在宅医療で正しいのはどれか。",
    options: [
      { id: 'a', text: "ａ 緩和ケアは在宅医療の中で実施できる。" },
      { id: 'b', text: "ｂ 緊急時に行う在宅医療は訪問診療と呼ばれる。" },
      { id: 'c', text: "ｃ 使用した注射針は一般廃棄物として処理する。" },
      { id: 'd', text: "ｄ 我が国では病院よりも在宅で死亡する場合が多い。" },
      { id: 'e', text: "ｅ 訪問看護を利用する場合は介護保険よりも医療保険が優先される。" }
    ],
    correctAnswers: ['a'],
    sourceId: "119B03"
  },
  {
    id: 17,
    text: "老人性難聴で正しいのはどれか。",
    options: [
      { id: 'a', text: "ａ 耳鳴は伴わないことが多い。" },
      { id: 'b', text: "ｂ 聴力低下は高音から始まる。" },
      { id: 'c', text: "ｃ 伝音難聴を示すことが多い。" },
      { id: 'd', text: "ｄ 補聴器の使用は極力避ける。" },
      { id: 'e', text: "ｅ 純音聴力検査で左右非対称性の難聴を示す。" }
    ],
    correctAnswers: ['b'],
    sourceId: "119B04"
  },
  {
    id: 18,
    text: "都道府県が設置主体でないのはどれか。",
    options: [
      { id: 'a', text: "ａ 児童相談所" },
      { id: 'b', text: "ｂ 医療安全支援センター" },
      { id: 'c', text: "ｃ 精神保健福祉センター" },
      { id: 'd', text: "ｄ 地域医療支援センター" },
      { id: 'e', text: "ｅ 地域包括支援センター" }
    ],
    correctAnswers: ['e'],
    sourceId: "119B05"
  },
  {
    id: 19,
    text: "改訂長谷川式簡易知能評価スケールの項目に含まれないのはどれか。",
    options: [
      { id: 'a', text: "ａ 計　算" },
      { id: 'b', text: "ｂ 見当識" },
      { id: 'c', text: "ｃ 物品記銘" },
      { id: 'd', text: "ｄ 数字の逆唱" },
      { id: 'e', text: "ｅ 立方体の模写" }
    ],
    correctAnswers: ['e'],
    sourceId: "119B06"
  },
  {
    id: 20,
    text: "医師の言葉がけで最も共感的なのはどれか。",
    options: [
      { id: 'a', text: "ａ 「夜は眠れていますか」" },
      { id: 'b', text: "ｂ 「元気を出してくださいよ」" },
      { id: 'c', text: "ｃ 「痛み止めを処方しますね」" },
      { id: 'd', text: "ｄ 「私がなんとかしましょう」" },
      { id: 'e', text: "ｅ 「心身ともにおつらいですね」" }
    ],
    correctAnswers: ['e'],
    sourceId: "119B07"
  },
  {
    id: 21,
    text: "細菌培養検査の検体に適さないのはどれか。",
    options: [
      { id: 'a', text: "ａ 中間尿" },
      { id: 'b', text: "ｂ 尿道分泌物" },
      { id: 'c', text: "ｃ 導尿で採取した尿" },
      { id: 'd', text: "ｄ 腎瘻造設時に採取した尿" },
      { id: 'e', text: "ｅ 尿道留置カテーテルの集尿袋内の尿" }
    ],
    correctAnswers: ['e'],
    sourceId: "119B08"
  },
  {
    id: 22,
    text: "我が国の医療保険制度で正しいのはどれか。",
    options: [
      { id: 'a', text: "ａ 外国籍でも加入できる。" },
      { id: 'b', text: "ｂ 財源は保険料より公費が多い。" },
      { id: 'c', text: "ｃ 療養の給付は現金給付である。" },
      { id: 'd', text: "ｄ 予防接種は保険給付の対象である。" },
      { id: 'e', text: "ｅ 保険医療機関は調剤を行う院外薬局を指定する。" }
    ],
    correctAnswers: ['a'],
    sourceId: "119B10"
  },
  {
    id: 23,
    text: "毛細血管内血液の還元ヘモグロビン濃度が 5 g/dL 以上になると出現し、皮膚や粘膜が暗紫色になるのはどれか。",
    options: [
      { id: 'a', text: "ａ 黄　疸" },
      { id: 'b', text: "ｂ 紅　斑" },
      { id: 'c', text: "ｃ 紫　斑" },
      { id: 'd', text: "ｄ 網状皮斑" },
      { id: 'e', text: "ｅ チアノーゼ" }
    ],
    correctAnswers: ['e'],
    sourceId: "119B11"
  },
  {
    id: 24,
    text: "思春期の脊柱側弯症の身体診察でみられないのはどれか。",
    options: [
      { id: 'a', text: "ａ 肋骨隆起" },
      { id: 'b', text: "ｂ 胸椎の叩打痛" },
      { id: 'c', text: "ｃ 片側肩甲骨の突出" },
      { id: 'd', text: "ｄ 肩の高さの左右差" },
      { id: 'e', text: "ｅ ウエストラインの非対称" }
    ],
    correctAnswers: ['b'],
    sourceId: "119B12"
  },
  {
    id: 25,
    text: "女子の思春期で正しいのはどれか。",
    options: [
      { id: 'a', text: "ａ 初経は排卵性の月経である。" },
      { id: 'b', text: "ｂ 思春期まで卵胞数は増加する。" },
      { id: 'c', text: "ｃ 初経前にゴナドトロピンは低下する。" },
      { id: 'd', text: "ｄ 大量のエストロゲンは骨端線を閉鎖させる。" },
      { id: 'e', text: "ｅ 二次性徴は陰毛発育、乳房発育、初経の順に進む。" }
    ],
    correctAnswers: ['d'],
    sourceId: "119B13"
  },
  {
    id: 26,
    text: "在宅医療・介護のサービスで医師の指示が必要でないのはどれか。",
    options: [
      { id: 'a', text: "ａ 訪問介護" },
      { id: 'b', text: "ｂ 訪問看護" },
      { id: 'c', text: "ｃ 訪問栄養指導" },
      { id: 'd', text: "ｄ 訪問薬剤管理指導" },
      { id: 'e', text: "ｅ 訪問リハビリテーション" }
    ],
    correctAnswers: ['a'],
    sourceId: "119B14"
  },
  {
    id: 27,
    text: "消化管位置異常のない患者で上部内視鏡検査を開始する際にとらせる体位はどれか。",
    options: [
      { id: 'a', text: "ａ 右側臥位" },
      { id: 'b', text: "ｂ 起座位" },
      { id: 'c', text: "ｃ 仰臥位" },
      { id: 'd', text: "ｄ 砕石位" },
      { id: 'e', text: "ｅ 左側臥位" }
    ],
    correctAnswers: ['e'],
    sourceId: "119B15"
  },
  {
    id: 28,
    text: "急性中耳炎の症状で緊急に画像検査が必要なのはどれか。",
    options: [
      { id: 'a', text: "ａ 耳　痛" },
      { id: 'b', text: "ｂ 耳　漏" },
      { id: 'c', text: "ｃ 頭　痛" },
      { id: 'd', text: "ｄ 難　聴" },
      { id: 'e', text: "ｅ 発　熱" }
    ],
    correctAnswers: ['c'],
    sourceId: "119B16"
  },
  {
    id: 29,
    text: "透析導入されていない保存期末期腎不全患者の食事療法で制限が必要ないのはどれか。",
    options: [
      { id: 'a', text: "ａ リ　ン" },
      { id: 'b', text: "ｂ 食　塩" },
      { id: 'c', text: "ｃ 蛋白質" },
      { id: 'd', text: "ｄ カリウム" },
      { id: 'e', text: "ｅ エネルギー" }
    ],
    correctAnswers: ['e'],
    sourceId: "119B17"
  },
  {
    id: 30,
    text: "動脈採血に最も適しているのはどれか。",
    options: [
      { id: 'a', text: "ａ 総頸動脈" },
      { id: 'b', text: "ｂ 鎖骨下動脈" },
      { id: 'c', text: "ｃ 尺骨動脈" },
      { id: 'd', text: "ｄ 大腿動脈" },
      { id: 'e', text: "ｅ 膝窩動脈" }
    ],
    correctAnswers: ['d'],
    sourceId: "119B18"
  },
  {
    id: 31,
    text: "めまいを呈する疾患とその特徴の組合せで誤っているのはどれか。",
    options: [
      { id: 'a', text: "ａ Ménière 病 難　聴" },
      { id: 'b', text: "ｂ 小脳梗塞 運動失調" },
      { id: 'c', text: "ｃ 聴神経腫瘍 聴力低下" },
      { id: 'd', text: "ｄ 脳幹出血 視力低下" },
      { id: 'e', text: "ｅ パニック症 動　悸" }
    ],
    correctAnswers: ['d'],
    sourceId: "119B19"
  },
  {
    id: 32,
    text: "妊婦が胎動を感じ始める妊娠週数はどれか。",
    options: [
      { id: 'a', text: "ａ 4" },
      { id: 'b', text: "ｂ 12" },
      { id: 'c', text: "ｃ 20" },
      { id: 'd', text: "ｄ 28" },
      { id: 'e', text: "ｅ 36" }
    ],
    correctAnswers: ['c'],
    sourceId: "119B20"
  },
  {
    id: 33,
    text: "血中 FSH 54 mIU/mL（基準 5.2～14.4）、血中エストラジオール 10 pg/mL（基準 25～75）の場合、続発性無月経の原因部位はどれか。",
    options: [
      { id: 'a', text: "ａ 視　床" },
      { id: 'b', text: "ｂ 視床下部" },
      { id: 'c', text: "ｃ 下垂体" },
      { id: 'd', text: "ｄ 副　腎" },
      { id: 'e', text: "ｅ 卵　巣" }
    ],
    correctAnswers: ['e'],
    sourceId: "119B21"
  },
  {
    id: 34,
    text: "個人情報の医療機関から第三者への提供で、本人の同意が必要なのはどれか。",
    options: [
      { id: 'a', text: "ａ 患者の職場からの照会への回答" },
      { id: 'b', text: "ｂ 調剤薬局からの疑義照会への回答" },
      { id: 'c', text: "ｃ 健康保険の審査支払機関からの照会への回答" },
      { id: 'd', text: "ｄ 市役所からの生活保護受給者に係る病状調査への回答" },
      { id: 'e', text: "ｅ 医療事故発生時の医療事故調査・支援センターへの報告" }
    ],
    correctAnswers: ['a'],
    sourceId: "119B22"
  },
  {
    id: 35,
    text: "乳児で緊急処置を要するバイタルサインはどれか。",
    options: [
      { id: 'a', text: "ａ 体　温 38.0 ℃" },
      { id: 'b', text: "ｂ 脈　拍 52/分" },
      { id: 'c', text: "ｃ 血　圧 76/52 mmHg" },
      { id: 'd', text: "ｄ 呼吸数 36/分" },
      { id: 'e', text: "ｅ SpO2 96 %（room air）" }
    ],
    correctAnswers: ['b'],
    sourceId: "119B23"
  },
  {
    id: 36,
    text: "我が国で心臓死の後に移植で提供できる臓器はどれか。",
    options: [
      { id: 'a', text: "ａ 肺" },
      { id: 'b', text: "ｂ 角　膜" },
      { id: 'c', text: "ｃ 肝　臓" },
      { id: 'd', text: "ｄ 小　腸" },
      { id: 'e', text: "ｅ 心　臓" }
    ],
    correctAnswers: ['b'],
    sourceId: "119B24"
  }
];
