import { Question } from '../../types';

// Standard 4 Assertion-Reason Options in Board & KCET/NEET:
// Option A: Both (A) and (R) are true and (R) is the correct explanation of (A)
// Option B: Both (A) and (R) are true but (R) is NOT the correct explanation of (A)
// Option C: (A) is true but (R) is false
// Option D: (A) is false but (R) is true (or Both (A) and (R) are false)

// Standard 4 Statement-Based Options:
// Option A: Both Statement I and Statement II are correct
// Option B: Both Statement I and Statement II are incorrect
// Option C: Statement I is correct but Statement II is incorrect
// Option D: Statement I is incorrect but Statement II is correct

export const assertionReasonAndStatementQuestions: Question[] = [
  // =========================================================================
  // PHYSICS - II PUC & KCET ASSERTION & REASON + STATEMENT QUESTIONS
  // =========================================================================
  {
    id: 'ar-phy-1',
    subject: 'physics',
    chapter: 'phy-1',
    topic: "Gauss's Law & Electric Dipoles",
    question: `Given below are two statements labeled as Assertion (A) and Reason (R):
Assertion (A): The net electric flux through any Gaussian surface enclosing an electric dipole is always zero.
Reason (R): The net charge on an electric dipole consisting of charges +q and -q is identically zero.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'By Gauss’s Law, Φ = Q_net / ε₀. An electric dipole has equal and opposite charges (+q and -q), so Q_net = 0. Therefore, Φ = 0 / ε₀ = 0. Thus, Reason (R) correctly explains Assertion (A).',
    difficulty: 'Easy',
    source: 'KCET / KSEAB Model Bank',
    year: '2026',
    formulaNote: 'Φ = ∮ E · dA = Q_enclosed / ε₀',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ವಿದ್ಯುತ್ ದ್ವಿಧ್ರುವವನ್ನು ಆವರಿಸಿರುವ ಯಾವುದೇ ಗೌಸಿಯನ್ ಮೇಲ್ಮೈ ಮೂಲಕ ಹಾದುಹೋಗುವ ಒಟ್ಟು ವಿದ್ಯುತ್ ಪ್ರವಾಹ (ಫ್ಲಕ್ಸ್) ಯಾವಾಗಲೂ ಶೂನ್ಯವಾಗಿರುತ್ತದೆ.
ಕಾರಣ (R): +q ಮತ್ತು -q ಆವೇಶಗಳನ್ನು ಹೊಂದಿರುವ ವಿದ್ಯುತ್ ದ್ವಿಧ್ರುವದ ಮೇಲಿನ ನಿವ್ವಳ ಆವೇಶ ಶೂನ್ಯವಾಗಿರುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿದೆ ಮತ್ತು (R) ಎಂಬುದು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ.',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ಎಂಬುದು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ.',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ.',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ.'
    ]
  },
  {
    id: 'stmt-phy-1',
    subject: 'physics',
    chapter: 'phy-1',
    topic: 'Electric Field Lines',
    question: `Evaluate the following two statements regarding electrostatic field lines:
Statement I: Electrostatic field lines never form closed loops because the electrostatic field is conservative.
Statement II: Two electric field lines never cross each other because at the intersection point, there would be two unique directions of the electric field, which is impossible.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct.',
    explanation: 'Both statements are fundamental properties of electric field lines. Statement I is true because conservative fields have ∮ E · dr = 0, preventing continuous closed loops starting and ending on the same charge. Statement II is true because the tangent gives the direction of the net field, which must be unique.',
    difficulty: 'Medium',
    source: 'KCET PYQ / KSEAB',
    year: '2025',
    questionKannada: `ವಿದ್ಯುತ್ ಕ್ಷೇತ್ರ ರೇಖೆಗಳಿಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ:
ಹೇಳಿಕೆ I: ಸ್ಥಿರವಿದ್ಯುತ್ ಕ್ಷೇತ್ರ ರೇಖೆಗಳು ಎಂದಿಗೂ ಮುಚ್ಚಿದ ಕುಣಿಕೆಗಳನ್ನು (closed loops) ರೂಪಿಸುವುದಿಲ್ಲ.
ಹೇಳಿಕೆ II: ಎರಡು ವಿದ್ಯುತ್ ಕ್ಷೇತ್ರ ರೇಖೆಗಳು ಎಂದಿಗೂ ಒಂದನ್ನೊಂದು ಛೇದಿಸುವುದಿಲ್ಲ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ.',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ.',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ.',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ.'
    ]
  },
  {
    id: 'ar-phy-2',
    subject: 'physics',
    chapter: 'phy-2',
    topic: 'Equipotential Surfaces & Dielectrics',
    question: `Assertion (A): The work done in moving an electric charge between any two points on an equipotential surface is zero.
Reason (R): On an equipotential surface, the electric field is everywhere perpendicular to the surface at every point.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'Work done W = ∫ F · dr = q₀ ∫ E · dr = q₀ E dr cos(90°) = 0, because E is perpendicular to the equipotential displacement dr. Hence (R) is the correct explanation of (A).',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27',
    year: '2026-27',
    formulaNote: 'W = q · ΔV = q · (E · dr) = 0'
  },
  {
    id: 'stmt-phy-2',
    subject: 'physics',
    chapter: 'phy-2',
    topic: 'Capacitor with Dielectric Slab',
    question: `Statement I: When a dielectric slab of constant K is inserted between the plates of an isolated charged capacitor (disconnected from the battery), its capacitance increases by a factor of K while the stored energy decreases.
Statement II: If the capacitor remains connected to a battery while the dielectric is introduced, the potential difference across the plates remains constant while the stored energy increases by a factor of K.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct.',
    explanation: 'For isolated capacitor: Q is constant, C becomes KC, so U = Q²/(2KC) = U₀/K (energy decreases). For battery connected: V is constant, C becomes KC, so U = 1/2 (KC) V² = K U₀ (energy increases). Both statements are accurate.',
    difficulty: 'Hard',
    source: 'KCET High-Yield Drill',
    year: '2025'
  },
  {
    id: 'ar-phy-3',
    subject: 'physics',
    chapter: 'phy-3',
    topic: 'Current Electricity & Temperature Coefficient',
    question: `Assertion (A): The electrical resistance of metallic conductors increases with increase in temperature, whereas for semiconductors it decreases.
Reason (R): For metals, relaxation time decreases with temperature due to increased lattice vibrations, while in semiconductors, the free charge carrier density increases exponentially with temperature.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'Resistivity ρ = m / (n e² τ). In metals n is almost constant so decreasing τ increases ρ. In semiconductors, the exponential increase in n dominates over the slight decrease in τ, reducing ρ.',
    difficulty: 'Medium',
    source: 'KCET 2024 / Board Model',
    year: '2024'
  },
  {
    id: 'stmt-phy-3',
    subject: 'physics',
    chapter: 'phy-3',
    topic: "Kirchhoff's Laws",
    question: `Statement I: Kirchhoff's Junction Rule (Current Law) is based on the law of conservation of electric charge.
Statement II: Kirchhoff's Loop Rule (Voltage Law) is based on the law of conservation of mechanical momentum.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Statement I is correct but Statement II is incorrect.',
    explanation: 'Kirchhoff’s Loop Rule is based on the conservation of ENERGY, not momentum (as the net work done in taking a charge around any closed loop in an electrostatic field is zero). Statement I is correct (conservation of charge), Statement II is false.',
    difficulty: 'Easy',
    source: 'KSEAB II PUC 2024'
  },
  {
    id: 'ar-phy-4',
    subject: 'physics',
    chapter: 'phy-4',
    topic: 'Magnetic Lorentz Force & Work Done',
    question: `Assertion (A): A magnetic force does no work on a moving charged particle in a magnetic field.
Reason (R): The magnetic force F_m = q (v × B) is always perpendicular to the velocity vector v of the charged particle at all instants.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'Power delivered by magnetic force P = F · v = [q (v × B)] · v = 0 because the cross product (v × B) is perpendicular to v. Since power is zero, instantaneous work done dW = P dt = 0. Reason correctly explains Assertion.',
    difficulty: 'Easy',
    source: 'KCET 2023 / KSEAB'
  },
  {
    id: 'stmt-phy-4',
    subject: 'physics',
    chapter: 'phy-4',
    topic: 'Cyclotron & Galvanometer',
    question: `Statement I: A cyclotron cannot accelerate uncharged particles such as neutrons or ultra-relativistic electrons.
Statement II: A galvanometer can be converted into a voltmeter by connecting a very small shunt resistance in parallel with its coil.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Statement I is correct but Statement II is incorrect.',
    explanation: 'Statement I is true because cyclotrons rely on electric fields which exert force only on charged particles. Statement II is false: a galvanometer is converted into a voltmeter by connecting a HIGH resistance in SERIES (parallel low resistance converts it into an ammeter).',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27'
  },
  {
    id: 'ar-phy-5',
    subject: 'physics',
    chapter: 'phy-5',
    topic: "Gauss's Law in Magnetism",
    question: `Assertion (A): The net magnetic flux through any closed Gaussian surface is always zero (∮ B · dA = 0).
Reason (R): Isolated magnetic monopoles do not exist; magnetic poles always occur in equal and opposite dipoles.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'Gauss’s law for magnetism states that magnetic flux through any closed surface is zero because there are no magnetic monopoles to act as isolated sources or sinks of magnetic field lines.',
    difficulty: 'Easy',
    source: 'KCET PYQ'
  },
  {
    id: 'ar-phy-6',
    subject: 'physics',
    chapter: 'phy-6',
    topic: "Lenz's Law & Conservation of Energy",
    question: `Assertion (A): The polarity of induced electromotive force (emf) is such that it opposes the change in magnetic flux that produces it.
Reason (R): Lenz's Law is a direct consequence of the law of conservation of energy.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'If the induced current aided the change instead of opposing it, a small displacement would generate infinite kinetic energy without external work, violating conservation of energy. Mechanical work done against the opposing induced force transforms into electrical energy.',
    difficulty: 'Easy',
    source: 'KSEAB Board Exam'
  },
  {
    id: 'stmt-phy-7',
    subject: 'physics',
    chapter: 'phy-7',
    topic: 'LCR Resonance & Power Factor',
    question: `Statement I: In a series LCR resonant circuit, the impedance is purely resistive and minimum (Z = R), while the current amplitude reaches its maximum.
Statement II: In a purely inductive or purely capacitive AC circuit, the average power dissipated over a complete cycle is non-zero and equals V_rms × I_rms.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Statement I is correct but Statement II is incorrect.',
    explanation: 'Statement I is correct: at resonance ωL = 1/(ωC), so Z = R. Statement II is incorrect: in purely reactive circuits, phase angle φ = 90°, cos φ = 0, so average power P_avg = V_rms I_rms cos(90°) = 0 (wattless current).',
    difficulty: 'Medium',
    source: 'KCET 2025 Model'
  },
  {
    id: 'ar-phy-8',
    subject: 'physics',
    chapter: 'phy-8',
    topic: 'Displacement Current & Maxwell Equations',
    question: `Assertion (A): A time-varying electric field produces a magnetic field even in regions devoid of free conduction charges.
Reason (R): Maxwell introduced the concept of displacement current I_d = ε₀ (dΦ_E / dt) to maintain the continuity of electric current across capacitor plates.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'Maxwell showed that Ampere’s circuital law was inconsistent for time-dependent electric fields and generalized it by adding displacement current I_d = ε₀ dΦ_E/dt as a source of magnetic fields.',
    difficulty: 'Medium',
    source: 'KCET 2024'
  },
  {
    id: 'stmt-phy-9',
    subject: 'physics',
    chapter: 'phy-9',
    topic: 'Total Internal Reflection & Lenses',
    question: `Statement I: Total internal reflection occurs only when light travels from an optically denser medium into a rarer medium at an angle of incidence greater than the critical angle.
Statement II: When a convex glass lens (μ = 1.5) is immersed in water (μ = 1.33), its focal length decreases compared to its focal length in air.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Statement I is correct but Statement II is incorrect.',
    explanation: 'Statement I is the exact condition for TIR. Statement II is false: by Lens Maker’s Formula, 1/f = (μ_rel - 1)(1/R₁ - 1/R₂). Since (1.5/1.33 - 1) is much smaller than (1.5/1 - 1), the focal length in water INCREASES (approx. 4 times).',
    difficulty: 'Medium',
    source: 'KCET 2024'
  },
  {
    id: 'ar-phy-10',
    subject: 'physics',
    chapter: 'phy-10',
    topic: 'Wave Optics & Interference',
    question: `Assertion (A): When light passes through two narrow coherent slits, an interference pattern of alternate bright and dark fringes is formed on a screen.
Reason (R): Interference of light obeys the law of conservation of energy; light energy is simply redistributed from regions of destructive interference to constructive interference.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
    explanation: 'Both statements are scientifically correct. However, Reason (R) states the conservation of energy during interference, while the actual cause for fringe formation is the spatial superposition of coherent wave trains resulting in path differences of nλ or (2n-1)λ/2. Thus (R) is not the causal explanation.',
    difficulty: 'Hard',
    source: 'KCET 2025 Practice'
  },
  {
    id: 'ar-phy-11',
    subject: 'physics',
    chapter: 'phy-11',
    topic: 'Photoelectric Effect',
    question: `Assertion (A): In photoelectric emission, the maximum kinetic energy of emitted photoelectrons depends linearly on the frequency of incident radiation and is independent of its intensity.
Reason (R): Each photon of energy hν transfers its entire energy to a single electron in the metal surface in a one-to-one instantaneous quantum interaction.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'By Einstein’s equation, K_max = hν - Φ₀. Because photon-electron collisions are one-to-one, higher frequency increases photon energy and hence K_max, while intensity merely increases photon flux (number of photoelectrons), not individual kinetic energy.',
    difficulty: 'Easy',
    source: 'KSEAB Board Model'
  },
  {
    id: 'stmt-phy-12',
    subject: 'physics',
    chapter: 'phy-12',
    topic: "Bohr's Atomic Model",
    question: `Statement I: According to Bohr's postulate, an electron revolves around the nucleus only in non-radiating stationary orbits where its orbital angular momentum is an integral multiple of h / (2π).
Statement II: The radius of the nth orbit in hydrogen atom is directly proportional to n and inversely proportional to the mass of the electron.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Statement I is correct but Statement II is incorrect.',
    explanation: 'Statement I is Bohr’s quantization condition (L = mvr = nh/2π). Statement II is incorrect because radius r_n = (ε₀ n² h²) / (π m e² Z) ∝ n² (proportional to n SQUARED, not n).',
    difficulty: 'Medium',
    source: 'KCET High-Yield'
  },
  {
    id: 'ar-phy-13',
    subject: 'physics',
    chapter: 'phy-13',
    topic: 'Nuclear Binding Energy & Stability',
    question: `Assertion (A): Iron (⁵⁶Fe) is among the most tightly bound and stable nuclei in the universe.
Reason (R): The binding energy per nucleon (E_bn) curve peaks around mass number A = 56 with a value of approximately 8.75 MeV/nucleon.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'Nuclear stability is directly governed by binding energy per nucleon. Fe-56 has one of the highest values (~8.75 MeV), making it exceptionally stable.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27'
  },
  {
    id: 'stmt-phy-14',
    subject: 'physics',
    chapter: 'phy-14',
    topic: 'Semiconductors & p-n Junction Diode',
    question: `Statement I: In forward biasing of a p-n junction diode, the width of the depletion layer decreases and the barrier potential is reduced.
Statement II: An ideal p-n junction diode offers zero resistance in forward bias and infinite resistance in reverse bias.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct.',
    explanation: 'In forward bias, external field opposes built-in field, narrowing the depletion layer. An ideal diode acts as a closed switch (zero resistance) in forward bias and open switch (infinite resistance) in reverse bias.',
    difficulty: 'Easy',
    source: 'KSEAB Board Model'
  },

  // =========================================================================
  // CHEMISTRY - II PUC & KCET ASSERTION & REASON + STATEMENT QUESTIONS
  // =========================================================================
  {
    id: 'ar-chem-1',
    subject: 'chemistry',
    chapter: 'che-1',
    topic: "Solutions & Henry's Law / Raoult's Law",
    question: `Assertion (A): Aquatic animals feel more comfortable in cold water than in warm water.
Reason (R): According to Henry's law, the solubility of gases in liquids decreases with increasing temperature as gas dissolution is an exothermic process.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'Gas + Solvent ⇌ Solution + Heat. By Le Chatelier’s principle, lowering temperature shifts equilibrium rightward, increasing dissolved O₂ concentration in cold water. Reason (R) directly explains Assertion (A).',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27'
  },
  {
    id: 'stmt-chem-1',
    subject: 'chemistry',
    chapter: 'che-1',
    topic: 'Colligative Properties & Van’t Hoff Factor',
    question: `Statement I: Equimolar (0.1 M) aqueous solutions of glucose, sodium chloride (NaCl), and barium chloride (BaCl₂) show identical depression in freezing point.
Statement II: Freezing point depression is a colligative property that depends solely on the number of solute particles present in solution, not on their chemical identity.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Statement I is incorrect but Statement II is correct.',
    explanation: 'Statement I is false because NaCl dissociates into 2 ions (i = 2) and BaCl₂ into 3 ions (i = 3), whereas glucose does not dissociate (i = 1). ΔT_f = i K_f m, so BaCl₂ produces the greatest depression. Statement II is the correct definition of colligative properties.',
    difficulty: 'Medium',
    source: 'KCET High-Yield Drill'
  },
  {
    id: 'ar-chem-2',
    subject: 'chemistry',
    chapter: 'che-2',
    topic: 'Electrochemistry & Molar Conductivity',
    question: `Assertion (A): Molar conductivity (Λ_m) of both strong and weak electrolytes increases upon dilution of their aqueous solutions.
Reason (R): For weak electrolytes, dilution increases the degree of dissociation (α), whereas for strong electrolytes, dilution increases the distance between ions and reduces interionic attractions.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'Λ_m = κ × (1000/M). Upon dilution, weak electrolytes dissociate further (Ostwald’s dilution law), increasing total mobile ions. Strong electrolytes are already completely dissociated, but dilution separates ions, boosting their ionic mobility.',
    difficulty: 'Medium',
    source: 'KSEAB Model Papers'
  },
  {
    id: 'stmt-chem-2',
    subject: 'chemistry',
    chapter: 'che-2',
    topic: 'Standard Reduction Potentials & Spontaneity',
    question: `Statement I: A redox reaction is thermodynamically spontaneous when the standard cell potential E°_cell is positive and standard Gibbs energy change ΔG° is negative.
Statement II: Copper can displace hydrogen gas from dilute hydrochloric acid because its standard reduction potential E°(Cu²⁺/Cu) = +0.34 V is higher than standard hydrogen electrode (0.00 V).`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Statement I is correct but Statement II is incorrect.',
    explanation: 'ΔG° = -n F E°_cell. For spontaneity, E°_cell > 0 and ΔG° < 0. Statement II is false because copper has a POSITIVE standard reduction potential, meaning it is less easily oxidized than hydrogen; hence it CANNOT reduce H⁺ to H₂ gas.',
    difficulty: 'Medium',
    source: 'KCET 2024'
  },
  {
    id: 'ar-chem-3',
    subject: 'chemistry',
    chapter: 'che-3',
    topic: 'Chemical Kinetics: Order vs Molecularity',
    question: `Assertion (A): The molecularity of a chemical reaction can never be zero, negative, or fractional.
Reason (R): Molecularity is defined as the number of reacting species taking part in an elementary reaction which must collide simultaneously in order to bring about a chemical reaction.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'A collision requires at least one, two, or three whole molecules colliding together. You cannot have zero molecules colliding to form products, nor can a fraction of a molecule collide.',
    difficulty: 'Easy',
    source: 'KSEAB Board Exam'
  },
  {
    id: 'stmt-chem-3',
    subject: 'chemistry',
    chapter: 'che-3',
    topic: 'First Order Reaction Kinetics',
    question: `Statement I: The half-life period (t_1/2) of a first-order reaction is completely independent of the initial concentration of the reactant.
Statement II: A plot of log[R] versus time (t) for a first-order reaction yields a straight line with a slope equal to -k / 2.303.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct.',
    explanation: 'For a first order reaction, t_1/2 = 0.693 / k (independent of [R]₀). The integrated rate equation is log[R] = log[R]₀ - (k / 2.303) t, which gives a straight line with slope -k/2.303.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27'
  },
  {
    id: 'ar-chem-4',
    subject: 'chemistry',
    chapter: 'che-4',
    topic: 'd and f Block Elements & Lanthanoid Contraction',
    question: `Assertion (A): The atomic and ionic radii of 4d series transition metals (e.g. Zr) and 5d series transition metals (e.g. Hf) are almost identical.
Reason (R): The filling of 4f orbitals prior to the 5d series results in Lanthanoid contraction due to poor shielding of 4f electrons.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'The 14 lanthanoid electrons fill 4f orbitals which have diffused shapes and imperfect shielding. The increase in nuclear charge pulls outer shells inward, cancelling the expected size increase from 4d to 5d.',
    difficulty: 'Medium',
    source: 'KCET PYQ / Board'
  },
  {
    id: 'ar-chem-5',
    subject: 'chemistry',
    chapter: 'che-5',
    topic: 'Coordination Compounds: Ligand Field Theory',
    question: `Assertion (A): [Fe(CN)₆]³⁻ is a low-spin inner orbital complex with only one unpaired electron, whereas [FeF₆]³⁻ is a high-spin outer orbital complex with five unpaired electrons.
Reason (R): Cyanide (CN⁻) is a strong field ligand that causes pairing of electrons against Hund's rule (Δ_o > P), whereas fluoride (F⁻) is a weak field ligand (Δ_o < P).`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'Fe³⁺ is 3d⁵. With CN⁻, crystal field splitting energy Δ_o exceeds pairing energy P, pairing 4 electrons into 2 pairs in t_2g leaving 1 unpaired electron (low spin). With F⁻, Δ_o < P, so electrons remain unpaired across t_2g and e_g (high spin).',
    difficulty: 'Medium',
    source: 'KCET 2025'
  },
  {
    id: 'stmt-chem-6',
    subject: 'chemistry',
    chapter: 'che-6',
    topic: 'Haloalkanes & SN1 vs SN2 Mechanisms',
    question: `Statement I: Primary alkyl halides undergo nucleophilic substitution predominantly via the SN2 mechanism with complete inversion of configuration (Walden inversion).
Statement II: Tertiary alkyl halides undergo nucleophilic substitution primarily via the SN1 mechanism involving a planar carbocation intermediate and leading to partial or complete racemisation.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct.',
    explanation: 'SN2 proceeds via backside attack in a concerted step favoring sterically unhindered 1° alkyl halides with inversion. SN1 forms a stable 3° carbocation intermediate which is planar and can be attacked from either face.',
    difficulty: 'Easy',
    source: 'KSEAB II PUC Chemistry'
  },
  {
    id: 'ar-chem-7',
    subject: 'chemistry',
    chapter: 'che-7',
    topic: 'Acidity of Phenols vs Alcohols',
    question: `Assertion (A): Phenol is significantly more acidic than ethanol.
Reason (R): The phenoxide ion formed after losing a proton is stabilized by resonance with the aromatic ring, whereas the ethoxide ion has no resonance stabilization and is destabilized by the +I inductive effect of the ethyl group.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'Negative charge on the phenoxide ion is delocalized over the ortho and para positions of the benzene ring. In ethoxide, C₂H₅- exerts +I effect concentrating electron density on oxygen.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27'
  },
  {
    id: 'stmt-chem-8',
    subject: 'chemistry',
    chapter: 'che-8',
    topic: 'Aldol Condensation & Cannizzaro Reaction',
    question: `Statement I: Acetaldehyde undergoes aldol condensation in the presence of dilute NaOH because it possesses α-hydrogen atoms.
Statement II: Benzaldehyde and formaldehyde lack α-hydrogen atoms and undergo Cannizzaro reaction (disproportionation) in the presence of concentrated alkali.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct.',
    explanation: 'Aldehydes with at least one α-H form enolate ions to undergo aldol condensation. Aldehydes without α-H cannot form enolates and instead undergo Cannizzaro redox disproportionation.',
    difficulty: 'Medium',
    source: 'KCET High-Yield'
  },
  {
    id: 'ar-chem-9',
    subject: 'chemistry',
    chapter: 'che-9',
    topic: 'Basicity of Amines',
    question: `Assertion (A): In aqueous solution, dimethylamine [(CH₃)₂NH] is more basic than trimethylamine [(CH₃)₃N].
Reason (R): In aqueous medium, the order of basicity of aliphatic amines is determined by a combined balance of the inductive effect, steric hindrance, and hydration energy of the conjugate ammonium cation.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'In methyl-substituted amines in water, the stability order is 2° > 1° > 3° > NH₃ due to greater hydration stability of the conjugate acid of 2° amine and lesser steric crowding compared to 3° amine.',
    difficulty: 'Hard',
    source: 'KCET 2024 / Board'
  },
  {
    id: 'stmt-chem-10',
    subject: 'chemistry',
    chapter: 'che-10',
    topic: 'Biomolecules: DNA, RNA & Proteins',
    question: `Statement I: In double-stranded DNA, the two polynucleotide chains are antiparallel and held together by hydrogen bonds between complementary purine and pyrimidine bases.
Statement II: Denaturation of proteins destroys the secondary, tertiary, and quaternary structures of proteins while leaving the primary peptide bonds intact.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct.',
    explanation: 'Both statements are true. Denaturation breaks weak non-covalent hydrogen and disulfide interactions, unfolding the 3D structure, but does not hydrolyze covalent peptide bonds of primary structure.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27'
  },

  // =========================================================================
  // MATHEMATICS - II PUC & KCET ASSERTION & REASON + STATEMENT QUESTIONS
  // =========================================================================
  {
    id: 'ar-math-1',
    subject: 'mathematics',
    chapter: 'math-1',
    topic: 'Relations and Functions: Equivalence Relations',
    question: `Assertion (A): A relation R on the set of all integers Z defined by R = {(a, b) : a - b is divisible by 5} is an equivalence relation.
Reason (R): The relation R is reflexive because (a - a) = 0 is divisible by 5, symmetric because -(a - b) is divisible by 5 whenever (a - b) is, and transitive because the sum of two multiples of 5 is also a multiple of 5.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'An equivalence relation is by definition reflexive, symmetric, and transitive. Reason (R) rigorously proves all three conditions for divisibility by 5, thus fully explaining Assertion (A).',
    difficulty: 'Easy',
    source: 'KSEAB Board Model'
  },
  {
    id: 'stmt-math-2',
    subject: 'mathematics',
    chapter: 'math-2',
    topic: 'Inverse Trigonometric Functions Principal Values',
    question: `Statement I: The principal value branch of sin⁻¹(x) is [-π/2, π/2], and sin⁻¹(sin(3π/4)) equals π/4.
Statement II: The principal value branch of cos⁻¹(x) is [0, π], and cos⁻¹(cos(7π/6)) equals 5π/6.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct.',
    explanation: 'sin(3π/4) = sin(π - π/4) = sin(π/4), so sin⁻¹(sin(3π/4)) = π/4 ∈ [-π/2, π/2]. cos(7π/6) = cos(2π - 5π/6) = cos(5π/6), so cos⁻¹(cos(7π/6)) = 5π/6 ∈ [0, π]. Both statements are strictly correct.',
    difficulty: 'Medium',
    source: 'KCET High-Yield Drill'
  },
  {
    id: 'ar-math-3',
    subject: 'mathematics',
    chapter: 'math-3',
    topic: 'Matrices: Symmetry & Invertibility',
    question: `Assertion (A): For any square matrix A with real entries, (A + Aᵀ) is always a symmetric matrix and (A - Aᵀ) is always a skew-symmetric matrix.
Reason (R): The transpose of the sum of two matrices equals the sum of their individual transposes, i.e., (A + B)ᵀ = Aᵀ + Bᵀ, and (Aᵀ)ᵀ = A.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: '(A + Aᵀ)ᵀ = Aᵀ + (Aᵀ)ᵀ = Aᵀ + A = (A + Aᵀ) (symmetric). (A - Aᵀ)ᵀ = Aᵀ - A = -(A - Aᵀ) (skew-symmetric). Reason (R) directly proves Assertion (A).',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27'
  },
  {
    id: 'stmt-math-4',
    subject: 'mathematics',
    chapter: 'math-4',
    topic: 'Determinants: Adjoint & Invertibility',
    question: `Statement I: A square matrix A of order n is invertible (non-singular) if and only if its determinant |A| ≠ 0.
Statement II: For any square matrix A of order 3 with |A| = 4, the determinant of its adjoint |adj(A)| is equal to 16.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct.',
    explanation: 'A matrix has an inverse if and only if |A| ≠ 0. Furthermore, |adj(A)| = |A|^(n - 1). For n = 3 and |A| = 4, |adj(A)| = 4^(3 - 1) = 4² = 16. Both statements are correct.',
    difficulty: 'Easy',
    source: 'KCET 2024'
  },
  {
    id: 'ar-math-5',
    subject: 'mathematics',
    chapter: 'math-5',
    topic: 'Continuity & Differentiability',
    question: `Assertion (A): The function f(x) = |x| is continuous at x = 0, but it is not differentiable at x = 0.
Reason (R): Every differentiable function is continuous, but the converse is not necessarily true as a sharp corner produces unequal left-hand and right-hand derivatives.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'lim_{x→0} |x| = 0 = f(0), so it is continuous. Left-hand derivative = lim_{h→0⁻} (-h)/h = -1, while right-hand derivative = +1. Since LHD ≠ RHD, f is not differentiable at x = 0.',
    difficulty: 'Easy',
    source: 'KSEAB Board Model'
  },
  {
    id: 'stmt-math-6',
    subject: 'mathematics',
    chapter: 'math-6',
    topic: 'Application of Derivatives: Maxima & Minima',
    question: `Statement I: If f'(c) = 0 and f''(c) < 0, then x = c is a point of local maximum for the function f(x).
Statement II: A strictly increasing function f(x) defined on an interval I must have f'(x) > 0 for all points in I, and f'(x) can never be zero at any isolated point.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Statement I is correct but Statement II is incorrect.',
    explanation: 'Statement I is the standard Second Derivative Test for local maxima. Statement II is false: f(x) = x³ is strictly increasing on R, yet f\'(0) = 3(0)² = 0 at the origin.',
    difficulty: 'Medium',
    source: 'KCET 2025'
  },
  {
    id: 'ar-math-7',
    subject: 'mathematics',
    chapter: 'math-7',
    topic: 'Definite Integrals & Odd Functions',
    question: `Assertion (A): The definite integral ∫_{-a}^{a} sin⁵(x) cos⁴(x) dx is identically equal to 0.
Reason (R): For any integrable odd function f(x) where f(-x) = -f(x), the definite integral over a symmetric interval ∫_{-a}^{a} f(x) dx = 0.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'Let f(x) = sin⁵(x) cos⁴(x). Then f(-x) = sin⁵(-x) cos⁴(-x) = (-sin x)⁵ (cos x)⁴ = -sin⁵(x) cos⁴(x) = -f(x). Since f is odd, ∫_{-a}^a f(x) dx = 0.',
    difficulty: 'Easy',
    source: 'KCET High-Yield'
  },
  {
    id: 'stmt-math-10',
    subject: 'mathematics',
    chapter: 'math-10',
    topic: 'Vectors: Dot Product & Cross Product',
    question: `Statement I: For any two non-zero vectors a and b, if a · b = 0, then the vectors a and b are mutually perpendicular.
Statement II: For any two non-zero vectors a and b, if a × b = 0, then the vectors a and b are collinear (parallel).`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct.',
    explanation: 'a · b = |a||b| cos θ = 0 ⇒ cos θ = 0 ⇒ θ = 90° (perpendicular). |a × b| = |a||b| sin θ = 0 ⇒ sin θ = 0 ⇒ θ = 0° or 180° (collinear). Both statements are mathematically sound.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27'
  },
  {
    id: 'ar-math-13',
    subject: 'mathematics',
    chapter: 'math-13',
    topic: 'Probability: Independence & Bayes Theorem',
    question: `Assertion (A): If two events A and B are independent, then P(A ∩ B) = P(A) · P(B).
Reason (R): For independent events, the occurrence of event B has no influence on the conditional probability of event A, so P(A | B) = P(A).`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'By the multiplication rule of conditional probability, P(A ∩ B) = P(B) · P(A | B). For independent events, P(A | B) = P(A). Substituting gives P(A ∩ B) = P(A) · P(B). Reason directly explains Assertion.',
    difficulty: 'Easy',
    source: 'KSEAB Board Model'
  },

  // =========================================================================
  // BIOLOGY - II PUC & KCET ASSERTION & REASON + STATEMENT QUESTIONS
  // =========================================================================
  {
    id: 'ar-bio-1',
    subject: 'biology',
    chapter: 'bio-1',
    topic: 'Sexual Reproduction in Flowering Plants: Double Fertilisation',
    question: `Assertion (A): In angiosperms, double fertilisation results in the formation of a diploid zygote and a triploid primary endosperm nucleus (PEN).
Reason (R): One male gamete fuses with the haploid egg cell (syngamy), while the second male gamete fuses with two polar nuclei of the central cell (triple fusion).`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'Syngamy (n + n = 2n) forms the zygote. Triple fusion (n + n + n = 3n) forms the primary endosperm nucleus. Because two unique fusions occur in the same embryo sac, it is called double fertilisation.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27'
  },
  {
    id: 'stmt-bio-2',
    subject: 'biology',
    chapter: 'bio-2',
    topic: 'Human Reproduction: Gametogenesis & Ovulation',
    question: `Statement I: Oogenesis in human females is initiated during embryonic development when a couple of million gamete mother cells (oogonia) are formed within each fetal ovary.
Statement II: Ovulation occurs during the mid-cycle (around day 14) under the influence of rapid secretion of LH (LH surge).`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct.',
    explanation: 'Unlike spermatogenesis which starts at puberty, oogenesis begins embryonically, arrested at prophase I. LH surge induces rupture of the Graafian follicle and release of the ovum.',
    difficulty: 'Easy',
    source: 'KCET / Board Model'
  },
  {
    id: 'ar-bio-4',
    subject: 'biology',
    chapter: 'bio-4',
    topic: 'Principles of Inheritance: Morgan’s Linkage',
    question: `Assertion (A): When genes are located close to each other on the same chromosome, the proportion of parental gene combinations in the progeny is much higher than that of non-parental (recombinant) types.
Reason (R): Thomas Hunt Morgan discovered that genes linked on the same chromosome tend to be inherited together because physical linkage reduces the frequency of crossing over.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'Physical linkage on the same chromosome restricts independent assortment and reduces crossing over during meiosis, producing mostly parental combinations.',
    difficulty: 'Medium',
    source: 'KSEAB CET 2026-27'
  },
  {
    id: 'stmt-bio-5',
    subject: 'biology',
    chapter: 'bio-5',
    topic: 'Molecular Basis of Inheritance: Genetic Code',
    question: `Statement I: The genetic code is unambiguous and universal, meaning one codon codes for only one amino acid and the code is nearly identical from bacteria to humans.
Statement II: AUG serves a dual function in protein synthesis: it codes for methionine (Met) and acts as the universal initiator codon.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct.',
    explanation: 'Both statements are well-established salient features of the genetic code described in the NCERT II PUC biology curriculum.',
    difficulty: 'Easy',
    source: 'KCET PYQ'
  },
  {
    id: 'ar-bio-6',
    subject: 'biology',
    chapter: 'bio-6',
    topic: 'Evolution: Homologous vs Analogous Organs',
    question: `Assertion (A): The forelimbs of humans, cheetahs, whales, and bats are homologous structures showing divergent evolution.
Reason (R): Homologous structures share a common anatomical origin and basic skeletal plan, but perform different functions adapted to different habitats.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'Forelimbs in mammals share humerus, radius, ulna, carpals, metacarpals, and phalanges (common ancestry), adapted for grasping, running, swimming, and flying.',
    difficulty: 'Easy',
    source: 'KSEAB Board Model'
  },
  {
    id: 'stmt-bio-7',
    subject: 'biology',
    chapter: 'bio-7',
    topic: 'Human Health & Diseases: Immunity & AIDS',
    question: `Statement I: Colostrum secreted by mothers during the initial days of lactation contains abundant antibodies (IgA) to protect the infant, representing active immunity.
Statement II: The Human Immunodeficiency Virus (HIV) preferentially enters helper T-lymphocytes (T_H), replicates, and causes a progressive decrease in their count, compromising cell-mediated immunity.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Statement I is incorrect but Statement II is correct.',
    explanation: 'Statement I is false because ready-made antibodies received from mother to infant constitute PASSIVE immunity, not active immunity. Statement II is correct: HIV targets CD4+ helper T-cells leading to opportunistic infections.',
    difficulty: 'Medium',
    source: 'KCET 2024'
  },
  {
    id: 'ar-bio-9',
    subject: 'biology',
    chapter: 'bio-9',
    topic: 'Biotechnology: Restriction Enzymes & PCR',
    question: `Assertion (A): Restriction endonucleases are known as "molecular scissors" in genetic engineering.
Reason (R): Restriction enzymes inspect DNA and cleave both strands of the phosphodiester backbone at specific palindromic recognition sequences.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'Restriction enzymes act as molecular scissors because of their ability to cut DNA with high precision at specific palindromic recognition nucleotide sequences.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27'
  },
  {
    id: 'stmt-bio-12',
    subject: 'biology',
    chapter: 'bio-12',
    topic: 'Ecosystem & Energy Flow',
    question: `Statement I: In any natural ecosystem, the pyramid of energy is always upright and can never be inverted because energy is lost as heat at each trophic transfer.
Statement II: The pyramid of biomass in an aquatic (ocean/lake) ecosystem is typically inverted because the biomass of fishes far exceeds that of phytoplankton.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct.',
    explanation: 'Energy transfer is strictly limited by the 10% law so energy pyramids are strictly upright. In oceans, small short-lived phytoplankton support a large standing biomass of fishes, producing an inverted biomass pyramid.',
    difficulty: 'Easy',
    source: 'KSEAB CET 2026-27'
  },
  {
    id: 'ar-bio-13',
    subject: 'biology',
    chapter: 'bio-13',
    topic: 'Biodiversity: Species-Area Relationship',
    question: `Assertion (A): On a logarithmic scale, the species-area relationship is a straight line described by the equation log S = log C + Z log A.
Reason (R): Alexander von Humboldt observed that within a region, species richness increases with increasing explored area, but only up to a limit.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'Humboldt’s pioneering ecological observations revealed the rectangular hyperbola S = C A^Z, which converts to the linear log-log relationship log S = log C + Z log A. Reason (R) directly explains Assertion (A).',
    difficulty: 'Medium',
    source: 'KCET PYQ / NCERT'
  },

  // =========================================================================
  // ADDITIONAL I PUC / KCET CHAPTERS (MECHANICS, GOC, ALGEBRA, PHYSIOLOGY)
  // =========================================================================
  {
    id: 'ar-phy-mech-1',
    subject: 'physics',
    chapter: 'phy-15',
    topic: 'Units and Measurements: Dimensional Analysis',
    question: `Assertion (A): A dimensionally consistent physical equation may or may not be physically correct.
Reason (R): Dimensional analysis cannot determine dimensionless proportionality constants or distinguish between scalar and vector quantities.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'For example, s = ut + at² is dimensionally consistent, but physically incorrect (it lacks the factor of 1/2). Reason (R) explains why dimensional equality does not guarantee physical correctness.',
    difficulty: 'Easy',
    source: 'KCET / KSEAB I PUC'
  },
  {
    id: 'stmt-phy-mech-2',
    subject: 'physics',
    chapter: 'phy-18',
    topic: 'Laws of Motion: Friction & Inertia',
    question: `Statement I: Static friction is a self-adjusting force whose magnitude adjusts from zero up to a maximum value called limiting friction (f_s,max = μ_s N).
Statement II: Rolling friction is significantly greater than sliding friction, which is why ball bearings are avoided in heavy machinery.`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Statement I is correct but Statement II is incorrect.',
    explanation: 'Statement I is correct. Statement II is false: rolling friction is much LESS than sliding friction, which is precisely why ball bearings are widely utilized to reduce energy loss in machinery.',
    difficulty: 'Easy',
    source: 'KCET I PUC Physics'
  },
  {
    id: 'ar-chem-xi-1',
    subject: 'chemistry',
    chapter: 'chem-14',
    topic: 'Chemical Bonding: Hybridisation & VSEPR',
    question: `Assertion (A): The bond angle in water (H₂O) is 104.5°, which is less than the ideal tetrahedral angle of 109.5°.
Reason (R): According to VSEPR theory, lone pair - lone pair repulsions are stronger than lone pair - bond pair repulsions, which in turn are stronger than bond pair - bond pair repulsions.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'Oxygen in H₂O has sp³ hybridization with two lone pairs and two bond pairs. Strong lone pair - lone pair repulsion pushes the O-H bond pairs closer together from 109.5° down to 104.5°.',
    difficulty: 'Easy',
    source: 'KCET Chemistry'
  },
  {
    id: 'stmt-math-xi-1',
    subject: 'mathematics',
    chapter: 'math-14',
    topic: 'Sets and Venn Diagrams',
    question: `Statement I: For any two finite sets A and B, n(A ∪ B) = n(A) + n(B) - n(A ∩ B).
Statement II: If A and B are disjoint sets, then their intersection is the empty set (A ∩ B = ∅) and n(A ∪ B) = n(A) + n(B).`,
    questionType: 'statement_based',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct.',
    explanation: 'Both statements are the foundational inclusion-exclusion principle theorems for finite sets.',
    difficulty: 'Easy',
    source: 'KSEAB I PUC'
  },
  {
    id: 'ar-bio-xi-1',
    subject: 'biology',
    chapter: 'bio-19',
    topic: 'Cell Division: Mitosis vs Meiosis',
    question: `Assertion (A): Meiosis is known as reductional division and results in genetic variation in sexually reproducing organisms.
Reason (R): Crossing over between non-sister chromatids of homologous chromosomes occurs during the pachytene stage of prophase I.`,
    questionType: 'assertion_reason',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A).',
    explanation: 'Crossing over mediated by the recombinase enzyme during pachytene exchanges genetic material between homologous chromosomes, generating novel allele combinations.',
    difficulty: 'Easy',
    source: 'KCET Biology'
  }
];
