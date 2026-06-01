export type Accent = "coral" | "mint" | "violet" | "amber" | "blue";

export type Course = {
  slug: string;
  title: string;
  eyebrow: string;
  hours: string;
  price: string;
  priceCzk: number;
  description: string;
  features: string[];
  accent: Accent;
};

export type ProductCategory = {
  slug: string;
  label: string;
  description: string;
};

export type Product = {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  status: string;
  price?: string;
  priceCzk?: number;
  description: string;
  includes: string[];
  accent: Accent;
};

export const navItems = [
  { label: "Domů", href: "/" },
  { label: "Kurzy", href: "/kurzy" },
  { label: "E-shop", href: "/eshop" },
  { label: "O mně", href: "/o-mne" },
  { label: "Kontakt", href: "/kontakt" },
];

const courseFeatures = [
  "online výuka přes Skype",
  "digitální materiály v PDF",
  "nahrávání hodin podle domluvy",
  "slovíčka a poznámky po každé lekci",
  "postup, jak se učit angličtinu efektivně",
];

export const courses: Course[] = [
  {
    slug: "3x-tydne",
    title: "3x týdně",
    eyebrow: "Nejintenzivnější balíček",
    hours: "36 hodin / 3 měsíce",
    price: "18 000 Kč / 710 €",
    priceCzk: 18000,
    description:
      "Tři online hodiny týdně pro studenty, kteří chtějí udělat rychlý a pravidelný posun.",
    features: [
      ...courseFeatures,
      "konverzace po telefonu 2-3x týdně",
      "fráze ze seriálu Přátelé",
    ],
    accent: "coral",
  },
  {
    slug: "2x-tydne",
    title: "2x týdně",
    eyebrow: "Pravidelný režim",
    hours: "24 hodin / 3 měsíce",
    price: "12 000 Kč / 473 €",
    priceCzk: 12000,
    description:
      "Dvě lekce týdně z pohodlí domova, ideální pro stabilní zlepšení bez dojíždění.",
    features: [
      ...courseFeatures,
      "knížky v angličtině podle úrovně",
      "fráze ze seriálu Přátelé",
    ],
    accent: "mint",
  },
  {
    slug: "maly-balicek",
    title: "Malý balíček",
    eyebrow: "Krátký start",
    hours: "8 hodin",
    price: "4 000 Kč / 165 €",
    priceCzk: 4000,
    description:
      "Rychlý vstup do výuky, nastavení směru a první praktické materiály pro samostatné učení.",
    features: [
      "online lekce",
      "materiály v PDF",
      "knížky podle úrovně",
      "poznámky s chybami a novými slovíčky",
    ],
    accent: "violet",
  },
  {
    slug: "maturita-balicek",
    title: "Maturita balíček",
    eyebrow: "Příprava ke zkoušce",
    hours: "8 hodin",
    price: "2 800 Kč",
    priceCzk: 2800,
    description:
      "Krátký cílený blok pro studenty, kteří potřebují projít maturitní témata, psaní a typové úlohy.",
    features: [
      "online lekce",
      "maturitní témata a strategie",
      "procvičení písemné části",
      "materiály v PDF",
      "poznámky s chybami a doporučením další práce",
    ],
    accent: "blue",
  },
  {
    slug: "stredni-balicek",
    title: "Střední balíček",
    eyebrow: "Vyvážená varianta",
    hours: "12 hodin",
    price: "6 000 Kč / 247 €",
    priceCzk: 6000,
    description:
      "Dost prostoru na gramatiku, slovní zásobu i mluvení bez velkého závazku.",
    features: [
      "online lekce",
      "slovíčka na mobil",
      "materiály v PDF",
      "návod, jak se učit efektivně",
    ],
    accent: "amber",
  },
  {
    slug: "velky-balicek",
    title: "Velký balíček",
    eyebrow: "Kompletní blok",
    hours: "24 hodin",
    price: "12 000 Kč / 494 €",
    priceCzk: 12000,
    description:
      "Dlouhodobější spolupráce s jasným plánem, pravidelnou zpětnou vazbou a konverzací.",
    features: [
      ...courseFeatures,
      "konverzace po telefonu 2-3x týdně",
      "fráze ze seriálu Přátelé",
    ],
    accent: "blue",
  },
];

