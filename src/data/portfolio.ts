// ============================================================
// PORTFOLIO DATA
// ============================================================

export interface PortfolioCategory {
  id: string;
  title: string;
  dateRange: string;
  path: string;
  description: string;
  badge: string;
}

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: 'historical-dress',
    title: '1897 Historical Dress Show',
    dateRange: '2025–2026',
    path: '/portfolio/historical-dress',
    description: 'A complete 1897 historical ensemble constructed from the ground up — from the foundational chemise through to the finished jacket and skirt.',
    badge: '7 pieces',
  },
  {
    id: 'plays-operas',
    title: 'Plays & Operas',
    dateRange: '2024–2026',
    path: '/portfolio/plays-operas',
    description: 'Costume construction across five productions at the Fountain School of Performing Arts, Dalhousie University.',
    badge: '5 productions',
  },
  {
    id: 'tailoring',
    title: 'Tailoring',
    dateRange: '2024–2025',
    path: '/portfolio/tailoring',
    description: 'Late 18th-century tailored men\'s suit sets, a period shirt, and a boned bodice — precise construction built for period accuracy.',
    badge: '8 pieces',
  },
  {
    id: 'coursework',
    title: 'Academic Coursework',
    dateRange: '2023–2025',
    path: '/portfolio/coursework',
    description: 'Projects spanning Show Class, Drafting, and History of Costume — the foundational building blocks of my training.',
    badge: '6 projects',
  },
  {
    id: 'personal',
    title: 'Personal Costumes',
    dateRange: 'Ongoing',
    path: '/portfolio/personal',
    description: 'Costumes made for personal wear — currently featuring Violet from Violet Evergarden, built to the last detail.',
    badge: '4 pieces',
  },
];

export const HISTORICAL_DRESS_PIECES = [
  'Chemise', 'Corset', 'Bustle', 'Petticoat', 'Bodice', 'Jacket', 'Skirt',
];

export interface Production {
  title: string;
  date: string;
  costumeDesigner: string;
  costumes: string[];
}

export const PRODUCTIONS: Production[] = [
  {
    title: 'The Odyssey',
    date: 'Mar. 2026',
    costumeDesigner: 'Sean Mulcahy',
    costumes: ['Siren', 'Antinous', 'Jonesy'],
  },
  {
    title: 'Three Sisters',
    date: 'Mar. 2025',
    costumeDesigner: 'Tamara Marie Kucheran',
    costumes: ['Maid'],
  },
  {
    title: 'Devised Production: Learning Curve',
    date: 'Feb. 2025',
    costumeDesigner: 'Catherine MacCaughan',
    costumes: ['Student #8: James Miller', 'Student #11'],
  },
  {
    title: 'Cinderella and The Box Office',
    date: 'Nov. 2024',
    costumeDesigner: 'Diego Cavedon Dias',
    costumes: ['Valet Barigoule', 'Ball Guest / Chorus #1', 'Ball Guest / Chorus #2', 'Ball Guest / Chorus #3'],
  },
  {
    title: 'Mr. Burns: A Post-Electric Play',
    date: 'Oct. 2024',
    costumeDesigner: 'Sean Mulcahy',
    costumes: ['Maria', 'Maria as Showgirl', 'Nelson (Ensemble)', 'Julie / Julie as FBI Agent', 'Troy McClure (Ensemble)'],
  },
];

export interface TailoringItem {
  title: string;
  pieces: string[];
}

export const TAILORING_ITEMS: TailoringItem[] = [
  { title: "Late 18th Century Men's Size 20 Suit Set", pieces: ['Tailcoat', 'Waistcoat', 'Trousers'] },
  { title: "Late 18th Century Men's Size 20 Suit Set — Tailored to Self", pieces: ['Tailcoat', 'Waistcoat', 'Trousers'] },
  { title: 'Period Shirt', pieces: [] },
  { title: 'Boned Bodice', pieces: [] },
];

export interface CourseworkSection {
  title: string;
  dateRange?: string;
  projects: string[];
}

export const COURSEWORK_SECTIONS: CourseworkSection[] = [
  { title: 'Show Class', projects: ['Movement Project', 'Shaping Project'] },
  { title: 'Drafting', dateRange: '2023–2024', projects: ['Bodice Project', 'Collar and Sleeve Project', 'Pants Project'] },
  { title: 'History of Costume', dateRange: '2023–2024', projects: ['Houppelande'] },
];

export interface PersonalCostume {
  title: string;
  source: string;
  pieces: string[];
}

export const PERSONAL_COSTUMES: PersonalCostume[] = [
  { title: 'Violet', source: 'Violet Evergarden (anime)', pieces: ['Bodice', 'Jacket', 'Skirt', 'Parasol'] },
];
