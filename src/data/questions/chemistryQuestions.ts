import { Question } from '../../types';

export const chemistryQuestions: Question[] = [
  // ==========================================
  // CHEM-1: Solutions
  // ==========================================
  {
    id: 'chem-kcet-1-1',
    subject: 'chemistry',
    chapter: 'chem-1',
    topic: 'Colligative Properties & Van’t Hoff Factor',
    question: 'Which of the following 0.10 M aqueous solutions will exhibit the highest boiling point elevation?',
    questionType: 'single_mcq',
    options: ['0.10 M Al₂(SO₄)₃', '0.10 M BaCl₂', '0.10 M NaCl', '0.10 M Glucose'],
    correctAnswer: '0.10 M Al₂(SO₄)₃',
    explanation: 'Elevation in boiling point ΔT_b = i · K_b · m. For glucose i = 1; NaCl i = 2; BaCl₂ i = 3; Al₂(SO₄)₃ dissociates into 2 Al³⁺ + 3 SO₄²⁻ giving i = 5. Since molarity is identical, Al₂(SO₄)₃ gives the highest effective particle concentration (i·m = 0.50 M) and hence the highest boiling point.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'ΔT_b = i · K_b · m'
  },
  {
    id: 'chem-kcet-1-2',
    subject: 'chemistry',
    chapter: 'chem-1',
    topic: "Raoult's Law and Azeotropes",
    question: 'A mixture of ethanol and water forms a maximum boiling azeotrope or minimum boiling azeotrope? Ethanol-water mixture (95.6% ethanol by mass) forms:',
    questionType: 'single_mcq',
    options: [
      'Minimum boiling azeotrope due to positive deviation from Raoult’s law',
      'Maximum boiling azeotrope due to negative deviation from Raoult’s law',
      'An ideal solution with zero boiling point shift',
      'Maximum boiling azeotrope due to positive deviation from Raoult’s law'
    ],
    correctAnswer: 'Minimum boiling azeotrope due to positive deviation from Raoult’s law',
    explanation: 'Ethanol and water show positive deviation from Raoult’s law because intermolecular H-bonding between ethanol-water molecules is weaker than between pure water or pure ethanol. Large positive deviation leads to minimum boiling azeotrope (b.p. 78.15 °C).',
    difficulty: 'Medium',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Positive deviation → Higher vapor pressure → Minimum boiling azeotrope'
  },
  {
    id: 'chem-kcet-1-3',
    subject: 'chemistry',
    chapter: 'chem-1',
    topic: 'Osmotic Pressure',
    question: 'The osmotic pressure of a 5% (w/v) solution of cane sugar (molecular mass = 342 g/mol) at 15°C (288 K) in atm is (R = 0.0821 L·atm·K⁻¹·mol⁻¹):',
    questionType: 'single_mcq',
    options: ['3.45 atm', '6.90 atm', '1.72 atm', '4.50 atm'],
    correctAnswer: '3.45 atm',
    explanation: '5% w/v = 5 g solute in 100 mL solution = 50 g/L. Concentration C = n/V = (50 / 342) mol/L = 0.1462 M. Osmotic pressure π = CRT = 0.1462 × 0.0821 × 288 = 3.45 atm.',
    difficulty: 'Medium',
    source: 'KCET 2021',
    year: '2021',
    formulaNote: 'π = CRT = (w₂ / M₂) · (RT / V)'
  },

  // ==========================================
  // CHEM-2: Electrochemistry
  // ==========================================
  {
    id: 'chem-kcet-2-1',
    subject: 'chemistry',
    chapter: 'chem-2',
    topic: 'Kohlrausch Law of Independent Migration',
    question: 'The limiting molar conductivity of NaCl, HCl and CH₃COONa at 298 K are 126.4, 425.9 and 91.0 S·cm²·mol⁻¹ respectively. The limiting molar conductivity of CH₃COOH is:',
    questionType: 'single_mcq',
    options: ['390.5 S·cm²·mol⁻¹', '425.9 S·cm²·mol⁻¹', '290.5 S·cm²·mol⁻¹', '516.9 S·cm²·mol⁻¹'],
    correctAnswer: '390.5 S·cm²·mol⁻¹',
    explanation: "By Kohlrausch's law: Λ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) - Λ°_m(NaCl) = 91.0 + 425.9 - 126.4 = 516.9 - 126.4 = 390.5 S·cm²·mol⁻¹.",
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Λ°_m(HA) = Λ°_m(NaA) + Λ°_m(HCl) - Λ°_m(NaCl)'
  },
  {
    id: 'chem-kcet-2-2',
    subject: 'chemistry',
    chapter: 'chem-2',
    topic: 'Nernst Equation',
    question: 'For the cell Zn(s) | Zn²⁺(aq, 0.01 M) || Cu²⁺(aq, 0.1 M) | Cu(s), given E°_cell = 1.10 V at 298 K. The cell potential E_cell is (2.303 RT/F = 0.059 V):',
    questionType: 'single_mcq',
    options: ['1.1295 V', '1.0705 V', '1.1000 V', '1.1590 V'],
    correctAnswer: '1.1295 V',
    explanation: 'E_cell = E°_cell - (0.059/2) log([Zn²⁺]/[Cu²⁺]) = 1.10 - 0.0295 log(0.01 / 0.1) = 1.10 - 0.0295 log(10⁻¹) = 1.10 - 0.0295(-1) = 1.10 + 0.0295 = 1.1295 V.',
    difficulty: 'Medium',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'E_cell = E°_cell - (0.0591 / n) log Q'
  },
  {
    id: 'chem-kcet-2-3',
    subject: 'chemistry',
    chapter: 'chem-2',
    topic: 'Faraday Laws of Electrolysis',
    question: 'How many coulombs of electricity are required for the complete reduction of 1 mole of MnO₄⁻ to Mn²⁺?',
    questionType: 'single_mcq',
    options: ['4.825 × 10⁵ C', '9.65 × 10⁴ C', '1.93 × 10⁵ C', '2.89 × 10⁵ C'],
    correctAnswer: '4.825 × 10⁵ C',
    explanation: 'Half-reaction: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O. 1 mole of MnO₄⁻ requires 5 moles of electrons = 5 Faraday = 5 × 96,500 C = 482,500 C = 4.825 × 10⁵ C.',
    difficulty: 'Easy',
    source: 'KCET 2020',
    year: '2020',
    formulaNote: 'Q = n · F = 5 × 96500 C'
  },

  // ==========================================
  // CHEM-3: Chemical Kinetics
  // ==========================================
  {
    id: 'chem-kcet-3-1',
    subject: 'chemistry',
    chapter: 'chem-3',
    topic: 'First Order Kinetics',
    question: 'A first order reaction is 75% complete in 60 minutes. The time required for 50% completion (half-life) of the same reaction is:',
    questionType: 'single_mcq',
    options: ['30 minutes', '40 minutes', '20 minutes', '15 minutes'],
    correctAnswer: '30 minutes',
    explanation: 'For a first order reaction, t_75% = 2 × t_50%. Given t_75% = 60 minutes, half-life t_50% = 60 / 2 = 30 minutes.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 't_75% = 2 · t_half for first order reaction'
  },
  {
    id: 'chem-kcet-3-2',
    subject: 'chemistry',
    chapter: 'chem-3',
    topic: 'Units of Rate Constant',
    question: 'The unit of rate constant for a second-order reaction is:',
    questionType: 'single_mcq',
    options: ['mol⁻¹·L·s⁻¹', 's⁻¹', 'mol·L⁻¹·s⁻¹', 'mol⁻²·L²·s⁻¹'],
    correctAnswer: 'mol⁻¹·L·s⁻¹',
    explanation: 'General unit of rate constant k is (mol/L)^(1-n) · s⁻¹. For n = 2: (mol·L⁻¹)⁻¹ · s⁻¹ = mol⁻¹ · L · s⁻¹ (or L·mol⁻¹·s⁻¹).',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Unit of k = (mol·L⁻¹)^(1-n) · s⁻¹'
  },
  {
    id: 'chem-kcet-3-3',
    subject: 'chemistry',
    chapter: 'chem-3',
    topic: 'Arrhenius Equation',
    question: 'The rate of a chemical reaction doubles when the temperature increases from 300 K to 310 K. The activation energy E_a of the reaction is (R = 8.314 J·K⁻¹·mol⁻¹, log 2 = 0.3010):',
    questionType: 'single_mcq',
    options: ['53.6 kJ/mol', '107.2 kJ/mol', '26.8 kJ/mol', '75.4 kJ/mol'],
    correctAnswer: '53.6 kJ/mol',
    explanation: 'log(k₂/k₁) = [E_a / (2.303 R)] × [(T₂ - T₁)/(T₁·T₂)]. log 2 = [E_a / (2.303 × 8.314)] × [10 / (300 × 310)]. 0.3010 = [E_a / 19.147] × [10 / 93000] ⇒ E_a = (0.3010 × 19.147 × 93000) / 10 = 53,596 J/mol ≈ 53.6 kJ/mol.',
    difficulty: 'Hard',
    source: 'KCET 2021',
    year: '2021',
    formulaNote: 'log(k₂/k₁) = (E_a / 2.303R) · (ΔT / T₁T₂)'
  },

  // ==========================================
  // CHEM-4: The d- and f-Block Elements
  // ==========================================
  {
    id: 'chem-kcet-4-1',
    subject: 'chemistry',
    chapter: 'chem-4',
    topic: 'Spin-Only Magnetic Moment',
    question: 'Which of the following 3d-series divalent transition metal ions has the highest spin-only magnetic moment in BM?',
    questionType: 'single_mcq',
    options: ['Mn²⁺', 'Fe²⁺', 'Cr²⁺', 'Ni²⁺'],
    correctAnswer: 'Mn²⁺',
    explanation: 'Mn²⁺ has electronic configuration [Ar] 3d⁵ with 5 unpaired electrons (n = 5). Magnetic moment μ = √(n(n+2)) = √(5 × 7) = √35 ≈ 5.92 BM, which is the highest among 3d transition metal cations.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'μ = √(n(n+2)) BM'
  },
  {
    id: 'chem-kcet-4-2',
    subject: 'chemistry',
    chapter: 'chem-4',
    topic: 'Lanthanoid Contraction',
    question: 'The cause of lanthanoid contraction is:',
    questionType: 'single_mcq',
    options: [
      'Poor shielding effect of 4f electrons',
      'Effective shielding by 4f electrons',
      'Increase in shielding by 5d electrons',
      'Decrease in nuclear charge'
    ],
    correctAnswer: 'Poor shielding effect of 4f electrons',
    explanation: 'The 4f orbitals have a diffused shape and therefore exert very poor shielding on outer electrons. As atomic number increases, the increasing effective nuclear charge pulls the outer electrons inward, causing a steady decrease in atomic/ionic radii.',
    difficulty: 'Easy',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'Lanthanoid contraction causes Zr (4d) and Hf (5d) to have almost identical atomic radii'
  },

  // ==========================================
  // CHEM-5: Coordination Compounds
  // ==========================================
  {
    id: 'chem-kcet-5-1',
    subject: 'chemistry',
    chapter: 'chem-5',
    topic: 'Crystal Field Theory & Hybridisation',
    question: 'According to Valence Bond Theory, the hybridization, geometry and magnetic nature of [Ni(CN)₄]²⁻ complex ion are:',
    questionType: 'single_mcq',
    options: [
      'dsp², square planar, diamagnetic',
      'sp³, tetrahedral, paramagnetic',
      'sp³d², octahedral, diamagnetic',
      'dsp², square planar, paramagnetic'
    ],
    correctAnswer: 'dsp², square planar, diamagnetic',
    explanation: 'Ni²⁺ is 3d⁸. CN⁻ is a strong field ligand which forces pairing of the two unpaired 3d electrons, leaving one 3d orbital vacant. The hybridization is dsp² (inner orbital complex), shape is square planar, and all electrons are paired so it is diamagnetic.',
    difficulty: 'Medium',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: '[Ni(CN)₄]²⁻: CN⁻ forces pairing → dsp² square planar diamagnetic'
  },
  {
    id: 'chem-kcet-5-2',
    subject: 'chemistry',
    chapter: 'chem-5',
    topic: 'Werner Coordination Theory',
    question: 'When 1 mole of CoCl₃·5NH₃ is treated with excess AgNO₃ solution, 2 moles of AgCl are precipitated. The coordination formula of the compound is:',
    questionType: 'single_mcq',
    options: ['[Co(NH₃)₅Cl]Cl₂', '[Co(NH₃)₄Cl₂]Cl·NH₃', '[Co(NH₃)₅]Cl₃', '[Co(NH₃)₆]Cl₃'],
    correctAnswer: '[Co(NH₃)₅Cl]Cl₂',
    explanation: 'Precipitation of 2 moles of AgCl indicates that 2 chloride ions are present outside the coordination sphere as ionisable primary valencies. The formula is [Co(NH₃)₅Cl]Cl₂.',
    difficulty: 'Easy',
    source: 'KCET 2021',
    year: '2021',
    formulaNote: 'Only counter ions outside brackets precipitate with AgNO₃'
  },

  // ==========================================
  // CHEM-6: Haloalkanes and Haloarenes
  // ==========================================
  {
    id: 'chem-kcet-6-1',
    subject: 'chemistry',
    chapter: 'chem-6',
    topic: 'SN1 vs SN2 Mechanisms',
    question: 'The order of reactivity of the following alkyl halides towards S_N1 nucleophilic substitution reaction is:',
    questionType: 'single_mcq',
    options: [
      'Tertiary > Secondary > Primary > Methyl',
      'Methyl > Primary > Secondary > Tertiary',
      'Primary > Secondary > Tertiary > Methyl',
      'Tertiary = Secondary = Primary'
    ],
    correctAnswer: 'Tertiary > Secondary > Primary > Methyl',
    explanation: 'S_N1 reaction proceeds via the formation of a carbocation intermediate in the rate-determining step. Carbocation stability follows 3° > 2° > 1° > CH₃⁺. Hence reactivity towards S_N1 is 3° > 2° > 1° > CH₃.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'S_N1 rate ∝ Carbocation stability (3° > 2° > 1°)'
  },
  {
    id: 'chem-kcet-6-2',
    subject: 'chemistry',
    chapter: 'chem-6',
    topic: 'Sandmeyer and Finkelstein Reactions',
    question: 'Alkyl iodides are best prepared by the reaction of alkyl chlorides or bromides with sodium iodide (NaI) in dry acetone. This halogen exchange reaction is called:',
    questionType: 'single_mcq',
    options: ['Finkelstein reaction', 'Swarts reaction', 'Wurtz reaction', 'Sandmeyer reaction'],
    correctAnswer: 'Finkelstein reaction',
    explanation: 'R-Cl/Br + NaI (in dry acetone) → R-I + NaCl/NaBr(s). NaCl and NaBr precipitate in dry acetone, driving the equilibrium forward according to Le Chatelier’s principle. This is the Finkelstein reaction.',
    difficulty: 'Easy',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'Finkelstein: R-X + NaI/acetone → R-I + NaX'
  },

  // ==========================================
  // CHEM-7: Alcohols, Phenols and Ethers
  // ==========================================
  {
    id: 'chem-kcet-7-1',
    subject: 'chemistry',
    chapter: 'chem-7',
    topic: 'Lucas Test for Alcohols',
    question: 'An alcohol on treatment with Lucas reagent (conc. HCl + anhydrous ZnCl₂) gives cloudiness immediately at room temperature. The alcohol is most likely:',
    questionType: 'single_mcq',
    options: ['2-Methylpropan-2-ol (tertiary)', 'Butan-2-ol (secondary)', 'Butan-1-ol (primary)', 'Ethanol'],
    correctAnswer: '2-Methylpropan-2-ol (tertiary)',
    explanation: 'Tertiary alcohols react immediately with Lucas reagent to produce insoluble alkyl chloride giving instant turbidity. Secondary alcohols give turbidity in 5 minutes, while primary alcohols do not produce turbidity at room temperature unless heated.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Lucas test: 3° immediate, 2° in 5 min, 1° only upon heating'
  },
  {
    id: 'chem-kcet-7-2',
    subject: 'chemistry',
    chapter: 'chem-7',
    topic: 'Kolbe and Reimer-Tiemann Reactions',
    question: 'Phenol reacts with chloroform and aqueous sodium hydroxide followed by acidification to produce salicylaldehyde as the major product. This reaction is known as:',
    questionType: 'single_mcq',
    options: ['Reimer-Tiemann reaction', 'Kolbe reaction', 'Friedel-Crafts acylation', 'Williamson synthesis'],
    correctAnswer: 'Reimer-Tiemann reaction',
    explanation: 'Reimer-Tiemann reaction: Phenol + CHCl₃ + 3 NaOH → o-hydroxybenzaldehyde (salicylaldehyde). The electrophile generated in situ is dichlorocarbene (:CCl₂).',
    difficulty: 'Easy',
    source: 'KCET 2021',
    year: '2021',
    formulaNote: 'Phenol + CHCl₃/NaOH → Salicylaldehyde (Electrophile: :CCl₂)'
  },

  // ==========================================
  // CHEM-8: Aldehydes, Ketones and Carboxylic Acids
  // ==========================================
  {
    id: 'chem-kcet-8-1',
    subject: 'chemistry',
    chapter: 'chem-8',
    topic: 'Cannizzaro Reaction',
    question: 'Which of the following compounds will undergo Cannizzaro reaction when heated with concentrated 50% sodium hydroxide solution?',
    questionType: 'single_mcq',
    options: ['Benzaldehyde (C₆H₅CHO)', 'Acetaldehyde (CH₃CHO)', 'Acetone (CH₃COCH₃)', 'Propionaldehyde (CH₃CH₂CHO)'],
    correctAnswer: 'Benzaldehyde (C₆H₅CHO)',
    explanation: 'Aldehydes that lack α-hydrogen atoms undergo Cannizzaro reaction (disproportionation into alcohol and carboxylate salt). Benzaldehyde (C₆H₅CHO) and formaldehyde (HCHO) have no α-hydrogens, so they undergo Cannizzaro reaction.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Cannizzaro: 2 RCHO (no α-H) + conc. NaOH → RCH₂OH + RCOONa'
  },
  {
    id: 'chem-kcet-8-2',
    subject: 'chemistry',
    chapter: 'chem-8',
    topic: 'Iodoform Reaction',
    question: 'Which of the following compounds gives a yellow precipitate of CHI₃ on warming with iodine and aqueous NaOH?',
    questionType: 'single_mcq',
    options: ['Pentan-2-one', 'Pentan-3-one', 'Benzaldehyde', 'Methanol'],
    correctAnswer: 'Pentan-2-one',
    explanation: 'The iodoform test is given by compounds containing the CH₃-C=O (methyl carbonyl) group or CH₃-CH(OH)- group. Pentan-2-one has the CH₃-CO- group, so it reacts with I₂/NaOH to yield yellow iodoform (CHI₃).',
    difficulty: 'Medium',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'Iodoform test requires CH₃-C=O or CH₃-CH(OH)- group'
  },

  // ==========================================
  // CHEM-9: Amines
  // ==========================================
  {
    id: 'chem-kcet-9-1',
    subject: 'chemistry',
    chapter: 'chem-9',
    topic: 'Carbylamine Test and Basicity',
    question: 'Which of the following amines gives a foul-smelling isocyanide on heating with chloroform and ethanolic KOH (Carbylamine reaction)?',
    questionType: 'single_mcq',
    options: ['Aniline (primary aromatic amine)', 'N-Methylaniline (secondary)', 'N,N-Dimethylaniline (tertiary)', 'Triethylamine (tertiary)'],
    correctAnswer: 'Aniline (primary aromatic amine)',
    explanation: 'The carbylamine test is exclusively given by primary amines (both aliphatic and aromatic) upon heating with CHCl₃ and alc. KOH to form an offensive-smelling isocyanide (carbylamine): R-NH₂ + CHCl₃ + 3KOH → R-NC + 3KCl + 3H₂O.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: '1° amine + CHCl₃ + alc. KOH → R-NC (foul smell)'
  },
  {
    id: 'chem-kcet-9-2',
    subject: 'chemistry',
    chapter: 'chem-9',
    topic: 'Hoffmann Bromamide Degradation',
    question: 'In the Hoffmann bromamide degradation reaction, the number of moles of NaOH consumed per mole of primary amine produced from an amide is:',
    questionType: 'single_mcq',
    options: ['4', '2', '1', '6'],
    correctAnswer: '4',
    explanation: 'Balanced equation: R-CONH₂ + Br₂ + 4 NaOH → R-NH₂ + Na₂CO₃ + 2 NaBr + 2 H₂O. Exactly 4 moles of NaOH and 1 mole of Br₂ are consumed per mole of amide converted into primary amine.',
    difficulty: 'Medium',
    source: 'KCET 2020',
    year: '2020',
    formulaNote: 'R-CONH₂ + Br₂ + 4 NaOH → R-NH₂ + Na₂CO₃ + 2 NaBr + 2 H₂O'
  },

  // ==========================================
  // CHEM-10: Biomolecules
  // ==========================================
  {
    id: 'chem-kcet-10-1',
    subject: 'chemistry',
    chapter: 'chem-10',
    topic: 'Structure of Glucose and Fructose',
    question: 'On prolonged heating with concentrated hydroiodic acid (HI) and red phosphorus, D-glucose is completely reduced to:',
    questionType: 'single_mcq',
    options: ['n-Hexane', 'Sorbitol', 'Gluconic acid', 'Saccharic acid'],
    correctAnswer: 'n-Hexane',
    explanation: 'Prolonged heating of D-glucose with HI and red P at 373 K reduces all carbon atoms to give n-hexane (CH₃-CH₂-CH₂-CH₂-CH₂-CH₃), which proves that all 6 carbon atoms in glucose are linked in a straight unbranched chain.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'C₆H₁₂O₆ + HI / Red P (Δ) → n-Hexane'
  },
  {
    id: 'chem-kcet-10-2',
    subject: 'chemistry',
    chapter: 'che-10',
    topic: 'Vitamins & Nucleic Acids',
    question: 'Deficiency of Vitamin B₁₂ (Cyanocobalamin) in human diet causes:',
    questionType: 'single_mcq',
    options: ['Pernicious anaemia', 'Beri-beri', 'Scurvy', 'Rickets'],
    correctAnswer: 'Pernicious anaemia',
    explanation: 'Vitamin B₁₂ deficiency leads to defective maturation of RBCs, causing pernicious anaemia (megaloblastic anaemia). Beri-beri is caused by Vitamin B₁ deficiency, scurvy by Vitamin C, and rickets by Vitamin D.',
    difficulty: 'Easy',
    source: 'KCET 2021',
    year: '2021',
    formulaNote: 'Vit B₁₂ (Cyanocobalamin) deficiency → Pernicious Anaemia'
  },

  // ==========================================
  // ADDITIONAL HIGH-YIELD KCET & MTG CHEMISTRY MCQS
  // ==========================================
  {
    id: 'chem-mtg-1-1',
    subject: 'chemistry',
    chapter: 'che-1',
    topic: 'Henry’s Law and Gas Solubility',
    question: 'According to Henry’s law, the solubility of a gas in a liquid at constant temperature is directly proportional to the partial pressure of the gas. Which of the following statements about Henry’s law constant (K_H) is correct?',
    questionKannada: 'ಹೆನ್ರಿಯ ನಿಯಮದ ಪ್ರಕಾರ, ಸ್ಥಿರ ತಾಪಮಾನದಲ್ಲಿ ದ್ರವದಲ್ಲಿ ಅನಿಲದ ಕರಗುವಿಕೆಯು ಆ ಅನಿಲದ ಆಂಶಿಕ ಒತ್ತಡಕ್ಕೆ ನೇರ ಅನುಪಾತದಲ್ಲಿರುತ್ತದೆ. ಹೆನ್ರಿಯ ನಿಯಮ ಸ್ಥಿರಾಂಕ (K_H) ಕುರಿತು ಈ ಕೆಳಗಿನ ಯಾವ ಹೇಳಿಕೆಯು ಸರಿಯಾಗಿದೆ?',
    questionType: 'single_mcq',
    options: [
      'Higher K_H value indicates lower solubility of the gas in liquid',
      'Higher K_H value indicates higher solubility of the gas in liquid',
      'K_H value decreases with increase in temperature',
      'K_H value is independent of the nature of the gas'
    ],
    optionsKannada: [
      'ಹೆಚ್ಚಿನ K_H ಮೌಲ್ಯವು ದ್ರವದಲ್ಲಿ ಅನಿಲದ ಕಡಿಮೆ ಕರಗುವಿಕೆಯನ್ನು ಸೂಚಿಸುತ್ತದೆ',
      'ಹೆಚ್ಚಿನ K_H ಮೌಲ್ಯವು ದ್ರವದಲ್ಲಿ ಅನಿಲದ ಹೆಚ್ಚಿನ ಕರಗುವಿಕೆಯನ್ನು ಸೂಚಿಸುತ್ತದೆ',
      'ತಾಪಮಾನ ಹೆಚ್ಚಾದಂತೆ K_H ಮೌಲ್ಯ ಕಡಿಮೆಯಾಗುತ್ತದೆ',
      'K_H ಮೌಲ್ಯವು ಅನಿಲದ ಸ್ವಭಾವದಿಂದ ಸ್ವತಂತ್ರವಾಗಿದೆ'
    ],
    correctAnswer: 'Higher K_H value indicates lower solubility of the gas in liquid',
    explanation: 'p = K_H · x. At a given partial pressure p, higher K_H means smaller mole fraction x (solubility). Also, K_H increases with increasing temperature, which explains why aquatic species are more comfortable in cold water (greater O₂ solubility).',
    explanationKannada: 'p = K_H · x. ಒಂದು ನಿರ್ದಿಷ್ಟ ಒತ್ತಡದಲ್ಲಿ, K_H ಮೌಲ್ಯ ಹೆಚ್ಚಾದಷ್ಟು ಕರಗುವಿಕೆಯ ಪ್ರಮಾಣ (x) ಕಡಿಮೆಯಾಗುತ್ತದೆ. ಆದ್ದರಿಂದ ತಣ್ಣೀರಿನಲ್ಲಿ ಆಕ್ಸಿಜನ್ ಹೆಚ್ಚು ಕರಗಿ ಜಲಚರಗಳಿಗೆ ಅನುಕೂಲಕರವಾಗಿರುತ್ತದೆ.',
    difficulty: 'Medium',
    source: 'KCET / NCERT Fingertips',
    year: '2024',
    formulaNote: 'p = K_H · x; Higher K_H → Lower Solubility'
  },
  {
    id: 'chem-mtg-2-1',
    subject: 'chemistry',
    chapter: 'che-2',
    topic: 'Kohlrausch’s Law of Independent Migration',
    question: 'The limiting molar conductivities (Λ°ₘ) of KCl, KNO₃ and AgNO₃ are 149.9, 145.0 and 133.4 S·cm²·mol⁻¹ respectively. The limiting molar conductivity of AgCl is:',
    questionKannada: 'KCl, KNO₃ ಮತ್ತು AgNO₃ ಗಳ ಸೀಮಿತ ಮೋಲಾರ್ ವಾಹಕತೆಗಳು (Λ°ₘ) ಕ್ರಮವಾಗಿ 149.9, 145.0 ಮತ್ತು 133.4 S·cm²·mol⁻¹ ಆಗಿವೆ. AgCl ನ ಸೀಮಿತ ಮೋಲಾರ್ ವಾಹಕತೆ ಎಷ್ಟು?',
    questionType: 'single_mcq',
    options: ['138.3 S·cm²·mol⁻¹', '161.5 S·cm²·mol⁻¹', '128.5 S·cm²·mol⁻¹', '294.9 S·cm²·mol⁻¹'],
    optionsKannada: ['138.3 S·cm²·mol⁻¹', '161.5 S·cm²·mol⁻¹', '128.5 S·cm²·mol⁻¹', '294.9 S·cm²·mol⁻¹'],
    correctAnswer: '138.3 S·cm²·mol⁻¹',
    explanation: 'By Kohlrausch’s Law: Λ°ₘ(AgCl) = Λ°ₘ(AgNO₃) + Λ°ₘ(KCl) - Λ°ₘ(KNO₃) = 133.4 + 149.9 - 145.0 = 283.3 - 145.0 = 138.3 S·cm²·mol⁻¹.',
    explanationKannada: 'ಕೋಲ್‌ರಾಷ್ ನಿಯಮದಂತೆ: Λ°ₘ(AgCl) = Λ°ₘ(AgNO₃) + Λ°ₘ(KCl) - Λ°ₘ(KNO₃) = 133.4 + 149.9 - 145.0 = 138.3 S·cm²·mol⁻¹.',
    difficulty: 'Medium',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Λ°ₘ(AgCl) = Λ°ₘ(AgNO₃) + Λ°ₘ(KCl) - Λ°ₘ(KNO₃)'
  },
  {
    id: 'chem-mtg-2-2',
    subject: 'chemistry',
    chapter: 'che-2',
    topic: 'Standard Reduction Potentials & Oxidizing Power',
    question: 'The standard reduction potentials E° of four metals A, B, C, D are -1.66 V, +0.34 V, +0.80 V and -0.76 V respectively. The strongest reducing agent is:',
    questionKannada: 'ನಾಲ್ಕು ಲೋಹಗಳಾದ A, B, C, D ಗಳ ಪ್ರಮಾಣಿತ ಅಪಕರ್ಷಣ ವಿಭವಗಳು (E°) ಕ್ರಮವಾಗಿ -1.66 V, +0.34 V, +0.80 V ಮತ್ತು -0.76 V ಆಗಿವೆ. ಇವುಗಳಲ್ಲಿ ಅತ್ಯಂತ ಪ್ರಬಲ ಅಪಕರ್ಷಣಕಾರಿ (Strongest Reducing Agent) ಯಾವುದು?',
    questionType: 'single_mcq',
    options: ['A', 'C', 'B', 'D'],
    optionsKannada: ['A', 'C', 'B', 'D'],
    correctAnswer: 'A',
    explanation: 'The more negative the standard reduction potential (E°), the greater the tendency to undergo oxidation, and therefore the stronger the reducing agent. Metal A has the most negative E° (-1.66 V), making it the strongest reducing agent.',
    explanationKannada: 'ಪ್ರಮಾಣಿತ ಅಪಕರ್ಷಣ ವಿಭವ (E°) ಹೆಚ್ಚು ಋಣಾತ್ಮಕವಾಗಿದ್ದಷ್ಟೂ (most negative) ಅದು ಸುಲಭವಾಗಿ ಉತ್ಕರ್ಷಣಗೊಂಡು ಅತ್ಯಂತ ಪ್ರಬಲ ಅಪಕರ್ಷಣಕಾರಿಯಾಗಿರುತ್ತದೆ. ಆದ್ದರಿಂದ A (-1.66 V) ಪ್ರಬಲ ಅಪಕರ್ಷಣಕಾರಿ.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Most negative E° → Strongest Reducing Agent'
  },
  {
    id: 'chem-mtg-3-1',
    subject: 'chemistry',
    chapter: 'che-3',
    topic: 'Units of Rate Constant for nth Order Reaction',
    question: 'The unit of rate constant for a second order chemical reaction is:',
    questionKannada: 'ದ್ವಿತೀಯ ದರ್ಜೆಯ (Second Order) ರಾಸಾಯನಿಕ ಕ್ರಿಯೆಯ ದರ ಸ್ಥಿರಾಂಕದ (Rate constant) ಏಕಮಾನ ಯಾವುದು?',
    questionType: 'single_mcq',
    options: ['mol⁻¹·L·s⁻¹', 'mol·L⁻¹·s⁻¹', 's⁻¹', 'mol⁻²·L²·s⁻¹'],
    optionsKannada: ['mol⁻¹·L·s⁻¹', 'mol·L⁻¹·s⁻¹', 's⁻¹', 'mol⁻²·L²·s⁻¹'],
    correctAnswer: 'mol⁻¹·L·s⁻¹',
    explanation: 'General formula for unit of k for an nth order reaction is (mol/L)^(1-n) · s⁻¹. For n = 2: (mol·L⁻¹)^(1-2) · s⁻¹ = (mol·L⁻¹)⁻¹ · s⁻¹ = mol⁻¹·L·s⁻¹ (or L·mol⁻¹·s⁻¹).',
    explanationKannada: 'n ನೇ ದರ್ಜೆಯ ಕ್ರಿಯೆಯ k ಏಕಮಾನ = (mol/L)^(1-n) · s⁻¹. n = 2 ಆದಾಗ (mol/L)⁻¹ · s⁻¹ = mol⁻¹·L·s⁻¹.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Unit of k = (mol·L⁻¹)^(1-n) · time⁻¹'
  },
  {
    id: 'chem-mtg-3-2',
    subject: 'chemistry',
    chapter: 'che-3',
    topic: 'Arrhenius Equation and Activation Energy',
    question: 'When the temperature of a reaction is increased from 300 K to 310 K, the rate of reaction almost doubles. This is mainly due to:',
    questionKannada: 'ಕ್ರಿಯೆಯ ತಾಪಮಾನವನ್ನು 300 K ನಿಂದ 310 K ಗೆ ಹೆಚ್ಚಿಸಿದಾಗ, ಕ್ರಿಯೆಯ ದರವು ದುಪ್ಪಟ್ಟಾಗುತ್ತದೆ. ಇದಕ್ಕೆ ಮುಖ್ಯ ಕಾರಣ:',
    questionType: 'single_mcq',
    options: [
      'Fraction of molecules having energy ≥ activation energy doubles',
      'The number of total collisions increases by 100%',
      'The activation energy of the reaction is halved',
      'The average kinetic energy of molecules doubles'
    ],
    optionsKannada: [
      'ಉತ್ತೇಜನ ಶಕ್ತಿಗಿಂತ (E_a) ಹೆಚ್ಚು ಶಕ್ತಿ ಹೊಂದಿರುವ ಅಣುಗಳ ಪ್ರಮಾಣ ದುಪ್ಪಟ್ಟಾಗುವುದು',
      'ಒಟ್ಟು ಘರ್ಷಣೆಗಳ ಸಂಖ್ಯೆ 100% ಹೆಚ್ಚಾಗುವುದು',
      'ಕ್ರಿಯೆಯ ಉತ್ತೇಜನ ಶಕ್ತಿಯು ಅರ್ಧದಷ್ಟು ಕಡಿಮೆಯಾಗುವುದು',
      'ಅಣುಗಳ ಸರಾಸರಿ ಚಲನ ಶಕ್ತಿ ದುಪ್ಪಟ್ಟಾಗುವುದು'
    ],
    correctAnswer: 'Fraction of molecules having energy ≥ activation energy doubles',
    explanation: 'A 10 K rise in temperature increases the total collision frequency by only about 1-2%, but the fraction of molecules with kinetic energy equal to or greater than activation energy (e^(-E_a / RT)) nearly doubles, doubling the effective collisions and the reaction rate.',
    explanationKannada: '10 K ತಾಪಮಾನ ಏರಿಕೆಯಿಂದ ಒಟ್ಟು ಘರ್ಷಣೆಗಳು 1-2% ಮಾತ್ರ ಹೆಚ್ಚಾಗುತ್ತವೆ, ಆದರೆ ಉತ್ತೇಜನ ಶಕ್ತಿಗಿಂತ ಹೆಚ್ಚಿನ ಶಕ್ತಿಯುಳ್ಳ ಅಣುಗಳ ಭಿನ್ನರಾಶಿ (e^(-E_a/RT)) ದುಪ್ಪಟ್ಟಾಗುತ್ತದೆ.',
    difficulty: 'Medium',
    source: 'KCET / NCERT Fingertips',
    year: '2023',
    formulaNote: 'k = A · e^(-E_a / RT)'
  },
  {
    id: 'chem-mtg-4-1',
    subject: 'chemistry',
    chapter: 'che-4',
    topic: 'Lanthanoid Contraction and Consequence',
    question: 'Which pair of elements has almost identical atomic radii due to lanthanoid contraction?',
    questionKannada: 'ಲ್ಯಾಂಥನಾಯ್ಡ್ ಸಂಕೋಚನದ (Lanthanoid Contraction) ಪರಿಣಾಮವಾಗಿ ಬಹುತೇಕ ಒಂದೇ ಪರಮಾಣು ತ್ರಿಜ್ಯವನ್ನು ಹೊಂದಿರುವ ಧಾತುಗಳ ಜೋಡಿ ಯಾವುದು?',
    questionType: 'single_mcq',
    options: ['Zr and Hf', 'Ti and Zr', 'Sc and Y', 'Fe and Ni'],
    optionsKannada: ['Zr ಮತ್ತು Hf', 'Ti ಮತ್ತು Zr', 'Sc ಮತ್ತು Y', 'Fe ಮತ್ತು Ni'],
    correctAnswer: 'Zr and Hf',
    explanation: 'Lanthanoid contraction is caused by poor shielding of 4f electrons. The filling of 4f orbitals prior to 5d elements results in a steady decrease in size, making the atomic radius of 4d series Zirconium (Zr = 160 pm) nearly identical to 5d series Hafnium (Hf = 159 pm).',
    explanationKannada: '4f ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳ ಕಳಪೆ ರಕ್ಷಣಾ ಪರಿಣಾಮದಿಂದಾಗಿ 4d ಶ್ರೇಣಿಯ ಜಿರ್ಕೋನಿಯಮ್ (Zr, 160 pm) ಮತ್ತು 5d ಶ್ರೇಣಿಯ ಹಾಫ್ನಿಯಮ್ (Hf, 159 pm) ಬಹುತೇಕ ಒಂದೇ ಪರಮಾಣು ತ್ರಿಜ್ಯವನ್ನು ಹೊಂದಿರುತ್ತವೆ.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Zr (4d) and Hf (5d) have nearly identical radii due to Lanthanoid Contraction'
  },
  {
    id: 'chem-mtg-4-2',
    subject: 'chemistry',
    chapter: 'che-4',
    topic: 'Spin-Only Magnetic Moment',
    question: 'The spin-only magnetic moment of divalent manganese ion (Mn²⁺, Z = 25) in Bohr Magnetons (BM) is:',
    questionKannada: 'ದ್ವಿವೇಲೆಂಟ್ ಮ್ಯಾಂಗನೀಸ್ ಅಯಾನು (Mn²⁺, Z = 25) ನ ಸ್ಪಿನ್-ಮಾತ್ರ ಕಾಂತೀಯ ಭ್ರಮಣ ಮೌಲ್ಯವು (BM ನಲ್ಲಿ) ಎಷ್ಟು?',
    questionType: 'single_mcq',
    options: ['5.92 BM', '4.90 BM', '3.87 BM', '1.73 BM'],
    optionsKannada: ['5.92 BM', '4.90 BM', '3.87 BM', '1.73 BM'],
    correctAnswer: '5.92 BM',
    explanation: 'Mn: [Ar] 3d⁵ 4s². Mn²⁺: [Ar] 3d⁵. Number of unpaired electrons n = 5. Spin-only magnetic moment μ = √(n(n + 2)) = √(5(7)) = √35 ≈ 5.92 BM.',
    explanationKannada: 'Mn²⁺ ನ ಎಲೆಕ್ಟ್ರಾನ್ ವಿನ್ಯಾಸ [Ar] 3d⁵. ಜೋಡಿಯಾಗದ ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳ ಸಂಖ್ಯೆ n = 5. μ = √(n(n + 2)) = √35 ≈ 5.92 BM.',
    difficulty: 'Easy',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'μ = √(n(n + 2)) BM'
  },
  {
    id: 'chem-mtg-5-1',
    subject: 'chemistry',
    chapter: 'che-5',
    topic: 'Crystal Field Theory & High/Low Spin Complexes',
    question: 'According to Crystal Field Theory, in an octahedral complex, the d-orbitals split into two sets. The set with lower energy is:',
    questionKannada: 'ಸ್ಫಟಿಕ ಕ್ಷೇತ್ರ ಸಿದ್ಧಾಂತದ (CFT) ಪ್ರಕಾರ, ಅಷ್ಟಮುಖಿಯ (Octahedral) ಸಂಕೀರ್ಣದಲ್ಲಿ d-ಕಕ್ಷೆಗಳು ಎರಡು ಗುಂಪುಗಳಾಗಿ ವಿಭಜನೆಯಾಗುತ್ತವೆ. ಕಡಿಮೆ ಶಕ್ತಿಯನ್ನು ಹೊಂದಿರುವ ಗುಂಪು ಯಾವುದು?',
    questionType: 'single_mcq',
    options: ['t₂g set (d_xy, d_yz, d_zx)', 'eg set (d_x²-y², d_z²)', 'Only d_z²', 'Both t₂g and eg have identical energy'],
    optionsKannada: ['t₂g ಗುಂಪು (d_xy, d_yz, d_zx)', 'eg ಗುಂಪು (d_x²-y², d_z²)', 'ಕೇವಲ d_z²', 't₂g ಮತ್ತು eg ಎರಡೂ ಸಮಾನ ಶಕ್ತಿ ಹೊಂದಿರುತ್ತವೆ'],
    correctAnswer: 't₂g set (d_xy, d_yz, d_zx)',
    explanation: 'In octahedral crystal field splitting, the ligands approach along the Cartesian axes (x, y, z). Therefore, eg orbitals (d_x²-y², d_z²) lie along axes and experience greater repulsion (higher energy by +0.6 Δₒ), while t₂g orbitals (d_xy, d_yz, d_zx) lie between the axes and have lower energy (stabilized by -0.4 Δₒ).',
    explanationKannada: 'ಅಷ್ಟಮುಖಿಯ ಸಂಕೀರ್ಣದಲ್ಲಿ ಅಕ್ಷಗಳ ನಡುವೆ ಇರುವ t₂g ಕಕ್ಷೆಗಳು (d_xy, d_yz, d_zx) ಕಡಿಮೆ ವಿಕರ್ಷಣೆಗೆ ಒಳಗಾಗಿ ಕಡಿಮೆ ಶಕ್ತಿಯನ್ನು ಹೊಂದುತ್ತವೆ (-0.4 Δₒ).',
    difficulty: 'Medium',
    source: 'KCET / NCERT Fingertips',
    year: '2023',
    formulaNote: 'Octahedral: t₂g (-0.4 Δₒ) lower energy, eg (+0.6 Δₒ) higher energy'
  },
  {
    id: 'chem-mtg-6-1',
    subject: 'chemistry',
    chapter: 'che-6',
    topic: 'SN1 vs SN2 Reaction Mechanisms',
    question: 'Which of the following alkyl halides reacts fastest via SN1 mechanism with aqueous KOH?',
    questionKannada: 'ಜಲೀಯ KOH ನೊಂದಿಗೆ SN1 ಕ್ರಿಯಾವಿಧಾನದ ಮೂಲಕ ಈ ಕೆಳಗಿನ ಯಾವ ಆಲ್ಕೈಲ್ ಹ್ಯಾಲೈಡ್ ಅತ್ಯಂತ ವೇಗವಾಗಿ ವರ್ತಿಸುತ್ತದೆ?',
    questionType: 'single_mcq',
    options: ['(CH₃)₃C-Br', '(CH₃)₂CH-Br', 'CH₃CH₂-Br', 'CH₃-Br'],
    optionsKannada: ['(CH₃)₃C-Br', '(CH₃)₂CH-Br', 'CH₃CH₂-Br', 'CH₃-Br'],
    correctAnswer: '(CH₃)₃C-Br',
    explanation: 'SN1 mechanism proceeds through a carbocation intermediate. The order of carbocation stability is 3° > 2° > 1° > methyl due to hyperconjugation and inductive effect (+I). Tertiary butyl bromide (CH₃)₃C-Br forms a very stable 3° carbocation and hence undergoes SN1 fastest.',
    explanationKannada: 'SN1 ಕ್ರಿಯೆಯು ಕಾರ್ಬೋಕ್ಯಾಟಯಾನ್ ಮೂಲಕ ನಡೆಯುತ್ತದೆ. 3° ಕಾರ್ಬೋಕ್ಯಾಟಯಾನ್ ಅತ್ಯಂತ ಸ್ಥಿರವಾಗಿರುವುದರಿಂದ (CH₃)₃C-Br ಅತ್ಯಂತ ವೇಗವಾಗಿ ವರ್ತಿಸುತ್ತದೆ.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'SN1 reactivity: 3° > 2° > 1° > CH₃-X (Carbocation stability)'
  },
  {
    id: 'chem-mtg-7-1',
    subject: 'chemistry',
    chapter: 'che-7',
    topic: 'Lucas Test for Alcohol Classification',
    question: 'An alcohol reacts immediately with Lucas reagent (anhydrous ZnCl₂ + conc. HCl) at room temperature to give turbidity. The alcohol is:',
    questionKannada: 'ಕೊಠಡಿಯ ತಾಪಮಾನದಲ್ಲಿ ಲ್ಯೂಕಾಸ್ ಕಾರಕದೊಂದಿಗೆ (ಅನ್‌ಹೈಡ್ರಸ್ ZnCl₂ + ಸಾಂದ್ರೀಕೃತ HCl) ತಕ್ಷಣವೇ ಮಬ್ಬುತನವನ್ನು (turbidity) ಉಂಟುಮಾಡುವ ಆಲ್ಕೋಹಾಲ್ ಯಾವುದು?',
    questionType: 'single_mcq',
    options: ['Tertiary alcohol (3°)', 'Secondary alcohol (2°)', 'Primary alcohol (1°)', 'Methanol'],
    optionsKannada: ['ತೃತೀಯಕ ಆಲ್ಕೋಹಾಲ್ (3°)', 'ದ್ವಿತೀಯಕ ಆಲ್ಕೋಹಾಲ್ (2°)', 'ಪ್ರಾಥಮಿಕ ಆಲ್ಕೋಹಾಲ್ (1°)', 'ಮಿಥನಾಲ್'],
    correctAnswer: 'Tertiary alcohol (3°)',
    explanation: 'Lucas test distinguishes 1°, 2°, and 3° alcohols based on turbidity of insoluble alkyl chloride: 3° alcohol produces immediate turbidity at room temp, 2° alcohol produces turbidity within 5 minutes, while 1° alcohol does not give turbidity at room temperature without heating.',
    explanationKannada: 'ಲ್ಯೂಕಾಸ್ ಪರೀಕ್ಷೆಯಲ್ಲಿ 3° ಆಲ್ಕೋಹಾಲ್‌ಗಳು ತಕ್ಷಣವೇ ಮಬ್ಬುತನವನ್ನು ನೀಡುತ್ತವೆ, 2° ಆಲ್ಕೋಹಾಲ್‌ಗಳು 5 ನಿಮಿಷಗಳಲ್ಲಿ ನೀಡುತ್ತವೆ, ಆದರೆ 1° ಆಲ್ಕೋಹಾಲ್‌ಗಳು ಕೊಠಡಿ ತಾಪಮಾನದಲ್ಲಿ ಮಬ್ಬುತನ ನೀಡುವುದಿಲ್ಲ.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Lucas Test: 3° = Instant; 2° = ~5 mins; 1° = Only on heating'
  },
  {
    id: 'chem-mtg-8-1',
    subject: 'chemistry',
    chapter: 'che-8',
    topic: 'Cannizzaro Reaction Condition',
    question: 'Which of the following organic compounds will undergo Cannizzaro reaction when heated with 50% concentrated NaOH?',
    questionKannada: '50% ಸಾಂದ್ರೀಕೃತ NaOH ನೊಂದಿಗೆ ಕಾಯಿಸಿದಾಗ ಈ ಕೆಳಗಿನ ಯಾವ ಸಾವಯವ ಸಂಯುಕ್ತವು ಕ್ಯಾನಿಜಾರೋ ಕ್ರಿಯೆಗೆ (Cannizzaro reaction) ಒಳಗಾಗುತ್ತದೆ?',
    questionType: 'single_mcq',
    options: ['Benzaldehyde (C₆H₅CHO)', 'Acetaldehyde (CH₃CHO)', 'Acetone (CH₃COCH₃)', 'Propionaldehyde (CH₃CH₂CHO)'],
    optionsKannada: ['ಬೆಂಜಾಲ್ಡಿಹೈಡ್ (C₆H₅CHO)', 'ಅಸಿಟಾಲ್ಡಿಹೈಡ್ (CH₃CHO)', 'ಅಸಿಟೋನ್ (CH₃COCH₃)', 'ಪ್ರೊಪಿಯೊನಾಲ್ಡಿಹೈಡ್ (CH₃CH₂CHO)'],
    correctAnswer: 'Benzaldehyde (C₆H₅CHO)',
    explanation: 'Aldehydes that lack an α-hydrogen atom undergo self-oxidation and reduction (disproportionation) in concentrated alkali, called the Cannizzaro reaction. Benzaldehyde (C₆H₅CHO) and formaldehyde (HCHO) have no α-hydrogen, yielding benzyl alcohol and sodium benzoate.',
    explanationKannada: 'α-ಹೈಡ್ರೋಜನ್ ಪರಮಾಣು ಹೊಂದಿರದ ಆಲ್ಡಿಹೈಡ್‌ಗಳು ಕ್ಯಾನಿಜಾರೋ ಕ್ರಿಯೆಗೆ ಒಳಗಾಗುತ್ತವೆ. ಬೆಂಜಾಲ್ಡಿಹೈಡ್ (C₆H₅CHO) ನಲ್ಲಿ α-ಹೈಡ್ರೋಜನ್ ಇಲ್ಲದಿರುವುದರಿಂದ ಇದು ಕ್ಯಾನಿಜಾರೋ ಕ್ರಿಯೆ ನೀಡುತ್ತದೆ.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Cannizzaro Reaction requires aldehydes with NO α-hydrogen (HCHO, C₆H₅CHO)'
  },
  {
    id: 'chem-mtg-9-1',
    subject: 'chemistry',
    chapter: 'che-9',
    topic: 'Hinsberg Reagent Test',
    question: 'Hinsberg’s reagent is benzenesulphonyl chloride (C₆H₅SO₂Cl). The product obtained from its reaction with a secondary amine is:',
    questionKannada: 'ಹಿನ್ಸ್‌ಬರ್ಗ್ ಕಾರಕವೆಂದರೆ ಬೆಂಜೀನ್‌ಸಲ್ಫೋನೈಲ್ ಕ್ಲೋರೈಡ್ (C₆H₅SO₂Cl). ದ್ವಿತೀಯಕ ಅಮೈನ್‌ (Secondary amine) ನೊಂದಿಗೆ ಇದರ ಕ್ರಿಯೆಯಿಂದ ಬರುವ ಉತ್ಪನ್ನವು:',
    questionType: 'single_mcq',
    options: [
      'Insoluble in aqueous alkali (NaOH)',
      'Soluble in aqueous alkali (NaOH)',
      'A gas that turns lime water milky',
      'Unreactive; 2° amines do not react with Hinsberg reagent'
    ],
    optionsKannada: [
      'ಜಲೀಯ ಕ್ಷಾರದಲ್ಲಿ (NaOH) ಕರಗುವುದಿಲ್ಲ',
      'ಜಲೀಯ ಕ್ಷಾರದಲ್ಲಿ (NaOH) ಕರಗುತ್ತದೆ',
      'ಸುಣ್ಣದ ತಿಳಿನೀರನ್ನು ಹಾಲಿನಂತೆ ಮಾಡುವ ಅನಿಲ',
      'ವರ್ತಿಸುವುದಿಲ್ಲ; 2° ಅಮೈನ್‌ಗಳು ಹಿನ್ಸ್‌ಬರ್ಗ್ ಕಾರಕದೊಂದಿಗೆ ವರ್ತಿಸುವುದಿಲ್ಲ'
    ],
    correctAnswer: 'Insoluble in aqueous alkali (NaOH)',
    explanation: 'With secondary amine R₂NH, benzenesulphonyl chloride forms N,N-dialkylbenzenesulphonamide, which has NO acidic hydrogen attached to the nitrogen atom. Therefore, it is insoluble in aqueous NaOH (unlike primary amine products which dissolve in NaOH).',
    explanationKannada: '2° ಅಮೈನ್ ಜೊತೆ ಬರುವ N,N-ಡೈಆಲ್ಕೈಲ್ ಬೆಂಜೀನ್‌ಸಲ್ಫೋನಮೈಡ್ ನ ಸಾರಜನಕದ ಮೇಲೆ ಆಮ್ಲೀಯ ಹೈಡ್ರೋಜನ್ ಇರುವುದಿಲ್ಲ. ಆದ್ದರಿಂದ ಇದು NaOH ನಲ್ಲಿ ಕರಗುವುದಿಲ್ಲ.',
    difficulty: 'Medium',
    source: 'KCET / NCERT Fingertips',
    year: '2024',
    formulaNote: 'Hinsberg: 1° Amine product dissolves in NaOH; 2° Amine product insoluble in NaOH; 3° does not react'
  },
  {
    id: 'chem-mtg-10-1',
    subject: 'chemistry',
    chapter: 'che-10',
    topic: 'Denaturation of Proteins',
    question: 'During denaturation of a globular protein by heating or pH change, which structural levels of the protein are destroyed?',
    questionKannada: 'ತಾಪಮಾನ ಅಥವಾ pH ಬದಲಾವಣೆಯಿಂದ ಗ್ಲೋಬ್ಯುಲಾರ್ ಪ್ರೋಟೀನ್‌ನ ನೈಸರ್ಗಿಕ ವಿಕೃತೀಕರಣ (Denaturation) ಉಂಟಾದಾಗ, ಪ್ರೋಟೀನ್‌ನ ಯಾವ ರಚನೆಗಳು ನಾಶವಾಗುತ್ತವೆ?',
    questionType: 'single_mcq',
    options: [
      'Secondary and tertiary structures are destroyed, while primary structure remains intact',
      'Primary, secondary and tertiary structures are all destroyed',
      'Only the primary peptide bonds are broken',
      'Only quaternary structure is affected'
    ],
    optionsKannada: [
      'ದ್ವಿತೀಯಕ ಮತ್ತು ತೃತೀಯಕ ರಚನೆಗಳು ನಾಶವಾಗುತ್ತವೆ, ಆದರೆ ಪ್ರಾಥಮಿಕ ರಚನೆಯು ಹಾಗೆಯೇ ಉಳಿಯುತ್ತದೆ',
      'ಪ್ರಾಥಮಿಕ, ದ್ವಿತೀಯಕ ಮತ್ತು ತೃತೀಯಕ ರಚನೆಗಳೆಲ್ಲವೂ ನಾಶವಾಗುತ್ತವೆ',
      'ಕೇವಲ ಪ್ರಾಥಮಿಕ ಪೆಪ್ಟೈಡ್ ಬಂಧಗಳು ಮುರಿಯುತ್ತವೆ',
      'ಕೇವಲ ಕ್ವಾಟರ್ನರಿ ರಚನೆ ಮಾತ್ರ ಪ್ರಭಾವಿತವಾಗುತ್ತದೆ'
    ],
    correctAnswer: 'Secondary and tertiary structures are destroyed, while primary structure remains intact',
    explanation: 'Denaturation coagulates proteins by disrupting hydrogen bonds and hydrophobic interactions that stabilize secondary and tertiary structures (e.g. boiling of egg white). The covalent peptide bonds of the primary structure remain unbroken.',
    explanationKannada: 'ವಿಕೃತೀಕರಣದ ಸಮಯದಲ್ಲಿ ಹೈಡ್ರೋಜನ್ ಬಂಧಗಳು ಒಡೆದು ದ್ವಿತೀಯಕ ಮತ್ತು ತೃತೀಯಕ ರಚನೆಗಳು ಕಳೆದುಹೋಗುತ್ತವೆ; ಆದರೆ ಸಹವೇಲೆನ್ಸಿಯ ಪೆಪ್ಟೈಡ್ ಬಂಧಗಳನ್ನು ಹೊಂದಿರುವ ಪ್ರಾಥಮಿಕ ರಚನೆಯು ಅಖಂಡವಾಗಿರುತ್ತದೆ.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Denaturation destroys 2° and 3° structures; 1° structure remains intact'
  },

  // =========================================================================
  // CHEMISTRY: ASSERTION-REASONING & STATEMENT-BASED QUESTIONS (ALL CHAPTERS)
  // =========================================================================

  // CHE-1: Solutions
  {
    id: 'chem-ar-1',
    subject: 'chemistry',
    chapter: 'che-1',
    topic: 'Osmotic Pressure & Colligative Properties',
    question: `Assertion (A): Osmotic pressure is widely preferred over other colligative properties (elevation of boiling point, depression of freezing point) for determining the molar masses of polymers, proteins, and macromolecules.\nReason (R): Osmotic pressure measurements can be carried out accurately at room temperature, and the magnitude of osmotic pressure is significantly large even for highly dilute solutions.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Polymers and biomolecules are unstable at high temperatures (precluding boiling point elevation) and have extremely high molar masses. At low molarity, ΔT_b and ΔT_f are imperceptibly small, whereas osmotic pressure π = CRT yields measurable pressure at room temperature.',
    difficulty: 'Easy',
    source: 'KCET & NCERT',
    year: '2025',
    formulaNote: 'π = CRT = (w₂RT)/(M₂V)',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಪಾಲಿಮರ್‌ಗಳು, ಪ್ರೋಟೀನ್‌ಗಳು ಮತ್ತು ಮ್ಯಾಕ್ರೋಮಾಲಿಕ್ಯೂಲ್‌ಗಳ ಮೋಲಾರ್ ದ್ರವ್ಯರಾಶಿಯನ್ನು ನಿರ್ಧರಿಸಲು ಆಸ್ಮೋಟಿಕ್ ಒತ್ತಡವನ್ನು ಇತರ ಕಲಿಗೇಟಿವ್ ಗುಣಗಳಿಗಿಂತ ಆದ್ಯತೆಯಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ.\nಕಾರಣ (R): ಆಸ್ಮೋಟಿಕ್ ಒತ್ತಡದ ಅಳತೆಗಳನ್ನು ಕೋಣೆಯ ಉಷ್ಣಾಂಶದಲ್ಲೇ ನಿಖರವಾಗಿ ನಡೆಸಬಹುದು, ಮತ್ತು ಅತಿ ದುರ್ಬಲ ದ್ರಾವಣಗಳಲ್ಲೂ ಇದರ ಮೌಲ್ಯವು ಗಣನೀಯವಾಗಿ ಹೆಚ್ಚಾಗಿರುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: ಬಯೋಮಾಲಿಕ್ಯೂಲ್‌ಗಳು ಅಧಿಕ ಉಷ್ಣತೆಯಲ್ಲಿ ನಾಶವಾಗುವುದರಿಂದ ಮತ್ತು ದುರ್ಬಲ ದ್ರಾವಣದಲ್ಲೂ π = CRT ನಿಖರ ಅಳತೆ ನೀಡುವುದರಿಂದ ಆಸ್ಮೋಟಿಕ್ ಒತ್ತಡ ಸೂಕ್ತವಾಗಿದೆ.'
  },
  {
    id: 'chem-stmt-1',
    subject: 'chemistry',
    chapter: 'che-1',
    topic: "Henry's Law & Raoult's Law",
    question: `Consider the following statements regarding solution thermodynamics:\nStatement I: Raoult's law is a special case of Henry's law in which the proportionality constant K_H equals the vapour pressure of the pure volatile component (p₁°).\nStatement II: A minimum boiling azeotrope shows a large positive deviation from Raoult's law (e.g., 95% ethanol-water mixture).`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: "According to Henry's law p = K_H · x and Raoult's law p₁ = x₁ · p₁°. If K_H = p₁°, Raoult's law becomes identical to Henry's law. Solutions showing large positive deviations from Raoult's law form minimum boiling azeotropes at a specific composition (like 95.4% ethanol).",
    difficulty: 'Medium',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: "Raoult's law: p₁ = x₁ p₁°; Positive deviation → Minimum boiling azeotrope",
    questionKannada: `ದ್ರಾವಣಗಳ ಕುರಿತ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ:\nಹೇಳಿಕೆ I: ಹೆನ್ರಿಯ ನಿಯಮದ ಸ್ಥಿರಾಂಕ K_H ಶುದ್ಧ ಬಾಷ್ಪಶೀಲ ಘಟಕದ ಆವಿ ಒತ್ತಡಕ್ಕೆ (p₁°) ಸಮನಾದಾಗ, ರೌಲ್ಟ್‌ನ ನಿಯಮವು ಹೆನ್ರಿಯ ನಿಯಮದ ಒಂದು ವಿಶೇಷ ಪ್ರಕರಣವಾಗುತ್ತದೆ.\nಹೇಳಿಕೆ II: ಕನಿಷ್ಠ ಕುದಿಯುವ ಅಜಿಯೋಟ್ರೋಪ್ (minimum boiling azeotrope) ರೌಲ್ಟ್‌ನ ನಿಯಮದಿಂದ ಧನಾತ್ಮಕ ವಿಚಲನೆಯನ್ನು ತೋರಿಸುತ್ತದೆ (ಉದಾ: 95% ಎಥನಾಲ್-ನೀರು ಮಿಶ್ರಣ).`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: K_H = p₁° ಆದಾಗ ರೌಲ್ಟ್ ನಿಯಮ ಹೆನ್ರಿ ನಿಯಮವಾಗುತ್ತದೆ; ಮತ್ತು ಧನಾತ್ಮಕ ವಿಚಲನೆಗಳು ಕನಿಷ್ಠ ಕುದಿಯುವ ಅಜಿಯೋಟ್ರೋಪ್ ಉಂಟುಮಾಡುತ್ತವೆ.'
  },

  // CHE-2: Electrochemistry
  {
    id: 'chem-ar-2',
    subject: 'chemistry',
    chapter: 'che-2',
    topic: 'Molar Conductivity & Dilution',
    question: `Assertion (A): The molar conductivity (Λ_m) of both strong and weak electrolytes increases with a decrease in electrolyte concentration (increase in dilution).\nReason (R): Dilution increases the total volume V of the solution containing 1 mole of electrolyte, and for weak electrolytes, the degree of dissociation (α) increases sharply according to Ostwald's dilution law.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Λ_m = κ / c = κ · V. Although conductivity κ decreases with dilution, volume V containing 1 mol of electrolyte increases much more. For weak electrolytes, α = Λ_m / Λ_m°, which surges dramatically as c → 0.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Λ_m = κ / c; α = Λ_m / Λ_m°',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಸಾರತೆ ಕಡಿಮೆಯಾದಂತೆ (ದುರ್ಬಲಗೊಳಿಸುವಿಕೆ ಹೆಚ್ಚಿದಂತೆ) ಪ್ರಬಲ ಮತ್ತು ದುರ್ಬಲ ವಿದ್ಯುದ್ವಿಭಾಜ್ಯಗಳೆರಡರ ಮೋಲಾರ್ ವಾಹಕತೆಯು (Λ_m) ಹೆಚ್ಚಾಗುತ್ತದೆ.\nಕಾರಣ (R): ದುರ್ಬಲಗೊಳಿಸುವಿಕೆಯಿಂದ 1 ಮೋಲ್ ವಿದ್ಯುದ್ವಿಭಾಜ್ಯವನ್ನು ಹೊಂದಿರುವ ಒಟ್ಟು ಪ್ರಮಾಣ V ಹೆಚ್ಚಾಗುತ್ತದೆ, ಮತ್ತು ದುರ್ಬಲ ವಿದ್ಯುದ್ವಿಭಾಜ್ಯಗಳಲ್ಲಿ ಆಸ್ಟ್‌ವಾಲ್ಡ್ ನಿಯಮದಂತೆ ವಿಯೋಜನೆಯ ಪ್ರಮಾಣ (α) ತೀವ್ರವಾಗಿ ಹೆಚ್ಚುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: ದುರ್ಬಲಗೊಳಿಸಿದಾಗ ಆಯಾನುಗಳ ಚಲನೆ ಸುಲಭವಾಗುತ್ತದೆ ಮತ್ತು ದುರ್ಬಲ ಎಲೆಕ್ಟ್ರೋಲೈಟ್‌ಗಳಲ್ಲಿ α ಹೆಚ್ಚಾಗಿ Λ_m ಅಧಿಕವಾಗುತ್ತದೆ.'
  },
  {
    id: 'chem-stmt-2',
    subject: 'chemistry',
    chapter: 'che-2',
    topic: 'Electrochemical Cells & External Voltage',
    question: `Consider the following statements regarding the Daniell cell (Zn | Zn²⁺ || Cu²⁺ | Cu) with E°_cell = 1.1 V:\nStatement I: When an opposing external potential E_ext < 1.1 V is applied, electrons continue to flow from Zn anode to Cu cathode and zinc dissolves.\nStatement II: When the opposing external potential exceeds 1.1 V (E_ext > 1.1 V), the cell functions as an electrolytic cell, reversing electron flow from Cu to Zn.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'In a Daniell cell: If E_ext < 1.1 V, current flows normally (galvanic mode). If E_ext = 1.1 V, no current flows (equilibrium). If E_ext > 1.1 V, non-spontaneous reverse reaction is forced, operating as an electrolytic cell where Cu dissolves and Zn deposits.',
    difficulty: 'Medium',
    source: 'NCERT & KCET',
    year: '2024',
    formulaNote: 'E_ext < 1.1 V: Galvanic cell; E_ext > 1.1 V: Electrolytic cell',
    questionKannada: `ಡ್ಯಾನಿಯಲ್ ಕೋಶಕ್ಕೆ (E°_cell = 1.1 V) ಸಂಬಂಧಿಸಿದ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಗಮನಿಸಿ:\nಹೇಳಿಕೆ I: ಬಾಹ್ಯ ವಿರೋಧಿ ವಿಭವ E_ext < 1.1 V ಇದ್ದಾಗ, ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳು Zn ಆನೋಡ್‌ನಿಂದ Cu ಕ್ಯಾಥೋಡ್‌ಗೆ ಹರಿಯುವುದನ್ನು ಮುಂದುವರಿಸುತ್ತವೆ ಮತ್ತು ಸತು ಕರಗುತ್ತದೆ.\nಹೇಳಿಕೆ II: ಬಾಹ್ಯ ವಿರೋಧಿ ವಿಭವವು 1.1 V ಗಿಂತ ಹೆಚ್ಚಾದಾಗ (E_ext > 1.1 V), ಕೋಶವು ವಿದ್ಯುದ್ವಿಭಜನಾ ಕೋಶವಾಗಿ (electrolytic cell) ಕಾರ್ಯನಿರ್ವಹಿಸಿ, Cu ನಿಂದ Zn ಕಡೆಗೆ ಎಲೆಕ್ಟ್ರಾನ್ ಹರಿವು ಉಲ್ಟಾ ಆಗುತ್ತದೆ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: E_ext < 1.1 V ನಲ್ಲಿ ಸಹಜ ಕೋಶ ಪ್ರಕ್ರಿಯೆ ನಡೆಯುತ್ತದೆ, ಆದರೆ E_ext > 1.1 V ಆದಾಗ ಇದು ವಿದ್ಯುದ್ವಿಭಜನಾ ಕೋಶವಾಗಿ ಬದಲಾಗುತ್ತದೆ.'
  },

  // CHE-3: Chemical Kinetics
  {
    id: 'chem-ar-3',
    subject: 'chemistry',
    chapter: 'che-3',
    topic: 'Arrhenius Equation & Temperature Dependence',
    question: `Assertion (A): For most chemical reactions, the rate of reaction almost doubles for every 10°C rise in temperature.\nReason (R): A 10°C rise in temperature roughly doubles the average kinetic energy of the reacting reactant molecules.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: '(A) is true but (R) is false',
    explanation: 'Assertion is true: The temperature coefficient for most reactions is between 2 and 3. Reason is false: A 10°C rise in absolute temperature (e.g. from 300 K to 310 K) increases average kinetic energy by only ~3% (310/300). However, it roughly doubles the fraction of molecules with energy exceeding the threshold activation energy E_a.',
    difficulty: 'Hard',
    source: 'KCET Trap Question',
    year: '2025',
    formulaNote: 'k = A · e^(-E_a / RT); Fraction possessing energy ≥ E_a doubles',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಬಹುಪಾಲು ರಾಸಾಯನಿಕ ಕ್ರಿಯೆಗಳಲ್ಲಿ ತಾಪಮಾನವನ್ನು ಪ್ರತಿ 10°C ಹೆಚ್ಚಿಸಿದಾಗ ಕ್ರಿಯಾದರವು ಸುಮಾರು ದುಪ್ಪಟ್ಟಾಗುತ್ತದೆ.\nಕಾರಣ (R): ತಾಪಮಾನದಲ್ಲಿ 10°C ಹೆಚ್ಚಳವು ಕ್ರಿಯಾಪಟು ಅಣುಗಳ ಸರಾಸರಿ ಚಲನ ಶಕ್ತಿಯನ್ನು ಸುಮಾರು ದುಪ್ಪಟ್ಟು ಮಾಡುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಪ್ರತಿಪಾದನೆ (A) ಸರಿಯಾಗಿದೆ ಆದರೆ ಕಾರಣ (R) ತಪ್ಪಾಗಿದೆ: ಸರಾಸರಿ ಚಲನ ಶಕ್ತಿ ಕೇವಲ ~3% ಹೆಚ್ಚಾಗುತ್ತದೆ, ಆದರೆ ಸಕ್ರಿಯಗೊಳಿಸುವ ಶಕ್ತಿ (E_a) ಗಿಂತ ಹೆಚ್ಚಿನ ಶಕ್ತಿ ಹೊಂದಿರುವ ಅಣುಗಳ ಪ್ರಮಾಣವು ದುಪ್ಪಟ್ಟಾಗುತ್ತದೆ.'
  },
  {
    id: 'chem-stmt-3',
    subject: 'chemistry',
    chapter: 'che-3',
    topic: 'Order vs Molecularity',
    question: `Consider the following statements regarding chemical reaction kinetics:\nStatement I: The order of a chemical reaction is an experimentally determined quantity that can be zero, fractional, integer, or even negative.\nStatement II: The molecularity of an elementary reaction can never be zero, fractional, or greater than three.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'Both statements are true. Order is experimental and applies to complex or elementary steps. Molecularity is theoretical (the number of reacting species colliding simultaneously in an elementary step), so it must be a positive whole integer (1, 2, or 3) and cannot be zero or fractional.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Order: experimental (0, fraction, +/-); Molecularity: theoretical integer (1, 2, 3)',
    questionKannada: `ರಾಸಾಯನಿಕ ಚಲನಶಾಸ್ತ್ರಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಗಮನಿಸಿ:\nಹೇಳಿಕೆ I: ರಾಸಾಯನಿಕ ಕ್ರಿಯೆಯ ಕ್ರಮವು (order) ಪ್ರಾಯೋಗಿಕವಾಗಿ ನಿರ್ಧರಿಸಲ್ಪಡುವ ಮೌಲ್ಯವಾಗಿದ್ದು, ಇದು ಶೂನ್ಯ, ಭಿನ್ನರಾಶಿ, ಪೂರ್ಣಾಂಕ ಅಥವಾ ಋಣಾತ್ಮಕವೂ ಆಗಿರಬಹುದು.\nಹೇಳಿಕೆ II: ಪ್ರಾಥಮಿಕ ಕ್ರಿಯೆಯ ಅಣುತ್ವವು (molecularity) ಎಂದಿಗೂ ಶೂನ್ಯ, ಭಿನ್ನರಾಶಿ ಅಥವಾ ಮೂರಕ್ಕಿಂತ ಹೆಚ್ಚಾಗಿರಲು ಸಾಧ್ಯವಿಲ್ಲ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: ಕ್ರಿಯೆಯ ಕ್ರಮವು ಪ್ರಾಯೋಗಿಕ ಮೌಲ್ಯವಾಗಿದೆ (0, ಭಿನ್ನರಾಶಿ ಸಾಧ್ಯ), ಆದರೆ ಅಣುತ್ವವು ಏಕಕಾಲದಲ್ಲಿ ಡಿಕ್ಕಿಹೊಡೆಯುವ ಅಣುಗಳ ಸಂಖ್ಯೆಯಾಗಿದ್ದು ಪೂರ್ಣಾಂಕವಾಗಿರುತ್ತದೆ.'
  },

  // CHE-4: The d- and f-Block Elements
  {
    id: 'chem-ar-4',
    subject: 'chemistry',
    chapter: 'che-4',
    topic: 'Catalytic Properties of Transition Metals',
    question: `Assertion (A): Transition metals and their compounds are extensively utilized as catalysts in industrial chemical processes (e.g. Fe in Haber process, V₂O₅ in Contact process).\nReason (R): Transition metals exhibit variable oxidation states and possess vacant d-orbitals to form intermediate unstable complexes with reactant molecules.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Transition elements function as exceptional catalysts due to their ability to adopt multiple oxidation states, provide large surface areas for adsorption, and form low-activation-energy intermediate complexes using incomplete d-subshells.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Transition catalysts: variable oxidation states + vacant d-orbitals',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಪರಿವರ್ತನಾ ಲೋಹಗಳು ಮತ್ತು ಅವುಗಳ ಸಂಯುಕ್ತಗಳನ್ನು ಕೈಗಾರಿಕಾ ರಾಸಾಯನಿಕ ಪ್ರಕ್ರಿಯೆಗಳಲ್ಲಿ ವೇಗವರ್ಧಕಗಳಾಗಿ ವ್ಯಾಪಕವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ (ಉದಾ: ಹೇಬರ್ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ Fe, ಕಾಂಟ್ಯಾಕ್ಟ್ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ V₂O₅).\nಕಾರಣ (R): ಪರಿವರ್ತನಾ ಲೋಹಗಳು ಬದಲಾಗುವ ಆಕ್ಸಿಡೀಕರಣ ಸ್ಥಿತಿಗಳನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತವೆ ಮತ್ತು ಕ್ರಿಯಾಪಟುಗಳೊಂದಿಗೆ ಮಧ್ಯಂತರ ಅಸ್ಥಿರ ಸಂಕೀರ್ಣಗಳನ್ನು ರೂಪಿಸಲು ಖಾಲಿ d-ಆರ್ಬಿಟಾಲ್‌ಗಳನ್ನು ಹೊಂದಿರುತ್ತವೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸಮಂಜಸ ವಿವರಣೆಯಾಗಿದೆ: ಬದಲಾಗುವ ಆಕ್ಸಿಡೀಕರಣ ಸ್ಥಿತಿಗಳು ಮತ್ತು ಖಾಲಿ d-ಆರ್ಬಿಟಾಲ್‌ಗಳು ವೇಗವರ್ಧಕ ಕ್ರಿಯೆಗೆ ಕಾರಣವಾಗಿವೆ.'
  },

  // CHE-5: Coordination Compounds
  {
    id: 'chem-ar-5',
    subject: 'chemistry',
    chapter: 'che-5',
    topic: 'Crystal Field Theory & Spin',
    question: `Assertion (A): The octahedral coordination entity [Co(NH₃)₆]³⁺ is diamagnetic and low-spin.\nReason (R): NH₃ acts as a strong field ligand for Co³⁺, causing large crystal field splitting (Δ_o > P) and forcing all six 3d electrons to pair up in t₂g orbitals (t₂g⁶ eg⁰).`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Co³⁺ has 3d⁶ configuration. With NH₃ (strong field ligand for +3 cobalt), Δ_o exceeds pairing energy P. All 6 electrons occupy the lower energy t₂g set in pairs (t₂g⁶ eg⁰). With zero unpaired electrons, it is diamagnetic and low-spin.',
    difficulty: 'Medium',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Co³⁺ (3d⁶): strong field → t₂g⁶ eg⁰ (n = 0, Diamagnetic)',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಅಷ್ಟಮುಖಿ ಸಂಕೀರ್ಣ [Co(NH₃)₆]³⁺ ಡಯಾಕಾಂತೀಯ (diamagnetic) ಮತ್ತು ಕಡಿಮೆ-ಸ್ಪಿನ್ (low-spin) ಆಗಿದೆ.\nಕಾರಣ (R): NH₃ ಯು Co³⁺ ಗೆ ಪ್ರಬಲ ಕ್ಷೇತ್ರ ಲಿಗ್ಯಾಂಡ್ ಆಗಿ ವರ್ತಿಸಿ, ಹೆಚ್ಚಿನ ಸ್ಫಟಿಕ ಕ್ಷೇತ್ರ ವಿಭಜನೆಯನ್ನು (Δ_o > P) ಉಂಟುಮಾಡುತ್ತದೆ ಮತ್ತು ಎಲ್ಲಾ ಆರು 3d ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳನ್ನು t₂g ಆರ್ಬಿಟಾಲ್‌ಗಳಲ್ಲಿ (t₂g⁶ eg⁰) ಜೋಡಿಯಾಗುವಂತೆ ಮಾಡುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: Co³⁺ (3d⁶) ನಲ್ಲಿ ಪ್ರಬಲ ಲಿಗ್ಯಾಂಡ್ NH₃ ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳನ್ನು ಜೋಡಿ ಮಾಡಿ t₂g⁶ eg⁰ ಮಾಡುವುದರಿಂದ ಜೋಡಿಯಾಗದ ಎಲೆಕ್ಟ್ರಾನ್ ಇರುವುದಿಲ್ಲ (ಡಯಾಕಾಂತೀಯ).'
  },

  // CHE-6: Haloalkanes and Haloarenes
  {
    id: 'chem-stmt-6',
    subject: 'chemistry',
    chapter: 'che-6',
    topic: 'SN1 vs SN2 Mechanisms',
    question: `Consider the following statements regarding nucleophilic substitution reactions of haloalkanes:\nStatement I: SN2 substitution reactions proceed with 100% complete Walden inversion of stereochemical configuration at the chiral carbon centre.\nStatement II: SN1 substitution reactions proceed via a planar carbocation intermediate, typically resulting in racemization with partial inversion.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'Both statements are true: In SN2, nucleophile attacks from the backside directly opposite the leaving halide, producing complete inversion. In SN1, the carbocation formed is planar (sp² hybridized), allowing attack from both faces yielding racemization (with slight excess of inversion).',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'SN2 → 100% Inversion; SN1 → Racemization via planar carbocation',
    questionKannada: `ಹ್ಯಾಲೋಆಲ್ಕೇನ್‌ಗಳ ನ್ಯೂಕ್ಲಿಯೋಫಿಲಿಕ್ ಆದೇಶ ಕ್ರಿಯೆಗಳ ಕುರಿತ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಗಮನಿಸಿ:\nಹೇಳಿಕೆ I: SN2 ಕ್ರಿಯೆಗಳು ಕೈರಾಲ್ ಇಂಗಾಲದ ಕೇಂದ್ರದಲ್ಲಿ 100% ವಾಲ್ಡನ್ ವಿಲೋಮದೊಂದಿಗೆ (inversion of configuration) ಮುಂದುವರಿಯುತ್ತವೆ.\nಹೇಳಿಕೆ II: SN1 ಕ್ರಿಯೆಗಳು ಸಮತಲ ಕಾರ್ಬೋಕ್ಯಾಟಯಾನ್ ಮಧ್ಯಂತರದ ಮೂಲಕ ಸಾಗಿ, ಸಾಮಾನ್ಯವಾಗಿ ರೆಸಿಮಿಕ್ ಮಿಶ್ರಣವನ್ನು (racemization) ಉಂಟುಮಾಡುತ್ತವೆ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: SN2 ನಲ್ಲಿ ಹಿಂಬದಿಯ ದಾಳಿಯಿಂದ ಸಂಪೂರ್ಣ ವಿಲೋಮ ಉಂಟಾದರೆ, SN1 ನಲ್ಲಿ ಸಮತಲ ಕಾರ್ಬೋಕ್ಯಾಟಯಾನ್ ಕಾರಣದಿಂದ ರೆಸಿಮೈಸೇಶನ್ ಉಂಟಾಗುತ್ತದೆ.'
  },

  // CHE-7: Alcohols, Phenols and Ethers
  {
    id: 'chem-ar-7',
    subject: 'chemistry',
    chapter: 'che-7',
    topic: 'Acidity of Phenol vs Alcohol',
    question: `Assertion (A): Phenol is significantly more acidic than ethanol and reacts with aqueous sodium hydroxide (NaOH) to form sodium phenoxide.\nReason (R): The phenoxide ion formed upon deprotonation is stabilized by resonance delocalization of negative charge over the aromatic ring, whereas the ethoxide ion has no resonance and is destabilized by the +I effect of the ethyl group.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Phenol releases H⁺ to yield phenoxide ion, which is resonance stabilized across ortho and para positions of the benzene ring. Ethanol yields ethoxide (C₂H₅O⁻) where +I inductive effect of ethyl intensifies the negative charge without resonance stabilization.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Phenol acidity: Phenoxide resonance stabilization (pK_a ~ 10 vs Ethanol pK_a ~ 16)',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಫೀನಾಲ್ ಎಥನಾಲ್‌ಗಿಂತ ಗಮನಾರ್ಹವಾಗಿ ಹೆಚ್ಚು ಆಮ್ಲೀಯವಾಗಿದ್ದು, ಜಲೀಯ ಸೋಡಿಯಂ ಹೈಡ್ರಾಕ್ಸೈಡ್ (NaOH) ಜೊತೆ ವರ್ತಿಸಿ ಸೋಡಿಯಂ ಫಿನಾಕ್ಸೈಡ್ ಅನ್ನು ರೂಪಿಸುತ್ತದೆ.\nಕಾರಣ (R): ಡಿಪ್ರೋಟೋನೇಷನ್ ನಂತರ ಉಂಟಾಗುವ ಫಿನಾಕ್ಸೈಡ್ ಅಯಾನು ಆರೊಮ್ಯಾಟಿಕ್ ರಿಂಗ್ ಮೇಲೆ ಋಣಾತ್ಮಕ ಆವೇಶದ ಅನುರಣನದಿಂದ (resonance) ಸ್ಥಿರಗೊಳ್ಳುತ್ತದೆ, ಆದರೆ ಎಥಾಕ್ಸೈಡ್ ಅಯಾನು ಯಾವುದೇ ಅನುರಣನ ಹೊಂದಿಲ್ಲದೆ +I ಪ್ರಭಾವದಿಂದ ಅಸ್ಥಿರಗೊಳ್ಳುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: ಫಿನಾಕ್ಸೈಡ್ ಅಯಾನಿನ ಅನುರಣನ ಸ್ಥಿರತೆಯು ಫೀನಾಲ್ ಅನ್ನು ಎಥನಾಲ್‌ಗಿಂತ ಹೆಚ್ಚು ಆಮ್ಲೀಯವಾಗಿಸುತ್ತದೆ.'
  },

  // CHE-8: Aldehydes, Ketones and Carboxylic Acids
  {
    id: 'chem-ar-8',
    subject: 'chemistry',
    chapter: 'che-8',
    topic: 'Reactivity towards Nucleophilic Addition',
    question: `Assertion (A): Aldehydes are generally more reactive than ketones towards nucleophilic addition reactions.\nReason (R): Ketones contain two electron-donating alkyl groups that reduce the electrophilicity of the carbonyl carbon more than in aldehydes, and also cause greater steric hindrance.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Both electronic factors (+I effect of two alkyl groups diminishes positive charge on carbonyl carbon) and steric factors (two bulky groups hinder nucleophilic approach) make ketones less reactive than aldehydes.',
    difficulty: 'Easy',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'Reactivity: HCHO > RCHO > RCOR (Steric + Electronic reasons)',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ನ್ಯೂಕ್ಲಿಯೋಫಿಲಿಕ್ ಸಂಕಲನ ಕ್ರಿಯೆಗಳಲ್ಲಿ ಆಲ್ಡಿಹೈಡ್‌ಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಕೀಟೋನ್‌ಗಳಿಗಿಂತ ಹೆಚ್ಚು ಕ್ರಿಯಾಶೀಲವಾಗಿರುತ್ತವೆ.\nಕಾರಣ (R): ಕೀಟೋನ್‌ಗಳಲ್ಲಿ ಎರಡು ಎಲೆಕ್ಟ್ರಾನ್-ದಾನಿ ಆಲ್ಕೈಲ್ ಗುಂಪುಗಳಿದ್ದು, ಅವು ಕಾರ್ಬೊನೈಲ್ ಇಂಗಾಲದ ಎಲೆಕ್ಟ್ರಾನ್‌ಕೊರತೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತವೆ ಮತ್ತು ಹೆಚ್ಚಿನ ಸ್ಟೀರಿಕ್ ಅಡಚಣೆಯನ್ನುಂಟುಮಾಡುತ್ತವೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸಮಂಜಸ ವಿವರಣೆಯಾಗಿದೆ: ಆಲ್ಡಿಹೈಡ್‌ಗಳಲ್ಲಿ ಕಡಿಮೆ ಸ್ಟೀರಿಕ್ ಅಡಚಣೆ ಮತ್ತು ಹೆಚ್ಚಿನ ಧನ ಆವೇಶವಿರುವುದರಿಂದ ಅವು ಕೀಟೋನ್‌ಗಳಿಗಿಂತ ಹೆಚ್ಚು ವೇಗವಾಗಿ ವರ್ತಿಸುತ್ತವೆ.'
  },

  // CHE-9: Amines
  {
    id: 'chem-stmt-9',
    subject: 'chemistry',
    chapter: 'che-9',
    topic: 'Basicity Order of Amines in Aqueous Solution',
    question: `Consider the following statements regarding the basicity of aliphatic amines:\nStatement I: In the gas phase, the basicity order of methyl-substituted amines follows strictly the inductive effect: (CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃.\nStatement II: In aqueous solution, the basicity order of methyl-substituted amines is (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ due to a combined balance of inductive effect, hydration enthalpy, and steric hindrance.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'Both statements are accurate NCERT facts: In gas phase where solvation is absent, +I effect dictates 3° > 2° > 1° > NH₃. In aqueous solution, hydration of ammonium cations and steric hindrance cause secondary amine (2°) to be the strongest base: 2° > 1° > 3° > NH₃ for methyl, and 2° > 3° > 1° > NH₃ for ethyl.',
    difficulty: 'Medium',
    source: 'KCET 2024 High-Frequency',
    year: '2024',
    formulaNote: 'Methyl in water: 2° > 1° > 3° > NH₃; Gas phase: 3° > 2° > 1° > NH₃',
    questionKannada: `ಅಲಿಫ್ಯಾಟಿಕ್ ಅಮೈನ್‌ಗಳ ಕ್ಷಾರೀಯತೆಯ ಕುರಿತ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಗಮನಿಸಿ:\nಹೇಳಿಕೆ I: ಅನಿಲ ಹಂತದಲ್ಲಿ (gas phase), ಮಿಥೈಲ್ ಅಮೈನ್‌ಗಳ ಕ್ಷಾರೀಯತೆಯ ಕ್ರಮವು ಪ್ರೇರಕ ಪರಿಣಾಮವನ್ನು (inductive effect) ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಅನುಸರಿಸುತ್ತದೆ: (CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃.\nಹೇಳಿಕೆ II: ಜಲೀಯ ದ್ರಾವಣದಲ್ಲಿ, ಪ್ರೇರಕ ಪರಿಣಾಮ, ಹೈಡ್ರೇಶನ್ ಶಕ್ತಿ ಮತ್ತು ಸ್ಟೀರಿಕ್ ಅಡಚಣೆಗಳ ಸಮತೋಲನದಿಂದಾಗಿ ಕ್ಷಾರೀಯತೆಯ ಕ್ರಮವು (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ ಆಗಿರುತ್ತದೆ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: ಅನಿಲದಲ್ಲಿ 3° > 2° > 1° ಆಗಿದ್ದರೆ, ಜಲೀಯ ದ್ರಾವಣದಲ್ಲಿ ಹೈಡ್ರೇಶನ್ ಪ್ರಭಾವದಿಂದ 2° > 1° > 3° > NH₃ ಆಗಿರುತ್ತದೆ.'
  },

  // CHE-10: Biomolecules
  {
    id: 'chem-stmt-10',
    subject: 'chemistry',
    chapter: 'che-10',
    topic: 'Structure of Nucleic Acids (DNA & RNA)',
    question: `Consider the following statements regarding nucleic acids:\nStatement I: DNA molecules contain the four nitrogenous bases adenine (A), guanine (G), cytosine (C), and thymine (T), forming double helical structure held by hydrogen bonds.\nStatement II: RNA contains the pyrimidine base uracil (U) in place of thymine and possesses a 2'-OH group on its ribose sugar which makes RNA more labile and reactive than DNA.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'Both statements are correct. DNA has A, G, C, T with 2-deoxyribose, whereas RNA has A, G, C, U with ribose. The 2-OH group on ribose makes RNA chemically reactive and susceptible to hydrolysis, making DNA the more chemically stable genetic material.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'DNA: A=T, G≡C (deoxyribose); RNA: A=U, G≡C (ribose with 2-OH)',
    questionKannada: `ನ್ಯೂಕ್ಲಿಕ್ ಆಮ್ಲಗಳ ಕುರಿತ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ:\nಹೇಳಿಕೆ I: DNA ಅಣುಗಳು ಅಡೆನೈನ್ (A), ಗ್ವಾನೈನ್ (G), ಸೈಟೋಸಿನ್ (C) ಮತ್ತು ಥೈಮಿನ್ (T) ಎಂಬ ನಾಲ್ಕು ಸಾರಜನಕಯುಕ್ತ ಪ್ರತ್ಯಾಮ್ಲಗಳನ್ನು ಹೊಂದಿ ಹೈಡ್ರೋಜನ್ ಬಂಧಗಳಿಂದ ಕೂಡಿದ ಡಬಲ್ ಹೆಲಿಕ್ಸ್ ರಚನೆಯನ್ನು ರೂಪಿಸುತ್ತವೆ.\nಹೇಳಿಕೆ II: RNA ಯು ಥೈಮಿನ್ ಬದಲಿಗೆ ಯುರಾಸಿಲ್ (U) ಅನ್ನು ಹೊಂದಿರುತ್ತದೆ ಮತ್ತು ರೈಬೋಸ್ ಸಕ್ಕರೆಯ ಮೇಲೆ 2'-OH ಗುಂಪನ್ನು ಹೊಂದಿದ್ದು ಇದು RNA ಯನ್ನು DNA ಗಿಂತ ಹೆಚ್ಚು ಕ್ರಿಯಾಶೀಲ ಹಾಗೂ ಅಸ್ಥಿರವಾಗಿಸುತ್ತದೆ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: DNA ಯಲ್ಲಿ ಥೈಮಿನ್ ಮತ್ತು ಡಿಆಕ್ಸಿರೈಬೋಸ್ ಇರುತ್ತದೆ; RNA ಯಲ್ಲಿ ಯುರಾಸಿಲ್ ಮತ್ತು 2-OH ಹೊಂದಿರುವ ರೈಬೋಸ್ ಇರುತ್ತದೆ.'
  }
];
