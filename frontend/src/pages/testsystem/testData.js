function createQuestion(question, options, correctAnswer) {
  return { question, options, correctAnswer };
}

function buildQuestions(topic) {
  const label = topic.shortTitle || topic.title;
  const concept = topic.concept;
  const formula = topic.formula;

  return [
    createQuestion(`${label} mavzusida ${concept} nimani ifodalaydi?`, [`${concept} fizik hodisaning asosiy mazmunini`, `Faqat laboratoriya jihozini`, `Faqat matematik o'yinni`, `Faqat tarixiy voqeani`], `${concept} fizik hodisaning asosiy mazmunini`),
    createQuestion(`${label} bo'yicha darsda eng ko'p uchraydigan formula qaysi?`, [formula, "F = ma", "I = U/R", "pH = -lg[H+]"], formula),
    createQuestion(`${label} mavzusidagi masalalarda odatda birinchi qadam nima bo'ladi?`, ["Berilganlarni yozib, fizik kattaliklarni aniqlash", "Darhol javobni taxmin qilish", "Faqat rasm chizish", "Formulalarsiz yechish"], "Berilganlarni yozib, fizik kattaliklarni aniqlash"),
    createQuestion(`${label} bo'yicha to'g'ri yondashuvni tanlang.`, ["Kattaliklar birligini tekshirish", "Birliklarni umuman yozmaslik", "Faqat natijani eslab qolish", "Savolni o'qimaslik"], "Kattaliklar birligini tekshirish"),
    createQuestion(`${label} mavzusi qaysi fan bo'limiga tegishli?`, [topic.branch, "Biologiya", "Geografiya", "Informatika"], topic.branch),
    createQuestion(`${label} ga oid tajribada kuzatuv natijasini qanday mustahkamlash kerak?`, ["Natijani formula va izoh bilan solishtirish", "Faqat yod olish", "Faqat rangiga qarash", "Faqat bir marta sinash"], "Natijani formula va izoh bilan solishtirish"),
    createQuestion(`${label} bo'yicha eng muhim kompetensiya qaysi?`, ["Mantiqiy tahlil va hisoblash", "Faqat matn yodlash", "Faqat rasmlarni ko'rish", "Faqat test taxmin qilish"], "Mantiqiy tahlil va hisoblash"),
    createQuestion(`${label} mavzusidagi noto'g'ri odat qaysi?`, ["Birliklarni e'tiborsiz qoldirish", "Grafikni tahlil qilish", "Savolni diqqat bilan o'qish", "Javobni tekshirish"], "Birliklarni e'tiborsiz qoldirish"),
    createQuestion(`${label} uchun grafik berilgan bo'lsa, nima qilish kerak?`, ["O'qlar nomi va kattaliklar orasidagi bog'lanishni aniqlash", "Faqat rangini aytish", "Grafikni o'tkazib yuborish", "Faqat eng katta nuqtani yodlash"], "O'qlar nomi va kattaliklar orasidagi bog'lanishni aniqlash"),
    createQuestion(`${label} bo'yicha masala yechilgach, yakunda nima qilinadi?`, ["Javobning mantiqan to'g'riligini tekshirish", "Hech narsa qilinmaydi", "Darhol boshqa savolga o'tiladi", "Faqat natijani bezash"], "Javobning mantiqan to'g'riligini tekshirish"),
    createQuestion(`${label} mavzusida ${concept} o'zgarishi nimaga olib kelishi mumkin?`, ["Natijaning fizik talqini o'zgarishiga", "Faqat daftar rangiga", "Faqat kompyuter tezligiga", "Umuman hech narsaga"], "Natijaning fizik talqini o'zgarishiga"),
    createQuestion(`${label} darsida formuladagi har bir belgi nimani talab qiladi?`, ["Aniq fizik ma'no va birlikni", "Faqat bezakni", "Faqat tarixiy nomni", "Faqat lotincha yozuvni"], "Aniq fizik ma'no va birlikni"),
    createQuestion(`${label} mavzusida tajriba xavfsizligi uchun nima zarur?`, ["Jihozdan to'g'ri foydalanish", "Savolni o'tkazib yuborish", "Natijani ko'chirish", "Faqat tez ishlash"], "Jihozdan to'g'ri foydalanish"),
    createQuestion(`${label} bo'yicha yaxshi natijaga erishish siri nima?`, ["Doimiy mashq va tahlil", "Faqat omad", "Faqat yodlash", "Faqat tezkorlik"], "Doimiy mashq va tahlil"),
    createQuestion(`${label} mavzusidagi savollarda ko'pincha qaysi ko'nikma sinovdan o'tadi?`, ["Formulani amaliy qo'llash", "Qo'shiq aytish", "Rasm chizish", "Matn tarjima qilish"], "Formulani amaliy qo'llash"),
    createQuestion(`${label} bo'yicha noto'g'ri javoblarni kamaytirish uchun nima qilish kerak?`, ["Har bir variantni solishtirib tahlil qilish", "Faqat birinchi variantni belgilash", "Tasodifiy tanlash", "Faqat o'qituvchiga qarash"], "Har bir variantni solishtirib tahlil qilish"),
    createQuestion(`${label} bilan bog'liq laboratoriya ishida eng muhim jihat nima?`, ["O'lchov aniqligi", "Faqat chiroyli yozuv", "Faqat tez yakunlash", "Faqat qiziqarli nom"], "O'lchov aniqligi"),
    createQuestion(`${label} mavzusi kundalik hayotda nimaga yordam beradi?`, ["Atrofdagi fizik hodisalarni tushunishga", "Faqat telefon o'ynashga", "Faqat she'r yozishga", "Faqat xarita chizishga"], "Atrofdagi fizik hodisalarni tushunishga"),
    createQuestion(`${label} bo'yicha yuqori ball olish uchun qay biri foydali?`, ["Savol, formula va xulosani bog'lash", "Faqat vaqtga qarab ishlash", "Faqat bitta misolni yodlash", "Faqat oxirgi variantni tanlash"], "Savol, formula va xulosani bog'lash"),
    createQuestion(`${label} testini tugatishdan oldin nima qilish tavsiya etiladi?`, ["Belgilangan javoblarni yana bir bor tekshirish", "Darhol chiqib ketish", "Faqat bir savolga qaytish", "Hech narsani tekshirmaslik"], "Belgilangan javoblarni yana bir bor tekshirish"),
  ];
}

