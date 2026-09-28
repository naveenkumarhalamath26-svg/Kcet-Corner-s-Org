import { Flashcard, SubjectId } from '../types';
import { SHORT_NOTES } from './shortNotesData';
import { CHAPTERS } from './chaptersData';

/**
 * Curated High-Yield Flashcards for II PUC & Entrance Recall
 * Designed for quick formula drills, law statements, and key mechanisms
 */
export const CURATED_FLASHCARDS: Flashcard[] = [
  // ==================== PHYSICS FLASHCARDS ====================
  {
    id: 'fc-phy-1',
    subjectId: 'physics',
    chapterId: 'phy-1',
    chapterTitle: 'Electric Charges and Fields',
    topic: "Coulomb's Law",
    category: 'formula',
    front: {
      title: "Coulomb's Law in Vector & Scalar Form",
      prompt: 'What is the magnitude and vector equation of electrostatic force between two point charges?',
      hint: 'Recall dependence on medium permittivity (ε) vs vacuum (ε₀)'
    },
    back: {
      mainText: 'Electrostatic force between two stationary point charges is directly proportional to the product of charges and inversely proportional to the square of distance between them.',
      formula: 'F = (1 / 4πε₀) · (|q₁ q₂| / r²) = 9 × 10⁹ · (|q₁ q₂| / r²) N',
      keyPoints: [
        'Vector form: F₁₂ = -F₂₁ (obeys Newton’s 3rd Law).',
        'In a medium of dielectric constant K: F_med = F_air / K.',
        'Permittivity of free space ε₀ = 8.854 × 10⁻¹² C²·N⁻¹·m⁻².'
      ],
      examTip: 'Force in dielectric decreases by factor K. K for metals is infinity (F = 0 inside ideal conductor).'
    }
  },
  {
    id: 'fc-phy-2',
    subjectId: 'physics',
    chapterId: 'phy-1',
    chapterTitle: 'Electric Charges and Fields',
    topic: "Gauss's Theorem",
    category: 'definition',
    front: {
      title: "Gauss's Law Statement & Formula",
      prompt: 'State Gauss’s law in electrostatics and its mathematical integral form.',
      hint: 'Total electric flux passing through any closed Gaussian surface'
    },
    back: {
      mainText: 'The total electric flux Φ through any closed surface in vacuum is equal to 1/ε₀ times the total charge Q_enclosed enclosed by the surface.',
      formula: 'Φ = ∮ E · dA = Q_enclosed / ε₀',
      keyPoints: [
        'Flux is independent of the size and geometric shape of the Gaussian surface.',
        'Charges outside the closed surface do not contribute to net flux.',
        'If Q_net enclosed = 0, then net flux Φ = 0, but electric field E need not be zero.'
      ],
      examTip: 'Electric field of infinite sheet: E = σ / (2ε₀) — independent of distance r.'
    }
  },
  {
    id: 'fc-phy-3',
    subjectId: 'physics',
    chapterId: 'phy-2',
    chapterTitle: 'Electrostatic Potential and Capacitance',
    topic: 'Capacitance with Dielectric',
    category: 'formula',
    front: {
      title: 'Capacitance of Parallel Plate Capacitor',
      prompt: 'What happens to Capacitance (C), Potential (V), and Stored Energy (U) when a dielectric slab is inserted?',
      hint: 'Distinguish between battery connected vs battery disconnected'
    },
    back: {
      mainText: 'Capacitance with dielectric of constant K fills the gap: C = K · C₀.',
      formula: 'C = (K · ε₀ A) / d',
      keyPoints: [
        'Battery disconnected (Q constant): C increases (K×), V decreases (V₀/K), E decreases (E₀/K), U decreases (U₀/K).',
        'Battery connected (V constant): C increases (K×), V constant, Q increases (K×), U increases (K×).'
      ],
      examTip: 'Energy stored: U = ½ CV² = Q² / (2C) = ½ QV. Stored in electrostatic field between plates.'
    }
  },
  {
    id: 'fc-phy-4',
    subjectId: 'physics',
    chapterId: 'phy-3',
    chapterTitle: 'Current Electricity',
    topic: "Drift Velocity & Ohm's Law",
    category: 'formula',
    front: {
      title: 'Drift Velocity & Current Relation',
      prompt: 'State the formula relating electric current I to drift velocity v_d of conduction electrons.',
      hint: 'Depends on carrier density n, cross-section A, electron charge e'
    },
    back: {
      mainText: 'Current is the flux of drift-moving conduction electrons through cross-sectional area A.',
      formula: 'I = n · A · e · v_d   where   v_d = (e · E · τ) / m',
      keyPoints: [
        'Current density: j = I / A = n e v_d = σ E (Microscopic Ohm’s Law).',
        'Resistivity: ρ = m / (n e² τ).',
        'As temperature increases in conductors, relaxation time τ decreases, so resistance increases.'
      ],
      examTip: 'Drift velocity is order of millimeters per second (≈ 10⁻⁴ m/s), yet electric signals travel near speed of light.'
    }
  },
  {
    id: 'fc-phy-5',
    subjectId: 'physics',
    chapterId: 'phy-4',
    chapterTitle: 'Moving Charges and Magnetism',
    topic: 'Lorentz Magnetic Force',
    category: 'formula',
    front: {
      title: 'Lorentz Magnetic Force on a Moving Charge',
      prompt: 'Write the formula for the magnetic force on a charge q moving with velocity v in magnetic field B.',
      hint: 'Cross product vector equation'
    },
    back: {
      mainText: 'Magnetic force acts perpendicular to both velocity vector and magnetic field vector. Hence work done by magnetic force is always zero.',
      formula: 'F_m = q (v × B) = q v B sin θ · n̂',
      keyPoints: [
        'If v || B (θ = 0° or 180°): F = 0 (particle moves in straight line).',
        'If v ⊥ B (θ = 90°): F = qvB (uniform circular motion, radius r = mv / qB).',
        'Magnetic force does zero work (W = 0); kinetic energy and speed remain strictly constant.'
      ],
      examTip: 'Pitch of helical path when velocity is at angle θ: p = v cos θ · T = (2π m v cos θ) / (q B).'
    }
  },
  {
    id: 'fc-phy-6',
    subjectId: 'physics',
    chapterId: 'phy-7',
    chapterTitle: 'Alternating Current',
    topic: 'LCR Resonance & Power Factor',
    category: 'formula',
    front: {
      title: 'Series LCR Resonance Frequency & Q-Factor',
      prompt: 'What are the condition for resonance in a series LCR circuit and the expressions for resonant frequency and power factor?',
      hint: 'Inductive reactance equals capacitive reactance'
    },
    back: {
      mainText: 'Resonance occurs when XL = XC, making impedance Z purely resistive and minimum (Z = R), maximizing current.',
      formula: 'ω₀ = 1 / √(L C)   ⇒   f₀ = 1 / (2π √(L C))',
      keyPoints: [
        'At resonance: Impedance Z = R (minimum), Current I₀ = V₀ / R (maximum).',
        'Phase angle Φ = 0, Power factor cos Φ = 1 (purely resistive).',
        'Quality factor: Q = (ω₀ L) / R = 1 / (R) · √(L / C).'
      ],
      examTip: 'Wattless current occurs when phase angle Φ = 90° (pure L or pure C circuit), so average power P_avg = V_rms I_rms cos(90°) = 0.'
    }
  },

  // ==================== CHEMISTRY FLASHCARDS ====================
  {
    id: 'fc-chem-1',
    subjectId: 'chemistry',
    chapterId: 'chem-1',
    chapterTitle: 'Solutions',
    topic: "Raoult's Law & Colligative Properties",
    category: 'formula',
    front: {
      title: "Colligative Properties & Van 't Hoff Factor",
      prompt: 'List the 4 colligative property formulas modified by Van ’t Hoff factor (i).',
      hint: 'Vapor pressure, Boiling point elevation, Freezing point depression, Osmotic pressure'
    },
    back: {
      mainText: 'Colligative properties depend only on the number of solute particles in solution, regardless of their nature.',
      formula: '1. ΔP/P₁° = i · x₂ \n2. ΔT_b = i · K_b · m \n3. ΔT_f = i · K_f · m \n4. Π = i · C · R · T',
      keyPoints: [
        'i = 1 for non-electrolytes (glucose, urea, sucrose).',
        'For dissociation (e.g. NaCl → Na⁺ + Cl⁻): i = 1 + (n - 1)α. (For NaCl, n=2, i=2).',
        'For association (e.g. benzoic acid dimerization): i = 1 + (1/n - 1)α.'
      ],
      examTip: 'Osmotic pressure (Π = iCRT) is the preferred method for determining molar mass of polymers and proteins due to measurable values at room temperature.'
    }
  },
  {
    id: 'fc-chem-2',
    subjectId: 'chemistry',
    chapterId: 'chem-2',
    chapterTitle: 'Electrochemistry',
    topic: 'Nernst Equation',
    category: 'formula',
    front: {
      title: 'Nernst Equation at 298 K',
      prompt: 'Write the general Nernst equation for a cell reaction at 298 K.',
      hint: 'Relates cell potential E_cell to standard potential E°_cell and reaction quotient Q'
    },
    back: {
      mainText: 'The Nernst equation calculates the cell potential under non-standard concentration conditions.',
      formula: 'E_cell = E°_cell - (0.0591 / n) · log₁₀ Q',
      keyPoints: [
        'At equilibrium: E_cell = 0 and Q = K_c ⇒ E°_cell = (0.0591 / n) · log₁₀ K_c.',
        'Gibbs free energy change: ΔG° = -n F E°_cell.',
        'For spontaneous cell reaction: E_cell > 0 and ΔG < 0.'
      ],
      examTip: 'Pure solids and pure liquids have activity = 1 and are omitted from reaction quotient Q.'
    }
  },
  {
    id: 'fc-chem-3',
    subjectId: 'chemistry',
    chapterId: 'chem-3',
    chapterTitle: 'Chemical Kinetics',
    topic: 'First Order Kinetics & Half-Life',
    category: 'formula',
    front: {
      title: 'First Order Integrated Rate Law & Half-Life',
      prompt: 'What are the rate constant (k) and half-life (t_1/2) formulas for a first order reaction?',
      hint: 'Half life is independent of initial concentration'
    },
    back: {
      mainText: 'In a first-order reaction, rate depends linearly on the concentration of a single reactant: Rate = k[A].',
      formula: 'k = (2.303 / t) · log₁₀([A]₀ / [A]_t)   and   t_1/2 = 0.693 / k',
      keyPoints: [
        't_1/2 is strictly independent of initial concentration [A]₀.',
        'Time required for 99.9% completion: t_99.9% = 10 × t_1/2.',
        'Time required for 75% completion: t_75% = 2 × t_1/2.'
      ],
      examTip: 'All radioactive disintegrations follow first-order kinetics.'
    }
  },
  {
    id: 'fc-chem-4',
    subjectId: 'chemistry',
    chapterId: 'chem-6',
    chapterTitle: 'Haloalkanes and Haloarenes',
    topic: 'SN1 vs SN2 Mechanisms',
    category: 'concept',
    front: {
      title: 'Comparison: SN1 vs SN2 Nucleophilic Substitution',
      prompt: 'Compare SN1 and SN2 reactions based on kinetics, intermediate, stereochemistry, and substrate reactivity.',
      hint: 'Unimolecular vs Bimolecular'
    },
    back: {
      mainText: 'Two distinct pathways for nucleophilic substitution of alkyl halides.',
      keyPoints: [
        'Order of Kinetics: SN1 is 1st order (Rate = k[R-X]); SN2 is 2nd order (Rate = k[R-X][Nu⁻]).',
        'Intermediate: SN1 forms planar carbocation; SN2 forms 5-coordinate transition state (no intermediate).',
        'Stereochemistry: SN1 gives racemization; SN2 gives 100% Walden inversion.',
        'Substrate order: SN1: 3° > 2° > 1° > CH₃X (carbocation stability); SN2: CH₃X > 1° > 2° > 3° (steric hindrance).'
      ],
      examTip: 'Polar protic solvents (H₂O, EtOH) favour SN1; Polar aprotic solvents (DMSO, acetone, DMF) favour SN2.'
    }
  },
  {
    id: 'fc-chem-5',
    subjectId: 'chemistry',
    chapterId: 'chem-8',
    chapterTitle: 'Aldehydes, Ketones and Carboxylic Acids',
    topic: 'Named Reactions: Aldol & Cannizzaro',
    category: 'reaction',
    front: {
      title: 'Aldol Condensation vs Cannizzaro Reaction',
      prompt: 'What is the key structural requirement distinguishing substrates for Aldol condensation vs Cannizzaro reaction?',
      hint: 'Presence or absence of α-hydrogen atom'
    },
    back: {
      mainText: 'Carbonyl compounds undergo distinct base-catalyzed transformations depending on α-hydrogen availability.',
      formula: 'Aldol: 2 CH₃CHO + dil NaOH → CH₃-CH(OH)-CH₂-CHO → CH₃-CH=CH-CHO (crotonaldehyde)\nCannizzaro: 2 HCHO + 50% KOH → CH₃OH + HCOOK',
      keyPoints: [
        'Aldol Condensation: Requires presence of at least one α-hydrogen (e.g. acetaldehyde, acetone). Reagent: dilute alkali (dil. NaOH).',
        'Cannizzaro Reaction: Substrates WITHOUT α-hydrogen (e.g. formaldehyde HCHO, benzaldehyde C₆H₅CHO). Undergoes self-redox disproportionation to alcohol + carboxylate salt in conc. alkali (50% KOH).'
      ],
      examTip: 'Benzaldehyde gives Cannizzaro (no α-H); Acetophenone has α-H on CH₃ and gives Aldol and Iodoform test.'
    }
  },

  // ==================== MATHEMATICS FLASHCARDS ====================
  {
    id: 'fc-math-1',
    subjectId: 'mathematics',
    chapterId: 'math-2',
    chapterTitle: 'Inverse Trigonometric Functions',
    topic: 'Principal Value Branches',
    category: 'definition',
    front: {
      title: 'Principal Value Ranges of Inverse Trig Functions',
      prompt: 'State the exact principal value branch (range) for sin⁻¹(x), cos⁻¹(x), and tan⁻¹(x).',
      hint: 'Watch closed vs open intervals'
    },
    back: {
      mainText: 'Principal value branch defines the unique interval where inverse trigonometric functions are single-valued and continuous.',
      formula: 'sin⁻¹(x) ∈ [-π/2, π/2]\ncos⁻¹(x) ∈ [0, π]\ntan⁻¹(x) ∈ (-π/2, π/2)',
      keyPoints: [
        'sin⁻¹(-x) = -sin⁻¹(x)',
        'cos⁻¹(-x) = π - cos⁻¹(x)',
        'tan⁻¹(-x) = -tan⁻¹(x)',
        'sin⁻¹(x) + cos⁻¹(x) = π/2   for x ∈ [-1, 1]'
      ],
      examTip: 'cos⁻¹(-1/2) = π - cos⁻¹(1/2) = π - π/3 = 2π/3 (Never -π/3!).'
    }
  },
  {
    id: 'fc-math-2',
    subjectId: 'mathematics',
    chapterId: 'math-4',
    chapterTitle: 'Determinants',
    topic: 'Adjoint & Inverse Matrix Formulas',
    category: 'formula',
    front: {
      title: 'Adjoint Properties & Matrix Inverse',
      prompt: 'State the determinant properties of adj(A) for an n × n square matrix A.',
      hint: 'Determinant of adjoint, inverse formula, and adj(adj A)'
    },
    back: {
      mainText: 'Adjoint matrix enables direct evaluation of matrix inverse and determinant scaling.',
      formula: 'A⁻¹ = (1 / |A|) · adj(A)   where |A| ≠ 0',
      keyPoints: [
        'A · adj(A) = adj(A) · A = |A| · I_n',
        '|adj(A)| = |A|^{n - 1}   (For 3×3 matrix: |adj(A)| = |A|²)',
        '|adj(adj A)| = |A|^{(n - 1)²}',
        '|k · A| = k^n · |A|   where n is matrix order.'
      ],
      examTip: 'If |A| = 4 for a 3×3 matrix, |adj(A)| = 4³⁻¹ = 4² = 16. Guaranteed 1-mark KCET question!'
    }
  },
  {
    id: 'fc-math-3',
    subjectId: 'mathematics',
    chapterId: 'math-7',
    chapterTitle: 'Integrals',
    topic: 'Standard Integration by Parts & e^x trick',
    category: 'trick',
    front: {
      title: 'Integration by Parts & Euler’s e^x Trick',
      prompt: 'Write the formula for ∫ e^x [f(x) + f’(x)] dx and standard Integration by Parts rule.',
      hint: 'ILATE priority rule'
    },
    back: {
      mainText: 'A high-speed integration identity tested frequently in KCET and II PUC board exams.',
      formula: '∫ e^x [f(x) + f\'(x)] dx = e^x · f(x) + C',
      keyPoints: [
        'Integration by Parts: ∫ u v dx = u ∫ v dx - ∫ [u\' · (∫ v dx)] dx',
        'Priority order for first function u: ILATE (Inverse, Logarithmic, Algebraic, Trigonometric, Exponential).',
        'Odd function definite integral: ∫₋ₐᵃ f(x) dx = 0 if f(-x) = -f(x).'
      ],
      examTip: 'Example: ∫ e^x (sec x + sec x tan x) dx = e^x sec x + C.'
    }
  },
  {
    id: 'fc-math-4',
    subjectId: 'mathematics',
    chapterId: 'math-10',
    chapterTitle: 'Vector Algebra',
    topic: 'Dot Product vs Cross Product',
    category: 'formula',
    front: {
      title: 'Dot & Cross Product Formulas and Geometry',
      prompt: 'Compare scalar projection, vector projection, and cross product geometric interpretations.',
      hint: 'Projection of a on b vs area of parallelogram'
    },
    back: {
      mainText: 'Vector products determine orthogonality, projections, and spatial geometric areas.',
      formula: 'Projection of a on b = (a · b) / |b|\n|a × b| = |a| |b| sin θ',
      keyPoints: [
        'Condition for perpendicularity: a · b = 0.',
        'Condition for parallelism / collinearity: a × b = 0.',
        'Area of parallelogram with adjacent sides a and b: Area = |a × b|.',
        'Area of parallelogram with diagonals d₁ and d₂: Area = ½ |d₁ × d₂|.'
      ],
      examTip: 'Projection is a scalar quantity. If question asks for vector projection, multiply by unit vector b̂: [(a · b) / |b|²] b.'
    }
  },

  // ==================== BIOLOGY FLASHCARDS ====================
  {
    id: 'fc-bio-1',
    subjectId: 'biology',
    chapterId: 'bio-1',
    chapterTitle: 'Sexual Reproduction in Flowering Plants',
    topic: 'Double Fertilization & Ploidy',
    category: 'concept',
    front: {
      title: 'Double Fertilization & Embryo Sac Ploidy Levels',
      prompt: 'What are the two fusion events in double fertilization and what are the ploidy levels of embryo, endosperm, and antipodals?',
      hint: 'Syngamy + Triple Fusion'
    },
    back: {
      mainText: 'Unique characteristic event in angiosperms discovered by S.G. Nawaschin.',
      formula: 'Syngamy (n + n → 2n Zygote) + Triple Fusion (n + 2n → 3n PEN)',
      keyPoints: [
        'Syngamy: 1 male gamete (n) + Egg cell (n) → Diploid Zygote (2n).',
        'Triple Fusion: 1 male gamete (n) + Secondary nucleus (2n) → Triploid Primary Endosperm Nucleus (3n PEN).',
        'Ploidy recap: Synergids (n), Antipodals (n), Embryo (2n), Aleurone layer (3n), Nucellus (2n).'
      ],
      examTip: 'In gymnosperms, endosperm is formed BEFORE fertilization and is haploid (n). In angiosperms, it is triploid (3n).'
    }
  },
  {
    id: 'fc-bio-2',
    subjectId: 'biology',
    chapterId: 'bio-4',
    chapterTitle: 'Principles of Inheritance and Variation',
    topic: 'Mendelian Genetics Ratios',
    category: 'formula',
    front: {
      title: 'Standard Mendelian Cross Ratios',
      prompt: 'List the phenotypic and genotypic ratios of Monohybrid, Dihybrid, Incomplete Dominance, and Test Cross.',
      hint: 'F2 generation phenotypic vs genotypic ratios'
    },
    back: {
      mainText: 'Universal inheritance ratios formulated by Gregor Mendel.',
      formula: 'Monohybrid F2: 3 : 1 (Phenotypic) | 1 : 2 : 1 (Genotypic)\nDihybrid F2: 9 : 3 : 3 : 1 (Phenotypic)\nDihybrid Test Cross: 1 : 1 : 1 : 1',
      keyPoints: [
        'Incomplete dominance (Mirabilis jalapa / Snapdragon): Both phenotypic and genotypic ratios are 1 : 2 : 1.',
        'Codominance: ABO blood grouping controlled by gene I with 3 alleles (Iᴬ, Iᴮ, i) producing 6 genotypes and 4 phenotypes.',
        'Sex determination in birds: Female heterogamety (ZW female, ZZ male).'
      ],
      examTip: 'Test cross is always a cross of an unknown dominant genotype with homozygous recessive parent (e.g. T_ × tt).'
    }
  },
  {
    id: 'fc-bio-3',
    subjectId: 'biology',
    chapterId: 'bio-5',
    chapterTitle: 'Molecular Basis of Inheritance',
    topic: 'Genetic Code & Central Dogma',
    category: 'definition',
    front: {
      title: 'Key Properties of the Genetic Code',
      prompt: 'List the 5 fundamental characteristics of the genetic code and name the initiator and stop codons.',
      hint: 'Triplet, Degenerate, Non-overlapping, Unambiguous, Universal'
    },
    back: {
      mainText: 'The genetic code translates nucleotide sequences of mRNA into amino acid sequences of polypeptides.',
      keyPoints: [
        'Triplet: 61 codons code for 20 amino acids; 3 codons do not code (stop codons).',
        'Unambiguous: One codon codes for only one specific amino acid.',
        'Degenerate: Some amino acids are coded by more than one codon.',
        'Commaless: The codon is read in mRNA in a contiguous fashion without punctuation.',
        'Universal: Nearly universal (e.g., UUU codes for Phenylalanine in bacteria to human).',
        'Initiator codon: AUG (codes for Methionine). Stop codons: UAA (Ochre), UAG (Amber), UGA (Opal).'
      ],
      examTip: 'AUG has dual function: Acts as initiator codon and codes for Methionine.'
    }
  },
  {
    id: 'fc-bio-4',
    subjectId: 'biology',
    chapterId: 'bio-13',
    chapterTitle: 'Biodiversity and Conservation',
    topic: 'The Evil Quartet',
    category: 'definition',
    front: {
      title: 'The Evil Quartet of Biodiversity Loss',
      prompt: 'Name the four major causes of biodiversity loss ("The Evil Quartet") and identify the most significant factor.',
      hint: 'Habitat loss, Over-exploitation, Alien species, Co-extinctions'
    },
    back: {
      mainText: 'Edward O. Wilson coined terms highlighting rapid species extinction driven by human intervention.',
      keyPoints: [
        '1. Habitat Loss and Fragmentation: Most significant driver (e.g., Amazon rainforest destruction for cattle ranching & soybean).',
        '2. Over-exploitation: Driven by human greed (e.g., extinction of Steller’s sea cow, passenger pigeon).',
        '3. Alien Species Invasions: Introduction of exotic species wiping out native species (e.g., Nile perch introduced into Lake Victoria wiped out >200 cichlid fish species; Parthenium, Eichhornia/water hyacinth, African catfish Clarias gariepinus).',
        '4. Co-extinctions: Obligate plant-pollinator mutualisms (if one species dies out, the dependent species also goes extinct).'
      ],
      examTip: 'Ex-situ conservation examples: Zoological parks, botanical gardens, cryopreservation of gametes, seed banks. In-situ: National parks, wildlife sanctuaries, biosphere reserves, sacred groves.'
    }
  }
];