export const productCategories: ProductCategory[] = [
  {
    slug: "kurzy",
    label: "Kurzy",
    description: "Online balíčky lekcí podle intenzity a cíle studenta.",
  },
  {
    slug: "gramatika-cviceni",
    label: "Gramatika/Cvičení",
    description: "Přehledná cvičení pro procvičení pravidel v praxi.",
  },
  {
    slug: "slovicka",
    label: "Slovíčka",
    description: "Tematická slovní zásoba a opakovací podklady.",
  },
  {
    slug: "maturita-cambridge",
    label: "Maturita&Cambridge",
    description: "Materiály pro školní a cambridgeské zkoušky.",
  },
  {
    slug: "cestovani",
    label: "Cestování",
    description: "Fráze pro letiště, hotel, restauraci a běžné situace.",
  },
  {
    slug: "business",
    label: "Business",
    description: "Angličtina pro meetingy, e-maily a pracovní hovory.",
  },
];

export const products: Product[] = [
  {
    title: "3x TÝDEN balíček",
    slug: "3x-tyden-balicek",
    category: "Kurzy",
    categorySlug: "kurzy",
    status: "36 hodin / 3 měsíce",
    price: "18 000 Kč",
    priceCzk: 18000,
    description:
      "Intenzivní tříměsíční balíček se třemi online hodinami týdně přes Skype.",
    includes: [
      "36 online hodin",
      "3 hodiny týdně",
      "nahrávání hodin podle domluvy",
      "slovíčka na mobil",
      "materiály v PDF",
      "fráze ze seriálu Přátelé",
    ],
    accent: "coral",
  },
  {
    title: "2x TÝDEN balíček",
    slug: "2x-tyden-balicek",
    category: "Kurzy",
    categorySlug: "kurzy",
    status: "24 hodin / 3 měsíce",
    price: "12 000 Kč",
    priceCzk: 12000,
    description:
      "Pravidelný tříměsíční balíček se dvěma online hodinami týdně přes Skype.",
    includes: [
      "24 online hodin",
      "2 hodiny týdně",
      "nahrávání hodin podle domluvy",
      "knížky podle úrovně",
      "materiály v PDF",
      "poznámky s chybami a slovíčky",
    ],
    accent: "mint",
  },
  {
    title: "MALÝ balíček",
    slug: "maly-balicek",
    category: "Kurzy",
    categorySlug: "kurzy",
    status: "8 hodin",
    price: "4 000 Kč",
    priceCzk: 4000,
    description:
      "Krátký balíček pro rychlý start, nastavení cíle a první praktické materiály.",
    includes: [
      "8 online hodin",
      "knížky podle úrovně",
      "materiály v PDF",
      "postup efektivního učení",
      "poznámky s chybami a slovíčky",
    ],
    accent: "violet",
  },
  {
    title: "MATURITA balíček (8 hodin)",
    slug: "maturita-balicek-8-hodin",
    category: "Kurzy",
    categorySlug: "kurzy",
    status: "8 hodin",
    price: "2 800 Kč",
    priceCzk: 2800,
    description:
      "Cílený online balíček pro studenty, kteří se připravují k maturitě z angličtiny.",
    includes: [
      "8 online hodin",
      "maturitní témata",
      "písemná část",
      "zpětná vazba",
      "doporučení další práce",
    ],
    accent: "blue",
  },
  {
    title: "STŘEDNÍ balíček",
    slug: "stredni-balicek",
    category: "Kurzy",
    categorySlug: "kurzy",
    status: "12 hodin",
    price: "6 000 Kč",
    priceCzk: 6000,
    description:
      "Vyvážený balíček pro studenty, kteří chtějí kombinovat mluvení, gramatiku a slovní zásobu.",
    includes: [
      "12 online hodin",
      "slovíčka na mobil",
      "knížky podle úrovně",
      "materiály v PDF",
      "poznámky po lekci",
    ],
    accent: "amber",
  },
  {
    title: "VELKÝ balíček",
    slug: "velky-balicek",
    category: "Kurzy",
    categorySlug: "kurzy",
    status: "24 hodin",
    price: "12 000 Kč",
    priceCzk: 12000,
    description:
      "Kompletní blok online výuky s pravidelnou zpětnou vazbou a konverzací.",
    includes: [
      "24 online hodin",
      "nahrávání hodin podle domluvy",
      "slovíčka na mobil",
      "telefonická konverzace 2-3x týdně",
      "materiály v PDF",
      "fráze ze seriálu Přátelé",
    ],
    accent: "blue",
  },
  {
    title: "Časy",
    slug: "casy",
    category: "Gramatika/Cvičení",
    categorySlug: "gramatika-cviceni",
    status: "Přehled gramatiky",
    price: "100 Kč",
    priceCzk: 100,
    description:
      "Přehled anglických časů pro studenty, kteří si chtějí udělat pořádek v základních pravidlech.",
    includes: ["přehled časů", "stručné vysvětlení", "praktické příklady", "PDF ke stažení"],
    accent: "violet",
  },
  {
    title: "Časy - cvičení",
    slug: "casy-cviceni",
    category: "Gramatika/Cvičení",
    categorySlug: "gramatika-cviceni",
    status: "30 příkladů",
    price: "50 Kč",
    priceCzk: 50,
    description:
      "Sbírka cvičení na procvičení anglických časů. Hodí se pro studenty různého věku.",
    includes: ["30 příkladů", "procvičení časů", "samostatná práce", "PDF materiál"],
    accent: "mint",
  },
  {
    title: "Present Simple - Cvičení",
    slug: "present-simple-cviceni",
    category: "Gramatika/Cvičení",
    categorySlug: "gramatika-cviceni",
    status: "Doplňovačky a aktivity",
    price: "50 Kč",
    priceCzk: 50,
    description:
      "Materiál na Present Simple s doplňovačkami, čtením s porozuměním a aktivitami pro psaní.",
    includes: ["doplňovačky", "čtení s porozuměním", "psací aktivita", "procvičení Present Simple"],
    accent: "amber",
  },
  {
    title: "Maturita&Cambridge zkoušky - písemná část",
    slug: "maturita-cambridge-pisemna-cast",
    category: "Maturita&Cambridge",
    categorySlug: "maturita-cambridge",
    status: "Písemná část",
    price: "200 Kč",
    priceCzk: 200,
    description:
      "Sbírka pro písemnou část: článek, esej, formální i neformální dopis, recenze, zpráva a další útvary.",
    includes: ["článek", "esej", "formální dopis", "neformální dopis", "recenze", "zpráva"],
    accent: "coral",
  },
];