const TOPICS = [
  {
    id: "molekulyar-fizika",
    title: "Molekulyar fizika asoslari",
    shortTitle: "Molekulyar fizika",
    difficulty: "O'rta",
    icon: "⚛️",
    branch: "Fizika",
    concept: "modda zarralarining harakati",
    formula: "pV = nRT",
  },
  {
    id: "temperatura-issiqlik",
    title: "Temperatura va issiqlik miqdori",
    difficulty: "Boshlang'ich",
    icon: "🌡️",
    branch: "Termodinamika",
    concept: "temperatura o'zgarishi",
    formula: "Q = cmΔt",
  },
  {
    id: "ichki-energiya",
    title: "Ichki energiya va ish",
    difficulty: "O'rta",
    icon: "🔥",
    branch: "Termodinamika",
    concept: "ichki energiyaning almashinuvi",
    formula: "Q = ΔU + A",
  },
  {
    id: "gaz-qonunlari",
    title: "Gaz qonunlari",
    difficulty: "Qiyin",
    icon: "🧪",
    branch: "Molekulyar fizika",
    concept: "gaz kattaliklari orasidagi bog'lanish",
    formula: "p₁V₁/T₁ = p₂V₂/T₂",
  },
  {
    id: "suyuqliklar-bosimi",
    title: "Suyuqliklar bosimi",
    difficulty: "O'rta",
    icon: "💧",
    branch: "Mexanika",
    concept: "gidrostatik bosim",
    formula: "p = ρgh",
  },
  {
    id: "sirt-taranglik",
    title: "Sirt taranglik va kapillyarlik",
    difficulty: "Qiyin",
    icon: "🫧",
    branch: "Suyuqliklar fizikasi",
    concept: "suyuqlik sirtidagi kuchlar",
    formula: "F = 2σl",
  },
  {
    id: "buglanish-kondensatsiya",
    title: "Bug'lanish va kondensatsiya",
    difficulty: "O'rta",
    icon: "☁️",
    branch: "Faza o'tishlari",
    concept: "moddaning holat almashinuvi",
    formula: "Q = Lm",
  },
  {
    id: "yoruglik-tarqalishi",
    title: "Yorug'likning tarqalishi",
    difficulty: "Boshlang'ich",
    icon: "🔦",
    branch: "Optika",
    concept: "yorug'lik nurlarining yo'nalishi",
    formula: "c = λν",
  },
  {
    id: "qaytish-sinish",
    title: "Yorug'likning qaytishi va sinishi",
    difficulty: "O'rta",
    icon: "✨",
    branch: "Optika",
    concept: "nur yo'nalishining o'zgarishi",
    formula: "n₁sinα = n₂sinβ",
  },
  {
    id: "linzalar",
    title: "Linzalar va tasvir hosil bo'lishi",
    difficulty: "Qiyin",
    icon: "🔍",
    branch: "Optika",
    concept: "tasvirning optik hosil bo'lishi",
    formula: "1/F = 1/d + 1/f",
  },
  {
    id: "optik-asboblar",
    title: "Optik asboblar",
    difficulty: "O'rta",
    icon: "🔭",
    branch: "Optika",
    concept: "optik tizimlarning ishlashi",
    formula: "Γ = h'/h",
  },
  {
    id: "kosmos-fizikasi",
    title: "Koinot va astronomik hodisalar",
    difficulty: "Boshlang'ich",
    icon: "🪐",
    branch: "Astronomiya",
    concept: "osmon jismlarining harakati",
    formula: "v = 2πR/T",
  },
];

export const physicsTopics = TOPICS.map((topic) => ({
  ...topic,
  questions: buildQuestions(topic),
}));

export default physicsTopics;
