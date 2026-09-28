import { Chapter, SubjectId } from '../types';

export interface SubjectMeta {
  id: SubjectId;
  name: string;
  shortName: string;
  kannadaName: string;
  color: string;
  bgColor: string;
  borderColor: string;
  accentColor: string;
  iconName: string;
  totalChapters: number;
  totalBoardMarks: number;
  description: string;
}

export const SUBJECTS: SubjectMeta[] = [
  {
    id: 'physics',
    name: 'Physics',
    shortName: 'PHY',
    kannadaName: 'ಭೌತಶಾಸ್ತ್ರ',
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    accentColor: 'bg-blue-600',
    iconName: 'Atom',
    totalChapters: 23,
    totalBoardMarks: 70,
    description: 'Electrostatics, Magnetism, Optics, Mechanics, Thermodynamics & Modern Physics'
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    shortName: 'CHE',
    kannadaName: 'ರಸಾಯನಶಾಸ್ತ್ರ',
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    accentColor: 'bg-emerald-600',
    iconName: 'FlaskConical',
    totalChapters: 19,
    totalBoardMarks: 70,
    description: 'Physical Solutions, Electrochemistry, Thermodynamics, GOC, Organic & Biomolecules'
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    shortName: 'MATH',
    kannadaName: 'ಗಣಿತಶಾಸ್ತ್ರ',
    color: 'text-amber-700',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    accentColor: 'bg-amber-600',
    iconName: 'Calculator',
    totalChapters: 20,
    totalBoardMarks: 80,
    description: 'Calculus, Vectors, Matrices, Trigonometry, Conic Sections & Probability'
  },
  {
    id: 'biology',
    name: 'Biology',
    shortName: 'BIO',
    kannadaName: 'ಜೀವಶಾಸ್ತ್ರ',
    color: 'text-teal-700',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    accentColor: 'bg-teal-600',
    iconName: 'Dna',
    totalChapters: 23,
    totalBoardMarks: 70,
    description: 'Genetics, Molecular Biology, Plant & Human Physiology, Ecology & Biotechnology'
  }
];

