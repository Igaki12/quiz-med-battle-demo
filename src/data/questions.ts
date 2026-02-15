export type Question = {
  id: number;
  text: string;
  options: { id: string; text: string }[];
  correctAnswers: string[];
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
    correctAnswers: ['a']
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
    correctAnswers: ['a']
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
    correctAnswers: ['d']
  },
  {
    id: 4,
    text: "疾患と好発部位の組合せで誤っているのはどれか。",
    options: [
      { id: 'a', text: "ａ 疥　癬 --- 外陰部" },
      { id: 'b', text: "ｂ ケロイド --- 耳　介" },
      { id: 'c', text: "ｃ 脂腺母斑 --- 頭　部" },
      { id: 'd', text: "ｄ 血管性浮腫 --- 口　唇" },
      { id: 'e', text: "ｅ ケラトアカントーマ --- 臍　部" }
    ],
    correctAnswers: ['e']
  },
  {
    id: 5,
    text: "随時血糖 250 mg/dL を示す非妊娠者で糖尿病の診断基準を満たすのはどれか。2 つ選べ。",
    options: [
      { id: 'a', text: "ａ 尿糖陽性" },
      { id: 'b', text: "ｂ 尿蛋白陽性" },
      { id: 'c', text: "ｃ HbA1c 6.7 %" },
      { id: 'd', text: "ｄ 尿ケトン体陽性" },
      { id: 'e', text: "ｅ 口渇、多飲、多尿の症状" }
    ],
    correctAnswers: ['c', 'e']
  }
];