export const categoryEmptyStates: Record<string, string> = {
  slovicka: "V přípravě - tematická slovní zásoba a fráze budou doplněné jako samostatné materiály.",
  cestovani: "V přípravě - materiály pro letiště, hotel, restauraci, dopravu a běžné situace.",
  business: "V přípravě - pracovní angličtina pro meetingy, e-maily, prezentace a hovory.",
};

export const rules = [
  {
    title: "Hodiny čerpat průběžně",
    text: "Výukové hodiny je nejlepší vyčerpat v daném měsíci. Nemoc nebo nečekané situace se řeší domluvou.",
  },
  {
    title: "Ukončení výuky",
    text: "Při předčasném ukončení spolupráce se uhrazené prostředky nevrací.",
  },
  {
    title: "Zrušení lekce",
    text: "Lekci je potřeba zrušit alespoň 24 hodin předem, jinak propadá.",
  },
];

export const reviews = [
  {
    name: "Student kurzu",
    text: "Lekce mají jasný řád, materiály chodí včas a po každé hodině vím, na čem pracovat dál.",
  },
  {
    name: "Online výuka",
    text: "Nejvíc mi vyhovuje, že nemusím nikam jezdit a můžu se učit z domova ve vlastním tempu.",
  },
  {
    name: "Konverzace",
    text: "Výuka je přirozená, hodně se mluví a gramatika se vysvětluje na konkrétních příkladech.",
  },
];

export const skypeBenefits = [
  "stačí mobil, tablet nebo počítač s připojením k internetu",
  "všechno dostanete v PDF souborech, takže učebnice nejsou potřeba",
  "zkušební lekce zdarma na 30 minut pro stanovení cíle",
  "žádné dojíždění",
  "flexibilita obou stran",
  "možnost učit se odkudkoliv",
];

export const aboutStory = {
  intro:
    "Jmenuji se Filip a angličtinu učím 5 let. Učím studenty různých věkových kategorií a zkušenosti jsem sbíral v kurzech v Anglii i u nás v Česku.",
  background:
    "S angličtinou jsem začal od dětství, ale dlouho mi školní výuka nevyhovovala. Postupně jsem si našel vlastní cestu: reálná angličtina, jazykové školy a soukromí lektoři v online výuce.",
  approach:
    "Výuku vedu tak, aby jazyk nebyl jen biflování pouček. Hledám jednoduché způsoby, jak angličtinu vstřebat přirozeně, a ke každému studentovi přistupuji podle jeho osobních potřeb.",
};

export const contactInfo = {
  name: "Filip Trubelík",
  phone: "+420 602 515 652",
  phoneHref: "tel:+420602515652",
  email: "filip.trubelik@seznam.cz",
  emailHref: "mailto:filip.trubelik@seznam.cz",
  instagram: "Instagram",
  instagramHref: "https://www.instagram.com/",
  address: ["Naskové 1318/1g", "15000 Praha-Košíře"],
  ico: "09550321",
};
