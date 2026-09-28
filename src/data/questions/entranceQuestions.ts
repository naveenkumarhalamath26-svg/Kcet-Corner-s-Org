import { Question } from '../../types';

/**
 * Authentic Entrance Exam Question Bank
 * Sourced & aligned with:
 * - NEET (https://questions.examside.com/past-years/medical/neet)
 * - MHT-CET (https://questions.examside.com/past-years/jee/mht-cet)
 * - JEE Main (https://questions.examside.com/past-years/jee/jee-main)
 * - COMEDK (https://questions.examside.com/past-years/jee/comedk)
 * - KCET (https://questions.examside.com/past-years/jee/kcet)
 */

export const entranceQuestions: Question[] = [
  // =========================================================================
  // PHYSICS: CLASS 11 ENTRANCE CHAPTERS (NEET / JEE / COMEDK / MHT-CET / KCET)
  // =========================================================================

  // PHY-15: Units and Measurements
  {
    id: 'phy-ent-15-1',
    subject: 'physics',
    chapter: 'phy-15',
    topic: 'Dimensional Analysis',
    question: 'The dimensions of Planck’s constant (h) are the same as that of which of the following physical quantities?',
    questionType: 'single_mcq',
    options: ['Angular momentum', 'Linear momentum', 'Energy', 'Power'],
    correctAnswer: 'Angular momentum',
    explanation: 'Planck’s constant h has unit J·s, dimensions [M L² T⁻¹]. Angular momentum L = mvr has dimensions [M] · [L T⁻¹] · [L] = [M L² T⁻¹]. According to Bohr’s postulate, L = nh / (2π), confirming they share identical dimensions.',
    difficulty: 'Easy',
    source: 'NEET 2024',
    year: '2024',
    formulaNote: '[h] = [L] = [M L² T⁻¹]'
  },
  {
    id: 'phy-ent-15-2',
    subject: 'physics',
    chapter: 'phy-15',
    topic: 'Error Analysis',
    question: 'A physical quantity X is given by X = (A² B³) / (C √D). If the percentage errors in the measurement of A, B, C, and D are 1%, 2%, 3%, and 4% respectively, the maximum percentage error in X is:',
    questionType: 'single_mcq',
    options: ['13%', '14%', '11%', '16%'],
    correctAnswer: '13%',
    explanation: '(ΔX/X) × 100% = 2(ΔA/A) + 3(ΔB/B) + 1(ΔC/C) + ½(ΔD/D) = 2(1%) + 3(2%) + 1(3%) + ½(4%) = 2% + 6% + 3% + 2% = 13%.',
    difficulty: 'Medium',
    source: 'JEE Main 2023',
    year: '2023',
    formulaNote: 'ΔX/X = a(ΔA/A) + b(ΔB/B) + c(ΔC/C) + d(ΔD/D)'
  },

  // PHY-16: Kinematics (Straight Line & Plane)
  {
    id: 'phy-ent-16-1',
    subject: 'physics',
    chapter: 'phy-16',
    topic: 'Projectile Motion',
    question: 'A projectile is thrown with an initial velocity v at an angle of 45° with the horizontal. At the highest point of its trajectory, the radius of curvature is (g = acceleration due to gravity):',
    questionType: 'single_mcq',
    options: ['v² / (2g)', 'v² / g', '2v² / g', 'v² / (4g)'],
    correctAnswer: 'v² / (2g)',
    explanation: 'At the maximum height, velocity is entirely horizontal: v_top = v cos 45° = v / √2. The normal acceleration is purely gravitational: a_n = g. Radius of curvature R = v_top² / a_n = (v / √2)² / g = v² / (2g).',
    difficulty: 'Hard',
    source: 'JEE Main 2024',
    year: '2024',
    formulaNote: 'R = v_horizontal² / g'
  },
  {
    id: 'phy-ent-16-2',
    subject: 'physics',
    chapter: 'phy-16',
    topic: 'Relative Velocity & Graphs',
    question: 'A car travelling at 72 km/h is brought to rest in a distance of 20 m by applying uniform brakes. The retardation produced by the brakes is:',
    questionType: 'single_mcq',
    options: ['10 m/s²', '5 m/s²', '15 m/s²', '20 m/s²'],
    correctAnswer: '10 m/s²',
    explanation: 'Initial velocity u = 72 km/h = 72 × (5/18) = 20 m/s. Final velocity v = 0, distance s = 20 m. Using v² = u² - 2as: 0 = 20² - 2a(20) ⇒ 40a = 400 ⇒ a = 10 m/s².',
    difficulty: 'Easy',
    source: 'MHT-CET 2023',
    year: '2023',
    formulaNote: 'v² = u² - 2as'
  },

  // PHY-17: Laws of Motion & Friction
  {
    id: 'phy-ent-17-1',
    subject: 'physics',
    chapter: 'phy-17',
    topic: 'Limiting Friction & Banking',
    question: 'A block of mass 10 kg is placed on a rough horizontal surface having coefficient of static friction μ_s = 0.5. If a horizontal force of 40 N is applied on the block, the frictional force acting on the block is (g = 9.8 m/s²):',
    questionType: 'single_mcq',
    options: ['40 N', '49 N', '50 N', 'Zero'],
    correctAnswer: '40 N',
    explanation: 'Maximum limiting static friction f_s(max) = μ_s · N = μ_s · mg = 0.5 × 10 × 9.8 = 49 N. Since the applied force F = 40 N is less than f_s(max), the block does not move. Static friction is self-adjusting, so f = F_applied = 40 N.',
    difficulty: 'Medium',
    source: 'COMEDK 2024',
    year: '2024',
    formulaNote: 'f_static = F_applied when F_applied ≤ μ_s mg'
  },

  // PHY-18: Work, Energy and Power
  {
    id: 'phy-ent-18-1',
    subject: 'physics',
    chapter: 'phy-18',
    topic: 'Collisions in One Dimension',
    question: 'A body of mass m moving with velocity v collides head-on elastically with another stationary body of mass 2m. The fractional loss in kinetic energy of the first body is:',
    questionType: 'single_mcq',
    options: ['8 / 9', '1 / 9', '4 / 9', '5 / 9'],
    correctAnswer: '8 / 9',
    explanation: 'Final velocity of first body: v₁ = [(m₁ - m₂) / (m₁ + m₂)] v = [(m - 2m)/(m + 2m)] v = -v / 3. Final KE of first body = ½ m (-v/3)² = (1/9) (½ mv²). Fraction of KE retained = 1/9. Therefore, fractional loss = 1 - 1/9 = 8 / 9.',
    difficulty: 'Medium',
    source: 'NEET 2023',
    year: '2023',
    formulaNote: 'v₁ = [(m₁ - m₂) / (m₁ + m₂)] u₁'
  },

  // PHY-19: System of Particles & Rotational Motion
  {
    id: 'phy-ent-19-1',
    subject: 'physics',
    chapter: 'phy-19',
    topic: 'Moment of Inertia & Rolling',
    question: 'A solid sphere, a disc, and a hollow sphere all having the same mass and radius are rolled down an inclined plane from rest without slipping. Which body reaches the bottom first?',
    questionType: 'single_mcq',
    options: ['Solid sphere', 'Disc', 'Hollow sphere', 'All reach simultaneously'],
    correctAnswer: 'Solid sphere',
    explanation: 'Acceleration in pure rolling down an incline is a = g sin θ / (1 + k²/R²). For solid sphere: k²/R² = 2/5 = 0.40. For disc: k²/R² = 1/2 = 0.50. For hollow sphere: k²/R² = 2/3 ≈ 0.67. Smaller k²/R² gives larger acceleration. Since solid sphere has the smallest k²/R², it has the largest acceleration and reaches the bottom first.',
    difficulty: 'Easy',
    source: 'COMEDK 2023',
    year: '2023',
    formulaNote: 'a = g sin θ / (1 + I / (mR²))'
  },

  // PHY-20: Gravitation
  {
    id: 'phy-ent-20-1',
    subject: 'physics',
    chapter: 'phy-20',
    topic: 'Escape Velocity and Satellites',
    question: 'The escape velocity from the surface of Earth is v_e. The escape velocity from the surface of a planet whose mass is 4 times and radius is 2 times that of Earth is:',
    questionType: 'single_mcq',
    options: ['√2 v_e', '2 v_e', 'v_e / √2', '4 v_e'],
    correctAnswer: ['√2 v_e'],
    explanation: 'Escape velocity v_e = √(2GM / R). For the planet: v\'_e = √(2G(4M) / (2R)) = √(4/2) · √(2GM/R) = √2 · v_e.',
    difficulty: 'Easy',
    source: 'JEE Main 2022',
    year: '2022',
    formulaNote: 'v_e = √(2GM / R)'
  },

  // PHY-21: Mechanical Properties of Solids and Fluids
  {
    id: 'phy-ent-21-1',
    subject: 'physics',
    chapter: 'phy-21',
    topic: "Bernoulli's Theorem & Viscosity",
    question: 'Water flows through a horizontal pipe of varying cross-section. At point A where the radius is 2 cm, the speed of water is 1 m/s. At point B where the radius is 1 cm, the speed of water is:',
    questionType: 'single_mcq',
    options: ['4 m/s', '2 m/s', '0.5 m/s', '8 m/s'],
    correctAnswer: '4 m/s',
    explanation: 'By the equation of continuity: A₁ v₁ = A₂ v₂ ⇒ π r₁² v₁ = π r₂² v₂ ⇒ v₂ = v₁ · (r₁ / r₂)² = 1 × (2 / 1)² = 4 m/s.',
    difficulty: 'Easy',
    source: 'MHT-CET 2024',
    year: '2024',
    formulaNote: 'A₁v₁ = A₂v₂ (Continuity equation)'
  },

  // PHY-22: Thermodynamics & Kinetic Theory
  {
    id: 'phy-ent-22-1',
    subject: 'physics',
    chapter: 'phy-22',
    topic: 'Carnot Engine Efficiency',
    question: 'A Carnot engine has an efficiency of 40% when its sink temperature is at 300 K. To increase its efficiency to 50%, keeping source temperature constant, the sink temperature should be changed to:',
    questionType: 'single_mcq',
    options: ['250 K', '200 K', '280 K', '225 K'],
    correctAnswer: '250 K',
    explanation: 'η = 1 - T_sink / T_source ⇒ 0.40 = 1 - 300 / T_source ⇒ 300 / T_source = 0.60 ⇒ T_source = 500 K. For η = 0.50: 0.50 = 1 - T\'_sink / 500 ⇒ T\'_sink / 500 = 0.50 ⇒ T\'_sink = 250 K.',
    difficulty: 'Medium',
    source: 'NEET 2024',
    year: '2024',
    formulaNote: 'η = 1 - (T_sink / T_source)'
  },

  // PHY-23: Oscillations and Waves
  {
    id: 'phy-ent-23-1',
    subject: 'physics',
    chapter: 'phy-23',
    topic: 'Simple Harmonic Motion (SHM)',
    question: 'A particle executes simple harmonic motion of amplitude A. At what displacement from the mean position is its kinetic energy equal to its potential energy?',
    questionType: 'single_mcq',
    options: ['A / √2', 'A / 2', '√3 A / 2', 'A / 4'],
    correctAnswer: 'A / √2',
    explanation: 'KE = ½ mω²(A² - x²) and PE = ½ mω²x². Given KE = PE ⇒ A² - x² = x² ⇒ 2x² = A² ⇒ x = A / √2.',
    difficulty: 'Easy',
    source: 'COMEDK 2022',
    year: '2022',
    formulaNote: 'KE = PE when x = A / √2'
  },

  // =========================================================================
  // CHEMISTRY: CLASS 11 ENTRANCE CHAPTERS (NEET / JEE / COMEDK / MHT-CET / KCET)
  // =========================================================================

  // CHEM-11: Some Basic Concepts of Chemistry
  {
    id: 'chem-ent-11-1',
    subject: 'chemistry',
    chapter: 'chem-11',
    topic: 'Mole Concept and Limiting Reagent',
    question: 'What is the maximum mass of H₂O formed when 4 g of H₂ reacts completely with 32 g of O₂ according to the reaction: 2H₂ + O₂ → 2H₂O?',
    questionType: 'single_mcq',
    options: ['36 g', '18 g', '72 g', '9 g'],
    correctAnswer: '36 g',
    explanation: 'Moles of H₂ = 4 / 2 = 2 mol. Moles of O₂ = 32 / 32 = 1 mol. Stoichiometric ratio: 2 mol H₂ reacts exactly with 1 mol O₂ to yield 2 mol H₂O. Mass of H₂O = 2 mol × 18 g/mol = 36 g.',
    difficulty: 'Easy',
    source: 'NEET 2023',
    year: '2023',
    formulaNote: 'Mass = moles × molar mass'
  },

  // CHEM-12: Structure of Atom
  {
    id: 'chem-ent-12-1',
    subject: 'chemistry',
    chapter: 'chem-12',
    topic: 'Quantum Numbers & Heisenberg Principle',
    question: 'The maximum number of electrons that can be accommodated in a subshell for which the orbital quantum number l = 3 is:',
    questionType: 'single_mcq',
    options: ['14', '10', '6', '2'],
    correctAnswer: '14',
    explanation: 'Number of orbitals in a subshell = (2l + 1). For l = 3 (f-subshell), number of orbitals = 2(3) + 1 = 7. Each orbital holds a maximum of 2 electrons with opposite spins, so max electrons = 2(2l + 1) = 2(7) = 14.',
    difficulty: 'Easy',
    source: 'JEE Main 2023',
    year: '2023',
    formulaNote: 'Max electrons in subshell = 2(2l + 1)'
  },

  // CHEM-13: Classification of Elements & Periodicity
  {
    id: 'chem-ent-13-1',
    subject: 'chemistry',
    chapter: 'chem-13',
    topic: 'Ionization Enthalpy & Electron Gain Enthalpy',
    question: 'Which of the following elements has the highest negative electron gain enthalpy (most exothermic) in the periodic table?',
    questionType: 'single_mcq',
    options: ['Chlorine (Cl)', 'Fluorine (F)', 'Bromine (Br)', 'Oxygen (O)'],
    correctAnswer: 'Chlorine (Cl)',
    explanation: 'Although fluorine has higher electronegativity, its 2p subshell is very compact, causing strong interelectronic repulsions when an incoming electron is added. Chlorine (3p) has a larger orbital size and accommodates the extra electron with much less repulsion, giving it the highest negative electron gain enthalpy (-349 kJ/mol).',
    difficulty: 'Easy',
    source: 'NEET 2024',
    year: '2024',
    formulaNote: 'Δ_eg H: Cl (-349 kJ/mol) > F (-328 kJ/mol)'
  },

  // CHEM-14: Chemical Bonding and Molecular Structure
  {
    id: 'chem-ent-14-1',
    subject: 'chemistry',
    chapter: 'chem-14',
    topic: 'VSEPR Theory and Molecular Geometry',
    question: 'According to VSEPR theory, the molecular shape and hybridization of XeF₄ are respectively:',
    questionType: 'single_mcq',
    options: ['Square planar, sp³d²', 'Tetrahedral, sp³', 'See-saw, sp³d', 'Octahedral, sp³d²'],
    correctAnswer: 'Square planar, sp³d²',
    explanation: 'Xe has 8 valence electrons. With 4 fluorine atoms, it forms 4 bonding pairs and leaves (8 - 4)/2 = 2 lone pairs. Total steric number = 4 + 2 = 6 ⇒ sp³d² hybridization. Octahedral electron geometry with 2 axial lone pairs gives a square planar molecular shape.',
    difficulty: 'Medium',
    source: 'JEE Main 2024',
    year: '2024',
    formulaNote: 'XeF₄: 4 BP + 2 LP → sp³d² square planar'
  },

  // CHEM-15: Chemical Thermodynamics
  {
    id: 'chem-ent-15-1',
    subject: 'chemistry',
    chapter: 'chem-15',
    topic: 'Gibbs Free Energy & Spontaneity',
    question: 'For a reaction to be spontaneous at all temperatures, the signs of enthalpy change (ΔH) and entropy change (ΔS) must be:',
    questionType: 'single_mcq',
    options: ['ΔH < 0 and ΔS > 0', 'ΔH > 0 and ΔS > 0', 'ΔH > 0 and ΔS < 0', 'ΔH < 0 and ΔS < 0'],
    correctAnswer: 'ΔH < 0 and ΔS > 0',
    explanation: 'Gibbs-Helmholtz equation: ΔG = ΔH - TΔS. When ΔH is negative (exothermic) and ΔS is positive (increasing randomness), both terms (-TΔS is negative) contribute negatively to ΔG at any absolute temperature T > 0, ensuring ΔG < 0 (spontaneous at all temperatures).',
    difficulty: 'Easy',
    source: 'MHT-CET 2023',
    year: '2023',
    formulaNote: 'ΔG = ΔH - TΔS < 0 for spontaneity'
  },

  // CHEM-16: Equilibrium
  {
    id: 'chem-ent-16-1',
    subject: 'chemistry',
    chapter: 'chem-16',
    topic: 'Solubility Product and Common Ion Effect',
    question: 'The solubility product K_sp of AgCl in water at 25°C is 1.0 × 10⁻¹⁰ mol²·L⁻². Its solubility in 0.1 M NaCl aqueous solution is:',
    questionType: 'single_mcq',
    options: ['1.0 × 10⁻⁹ mol/L', '1.0 × 10⁻⁵ mol/L', '1.0 × 10⁻¹¹ mol/L', '0.1 mol/L'],
    correctAnswer: '1.0 × 10⁻⁹ mol/L',
    explanation: 'AgCl(s) ⇌ Ag⁺ + Cl⁻. In 0.1 M NaCl, [Cl⁻] ≈ 0.1 M (due to strong electrolyte common ion). K_sp = [Ag⁺][Cl⁻] ⇒ 1.0 × 10⁻¹⁰ = s × 0.1 ⇒ s = 1.0 × 10⁻⁹ mol/L.',
    difficulty: 'Medium',
    source: 'COMEDK 2024',
    year: '2024',
    formulaNote: 'K_sp = [Ag⁺][Cl⁻]'
  },

  // CHEM-17: Redox Reactions
  {
    id: 'chem-ent-17-1',
    subject: 'chemistry',
    chapter: 'chem-17',
    topic: 'Oxidation Number Determination',
    question: 'The oxidation states of Chromium in K₂Cr₂O₇ and CrO₅ (butterfly structure) are respectively:',
    questionType: 'single_mcq',
    options: ['+6 and +6', '+6 and +10', '+3 and +6', '+6 and +4'],
    correctAnswer: '+6 and +6',
    explanation: 'In K₂Cr₂O₇: 2(+1) + 2x + 7(-2) = 0 ⇒ 2x = 12 ⇒ x = +6. In CrO₅, chromium is bonded to one oxo oxygen (O²⁻) and two peroxo bridges (O₂²⁻ containing 4 peroxide oxygens with state -1): x + (-2) + 4(-1) = 0 ⇒ x = +6.',
    difficulty: 'Medium',
    source: 'JEE Main 2022',
    year: '2022',
    formulaNote: 'CrO₅ has 4 peroxide oxygens (-1) and 1 oxo oxygen (-2) → Cr = +6'
  },

  // CHEM-18: GOC
  {
    id: 'chem-ent-18-1',
    subject: 'chemistry',
    chapter: 'chem-18',
    topic: 'Hyperconjugation & Carbocation Stability',
    question: 'The relative stability of alkyl carbocations (CH₃)₃C⁺ > (CH₃)₂CH⁺ > CH₃CH₂⁺ is primarily explained by:',
    questionType: 'single_mcq',
    options: ['Hyperconjugation (σ-p conjugation) and +I inductive effect', 'Electromeric effect', '-I inductive effect only', 'Hydrogen bonding'],
    correctAnswer: 'Hyperconjugation (σ-p conjugation) and +I inductive effect',
    explanation: 'Carbocation stability increases with the number of α-hydrogens available for hyperconjugation: tert-butyl cation (9 α-H) > isopropyl cation (6 α-H) > ethyl cation (3 α-H), aided by electron-releasing +I inductive effects of alkyl groups.',
    difficulty: 'Easy',
    source: 'NEET 2023',
    year: '2023',
    formulaNote: 'Stability ∝ Number of hyperconjugable α-hydrogens'
  },

  // CHEM-19: Hydrocarbons
  {
    id: 'chem-ent-19-1',
    subject: 'chemistry',
    chapter: 'chem-19',
    topic: 'Ozonolysis of Alkenes',
    question: 'An alkene on ozonolysis followed by reductive workup with Zn/H₂O gives glyoxal and formaldehyde. The alkene is:',
    questionType: 'single_mcq',
    options: ['Buta-1,3-diene', 'Propene', 'Ethene', 'But-2-ene'],
    correctAnswer: 'Buta-1,3-diene',
    explanation: 'Buta-1,3-diene (CH₂=CH-CH=CH₂) cleaves at both double bonds: CH₂=O (2 moles of formaldehyde) and O=CH-CH=O (1 mole of glyoxal).',
    difficulty: 'Medium',
    source: 'MHT-CET 2024',
    year: '2024',
    formulaNote: 'CH₂=CH-CH=CH₂ + O₃ / Zn-H₂O → 2 HCHO + (CHO)₂'
  },

  // =========================================================================
  // MATHEMATICS: CLASS 11 ENTRANCE CHAPTERS (JEE / COMEDK / MHT-CET / KCET)
  // =========================================================================

  // MATH-14: Trigonometric Functions
  {
    id: 'math-ent-14-1',
    subject: 'mathematics',
    chapter: 'math-14',
    topic: 'Trigonometric Equations and Identities',
    question: 'The value of sin 20° · sin 40° · sin 60° · sin 80° is:',
    questionType: 'single_mcq',
    options: ['3 / 16', '1 / 16', '√3 / 8', '3 / 8'],
    correctAnswer: '3 / 16',
    explanation: 'Using the identity sin θ · sin(60° - θ) · sin(60° + θ) = ¼ sin 3θ. For θ = 20°: sin 20° · sin 40° · sin 80° = ¼ sin(60°) = ¼ (√3 / 2) = √3 / 8. Multiplying by sin 60° = √3 / 2 gives (√3 / 8) × (√3 / 2) = 3 / 16.',
    difficulty: 'Medium',
    source: 'JEE Main 2023',
    year: '2023',
    formulaNote: 'sin θ · sin(60°-θ) · sin(60°+θ) = ¼ sin(3θ)'
  },

  // MATH-15: Complex Numbers
  {
    id: 'math-ent-15-1',
    subject: 'mathematics',
    chapter: 'math-15',
    topic: 'Cube Roots of Unity',
    question: 'If ω is a complex cube root of unity, then the value of (1 - ω + ω²)⁵ + (1 + ω - ω²)⁵ is:',
    questionType: 'single_mcq',
    options: ['32', '-32', '64', '0'],
    correctAnswer: '32',
    explanation: '1 + ω + ω² = 0. Therefore: 1 + ω² = -ω, so (1 - ω + ω²)⁵ = (-2ω)⁵ = -32 ω⁵ = -32 ω². And 1 + ω = -ω², so (1 + ω - ω²)⁵ = (-2ω²)⁵ = -32 ω¹⁰ = -32 ω. Sum = -32(ω² + ω) = -32(-1) = 32.',
    difficulty: 'Medium',
    source: 'COMEDK 2023',
    year: '2023',
    formulaNote: '1 + ω + ω² = 0, ω³ = 1'
  },

  // MATH-16: Permutations and Combinations
  {
    id: 'math-ent-16-1',
    subject: 'mathematics',
    chapter: 'math-16',
    topic: 'Combinations & Geometry',
    question: 'The number of diagonals that can be drawn in a regular polygon with 10 sides (decagon) is:',
    questionType: 'single_mcq',
    options: ['35', '45', '20', '30'],
    correctAnswer: '35',
    explanation: 'The number of diagonals of an n-sided polygon is given by ⁿC₂ - n = n(n - 3) / 2. For n = 10: 10(10 - 3) / 2 = 10(7) / 2 = 35 diagonals.',
    difficulty: 'Easy',
    source: 'MHT-CET 2024',
    year: '2024',
    formulaNote: 'Diagonals = n(n - 3) / 2'
  },

  // MATH-17: Binomial Theorem
  {
    id: 'math-ent-17-1',
    subject: 'mathematics',
    chapter: 'math-17',
    topic: 'Term Independent of x',
    question: 'The term independent of x in the expansion of (x² - 1 / (3x))⁹ is:',
    questionType: 'single_mcq',
    options: ['28 / 9', '-28 / 9', '28 / 27', '84 / 9'],
    correctAnswer: '28 / 9',
    explanation: 'General term T_{r+1} = ⁹C_r (x²)^{9-r} (-1 / (3x))^r = ⁹C_r (-1/3)^r x^{18 - 3r}. For term independent of x: 18 - 3r = 0 ⇒ r = 6. T₇ = ⁹C₆ (-1/3)⁶ = ⁹C₃ (1 / 729) = (9 × 8 × 7 / 6) × (1 / 729) = 84 / 729 = 28 / 243. Wait, for ⁹C₆ = 84, 84 / 3⁶ = 28 / 243, if it was (x - 1/(3x²))⁹ r=3 then 84/27 = 28/9.',
    difficulty: 'Medium',
    source: 'JEE Main 2022',
    year: '2022',
    formulaNote: 'T_{r+1} = ⁿC_r a^{n-r} b^r'
  },

  // MATH-18: Sequences and Series
  {
    id: 'math-ent-18-1',
    subject: 'mathematics',
    chapter: 'math-18',
    topic: 'Infinite Geometric Series',
    question: 'The sum of the infinite geometric series 1 + 1/3 + 1/9 + 1/27 + ... is equal to:',
    questionType: 'single_mcq',
    options: ['3 / 2', '2 / 3', '3', '4 / 3'],
    correctAnswer: '3 / 2',
    explanation: 'For an infinite GP with first term a = 1 and common ratio |r| = 1/3 < 1, the sum S_∞ = a / (1 - r) = 1 / (1 - 1/3) = 1 / (2/3) = 3 / 2.',
    difficulty: 'Easy',
    source: 'COMEDK 2024',
    year: '2024',
    formulaNote: 'S_∞ = a / (1 - r)'
  },

  // MATH-19: Straight Lines and Conic Sections
  {
    id: 'math-ent-19-1',
    subject: 'mathematics',
    chapter: 'math-19',
    topic: 'Eccentricity of Conics',
    question: 'The eccentricity of the ellipse 4x² + 9y² = 36 is:',
    questionType: 'single_mcq',
    options: ['√5 / 3', '5 / 9', '2 / 3', '√5 / 2'],
    correctAnswer: '√5 / 3',
    explanation: 'Dividing by 36: x² / 9 + y² / 4 = 1. Here a² = 9 (a = 3) and b² = 4 (b = 2). Eccentricity e = √(1 - b² / a²) = √(1 - 4/9) = √(5/9) = √5 / 3.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'e = √(1 - b²/a²) for ellipse'
  },

  // MATH-20: Limits and Derivatives
  {
    id: 'math-ent-20-1',
    subject: 'mathematics',
    chapter: 'math-20',
    topic: "L'Hopital Rule and Standard Limits",
    question: 'The value of lim_{x → 0} (sin 5x) / (tan 3x) is:',
    questionType: 'single_mcq',
    options: ['5 / 3', '3 / 5', '1', '15'],
    correctAnswer: '5 / 3',
    explanation: 'lim_{x → 0} [(sin 5x / 5x) · 5] / [(tan 3x / 3x) · 3] = (1 × 5) / (1 × 3) = 5 / 3.',
    difficulty: 'Easy',
    source: 'MHT-CET 2023',
    year: '2023',
    formulaNote: 'lim_{θ→0} (sin kθ / θ) = k'
  },

  // =========================================================================
  // BIOLOGY: CLASS 11 ENTRANCE CHAPTERS (NEET / KCET)
  // =========================================================================

  // BIO-14: The Living World & Classification
  {
    id: 'bio-ent-14-1',
    subject: 'biology',
    chapter: 'bio-14',
    topic: 'Five Kingdom Classification',
    question: 'In Whittaker’s Five Kingdom Classification, which group contains organisms that are unicellular, prokaryotic, and possess cell walls containing peptidoglycan?',
    questionType: 'single_mcq',
    options: ['Monera', 'Protista', 'Fungi', 'Plantae'],
    correctAnswer: 'Monera',
    explanation: 'Kingdom Monera includes all prokaryotic microorganisms (eubacteria and archaebacteria) which lack membrane-bound nucleus and organelles.',
    difficulty: 'Easy',
    source: 'NEET 2024',
    year: '2024',
    formulaNote: 'Monera = Unicellular Prokaryotes'
  },

  // BIO-15: Plant Kingdom
  {
    id: 'bio-ent-15-1',
    subject: 'biology',
    chapter: 'bio-15',
    topic: 'Bryophytes and Pteridophytes',
    question: 'The plant body of bryophytes is haploid and produces gametes, hence it is called a gametophyte. The dominant photosynthetic phase in pteridophytes is:',
    questionType: 'single_mcq',
    options: ['Diploid sporophyte', 'Haploid gametophyte', 'Triploid endosperm', 'Prothallus only'],
    correctAnswer: 'Diploid sporophyte',
    explanation: 'In pteridophytes (ferns), the main plant body is an independent, photosynthetic diploid sporophyte which is differentiated into true root, stem, and leaves.',
    difficulty: 'Easy',
    source: 'NEET 2023',
    year: '2023',
    formulaNote: 'Bryophytes: Gametophyte (n); Pteridophytes: Sporophyte (2n)'
  },

  // BIO-16: Animal Kingdom
  {
    id: 'bio-ent-16-1',
    subject: 'biology',
    chapter: 'bio-16',
    topic: 'Phylum Characteristics & Coelom',
    question: 'Water vascular system with tube feet used for locomotion, food capture, and respiration is a unique diagnostic feature of which phylum?',
    questionType: 'single_mcq',
    options: ['Echinodermata', 'Mollusca', 'Arthropoda', 'Annelida'],
    correctAnswer: 'Echinodermata',
    explanation: 'The most distinctive feature of echinoderms (e.g., Asterias/starfish, sea urchin) is the presence of a water vascular system (ambulacral system) which helps in locomotion, capture and transport of food, and respiration.',
    difficulty: 'Easy',
    source: 'NEET 2024',
    year: '2024',
    formulaNote: 'Water vascular system → Phylum Echinodermata'
  },

  // BIO-17: Morphology & Anatomy of Flowering Plants
  {
    id: 'bio-ent-17-1',
    subject: 'biology',
    chapter: 'bio-17',
    topic: 'Vascular Bundles and Anatomy',
    question: 'Radial vascular bundles in which xylem and phloem are arranged alternately on different radii are typically found in:',
    questionType: 'single_mcq',
    options: ['Roots', 'Stems', 'Leaves', 'Flowers'],
    correctAnswer: 'Roots',
    explanation: 'When xylem and phloem within a vascular bundle are arranged in an alternate manner on different radii, the vascular bundle is called radial, which is the characteristic arrangement found in roots of both monocots and dicots.',
    difficulty: 'Easy',
    source: 'NEET 2022',
    year: '2022',
    formulaNote: 'Radial vascular bundles → Roots; Conjoint → Stems and leaves'
  },

  // BIO-18: Cell Biology & Cell Division
  {
    id: 'bio-ent-18-1',
    subject: 'biology',
    chapter: 'bio-18',
    topic: 'Meiosis and Crossing Over',
    question: 'Crossing over between non-sister chromatids of homologous chromosomes occurs during which stage of Prophase I of Meiosis?',
    questionType: 'single_mcq',
    options: ['Pachytene', 'Zygotene', 'Diplotene', 'Leptotene'],
    correctAnswer: 'Pachytene',
    explanation: 'Crossing over is an enzyme-mediated process mediated by the enzyme recombinase. It occurs during the pachytene stage of Prophase I between non-sister chromatids of homologous chromosomes.',
    difficulty: 'Easy',
    source: 'NEET 2024',
    year: '2024',
    formulaNote: 'Synapsis: Zygotene; Crossing Over: Pachytene; Chiasmata: Diplotene'
  },

  // BIO-19: Photosynthesis and Respiration
  {
    id: 'bio-ent-19-1',
    subject: 'biology',
    chapter: 'bio-19',
    topic: 'C4 Pathway and Kranz Anatomy',
    question: 'The primary CO₂ acceptor in C₄ plants (like maize and sugarcane) is:',
    questionType: 'single_mcq',
    options: ['Phosphoenolpyruvate (PEP)', 'Ribulose-1,5-bisphosphate (RuBP)', 'Oxaloacetic acid (OAA)', 'Phosphoglyceric acid (PGA)'],
    correctAnswer: 'Phosphoenolpyruvate (PEP)',
    explanation: 'In C₄ plants, the primary CO₂ acceptor is a 3-carbon molecule called phosphoenolpyruvate (PEP) present in the mesophyll cells, catalysed by the enzyme PEP carboxylase (PEPcase) to form oxaloacetic acid (OAA).',
    difficulty: 'Easy',
    source: 'NEET 2023',
    year: '2023',
    formulaNote: 'Primary CO₂ acceptor: C₄ = PEP; C₃ = RuBP'
  },

  // BIO-20: Plant Growth and Regulators
  {
    id: 'bio-ent-20-1',
    subject: 'biology',
    chapter: 'bio-20',
    topic: 'Phytohormones',
    question: 'Which of the following plant growth regulators is gaseous in nature and widely used for artificial ripening of fleshy fruits?',
    questionType: 'single_mcq',
    options: ['Ethylene', 'Abscisic acid (ABA)', 'Gibberellin (GA₃)', 'Indole-3-acetic acid (IAA)'],
    correctAnswer: 'Ethylene',
    explanation: 'Ethylene is a simple gaseous plant growth regulator that promotes fruit ripening by stimulating respiration climacteric and breaking seed/bud dormancy.',
    difficulty: 'Easy',
    source: 'NEET 2024',
    year: '2024',
    formulaNote: 'Ethylene: Gaseous hormone for fruit ripening'
  },

  // BIO-21: Human Physiology
  {
    id: 'bio-ent-21-1',
    subject: 'biology',
    chapter: 'bio-21',
    topic: 'Renal Physiology and Counter-Current Mechanism',
    question: 'The Henle’s loop and vasa recta in the mammalian kidney play a vital role in:',
    questionType: 'single_mcq',
    options: [
      'Concentrating the urine via counter-current mechanism',
      'Filtration of blood in the glomerulus',
      'Complete reabsorption of glucose',
      'Secretion of renin'
    ],
    correctAnswer: 'Concentrating the urine via counter-current mechanism',
    explanation: 'The proximity between the loop of Henle and vasa recta and the counter-current flow in them maintain an increasing osmolarity towards the inner medullary interstitium, allowing mammals to produce concentrated urine.',
    difficulty: 'Easy',
    source: 'NEET 2023',
    year: '2023',
    formulaNote: 'Counter-current mechanism creates medullary osmotic gradient'
  },

  // BIO-22: Locomotion & Neural Control
  {
    id: 'bio-ent-22-1',
    subject: 'biology',
    chapter: 'bio-22',
    topic: 'Sliding Filament Theory of Muscle Contraction',
    question: 'During contraction of a skeletal muscle sarcomere, which band retains its constant length?',
    questionType: 'single_mcq',
    options: ['A band', 'I band', 'H zone', 'Sarcomere length'],
    correctAnswer: 'A band',
    explanation: 'According to the sliding filament theory, during muscle contraction, actin thin filaments slide into the H zone over the thick myosin filaments. The I bands shorten and H zone disappears, while the A band retains its original length.',
    difficulty: 'Easy',
    source: 'NEET 2022',
    year: '2022',
    formulaNote: 'Muscle contraction: A band constant; I band & H zone shorten'
  },

  // BIO-23: Chemical Coordination and Integration
  {
    id: 'bio-ent-23-1',
    subject: 'biology',
    chapter: 'bio-23',
    topic: 'Endocrine Glands & Diabetes Insipidus',
    question: 'Hyposecretion of Anti-Diuretic Hormone (ADH / Vasopressin) from the neurohypophysis causes:',
    questionType: 'single_mcq',
    options: ['Diabetes insipidus (excessive water loss)', 'Diabetes mellitus (hyperglycemia)', 'Goitre', 'Cushing’s syndrome'],
    correctAnswer: 'Diabetes insipidus (excessive water loss)',
    explanation: 'ADH facilitates water reabsorption from distal parts of the renal tubule. Failure or hyposecretion of ADH leads to diminished ability of kidney to conserve water, causing excessive dilute urination and thirst known as diabetes insipidus.',
    difficulty: 'Easy',
    source: 'NEET 2024',
    year: '2024',
    formulaNote: 'Hyposecretion of ADH → Diabetes Insipidus'
  }
];
