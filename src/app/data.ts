export type Accent = "coral" | "mint" | "violet" | "amber" | "blue";

export type Course = {
  title: string;
  eyebrow: string;
  hours: string;
  price: string;
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
  description: string;
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
    title: "3x týdně",
    eyebrow: "Nejintenzivnější balíček",
    hours: "36 hodin / 3 měsíce",
    price: "18 000 Kč / 710 €",
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
    title: "2x týdně",
    eyebrow: "Pravidelný režim",
    hours: "24 hodin / 3 měsíce",
    price: "12 000 Kč / 473 €",
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
    title: "Malý balíček",
    eyebrow: "Krátký start",
    hours: "8 hodin",
    price: "4 000 Kč / 165 €",
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
    title: "Střední balíček",
    eyebrow: "Vyvážená varianta",
    hours: "12 hodin",
    price: "6 000 Kč / 247 €",
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
    title: "Velký balíček",
    eyebrow: "Kompletní blok",
    hours: "24 hodin",
    price: "12 000 Kč / 494 €",
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
    title: "Gramatika a cvičení",
    slug: "gramatika-a-cviceni",
    category: "Gramatika/Cvičení",
    categorySlug: "gramatika-cviceni",
    status: "Materiály pro procvičování",
    description:
      "Cvičení pro začátečníky i pokročilé, zaměřená na praktické používání gramatiky.",
    accent: "violet",
  },
  {
    title: "Slovíčka",
    slug: "slovicka",
    category: "Slovíčka",
    categorySlug: "slovicka",
    status: "Slovní zásoba",
    description:
      "Tematická slovíčka, fráze a podklady pro rychlejší zapamatování a opakování.",
    accent: "mint",
  },
  {
    title: "Maturita a Cambridge",
    slug: "maturita-a-cambridge",
    category: "Maturita&Cambridge",
    categorySlug: "maturita-cambridge",
    status: "Příprava ke zkouškám",
    description:
      "Podklady pro studenty, kteří se připravují na maturitu nebo cambridgeské zkoušky.",
    accent: "coral",
  },
  {
    title: "Cestování",
    slug: "cestovani",
    category: "Cestování",
    categorySlug: "cestovani",
    status: "V přípravě",
    description:
      "Praktické fráze a situace pro letiště, hotel, restauraci, dopravu a běžnou komunikaci.",
    accent: "amber",
  },
  {
    title: "Business angličtina",
    slug: "business-anglictina",
    category: "Business",
    categorySlug: "business",
    status: "V přípravě",
    description:
      "Slovní zásoba a modelové situace pro meetingy, e-maily, prezentace a pracovní hovory.",
    accent: "blue",
  },
];

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

export const contactInfo = {
  name: "Filip Trubelík",
  phone: "+420 602 515 652",
  phoneHref: "tel:+420602515652",
  email: "filip.trubelik@seznam.cz",
  emailHref: "mailto:filip.trubelik@seznam.cz",
  address: ["Naskové 1318/1g", "15000 Praha-Košíře"],
  ico: "09550321",
};
