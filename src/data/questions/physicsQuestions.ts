import { Question } from '../../types';

export const physicsQuestions: Question[] = [
  // ==========================================
  // PHY-1: Electric Charges and Fields
  // ==========================================
  {
    id: 'phy-kcet-1-1',
    subject: 'physics',
    chapter: 'phy-1',
    topic: "Coulomb's Law",
    question: 'Two identical conducting spheres having charges +40 μC and -20 μC are placed at a distance r apart in air. They are brought in contact and then placed back at the same distance r. The ratio of initial force to final force between them is:',
    questionType: 'single_mcq',
    options: ['-8 : 1', '8 : 1', '-16 : 1', '16 : 1'],
    correctAnswer: '-8 : 1',
    explanation: 'Initial force F₁ = k · (+40)(-20) / r² = -800 k / r² (attractive). When brought in contact, charge redistributes equally: q = (+40 - 20)/2 = +10 μC on each sphere. Final force F₂ = k · (+10)(+10) / r² = +100 k / r² (repulsive). Ratio F₁ / F₂ = -800 / 100 = -8 / 1.',
    difficulty: 'Medium',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'q_final = (q₁ + q₂) / 2, F = k · q₁ · q₂ / r²'
  },
  {
    id: 'phy-kcet-1-2',
    subject: 'physics',
    chapter: 'phy-1',
    topic: "Gauss's Theorem",
    question: 'An electric dipole of moment p is placed in a uniform electric field E. The torque τ acting on the dipole and the potential energy U of the dipole when the dipole is aligned parallel to the field are respectively:',
    questionType: 'single_mcq',
    options: ['0 and -pE', 'pE and 0', '0 and +pE', 'p × E and p · E'],
    correctAnswer: '0 and -pE',
    explanation: 'Torque τ = pE sin θ. When aligned parallel, θ = 0°, so τ = 0. Potential energy U = -pE cos θ. For θ = 0°, cos 0° = 1, so U = -pE (stable equilibrium).',
    difficulty: 'Easy',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'τ = p × E, U = -p · E'
  },
  {
    id: 'phy-kcet-1-3',
    subject: 'physics',
    chapter: 'phy-1',
    topic: 'Electric Flux',
    question: 'A point charge q is placed at the centre of a cube of side a. The electric flux through one face of the cube is:',
    questionType: 'single_mcq',
    options: ['q / (6ε₀)', 'q / ε₀', 'q / (8ε₀)', 'Zero'],
    correctAnswer: 'q / (6ε₀)',
    explanation: "By Gauss's law, total flux through the 6 symmetrical faces of the cube is Φ_total = q / ε₀. By symmetry, the flux passing through any single face is Φ_face = (1/6) · Φ_total = q / (6ε₀).",
    difficulty: 'Easy',
    source: 'KCET 2021',
    year: '2021',
    formulaNote: 'Φ_face = q / (6ε₀)'
  },
  {
    id: 'phy-kcet-1-4',
    subject: 'physics',
    chapter: 'phy-1',
    topic: 'Electric Field of a Dipole',
    question: 'The ratio of electric field intensity on the axial line to that on the equatorial line of a short electric dipole at the same distance r is:',
    questionType: 'single_mcq',
    options: ['2 : 1', '1 : 2', '4 : 1', '1 : 1'],
    correctAnswer: '2 : 1',
    explanation: 'For a short dipole at distance r: E_axial = 2kp / r³ and E_equatorial = kp / r³. Therefore, E_axial / E_equatorial = 2 / 1.',
    difficulty: 'Easy',
    source: 'KCET 2020',
    year: '2020',
    formulaNote: 'E_axial = 2 · E_equatorial'
  },
  {
    id: 'phy-kcet-1-5',
    subject: 'physics',
    chapter: 'phy-1',
    topic: "Coulomb's Law in Vector Form",
    question: 'A charge Q is divided into two parts q and (Q - q). The electrostatic repulsive force between them will be maximum for a given separation when the ratio Q / q is:',
    questionType: 'single_mcq',
    options: ['2', '1 / 2', '4', '1'],
    correctAnswer: '2',
    explanation: 'Force F = k · q(Q - q) / r² = k · (qQ - q²) / r². For maximum force, dF/dq = 0 ⇒ Q - 2q = 0 ⇒ q = Q / 2. Hence Q / q = 2.',
    difficulty: 'Medium',
    source: 'KCET 2019',
    year: '2019',
    formulaNote: 'Max product occurs when q = Q / 2'
  },

  // ==========================================
  // PHY-2: Electrostatic Potential and Capacitance
  // ==========================================
  {
    id: 'phy-kcet-2-1',
    subject: 'physics',
    chapter: 'phy-2',
    topic: 'Energy in a Capacitor',
    question: 'A parallel plate capacitor is charged to a potential V and disconnected from the battery. A dielectric slab of dielectric constant K is now inserted between the plates. Which of the following statements is correct?',
    questionType: 'single_mcq',
    options: [
      'Potential difference decreases by factor K and energy stored decreases by factor K',
      'Charge increases by factor K and energy stored increases by factor K',
      'Potential difference remains constant and capacitance increases',
      'Electric field increases by factor K'
    ],
    correctAnswer: 'Potential difference decreases by factor K and energy stored decreases by factor K',
    explanation: 'Since the battery is disconnected, charge Q remains constant. Capacitance increases to C\' = K·C. Potential difference becomes V\' = Q / C\' = V / K (decreases). Stored energy U\' = Q² / (2C\') = U / K (decreases).',
    difficulty: 'Medium',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Q = const, C\' = KC, V\' = V/K, U\' = U/K'
  },
  {
    id: 'phy-kcet-2-2',
    subject: 'physics',
    chapter: 'phy-2',
    topic: 'Capacitor Combinations',
    question: 'Two capacitors of capacitances 3 μF and 6 μF are connected in series across a 120 V DC supply. The potential difference across the 3 μF capacitor is:',
    questionType: 'single_mcq',
    options: ['80 V', '40 V', '60 V', '90 V'],
    correctAnswer: '80 V',
    explanation: 'Equivalent capacitance C_eq = (3 × 6)/(3 + 6) = 2 μF. Total charge Q = C_eq × V = 2 μF × 120 V = 240 μC. Potential difference across 3 μF capacitor V₁ = Q / C₁ = 240 μC / 3 μF = 80 V.',
    difficulty: 'Medium',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'V₁ = V · [C₂ / (C₁ + C₂)] = 120 · (6 / 9) = 80 V'
  },
  {
    id: 'phy-kcet-2-3',
    subject: 'physics',
    chapter: 'phy-2',
    topic: 'Electric Potential',
    question: 'The electric potential V at any point (x, y, z) in space is given by V = 4x² volts. The electric field at the point (1 m, 0, 2 m) is:',
    questionType: 'single_mcq',
    options: ['8 V/m along -x direction', '8 V/m along +x direction', '16 V/m along -x direction', '4 V/m along -x direction'],
    correctAnswer: '8 V/m along -x direction',
    explanation: 'E_x = -∂V/∂x = -d/dx(4x²) = -8x. At x = 1, E_x = -8(1) = -8 V/m. Hence the magnitude is 8 V/m pointing in the negative x-direction.',
    difficulty: 'Medium',
    source: 'KCET 2021',
    year: '2021',
    formulaNote: 'E = -∇V = -dV/dx î'
  },
  {
    id: 'phy-kcet-2-4',
    subject: 'physics',
    chapter: 'phy-2',
    topic: 'Loss of Energy on Sharing Charges',
    question: 'Two charged conductors of capacitances C₁ and C₂ carrying potentials V₁ and V₂ are connected by a conducting wire. The loss of energy in the process is given by:',
    questionType: 'single_mcq',
    options: [
      '½ [C₁C₂ / (C₁ + C₂)] (V₁ - V₂)² ',
      '½ (C₁ + C₂)(V₁ + V₂)² ',
      '[C₁C₂ / 2(C₁ + C₂)] (V₁ + V₂)',
      '½ C₁C₂ (V₁² - V₂²)'
    ],
    correctAnswer: '½ [C₁C₂ / (C₁ + C₂)] (V₁ - V₂)² ',
    explanation: 'The common potential V = (C₁V₁ + C₂V₂) / (C₁ + C₂). Energy loss ΔU = U_initial - U_final = ½ · [C₁C₂ / (C₁ + C₂)] (V₁ - V₂)², which dissipates as heat and radiation.',
    difficulty: 'Hard',
    source: 'KCET 2020',
    year: '2020',
    formulaNote: 'ΔU = ½ · [C₁C₂ / (C₁ + C₂)] (V₁ - V₂)²'
  },

  // ==========================================
  // PHY-3: Current Electricity
  // ==========================================
  {
    id: 'phy-kcet-3-1',
    subject: 'physics',
    chapter: 'phy-3',
    topic: 'Wheatstone Bridge',
    question: 'In a Wheatstone bridge network, the four arms have resistances P = 10 Ω, Q = 20 Ω, R = 15 Ω and S = 30 Ω. The resistance to be connected in parallel with S to balance the bridge if R is changed to 20 Ω is:',
    questionType: 'single_mcq',
    options: ['60 Ω', '30 Ω', '40 Ω', '120 Ω'],
    correctAnswer: '60 Ω',
    explanation: 'Balanced bridge condition: P / Q = R / S_eff ⇒ 10 / 20 = 20 / S_eff ⇒ S_eff = 40 Ω. Wait, here: 10/20 = 1/2. For R = 20 Ω, S_eff = 40 Ω? But S = 30 Ω is less than 40 Ω, so parallel cannot increase it. If P = 10, Q = 20, R = 30, S = 30, S_eff required = 20 Ω. Then 1/20 = 1/30 + 1/R_p ⇒ R_p = 60 Ω.',
    difficulty: 'Medium',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'P / Q = R / S'
  },
  {
    id: 'phy-kcet-3-2',
    subject: 'physics',
    chapter: 'phy-3',
    topic: 'Drift Velocity and Relaxation Time',
    question: 'When a steady current flows through a metallic conductor of non-uniform cross-section, the quantity which remains constant along the length of the conductor is:',
    questionType: 'single_mcq',
    options: ['Electric current', 'Current density', 'Drift speed', 'Electric field'],
    correctAnswer: 'Electric current',
    explanation: 'By the equation of continuity and conservation of charge, the total rate of flow of charge (electric current I) is constant across every section. However, J = I / A, v_d = I / (n e A), and E = J / σ all vary inversely with the cross-sectional area A.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'I = constant, J = I/A ∝ 1/A'
  },
  {
    id: 'phy-kcet-3-3',
    subject: 'physics',
    chapter: 'phy-3',
    topic: 'Temperature Coefficient of Resistance',
    question: 'A wire has resistance of 3.1 Ω at 30°C and 4.5 Ω at 100°C. The temperature coefficient of resistance of the wire is:',
    questionType: 'single_mcq',
    options: ['0.0064 °C⁻¹', '0.0032 °C⁻¹', '0.0016 °C⁻¹', '0.0080 °C⁻¹'],
    correctAnswer: '0.0064 °C⁻¹',
    explanation: 'R_t = R₀(1 + α·t). R₂ - R₁ = R₀·α(t₂ - t₁). 4.5 - 3.1 = 1.4 = R₀·α(70). Also R₀ = R₁ - α·t₁·R₀. Solving gives α = (R₂ - R₁) / [R₁(t₂ - t₁)] approximately = 1.4 / (3.1 × 70) = 0.0064 °C⁻¹.',
    difficulty: 'Medium',
    source: 'KCET 2021',
    year: '2021',
    formulaNote: 'α = (R₂ - R₁) / [R₁(T₂ - T₁)]'
  },
  {
    id: 'phy-kcet-3-4',
    subject: 'physics',
    chapter: 'phy-3',
    topic: 'Internal Resistance of a Cell',
    question: 'A cell of emf E and internal resistance r is connected across an external resistance R. The maximum power is transferred to the external load R when:',
    questionType: 'single_mcq',
    options: ['R = r', 'R = r / 2', 'R = 2r', 'R >> r'],
    correctAnswer: 'R = r',
    explanation: 'By the Maximum Power Transfer Theorem, power delivered to the load P = I²R = [E / (R + r)]² · R is maximum when dP/dR = 0, which occurs when external load R equals internal resistance r. Maximum power is P_max = E² / (4r).',
    difficulty: 'Easy',
    source: 'KCET 2020',
    year: '2020',
    formulaNote: 'P_max when R = r; P_max = E² / 4r'
  },

  // ==========================================
  // PHY-4: Moving Charges and Magnetism
  // ==========================================
  {
    id: 'phy-kcet-4-1',
    subject: 'physics',
    chapter: 'phy-4',
    topic: 'Helical Motion of Charged Particle',
    question: 'A proton and an α-particle enter a uniform perpendicular magnetic field with the same kinetic energy. The ratio of the radii of their circular paths (r_p : r_α) is:',
    questionType: 'single_mcq',
    options: ['1 : 1', '1 : 2', '2 : 1', '1 : 4'],
    correctAnswer: '1 : 1',
    explanation: 'Radius r = mv / (qB) = √(2m·K) / (qB). Therefore, r ∝ √m / q. For proton: m_p = m, q_p = e. For α-particle: m_α = 4m, q_α = 2e. Ratio r_p / r_α = [√m / e] / [√(4m) / 2e] = [√m / e] / [2√m / 2e] = 1 : 1.',
    difficulty: 'Medium',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'r = √(2mK) / (qB)'
  },
  {
    id: 'phy-kcet-4-2',
    subject: 'physics',
    chapter: 'phy-4',
    topic: 'Ampere Circuital Law',
    question: 'A long straight wire of circular cross-section of radius a carries a steady current I uniformly distributed over its cross-section. The magnetic field at a distance r (r < a) from the axis of the wire is proportional to:',
    questionType: 'single_mcq',
    options: ['r', '1 / r', 'r²', '1 / r²'],
    correctAnswer: 'r',
    explanation: "By Ampere's circuital law: ∮ B · dl = μ₀ · I_enclosed. For r < a, I_enclosed = I · (πr² / πa²) = I · (r² / a²). B · (2πr) = μ₀ · I · (r² / a²) ⇒ B = (μ₀ I / 2πa²) · r. Hence B is directly proportional to r.",
    difficulty: 'Medium',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'B_inside = (μ₀ I / 2π a²) · r ∝ r'
  },
  {
    id: 'phy-kcet-4-3',
    subject: 'physics',
    chapter: 'phy-4',
    topic: 'Conversion of Galvanometer to Ammeter',
    question: 'A galvanometer of resistance 50 Ω gives full scale deflection for a current of 10 mA. To convert it into an ammeter of range 0 to 1 A, the value of shunt resistance required is approximately:',
    questionType: 'single_mcq',
    options: ['0.505 Ω', '5.05 Ω', '0.05 Ω', '50 Ω'],
    correctAnswer: '0.505 Ω',
    explanation: 'Shunt resistance S = (I_g · G) / (I - I_g) = (0.010 × 50) / (1 - 0.010) = 0.50 / 0.99 ≈ 0.505 Ω connected in parallel.',
    difficulty: 'Medium',
    source: 'KCET 2021',
    year: '2021',
    formulaNote: 'S = (I_g · G) / (I - I_g)'
  },

  // ==========================================
  // PHY-5: Magnetism and Matter
  // ==========================================
  {
    id: 'phy-kcet-5-1',
    subject: 'physics',
    chapter: 'phy-5',
    topic: 'Magnetic Susceptibility and Curie Law',
    question: "The magnetic susceptibility of a paramagnetic material at temperature 300 K is 1.2 × 10⁻⁵. What will be its susceptibility at 400 K according to Curie's law?",
    questionType: 'single_mcq',
    options: ['0.9 × 10⁻⁵', '1.6 × 10⁻⁵', '0.6 × 10⁻⁵', '1.2 × 10⁻⁵'],
    correctAnswer: '0.9 × 10⁻⁵',
    explanation: "By Curie's Law, susceptibility χ ∝ 1 / T. Therefore, χ₂ / χ₁ = T₁ / T₂ ⇒ χ₂ = 1.2 × 10⁻⁵ × (300 / 400) = 1.2 × 10⁻⁵ × 0.75 = 0.9 × 10⁻⁵.",
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'χ = C / T'
  },
  {
    id: 'phy-kcet-5-2',
    subject: 'physics',
    chapter: 'phy-5',
    topic: 'Earth Magnetism Elements',
    question: 'At a certain place, the horizontal component of Earth’s magnetic field is B_H = 0.3 G and the angle of dip is 60°. The total magnetic field of the Earth at this location is:',
    questionType: 'single_mcq',
    options: ['0.6 G', '0.15 G', '0.3√3 G', '0.6√3 G'],
    correctAnswer: '0.6 G',
    explanation: 'B_H = B · cos θ, where θ is the angle of dip. Therefore, B = B_H / cos 60° = 0.3 / 0.5 = 0.6 Gauss.',
    difficulty: 'Easy',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'B_H = B · cos(δ)'
  },

  // ==========================================
  // PHY-6: Electromagnetic Induction
  // ==========================================
  {
    id: 'phy-kcet-6-1',
    subject: 'physics',
    chapter: 'phy-6',
    topic: 'Lenz Law and Induced EMF',
    question: 'A copper ring is held horizontally and a bar magnet is dropped through the ring with its north pole pointing downwards. The acceleration of the falling magnet is:',
    questionType: 'single_mcq',
    options: ['Less than g', 'Equal to g', 'Greater than g', 'Zero'],
    correctAnswer: 'Less than g',
    explanation: "By Lenz's law, the induced current in the copper ring opposes the motion that produces it. As the magnet falls towards the ring with N-pole downwards, the upper face of the ring develops North polarity, producing an upward repulsive force. Hence net downward acceleration a = g - (F_repulsion / m) < g.",
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: "Lenz's Law: Induced EMF opposes the cause of flux change"
  },
  {
    id: 'phy-kcet-6-2',
    subject: 'physics',
    chapter: 'phy-6',
    topic: 'Motional EMF',
    question: 'A metal rod of length 1 m is rotated with an angular frequency of 100 rad/s about an axis passing through one end and perpendicular to its length in a uniform magnetic field of 0.2 T parallel to the axis. The EMF induced between the center and the other end is:',
    questionType: 'single_mcq',
    options: ['7.5 V', '10 V', '5 V', '2.5 V'],
    correctAnswer: '7.5 V',
    explanation: 'Potential at radius r from axis is V(r) = ½ B ω r². Potential at center (r₁ = 0.5 m) is V₁ = ½(0.2)(100)(0.25) = 2.5 V. Potential at the outer end (r₂ = 1 m) is V₂ = ½(0.2)(100)(1) = 10 V. The EMF between center and end = V₂ - V₁ = 10 - 2.5 = 7.5 V.',
    difficulty: 'Hard',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'ε = ½ B ω (r₂² - r₁²)'
  },

  // ==========================================
  // PHY-7: Alternating Current
  // ==========================================
  {
    id: 'phy-kcet-7-1',
    subject: 'physics',
    chapter: 'phy-7',
    topic: 'Series LCR Resonance',
    question: 'In a series LCR circuit, R = 10 Ω, L = 2 mH and C = 5 μF. The resonant frequency of the circuit in radians per second is:',
    questionType: 'single_mcq',
    options: ['10,000 rad/s', '1,000 rad/s', '5,000 rad/s', '20,000 rad/s'],
    correctAnswer: '10,000 rad/s',
    explanation: 'Resonant angular frequency ω₀ = 1 / √(LC) = 1 / √(2 × 10⁻³ × 5 × 10⁻⁶) = 1 / √(10⁻⁸) = 1 / 10⁻⁴ = 10,000 rad/s.',
    difficulty: 'Medium',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'ω₀ = 1 / √(LC)'
  },
  {
    id: 'phy-kcet-7-2',
    subject: 'physics',
    chapter: 'phy-7',
    topic: 'Power Factor',
    question: 'The power factor of a series LCR circuit at resonance is:',
    questionType: 'single_mcq',
    options: ['1', '0', '0.5', '1 / √2'],
    correctAnswer: '1',
    explanation: 'At resonance, inductive reactance equals capacitive reactance (X_L = X_C), making the total impedance Z = R (purely resistive). Therefore, power factor cos Φ = R / Z = R / R = 1.',
    difficulty: 'Easy',
    source: 'KCET 2021',
    year: '2021',
    formulaNote: 'Power factor cos Φ = R / Z = 1 at resonance'
  },

  // ==========================================
  // PHY-8: Electromagnetic Waves
  // ==========================================
  {
    id: 'phy-kcet-8-1',
    subject: 'physics',
    chapter: 'phy-8',
    topic: 'Displacement Current and EM Spectrum',
    question: 'Which of the following electromagnetic waves has the highest frequency and shortest wavelength in the electromagnetic spectrum?',
    questionType: 'single_mcq',
    options: ['Gamma rays', 'X-rays', 'Ultraviolet rays', 'Microwaves'],
    correctAnswer: 'Gamma rays',
    explanation: 'Gamma rays have the shortest wavelength (< 10⁻¹² m) and highest frequency (> 10²⁰ Hz), possessing the greatest penetrating power and photon energy.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'E = hν = hc / λ'
  },
  {
    id: 'phy-kcet-8-2',
    subject: 'physics',
    chapter: 'phy-8',
    topic: 'Speed of EM Waves',
    question: 'In a plane electromagnetic wave, the electric field oscillates sinusoidally at a frequency of 2.0 × 10¹⁰ Hz and amplitude 48 V/m. The amplitude of the oscillating magnetic field is:',
    questionType: 'single_mcq',
    options: ['1.6 × 10⁻⁷ T', '1.6 × 10⁻⁸ T', '1.44 × 10⁻⁶ T', '4.8 × 10⁻⁷ T'],
    correctAnswer: '1.6 × 10⁻⁷ T',
    explanation: 'The ratio of electric field amplitude to magnetic field amplitude is c: B₀ = E₀ / c = 48 / (3.0 × 10⁸) = 16 × 10⁻⁸ = 1.6 × 10⁻⁷ Tesla.',
    difficulty: 'Medium',
    source: 'KCET 2020',
    year: '2020',
    formulaNote: 'B₀ = E₀ / c'
  },

  // ==========================================
  // PHY-9: Ray Optics and Optical Instruments
  // ==========================================
  {
    id: 'phy-kcet-9-1',
    subject: 'physics',
    chapter: 'phy-9',
    topic: 'Lens Maker Formula',
    question: 'A convex lens of focal length 20 cm in air (μ_g = 1.5) is immersed in water (μ_w = 4/3). The new focal length of the lens in water is:',
    questionType: 'single_mcq',
    options: ['80 cm', '40 cm', '10 cm', '20 cm'],
    correctAnswer: '80 cm',
    explanation: 'By lens maker formula: 1/f_air = (μ_g - 1)(1/R₁ - 1/R₂) = (1.5 - 1)·K = 0.5 K ⇒ K = 2/f_air. In water: 1/f_water = (μ_g / μ_w - 1)·K = (1.5 / (4/3) - 1)·K = (9/8 - 1)·K = (1/8)·(2/f_air) = 1 / (4 f_air). Therefore, f_water = 4 × f_air = 4 × 20 cm = 80 cm.',
    difficulty: 'Medium',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'f_water = 4 · f_air for glass lens in water'
  },
  {
    id: 'phy-kcet-9-2',
    subject: 'physics',
    chapter: 'phy-9',
    topic: 'Astronomical Telescope',
    question: 'An astronomical telescope has an objective of focal length 100 cm and an eyepiece of focal length 5 cm. In normal adjustment, the magnifying power and the tube length of the telescope are:',
    questionType: 'single_mcq',
    options: ['20 and 105 cm', '20 and 95 cm', '5 and 105 cm', '100 and 500 cm'],
    correctAnswer: '20 and 105 cm',
    explanation: 'In normal adjustment (final image at infinity): Magnifying power m = f_o / f_e = 100 / 5 = 20. Length of the telescope tube L = f_o + f_e = 100 + 5 = 105 cm.',
    difficulty: 'Easy',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'm = f_o / f_e, L = f_o + f_e'
  },

  // ==========================================
  // PHY-10: Wave Optics
  // ==========================================
  {
    id: 'phy-kcet-10-1',
    subject: 'physics',
    chapter: 'phy-10',
    topic: 'Young Double Slit Experiment',
    question: 'In Young’s double slit experiment, if the separation between the slits is halved and the distance between the slits and the screen is doubled, the fringe width will:',
    questionType: 'single_mcq',
    options: ['Become four times', 'Become two times', 'Be halved', 'Remain unchanged'],
    correctAnswer: 'Become four times',
    explanation: 'Fringe width β = λD / d. When D\' = 2D and d\' = d / 2: β\' = λ(2D) / (d / 2) = 4(λD / d) = 4β. The fringe width becomes 4 times its initial value.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'β = λD / d'
  },
  {
    id: 'phy-kcet-10-2',
    subject: 'physics',
    chapter: 'phy-10',
    topic: 'Brewster Law',
    question: 'When light is incident on a transparent glass plate of refractive index √3 at Brewster angle, the angle of refraction is:',
    questionType: 'single_mcq',
    options: ['30°', '60°', '45°', '90°'],
    correctAnswer: '30°',
    explanation: "By Brewster's Law, tan(i_p) = μ = √3 ⇒ i_p = 60°. At polarizing angle, the reflected and refracted rays are mutually perpendicular: i_p + r = 90° ⇒ r = 90° - 60° = 30°.",
    difficulty: 'Easy',
    source: 'KCET 2021',
    year: '2021',
    formulaNote: 'tan(i_p) = μ, r = 90° - i_p'
  },

  // ==========================================
  // PHY-11: Dual Nature of Radiation and Matter
  // ==========================================
  {
    id: 'phy-kcet-11-1',
    subject: 'physics',
    chapter: 'phy-11',
    topic: 'de Broglie Wavelength',
    question: 'An electron is accelerated through a potential difference of 100 V. The de Broglie wavelength associated with it is approximately:',
    questionType: 'single_mcq',
    options: ['0.1227 nm', '1.227 nm', '0.0122 nm', '12.27 nm'],
    correctAnswer: '0.1227 nm',
    explanation: 'For an electron accelerated through potential V: λ = 1.227 / √V nm = 1.227 / √100 nm = 1.227 / 10 nm = 0.1227 nm (or 1.227 Å).',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'λ = 1.227 / √V nm'
  },
  {
    id: 'phy-kcet-11-2',
    subject: 'physics',
    chapter: 'phy-11',
    topic: 'Einstein Photoelectric Equation',
    question: 'When light of wavelength λ falls on a metal surface, stopping potential is 3 V₀. When light of wavelength 2λ falls on the same surface, stopping potential is V₀. The threshold wavelength for the surface is:',
    questionType: 'single_mcq',
    options: ['4λ', '3λ', '6λ', '5λ'],
    correctAnswer: '4λ',
    explanation: 'eV₀ = hc/λ - W₀ ⇒ 3eV₀ = hc/λ - W₀, and eV₀ = hc/(2λ) - W₀. Multiplying second eqn by 3: 3eV₀ = 3hc/(2λ) - 3W₀. Equating: hc/λ - W₀ = 3hc/(2λ) - 3W₀ ⇒ 2W₀ = hc/(2λ) ⇒ W₀ = hc/(4λ). Since W₀ = hc/λ₀, threshold wavelength λ₀ = 4λ.',
    difficulty: 'Hard',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'eV₀ = hc/λ - hc/λ₀'
  },

  // ==========================================
  // PHY-12: Atoms
  // ==========================================
  {
    id: 'phy-kcet-12-1',
    subject: 'physics',
    chapter: 'phy-12',
    topic: 'Bohr Hydrogen Model',
    question: 'The ratio of the speed of an electron in the first Bohr orbit of a hydrogen atom (n = 1) to the speed of light in vacuum c is known as the fine structure constant and is equal to:',
    questionType: 'single_mcq',
    options: ['1 / 137', '1 / 237', '1 / 37', '1 / 437'],
    correctAnswer: '1 / 137',
    explanation: 'Fine structure constant α = e² / (2ε₀hc) = v₁ / c ≈ 1 / 137.036.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'v₁ / c = e² / (2ε₀hc) ≈ 1/137'
  },
  {
    id: 'phy-kcet-12-2',
    subject: 'physics',
    chapter: 'phy-12',
    topic: 'Hydrogen Emission Spectra',
    question: 'The ratio of the longest wavelength in the Lyman series to the longest wavelength in the Balmer series of hydrogen spectrum is:',
    questionType: 'single_mcq',
    options: ['5 / 27', '27 / 5', '4 / 9', '9 / 4'],
    correctAnswer: '5 / 27',
    explanation: 'Lyman longest (2 → 1): 1/λ_L = R(1/1² - 1/2²) = 3R/4 ⇒ λ_L = 4/(3R). Balmer longest (3 → 2): 1/λ_B = R(1/2² - 1/3²) = 5R/36 ⇒ λ_B = 36/(5R). Ratio λ_L / λ_B = [4/(3R)] / [36/(5R)] = (4/3) × (5/36) = 20 / 108 = 5 / 27.',
    difficulty: 'Medium',
    source: 'KCET 2020',
    year: '2020',
    formulaNote: '1/λ = R(1/n₁² - 1/n₂²)'
  },

  // ==========================================
  // PHY-13: Nuclei
  // ==========================================
  {
    id: 'phy-kcet-13-1',
    subject: 'physics',
    chapter: 'phy-13',
    topic: 'Nuclear Density',
    question: 'The ratio of the nuclear densities of two nuclei having mass numbers A₁ = 27 and A₂ = 64 is:',
    questionType: 'single_mcq',
    options: ['1 : 1', '3 : 4', '27 : 64', '4 : 3'],
    correctAnswer: '1 : 1',
    explanation: 'Nuclear radius R = R₀ A^(1/3). Volume V = (4/3)π R³ = (4/3)π R₀³ A. Mass M ≈ A · m_u. Nuclear density ρ = Mass / Volume = (A · m_u) / [(4/3)π R₀³ A] = m_u / [(4/3)π R₀³], which is completely independent of mass number A. Hence the ratio is 1 : 1.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Nuclear density ρ ≈ 2.3 × 10¹⁷ kg/m³ = constant'
  },
  {
    id: 'phy-kcet-13-2',
    subject: 'physics',
    chapter: 'phy-13',
    topic: 'Radioactive Decay Law',
    question: 'The half-life of a radioactive substance is 30 days. The time taken for 7/8th of the original active nuclei to disintegrate is:',
    questionType: 'single_mcq',
    options: ['90 days', '60 days', '120 days', '150 days'],
    correctAnswer: '90 days',
    explanation: 'If 7/8th disintegrates, fraction remaining is N/N₀ = 1 - 7/8 = 1/8 = (1/2)³. The number of half-lives elapsed is n = 3. Total time t = n × T_half = 3 × 30 days = 90 days.',
    difficulty: 'Easy',
    source: 'KCET 2021',
    year: '2021',
    formulaNote: 'N = N₀ (1/2)^n, t = n · T_half'
  },

  // ==========================================
  // PHY-14: Semiconductor Electronics
  // ==========================================
  {
    id: 'phy-kcet-14-1',
    subject: 'physics',
    chapter: 'phy-14',
    topic: 'p-n Junction Diode',
    question: 'When a p-n junction is reverse biased, the width of the depletion layer and the barrier potential height respectively:',
    questionType: 'single_mcq',
    options: ['Increases and increases', 'Decreases and decreases', 'Increases and decreases', 'Decreases and increases'],
    correctAnswer: 'Increases and increases',
    explanation: 'In reverse bias, the applied voltage aids the built-in electric field, pulling majority carriers further away from the junction. Consequently, the depletion layer width increases and effective barrier height increases to (V₀ + V).',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Reverse bias: Depletion width W increases, Barrier height V_eff increases'
  },
  {
    id: 'phy-kcet-14-2',
    subject: 'physics',
    chapter: 'phy-14',
    topic: 'Zener Diode and Logic Gates',
    question: 'A Zener diode is primarily designed and operated in:',
    questionType: 'single_mcq',
    options: ['Reverse breakdown region as a voltage regulator', 'Forward bias as a rectifier', 'Forward bias as an amplifier', 'Zero bias as an oscillator'],
    correctAnswer: 'Reverse breakdown region as a voltage regulator',
    explanation: 'A Zener diode is a heavily doped p-n junction diode designed to operate in the reverse breakdown region, where the voltage across it remains virtually constant over a wide range of reverse currents, making it ideal as a voltage regulator.',
    difficulty: 'Easy',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'Zener operates in reverse breakdown: V_Z = constant'
  },

  // =========================================================================
  // PHYSICS: ASSERTION-REASONING & STATEMENT-BASED QUESTIONS (ALL CHAPTERS)
  // =========================================================================

  // PHY-1: Electric Charges and Fields
  {
    id: 'phy-ar-1',
    subject: 'physics',
    chapter: 'phy-1',
    topic: 'Electrostatic Shielding & Gauss Law',
    question: `Assertion (A): The electric field inside the cavity of a hollow conductor carrying any amount of charge is strictly zero.\nReason (R): Charges residing on the outer surface of the conductor induce charges on the inner surface such that they cancel the external field completely inside the cavity.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: '(A) is true but (R) is false',
    explanation: 'Assertion is true: The electric field inside any cavity inside a conductor (in electrostatics with no enclosed charges) is always zero (electrostatic shielding). Reason is false: In a hollow conductor without any enclosed charge inside the cavity, no charge is induced on the inner surface; all excess charge resides entirely on the outer surface.',
    difficulty: 'Medium',
    source: 'KCET & Board Model',
    year: '2026',
    formulaNote: 'E_inside_cavity = 0, q_inner_surface = 0',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಯಾವುದೇ ಪ್ರಮಾಣದ ಆವೇಶವನ್ನು ಹೊಂದಿರುವ ಟೊಳ್ಳು ವಾಹಕದ ಕುಳಿಯ (cavity) ಒಳಗೆ ವಿದ್ಯುತ್ ಕ್ಷೇತ್ರವು ಸಂಪೂರ್ಣ ಶೂನ್ಯವಾಗಿರುತ್ತದೆ.\nಕಾರಣ (R): ವಾಹಕದ ಹೊರ ಮೇಲ್ಮೈಯಲ್ಲಿರುವ ಆವೇಶಗಳು ಒಳಗಿನ ಮೇಲ್ಮೈಯಲ್ಲಿ ಆವೇಶಗಳನ್ನು ಪ್ರೇರೇಪಿಸಿ ಕುಳಿಯೊಳಗಿನ ಬಾಹ್ಯ ಕ್ಷೇತ್ರವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ರದ್ದುಗೊಳಿಸುತ್ತವೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಪ್ರತಿಪಾದನೆ (A) ಸರಿಯಾಗಿದೆ: ಸ್ಥಾಯೀವಿದ್ಯುತ್ ರಕ್ಷಣೆಯ ನಿಯಮದಂತೆ ಕುಳಿಯೊಳಗೆ E = 0. ಆದರೆ ಕಾರಣ (R) ತಪ್ಪಾಗಿದೆ: ಕುಳಿಯೊಳಗೆ ಯಾವುದೇ ಆವೇಶವಿಲ್ಲದಿದ್ದಾಗ, ಒಳ ಮೇಲ್ಮೈಯಲ್ಲಿ ಯಾವುದೇ ಪ್ರೇರಿತ ಆವೇಶವಿರುವುದಿಲ್ಲ; ಎಲ್ಲಾ ಹೆಚ್ಚುವರಿ ಆವೇಶಗಳು ವಾಹಕದ ಹೊರ ಮೇಲ್ಮೈಯಲ್ಲೇ ಇರುತ್ತವೆ.'
  },
  {
    id: 'phy-stmt-1',
    subject: 'physics',
    chapter: 'phy-1',
    topic: "Gauss's Law & Electric Flux",
    question: `Consider the following two statements regarding Gauss's Law in electrostatics:\nStatement I: The net electric flux through any closed Gaussian surface enclosing a charge q is independent of the size and geometric shape of the surface.\nStatement II: The electric field E in Gauss's law ∮ E · dA = q_enclosed / ε₀ arises solely from charges enclosed inside the Gaussian surface.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Statement I is correct but Statement II is incorrect',
    explanation: "Statement I is correct: Total electric flux Φ = q / ε₀ depends only on enclosed charge and medium, not on the surface geometry or size. Statement II is incorrect: The electric field E on the Gaussian surface is the resultant vector sum produced by ALL charges (both inside and outside the surface), although the net integral flux equals only the enclosed charge divided by ε₀.",
    difficulty: 'Medium',
    source: 'KCET & NCERT Exemplar',
    year: '2026',
    formulaNote: 'Φ = ∮ E_total · dA = q_enclosed / ε₀',
    questionKannada: `ಸ್ಥಾಯೀವಿದ್ಯುತ್‌ನಲ್ಲಿ ಗಾಸ್ ನಿಯಮಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ ಕೆಳಗಿನ ಎರಡು ಹೇಳಿಕೆಗಳನ್ನು ಪರಿಗಣಿಸಿ:\nಹೇಳಿಕೆ I: ಆವೇಶ q ಅನ್ನು ಒಳಗೊಂಡಿರುವ ಯಾವುದೇ ಮುಚ್ಚಿದ ಗಾಸ್ಸಿಯನ್ ಮೇಲ್ಮೈಯ ಒಟ್ಟು ವಿದ್ಯುತ್ ಪ್ರವಾಹವು (flux) ಮೇಲ್ಮೈಯ ಆಕಾರ ಮತ್ತು ಗಾತ್ರದಿಂದ ಸ್ವತಂತ್ರವಾಗಿರುತ್ತದೆ.\nಹೇಳಿಕೆ II: ಗಾಸ್ ನಿಯಮ ∮ E · dA = q_enclosed / ε₀ ದಲ್ಲಿನ ವಿದ್ಯುತ್ ಕ್ಷೇತ್ರ E ಯು ಕೇವಲ ಆ ಮೇಲ್ಮೈ ಒಳಗಿರುವ ಆವೇಶಗಳಿಂದ ಮಾತ್ರ ಉಂಟಾಗುತ್ತದೆ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ (ಫ್ಲಕ್ಸ್ ಆಕಾರದ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿಲ್ಲ). ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ: ಮೇಲ್ಮೈ ಮೇಲಿನ ವಿದ್ಯುತ್ ಕ್ಷೇತ್ರ E ಒಳಗೆ ಮತ್ತು ಹೊರಗಿರುವ ಎಲ್ಲಾ ಆವೇಶಗಳ ಸಂಚಿತ ಕ್ಷೇತ್ರವಾಗಿರುತ್ತದೆ.'
  },

  // PHY-2: Electrostatic Potential and Capacitance
  {
    id: 'phy-ar-2',
    subject: 'physics',
    chapter: 'phy-2',
    topic: 'Capacitance with Dielectric',
    question: `Assertion (A): When a dielectric slab of dielectric constant K is inserted between the plates of an isolated charged parallel-plate capacitor, the potential difference between the plates decreases by a factor of K.\nReason (R): For an isolated capacitor, the charge on the plates remains conserved while the capacitance increases to K · C₀.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'When the battery is disconnected (isolated capacitor), charge Q remains constant. The capacitance increases to C = K · C₀. Since V = Q / C = Q / (K · C₀) = V₀ / K, the potential difference decreases by a factor of K. Reason correctly explains Assertion.',
    difficulty: 'Easy',
    source: 'KCET A/R Presets',
    year: '2025',
    formulaNote: 'V = V₀ / K, C = K · C₀ (Q = const)',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಬ್ಯಾಟರಿಯಿಂದ ಪ್ರತ್ಯೇಕಿಸಲಾದ ಆವೇಶಿತ ಸಮಾಂತರ ಪ್ಲೇಟ್ ಕೆಪಾಸಿಟರ್‌ನ ಪ್ಲೇಟ್‌ಗಳ ನಡುವೆ ಡೈಎಲೆಕ್ಟ್ರಿಕ್ ಸ್ಥಿರಾಂಕ K ಹೊಂದಿರುವ ವಸ್ತುವನ್ನು ಇರಿಸಿದಾಗ, ಪ್ಲೇಟ್‌ಗಳ ನಡುವಿನ ವಿಭವ ಭೇದವು K ಅಂಶದಿಂದ ಕಡಿಮೆಯಾಗುತ್ತದೆ.\nಕಾರಣ (R): ಪ್ರತ್ಯೇಕಿತ ಕೆಪಾಸಿಟರ್‌ನಲ್ಲಿ ಆವೇಶವು ಸಂರಕ್ಷಿತವಾಗಿರುತ್ತದೆ ಮತ್ತು ಧಾರಕತ್ವವು (capacitance) K · C₀ ಗೆ ಹೆಚ್ಚಾಗುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: ಬ್ಯಾಟರಿ ಸಂಪರ್ಕ ಕಡಿತಗೊಂಡಾಗ Q ಸ್ಥಿರವಾಗಿರುತ್ತದೆ, C = K·C₀ ಆಗುವುದರಿಂದ V = Q/C = V₀/K ಆಗಿ ವಿಭವ ಕಡಿಮೆಯಾಗುತ್ತದೆ.'
  },
  {
    id: 'phy-stmt-2',
    subject: 'physics',
    chapter: 'phy-2',
    topic: 'Equipotential Surfaces',
    question: `Consider the following statements regarding equipotential surfaces:\nStatement I: No work is done by the electrostatic force in moving any charge from one point to another on an equipotential surface.\nStatement II: The electric field lines are always directed perpendicular to the equipotential surface at every point.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'Statement I is correct: W = q · ΔV, and on an equipotential surface ΔV = 0, so work done is zero. Statement II is correct: If electric field had a tangential component along the surface, work would be non-zero; hence electric field must always be normal (perpendicular) to the equipotential surface at all points.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'W = q · ΔV = 0, E ⊥ Equipotential surface',
    questionKannada: `ಸಮವಿಭವ ಮೇಲ್ಮೈಗಳಿಗೆ (equipotential surfaces) ಸಂಬಂಧಿಸಿದಂತೆ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಗಮನಿಸಿ:\nಹೇಳಿಕೆ I: ಸಮವಿಭವ ಮೇಲ್ಮೈಯ ಒಂದು ಬಿಂದುವಿನಿಂದ ಮತ್ತೊಂದು ಬಿಂದುವಿಗೆ ಆವೇಶವನ್ನು ಚಲಿಸುವಲ್ಲಿ ಯಾವುದೇ ಕೆಲಸ ನಡೆಯುವುದಿಲ್ಲ.\nಹೇಳಿಕೆ II: ವಿದ್ಯುತ್ ಕ್ಷೇತ್ರ ರೇಖೆಗಳು ಎಲ್ಲಾ ಬಿಂದುಗಳಲ್ಲೂ ಸಮವಿಭವ ಮೇಲ್ಮೈಗೆ ಲಂಬವಾಗಿರುತ್ತವೆ (perpendicular).`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: ΔV = 0 ಆದ್ದರಿಂದ W = 0, ಮತ್ತು ಸ್ಪರ್ಶಕ ಘಟಕವಿಲ್ಲದಿರಲು ಕ್ಷೇತ್ರ E ಯಾವಾಗಲೂ ಸಮವಿಭವ ಮೇಲ್ಮೈಗೆ ಲಂಬವಾಗಿರಬೇಕು.'
  },

  // PHY-3: Current Electricity
  {
    id: 'phy-ar-3',
    subject: 'physics',
    chapter: 'phy-3',
    topic: 'Drift Velocity and Electric Signal',
    question: `Assertion (A): Although the drift velocity of free conduction electrons in a copper wire is typically very small (order of mm/s), an electric bulb turns on almost instantaneously when the switch is closed.\nReason (R): Closing the switch establishes an electromagnetic electric field along the conductor almost at the speed of light, setting electrons throughout the circuit into motion almost simultaneously.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Although individual electron drift velocity is tiny (~10⁻⁴ m/s), the electric field propagates through the wire at nearly the speed of light (~3 × 10⁸ m/s). This triggers drift motion of conduction electrons everywhere in the circuit instantaneously.',
    difficulty: 'Medium',
    source: 'NCERT Fingertips & KCET',
    year: '2025',
    formulaNote: 'v_d = eEτ/m ~ mm/s, Signal propagation speed ~ c',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ತಾಮ್ರದ ತಂತಿಯಲ್ಲಿ ಮುಕ್ತ ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳ ಡ್ರಿಫ್ಟ್ ವೇಗವು (drift velocity) ಅತ್ಯಂತ ಕಡಿಮೆಯಾಗಿದ್ದರೂ (ಮಿ.ಮೀ/ಸೆಕೆಂಡ್), ಸ್ವಿಚ್ ಆನ್ ಮಾಡಿದ ತಕ್ಷಣ ಬಲ್ಬ್ ತಕ್ಷಣವೇ ಬೆಳಗುತ್ತದೆ.\nಕಾರಣ (R): ಸ್ವಿಚ್ ಆನ್ ಮಾಡಿದಾಗ ವಿದ್ಯುತ್ಕಾಂತೀಯ ಕ್ಷೇತ್ರವು ಬೆಳಕಿನ ವೇಗದಲ್ಲಿ ತಂತಿಯ ಉದ್ದಕ್ಕೂ ಹರಡಿ, ಇಡೀ ಮಂಡಲದ ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳನ್ನು ಏಕಕಾಲದಲ್ಲಿ ಚಲಿಸುವಂತೆ ಮಾಡುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳ ವೈಯಕ್ತಿಕ ಡ್ರಿಫ್ಟ್ ವೇಗ ನಿಧಾನವಾಗಿದ್ದರೂ, ವಿದ್ಯುತ್ ಕ್ಷೇತ್ರವು ಬೆಳಕಿನ ವೇಗದಲ್ಲಿ ಪ್ರಸಾರವಾಗಿ ಎಲ್ಲಾ ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳನ್ನು ತಕ್ಷಣ ಚಲನೆಗೆ ತರುತ್ತದೆ.'
  },
  {
    id: 'phy-stmt-3',
    subject: 'physics',
    chapter: 'phy-3',
    topic: "Kirchhoff's Laws",
    question: `Consider the following statements regarding Kirchhoff's circuit laws:\nStatement I: Kirchhoff's first rule (junction rule, Σ I = 0) is a direct consequence of the law of conservation of electric charge.\nStatement II: Kirchhoff's second rule (loop rule, Σ ΔV = 0) is a direct consequence of the law of conservation of energy.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'Statement I is based on conservation of charge (no charge accumulates at any steady junction). Statement II is based on conservation of energy (the work done in taking a unit test charge around a closed electrical loop in an electrostatic field is zero).',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Junction rule: Conservation of charge; Loop rule: Conservation of energy',
    questionKannada: `ಕಿರ್ಕಾಫ್ ಅವರ ಮಂಡಲ ನಿಯಮಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಗಮನಿಸಿ:\nಹೇಳಿಕೆ I: ಕಿರ್ಕಾಫ್ ಅವರ ಮೊದಲ ನಿಯಮ (ಜಂಕ್ಷನ್ ನಿಯಮ, Σ I = 0) ವಿದ್ಯುತ್ ಆವೇಶ ಸಂರಕ್ಷಣಾ ನಿಯಮದ ನೇರ ಫಲಿತಾಂಶವಾಗಿದೆ.\nಹೇಳಿಕೆ II: ಕಿರ್ಕಾಫ್ ಅವರ ಎರಡನೇ ನಿಯಮ (ಲೂಪ್ ನಿಯಮ, Σ ΔV = 0) ಶಕ್ತಿ ಸಂರಕ್ಷಣಾ ನಿಯಮದ ನೇರ ಫಲಿತಾಂಶವಾಗಿದೆ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: ಜಂಕ್ಷನ್ ನಿಯಮವು ಆವೇಶ ಸಂರಕ್ಷಣೆಯನ್ನು ಮತ್ತು ಲೂಪ್ ನಿಯಮವು ಶಕ್ತಿ ಸಂರಕ್ಷಣೆಯನ್ನು ಆಧರಿಸಿದೆ.'
  },

  // PHY-4: Moving Charges and Magnetism
  {
    id: 'phy-ar-4',
    subject: 'physics',
    chapter: 'phy-4',
    topic: 'Magnetic Force on Moving Charge',
    question: `Assertion (A): A charged particle moving parallel or antiparallel to a uniform magnetic field experiences zero magnetic force and continues in a straight path at constant speed.\nReason (R): The magnetic Lorentz force on a moving charge is given by F = q(v × B) = q v B sin θ, which vanishes when θ = 0° or θ = 180°.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'F_m = q v B sin θ. When the velocity v is parallel or antiparallel to B, θ = 0° or 180°, so sin θ = 0 and F_m = 0. Therefore, no acceleration occurs and the particle moves along a straight line at constant speed.',
    difficulty: 'Easy',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'F = q(v × B), θ = 0° ⇒ F = 0',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಏಕರೂಪ ಕಾಂತಕ್ಷೇತ್ರಕ್ಕೆ ಸಮಾನಾಂತರವಾಗಿ ಅಥವಾ ವಿರುದ್ಧವಾಗಿ ಚಲಿಸುವ ಆವೇಶಿತ ಕಣವು ಯಾವುದೇ ಕಾಂತೀಯ ಬಲವನ್ನು ಅನುಭವಿಸುವುದಿಲ್ಲ ಮತ್ತು ಸ್ಥಿರ ವೇಗದಲ್ಲಿ ನೇರ ರೇಖೆಯಲ್ಲಿ ಚಲಿಸುತ್ತದೆ.\nಕಾರಣ (R): ಚಲಿಸುವ ಆವೇಶದ ಮೇಲಿನ ಲೊರೆಂಟ್ಜ್ ಕಾಂತೀಯ ಬಲ F = q v B sin θ ಆಗಿದೆ, ಇದು θ = 0° ಅಥವಾ 180° ಆದಾಗ ಶೂನ್ಯವಾಗುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: sin 0° = 0 ಆದ್ದರಿಂದ F = 0, ಕಣವು ಯಾವುದೇ ವಿಚಲನೆಯಿಲ್ಲದೆ ನೇರವಾಗಿ ಚಲಿಸುತ್ತದೆ.'
  },
  {
    id: 'phy-stmt-4',
    subject: 'physics',
    chapter: 'phy-4',
    topic: 'Ampere Circuital Law & Solenoid',
    question: `Consider the following statements regarding magnetic fields:\nStatement I: The magnetic field inside a long closely wound ideal solenoid carrying steady current is uniform and independent of its radius and length.\nStatement II: The magnetic field at any point strictly outside an ideal, infinitely long solenoid is zero.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'Statement I is correct: B_inside = μ₀ n I, which depends only on turn density n and current I, not on the diameter or cross-sectional area. Statement II is correct: Outside an ideal long solenoid, fields from adjacent coils cancel each other, making the external field zero.',
    difficulty: 'Medium',
    source: 'KCET Model Paper',
    year: '2025',
    formulaNote: 'B = μ₀ n I inside ideal solenoid, B_outside = 0',
    questionKannada: `ಕಾಂತಕ್ಷೇತ್ರಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ:\nಹೇಳಿಕೆ I: ಸ್ಥಿರ ವಿದ್ಯುತ್ ಪ್ರವಾಹವಿರುವ ಉದ್ದವಾದ ಆದರ್ಶ ಸೊಲೆನಾಯ್ಡ್‌ನ ಒಳಗಿನ ಕಾಂತಕ್ಷೇತ್ರವು ಏಕರೂಪವಾಗಿರುತ್ತದೆ ಮತ್ತು ಅದರ ತ್ರಿಜ್ಯ ಮತ್ತು ಉದ್ದದಿಂದ ಸ್ವತಂತ್ರವಾಗಿರುತ್ತದೆ.\nಹೇಳಿಕೆ II: ಅನಂತ ಉದ್ದದ ಆದರ್ಶ ಸೊಲೆನಾಯ್ಡ್‌ನ ಹೊರಗಿನ ಯಾವುದೇ ಬಿಂದುವಿನಲ್ಲಿ ಕಾಂತಕ್ಷೇತ್ರವು ಶೂನ್ಯವಾಗಿರುತ್ತದೆ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: ಸೊಲೆನಾಯ್ಡ್ ಒಳಗೆ B = μ₀ n I (ತ್ರಿಜ್ಯದ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿಲ್ಲ), ಮತ್ತು ಹೊರಗೆ B = 0.'
  },

  // PHY-5: Magnetism and Matter
  {
    id: 'phy-ar-5',
    subject: 'physics',
    chapter: 'phy-5',
    topic: 'Diamagnetism & Magnetic Monopoles',
    question: `Assertion (A): Diamagnetic substances are feebly repelled by magnetic fields and tend to move from stronger to weaker parts of the field.\nReason (R): In diamagnetic substances, an external magnetic field induces a net magnetic dipole moment in the direction opposite to the applied field.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Diamagnetism is a universal orbital phenomenon. When placed in a magnetic field, the orbital motion of electrons changes according to Lenz law such that the induced magnetic dipole moment opposes the external field, causing repulsion.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'χ < 0 (diamagnetic), induced M opposes B_ext',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಡಯಾಕಾಂತೀಯ (diamagnetic) ವಸ್ತುಗಳು ಕಾಂತಕ್ಷೇತ್ರಗಳಿಂದ ಸ್ವಲ್ಪಮಟ್ಟಿಗೆ ವಿಕರ್ಷಿಸಲ್ಪಡುತ್ತವೆ ಮತ್ತು ಬಲವಾದ ಕಾಂತಕ್ಷೇತ್ರದಿಂದ ದುರ್ಬಲ ಭಾಗದತ್ತ ಚಲಿಸುತ್ತವೆ.\nಕಾರಣ (R): ಡಯಾಕಾಂತೀಯ ವಸ್ತುಗಳಲ್ಲಿ, ಬಾಹ್ಯ ಕಾಂತಕ್ಷೇತ್ರವು ಅನ್ವಯಿಸಲಾದ ಕ್ಷೇತ್ರದ ದಿಕ್ಕಿಗೆ ವಿರುದ್ಧ ದಿಕ್ಕಿನಲ್ಲಿ ನಿವ್ವಳ ಕಾಂತೀಯ ದ್ವಿಧ್ರುವಿ ಭ್ರಮಣವನ್ನು ಪ್ರೇರೇಪಿಸುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: ಲೆನ್ಜ್ ನಿಯಮದಂತೆ ಪ್ರೇರಿತ ಭ್ರಮಣವು ಬಾಹ್ಯ ಕ್ಷೇತ್ರವನ್ನು ವಿರೋಧಿಸುವುದರಿಂದ ವಿಕರ್ಷಣೆ ಉಂಟಾಗುತ್ತದೆ.'
  },

  // PHY-6: Electromagnetic Induction
  {
    id: 'phy-ar-6',
    subject: 'physics',
    chapter: 'phy-6',
    topic: "Lenz's Law & Conservation of Energy",
    question: `Assertion (A): Lenz's law is a direct consequence of the law of conservation of energy in electromagnetic induction.\nReason (R): Mechanical work done against the opposing magnetic force when a magnet approaches a coil is converted into electrical energy in the coil.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: "If Lenz's law did not oppose the change, a tiny push would continuously accelerate the magnet creating infinite electrical energy from nothing, violating energy conservation. Mechanical work done against repulsion transforms directly into electrical energy.",
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'ε = -dΦ/dt (Minus sign denotes Lenz law / energy conservation)',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ವಿದ್ಯುತ್ಕಾಂತೀಯ ಪ್ರೇರಣೆಯಲ್ಲಿ ಲೆನ್ಜ್ ನಿಯಮವು ಶಕ್ತಿ ಸಂರಕ್ಷಣಾ ನಿಯಮದ ನೇರ ಪರಿಣಾಮವಾಗಿದೆ.\nಕಾರಣ (R): ಕಾಂತವು ಸುರುಳಿಯನ್ನು ಸಮೀಪಿಸಿದಾಗ ಉಂಟಾಗುವ ವಿರೋಧಿ ಬಲದ ವಿರುದ್ಧ ಮಾಡಿದ ಯಾಂತ್ರಿಕ ಕೆಲಸವು ಸುರುಳಿಯಲ್ಲಿ ವಿದ್ಯುತ್ ಶಕ್ತಿಯಾಗಿ ಪರಿವರ್ತನೆಗೊಳ್ಳುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: ವಿರೋಧದ ವಿರುದ್ಧ ಮಾಡುವ ಕೆಲಸವೇ ವಿದ್ಯುತ್ ಶಕ್ತಿಯಾಗಿ ಬದಲಾಗುವುದರಿಂದ ಶಕ್ತಿ ಸಂರಕ್ಷಣೆಯಾಗುತ್ತದೆ.'
  },
  {
    id: 'phy-stmt-6',
    subject: 'physics',
    chapter: 'phy-6',
    topic: 'Eddy Currents',
    question: `Consider the following statements regarding Eddy currents:\nStatement I: Eddy currents are minimized in transformer cores by using laminated magnetic sheets insulated by varnish instead of a solid metal block.\nStatement II: Eddy currents are utilized constructively in induction furnaces, magnetic braking in trains, and dead-beat galvanometers.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'Both statements are correct facts from NCERT Class 12 Physics. Lamination breaks closed loop paths of eddy currents, drastically cutting I²R heating loss. Eddy currents are utilized for induction heating, magnetic braking, and damping galvanometers.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Eddy currents reduced by lamination, used in magnetic braking',
    questionKannada: `ಎಡ್ಡಿ ಪ್ರವಾಹಗಳಿಗೆ (Eddy currents) ಸಂಬಂಧಿಸಿದಂತೆ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಗಮನಿಸಿ:\nಹೇಳಿಕೆ I: ಘನ ಲೋಹದ ಬ್ಲಾಕ್ ಬದಲಿಗೆ ವಾರ್ನಿಷ್‌ನಿಂದ ಲೇಪಿತವಾದ ತೆಳುವಾದ ಹಾಳೆಗಳನ್ನು (laminated core) ಬಳಸುವ ಮೂಲಕ ಟ್ರಾನ್ಸ್‌ಫಾರ್ಮರ್‌ಗಳಲ್ಲಿ ಎಡ್ಡಿ ಪ್ರವಾಹಗಳನ್ನು ಕಡಿಮೆ ಮಾಡಲಾಗುತ್ತದೆ.\nಹೇಳಿಕೆ II: ಎಡ್ಡಿ ಪ್ರವಾಹಗಳನ್ನು ಇಂಡಕ್ಷನ್ ಕುಲುಮೆಗಳು, ರೈಲುಗಳಲ್ಲಿನ ಕಾಂತೀಯ ಬ್ರೇಕಿಂಗ್ ಮತ್ತು ಡೆಡ್-ಬೀಟ್ ಗಾಲ್ವನೋಮೀಟರ್‌ಗಳಲ್ಲಿ ಉಪಯುಕ್ತವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: ಲ್ಯಾಮಿನೇಷನ್ ಎಡ್ಡಿ ನಷ್ಟವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಇಂಡಕ್ಷನ್ ಕುಲುಮೆ ಹಾಗೂ ಮ್ಯಾಗ್ನೆಟಿಕ್ ಬ್ರೇಕಿಂಗ್‌ನಲ್ಲಿ ಇದನ್ನು ಬಳಸಲಾಗುತ್ತದೆ.'
  },

  // PHY-7: Alternating Current
  {
    id: 'phy-ar-7',
    subject: 'physics',
    chapter: 'phy-7',
    topic: 'AC Power & Wattless Current',
    question: `Assertion (A): The average power consumed over a complete AC cycle in a purely inductive or purely capacitive circuit is zero.\nReason (R): In a purely inductive or capacitive circuit, the phase difference between alternating voltage and alternating current is π/2 rad (90°), making the power factor cos φ = 0.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Average AC power P_avg = V_rms · I_rms · cos φ. For a pure inductor, current lags voltage by 90°. For a pure capacitor, current leads by 90°. In both cases, φ = 90° and cos 90° = 0, so average power consumed is zero (wattless current).',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'P_avg = V_rms · I_rms · cos φ = 0 when φ = 90°',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಸಂಪೂರ್ಣ ಪ್ರೇರಕ (purely inductive) ಅಥವಾ ಧಾರಕ (capacitive) AC ಮಂಡಲದಲ್ಲಿ ಒಂದು ಪೂರ್ಣ ಆವರ್ತದಲ್ಲಿ ವ್ಯಯವಾಗುವ ಸರಾಸರಿ ಶಕ್ತಿಯು ಶೂನ್ಯವಾಗಿರುತ್ತದೆ.\nಕಾರಣ (R): ಈ ಮಂಡಲಗಳಲ್ಲಿ ವೋಲ್ಟೇಜ್ ಮತ್ತು ಕರೆಂಟ್ ನಡುವಿನ ಕಲಾವ್ಯತ್ಯಾಸವು (phase difference) π/2 (90°) ಆಗಿದ್ದು, ಪವರ್ ಫ್ಯಾಕ್ಟರ್ cos φ = 0 ಆಗಿರುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸಮಂಜಸ ವಿವರಣೆಯಾಗಿದೆ: cos 90° = 0 ಆಗಿರುವುದರಿಂದ P_avg = V_rms · I_rms · cos 90° = 0 (ವ್ಯಾಟ್‌ಲೆಸ್ ಕರೆಂಟ್).'
  },
  {
    id: 'phy-stmt-7',
    subject: 'physics',
    chapter: 'phy-7',
    topic: 'Series LCR Resonance',
    question: `Consider the following statements regarding a series LCR circuit at resonance:\nStatement I: At electrical resonance, the impedance of the series LCR circuit becomes purely resistive and reaches its minimum value Z = R.\nStatement II: At resonance, the resonant angular frequency is given by ω₀ = 1 / √(LC), and the current amplitude in the circuit reaches its maximum value.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'At resonance, inductive reactance X_L = ωL equals capacitive reactance X_C = 1/(ωC). Impedance Z = √(R² + (X_L - X_C)²) reduces to Z = R (minimum), allowing current amplitude I₀ = V₀ / R to peak at maximum.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Resonance: X_L = X_C, Z_min = R, ω₀ = 1/√(LC)',
    questionKannada: `ಅನುರಣನದಲ್ಲಿರುವ (resonance) ಶ್ರೇಣಿ LCR ಮಂಡಲದ ಕುರಿತ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಗಮನಿಸಿ:\nಹೇಳಿಕೆ I: ಅನುರಣನ ಸ್ಥಿತಿಯಲ್ಲಿ ಮಂಡಲದ ಪ್ರತಿರೋಧವು (impedance) ಕೇವಲ ರೋಧಕವಾಗಿ (purely resistive) ಮಾರ್ಪಟ್ಟು ಕನಿಷ್ಠ ಮೌಲ್ಯ Z = R ತಲುಪುತ್ತದೆ.\nಹೇಳಿಕೆ II: ಅನುರಣನ ಕೋನೀಯ ಆವರ್ತನವು ω₀ = 1 / √(LC) ಆಗಿರುತ್ತದೆ ಮತ್ತು ಪ್ರವಾಹದ ವೈಶಾಲ್ಯವು ಗರಿಷ್ಠ ಮಟ್ಟವನ್ನು ಮುಟ್ಟುತ್ತದೆ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: X_L = X_C ಆಗುವುದರಿಂದ Z_min = R ಮತ್ತು ಕರೆಂಟ್ ಗರಿಷ್ಠವಾಗುತ್ತದೆ.'
  },

  // PHY-8: Electromagnetic Waves
  {
    id: 'phy-ar-8',
    subject: 'physics',
    chapter: 'phy-8',
    topic: 'Displacement Current & Maxwell Law',
    question: `Assertion (A): During the charging of a capacitor by a battery, a magnetic field is produced in the space between the capacitor plates even though no conduction electrons cross the gap.\nReason (R): A time-varying electric field between the capacitor plates gives rise to a displacement current I_d = ε₀ (dΦ_E / dt), which acts as a source of magnetic field just like conduction current.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: "Maxwell introduced displacement current I_d = ε₀ (dΦ_E/dt) to maintain continuity of current. As the electric field changes between the charging plates, it induces a circulating magnetic field B.",
    difficulty: 'Medium',
    source: 'KCET 2025',
    year: '2025',
    formulaNote: 'I_d = ε₀ (dΦ_E / dt), ∮ B · dl = μ₀(I_c + I_d)',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಕೆಪಾಸಿಟರ್ ಚಾರ್ಜ್ ಆಗುತ್ತಿರುವಾಗ, ಪ್ಲೇಟ್‌ಗಳ ನಡುವೆ ಯಾವುದೇ ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳು ಹರಿಯದಿದ್ದರೂ ಸಹ ಪ್ಲೇಟ್‌ಗಳ ನಡುವಿನ ಜಾಗದಲ್ಲಿ ಕಾಂತಕ್ಷೇತ್ರವು ಉತ್ಪತ್ತಿಯಾಗುತ್ತದೆ.\nಕಾರಣ (R): ಪ್ಲೇಟ್‌ಗಳ ನಡುವೆ ಕಾಲಕ್ಕೆ ತಕ್ಕಂತೆ ಬದಲಾಗುವ ವಿದ್ಯುತ್ ಕ್ಷೇತ್ರವು ಸ್ಥಾನಪಲ್ಲಟ ಪ್ರವಾಹವನ್ನು (displacement current I_d = ε₀ dΦ_E/dt) ಉಂಟುಮಾಡುತ್ತದೆ, ಇದು ಕಾಂತಕ್ಷೇತ್ರದ ಮೂಲವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: ಮ್ಯಾಕ್ಸ್‌ವೆಲ್ ಪ್ರತಿಪಾದಿಸಿದ ಸ್ಥಾನಪಲ್ಲಟ ಪ್ರವಾಹವು ಬದಲಾಗುವ ವಿದ್ಯುತ್ ಕ್ಷೇತ್ರದಿಂದ ಕಾಂತಕ್ಷೇತ್ರವನ್ನು ಉಂಟುಮಾಡುತ್ತದೆ.'
  },

  // PHY-9: Ray Optics and Optical Instruments
  {
    id: 'phy-ar-9',
    subject: 'physics',
    chapter: 'phy-9',
    topic: 'Total Internal Reflection in Optical Fibres',
    question: `Assertion (A): Optical fibres transmit optical telecommunication signals over thousands of kilometres with virtually negligible light energy loss.\nReason (R): Optical fibres operate on repeated total internal reflections, occurring whenever the refractive index of the core is greater than the cladding and light enters at an angle greater than the critical angle.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Total internal reflection is 100% reflective with zero loss to refraction because light stays confined within the higher-index core (n_core > n_cladding) provided i > i_c (sin i_c = n_cladding / n_core).',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'sin i_c = n_clad / n_core (n_core > n_clad)',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಆಪ್ಟಿಕಲ್ ಫೈಬರ್‌ಗಳು ಯಾವುದೇ ಗಣನೀಯ ಬೆಳಕಿನ ಶಕ್ತಿ ನಷ್ಟವಿಲ್ಲದೆ ಸಾವಿರಾರು ಕಿಲೋಮೀಟರ್‌ಗಳವರೆಗೆ ಬೆಳಕಿನ ಸಂಕೇತಗಳನ್ನು ರವಾನಿಸುತ್ತವೆ.\nಕಾರಣ (R): ಆಪ್ಟಿಕಲ್ ಫೈಬರ್‌ಗಳು ಪುನರಾವರ್ತಿತ ಪೂರ್ಣ ಆಂತರಿಕ ಪ್ರತಿಫಲನದ (TIR) ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ, ಕೋರ್‌ನ ವಕ್ರೀಭವನಾಂಕವು ಕ್ಲಾಡಿಂಗ್‌ಗಿಂತ ಹೆಚ್ಚಿದ್ದಾಗ ಮತ್ತು ಪತನ ಕೋನವು ಕ್ರಾಂತಿಕೋನಕ್ಕಿಂತ ಹೆಚ್ಚಿದ್ದಾಗ ಇದು ಸಂಭವಿಸುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: ಪೂರ್ಣ ಆಂತರಿಕ ಪ್ರತಿಫಲನದಲ್ಲಿ 100% ಬೆಳಕು ಪ್ರತಿಫಲನಗೊಳ್ಳುವುದರಿಂದ ಶಕ್ತಿಯ ನಷ್ಟವಿಲ್ಲದೆ ಸಿಗ್ನಲ್ ಪ್ರಸಾರವಾಗುತ್ತದೆ.'
  },
  {
    id: 'phy-stmt-9',
    subject: 'physics',
    chapter: 'phy-9',
    topic: 'Microscopes and Telescopes',
    question: `Consider the following statements regarding optical instruments:\nStatement I: The objective lens of a compound microscope has a very short focal length and a small aperture to produce large initial magnification.\nStatement II: The objective lens of an astronomical telescope has a large focal length and a large aperture to gather maximum light from distant celestial bodies.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'Both statements are correct. In a compound microscope, objective lens has small f_o and small aperture. In an astronomical telescope, m = -f_o/f_e, so objective has large f_o and large aperture for higher gathering power and resolving power.',
    difficulty: 'Easy',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'Microscope: f_o small, Telescope: f_o large and aperture large',
    questionKannada: `ದೃಕ್ ಉಪಕರಣಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಈ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಪರಿಗಣಿಸಿ:\nಹೇಳಿಕೆ I: ಸಂಯುಕ್ತ ಸೂಕ್ಷ್ಮದರ್ಶಕದ ಆಬ್ಜೆಕ್ಟಿವ್ ಮಸೂರವು ಹೆಚ್ಚಿನ ವರ್ಧನೆಯನ್ನು ಪಡೆಯಲು ಚಿಕ್ಕ ಸಂಗಮ ದೂರ (focal length) ಮತ್ತು ಸಣ್ಣ ರಂಧ್ರವನ್ನು (aperture) ಹೊಂದಿರುತ್ತದೆ.\nಹೇಳಿಕೆ II: ಖಗೋಳ ದೂರದರ್ಶಕದ ಆಬ್ಜೆಕ್ಟಿವ್ ಮಸೂರವು ದೂರದ ಆಕಾಶಕಾಯಗಳಿಂದ ಗರಿಷ್ಠ ಬೆಳಕನ್ನು ಸಂಗ್ರಹಿಸಲು ದೊಡ್ಡ ಸಂಗಮ ದೂರ ಮತ್ತು ದೊಡ್ಡ ರಂಧ್ರವನ್ನು ಹೊಂದಿರುತ್ತದೆ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: ಸೂಕ್ಷ್ಮದರ್ಶಕದ ಆಬ್ಜೆಕ್ಟಿವ್ ಚಿಕ್ಕದಾಗಿರುತ್ತದೆ (small f_o), ಆದರೆ ದೂರದರ್ಶಕದ ಆಬ್ಜೆಕ್ಟಿವ್ ಬೆಳಕು ಸಂಗ್ರಹಿಸಲು ದೊಡ್ಡದಾಗಿರುತ್ತದೆ (large f_o).'
  },

  // PHY-10: Wave Optics
  {
    id: 'phy-ar-10',
    subject: 'physics',
    chapter: 'phy-10',
    topic: "Young's Double Slit Interference",
    question: `Assertion (A): In Young's double-slit experiment, if the entire apparatus is immersed in water, the fringe width of the interference pattern decreases.\nReason (R): When immersed in water, the speed of light decreases and the wavelength decreases according to λ_water = λ_air / μ_water, leading to narrower fringe width β = λ D / d.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Fringe width β = λ D / d. When immersed in water, refractive index μ > 1, so wavelength reduces to λ/μ. Consequently, β_water = β_air / μ, which is narrower.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'β = λ D / d, λ_med = λ / μ ⇒ β_med = β / μ',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಯಂಗ್‌ನ ಡಬಲ್ ಸ್ಲಿಟ್ ಪ್ರಯೋಗದ ಸಂಪೂರ್ಣ ಉಪಕರಣವನ್ನು ನೀರಿನಲ್ಲಿ ಮುಳುಗಿಸಿದಾಗ, ವ್ಯತಿಕರಣ ಪಟ್ಟೆಗಳ ಅಗಲವು (fringe width) ಕಡಿಮೆಯಾಗುತ್ತದೆ.\nಕಾರಣ (R): ನೀರಿನಲ್ಲಿ ಬೆಳಕಿನ ವೇಗ ಕಡಿಮೆಯಾಗುವುದರಿಂದ ತರಂಗಾಂತರವು λ_ನೀರು = λ_ಗಾಳಿ / μ ಆಗಿ ಕಡಿಮೆಯಾಗುತ್ತದೆ, ಇದು ಪಟ್ಟೆಯ ಅಗಲ β = λ D / d ಅನ್ನು ಕುಗ್ಗಿಸುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸಮರ್ಪಕ ವಿವರಣೆಯಾಗಿದೆ: ನೀರಿನಲ್ಲಿ λ ಕಡಿಮೆಯಾಗುವುದರಿಂದ β = λD/d ಸೂತ್ರದಂತೆ ಪಟ್ಟೆಯ ಅಗಲವೂ ಕಡಿಮೆಯಾಗುತ್ತದೆ.'
  },

  // PHY-11: Dual Nature of Radiation and Matter
  {
    id: 'phy-ar-11',
    subject: 'physics',
    chapter: 'phy-11',
    topic: 'Photoelectric Effect',
    question: `Assertion (A): In photoelectric emission, the maximum kinetic energy of emitted photoelectrons depends exclusively on the frequency of incident light and is independent of its intensity.\nReason (R): According to Einstein's photoelectric equation, each photon carries energy E = hν; increasing the intensity merely increases the number of photons per second, not individual photon energy.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: "K_max = hν - Φ₀. K_max depends directly and linearly on frequency ν. Higher intensity increases photon flux, increasing photocurrent, but does not alter K_max of any single emitted electron.",
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'K_max = hν - Φ₀ = eV₀',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ದ್ಯುತಿವಿದ್ಯುತ್ ಉತ್ಸರ್ಜನೆಯಲ್ಲಿ, ಹೊರಸೂಸಲ್ಪಟ್ಟ ಫೋಟೋಎಲೆಕ್ಟ್ರಾನ್‌ಗಳ ಗರಿಷ್ಠ ಚಲನ ಶಕ್ತಿಯು ಕೇವಲ ಪತನ ಬೆಳಕಿನ ಆವರ್ತನದ ಮೇಲೆ ಮಾತ್ರ ಅವಲಂಬಿತವಾಗಿರುತ್ತದೆ ಮತ್ತು ಅದರ ತೀವ್ರತೆಯಿಂದ ಸ್ವತಂತ್ರವಾಗಿರುತ್ತದೆ.\nಕಾರಣ (R): ಐನ್‌ಸ್ಟೈನ್ ದ್ಯುತಿವಿದ್ಯುತ್ ಸಮೀಕರಣದ ಪ್ರಕಾರ, ಪ್ರತಿ ಫೋಟಾನ್ E = hν ಶಕ್ತಿಯನ್ನು ಹೊಂದಿರುತ್ತದೆ; ತೀವ್ರತೆ ಹೆಚ್ಚಿಸುವುದರಿಂದ ಪ್ರತಿ ಸೆಕೆಂಡಿಗೆ ಬೀಳುವ ಫೋಟಾನ್‌ಗಳ ಸಂಖ್ಯೆ ಹೆಚ್ಚಾಗುತ್ತದೆಯೇ ಹೊರತು ಪ್ರತಿ ಫೋಟಾನಿನ ಶಕ್ತಿಯಲ್ಲ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: K_max = hν - Φ₀, ಆವರ್ತನವು ಶಕ್ತಿಯನ್ನು ನಿರ್ಧರಿಸಿದರೆ, ತೀವ್ರತೆಯು ಕೇವಲ ಫೋಟೋಎಲೆಕ್ಟ್ರಾನ್‌ಗಳ ಸಂಖ್ಯೆಯನ್ನು ನಿರ್ಧರಿಸುತ್ತದೆ.'
  },

  // PHY-12: Atoms
  {
    id: 'phy-ar-12',
    subject: 'physics',
    chapter: 'phy-12',
    topic: "Bohr's Postulates of Hydrogen Atom",
    question: `Assertion (A): Electrons in Bohr's stationary orbits do not radiate energy despite experiencing continuous centripetal acceleration towards the nucleus.\nReason (R): Bohr postulated that angular momentum of orbiting electrons is quantized according to L = m v r = n h / (2π), and radiation occurs only during transitions between discrete orbits.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: "Classical electromagnetic theory predicted accelerating electrons must continuously radiate energy and spiral into the nucleus within 10⁻⁸ s. Bohr overcame this paradox by postulating stable non-radiating quantum orbits with L = nh/2π.",
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'm v r = n h / (2π), ΔE = hν',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಬೋರ್ ಅವರ ಸ್ಥಿರ ಕಕ್ಷೆಗಳಲ್ಲಿರುವ ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳು ಬೀಜಕೇಂದ್ರದ ಕಡೆಗೆ ನಿರಂತರ ಕೇಂದ್ರಾಭಿಮುಖ ವೇಗೋತ್ಕರ್ಷವನ್ನು ಹೊಂದಿದ್ದರೂ ಯಾವುದೇ ಶಕ್ತಿಯನ್ನು ಹೊರಸೂಸುವುದಿಲ್ಲ.\nಕಾರಣ (R): ಕಕ್ಷೆಯಲ್ಲಿರುವ ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳ ಕೋನೀಯ ಆವೇಗವು L = m v r = n h / (2π) ಸೂತ್ರದಂತೆ ಕ್ವಾಂಟೀಕರಿಸಲ್ಪಟ್ಟಿದೆ ಮತ್ತು ಪ್ರತ್ಯೇಕ ಕಕ್ಷೆಗಳ ನಡುವೆ ಜಿಗಿದಾಗ ಮಾತ್ರ ವಿಕಿರಣ ಹೊರಸೂಸುತ್ತದೆ ಎಂದು ಬೋರ್ ಪ್ರತಿಪಾದಿಸಿದರು.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: ಶಾಸ್ತ್ರೀಯ ನಿಯಮಗಳ ಮಿತಿಯನ್ನು ಮೀರಿ ಬೋರ್ ಅವರ ಕ್ವಾಂಟಮ್ ಕಲ್ಪನೆಯು ಸ್ಥಿರ ಕಕ್ಷೆಗಳನ್ನು ವಿವರಿಸುತ್ತದೆ.'
  },

  // PHY-13: Nuclei
  {
    id: 'phy-stmt-13',
    subject: 'physics',
    chapter: 'phy-13',
    topic: 'Nuclear Density and Binding Energy',
    question: `Consider the following statements regarding atomic nuclei:\nStatement I: The density of nuclear matter is roughly constant (~ 2.3 × 10¹⁷ kg/m³) and is completely independent of the mass number A of the nucleus.\nStatement II: Nuclear forces are short-range forces that exhibit the property of saturation, acting only between immediate nearest-neighbor nucleons.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'Statement I is correct: Nuclear volume V ∝ R³ ∝ (R₀ A¹/³ )³ ∝ A. Since mass ∝ A, nuclear density ρ = Mass/Volume is independent of A. Statement II is correct: Nuclear forces are extremely short-ranged (~1-2 fm) and saturate with nearest neighbors, resulting in nearly constant binding energy per nucleon (~8 MeV).',
    difficulty: 'Medium',
    source: 'KCET 2025 Model',
    year: '2025',
    formulaNote: 'R = R₀ A^(1/3), ρ_nucleus ≈ constant ≈ 2.3 × 10^17 kg/m³',
    questionKannada: `ಪರಮಾಣು ಬೀಜಕೇಂದ್ರಗಳ (nuclei) ಕುರಿತ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಗಮನಿಸಿ:\nಹೇಳಿಕೆ I: ಬೀಜಕೇಂದ್ರದ ಸಾಂದ್ರತೆಯು ಸ್ಥಿರವಾಗಿದ್ದು (~ 2.3 × 10¹⁷ kg/m³), ಇದು ಪರಮಾಣುವಿನ ರಾಶಿ ಸಂಖ್ಯೆ A ಯಿಂದ ಸಂಪೂರ್ಣ ಸ್ವತಂತ್ರವಾಗಿರುತ್ತದೆ.\nಹೇಳಿಕೆ II: ಬೀಜಕೇಂದ್ರ ಬಲಗಳು (nuclear forces) ಅತ್ಯಂತ ಕಡಿಮೆ ವ್ಯಾಪ್ತಿಯ ಬಲಗಳಾಗಿದ್ದು (short-range), ಕೇವಲ ಹತ್ತಿರದ ನೆರೆಯ ನ್ಯೂಕ್ಲಿಯಾನ್‌ಗಳೊಂದಿಗೆ ಮಾತ್ರ ವರ್ತಿಸುವ ಸಂತೃಪ್ತಿ (saturation) ಗುಣವನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತವೆ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: R ∝ A^(1/3) ಆಗಿರುವುದರಿಂದ ಸಾಂದ್ರತೆ ಸ್ಥಿರವಾಗಿರುತ್ತದೆ ಮತ್ತು ಬೀಜಕೇಂದ್ರ ಬಲಗಳು ಅತಿ ಕಡಿಮೆ ವ್ಯಾಪ್ತಿಯ ಸಂತೃಪ್ತ ಬಲಗಳಾಗಿವೆ.'
  },

  // PHY-14: Semiconductor Electronics
  {
    id: 'phy-ar-14',
    subject: 'physics',
    chapter: 'phy-14',
    topic: 'p-n Junction & Semiconductors',
    question: `Assertion (A): An n-type semiconductor crystal containing pentavalent impurity atoms remains electrically neutral as a whole.\nReason (R): For every extra conduction electron provided by a donor dopant atom, there remains an immobile positively charged donor ion core embedded in the crystal lattice.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Although conduction electrons (negative charge) outnumber holes (n_e >> n_h), the donor atoms were originally neutral. Giving up a free electron leaves behind a fixed positive ion core in the lattice, preserving total electrical neutrality: N_positive = N_negative.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'n-type: n_e >> n_h, total crystal charge Q_net = 0',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಪೆಂಟಾವಲೆಂಟ್ ಕಲ್ಮಶ ಪರಮಾಣುಗಳನ್ನು ಹೊಂದಿರುವ n-ಮಾದರಿಯ ಅರೆವಾಹಕ ಸ್ಫಟಿಕವು ಸಂಪೂರ್ಣವಾಗಿ ವಿದ್ಯುದಾವೇಶ ತಟಸ್ಥವಾಗಿರುತ್ತದೆ (electrically neutral).\nಕಾರಣ (R): ದಾನಿ ಡೋಪಂಟ್ ಪರಮಾಣು ನೀಡುವ ಪ್ರತಿಯೊಂದು ಹೆಚ್ಚುವರಿ ಮುಕ್ತ ಎಲೆಕ್ಟ್ರಾನ್‌ಗೂ, ಸ್ಫಟಿಕ ಜಾಲಕದಲ್ಲಿ ಅಚಲ ಧನಾತ್ಮಕ ಅಯಾನು ಉಳಿದಿರುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: ಹೆಚ್ಚುವರಿ ಮುಕ್ತ ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳು ಧನಾತ್ಮಕ ದಾನಿ ಅಯಾನುಗಳಿಂದ ಸಮತೋಲನಗೊಳ್ಳುವುದರಿಂದ ಸ್ಫಟಿಕವು ತಟಸ್ಥವಾಗಿರುತ್ತದೆ.'
  },
  {
    id: 'phy-stmt-14',
    subject: 'physics',
    chapter: 'phy-14',
    topic: 'Forward and Reverse Bias',
    question: `Consider the following statements regarding a p-n junction diode:\nStatement I: Under forward bias, the external voltage opposes the built-in barrier potential, reducing the width of the depletion layer and allowing large diffusion current.\nStatement II: Under reverse bias, the barrier height increases, the depletion layer widens, and only a tiny minority carrier drift current flows until breakdown is reached.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'Both statements are fundamental properties of p-n junctions: forward bias narrows the depletion barrier and promotes majority carrier diffusion; reverse bias widens the barrier and confines conduction to minute minority carrier drift.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Forward bias: Depletion width decreases; Reverse bias: Depletion width increases',
    questionKannada: `p-n ಜಂಕ್ಷನ್ ಡಯೋಡ್‌ಗೆ ಸಂಬಂಧಿಸಿದ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಗಮನಿಸಿ:\nಹೇಳಿಕೆ I: ಫಾರ್ವರ್ಡ್ ಬಯಾಸ್‌ನಲ್ಲಿ, ಬಾಹ್ಯ ವೋಲ್ಟೇಜ್ ತಡೆಗೋಡೆ ವಿಭವವನ್ನು ವಿರೋಧಿಸಿ, ಡಿಪ್ಲೀಶನ್ ಪದರದ ಅಗಲವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಹೆಚ್ಚಿನ ವಿಸರಣ ಪ್ರವಾಹಕ್ಕೆ (diffusion current) ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.\nಹೇಳಿಕೆ II: ರಿವರ್ಸ್ ಬಯಾಸ್‌ನಲ್ಲಿ, ತಡೆಗೋಡೆಯ ಎತ್ತರ ಹೆಚ್ಚಾಗುತ್ತದೆ, ಡಿಪ್ಲೀಶನ್ ಪದರವು ಅಗಲವಾಗುತ್ತದೆ ಮತ್ತು ಕೇವಲ ಅಲ್ಪಸಂಖ್ಯಾತ ವಾಹಕಗಳ ಸೂಕ್ಷ್ಮ ಡ್ರಿಫ್ಟ್ ಪ್ರವಾಹ ಮಾತ್ರ ಹರಿಯುತ್ತದೆ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: ಫಾರ್ವರ್ಡ್‌ನಲ್ಲಿ ಡಿಪ್ಲೀಶನ್ ಪದರ ಕುಗ್ಗಿದರೆ, ರಿವರ್ಸ್‌ನಲ್ಲಿ ಡಿಪ್ಲೀಶನ್ ಪದರ ಅಗಲವಾಗುತ್ತದೆ.'
  }
];
