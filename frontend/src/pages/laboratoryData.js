import { Atom, Beaker, Droplets, FlaskConical, Lightbulb, ScanEye, Thermometer, Waves } from "lucide-react";

const publicFile = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

export const laboratoryItems = [
  {
    id: "molecular-kinetic-theory",
    file: publicFile("fizika9_1-mavzu_MKN.html"),
    topic: "1-§ · Vizualizatsiya",
    title: "Modda tuzilishining molekulyar-kinetik nazariyasi",
    description: "Molekulalar harakati va molekulyar-kinetik nazariyaning asosiy qoidalarini o‘rganing.",
    icon: Atom,
    category: "laboratory",
  },
  {
    id: "specific-heat-capacity",
    file: publicFile("fizika9_20-mavzu_laboratoriya.html"),
    topic: "20-§ · Laboratoriya ishi",
    title: "Qattiq jismlarning solishtirma issiqlik sig‘imini aniqlash",
    description: "Tajriba natijalari orqali jismlarning solishtirma issiqlik sig‘imini aniqlang.",
    icon: Thermometer,
    category: "laboratory",
  },
  {
    id: "mixing-water-temperatures",
    file: publicFile("fizika9_25-mavzu_laboratoriya.html"),
    topic: "25-§ · Laboratoriya ishi",
    title: "Turli temperaturali suv aralashtirilganda issiqlik miqdorlarini taqqoslash",
    description: "Suv aralashmasidagi issiqlik almashinuvi va muvozanatni kuzating.",
    icon: Beaker,
    category: "laboratory",
  },
  {
    id: "surface-tension",
    file: publicFile("fizika9_34-mavzu_laboratoriya.html"),
    topic: "34-§ · Laboratoriya ishi",
    title: "Suyuqlikning sirt taranglik koeffitsiyentini aniqlash",
    description: "Suyuqlik sirt tarangligini tajriba yordamida o‘rganing.",
    icon: Waves,
    category: "laboratory",
  },
  {
    id: "relative-humidity",
    file: publicFile("fizika9_42-mavzu_laboratoriya.html"),
    topic: "42-§ · Laboratoriya ishi",
    title: "Havoning nisbiy namligini aniqlash",
    description: "Havoning namligini o‘lchash va natijalarni tahlil qilish.",
    icon: Droplets,
    category: "laboratory",
  },
  {
    id: "glass-refraction-index",
    file: publicFile("fizika9_49-mavzu_laboratoriya.html"),
    topic: "49-§ · Laboratoriya ishi",
    title: "Shishaning nur sindirish ko‘rsatkichini aniqlash",
    description: "Yorug‘likning sinishini kuzatib, shishaning sindirish ko‘rsatkichini toping.",
    icon: ScanEye,
    category: "laboratory",
  },
  {
    id: "lens-optical-power",
    file: publicFile("fizika9_53-mavzu_laboratoriya.html"),
    topic: "53-§ · Laboratoriya ishi",
    title: "Linzaning optik kuchini aniqlash",
    description: "Linza yordamida tasvir hosil bo‘lishini o‘rganib, optik kuchini aniqlang.",
    icon: Lightbulb,
    category: "laboratory",
  },
];

export const practicalItems = [
  {
    id: "molecule-size",
    file: publicFile("amaliy/fizika9_13-mavzu_1-amaliy_malekula_o'lchami.html"),
    topic: "13-§ · Amaliy mashg‘ulot",
    title: "Molekulalarning o‘lchamini baholash",
    description: "Amaliy tajriba yordamida molekulalar o‘lchamini baholang.",
    icon: Atom,
    category: "practical",
  },
  {
    id: "thermal-equilibrium",
    file: publicFile("amaliy/fizika9_19-mavzu_2-amaliy_issiqlik_muvozanati.html"),
    topic: "19-§ · Amaliy mashg‘ulot",
    title: "Jismlarda issiqlik muvozanatini o‘rganish",
    description: "Jismlar orasidagi issiqlik almashinuvini kuzatib, muvozanatni tahlil qiling.",
    icon: FlaskConical,
    category: "practical",
  },
];

export const laboratoryPages = [...laboratoryItems, ...practicalItems];
