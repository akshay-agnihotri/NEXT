export type Game = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  rating: string;
  developer: string;
  publisher: string;
  releaseDate: string;
  platforms: string[];
  gameplayMechanics: string[];
  story: string;
  setting: string;
  combatStyle: string;
  worldesign: string;
  playerChoiceImpact: boolean;
  multiplaer: string;
  expansionContent: string;
  difficulty: string;
  progressionSystem: string;
};

export const games: Game[] = [
  {
    id: "g1",
    slug: "shadows-of-eternity",
    title: "Shadows of Eternity",
    category: "RPG",
    description:
      "An immersive role-playing game where your choices shape the fate of a crumbling empire.",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=80",
    rating: "4.5",
    developer: "Mythic Studios",
    publisher: "Phantom Games",
    releaseDate: "2023-11-10",
    platforms: ["PC", "PS5", "Xbox Series X"],
    gameplayMechanics: [
      "Turn-based combat",
      "Dialogue trees",
      "Skill-based progression",
    ],
    story:
      "A hero rises from the ashes of a forgotten war to uncover the truth about a cursed kingdom.",
    setting: "Dark fantasy world with diverse regions and ancient ruins.",
    combatStyle: "Strategic and tactical with magic and melee elements.",
    worldesign: "Open-world with dynamic weather and day-night cycles.",
    playerChoiceImpact: true,
    multiplaer: "Co‑op up to 4 players",
    expansionContent: "Planned DLC including new story arcs and areas.",
    difficulty: "Adjustable with hardcore mode",
    progressionSystem: "XP-based leveling with class specialization",
  },
  {
    id: "g2",
    slug: "cybernetic-veil",
    title: "Cybernetic Veil",
    category: "Action",
    description:
      "A fast-paced cyberpunk action game with intense gunfights and stealth mechanics.",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWV8ZW58MHx8MHx8fDA%3D",
    rating: "4.2",
    developer: "Neon Pulse Interactive",
    publisher: "Overbyte Studios",
    releaseDate: "2024-03-18",
    platforms: ["PC", "PS5"],
    gameplayMechanics: [
      "Cover-based shooting",
      "Stealth takedowns",
      "Augment upgrades",
    ],
    story:
      "In a dystopian future, a rogue cyber-agent seeks revenge against the megacorp that betrayed her.",
    setting:
      "Neon-lit futuristic city divided into corporate zones and rebel undergrounds.",
    combatStyle: "Real-time action with hacking and cybernetic enhancements.",
    worldesign: "Semi-open world with mission-based progression.",
    playerChoiceImpact: true,
    multiplaer: "Online PvP and Co‑op",
    expansionContent:
      "Seasonal updates with new weapons, storylines, and arenas.",
    difficulty: "Medium to Hard with scaling AI",
    progressionSystem: "Modular upgrades and reputation-based unlocking",
  },
  {
    id: "g3",
    slug: "titanfall-legacies",
    title: "Titanfall Legacies",
    category: "Shooter",
    description:
      "Command giant mechs and elite pilots in a war for control over a dying planet.",
    image:
      "https://i.pinimg.com/736x/56/5f/bd/565fbdb888b544bdc4d21f2056e0afcb.jpg",
    rating: "4.7",
    developer: "Frontline Forge",
    publisher: "CoreGames",
    releaseDate: "2022-09-02",
    platforms: ["PC", "Xbox Series X"],
    gameplayMechanics: ["Mech combat", "Wall-running", "Custom loadouts"],
    story:
      "A conflict between factions fighting over powerful ancient tech buried deep underground.",
    setting: "Post-apocalyptic world with vertical combat environments.",
    combatStyle: "High-speed FPS with vehicle integration.",
    worldesign: "Linear missions with optional side-objectives.",
    playerChoiceImpact: false,
    multiplaer: "10v10 online battles",
    expansionContent: "New mechs, maps, and game modes",
    difficulty: "Standard with competitive ranked mode",
    progressionSystem: "Tiered unlock system with prestige ranks",
  },
];

export const categories = [
  { slug: "action-rpg", name: "Action RPG" },
  { slug: "action-aventure", name: "Action Aventure" },
];
