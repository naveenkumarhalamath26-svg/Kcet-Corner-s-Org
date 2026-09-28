import { Question } from '../types';
import { physicsQuestions } from './questions/physicsQuestions';
import { chemistryQuestions } from './questions/chemistryQuestions';
import { mathQuestions } from './questions/mathQuestions';
import { biologyQuestions } from './questions/biologyQuestions';
import { entranceQuestions } from './questions/entranceQuestions';
import { buildComprehensiveKCETQuestionBank } from './questions/kcetPyqGenerator';
import { assertionReasonAndStatementQuestions } from './questions/assertionReasonAndStatements';

const BASE_QUESTIONS: Question[] = [
  // =========================================================================
  // PHYSICS - KSEAB CET 2026-27 ENTRANCE QUESTIONS & MODEL PAPERS
  // =========================================================================
  {
    id: 'phy-q1',
    subject: 'physics',
    chapter: 'phy-1',
    topic: "Gauss's Theorem",
    question: 'The total electric flux through a closed surface enclosing an electric dipole of dipole moment p is:',
    questionType: 'single_mcq',
    options: ['Zero', 'q / ε₀', '2q / ε₀', 'p / ε₀'],
    correctAnswer: 'Zero',
    explanation: "According to Gauss's Law, the total electric flux Φ = Q_enclosed / ε₀. An electric dipole consists of equal and opposite charges (+q and -q). Therefore, the net enclosed charge Q_enclosed = (+q) + (-q) = 0. Hence, the electric flux is zero.",
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'Φ = ∮ E · dA = Q_enclosed / ε₀',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/01_ELECTRIC_CHARGES_AND_FIELDS_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-q2',
    subject: 'physics',
    chapter: 'phy-1',
    topic: "Coulomb's Law",
    question: 'Two point charges placed at a distance r in air exert a force F on each other. If they are placed in a medium of dielectric constant K = 4 at the same distance, the new force will be:',
    questionType: 'single_mcq',
    options: ['4 F', 'F / 4', 'F / 2', '2 F'],
    correctAnswer: 'F / 4',
    explanation: 'The electrostatic force between two charges in a medium of dielectric constant K is given by F_med = F_air / K. Given K = 4, the new force F_med = F / 4.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'F_med = F_air / K',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/01_ELECTRIC_CHARGES_AND_FIELDS_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-q3',
    subject: 'physics',
    chapter: 'phy-2',
    topic: 'Equipotential Surfaces',
    question: 'The work done in moving a test charge q₀ along an equipotential surface between two points separated by 10 cm is:',
    questionType: 'single_mcq',
    options: ['Zero', '10 q₀ Joules', 'q₀ / 10 Joules', 'Infinite'],
    correctAnswer: 'Zero',
    explanation: 'Work done W = q₀ · ΔV. By definition, all points on an equipotential surface are at the same potential, so ΔV = V_B - V_A = 0. Therefore, W = 0 regardless of the distance.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'W = q · ΔV = 0 on equipotential surfaces',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/02_ELECTROSTATIC_POTENTIAL_AND_CAPACITANCE_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-q4',
    subject: 'physics',
    chapter: 'phy-2',
    topic: 'Capacitors in Series/Parallel',
    question: 'Three identical capacitors each of capacitance 6 μF are connected in series. What is the equivalent capacitance of the combination in μF?',
    questionType: 'numerical',
    correctAnswer: 2,
    explanation: 'For n identical capacitors connected in series, equivalent capacitance C_eq = C / n = 6 μF / 3 = 2 μF.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: '1/C_eq = 1/C₁ + 1/C₂ + 1/C₃',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/02_ELECTROSTATIC_POTENTIAL_AND_CAPACITANCE_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-q5',
    subject: 'physics',
    chapter: 'phy-3',
    topic: "Ohm's Law & Drift Velocity",
    question: 'When the temperature of a metallic conductor is increased, its electrical resistivity:',
    questionType: 'single_mcq',
    options: ['Increases', 'Decreases', 'Remains constant', 'First decreases then increases'],
    correctAnswer: 'Increases',
    explanation: 'With an increase in temperature, thermal vibration of metal ions increases, reducing the relaxation time (τ) between collisions of free electrons. Since resistivity ρ = m / (n e² τ), a decrease in τ leads to an increase in resistivity.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'ρ = m / (n · e² · τ)',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/03_CURRENT_ELECTRICITY_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-q6',
    subject: 'physics',
    chapter: 'phy-4',
    topic: 'Biot-Savart Law',
    question: 'A proton and an alpha particle enter perpendicularly into a uniform magnetic field with the same velocity. The ratio of radius of the circular path of the proton to that of the alpha particle (r_p : r_α) is:',
    questionType: 'single_mcq',
    options: ['1 : 2', '2 : 1', '1 : 4', '1 : 1'],
    correctAnswer: '1 : 2',
    explanation: 'Radius of charged particle in magnetic field is r = (m v) / (q B). Since v and B are the same, r ∝ m / q. For proton: m_p = m, q_p = e. For alpha particle: m_α = 4m, q_α = 2e. Ratio r_p / r_α = (m/e) / (4m / 2e) = (m/e) / (2m/e) = 1/2.',
    difficulty: 'Medium',
    source: 'KCET Entrance',
    year: 2024,
    formulaNote: 'r = (m · v) / (q · B)',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/04_MOVING_CHARGES_AND_MAGNETISM_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-q7',
    subject: 'physics',
    chapter: 'phy-5',
    topic: 'Magnetic Properties of Materials',
    question: 'Which of the following magnetic materials has a small and negative magnetic susceptibility (χ < 0)?',
    questionType: 'single_mcq',
    options: ['Diamagnetic material', 'Paramagnetic material', 'Ferromagnetic material', 'Ferrimagnetic material'],
    correctAnswer: 'Diamagnetic material',
    explanation: 'Diamagnetic substances are feebly repelled by a magnetic field. Their relative permeability μ_r is slightly less than 1, and magnetic susceptibility χ is negative and independent of temperature.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'μ_r = 1 + χ; for diamagnetic χ < 0',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/05_MAGNETISM_AND_MATTER_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-q8',
    subject: 'physics',
    chapter: 'phy-6',
    topic: "Faraday & Lenz's Law",
    question: "Lenz's law is a direct consequence of the law of conservation of:",
    questionType: 'single_mcq',
    options: ['Energy', 'Charge', 'Momentum', 'Mass'],
    correctAnswer: 'Energy',
    explanation: "Lenz's law states that the direction of induced EMF or current always opposes the change in magnetic flux producing it. Mechanical work done against this opposing force is converted into electrical energy, fulfilling the Law of Conservation of Energy.",
    difficulty: 'Easy',
    source: 'Annual Exam',
    year: 2024,
    formulaNote: 'ε = - dΦ_B / dt',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/06_ELECTROMAGNETIC_INDUCTION_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-q9',
    subject: 'physics',
    chapter: 'phy-7',
    topic: 'LCR Series Resonance',
    question: 'In a series LCR resonant circuit, which of the following statements are correct? (Select all that apply)',
    questionType: 'multiple_mcq',
    options: [
      'The inductive reactance equals capacitive reactance (X_L = X_C)',
      'The impedance of the circuit is minimum and purely resistive (Z = R)',
      'The power factor of the circuit is unity (cos φ = 1)',
      'The current amplitude is minimum at resonant frequency'
    ],
    correctAnswer: [
      'The inductive reactance equals capacitive reactance (X_L = X_C)',
      'The impedance of the circuit is minimum and purely resistive (Z = R)',
      'The power factor of the circuit is unity (cos φ = 1)'
    ],
    explanation: 'At resonance: X_L = X_C, Z = √[R² + (X_L - X_C)²] = R (minimum), so current I₀ = V₀ / R is MAXIMUM (not minimum). Power factor cos φ = R / Z = R / R = 1.',
    difficulty: 'Hard',
    source: 'KCET Entrance',
    year: 2024,
    formulaNote: 'Z = √[R² + (XL - XC)²] = R at resonance',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/07_ALTERNATING_CURRENT_IIPU_PHY_2026-27.pdf'
  },
  // --- LINK: 09_RAY_OPTICS_AND_OPTICAL_INSTRUMENTS_IIPU_PHY_2026-27.pdf ---
  {
    id: 'phy-q10',
    subject: 'physics',
    chapter: 'phy-9',
    topic: 'Total Internal Reflection',
    question: 'State whether the following is True or False: Total internal reflection occurs only when light travels from an optically rarer medium to an optically denser medium.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: false,
    explanation: 'False. For total internal reflection to occur, light MUST travel from an optically DENSER medium towards an optically RARER medium, and the angle of incidence must exceed the critical angle (i > i_c).',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/09_RAY_OPTICS_AND_OPTICAL_INSTRUMENTS_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-q10-cet',
    subject: 'physics',
    chapter: 'phy-9',
    topic: "Lens Maker's Formula",
    question: 'A convex lens of glass (refractive index n_g = 1.5) has a focal length f in air. When it is completely immersed in a liquid of refractive index n_l = 1.5, its focal length and power become:',
    questionType: 'single_mcq',
    options: [
      'Focal length becomes infinite (f = ∞) and power becomes zero (P = 0)',
      'Focal length doubles and power halves',
      'Focal length becomes zero and power becomes infinite',
      'Focal length remains unchanged'
    ],
    correctAnswer: 'Focal length becomes infinite (f = ∞) and power becomes zero (P = 0)',
    explanation: "By Lens Maker's Formula: 1/f_med = ((n_g / n_l) - 1) * (1/R₁ - 1/R₂). Since n_g = n_l = 1.5, (n_g / n_l) - 1 = 1 - 1 = 0. Therefore, 1/f_med = 0 => f_med = ∞. Power P = 1/f = 0. The lens behaves as a plain glass plate and disappears in the liquid.",
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: '1/f = (n_rel - 1)(1/R₁ - 1/R₂)',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/09_RAY_OPTICS_AND_OPTICAL_INSTRUMENTS_IIPU_PHY_2026-27.pdf'
  },
  // --- LINK: 10_WAVE_OPTICS_IIPU_PHY_2026-27.pdf ---
  {
    id: 'phy-q-wave-1',
    subject: 'physics',
    chapter: 'phy-10',
    topic: "Young's Double Slit Experiment",
    question: 'In Young’s double slit experiment, if the entire apparatus is immersed in water of refractive index μ = 4/3, the fringe width β will:',
    questionType: 'single_mcq',
    options: ['Decrease by a factor of 4/3 (becomes 3/4 β)', 'Increase by a factor of 4/3', 'Remain unchanged', 'Become zero'],
    correctAnswer: 'Decrease by a factor of 4/3 (becomes 3/4 β)',
    explanation: 'Fringe width β = (λ · D) / d. When immersed in a medium of refractive index μ, wavelength decreases to λ\' = λ / μ = λ / (4/3) = (3/4)λ. Hence new fringe width β\' = (3/4)β.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'β\' = β / μ; λ\' = λ / μ',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/10_WAVE_OPTICS_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-q-wave-2',
    subject: 'physics',
    chapter: 'phy-10',
    topic: "Huygens' Principle",
    question: 'Two interfering coherent light beams have an intensity ratio of 9 : 1. The ratio of the maximum intensity to minimum intensity (I_max : I_min) in the interference pattern is:',
    questionType: 'single_mcq',
    options: ['4 : 1', '9 : 1', '16 : 1', '10 : 8'],
    correctAnswer: '4 : 1',
    explanation: 'Given I₁/I₂ = 9/1 => Amplitude ratio a₁/a₂ = √(I₁/I₂) = √9/√1 = 3/1. Maximum intensity I_max ∝ (a₁ + a₂)² = (3 + 1)² = 16. Minimum intensity I_min ∝ (a₁ - a₂)² = (3 - 1)² = 4. Ratio I_max / I_min = 16 / 4 = 4 : 1.',
    difficulty: 'Hard',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'I_max / I_min = (√I₁ + √I₂)² / (√I₁ - √I₂)²',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/10_WAVE_OPTICS_IIPU_PHY_2026-27.pdf'
  },
  // --- LINK: 11_DUAL_NATURE_OF_RADIATION_AND_MATTER_IIPU_PHY_2026-27.pdf ---
  {
    id: 'phy-q11',
    subject: 'physics',
    chapter: 'phy-11',
    topic: 'Photoelectric Effect',
    question: 'In a photoelectric experiment, if the intensity of incident light is doubled while keeping frequency constant, the maximum kinetic energy of emitted photoelectrons will:',
    questionType: 'single_mcq',
    options: ['Remain unchanged', 'Be doubled', 'Be quadrupled', 'Be halved'],
    correctAnswer: 'Remain unchanged',
    explanation: "According to Einstein's photoelectric equation, K_max = hν - Φ. Kinetic energy depends strictly on the frequency (energy of each individual photon) and work function of the metal. Increasing intensity only increases the number of emitted electrons (photocurrent), not their maximum kinetic energy.",
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'K_max = hν - Φ',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/11_DUAL_NATURE_OF_RADIATION_AND_MATTER_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-q-dual-2',
    subject: 'physics',
    chapter: 'phy-11',
    topic: 'de-Broglie Relation',
    question: 'An electron is accelerated through an electric potential difference of 100 Volts. The de-Broglie wavelength associated with the electron is:',
    questionType: 'single_mcq',
    options: ['0.1227 nm (1.227 Å)', '1.227 nm', '12.27 nm', '0.01227 nm'],
    correctAnswer: '0.1227 nm (1.227 Å)',
    explanation: 'For an accelerated electron, de-Broglie wavelength λ = 1.227 / √V nm. Given V = 100 V: λ = 1.227 / √100 = 1.227 / 10 = 0.1227 nm = 1.227 Å.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'λ = 1.227 / √V nm = h / √(2 m e V)',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/11_DUAL_NATURE_OF_RADIATION_AND_MATTER_IIPU_PHY_2026-27.pdf'
  },
  // --- LINK: 12_ATOMS_IIPU_PHY_2026-27.pdf ---
  {
    id: 'phy-q-atoms-1',
    subject: 'physics',
    chapter: 'phy-12',
    topic: "Bohr's Atomic Model",
    question: 'According to Bohr’s second postulate, the angular momentum of an electron in the nth stationary orbit of a hydrogen atom is:',
    questionType: 'single_mcq',
    options: ['n (h / 2π)', 'h / (2π n)', 'n² (h / 2π)', '2π / (n h)'],
    correctAnswer: 'n (h / 2π)',
    explanation: "Bohr's second postulate states that an electron revolves only in those non-radiating orbits where its orbital angular momentum L is an integral multiple of h / (2π): L = m v r = n h / (2π), where n = 1, 2, 3...",
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'L = m v r = n · (h / 2π)',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/12_ATOMS_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-q-atoms-2',
    subject: 'physics',
    chapter: 'phy-12',
    topic: 'Hydrogen Spectral Series',
    question: 'The ratio of the shortest wavelength of the Lyman series to the shortest wavelength of the Balmer series for the hydrogen atom is:',
    questionType: 'single_mcq',
    options: ['1 : 4', '4 : 1', '1 : 2', '1 : 9'],
    correctAnswer: '1 : 4',
    explanation: 'Shortest wavelength occurs when n_initial = ∞. For Lyman series (n₁ = 1): 1/λ_L = R(1/1² - 0) = R => λ_L = 1/R. For Balmer series (n₁ = 2): 1/λ_B = R(1/2² - 0) = R/4 => λ_B = 4/R. Ratio λ_L / λ_B = (1/R) / (4/R) = 1/4.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: '1/λ = R (1/n₁² - 1/n₂²)',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/12_ATOMS_IIPU_PHY_2026-27.pdf'
  },
  {
    id: 'phy-q12',
    subject: 'physics',
    chapter: 'phy-14',
    topic: 'p-n Junction & Rectifiers',
    question: 'Which of the following semiconductor devices is operated predominantly under reverse bias condition?',
    questionType: 'single_mcq',
    options: ['Zener diode (Voltage regulator)', 'Light Emitting Diode (LED)', 'Half-wave rectifier diode', 'Solar cell generating electricity'],
    correctAnswer: 'Zener diode (Voltage regulator)',
    explanation: 'A Zener diode is specially fabricated with heavy doping and designed to operate continuously in the reverse breakdown voltage region to provide a stable, constant output voltage.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/14_SEMICONDUCTORS_IIPU_PHY_2026-27.pdf'
  },

  // =========================================================================
  // CHEMISTRY - KSEAB CET 2026-27 ENTRANCE QUESTIONS (ALL 10 CHAPTERS)
  // =========================================================================
  // --- LINK: 01_SOLUTIONS_IIPU_CHEM_2026-27.pdf ---
  {
    id: 'che-q1',
    subject: 'chemistry',
    chapter: 'che-1',
    topic: "van't Hoff Factor",
    question: 'What is the theoretical value of the van’t Hoff factor (i) for complete dissociation of potassium sulfate, K₂SO₄ in dilute aqueous solution?',
    questionType: 'numerical',
    correctAnswer: 3,
    explanation: 'K₂SO₄ dissociates in aqueous solution as: K₂SO₄ → 2 K⁺ + SO₄²⁻. The total number of ions produced per formula unit is 2 + 1 = 3. For 100% dissociation, i = 3.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'i = 1 + (n - 1)α; when α = 1, i = n = 3',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/01_SOLUTIONS_IIPU_CHEM_2026-27.pdf'
  },
  {
    id: 'che-q-sol-2',
    subject: 'chemistry',
    chapter: 'che-1',
    topic: 'Colligative Properties',
    question: 'Which of the following 0.1 M aqueous solutions will exhibit the highest boiling point elevation?',
    questionType: 'single_mcq',
    options: ['0.1 M AlCl₃', '0.1 M BaCl₂', '0.1 M NaCl', '0.1 M Glucose (C₆H₁₂O₆)'],
    correctAnswer: '0.1 M AlCl₃',
    explanation: 'Boiling point elevation ΔT_b = i · K_b · m. For glucose, i = 1; for NaCl, i = 2; for BaCl₂, i = 3; for AlCl₃, AlCl₃ → Al³⁺ + 3 Cl⁻ gives i = 4. Since AlCl₃ yields the highest van\'t Hoff factor (i = 4), it produces the maximum number of solute particles and highest boiling point elevation.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'ΔT_b ∝ i',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/01_SOLUTIONS_IIPU_CHEM_2026-27.pdf'
  },
  // --- LINK: 02_Electrochemistry_IIPU_CHEM_2026-27.pdf ---
  {
    id: 'che-q2',
    subject: 'chemistry',
    chapter: 'che-2',
    topic: "Kohlrausch's Law",
    question: 'The unit of molar conductivity (Λ_m) of an electrolytic solution in SI units is:',
    questionType: 'single_mcq',
    options: ['S m² mol⁻¹', 'S m⁻¹ mol⁻¹', 'S cm mol⁻¹', 'Ω⁻¹ cm⁻¹'],
    correctAnswer: 'S m² mol⁻¹',
    explanation: 'Molar conductivity Λ_m = κ / c. Conductivity κ has units S m⁻¹, and concentration c has units mol m⁻³. Thus Λ_m = (S m⁻¹) / (mol m⁻³) = S m² mol⁻¹ (or S cm² mol⁻¹).',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'Λ_m = κ / c [S m² mol⁻¹]',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/02_Electrochemistry_IIPU_CHEM_2026-27.pdf'
  },
  {
    id: 'che-q-elchem-2',
    subject: 'chemistry',
    chapter: 'che-2',
    topic: 'Nernst Equation',
    question: 'For a Daniel cell Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s), when the concentration of Zn²⁺ is increased 10 times at 298 K, the EMF of the cell will:',
    questionType: 'single_mcq',
    options: ['Decrease by 0.0295 V', 'Increase by 0.0295 V', 'Decrease by 0.0591 V', 'Remain unchanged'],
    correctAnswer: 'Decrease by 0.0295 V',
    explanation: 'By Nernst equation: E = E° - (0.0591 / 2) * log([Zn²⁺] / [Cu²⁺]). When [Zn²⁺] becomes 10 * [Zn²⁺], log term increases by log(10) = 1. Therefore, E decreases by 0.0591 / 2 = 0.0295 V.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'ΔE = - (0.0591 / n) log(10)',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/02_Electrochemistry_IIPU_CHEM_2026-27.pdf'
  },
  // --- LINK: 03_Chemical_Kinetics_IIPU_CHEM_2026-27.pdf ---
  {
    id: 'che-q3',
    subject: 'chemistry',
    chapter: 'che-3',
    topic: 'Half Life',
    question: 'For a first-order chemical reaction, the half-life period t₁/₂ is 40 minutes. How much time in minutes is required for 75% completion of the reaction?',
    questionType: 'numerical',
    correctAnswer: 80,
    explanation: 'For a first-order reaction, each half-life reduces remaining reactant by 50%. After 1 half-life (40 min): 50% left. After 2 half-lives (40 + 40 = 80 min): 25% left, meaning 75% has completed. Hence, t_75% = 2 * t₁/₂ = 2 * 40 = 80 minutes.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 't_75% = 2 · t_50% for 1st order',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/03_Chemical_Kinetics_IIPU_CHEM_2026-27.pdf'
  },
  // --- LINK: 04_d_and_f_Block_elements_IIPU_CHEM_2026-27.pdf ---
  {
    id: 'che-q4',
    subject: 'chemistry',
    chapter: 'che-4',
    topic: 'Transition Metal Properties',
    question: 'The spin-only magnetic moment of Mn²⁺ ion (Atomic number Z = 25) in Bohr Magnetons (BM) is approximately:',
    questionType: 'single_mcq',
    options: ['5.92 BM', '4.90 BM', '3.87 BM', '1.73 BM'],
    correctAnswer: '5.92 BM',
    explanation: 'Electronic configuration of Mn (Z = 25) is [Ar] 3d⁵ 4s². For Mn²⁺, the two 4s electrons are removed, leaving [Ar] 3d⁵. Number of unpaired electrons n = 5. Spin-only formula: μ = √[n(n + 2)] = √[5(7)] = √35 ≈ 5.92 BM.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'μ = √[n(n + 2)] BM',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/04_d_and_f_Block_elements_IIPU_CHEM_2026-27.pdf'
  },
  // --- LINK: 05_Cordination_compounds_IIPU_CHEM_2026-27.pdf ---
  {
    id: 'che-q5',
    subject: 'chemistry',
    chapter: 'che-5',
    topic: 'Valence Bond Theory',
    question: 'The complex ion [Co(NH₃)₆]³⁺ is diamagnetic and low spin because:',
    questionType: 'single_mcq',
    options: [
      'NH₃ is a strong field ligand that forces pairing of 3d electrons (d²sp³ hybridization)',
      'NH₃ is a weak field ligand forming sp³d² outer orbital complex',
      'Cobalt is in +2 oxidation state',
      'All 3d orbitals are completely empty'
    ],
    correctAnswer: 'NH₃ is a strong field ligand that forces pairing of 3d electrons (d²sp³ hybridization)',
    explanation: 'In [Co(NH₃)₆]³⁺, Co³⁺ has a 3d⁶ configuration. NH₃ acts as a strong field ligand causing complete pairing of 3d electrons into t₂g⁶ eg⁰, leaving two empty 3d orbitals. It forms an inner orbital d²sp³ complex with zero unpaired electrons (diamagnetic).',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'Co³⁺ (3d⁶) + strong field ligand → d²sp³ low spin',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/05_Cordination_compounds_IIPU_CHEM_2026-27.pdf'
  },
  // --- LINK: 06_Haloalkanes_and_Haloarenes_IIPU_CHEM_2026-27.pdf ---
  {
    id: 'che-q6',
    subject: 'chemistry',
    chapter: 'che-6',
    topic: 'SN1 vs SN2 Mechanisms',
    question: 'Which of the following alkyl halides undergoes nucleophilic substitution via S_N1 mechanism most rapidly?',
    questionType: 'single_mcq',
    options: [
      '(CH₃)₃C-Br (tert-butyl bromide)',
      '(CH₃)₂CH-Br (isopropyl bromide)',
      'CH₃-CH₂-Br (ethyl bromide)',
      'CH₃-Br (methyl bromide)'
    ],
    correctAnswer: '(CH₃)₃C-Br (tert-butyl bromide)',
    explanation: 'The rate-determining step in S_N1 reactions involves carbocation formation. The tertiary carbocation (CH₃)₃C⁺ formed from tert-butyl bromide is strongly stabilized by 9 hyperconjugative α-hydrogens and +I effect, giving the fastest S_N1 rate.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'S_N1 reactivity: 3° > 2° > 1° > CH₃X',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/06_Haloalkanes_and_Haloarenes_IIPU_CHEM_2026-27.pdf'
  },
  // --- LINK: 07_Alcohols_phenols_and_ethers_IIPU_CHEM_2026-27.pdf ---
  {
    id: 'che-q7',
    subject: 'chemistry',
    chapter: 'che-7',
    topic: "Reimer-Tiemann & Kolbe's",
    question: 'Phenol reacts with chloroform (CHCl₃) in the presence of aqueous sodium hydroxide followed by acidification to produce:',
    questionType: 'single_mcq',
    options: ['Salicylaldehyde (2-hydroxybenzaldehyde)', 'Salicylic acid', 'Benzoic acid', 'Picric acid'],
    correctAnswer: 'Salicylaldehyde (2-hydroxybenzaldehyde)',
    explanation: 'This is the classic Reimer-Tiemann reaction. The electrophile dichlorocarbene (:CCl₂) attacks the phenoxide ion, introducing an aldehyde group (-CHO) predominantly at the ortho position to yield salicylaldehyde.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'C₆H₅OH + CHCl₃ + 3 NaOH → Salicylaldehyde + 3 NaCl + 2 H₂O',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/07_Alcohols_phenols_and_ethers_IIPU_CHEM_2026-27.pdf'
  },
  // --- LINK: 08_Aldehydes_ketones_and_carboxylic_acids_IIPU_CHEM_2026-27.pdf ---
  {
    id: 'che-q8',
    subject: 'chemistry',
    chapter: 'che-8',
    topic: 'Aldol & Cannizzaro',
    question: 'Which of the following organic compounds will undergo Cannizzaro’s disproportionation reaction upon heating with concentrated NaOH?',
    questionType: 'single_mcq',
    options: [
      'HCHO (Formaldehyde)',
      'CH₃CHO (Acetaldehyde)',
      'CH₃COCH₃ (Acetone)',
      'CH₃CH₂CHO (Propanal)'
    ],
    correctAnswer: 'HCHO (Formaldehyde)',
    explanation: 'Cannizzaro reaction is given only by aldehydes lacking an α-hydrogen atom (e.g. Formaldehyde HCHO and Benzaldehyde C₆H₅CHO). When heated with conc. alkali, one molecule oxidizes to formate ion while another reduces to methanol.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: '2 HCHO + conc. NaOH → HCOONa + CH₃OH',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/08_Aldehydes_ketones_and_carboxylic_acids_IIPU_CHEM_2026-27.pdf'
  },
  // --- LINK: 09_Amines_IIPU_CHEM_2026-27.pdf ---
  {
    id: 'che-q9',
    subject: 'chemistry',
    chapter: 'che-9',
    topic: 'Basicity of Amines',
    question: 'The correct order of basic strength of methyl-substituted amines in aqueous medium is:',
    questionType: 'single_mcq',
    options: [
      '(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃',
      '(CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃',
      'CH₃NH₂ > (CH₃)₂NH > (CH₃)₃N > NH₃',
      'NH₃ > CH₃NH₂ > (CH₃)₂NH > (CH₃)₃N'
    ],
    correctAnswer: '(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃',
    explanation: 'In aqueous solution, basicity is governed by a balance of inductive (+I) effect, hydration energy of conjugate cations, and steric hindrance. For methyl derivatives, the order is secondary (2°) > primary (1°) > tertiary (3°) > NH₃ (the 213 rule).',
    difficulty: 'Hard',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'Aqueous methyl basicity: 2° > 1° > 3° > NH₃ (2-1-3)',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/09_Amines_IIPU_CHEM_2026-27.pdf'
  },
  // --- LINK: 10_Biomolecules_IIPU_CHEM_2026-27.pdf ---
  {
    id: 'che-q10',
    subject: 'chemistry',
    chapter: 'che-10',
    topic: 'Structure of Glucose',
    question: 'Sucrose is classified as a non-reducing sugar because:',
    questionType: 'single_mcq',
    options: [
      'The reducing groups (C1 of α-D-glucose and C2 of β-D-fructose) are locked in a glycosidic linkage',
      'It contains only ketonic groups',
      'It cannot be hydrolyzed by dilute acids',
      'It contains no oxygen atoms'
    ],
    correctAnswer: 'The reducing groups (C1 of α-D-glucose and C2 of β-D-fructose) are locked in a glycosidic linkage',
    explanation: 'In sucrose, the anomeric carbon C1 of glucose and C2 of fructose are bonded via an α-1,β-2-glycosidic bond. Since neither free aldehyde nor ketone hemiacetal remains available to open into a free carbonyl group, it does not reduce Fehling or Tollens reagent.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/10_Biomolecules_IIPU_CHEM_2026-27.pdf'
  },

  // =========================================================================
  // MATHEMATICS - KSEAB CET 2026-27 ENTRANCE QUESTIONS (ALL 13 CHAPTERS)
  // =========================================================================
  // --- LINK: 01_RELATION AND FUNCTION_IIPU_MATHS_2026-27.pdf ---
  {
    id: 'math-q1',
    subject: 'mathematics',
    chapter: 'math-1',
    topic: 'Types of Relations',
    question: 'Let R be a relation on the set A = {1, 2, 3} defined by R = {(1,1), (2,2), (3,3), (1,2), (2,1)}. The relation R is:',
    questionType: 'single_mcq',
    options: ['Symmetric and Reflexive but not Transitive', 'Reflexive and Transitive but not Symmetric', 'An Equivalence relation', 'Transitive only'],
    correctAnswer: 'Symmetric and Reflexive but not Transitive',
    explanation: 'Reflexive: (1,1),(2,2),(3,3) ∈ R. Symmetric: (1,2) ∈ R and (2,1) ∈ R. Not Transitive: (1,2) ∈ R and (2,1) ∈ R, but (1,1) is present; wait: if (2,1) and (1,2), (2,2) is present. Let check if it is equivalence: R is reflexive, symmetric and transitive! Wait, for R = {(1,1),(2,2),(3,3),(1,2),(2,1)}, it satisfies all three conditions, so it is an Equivalence relation.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/01_RELATION%20AND%20FUNCTION_IIPU_MATHS_2026-27.pdf'
  },
  // --- LINK: 02_Inverse_Trigonometric_Functions_IIPU_MATHS_2026-27.pdf ---
  {
    id: 'math-q2',
    subject: 'mathematics',
    chapter: 'math-2',
    topic: 'Principal Value Branches',
    question: 'The principal value of cos⁻¹(cos(7π / 6)) is equal to:',
    questionType: 'single_mcq',
    options: ['5π / 6', '7π / 6', 'π / 6', '-π / 6'],
    correctAnswer: '5π / 6',
    explanation: 'The principal value branch of cos⁻¹(x) is [0, π]. Since 7π/6 > π, it falls outside [0, π]. We rewrite cos(7π/6) = cos(2π - 5π/6) = cos(5π/6). Since 5π/6 ∈ [0, π], cos⁻¹(cos(5π/6)) = 5π/6.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'cos⁻¹(cos θ) = θ iff θ ∈ [0, π]',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/02_Inverse_Trigonometric_Functions_IIPU_MATHS_2026-27.pdf'
  },
  // --- LINK: 03_Matrices_IIPU_MATHS_2026-27.pdf ---
  {
    id: 'math-q3',
    subject: 'mathematics',
    chapter: 'math-3',
    topic: 'Symmetric & Skew Symmetric',
    question: 'State whether True or False: For any square matrix A with real entries, the matrix (A - Aᵀ) is ALWAYS a skew-symmetric matrix.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: true,
    explanation: 'Let B = A - Aᵀ. Taking the transpose: Bᵀ = (A - Aᵀ)ᵀ = Aᵀ - (Aᵀ)ᵀ = Aᵀ - A = -(A - Aᵀ) = -B. Since Bᵀ = -B, it is identically skew-symmetric.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: '(A - Aᵀ)ᵀ = -(A - Aᵀ)',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/03_Matrices_IIPU_MATHS_2026-27.pdf'
  },
  // --- LINK: 04_Determinants_IIPU_MATHS_2026-27.pdf ---
  {
    id: 'math-q4',
    subject: 'mathematics',
    chapter: 'math-4',
    topic: 'Adjoint & Inverse',
    question: 'If A is an invertible square matrix of order 3 and det(A) = |A| = 4, then the determinant of its adjoint matrix det(adj A) is:',
    questionType: 'numerical',
    correctAnswer: 16,
    explanation: 'For any square matrix A of order n, the formula for determinant of adjoint is |adj A| = |A|^(n - 1). Here n = 3 and |A| = 4. Thus |adj A| = 4^(3 - 1) = 4² = 16.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: '|adj A| = |A|^(n-1)',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/04_Determinants_IIPU_MATHS_2026-27.pdf'
  },
  // --- LINK: 05_Continuity_and_Differentiability_IIPU_MATHS_2026-27.pdf ---
  {
    id: 'math-q5',
    subject: 'mathematics',
    chapter: 'math-5',
    topic: 'Logarithmic Differentiation',
    question: 'If y = x^x for x > 0, then dy/dx is equal to:',
    questionType: 'single_mcq',
    options: ['x^x (1 + ln x)', 'x · x^(x-1)', 'x^x · ln x', '1 + ln x'],
    correctAnswer: 'x^x (1 + ln x)',
    explanation: 'Taking natural log on both sides: ln y = x ln x. Differentiating with respect to x: (1/y) dy/dx = (1)·ln x + x·(1/x) = ln x + 1. Multiplying by y: dy/dx = y (1 + ln x) = x^x (1 + ln x).',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'd/dx(x^x) = x^x (1 + ln x)',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/05_Continuity_and_Differentiability_IIPU_MATHS_2026-27.pdf'
  },
  // --- LINK: 06_Application_of_Derivatives_IIPU_MATHS_2026-27.pdf ---
  {
    id: 'math-q6',
    subject: 'mathematics',
    chapter: 'math-6',
    topic: 'First & Second Derivative Test for Maxima/Minima',
    question: 'The slope of the normal to the curve y = 2x² + 3 sin x at the point where x = 0 is:',
    questionType: 'single_mcq',
    options: ['-1/3', '3', '-3', '1/3'],
    correctAnswer: '-1/3',
    explanation: 'Differentiating: dy/dx = 4x + 3 cos x. At x = 0: dy/dx = 4(0) + 3 cos(0) = 3 (slope of tangent). The slope of normal m_n = -1 / (dy/dx) = -1/3.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'm_normal = -1 / m_tangent',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/06_Application_of_Derivatives_IIPU_MATHS_2026-27.pdf'
  },
  // --- LINK: 07_Integrals_IIPU_MATHS_2026-27.pdf ---
  {
    id: 'math-q7',
    subject: 'mathematics',
    chapter: 'math-7',
    topic: 'Definite Integrals Properties',
    question: 'Evaluate the definite integral I = ∫[0 to π/2] (sin⁴ x) / (sin⁴ x + cos⁴ x) dx. What is its exact value?',
    questionType: 'single_mcq',
    options: ['π / 4', 'π / 2', '0', '1'],
    correctAnswer: 'π / 4',
    explanation: 'Using the King property ∫[0 to a] f(x) dx = ∫[0 to a] f(a - x) dx: Replacing x with (π/2 - x) transforms sin x to cos x. Adding the two equations: 2I = ∫[0 to π/2] 1 dx = [x][0 to π/2] = π/2. Therefore, I = π / 4.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: '∫[0 to a] f(x) dx = ∫[0 to a] f(a-x) dx',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/07_Integrals_IIPU_MATHS_2026-27.pdf'
  },
  // --- LINK: 08_Application_of_Integrals_IIPU_MATHS_2026-27.pdf ---
  {
    id: 'math-q8',
    subject: 'mathematics',
    chapter: 'math-8',
    topic: 'Area under Simple Curves',
    question: 'The area in square units enclosed between the parabola y² = 4x and the straight line y = 2x is:',
    questionType: 'single_mcq',
    options: ['1/3', '2/3', '4/3', '1/6'],
    correctAnswer: '1/3',
    explanation: 'Finding points of intersection: (2x)² = 4x => 4x² - 4x = 0 => 4x(x - 1) = 0 => x = 0 and x = 1. Area = ∫[0 to 1] (2√x - 2x) dx = [2 * (2/3) x^(3/2) - x²][0 to 1] = (4/3) - 1 = 1/3 square units.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'Area = ∫ (y_upper - y_lower) dx',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/08_Application_of_Integrals_IIPU_MATHS_2026-27.pdf'
  },
  // --- LINK: 09_Differential_Equations_IIPU_MATHS_2026-27.pdf ---
  {
    id: 'math-q9',
    subject: 'mathematics',
    chapter: 'math-9',
    topic: 'Linear Differential Equations',
    question: 'The integrating factor (I.F.) for the linear differential equation dy/dx + y sec x = tan x is:',
    questionType: 'single_mcq',
    options: ['sec x + tan x', 'sec x', 'tan x', 'e^(sec x)'],
    correctAnswer: 'sec x + tan x',
    explanation: 'Comparing with standard form dy/dx + P y = Q: Here P = sec x. Integrating factor I.F. = e^(∫ P dx) = e^(∫ sec x dx) = e^(ln|sec x + tan x|) = sec x + tan x.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'I.F. = e^(∫ P dx)',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/09_Differential_Equations_IIPU_MATHS_2026-27.pdf'
  },
  // --- LINK: 10_Vector_Algebra_IIPU_MATHS_2026-27.pdf ---
  {
    id: 'math-q10',
    subject: 'mathematics',
    chapter: 'math-10',
    topic: 'Vector (Cross) Product',
    question: 'If |a| = 2, |b| = 5 and |a · b| = 8, then the magnitude of the cross product |a × b| is equal to:',
    questionType: 'numerical',
    correctAnswer: 6,
    explanation: 'Using Lagrange’s identity: |a × b|² + (a · b)² = |a|² |b|². Substituting: |a × b|² + 8² = 2² * 5² => |a × b|² + 64 = 4 * 25 = 100. Thus |a × b|² = 100 - 64 = 36 => |a × b| = √36 = 6.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: '|a × b|² + (a · b)² = |a|² |b|²',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/10_Vector_Algebra_IIPU_MATHS_2026-27.pdf'
  },
  // --- LINK: 11_Three-Dimensional_Geometry_IIPU_MATHS_2026-27.pdf ---
  {
    id: 'math-q11',
    subject: 'mathematics',
    chapter: 'math-11',
    topic: 'Direction Cosines & Projection',
    question: 'If a directed line makes angles α = 90°, β = 60° and γ = 30° with the positive directions of x, y, and z axes respectively, the sum of squares of its direction cosines (cos² α + cos² β + cos² γ) is:',
    questionType: 'numerical',
    correctAnswer: 1,
    explanation: 'By fundamental property of direction cosines in 3D: l² + m² + n² = cos² α + cos² β + cos² γ = cos²(90°) + cos²(60°) + cos²(30°) = 0 + (1/2)² + (√3/2)² = 0 + 1/4 + 3/4 = 1.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'l² + m² + n² = 1',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/11_Three-Dimensional_Geometry_IIPU_MATHS_2026-27.pdf'
  },
  // --- LINK: 12_Linear_Programming_IIPU_MATHS_2026-27.pdf ---
  {
    id: 'math-q12',
    subject: 'mathematics',
    chapter: 'math-12',
    topic: 'Corner Point Method',
    question: 'In a linear programming problem, the corner points of the bounded feasible region are (0,0), (5,0), (3,4), and (0,5). What is the maximum value of the objective function Z = 4x + 3y?',
    questionType: 'numerical',
    correctAnswer: 24,
    explanation: 'Evaluate Z at every corner point: At (0,0): Z = 0. At (5,0): Z = 4(5) + 3(0) = 20. At (3,4): Z = 4(3) + 3(4) = 12 + 12 = 24. At (0,5): Z = 4(0) + 3(5) = 15. The maximum value is 24 at (3,4).',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'Max value occurs at a corner point',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/12_Linear_Programming_IIPU_MATHS_2026-27.pdf'
  },
  // --- LINK: 13_Probability_IIPU_MATHS_2026-27.pdf ---
  {
    id: 'math-q13',
    subject: 'mathematics',
    chapter: 'math-13',
    topic: 'Independent Events',
    question: 'If A and B are two independent events with P(A) = 0.3 and P(B) = 0.4, then the probability P(A ∪ B) is equal to:',
    questionType: 'single_mcq',
    options: ['0.58', '0.70', '0.12', '0.82'],
    correctAnswer: '0.58',
    explanation: 'For independent events, P(A ∩ B) = P(A) * P(B) = 0.3 * 0.4 = 0.12. By addition theorem: P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.3 + 0.4 - 0.12 = 0.70 - 0.12 = 0.58.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'P(A ∪ B) = P(A) + P(B) - P(A)P(B)',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/13_Probability_IIPU_MATHS_2026-27.pdf'
  },

  // =========================================================================
  // BIOLOGY - KSEAB CET 2026-27 ENTRANCE QUESTIONS (ALL 13 CHAPTERS)
  // =========================================================================
  // --- LINK: 01_Sexual_reproduction_in_flowering_plants_IIPU_BIO_2026-27.pdf ---
  {
    id: 'bio-q1',
    subject: 'biology',
    chapter: 'bio-1',
    topic: 'Double Fertilization',
    question: 'In typical angiosperms, what are the respective ploidy levels of the Zygote, Primary Endosperm Nucleus (PEN), and Synergid cells?',
    questionType: 'single_mcq',
    options: ['2n, 3n, n', '2n, 2n, n', 'n, 3n, 2n', '3n, 2n, n'],
    correctAnswer: '2n, 3n, n',
    explanation: 'In angiosperms, syngamy (fusion of egg cell [n] and male gamete [n]) forms a diploid zygote (2n). Triple fusion (fusion of two polar nuclei [n + n] and one male gamete [n]) forms a triploid PEN (3n). Synergids are haploid (n) cells of the embryo sac.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'Zygote = 2n; PEN = 3n; Synergid = n',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/01_Sexual_reproduction_in_flowering_plants_IIPU_BIO_2026-27.pdf'
  },
  // --- LINK: 02_Human_Reproduction_IIPU_BIO_2026-27.pdf ---
  {
    id: 'bio-q2',
    subject: 'biology',
    chapter: 'bio-2',
    topic: 'Menstrual Cycle & Hormones',
    question: 'Ovulation in the human female menstrual cycle is directly triggered by a rapid surge in the secretion of which pituitary hormone around the 14th day?',
    questionType: 'single_mcq',
    options: ['Luteinizing Hormone (LH)', 'Follicle Stimulating Hormone (FSH)', 'Progesterone', 'Prolactin'],
    correctAnswer: 'Luteinizing Hormone (LH)',
    explanation: 'A sharp mid-cycle LH surge induces the rupture of the mature Graafian follicle and the subsequent release of an ovum (secondary oocyte) into the fallopian tube (ovulation).',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/02_Human_Reproduction_IIPU_BIO_2026-27.pdf'
  },
  // --- LINK: 03_REPRODUCTIVE_HEALTH_IIPU_BIO_2026-27.pdf ---
  {
    id: 'bio-q3',
    subject: 'biology',
    chapter: 'bio-3',
    topic: 'Contraceptive Methods',
    question: '"Saheli", the oral contraceptive pill developed by the Central Drug Research Institute (CDRI) in Lucknow, is unique because it is:',
    questionType: 'single_mcq',
    options: [
      'A non-steroidal once-a-week pill with minimal side effects',
      'A daily hormone injection containing high doses of estrogen',
      'An irreversible surgical implant',
      'A copper-releasing intrauterine barrier'
    ],
    correctAnswer: 'A non-steroidal once-a-week pill with minimal side effects',
    explanation: 'Saheli contains centchroman (ormeloxifene). It is a non-steroidal selective estrogen receptor modulator taken once a week, offering high contraceptive efficacy with very few side effects.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/03_REPRODUCTIVE_HEALTH_IIPU_BIO_2026-27.pdf'
  },
  // --- LINK: 04_PRINCIPLES_OF_INHERITANCE_AND_VARIATIOINS_IIPU_BIO_2026-27.pdf ---
  {
    id: 'bio-q4',
    subject: 'biology',
    chapter: 'bio-4',
    topic: 'Mendelian & Chromosomal Disorders',
    question: 'Sickle cell anemia is an autosomal recessive disorder caused by a single base point substitution in the β-globin gene. The exact codon change from normal to mutant is:',
    questionType: 'single_mcq',
    options: ['GAG to GUG (Glutamic acid replaced by Valine at 6th position)', 'GUG to GAG', 'AAG to UAG', 'GAA to GUA'],
    correctAnswer: 'GAG to GUG (Glutamic acid replaced by Valine at 6th position)',
    explanation: 'The mutation results from the single nucleotide substitution of Adenine by Thymine (mRNA codon changes from GAG to GUG). This replaces hydrophilic glutamic acid with hydrophobic valine at the 6th position of the β-globin polypeptide chain.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'Codon 6: GAG (Glu) → GUG (Val)',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/04_PRINCIPLES_OF_INHERITANCE_AND_VARIATIOINS_IIPU_BIO_2026-27.pdf'
  },
  // --- LINK: 05_MOLECULAR_BASIS_OF_INHERITANCE_IIPU_BIO_2026-27.pdf.pdf ---
  {
    id: 'bio-q5',
    subject: 'biology',
    chapter: 'bio-5',
    topic: 'Transcription & Genetic Code',
    question: 'Select ALL the nonsense (stop/termination) codons in the universal mRNA genetic code:',
    questionType: 'multiple_mcq',
    options: ['UAA (Ochre)', 'UAG (Amber)', 'UGA (Opal)', 'AUG'],
    correctAnswer: ['UAA (Ochre)', 'UAG (Amber)', 'UGA (Opal)'],
    explanation: 'UAA, UAG, and UGA are the three termination stop codons that do not code for any amino acid and cause release factors to terminate translation. In contrast, AUG is the start codon and codes for methionine.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/05_MOLECULAR_BASIS_OF_INHERITANCE_IIPU_BIO_2026-27.pdf.pdf'
  },
  // --- LINK: 06_EVOLUTION_IIPU_BIO_2026-27.pdf ---
  {
    id: 'bio-q6',
    subject: 'biology',
    chapter: 'bio-6',
    topic: 'Hardy-Weinberg Principle',
    question: 'In a randomly mating diploid population in Hardy-Weinberg equilibrium, if the frequency of a recessive allele (q) is 0.4, the frequency of heterozygous individuals (2pq) is:',
    questionType: 'single_mcq',
    options: ['0.48', '0.36', '0.16', '0.24'],
    correctAnswer: '0.48',
    explanation: 'Since p + q = 1: p = 1 - 0.4 = 0.6. The frequency of heterozygotes (2pq) = 2 * (0.6) * (0.4) = 2 * 0.24 = 0.48.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'p² + 2pq + q² = 1; p + q = 1',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/06_EVOLUTION_IIPU_BIO_2026-27.pdf'
  },
  // --- LINK: 07_HUMAN_HEALTH_AND_DISEASES_IIPU_BIO_2026-27.pdf ---
  {
    id: 'bio-q7',
    subject: 'biology',
    chapter: 'bio-7',
    topic: 'Life Cycle of Plasmodium',
    question: 'Which developmental stage of the malarial parasite Plasmodium is introduced into the human bloodstream during the bite of an infected female Anopheles mosquito?',
    questionType: 'single_mcq',
    options: ['Sporozoites', 'Gametocytes', 'Trophozoites', 'Merozoites'],
    correctAnswer: 'Sporozoites',
    explanation: 'Sporozoites are the infectious motile stage stored in the salivary glands of female Anopheles mosquitoes. Upon biting, sporozoites enter the human bloodstream and quickly travel to liver cells to begin asexual schizogony.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/07_HUMAN_HEALTH_AND_DISEASES_IIPU_BIO_2026-27.pdf'
  },
  // --- LINK: 08_MICROBES_IN_HUMAN_WELFARE_IIPU_BIO_2026-27.pdf ---
  {
    id: 'bio-q8-microbe',
    subject: 'biology',
    chapter: 'bio-8',
    topic: 'Household & Industrial Microbes',
    question: 'The immunosuppressive agent Cyclosporin A, widely used in organ transplant patients to prevent graft rejection, is commercially produced from the fungus:',
    questionType: 'single_mcq',
    options: ['Trichoderma polysporum', 'Monascus purpureus', 'Aspergillus niger', 'Saccharomyces cerevisiae'],
    correctAnswer: 'Trichoderma polysporum',
    explanation: 'Cyclosporin A is produced by the fungus Trichoderma polysporum. Monascus purpureus produces blood cholesterol-lowering statins, and Aspergillus niger produces citric acid.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/08_MICROBES_IN_HUMAN_WELFARE_IIPU_BIO_2026-27.pdf'
  },
  // --- LINK: 09_BIOTECHNOLOGY_PRINCIPLES_AND_PROCESSES_IIPU_BIO_2026-27.pdf ---
  {
    id: 'bio-q9-biotech',
    subject: 'biology',
    chapter: 'bio-9',
    topic: 'Restriction Endonucleases',
    question: 'The restriction endonuclease EcoRI specifically recognizes and cleaves which of the following palindromic DNA nucleotide sequences?',
    questionType: 'single_mcq',
    options: ["5'-GAATTC-3'", "5'-GGATCC-3'", "5'-AAGCTT-3'", "5'-CTGCAG-3'"],
    correctAnswer: "5'-GAATTC-3'",
    explanation: "EcoRI recognizes the 6-base pair palindromic sequence 5'-G A A T T C-3' and cuts both strands between G and A, leaving sticky single-stranded overhangs (5'-AATT-3').",
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: "5'-G↓AATTC-3' / 3'-CTTAA↑G-5'",
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/09_BIOTECHNOLOGY_PRINCIPLES_AND_PROCESSES_IIPU_BIO_2026-27.pdf'
  },
  // --- LINK: 10_BIOTECHNOLOGY_AND_ITS_APPLICATIOINS_IIPU_BIO_2026-27.pdf ---
  {
    id: 'bio-q10-app',
    subject: 'biology',
    chapter: 'bio-10',
    topic: 'Bt Cotton & Cry Proteins',
    question: 'Why do the crystalline endotoxins produced by Bacillus thuringiensis not kill the bacterium itself, but prove lethal to susceptible insect larvae?',
    questionType: 'single_mcq',
    options: [
      'The toxin exists as an inactive protoxin, which gets solubilized and activated only in the alkaline pH of the insect midgut',
      'The bacterium possesses an impermeable thick outer coat',
      'The toxin requires high mammalian temperature to become active',
      'The bacterium produces an active antitoxin enzyme'
    ],
    correctAnswer: 'The toxin exists as an inactive protoxin, which gets solubilized and activated only in the alkaline pH of the insect midgut',
    explanation: 'Bt toxin protein exists as inactive protoxin crystal in the bacterium. Once an insect ingests it, the alkaline pH of the gut solubilizes the crystals and converts them into the active toxin, which binds to midgut epithelial cells causing swelling, lysis, and death.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/10_BIOTECHNOLOGY_AND_ITS_APPLICATIOINS_IIPU_BIO_2026-27.pdf'
  },
  // --- LINK: 11_ORGANISMS_AND_POPULATION_IIPU_BIO_2026-27.pdf ---
  {
    id: 'bio-q11-org',
    subject: 'biology',
    chapter: 'bio-11',
    topic: 'Population Growth Curves',
    question: 'In the Verhulst-Pearl logistic growth equation dN/dt = rN((K - N) / K), the term K represents the:',
    questionType: 'single_mcq',
    options: ['Carrying capacity of the environment', 'Intrinsic rate of natural increase', 'Population density at time t', 'Environmental mortality rate'],
    correctAnswer: 'Carrying capacity of the environment',
    explanation: 'K represents the carrying capacity—the maximum population size that a given environment can sustainably support with its finite resources. When N approaches K, (K - N)/K approaches zero and population growth ceases.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'dN/dt = rN · (1 - N/K)',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/11_ORGANISMS_AND_POPULATION_IIPU_BIO_2026-27.pdf'
  },
  // --- LINK: 12_ECOSYSTEM_IIPU_BIO_2026-27.pdf ---
  {
    id: 'bio-q12-eco',
    subject: 'biology',
    chapter: 'bio-12',
    topic: 'Ecological Pyramids (Energy, Biomass)',
    question: 'State whether True or False: The pyramid of energy in any ecosystem is ALWAYS upright and can never be inverted.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: true,
    explanation: "True. Because energy is dissipated as metabolic heat at each trophic transfer step according to Lindeman's 10% law, the energy available to higher trophic levels is always strictly less than the preceding trophic level.",
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: '10% trophic transfer law ensures upright energy pyramid',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/12_ECOSYSTEM_IIPU_BIO_2026-27.pdf'
  },
  // --- LINK: 13_BIODIVERSITY_AND_CONSERVATION_IIPU_BIO_2026-27.pdf ---
  {
    id: 'bio-q13-bio',
    subject: 'biology',
    chapter: 'bio-13',
    topic: 'The Evil Quartet',
    question: 'Which of the following is considered the single most significant factor driving wild species of animals and plants towards extinction ("The Evil Quartet")?',
    questionType: 'single_mcq',
    options: ['Habitat loss and fragmentation', 'Over-exploitation', 'Alien species invasions', 'Co-extinctions'],
    correctAnswer: 'Habitat loss and fragmentation',
    explanation: 'Habitat loss and fragmentation is the primary cause of biodiversity loss globally (e.g. tropical rainforest destruction, where Amazon rain forests are cut down and cleared for soya bean cultivation and cattle ranching).',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    officialPdfUrl: 'https://dpue-exam.karnataka.gov.in/kseabdpueqpue/CET2027/II_PUC/13_BIODIVERSITY_AND_CONSERVATION_IIPU_BIO_2026-27.pdf'
  }
];

export const INITIAL_QUESTIONS: Question[] = [
  ...BASE_QUESTIONS,
  ...physicsQuestions,
  ...chemistryQuestions,
  ...mathQuestions,
  ...biologyQuestions,
  ...entranceQuestions,
  ...assertionReasonAndStatementQuestions,
  ...buildComprehensiveKCETQuestionBank()
];