/**
 * Builds dynamic flashcards for all chapters from SHORT_NOTES, formula notes, and chapter topics
 */
export function getAllFlashcards(): Flashcard[] {
  const cards: Flashcard[] = [...CURATED_FLASHCARDS];

  // Derive extra flashcards from SHORT_NOTES
  for (const note of SHORT_NOTES) {
    // Add formulas as cards
    note.formulas.forEach((f, idx) => {
      // Check if already in curated
      const exists = cards.some(c => c.chapterId === note.chapterId && c.front.title === f.label);
      if (!exists) {
        cards.push({
          id: `fc-dyn-form-${note.chapterId}-${idx}`,
          subjectId: note.subjectId,
          chapterId: note.chapterId,
          chapterTitle: note.chapterTitle,
          topic: f.label,
          category: 'formula',
          front: {
            title: f.label,
            prompt: `State the mathematical expression and physical meaning of: ${f.label}`,
            hint: f.tip || `Key formula in ${note.chapterTitle}`
          },
          back: {
            mainText: `Fundamental formula in ${note.chapterTitle} required for board numericals and entrance problems.`,
            formula: f.expression,
            keyPoints: note.keyPoints.slice(0, 2),
            examTip: f.tip || (note.examTips[0] || 'Frequently asked in KCET/Board exams')
          }
        });
      }
    });

    // Add key conceptual points as cards
    if (note.keyPoints.length >= 2) {
      const topicTitle = `${note.chapterTitle} - Core Concepts`;
      const exists = cards.some(c => c.chapterId === note.chapterId && c.category === 'concept');
      if (!exists) {
        cards.push({
          id: `fc-dyn-conc-${note.chapterId}`,
          subjectId: note.subjectId,
          chapterId: note.chapterId,
          chapterTitle: note.chapterTitle,
          topic: 'Core Theory & Laws',
          category: 'concept',
          front: {
            title: topicTitle,
            prompt: `Recall the foundational laws, statements, and boundary conditions for ${note.chapterTitle}.`,
            hint: `${note.keyPoints.length} core theoretical points to remember`
          },
          back: {
            mainText: note.summary,
            keyPoints: note.keyPoints,
            examTip: note.examTips[0] || 'Must review before examination'
          }
        });
      }
    }
  }

  // Also ensure all chapters in CHAPTERS have at least 1 diagnostic recall flashcard
  for (const ch of CHAPTERS) {
    const hasCard = cards.some(c => c.chapterId === ch.id);
    if (!hasCard) {
      const topTopic = ch.topics[0] || ch.title;
      cards.push({
        id: `fc-ch-${ch.id}`,
        subjectId: ch.subjectId,
        chapterId: ch.id,
        chapterTitle: ch.title,
        topic: topTopic,
        category: 'definition',
        front: {
          title: `${ch.title}: ${topTopic}`,
          prompt: `What are the primary definitions, governing principles, and examination weightage of ${topTopic}?`,
          hint: `${ch.boardMarks} marks in Board · ~${ch.kcetQuestions} Qs in KCET`
        },
        back: {
          mainText: ch.description,
          keyPoints: ch.topics.map(t => `Key syllabus topic: ${t}`),
          examTip: `High-yield topic carrying ${ch.boardMarks} marks in board exam.`
        }
      });
    }
  }

  return cards;
}
