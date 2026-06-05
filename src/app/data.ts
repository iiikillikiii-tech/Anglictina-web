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

export type AudienceGroup = {
  title: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ReferenceGuide = {
  type: string;
  text: string;
};

export const navItems = [
  { label: "Domů", href: "/" },
  { label: "Kurzy", href: "/kurzy" },
  { label: "E-shop", href: "/eshop" },
  { label: "O mně", href: "/o-mne" },
  { label: "FAQ", href: "/faq" },
  { label: "Reference", href: "/reference" },
  { label: "Kontakt", href: "/kontakt" },
];

const courseFeatures = [
  "online výuka přes Microsoft Teams",
  "digitální materiály v PDF",
  "souhrn slovíček, chyb a doporučení po lekci",
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
      "Tři online hodiny týdně pro rychlý posun, zkoušky, práci nebo konkrétní termín.",
    features: [
      ...courseFeatures,
      "konverzace po telefonu 2-3x týdně",
      "intenzivnější práce se slovní zásobou",
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
      "Dvě lekce týdně z pohodlí domova, ideální pro pravidelnost a klidný, ale viditelný pokrok.",
    features: [
      ...courseFeatures,
      "knížky v angličtině podle úrovně",
      "pravidelné opakování mezi lekcemi",
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
    slug: "letni-10-hodin",
    title: "Letní kurz 10 hodin",
    eyebrow: "Časově omezená letní nabídka",
    hours: "10 hodin / týden",
    price: "4 000 Kč",
    priceCzk: 4000,
    description:
      "Týdenní intenzivní kurz zaměřený hlavně na rozmluvení, praktické fráze a větší jistotu.",
    features: [
      "online lekce přes Microsoft Teams",
      "praktická komunikace každý den",
      "fráze pro běžné situace",
      "materiály v PDF",
      "doporučení pro další samostatné mluvení",
    ],
    accent: "mint",
  },
  {
    slug: "letni-15-hodin",
    title: "Letní kurz 15 hodin",
    eyebrow: "Intenzivní rozmluvení",
    hours: "15 hodin / týden",
    price: "6 000 Kč",
    priceCzk: 6000,
    description:
      "Silnější letní varianta pro studenty, kteří chtějí během krátké doby mluvit častěji a jistěji.",
    features: [
      "15 hodin během jednoho týdne",
      "mluvení, poslech a praktické fráze",
      "odstranění strachu z komunikace",
      "materiály a slovíčka po lekci",
      "individuální tempo podle úrovně",
    ],
    accent: "coral",
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
      "Intenzivní tříměsíční balíček se třemi online hodinami týdně přes Microsoft Teams.",
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
      "Pravidelný tříměsíční balíček se dvěma online hodinami týdně přes Microsoft Teams.",
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
    title: "Letní kurz - 10 hodin týdně",
    slug: "letni-kurz-10-hodin",
    category: "Kurzy",
    categorySlug: "kurzy",
    status: "10 hodin / týden",
    price: "4 000 Kč",
    priceCzk: 4000,
    description:
      "Týdenní letní kurz zaměřený hlavně na mluvení, praktické fráze a odstranění strachu z komunikace.",
    includes: [
      "10 hodin během týdne",
      "praktická komunikace",
      "mluvení a poslech",
      "PDF materiály",
      "slovíčka po lekci",
    ],
    accent: "mint",
  },
  {
    title: "Letní kurz - 15 hodin týdně",
    slug: "letni-kurz-15-hodin",
    category: "Kurzy",
    categorySlug: "kurzy",
    status: "15 hodin / týden",
    price: "6 000 Kč",
    priceCzk: 6000,
    description:
      "Intenzivnější letní varianta pro rychlejší posun v mluvení a pravidelnější kontakt s angličtinou.",
    includes: [
      "15 hodin během týdne",
      "rozmluvení",
      "každodenní komunikace",
      "PDF materiály",
      "individuální doporučení",
    ],
    accent: "coral",
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

export const audienceGroups: AudienceGroup[] = [
  {
    title: "Pro začátečníky",
    text: "Začneme od úplných základů. Vše si vysvětlíme jednoduše, česky a na praktických příkladech.",
  },
  {
    title: "Pro studenty",
    text: "Pomohu s gramatikou, slovíčky, testy, maturitou nebo Cambridge zkouškami podle toho, co právě potřebujete.",
  },
  {
    title: "Pro dospělé",
    text: "Zaměříme se na rozmluvení, pracovní angličtinu, cestování a praktické situace, které opravdu využijete.",
  },
];

export const onlineBenefits = [
  "stačí mobil, tablet nebo počítač s připojením k internetu",
  "všechno dostanete v PDF souborech, takže učebnice nejsou potřeba",
  "zkušební lekce zdarma na 30 minut pro stanovení cíle",
  "žádné dojíždění",
  "flexibilita obou stran",
  "možnost učit se odkudkoliv",
];

export const aboutStory = {
  intro:
    "Jmenuji se Filip Trubelík a pomáhám studentům pochopit angličtinu jednoduše, přehledně a bez zbytečného stresu. Angličtinu učím už 7 let.",
  background:
    "Angličtina nemusí být složitá, chaotická ani nudná. Když se vysvětlí jednoduše a prakticky, může jí porozumět každý.",
  approach:
    "Nepoužívám jeden univerzální postup pro všechny. Každý student má jinou úroveň, tempo i cíl, proto lekce stavím na konkrétní potřebě a praktickém použití.",
};

export const contactInfo = {
  name: "Filip Trubelík",
  phone: "+420 602 515 652",
  phoneHref: "tel:+420602515652",
  email: "filip.trubelik@seznam.cz",
  emailHref: "mailto:filip.trubelik@seznam.cz",
  instagram: "@anglictina_s_prehledem",
  instagramHref: "https://www.instagram.com/anglictina_s_prehledem/",
  address: ["Naskové 1318/1g", "15000 Praha-Košíře"],
  ico: "09550321",
};

export const faqItems: FaqItem[] = [
  {
    question: "Jak lekce probíhají?",
    answer:
      "Lekce probíhají online přes Microsoft Teams. Před lekcí dostanete materiály a během hodiny společně procvičujeme gramatiku, slovní zásobu, čtení, poslech i mluvení.",
  },
  {
    question: "Co potřebuji k online lekci?",
    answer:
      "Stačí počítač, tablet nebo telefon, stabilní internet a Microsoft Teams. Vše ostatní si domluvíme před první lekcí.",
  },
  {
    question: "Učíte i úplné začátečníky?",
    answer:
      "Ano. S úplnými začátečníky začínáme pomalu, česky a krok za krokem, aby vznikly pevné základy bez stresu.",
  },
  {
    question: "Je výuka vhodná i pro děti a studenty?",
    answer:
      "Ano. Lekce přizpůsobuji věku, úrovni a cíli. Můžeme řešit školní angličtinu, testy, maturitu, slovíčka i mluvení.",
  },
  {
    question: "Jak poznám, který balíček je pro mě vhodný?",
    answer:
      "Napište mi svou úroveň, cíl a časové možnosti. Podle toho doporučím, jestli dává větší smysl balíček 2x týdně, 3x týdně nebo kratší blok.",
  },
  {
    question: "Dostanu k lekcím materiály?",
    answer:
      "Ano. Ke každé lekci připravuji přehledné materiály, cvičení a souhrn toho, co jsme probírali. Po lekci víte, co si zopakovat.",
  },
  {
    question: "Co když musím lekci zrušit?",
    answer:
      "Lekci je možné zrušit nejpozději 24 hodin předem. Pokud nastane nemoc nebo mimořádná situace, domluvíme se individuálně.",
  },
  {
    question: "Jak rychle se v angličtině zlepším?",
    answer:
      "Záleží na úrovni, pravidelnosti a práci mezi lekcemi. Výuka 2x nebo 3x týdně pomáhá vytvořit systém a rychlejší pokrok.",
  },
];

export const referenceGuides: ReferenceGuide[] = [
  {
    type: "Student / studentka",
    text: "Reference by měla ukázat zlepšení v gramatice, slovíčkách, testech nebo maturitě.",
  },
  {
    type: "Rodič",
    text: "Dobře funguje důraz na jistotu, pravidelnost, lepší vztah dítěte k angličtině a přehledné materiály.",
  },
  {
    type: "Dospělý student",
    text: "Reference může ukázat rozmluvení, praktičnost a větší jistotu při cestování nebo v práci.",
  },
];
