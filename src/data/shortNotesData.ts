import { ShortNote } from '../types';

export const SHORT_NOTES: ShortNote[] = [
  // PHYSICS NOTES
  {
    id: 'note-phy-1',
    subjectId: 'physics',
    chapterId: 'phy-1',
    chapterTitle: 'Electric Charges & Fields',
    summary: 'Foundational electrostatics covering quantized electric charge, Coulomb force, electric field vectors, dipoles, and Gauss’s law flux integrations.',
    formulas: [
      { label: "Coulomb's Law", expression: 'F = (1 / 4πε₀) · (|q₁ q₂| / r²)', tip: '1/4πε₀ ≈ 9 × 10⁹ N·m²/C²' },
      { label: 'Electric Field of Point Charge', expression: 'E = (1 / 4πε₀) · (q / r²)', tip: 'Field points away from positive charge, towards negative' },
      { label: 'Electric Dipole Moment', expression: 'p = q · (2a)', tip: 'Direction is from -q to +q' },
      { label: "Gauss's Law", expression: 'Φ = ∮ E · dA = Q_enclosed / ε₀', tip: 'Flux is independent of shape or size of enclosing surface' },
      { label: 'Field due to Infinite Line Charge', expression: 'E = λ / (2πε₀ r)', tip: 'λ is linear charge density' }
    ],
    keyPoints: [
      'Electric charge is quantized: q = ±n·e (e = 1.6 × 10⁻¹⁹ C).',
      'Electric field lines never cross each other because at the point of intersection there would be two directions of electric field.',
      'Electrostatic field inside a charged conductor is identically zero.',
      'Torque on an electric dipole in uniform field: τ = p × E = p E sin θ. Maximum torque at θ = 90°.'
    ],
    examTips: [
      'Gauss law derivations (cylindrical wire, infinite plane sheet) are guaranteed 5-mark questions in II PUC.',
      'Remember the factor of 2: Axial field of dipole E_axial = 2kp/r³ is twice Equatorial field E_eq = kp/r³.'
    ]
  },
  {
    id: 'note-phy-2',
    subjectId: 'physics',
    chapterId: 'phy-2',
    chapterTitle: 'Electrostatic Potential and Capacitance',
    summary: 'Conservative nature of electric field, potential difference, equipotential geometry, parallel plate capacitor capacitance, and electrostatic energy storage.',
    formulas: [
      { label: 'Electric Potential', expression: 'V = (1 / 4πε₀) · (q / r)', tip: 'Scalar quantity, signs of charge must be included' },
      { label: 'Potential Energy of Dipole', expression: 'U = -p · E = -p E cos θ', tip: 'Minimum at θ = 0° (stable equilibrium)' },
      { label: 'Capacitance of Parallel Plate', expression: 'C = (ε₀ A) / d (in vacuum), C = (K ε₀ A) / d (with dielectric)', tip: 'K is dielectric constant' },
      { label: 'Energy Stored in Capacitor', expression: 'U = (1/2) C V² = Q² / (2C) = (1/2) Q V', tip: 'Energy is stored in the electrostatic field' }
    ],
    keyPoints: [
      'Equipotential surface is perpendicular to electric field lines at every point.',
      'Work done in moving charge along an equipotential surface is always zero.',
      'Capacitors in series: 1/C_s = 1/C₁ + 1/C₂; Charge Q is identical on all.',
      'Capacitors in parallel: C_p = C₁ + C₂; Potential V is identical across all.'
    ],
    examTips: [
      'Derivation of capacitance of parallel plate capacitor with dielectric slab is frequently asked.',
      'Pay close attention whether battery remains connected or disconnected when dielectric is inserted.'
    ]
  },
  {
    id: 'note-phy-3',
    subjectId: 'physics',
    chapterId: 'phy-3',
    chapterTitle: 'Current Electricity',
    summary: 'Steady current flow, drift velocity of charge carriers, Ohm’s law microscopic form, temperature dependence of resistivity, Kirchhoff’s circuit laws and bridges.',
    formulas: [
      { label: 'Drift Velocity', expression: 'v_d = (e E τ) / m', tip: 'Current I = n A e v_d' },
      { label: "Ohm's Law (Microscopic)", expression: 'j = σ E', tip: 'Current density j = I/A; conductivity σ = 1/ρ' },
      { label: 'Temperature Coefficient', expression: 'R_T = R₀(1 + α ΔT)', tip: 'α is positive for metals, negative for semiconductors' },
      { label: 'Wheatstone Bridge Balance', expression: 'P / Q = R / S', tip: 'Galvanometer current I_g = 0 at balance' }
    ],
    keyPoints: [
      "Kirchhoff's First Law (Current Rule): Σ I = 0 at any junction (Conservation of Charge).",
      "Kirchhoff's Second Law (Loop Rule): Σ ΔV = 0 in a closed loop (Conservation of Energy).",
      'Internal resistance of cell: r = R · [(E / V) - 1].',
      'Terminal potential difference: V = E - Ir (during discharge); V = E + Ir (during charging).'
    ],
    examTips: [
      'Condition for Wheatstone bridge balance using Kirchhoff’s rules is a classic 5-mark question.',
      'Numerical on series/parallel cells and loop analysis carries 3–5 marks.'
    ]
  },

  // CHEMISTRY NOTES
  {
    id: 'note-che-1',
    subjectId: 'chemistry',
    chapterId: 'che-1',
    chapterTitle: 'Solutions',
    summary: 'Types of solutions, Henry’s law, Raoult’s law for ideal/non-ideal solutions, azeotropes, four colligative properties, and van’t Hoff dissociation/association factor.',
    formulas: [
      { label: "Henry's Law", expression: 'p = K_H · x', tip: 'Solubility of gas decreases as temperature increases' },
      { label: 'Relative Lowering of Vapor Pressure', expression: '(p₁° - p₁) / p₁° = x₂ ≈ n₂ / n₁', tip: 'Colligative property' },
      { label: 'Elevation in Boiling Point', expression: 'ΔT_b = i · K_b · m', tip: 'K_b is ebullioscopic constant' },
      { label: 'Depression in Freezing Point', expression: 'ΔT_f = i · K_f · m', tip: 'K_f is cryoscopic constant' },
      { label: 'Osmotic Pressure', expression: 'Π = i · C R T', tip: 'Best method to find molar mass of polymers & proteins' }
    ],
    keyPoints: [
      'Ideal solutions obey Raoult’s law at all concentrations (ΔH_mix = 0, ΔV_mix = 0), e.g., Benzene + Toluene.',
      'Positive deviation from Raoult’s law: A-B interactions < A-A, B-B interactions (e.g. Ethanol + Acetone). Minimum boiling azeotrope.',
      'Negative deviation: A-B interactions > A-A, B-B interactions (e.g. Chloroform + Acetone). Maximum boiling azeotrope.',
      'van’t Hoff factor: i > 1 for dissociation (salts); i < 1 for association (carboxylic acids dimerize in benzene).'
    ],
    examTips: [
      'Numericals on osmotic pressure, depression in freezing point, and van’t Hoff factor appear every year.',
      'Reverse osmosis definition and application in water desalination is a frequent 1-mark or 2-mark question.'
    ]
  },
  {
    id: 'note-che-2',
    subjectId: 'chemistry',
    chapterId: 'che-2',
    chapterTitle: 'Electrochemistry',
    summary: 'Galvanic and electrolytic cells, standard electrode potentials, Nernst equation for EMF, Kohlrausch’s independent migration of ions, and commercial batteries.',
    formulas: [
      { label: 'Nernst Equation', expression: 'E_cell = E°_cell - (0.0591 / n) log₁₀(Q)', tip: 'At T = 298 K' },
      { label: 'Gibbs Energy & Cell Potential', expression: 'ΔG° = -n F E°_cell', tip: 'F = 96,487 ≈ 96500 C/mol' },
      { label: "Kohlrausch's Law", expression: 'Λ°_m = ν₊ λ°₊ + ν₋ λ°₋', tip: 'Valid for strong and weak electrolytes at infinite dilution' }
    ],
    keyPoints: [
      'Daniell cell: Anode (Oxidation): Zn → Zn²⁺ + 2e⁻; Cathode (Reduction): Cu²⁺ + 2e⁻ → Cu.',
      'Standard Hydrogen Electrode (SHE): Assigned potential = 0.00 V at 298 K, 1 bar H₂, 1 M H⁺.',
      'Lead storage battery: Discharging cathode: PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O. Anode: Pb + SO₄²⁻ → PbSO₄ + 2e⁻.',
      'Corrosion is an electrochemical phenomenon where iron acts as anode: Fe → Fe²⁺ + 2e⁻.'
    ],
    examTips: [
      'Calculation of E_cell using Nernst equation is guaranteed in Part D.',
      'State Kohlrausch’s law and calculate Λ°_m of acetic acid from salts.'
    ]
  },

  // MATHEMATICS NOTES
  {
    id: 'note-math-3',
    subjectId: 'mathematics',
    chapterId: 'math-3',
    chapterTitle: 'Matrices & Determinants',
    summary: 'Matrix algebra, transpose properties, symmetric/skew-symmetric theorems, minors, cofactors, adjoints, inverse existence condition, and matrix equation solution.',
    formulas: [
      { label: 'Matrix Transpose Properties', expression: '(AB)ᵀ = Bᵀ Aᵀ', tip: 'Reversal law' },
      { label: 'Inverse of Matrix', expression: 'A⁻¹ = (1 / |A|) · adj(A)', tip: 'A⁻¹ exists if and only if |A| ≠ 0 (non-singular)' },
      { label: 'Adjoint Properties', expression: '|adj(A)| = |A|ⁿ⁻¹, A · adj(A) = |A| I', tip: 'n is order of matrix' },
      { label: 'Determinant Scalar Multiple', expression: '|k A| = kⁿ |A|', tip: 'Crucial for KCET and 1-mark board questions' }
    ],
    keyPoints: [
      'Every square matrix can be expressed uniquely as sum of symmetric matrix (A + Aᵀ)/2 and skew-symmetric matrix (A - Aᵀ)/2.',
      'Diagonal elements of a skew-symmetric matrix are always zero.',
      'If any two rows or columns of a determinant are identical or proportional, the value of the determinant is 0.',
      'System of linear equations AX = B has unique solution X = A⁻¹ B when |A| ≠ 0.'
    ],
    examTips: [
      'Solving a system of 3 linear equations using matrix method is an absolute staple 5-mark question in Karnataka II PUC.',
      'Finding inverse using elementary row operations or formula.'
    ]
  },
  {
    id: 'note-math-7',
    subjectId: 'mathematics',
    chapterId: 'math-7',
    chapterTitle: 'Integrals',
    summary: 'Indefinite integration techniques (substitution, partial fractions, by parts), standard integral forms, and the eight fundamental definite integral properties.',
    formulas: [
      { label: 'Integration by Parts', expression: '∫ u v dx = u ∫ v dx - ∫ [u\' · (∫ v dx)] dx', tip: 'Use ILATE priority rule' },
      { label: 'Exponential Form', expression: '∫ eˣ [f(x) + f\'(x)] dx = eˣ f(x) + C', tip: 'Very frequent in KCET' },
      { label: "Definite Integral King's Rule", expression: '∫₀ᵃ f(x) dx = ∫₀ᵃ f(a - x) dx', tip: 'Used to solve 90% of definite integral proofs' },
      { label: 'Symmetric Limits', expression: '∫₋ₐᵃ f(x) dx = 0 (if odd), 2 ∫₀ᵃ f(x) dx (if even)', tip: 'f(-x) = -f(x) is odd' }
    ],
    keyPoints: [
      'ILATE stands for Inverse trig, Logarithmic, Algebraic, Trigonometric, Exponential.',
      'Standard rational integrals: ∫ 1/(x² + a²) dx = (1/a) tan⁻¹(x/a) + C.',
      '∫ 1/√(a² - x²) dx = sin⁻¹(x/a) + C.',
      'Fundamental theorem of calculus: d/dx [∫ₐˣ f(t) dt] = f(x).'
    ],
    examTips: [
      'Proof of one of the standard integrals (e.g. ∫ 1/(x² - a²) dx) along with a sub-problem is a fixed 5-mark question in Part D.',
      'Evaluating ∫₀^(π/2) log(sin x) dx = -(π/2) log 2 is a classic favorite.'
    ]
  },

  // BIOLOGY NOTES
  {
    id: 'note-bio-5',
    subjectId: 'biology',
    chapterId: 'bio-5',
    chapterTitle: 'Molecular Basis of Inheritance',
    summary: 'DNA polynucleotide chain, double helix model, chromatin packaging, Meselson-Stahl replication proof, transcription, translation, genetic code, and lac operon.',
    formulas: [
      { label: "Chargaff's Equivalence Rule", expression: 'A = T, G = C ⇒ (A + G) = (T + C)', tip: 'Purines = Pyrimidines; (A+T)/(G+C) varies by species' }
    ],
    keyPoints: [
      'Watson and Crick double helix: Pitch is 3.4 nm with ~10 bp per turn (distance between base pairs is 0.34 nm).',
      'Meselson and Stahl (1958) used ¹⁵NH₄Cl in E. coli to prove semi-conservative DNA replication.',
      'Central Dogma proposed by Francis Crick: DNA → Transcription → mRNA → Translation → Protein.',
      'Genetic Code: 64 codons, 61 code for amino acids, 3 stop codons (UAA, UAG, UGA). Code is degenerate, unambiguous, and universal.',
      'Lac Operon: Inducer is lactose/allolactose. In the presence of lactose, repressor is inactivated, allowing RNA polymerase to transcribe lacZ, lacY, and lacA.'
    ],
    examTips: [
      'Meselson-Stahl experiment diagram and explanation is frequently asked for 5 marks.',
      'Explain the schematic representation of Lac Operon in ON and OFF states.'
    ]
  }
];