export const CHAPTERS: Chapter[] = [
  // ==================== PHYSICS ====================
  {
    id: 'phy-1',
    subjectId: 'physics',
    chapterNumber: 1,
    title: 'Electric Charges and Fields',
    boardMarks: 9,
    kcetQuestions: 3,
    description: 'Coulomb law, Electric field lines, Electric flux, Gauss law and applications',
    topics: ["Coulomb's Law", 'Electric Field Lines', 'Electric Dipole', 'Electric Flux', "Gauss's Theorem"],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/01_ELECTRIC_CHARGES_AND_FIELDS_IIPU_PHY_2026-27.pdf',
    officialPdfName: '01_ELECTRIC_CHARGES_AND_FIELDS_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-2',
    subjectId: 'physics',
    chapterNumber: 2,
    title: 'Electrostatic Potential and Capacitance',
    boardMarks: 9,
    kcetQuestions: 3,
    description: 'Potential difference, equipotential surfaces, capacitor combinations, dielectric effect',
    topics: ['Electric Potential', 'Equipotential Surfaces', 'Capacitors in Series/Parallel', 'Dielectrics'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/02_ELECTROSTATIC_POTENTIAL_AND_CAPACITANCE_IIPU_PHY_2026-27.pdf',
    officialPdfName: '02_ELECTROSTATIC_POTENTIAL_AND_CAPACITANCE_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-3',
    subjectId: 'physics',
    chapterNumber: 3,
    title: 'Current Electricity',
    boardMarks: 13,
    kcetQuestions: 4,
    description: "Ohm's law, drift velocity, Kirchhoff's laws, Wheatstone bridge and potentiometer",
    topics: ["Ohm's Law & Drift Velocity", 'Resistors & Color Code', "Kirchhoff's Rules", 'Wheatstone Bridge'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/03_CURRENT_ELECTRICITY_IIPU_PHY_2026-27.pdf',
    officialPdfName: '03_CURRENT_ELECTRICITY_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-4',
    subjectId: 'physics',
    chapterNumber: 4,
    title: 'Moving Charges and Magnetism',
    boardMarks: 10,
    kcetQuestions: 3,
    description: 'Biot-Savart law, Ampere circuital law, Lorentz force, Cyclotron and Galvanometer',
    topics: ['Biot-Savart Law', 'Ampere Circuital Law', 'Moving Coil Galvanometer', 'Force on Current Loop'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/04_MOVING_CHARGES_AND_MAGNETISM_IIPU_PHY_2026-27.pdf',
    officialPdfName: '04_MOVING_CHARGES_AND_MAGNETISM_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-5',
    subjectId: 'physics',
    chapterNumber: 5,
    title: 'Magnetism and Matter',
    boardMarks: 5,
    kcetQuestions: 2,
    description: 'Bar magnet, Earth magnetism elements, Dia, Para and Ferromagnetic materials',
    topics: ['Magnetic Dipole', "Earth's Magnetic Elements", 'Magnetic Properties of Materials'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/05_MAGNETISM_AND_MATTER_IIPU_PHY_2026-27.pdf',
    officialPdfName: '05_MAGNETISM_AND_MATTER_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-6',
    subjectId: 'physics',
    chapterNumber: 6,
    title: 'Electromagnetic Induction',
    boardMarks: 7,
    kcetQuestions: 2,
    description: "Faraday's laws, Lenz's law, Eddy currents, Self and mutual inductance, AC generator",
    topics: ["Faraday & Lenz's Law", 'Motional EMF', 'Self & Mutual Inductance', 'AC Generator'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/06_ELECTROMAGNETIC_INDUCTION_IIPU_PHY_2026-27.pdf',
    officialPdfName: '06_ELECTROMAGNETIC_INDUCTION_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-7',
    subjectId: 'physics',
    chapterNumber: 7,
    title: 'Alternating Current',
    boardMarks: 8,
    kcetQuestions: 3,
    description: 'AC through LCR circuit, resonance, power factor, transformers and wattless current',
    topics: ['LCR Series Resonance', 'Power in AC Circuit', 'Transformers', 'Q-factor'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/07_ALTERNATING_CURRENT_IIPU_PHY_2026-27.pdf',
    officialPdfName: '07_ALTERNATING_CURRENT_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-8',
    subjectId: 'physics',
    chapterNumber: 8,
    title: 'Electromagnetic Waves',
    boardMarks: 3,
    kcetQuestions: 1,
    description: 'Displacement current, EM wave spectrum and their properties and applications',
    topics: ['Displacement Current', 'EM Spectrum & Wavelengths', 'Properties of EM Waves'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/08_ELECTROMAGNETIC_WAVES_IIPU_PHY_2026-27.pdf',
    officialPdfName: '08_ELECTROMAGNETIC_WAVES_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-9',
    subjectId: 'physics',
    chapterNumber: 9,
    title: 'Ray Optics and Optical Instruments',
    boardMarks: 10,
    kcetQuestions: 3,
    description: 'Refraction through prism, lens maker formula, total internal reflection, microscopes',
    topics: ['Total Internal Reflection', "Lens Maker's Formula", 'Prism Formula', 'Compound Microscope'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/09_RAY_OPTICS_AND_OPTICAL_INSTRUMENTS_IIPU_PHY_2026-27.pdf',
    officialPdfName: '09_RAY_OPTICS_AND_OPTICAL_INSTRUMENTS_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-10',
    subjectId: 'physics',
    chapterNumber: 10,
    title: 'Wave Optics',
    boardMarks: 9,
    kcetQuestions: 3,
    description: "Huygens principle, Young's double slit interference, single slit diffraction, polarization",
    topics: ["Huygens' Principle", "Young's Double Slit Experiment", 'Diffraction at Single Slit'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/10_WAVE_OPTICS_IIPU_PHY_2026-27.pdf',
    officialPdfName: '10_WAVE_OPTICS_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-11',
    subjectId: 'physics',
    chapterNumber: 11,
    title: 'Dual Nature of Radiation and Matter',
    boardMarks: 6,
    kcetQuestions: 2,
    description: "Photoelectric effect, Einstein's equation, de-Broglie wavelength of electron",
    topics: ['Photoelectric Effect', "Einstein's Equation", 'de-Broglie Relation'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/11_DUAL_NATURE_OF_RADIATION_AND_MATTER_IIPU_PHY_2026-27.pdf',
    officialPdfName: '11_DUAL_NATURE_OF_RADIATION_AND_MATTER_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-12',
    subjectId: 'physics',
    chapterNumber: 12,
    title: 'Atoms',
    boardMarks: 5,
    kcetQuestions: 2,
    description: "Rutherford model, Bohr's postulates, energy levels of hydrogen, spectral series",
    topics: ["Bohr's Atomic Model", 'Hydrogen Spectral Series', 'Rydberg Constant'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/12_ATOMS_IIPU_PHY_2026-27.pdf',
    officialPdfName: '12_ATOMS_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-13',
    subjectId: 'physics',
    chapterNumber: 13,
    title: 'Nuclei',
    boardMarks: 6,
    kcetQuestions: 2,
    description: 'Mass defect, binding energy curve, radioactive decay law, nuclear fission and fusion',
    topics: ['Mass Defect & Binding Energy', 'Radioactive Decay Law', 'Nuclear Fission & Fusion'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/13_NUCLEI_IIPU_PHY_2026-27.pdf',
    officialPdfName: '13_NUCLEI_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-14',
    subjectId: 'physics',
    chapterNumber: 14,
    title: 'Semiconductor Electronics: Materials, Devices and Simple Circuits',
    boardMarks: 10,
    kcetQuestions: 3,
    description: 'p-n junction diode, rectifiers, Zener diode, optoelectronic devices, logic gates',
    topics: ['p-n Junction & Rectifiers', 'Zener Diode as Regulator', 'Solar Cell & LED', 'Logic Gates'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/14_SEMICONDUCTORS_IIPU_PHY_2026-27.pdf',
    officialPdfName: '14_SEMICONDUCTORS_IIPU_PHY_2026-27.pdf'
  },

  // ==================== CHEMISTRY ====================
  {
    id: 'che-1',
    subjectId: 'chemistry',
    chapterNumber: 1,
    title: 'Solutions',
    boardMarks: 9,
    kcetQuestions: 3,
    description: "Raoult's law, colligative properties, van't Hoff factor, abnormal molar mass",
    topics: ["Raoult's Law", 'Colligative Properties', "van't Hoff Factor", 'Osmotic Pressure'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/01_SOLUTIONS_IIPU_CHEM_2026-27.pdf',
    officialPdfName: '01_SOLUTIONS_IIPU_CHEM_2026-27.pdf'
  },
  {
    id: 'che-2',
    subjectId: 'chemistry',
    chapterNumber: 2,
    title: 'Electrochemistry',
    boardMarks: 9,
    kcetQuestions: 3,
    description: "Nernst equation, Kohlrausch's law, fuel cells, lead storage battery, electrolysis",
    topics: ['Nernst Equation', "Kohlrausch's Law", 'Conductance & Molar Conductivity', 'Batteries & Corrosion'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/02_Electrochemistry_IIPU_CHEM_2026-27.pdf',
    officialPdfName: '02_Electrochemistry_IIPU_CHEM_2026-27.pdf'
  },
  {
    id: 'che-3',
    subjectId: 'chemistry',
    chapterNumber: 3,
    title: 'Chemical Kinetics',
    boardMarks: 9,
    kcetQuestions: 3,
    description: 'Rate law, order & molecularity, integrated rate equations, Arrhenius equation',
    topics: ['Rate Law & Order', 'Integrated Rate Equations', 'Half Life', 'Arrhenius Equation'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/03_Chemical_Kinetics_IIPU_CHEM_2026-27.pdf',
    officialPdfName: '03_Chemical_Kinetics_IIPU_CHEM_2026-27.pdf'
  },
  {
    id: 'che-4',
    subjectId: 'chemistry',
    chapterNumber: 4,
    title: 'd and f Block Elements',
    boardMarks: 9,
    kcetQuestions: 3,
    description: 'Transition elements, oxidation states, lanthanoid contraction, KMnO4 and K2Cr2O7',
    topics: ['Transition Metal Properties', 'Lanthanoid Contraction', 'Potassium Permanganate', 'Potassium Dichromate'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/04_d_and_f_Block_elements_IIPU_CHEM_2026-27.pdf',
    officialPdfName: '04_d_and_f_Block_elements_IIPU_CHEM_2026-27.pdf'
  },
  {
    id: 'che-5',
    subjectId: 'chemistry',
    chapterNumber: 5,
    title: 'Coordination Compounds',
    boardMarks: 7,
    kcetQuestions: 2,
    description: "Werner's theory, IUPAC nomenclature, Valence Bond Theory (VBT), Crystal Field Theory (CFT)",
    topics: ['IUPAC Naming of Complexes', 'Valence Bond Theory', 'Crystal Field Splitting (CFT)', 'Isomerism'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/05_Cordination_compounds_IIPU_CHEM_2026-27.pdf',
    officialPdfName: '05_Cordination_compounds_IIPU_CHEM_2026-27.pdf'
  },
  {
    id: 'che-6',
    subjectId: 'chemistry',
    chapterNumber: 6,
    title: 'Haloalkanes and Haloarenes',
    boardMarks: 7,
    kcetQuestions: 2,
    description: 'SN1 and SN2 mechanisms, stereochemistry, Sandmeyer reaction, Grignard reagents',
    topics: ['SN1 vs SN2 Mechanisms', 'Optical Activity', 'Sandmeyer & Finkelstein Reactions', 'Elimination Reactions'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/06_Haloalkanes_and_Haloarenes_IIPU_CHEM_2026-27.pdf',
    officialPdfName: '06_Haloalkanes_and_Haloarenes_IIPU_CHEM_2026-27.pdf'
  },
  {
    id: 'che-7',
    subjectId: 'chemistry',
    chapterNumber: 7,
    title: 'Alcohols, Phenols and Ethers',
    boardMarks: 8,
    kcetQuestions: 3,
    description: "Hydroboration-oxidation, Kolbe's reaction, Reimer-Tiemann reaction, Williamson synthesis",
    topics: ['Preparation & Properties of Alcohols', 'Acidity of Phenols', "Reimer-Tiemann & Kolbe's", 'Williamson Synthesis'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/07_Alcohols_phenols_and_ethers_IIPU_CHEM_2026-27.pdf',
    officialPdfName: '07_Alcohols_phenols_and_ethers_IIPU_CHEM_2026-27.pdf'
  },
  {
    id: 'che-8',
    subjectId: 'chemistry',
    chapterNumber: 8,
    title: 'Aldehydes, Ketones and Carboxylic Acids',
    boardMarks: 9,
    kcetQuestions: 3,
    description: 'Nucleophilic addition, Aldol condensation, Cannizzaro reaction, HVZ reaction',
    topics: ['Rosenmund & Stephen Reaction', 'Aldol & Cannizzaro', 'Tollens & Fehling Test', 'HVZ Reaction'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/08_Aldehydes_ketones_and_carboxylic_acids_IIPU_CHEM_2026-27.pdf',
    officialPdfName: '08_Aldehydes_ketones_and_carboxylic_acids_IIPU_CHEM_2026-27.pdf'
  },
  {
    id: 'che-9',
    subjectId: 'chemistry',
    chapterNumber: 9,
    title: 'Amines',
    boardMarks: 6,
    kcetQuestions: 2,
    description: "Gabriel phthalimide synthesis, Hoffmann bromamide degradation, Hinsberg's reagent",
    topics: ['Basicity of Amines', 'Hoffmann Bromamide', "Hinsberg's Test", 'Diazonium Salts'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/09_Amines_IIPU_CHEM_2026-27.pdf',
    officialPdfName: '09_Amines_IIPU_CHEM_2026-27.pdf'
  },
  {
    id: 'che-10',
    subjectId: 'chemistry',
    chapterNumber: 10,
    title: 'Biomolecules',
    boardMarks: 6,
    kcetQuestions: 2,
    description: 'Carbohydrates (glucose, fructose), proteins (peptide linkage, denaturation), nucleic acids',
    topics: ['Structure of Glucose', 'Amino Acids & Proteins', 'Denaturation of Proteins', 'DNA and RNA Structure'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/10_Biomolecules_IIPU_CHEM_2026-27.pdf',
    officialPdfName: '10_Biomolecules_IIPU_CHEM_2026-27.pdf'
  },

  // ==================== MATHEMATICS ====================
  {
    id: 'math-1',
    subjectId: 'mathematics',
    chapterNumber: 1,
    title: 'Relations and Functions',
    boardMarks: 8,
    kcetQuestions: 3,
    description: 'Reflexive, symmetric, transitive relations, equivalence relations, bijective functions',
    topics: ['Types of Relations', 'One-One and Onto Functions', 'Composition of Functions'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/01_RELATION%20AND%20FUNCTION_IIPU_MATHS_2026-27.pdf',
    officialPdfName: '01_RELATION_AND_FUNCTION_IIPU_MATHS_2026-27.pdf'
  },
  {
    id: 'math-2',
    subjectId: 'mathematics',
    chapterNumber: 2,
    title: 'Inverse Trigonometric Functions',
    boardMarks: 7,
    kcetQuestions: 2,
    description: 'Principal value branch, graphs and domain-range of inverse circular functions',
    topics: ['Principal Value Branches', 'Domain and Range', 'Properties of Inverse Trigonometry'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/02_Inverse_Trigonometric_Functions_IIPU_MATHS_2026-27.pdf',
    officialPdfName: '02_Inverse_Trigonometric_Functions_IIPU_MATHS_2026-27.pdf'
  },
  {
    id: 'math-3',
    subjectId: 'mathematics',
    chapterNumber: 3,
    title: 'Matrices',
    boardMarks: 9,
    kcetQuestions: 3,
    description: 'Matrix multiplication, symmetric and skew-symmetric, elementary transformations, invertible matrices',
    topics: ['Matrix Operations', 'Symmetric & Skew Symmetric', 'Inverse of a Matrix'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/03_Matrices_IIPU_MATHS_2026-27.pdf',
    officialPdfName: '03_Matrices_IIPU_MATHS_2026-27.pdf'
  },
  {
    id: 'math-4',
    subjectId: 'mathematics',
    chapterNumber: 4,
    title: 'Determinants',
    boardMarks: 12,
    kcetQuestions: 3,
    description: 'Minors, cofactors, adjoint and inverse, solving linear equations by matrix method',
    topics: ['Minors & Cofactors', 'Adjoint & Inverse', 'Matrix Method for System of Equations'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/04_Determinants_IIPU_MATHS_2026-27.pdf',
    officialPdfName: '04_Determinants_IIPU_MATHS_2026-27.pdf'
  },
  {
    id: 'math-5',
    subjectId: 'mathematics',
    chapterNumber: 5,
    title: 'Continuity and Differentiability',
    boardMarks: 19,
    kcetQuestions: 4,
    description: 'Continuous functions, chain rule, implicit differentiation, logarithmic differentiation, second order derivative',
    topics: ['Continuity at a Point', 'Chain Rule & Implicit Functions', 'Logarithmic Differentiation', 'Second Order Derivative'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/05_Continuity_and_Differentiability_IIPU_MATHS_2026-27.pdf',
    officialPdfName: '05_Continuity_and_Differentiability_IIPU_MATHS_2026-27.pdf'
  },
  {
    id: 'math-6',
    subjectId: 'mathematics',
    chapterNumber: 6,
    title: 'Application of Derivatives',
    boardMarks: 10,
    kcetQuestions: 3,
    description: 'Rate of change of quantities, increasing/decreasing functions, maxima and minima',
    topics: ['Rate of Change', 'Strictly Increasing/Decreasing', 'First & Second Derivative Test for Maxima/Minima'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/06_Application_of_Derivatives_IIPU_MATHS_2026-27.pdf',
    officialPdfName: '06_Application_of_Derivatives_IIPU_MATHS_2026-27.pdf'
  },
  {
    id: 'math-7',
    subjectId: 'mathematics',
    chapterNumber: 7,
    title: 'Integrals',
    boardMarks: 21,
    kcetQuestions: 5,
    description: 'Integration by substitution, partial fractions, parts, definite integral properties',
    topics: ['Integration by Substitution', 'Integration by Parts', 'Partial Fractions', 'Definite Integrals Properties'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/07_Integrals_IIPU_MATHS_2026-27.pdf',
    officialPdfName: '07_Integrals_IIPU_MATHS_2026-27.pdf'
  },
  {
    id: 'math-8',
    subjectId: 'mathematics',
    chapterNumber: 8,
    title: 'Application of Integrals',
    boardMarks: 8,
    kcetQuestions: 2,
    description: 'Area of bounded regions between curves, parabolas, circles, ellipses and lines',
    topics: ['Area under Simple Curves', 'Area between Two Curves'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/08_Application_of_Integrals_IIPU_MATHS_2026-27.pdf',
    officialPdfName: '08_Application_of_Integrals_IIPU_MATHS_2026-27.pdf'
  },
  {
    id: 'math-9',
    subjectId: 'mathematics',
    chapterNumber: 9,
    title: 'Differential Equations',
    boardMarks: 10,
    kcetQuestions: 3,
    description: 'Order and degree, variable separable method, homogeneous equations, linear differential equations',
    topics: ['Order and Degree', 'Variable Separable Method', 'Homogeneous Differential Equations', 'Linear Differential Equations'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/09_Differential_Equations_IIPU_MATHS_2026-27.pdf',
    officialPdfName: '09_Differential_Equations_IIPU_MATHS_2026-27.pdf'
  },
  {
    id: 'math-10',
    subjectId: 'mathematics',
    chapterNumber: 10,
    title: 'Vector Algebra',
    boardMarks: 11,
    kcetQuestions: 3,
    description: 'Dot product, cross product, projection of vector, collinearity, scalar triple product',
    topics: ['Scalar (Dot) Product', 'Vector (Cross) Product', 'Direction Cosines & Projection'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/10_Vector_Algebra_IIPU_MATHS_2026-27.pdf',
    officialPdfName: '10_Vector_Algebra_IIPU_MATHS_2026-27.pdf'
  },
  {
    id: 'math-11',
    subjectId: 'mathematics',
    chapterNumber: 11,
    title: 'Three Dimensional Geometry',
    boardMarks: 11,
    kcetQuestions: 3,
    description: 'Direction cosines, line equations in 3D, shortest distance between skew lines',
    topics: ['Equation of Line in 3D', 'Angle between Lines', 'Shortest Distance between Skew Lines'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/11_Three-Dimensional_Geometry_IIPU_MATHS_2026-27.pdf',
    officialPdfName: '11_Three-Dimensional_Geometry_IIPU_MATHS_2026-27.pdf'
  },
  {
    id: 'math-12',
    subjectId: 'mathematics',
    chapterNumber: 12,
    title: 'Linear Programming',
    boardMarks: 7,
    kcetQuestions: 2,
    description: 'Corner point method, bounded and unbounded feasible regions, optimization of objective function',
    topics: ['Feasible Region', 'Corner Point Method', 'Bounded vs Unbounded Optimization'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/12_Linear_Programming_IIPU_MATHS_2026-27.pdf',
    officialPdfName: '12_Linear_Programming_IIPU_MATHS_2026-27.pdf'
  },
  {
    id: 'math-13',
    subjectId: 'mathematics',
    chapterNumber: 13,
    title: 'Probability',
    boardMarks: 11,
    kcetQuestions: 3,
    description: "Conditional probability, multiplication theorem, independent events, Bayes' theorem",
    topics: ['Conditional Probability', 'Independent Events', "Bayes' Theorem", 'Probability Distribution'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/13_Probability_IIPU_MATHS_2026-27.pdf',
    officialPdfName: '13_Probability_IIPU_MATHS_2026-27.pdf'
  },

  // ==================== BIOLOGY ====================
  {
    id: 'bio-1',
    subjectId: 'biology',
    chapterNumber: 1,
    title: 'Sexual Reproduction in Flowering Plants',
    boardMarks: 8,
    kcetQuestions: 3,
    description: 'Microsporogenesis, megasporogenesis, pollination types, double fertilization, endosperm and embryo',
    topics: ['Microsporangium & Pollen', 'Megasporogenesis & Embryo Sac', 'Double Fertilization', 'Apomixis'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/01_Sexual_reproduction_in_flowering_plants_IIPU_BIO_2026-27.pdf',
    officialPdfName: '01_Sexual_reproduction_in_flowering_plants_IIPU_BIO_2026-27.pdf'
  },
  {
    id: 'bio-2',
    subjectId: 'biology',
    chapterNumber: 2,
    title: 'Human Reproduction',
    boardMarks: 8,
    kcetQuestions: 3,
    description: 'Male & female reproductive systems, spermatogenesis, oogenesis, menstrual cycle, fertilization and implantation',
    topics: ['Spermatogenesis & Oogenesis', 'Menstrual Cycle & Hormones', 'Fertilization & Cleavage', 'Placenta & Parturition'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/02_Human_Reproduction_IIPU_BIO_2026-27.pdf',
    officialPdfName: '02_Human_Reproduction_IIPU_BIO_2026-27.pdf'
  },
  {
    id: 'bio-3',
    subjectId: 'biology',
    chapterNumber: 3,
    title: 'Reproductive Health',
    boardMarks: 5,
    kcetQuestions: 2,
    description: 'Contraceptive methods, medical termination of pregnancy (MTP), STIs, assisted reproductive technology (ART)',
    topics: ['Contraceptive Methods', 'MTP Regulations', 'Sexually Transmitted Infections', 'ART (IVF, ZIFT, ICSI)'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/03_REPRODUCTIVE_HEALTH_IIPU_BIO_2026-27.pdf',
    officialPdfName: '03_REPRODUCTIVE_HEALTH_IIPU_BIO_2026-27.pdf'
  },
  {
    id: 'bio-4',
    subjectId: 'biology',
    chapterNumber: 4,
    title: 'Principles of Inheritance and Variation',
    boardMarks: 10,
    kcetQuestions: 4,
    description: "Mendelian genetics, incomplete dominance, codominance, chromosomal theory, sex determination, genetic disorders",
    topics: ["Mendel's Laws", 'Incomplete Dominance & Codominance', 'Sex Determination', 'Mendelian & Chromosomal Disorders'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/04_PRINCIPLES_OF_INHERITANCE_AND_VARIATIOINS_IIPU_BIO_2026-27.pdf',
    officialPdfName: '04_PRINCIPLES_OF_INHERITANCE_AND_VARIATIOINS_IIPU_BIO_2026-27.pdf'
  },
  {
    id: 'bio-5',
    subjectId: 'biology',
    chapterNumber: 5,
    title: 'Molecular Basis of Inheritance',
    boardMarks: 11,
    kcetQuestions: 4,
    description: 'DNA structure, replication, transcription, genetic code, translation, lac operon, Human Genome Project',
    topics: ['DNA Double Helix', 'Replication & Meselson-Stahl', 'Transcription & Genetic Code', 'Lac Operon & HGP'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/05_MOLECULAR_BASIS_OF_INHERITANCE_IIPU_BIO_2026-27.pdf.pdf',
    officialPdfName: '05_MOLECULAR_BASIS_OF_INHERITANCE_IIPU_BIO_2026-27.pdf'
  },
  {
    id: 'bio-6',
    subjectId: 'biology',
    chapterNumber: 6,
    title: 'Evolution',
    boardMarks: 6,
    kcetQuestions: 2,
    description: 'Origin of life, Miller-Urey experiment, homologous & analogous organs, Hardy-Weinberg principle, human evolution',
    topics: ['Miller Experiment', 'Evidence of Evolution', 'Hardy-Weinberg Principle', 'Adaptive Radiation'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/06_EVOLUTION_IIPU_BIO_2026-27.pdf',
    officialPdfName: '06_EVOLUTION_IIPU_BIO_2026-27.pdf'
  },
  {
    id: 'bio-7',
    subjectId: 'biology',
    chapterNumber: 7,
    title: 'Human Health and Disease',
    boardMarks: 8,
    kcetQuestions: 3,
    description: 'Pathogens (Malaria, Typhoid, Amoebiasis), immunity, AIDS (HIV cycle), cancer, drug and alcohol abuse',
    topics: ['Life Cycle of Plasmodium', 'Innate & Acquired Immunity', 'AIDS & HIV Replication', 'Cancer & Carcinogens'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/07_HUMAN_HEALTH_AND_DISEASES_IIPU_BIO_2026-27.pdf',
    officialPdfName: '07_HUMAN_HEALTH_AND_DISEASES_IIPU_BIO_2026-27.pdf'
  },
  {
    id: 'bio-8',
    subjectId: 'biology',
    chapterNumber: 8,
    title: 'Microbes in Human Welfare',
    boardMarks: 6,
    kcetQuestions: 2,
    description: 'Microbes in household food processing, industrial products, sewage treatment (BOD), biogas production, biocontrol agents',
    topics: ['Household & Industrial Microbes', 'Sewage Treatment & BOD', 'Biogas Production', 'Biofertilizers'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/08_MICROBES_IN_HUMAN_WELFARE_IIPU_BIO_2026-27.pdf',
    officialPdfName: '08_MICROBES_IN_HUMAN_WELFARE_IIPU_BIO_2026-27.pdf'
  },
  {
    id: 'bio-9',
    subjectId: 'biology',
    chapterNumber: 9,
    title: 'Biotechnology: Principles and Processes',
    boardMarks: 7,
    kcetQuestions: 3,
    description: 'Restriction enzymes, cloning vectors (pBR322), competent host, PCR technique, bioreactors and downstream processing',
    topics: ['Restriction Endonucleases', 'Cloning Vectors (pBR322)', 'Polymerase Chain Reaction (PCR)', 'Bioreactors'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/09_BIOTECHNOLOGY_PRINCIPLES_AND_PROCESSES_IIPU_BIO_2026-27.pdf',
    officialPdfName: '09_BIOTECHNOLOGY_PRINCIPLES_AND_PROCESSES_IIPU_BIO_2026-27.pdf'
  },
  {
    id: 'bio-10',
    subjectId: 'biology',
    chapterNumber: 10,
    title: 'Biotechnology and its Applications',
    boardMarks: 6,
    kcetQuestions: 2,
    description: 'Bt cotton, RNA interference (RNAi), genetically engineered insulin, gene therapy (ADA deficiency), transgenic animals',
    topics: ['Bt Cotton & Cry Proteins', 'RNA Interference', 'Genetically Engineered Insulin', 'Gene Therapy & Transgenics'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/10_BIOTECHNOLOGY_AND_ITS_APPLICATIOINS_IIPU_BIO_2026-27.pdf',
    officialPdfName: '10_BIOTECHNOLOGY_AND_ITS_APPLICATIOINS_IIPU_BIO_2026-27.pdf'
  },
  {
    id: 'bio-11',
    subjectId: 'biology',
    chapterNumber: 11,
    title: 'Organisms and Populations',
    boardMarks: 6,
    kcetQuestions: 2,
    description: 'Abiotic factors, adaptations, population growth models (logistic & exponential), population interactions',
    topics: ['Adaptations to Abiotic Factors', 'Population Growth Curves', 'Population Interactions (Mutualism, Parasitism)'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/11_ORGANISMS_AND_POPULATION_IIPU_BIO_2026-27.pdf',
    officialPdfName: '11_ORGANISMS_AND_POPULATION_IIPU_BIO_2026-27.pdf'
  },
  {
    id: 'bio-12',
    subjectId: 'biology',
    chapterNumber: 12,
    title: 'Ecosystem',
    boardMarks: 6,
    kcetQuestions: 2,
    description: 'Productivity (GPP & NPP), decomposition, energy flow, ecological pyramids, nutrient cycling',
    topics: ['Primary & Net Productivity', 'Process of Decomposition', 'Ecological Pyramids (Energy, Biomass)', '10% Law'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/12_ECOSYSTEM_IIPU_BIO_2026-27.pdf',
    officialPdfName: '12_ECOSYSTEM_IIPU_BIO_2026-27.pdf'
  },
  {
    id: 'bio-13',
    subjectId: 'biology',
    chapterNumber: 13,
    title: 'Biodiversity and Conservation',
    boardMarks: 6,
    kcetQuestions: 2,
    description: 'Levels of biodiversity, species-area relationship, causes of biodiversity loss (Evil Quartet), in-situ & ex-situ conservation',
    topics: ['Species-Area Relationship', 'The Evil Quartet', 'In-situ vs Ex-situ Conservation', 'Sacred Groves & Hotspots'],
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/13_BIODIVERSITY_AND_CONSERVATION_IIPU_BIO_2026-27.pdf',
    officialPdfName: '13_BIODIVERSITY_AND_CONSERVATION_IIPU_BIO_2026-27.pdf',
    classLevel: 'II PUC (Class 12)'
  },

  // ==================== PHYSICS (CLASS 11 ENTRANCE CHAPTERS) ====================
  {
    id: 'phy-15',
    subjectId: 'physics',
    chapterNumber: 15,
    title: 'Units and Measurements',
    boardMarks: 4,
    kcetQuestions: 2,
    description: 'Dimensional analysis, errors in measurement, significant figures, physical quantities',
    topics: ['Dimensional Analysis', 'Error Analysis', 'Vernier & Screw Gauge', 'Significant Figures'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'phy-16',
    subjectId: 'physics',
    chapterNumber: 16,
    title: 'Motion in a Straight Line & Plane (Kinematics)',
    boardMarks: 8,
    kcetQuestions: 3,
    description: '1D motion graphs, uniform acceleration, vectors, projectile motion, relative velocity',
    topics: ['Equations of Motion', 'Relative Velocity', 'Projectile Motion', 'Uniform Circular Motion'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'phy-17',
    subjectId: 'physics',
    chapterNumber: 17,
    title: 'Laws of Motion & Friction',
    boardMarks: 7,
    kcetQuestions: 3,
    description: "Newton's laws, impulse, conservation of momentum, static & kinetic friction, banking of curves",
    topics: ["Newton's Second & Third Law", 'Frictional Force', 'Banking of Roads', 'Pulley & Tension Systems'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'phy-18',
    subjectId: 'physics',
    chapterNumber: 18,
    title: 'Work, Energy and Power',
    boardMarks: 6,
    kcetQuestions: 2,
    description: 'Work-energy theorem, conservative forces, potential energy of spring, elastic & inelastic collisions',
    topics: ['Work-Energy Theorem', 'Collisions in 1D & 2D', 'Spring Potential Energy', 'Power & Efficiency'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'phy-19',
    subjectId: 'physics',
    chapterNumber: 19,
    title: 'System of Particles & Rotational Motion',
    boardMarks: 7,
    kcetQuestions: 3,
    description: 'Center of mass, torque, angular momentum, moment of inertia, rolling motion without slipping',
    topics: ['Center of Mass', 'Moment of Inertia Theorems', 'Torque & Angular Momentum', 'Rolling on Incline'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'phy-20',
    subjectId: 'physics',
    chapterNumber: 20,
    title: 'Gravitation',
    boardMarks: 6,
    kcetQuestions: 2,
    description: "Kepler's laws, gravitational potential & field, escape velocity, geostationary satellites",
    topics: ["Universal Law of Gravitation", "Kepler's Laws", 'Escape Velocity', 'Orbital Velocity & Satellites'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'phy-21',
    subjectId: 'physics',
    chapterNumber: 21,
    title: 'Mechanical Properties of Solids and Fluids',
    boardMarks: 7,
    kcetQuestions: 2,
    description: "Hooke's law, Young's modulus, Pascal's law, Bernoulli's principle, surface tension, viscosity",
    topics: ["Stress-Strain & Moduli", "Bernoulli's Theorem", 'Surface Tension & Capillarity', "Stokes' Law"],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'phy-22',
    subjectId: 'physics',
    chapterNumber: 22,
    title: 'Thermodynamics & Kinetic Theory',
    boardMarks: 8,
    kcetQuestions: 3,
    description: 'First & second law of thermodynamics, Carnot engine, isothermal & adiabatic processes, gas laws',
    topics: ['First Law of Thermodynamics', 'Carnot Engine & Efficiency', 'Molar Specific Heats (Cp, Cv)', 'RMS Speed & Mean Free Path'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'phy-23',
    subjectId: 'physics',
    chapterNumber: 23,
    title: 'Oscillations and Waves',
    boardMarks: 7,
    kcetQuestions: 3,
    description: 'Simple harmonic motion (SHM), simple pendulum, energy in SHM, Doppler effect, standing waves',
    topics: ['SHM Equations & Energy', 'Simple Pendulum & Spring Mass', 'Standing Waves & Resonance', 'Doppler Effect in Sound'],
    classLevel: 'I PUC (Class 11)'
  },

  // ==================== CHEMISTRY (CLASS 11 ENTRANCE CHAPTERS) ====================
  {
    id: 'chem-11',
    subjectId: 'chemistry',
    chapterNumber: 11,
    title: 'Some Basic Concepts of Chemistry (Mole Concept)',
    boardMarks: 6,
    kcetQuestions: 2,
    description: 'Mole concept, molar mass, percentage composition, empirical formula, stoichiometry, limiting reagent',
    topics: ['Mole Concept & Avogadro Number', 'Limiting Reagent', 'Molarity, Molality & Normality', 'Empirical & Molecular Formula'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'chem-12',
    subjectId: 'chemistry',
    chapterNumber: 12,
    title: 'Structure of Atom',
    boardMarks: 7,
    kcetQuestions: 3,
    description: 'Bohr model, dual nature of matter, Heisenberg uncertainty principle, quantum numbers, electronic configuration',
    topics: ["Bohr's Atomic Model", 'Quantum Numbers & Orbitals', 'de Broglie Wavelength', 'Aufbau & Hund Principles'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'chem-13',
    subjectId: 'chemistry',
    chapterNumber: 13,
    title: 'Classification of Elements & Periodicity',
    boardMarks: 5,
    kcetQuestions: 2,
    description: 'Modern periodic law, periodic trends in atomic radii, ionization enthalpy, electron gain enthalpy',
    topics: ['Periodic Trends in Radii', 'Ionization Enthalpy', 'Electron Gain Enthalpy', 'Electronegativity'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'chem-14',
    subjectId: 'chemistry',
    chapterNumber: 14,
    title: 'Chemical Bonding and Molecular Structure',
    boardMarks: 8,
    kcetQuestions: 3,
    description: 'Ionic & covalent bonds, VSEPR theory, hybridization (sp, sp2, sp3, sp3d), molecular orbital theory (MOT)',
    topics: ['VSEPR Theory & Shapes', 'Hybridization (sp, sp², sp³, sp³d)', 'Molecular Orbital Theory (MOT)', 'Dipole Moment & H-Bonding'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'chem-15',
    subjectId: 'chemistry',
    chapterNumber: 15,
    title: 'Chemical Thermodynamics & Energetics',
    boardMarks: 7,
    kcetQuestions: 3,
    description: 'Internal energy, enthalpy, Hess law, spontaneous processes, entropy, Gibbs free energy criteria',
    topics: ['First Law of Thermodynamics', 'Enthalpy & Hess Law', 'Entropy (S) & Spontaneity', 'Gibbs Free Energy (ΔG = ΔH - TΔS)'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'chem-16',
    subjectId: 'chemistry',
    chapterNumber: 16,
    title: 'Equilibrium (Chemical & Ionic)',
    boardMarks: 8,
    kcetQuestions: 3,
    description: 'Law of chemical equilibrium, Le Chatelier principle, pH, buffer solutions, solubility product (Ksp)',
    topics: ["Law of Mass Action (Kp, Kc)", "Le Chatelier's Principle", 'pH Scale & Buffer Solutions', 'Solubility Product (Ksp) & Common Ion Effect'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'chem-17',
    subjectId: 'chemistry',
    chapterNumber: 17,
    title: 'Redox Reactions',
    boardMarks: 4,
    kcetQuestions: 2,
    description: 'Concept of oxidation & reduction, oxidation numbers, balancing redox equations by ion-electron method',
    topics: ['Oxidation Numbers Calculation', 'Balancing by Ion-Electron Method', 'Types of Redox Reactions', 'Electrochemical Series'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'chem-18',
    subjectId: 'chemistry',
    chapterNumber: 18,
    title: 'Organic Chemistry: Basic Principles & Techniques (GOC)',
    boardMarks: 8,
    kcetQuestions: 3,
    description: 'IUPAC nomenclature, inductive, electromeric, resonance & hyperconjugation effects, reactive intermediates',
    topics: ['IUPAC Nomenclature', 'Inductive & Resonance Effects', 'Hyperconjugation & Carbocation Stability', 'Isomerism (Structural & Stereoisomerism)'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'chem-19',
    subjectId: 'chemistry',
    chapterNumber: 19,
    title: 'Hydrocarbons (Alkanes, Alkenes, Alkynes & Arenes)',
    boardMarks: 8,
    kcetQuestions: 3,
    description: 'Conformations of ethane, Markovnikov addition, ozonolysis of alkenes, electrophilic aromatic substitution',
    topics: ['Alkanes & Free Radical Halogenation', 'Alkenes: Markovnikov Rule & Ozonolysis', 'Alkynes: Acidity & Polymerization', 'Benzene: Electrophilic Substitution'],
    classLevel: 'I PUC (Class 11)'
  },

  // ==================== MATHEMATICS (CLASS 11 ENTRANCE CHAPTERS) ====================
  {
    id: 'math-14',
    subjectId: 'mathematics',
    chapterNumber: 14,
    title: 'Trigonometric Functions & Identities',
    boardMarks: 8,
    kcetQuestions: 3,
    description: 'Compound angle formulas, multiple & submultiple angles, general solutions of trigonometric equations',
    topics: ['Sum and Difference Formulas', 'Multiple and Submultiple Angles', 'Trigonometric Equations', 'Graphs of Trig Functions'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'math-15',
    subjectId: 'mathematics',
    chapterNumber: 15,
    title: 'Complex Numbers and Quadratic Equations',
    boardMarks: 6,
    kcetQuestions: 2,
    description: 'Argand plane, polar representation, square root of complex numbers, nature of roots in quadratics',
    topics: ['Modulus and Argument', 'Polar Representation', 'Cube Roots of Unity (ω)', 'Quadratic Equations with Complex Roots'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'math-16',
    subjectId: 'mathematics',
    chapterNumber: 16,
    title: 'Permutations and Combinations',
    boardMarks: 6,
    kcetQuestions: 2,
    description: 'Fundamental principles of counting, factorial notation, nPr and nCr formulas, permutations with repetition',
    topics: ['Fundamental Counting Principle', 'Permutations (nPr)', 'Combinations (nCr)', 'Divisions into Groups & Geometry'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'math-17',
    subjectId: 'mathematics',
    chapterNumber: 17,
    title: 'Binomial Theorem',
    boardMarks: 5,
    kcetQuestions: 2,
    description: 'Binomial expansion for positive integral index, general term, middle terms, properties of coefficients',
    topics: ['Binomial Expansion', 'General and Middle Term', 'Term Independent of x', 'Properties of Binomial Coefficients'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'math-18',
    subjectId: 'mathematics',
    chapterNumber: 18,
    title: 'Sequences and Series',
    boardMarks: 7,
    kcetQuestions: 3,
    description: 'Arithmetic progression (AP), geometric progression (GP), sum of n terms, infinite GP, AGP',
    topics: ['Arithmetic Progression (AP)', 'Geometric Progression (GP)', 'Sum of Infinite GP', 'Arithmetic-Geometric Progression (AGP)'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'math-19',
    subjectId: 'mathematics',
    chapterNumber: 19,
    title: 'Straight Lines & Conic Sections',
    boardMarks: 10,
    kcetQuestions: 4,
    description: 'Slope of lines, distance formulas, circles, standard equations and properties of parabola, ellipse, hyperbola',
    topics: ['Equations of Straight Lines', 'Standard Equation of Circle', 'Parabola (y² = 4ax)', 'Ellipse and Hyperbola Eccentricity'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'math-20',
    subjectId: 'mathematics',
    chapterNumber: 20,
    title: 'Limits and Derivatives (Foundations)',
    boardMarks: 8,
    kcetQuestions: 3,
    description: "Intuitive idea of limits, standard trigonometric limits, L'Hôpital's rule, first principles differentiation",
    topics: ['Evaluation of Limits (0/0 form)', "L'Hôpital's Rule", 'Standard Limits (sin x / x)', 'First Principle Derivatives'],
    classLevel: 'I PUC (Class 11)'
  },

  // ==================== BIOLOGY (CLASS 11 ENTRANCE CHAPTERS) ====================
  {
    id: 'bio-14',
    subjectId: 'biology',
    chapterNumber: 14,
    title: 'The Living World & Biological Classification',
    boardMarks: 5,
    kcetQuestions: 2,
    description: 'Taxonomic categories, binomial nomenclature, Whittaker 5-kingdom classification, Monera, Protista, Fungi',
    topics: ['Binomial Nomenclature', 'Kingdom Monera & Archaebacteria', 'Kingdom Protista & Dinoflagellates', 'Kingdom Fungi & Lichens'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'bio-15',
    subjectId: 'biology',
    chapterNumber: 15,
    title: 'Plant Kingdom',
    boardMarks: 6,
    kcetQuestions: 2,
    description: 'Algae (Chlorophyceae, Phaeophyceae, Rhodophyceae), Bryophytes, Pteridophytes, Gymnosperms',
    topics: ['Algae Classification & Pigments', 'Bryophytes: Liverworts & Mosses', 'Pteridophytes & Heterospory', 'Gymnosperms & Alternation of Generations'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'bio-16',
    subjectId: 'biology',
    chapterNumber: 16,
    title: 'Animal Kingdom',
    boardMarks: 7,
    kcetQuestions: 3,
    description: 'Basis of classification, non-chordates (Porifera to Echinodermata), Hemichordata, Chordata classes',
    topics: ['Coelom, Symmetry & Germ Layers', 'Non-Chordates (Porifera to Arthropoda)', 'Phylum Echinodermata & Mollusca', 'Chordata Classes (Pisces to Mammals)'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'bio-17',
    subjectId: 'biology',
    chapterNumber: 17,
    title: 'Morphology & Anatomy of Flowering Plants',
    boardMarks: 7,
    kcetQuestions: 3,
    description: 'Modifications of roots, stems, leaves, flowers & fruits, meristematic tissues, anatomy of dicot/monocot root, stem, leaf',
    topics: ['Floral Formula & Families', 'Modifications of Root/Stem/Leaf', 'Meristematic & Permanent Tissues', 'Anatomy of Dicot vs Monocot Organs'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'bio-18',
    subjectId: 'biology',
    chapterNumber: 18,
    title: 'Cell: The Unit of Life & Cell Cycle',
    boardMarks: 8,
    kcetQuestions: 3,
    description: 'Prokaryotic vs eukaryotic cell, cell organelles (endoplasmic reticulum, Golgi, mitochondria), mitosis, meiosis',
    topics: ['Fluid Mosaic Model of Membrane', 'Endomembrane System', 'Mitosis Stages & Cytokinesis', 'Meiosis (Prophase I Stages)'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'bio-19',
    subjectId: 'biology',
    chapterNumber: 19,
    title: 'Plant Physiology: Photosynthesis & Respiration',
    boardMarks: 8,
    kcetQuestions: 3,
    description: 'Light reaction, cyclic & non-cyclic photophosphorylation, Calvin C3 cycle, C4 pathway, glycolysis, Krebs cycle',
    topics: ['Photosystems & Photophosphorylation', 'Calvin Cycle & C4 Pathway', 'Glycolysis & Fermentation', 'Krebs Cycle & Electron Transport System'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'bio-20',
    subjectId: 'biology',
    chapterNumber: 20,
    title: 'Plant Growth & Regulators',
    boardMarks: 5,
    kcetQuestions: 2,
    description: 'Phytohormones: Auxins, Gibberellins, Cytokinins, Ethylene, Abscisic acid, photoperiodism',
    topics: ['Auxins & Apical Dominance', 'Gibberellins & Bolting', 'Cytokinins & Cell Division', 'Ethylene & Abscisic Acid (Stress Hormone)'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'bio-21',
    subjectId: 'biology',
    chapterNumber: 21,
    title: 'Human Physiology: Breathing, Circulation & Excretion',
    boardMarks: 8,
    kcetQuestions: 3,
    description: 'Respiratory volumes, oxygen dissociation curve, cardiac cycle, ECG, nephron, counter-current mechanism',
    topics: ['Respiratory Volumes & Capacities', 'Cardiac Cycle, Heart Sounds & ECG', 'Structure of Nephron', 'Urine Formation & Counter-Current Mechanism'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'bio-22',
    subjectId: 'biology',
    chapterNumber: 22,
    title: 'Locomotion, Movement & Neural Control',
    boardMarks: 7,
    kcetQuestions: 3,
    description: 'Skeletal muscles, sarcomere, sliding filament theory, human skeleton & joints, neuron, conduction of nerve impulse',
    topics: ['Sliding Filament Mechanism', 'Joints & Skeletal Disorders', 'Generation & Conduction of Nerve Impulse', 'Synaptic Transmission & Reflex Arc'],
    classLevel: 'I PUC (Class 11)'
  },
  {
    id: 'bio-23',
    subjectId: 'biology',
    chapterNumber: 23,
    title: 'Chemical Coordination and Integration',
    boardMarks: 6,
    kcetQuestions: 2,
    description: 'Endocrine glands and their hormones (pituitary, thyroid, parathyroid, adrenal, pancreas, gonads), mechanisms of hormone action',
    topics: ['Pituitary Gland & Tropic Hormones', 'Thyroid & Adrenal Glands', 'Insulin, Glucagon & Diabetes', 'Mechanism of Peptide vs Steroid Hormones'],
    classLevel: 'I PUC (Class 11)'
  }
];

export function getSubjectMeta(subjectId: SubjectId): SubjectMeta | undefined {
  return SUBJECTS.find(s => s.id === subjectId);
}

export function getChaptersBySubject(subjectId: SubjectId): Chapter[] {
  return CHAPTERS.filter(c => c.subjectId === subjectId);
}

export function getChapterById(chapterId: string): Chapter | undefined {
  return CHAPTERS.find(c => c.id === chapterId);
}
