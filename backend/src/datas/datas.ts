const megamanBosses = [
  {
      id:1,
      name: "Cut Man",
      image: "https://projeto-megaman-backend.onrender.com/images/bosses-images/Cut-Man.gif",
      description: "Mestre das lâminas, salta alto e lança tesouras cortantes. Vulnerável ao Super Arm.",
      weakness: "Super Arm",
      stage: "Cut Man Stage"
    },
    {
      id: 2,
      name: "Guts Man",
      image: "https://projeto-megaman-backend.onrender.com/images/bosses-images/Guts-Man.gif",
      description: "Fortão capaz de arremessar blocos enormes. Devagar, mas mortal de perto. Vulnerável ao Hyper Bomb.",
      weakness: "Hyper Bomb",
      stage: "Guts Man Stage"
    },
    {
      id: 3,
      name: "Elec Man",
      image: "https://projeto-megaman-backend.onrender.com/images/bosses-images/Elec-Man.png",
      description: "Ágil e elétrico, dispara raios verticais poderosos. Mario exige reflexos rápidos. Vulnerável ao Rolling Cutter.",
      weakness: "Rolling Cutter",
      stage: "Elec Man Stage"
    },
    {
      id: 4,
      name: "Ice Man",
      image: "https://projeto-megaman-backend.onrender.com/images/bosses-images/Ice-Man.png",
      description: "Atira rajadas congelantes que desaceleram o jogador. Pode congelar a Mega Man. Vulnerável ao Thunder Beam.",
      weakness: "Thunder Beam",
      stage: "Ice Man Stage"
    },
    {
      id: 5,
      name: "Fire Man",
      image: "https://projeto-megaman-backend.onrender.com/images/bosses-images/Fire-Man.gif",
      description: "Envolto em chamas e capaz de lançar bolas de fogo em redor. Vulnerável ao Ice Slasher.",
      weakness: "Ice Slasher",
      stage: "Fire Man Stage"
    },
    {
      id: 6,
      name: "Bomb Man",
      image: "https://projeto-megaman-backend.onrender.com/images/bosses-images/Bomb-Man.png",
      description: "Arremessa várias bombas que explodem com atraso. Pode cercar o jogador. Vulnerável ao Fire Storm.",
      weakness: "Fire Storm",
      stage: "Bomb Man Stage"
    },
    {
      id: 7,
      name: "Yellow Devil",
      image: "https://projeto-megaman-backend.onrender.com/images/bosses-images/Yellow-Devil.png",
      description: "Aberração que aparece e some lentamente, atacando em ondas. Precisa ser atingido em partes. Vulnerável ao Thunder Beam.",
      weakness: "Thunder Beam",
      stage: "Wily Castle"
    },
    {
      id: 8,
      name: "Wily Machine No.1",
      image: "http://127.0.0.1:3333/images/bosses-images/Wily-Machine.gif",
      description: "Veículo voador repleto de lasers e mini naves. Conjunto complexo: atirar e esquivar é vital. Vulnerável ao Fire Storm ou Rolling Cutter.",
      weakness: "Fire Storm",
      stage: "Wily Castle"
    },
];

const megamanWeapons = [
  {
      id: 1,
      name: "Cut Man / Rolling Cutter",
      from: "Cut Man",
      image: "https://projeto-megaman-backend.onrender.com/images/weapons-images/375px-RollingCutterArtwork.png",
      description: "Corta inimigos com lâminas giratórias teleguiadas. Ideal para inimigos móveis, com bom alcance lateral.",
      weak_against: "Super Arm",
      other_effective: ["Hyper Bomb","Fire Storm"],
      energy_cost: "1 unidade"
    },
    {
      id: 2,
      name: "Guts Man / Super Arm",
      from: "Guts Man",
      image: "https://projeto-megaman-backend.onrender.com/images/weapons-images/375px-SuperArm.png",
      description: "Permite levantar e arremessar blocos pesados como projéteis devastadores. Excelente contra armadilhas ou chefões lentos.",
      weak_against: "Hyper Bomb",
      other_effective: ["Fire Storm"],
      energy_cost: "1 unidade"
    },
    {
      id: 3,
      name: "Ice Slasher",
      from: "Ice Man",
      image: "https://projeto-megaman-backend.onrender.com/images/weapons-images/375px-IceSlasher.png",
      description: "Projétil de nitrogênio que congela adversários no impacto, permitindo combos gratuitos com outras armas.",
      weak_against: "Thunder Beam",
      other_effective: ["Hyper Bomb","Fire Storm","Rolling Cutter"],
      energy_cost: "1 unidade" 
    },
    {
      id: 4,
      name: "Fire Storm",
      from: "Fire Man",
      image: "https://projeto-megaman-backend.onrender.com/images/weapons-images/375px-FireStorm.png",
      description: "Bola de fogo envolta por uma aura flamejante que danifica quem encosta; ideal em áreas fechadas ou contra chefes lentos.",
      weak_against: "Ice Slasher",
      other_effective: ["Rolling Cutter"],
      energy_cost: "1 unidade"
    },
    {
      id: 5,
      name: "Thunder Beam",
      from: "Elec Man",
      image: "https://projeto-megaman-backend.onrender.com/images/weapons-images/375px-ThunderBeam.png",
      description: "Feixe elétrico que traça caminho para cima e para baixo, capaz de perfurar múltiplos inimigos e chefes.",
      weak_against: "Rolling Cutter",
      other_effective: ["Super Arm","Hyper Bomb"],
      energy_cost: "1 unidade"
    },
    {
      id: 6,
      name: "Hyper Bomb",
      from: "Bomb Man",
      image: "http://127.0.0.1:3333/images/weapons-images/375px-HyperBomb.png",
      description: "Explosivo arremessável que causa dano em área após uma breve demora; útil contra chefões com escudo ou projetando blocos.",
      weak_against: "Fire Storm",
      other_effective: ["Mega Buster","Rolling Cutter","Thunder Beam"],
      energy_cost: "1 unidade"
    },
];

export {megamanBosses, megamanWeapons}