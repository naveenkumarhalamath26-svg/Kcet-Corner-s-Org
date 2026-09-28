import { Question } from '../../types';

export const mathQuestions: Question[] = [
  // ==========================================
  // MATH-1: Relations and Functions
  // ==========================================
  {
    id: 'math-kcet-1-1',
    subject: 'mathematics',
    chapter: 'math-1',
    topic: 'Equivalence Relations',
    question: 'Let R be a relation on the set of natural numbers N defined by R = {(a, b) : a - b is divisible by 5}. Then R is:',
    questionType: 'single_mcq',
    options: ['An equivalence relation', 'Reflexive and symmetric but not transitive', 'Reflexive and transitive but not symmetric', 'Symmetric and transitive but not reflexive'],
    correctAnswer: 'An equivalence relation',
    explanation: '1. Reflexive: a - a = 0 is divisible by 5 for all a ∈ N. 2. Symmetric: if a - b = 5k, then b - a = -5k = 5(-k), also divisible by 5. 3. Transitive: if a - b = 5k and b - c = 5m, then a - c = (a - b) + (b - c) = 5(k + m), which is divisible by 5. Hence R is reflexive, symmetric, and transitive, making it an equivalence relation.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'a ≡ b (mod m) is an equivalence relation'
  },
  {
    id: 'math-kcet-1-2',
    subject: 'mathematics',
    chapter: 'math-1',
    topic: 'Number of One-to-One and Onto Functions',
    question: 'If set A has 3 elements and set B has 4 elements, the total number of injective (one-to-one) functions from A to B is:',
    questionType: 'single_mcq',
    options: ['24', '64', '81', '12'],
    correctAnswer: '24',
    explanation: 'The number of one-to-one functions from a set with m elements to a set with n elements (where n ≥ m) is given by ⁿP_m = 4! / (4 - 3)! = 24 / 1 = 24.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Number of one-to-one functions = ⁿP_m'
  },

  // ==========================================
  // MATH-2: Inverse Trigonometric Functions
  // ==========================================
  {
    id: 'math-kcet-2-1',
    subject: 'mathematics',
    chapter: 'math-2',
    topic: 'Principal Value Branches',
    question: 'The principal value of cos⁻¹(cos(7π / 6)) is:',
    questionType: 'single_mcq',
    options: ['5π / 6', '7π / 6', 'π / 6', '-π / 6'],
    correctAnswer: '5π / 6',
    explanation: 'The principal value branch of cos⁻¹(x) is [0, π]. Since 7π/6 is outside [0, π], we write cos(7π/6) = cos(2π - 5π/6) = cos(5π/6). Since 5π/6 ∈ [0, π], cos⁻¹(cos(5π/6)) = 5π / 6.',
    difficulty: 'Medium',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Principal branch of cos⁻¹ is [0, π]'
  },
  {
    id: 'math-kcet-2-2',
    subject: 'mathematics',
    chapter: 'math-2',
    topic: 'Properties of Inverse Trigonometric Functions',
    question: 'The value of tan⁻¹(1) + cos⁻¹(-1/2) + sin⁻¹(-1/2) is equal to:',
    questionType: 'single_mcq',
    options: ['3π / 4', '2π / 3', 'π / 2', 'π'],
    correctAnswer: '3π / 4',
    explanation: 'We know that for any x ∈ [-1, 1], sin⁻¹(x) + cos⁻¹(x) = π/2. Therefore, cos⁻¹(-1/2) + sin⁻¹(-1/2) = π/2. And tan⁻¹(1) = π/4. Sum = π/4 + π/2 = 3π / 4.',
    difficulty: 'Easy',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'sin⁻¹(x) + cos⁻¹(x) = π/2'
  },

  // ==========================================
  // MATH-3: Matrices
  // ==========================================
  {
    id: 'math-kcet-3-1',
    subject: 'mathematics',
    chapter: 'math-3',
    topic: 'Symmetric and Skew-Symmetric Matrices',
    question: 'If A is a square matrix, then (A - Aᵀ) is always a:',
    questionType: 'single_mcq',
    options: ['Skew-symmetric matrix', 'Symmetric matrix', 'Identity matrix', 'Orthogonal matrix'],
    correctAnswer: 'Skew-symmetric matrix',
    explanation: 'Let B = A - Aᵀ. Taking transpose: Bᵀ = (A - Aᵀ)ᵀ = Aᵀ - (Aᵀ)ᵀ = Aᵀ - A = -(A - Aᵀ) = -B. Since Bᵀ = -B, it is by definition skew-symmetric.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: '(A - Aᵀ)ᵀ = -(A - Aᵀ)'
  },
  {
    id: 'math-kcet-3-2',
    subject: 'mathematics',
    chapter: 'math-3',
    topic: 'Matrix Multiplication & Powers',
    question: 'If A = [[1, 0], [1, 1]], then Aⁿ is equal to:',
    questionType: 'single_mcq',
    options: ['[[1, 0], [n, 1]]', '[[1, 0], [n², 1]]', '[[n, 0], [n, n]]', '[[1, 0], [2ⁿ, 1]]'],
    correctAnswer: '[[1, 0], [n, 1]]',
    explanation: 'By mathematical induction or matrix multiplication: A² = [[1,0],[2,1]], A³ = [[1,0],[3,1]], ..., Aⁿ = [[1,0],[n,1]].',
    difficulty: 'Medium',
    source: 'KCET 2021',
    year: '2021',
    formulaNote: '[[1,0],[1,1]]ⁿ = [[1,0],[n,1]]'
  },

  // ==========================================
  // MATH-4: Determinants
  // ==========================================
  {
    id: 'math-kcet-4-1',
    subject: 'mathematics',
    chapter: 'math-4',
    topic: 'Properties of Adjoint and Determinant',
    question: 'If A is a non-singular square matrix of order 3 and |A| = 4, then the determinant value of adj(A), |adj(A)| is:',
    questionType: 'single_mcq',
    options: ['16', '64', '4', '12'],
    correctAnswer: '16',
    explanation: 'For any square matrix of order n, |adj(A)| = |A|ⁿ⁻¹. Here n = 3 and |A| = 4. Therefore, |adj(A)| = |A|³⁻¹ = 4² = 16.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: '|adj(A)| = |A|^(n-1)'
  },
  {
    id: 'math-kcet-4-2',
    subject: 'mathematics',
    chapter: 'math-4',
    topic: 'Area of Triangle using Determinants',
    question: 'If the area of a triangle with vertices (2, -6), (5, 4) and (k, 4) is 35 sq units, then the values of k are:',
    questionType: 'single_mcq',
    options: ['12, -2', '-12, 2', '12, 2', '-12, -2'],
    correctAnswer: '12, -2',
    explanation: 'Area = ±35 = ½ |[2, -6, 1; 5, 4, 1; k, 4, 1]|. Expanding determinant: 2(4 - 4) - (-6)(5 - k) + 1(20 - 4k) = 0 + 30 - 6k + 20 - 4k = 50 - 10k. So ½(50 - 10k) = ±35 ⇒ 50 - 10k = ±70. Case 1: 50 - 10k = 70 ⇒ -10k = 20 ⇒ k = -2. Case 2: 50 - 10k = -70 ⇒ -10k = -120 ⇒ k = 12. Hence k = 12, -2.',
    difficulty: 'Medium',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'Area = ± ½ · det(vertices)'
  },

  // ==========================================
  // MATH-5: Continuity and Differentiability
  // ==========================================
  {
    id: 'math-kcet-5-1',
    subject: 'mathematics',
    chapter: 'math-5',
    topic: 'Parametric Differentiation',
    question: 'If x = a(θ + sin θ) and y = a(1 - cos θ), then dy/dx at θ = π/2 is:',
    questionType: 'single_mcq',
    options: ['1', '0', '-1', '√3'],
    correctAnswer: '1',
    explanation: 'dx/dθ = a(1 + cos θ) and dy/dθ = a(0 + sin θ) = a sin θ. dy/dx = (dy/dθ) / (dx/dθ) = (a sin θ) / [a(1 + cos θ)] = sin θ / (1 + cos θ) = tan(θ/2). At θ = π/2, dy/dx = tan(π/4) = 1.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'dy/dx = (dy/dθ) / (dx/dθ) = tan(θ/2)'
  },
  {
    id: 'math-kcet-5-2',
    subject: 'mathematics',
    chapter: 'math-5',
    topic: 'Second Order Derivative',
    question: 'If y = A sin x + B cos x, then d²y/dx² + y is equal to:',
    questionType: 'single_mcq',
    options: ['0', '1', '2y', '-2y'],
    correctAnswer: '0',
    explanation: 'dy/dx = A cos x - B sin x. d²y/dx² = -A sin x - B cos x = -(A sin x + B cos x) = -y. Therefore, d²y/dx² + y = -y + y = 0.',
    difficulty: 'Easy',
    source: 'KCET 2020',
    year: '2020',
    formulaNote: 'd²y/dx² + y = 0 for simple harmonic functions'
  },

  // ==========================================
  // MATH-6: Applications of Derivatives
  // ==========================================
  {
    id: 'math-kcet-6-1',
    subject: 'mathematics',
    chapter: 'math-6',
    topic: 'Rate of Change of Quantities',
    question: 'The volume of a sphere is increasing at the rate of 8 cm³/s. How fast is its surface area increasing when its radius is 2 cm?',
    questionType: 'single_mcq',
    options: ['8 cm²/s', '4 cm²/s', '2 cm²/s', '16 cm²/s'],
    correctAnswer: '8 cm²/s',
    explanation: 'V = (4/3)π r³ ⇒ dV/dt = 4π r² (dr/dt) = 8 ⇒ dr/dt = 8 / (4π r²). Surface area S = 4π r² ⇒ dS/dt = 8π r (dr/dt) = 8π r · [8 / (4π r²)] = 16 / r. At r = 2 cm: dS/dt = 16 / 2 = 8 cm²/s.',
    difficulty: 'Medium',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'dS/dt = (2 / r) · dV/dt'
  },
  {
    id: 'math-kcet-6-2',
    subject: 'mathematics',
    chapter: 'math-6',
    topic: 'Maxima and Minima',
    question: 'The function f(x) = x³ - 3x is strictly increasing in the interval:',
    questionType: 'single_mcq',
    options: ['(-∞, -1) ∪ (1, ∞)', '(-1, 1)', '[-1, 1]', '(0, ∞)'],
    correctAnswer: '(-∞, -1) ∪ (1, ∞)',
    explanation: 'f\'(x) = 3x² - 3 = 3(x² - 1) = 3(x - 1)(x + 1). For strictly increasing, f\'(x) > 0 ⇒ (x - 1)(x + 1) > 0 ⇒ x < -1 or x > 1. Hence x ∈ (-∞, -1) ∪ (1, ∞).',
    difficulty: 'Easy',
    source: 'KCET 2021',
    year: '2021',
    formulaNote: 'Strictly increasing when f\'(x) > 0'
  },

  // ==========================================
  // MATH-7: Integrals
  // ==========================================
  {
    id: 'math-kcet-7-1',
    subject: 'mathematics',
    chapter: 'math-7',
    topic: 'Definite Integral Properties',
    question: 'The value of the definite integral ∫_{-π/2}^{π/2} (x³ + x cos x + tan⁵ x + 1) dx is:',
    questionType: 'single_mcq',
    options: ['π', '0', 'π / 2', '2π'],
    correctAnswer: 'π',
    explanation: 'The functions x³, x cos x, and tan⁵ x are all odd functions (f(-x) = -f(x)). For any odd function, ∫_{-a}^a f(x) dx = 0. Therefore, the integral simplifies to ∫_{-π/2}^{π/2} 1 dx = [x]_{-π/2}^{π/2} = π/2 - (-π/2) = π.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: '∫_{-a}^a (odd) dx = 0'
  },
  {
    id: 'math-kcet-7-2',
    subject: 'mathematics',
    chapter: 'math-7',
    topic: 'Integration by Parts & e^x form',
    question: 'The integral ∫ e^x [ (1 + sin x) / (1 + cos x) ] dx is equal to:',
    questionType: 'single_mcq',
    options: ['e^x tan(x/2) + C', 'e^x sec(x/2) + C', '½ e^x tan(x/2) + C', 'e^x cot(x/2) + C'],
    correctAnswer: 'e^x tan(x/2) + C',
    explanation: '(1 + sin x)/(1 + cos x) = [1 + 2 sin(x/2) cos(x/2)] / [2 cos²(x/2)] = ½ sec²(x/2) + tan(x/2). Setting f(x) = tan(x/2), f\'(x) = ½ sec²(x/2). By the standard formula ∫ e^x [f(x) + f\'(x)] dx = e^x f(x) + C, the integral equals e^x tan(x/2) + C.',
    difficulty: 'Medium',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: '∫ e^x [f(x) + f\'(x)] dx = e^x f(x) + C'
  },

  // ==========================================
  // MATH-8: Applications of the Integrals
  // ==========================================
  {
    id: 'math-kcet-8-1',
    subject: 'mathematics',
    chapter: 'math-8',
    topic: 'Area under Standard Parabolas',
    question: 'The area of the region bounded by the two parabolas y² = 4ax and x² = 4ay is:',
    questionType: 'single_mcq',
    options: ['16 a² / 3', '8 a² / 3', '4 a² / 3', '16 a² / 5'],
    correctAnswer: '16 a² / 3',
    explanation: 'The parabolas intersect at (0,0) and (4a, 4a). Area = ∫₀^{4a} [2√(a) x^(1/2) - x²/(4a)] dx = [2√(a) · (2/3) x^(3/2) - x³/(12a)]₀^{4a} = (4/3)√(a)·(8a√a) - 64a³/(12a) = (32/3)a² - (16/3)a² = 16 a² / 3.',
    difficulty: 'Medium',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Area between y²=4ax and x²=4by is 16ab / 3'
  },

  // ==========================================
  // MATH-9: Differential Equations
  // ==========================================
  {
    id: 'math-kcet-9-1',
    subject: 'mathematics',
    chapter: 'math-9',
    topic: 'Order and Degree of Differential Equations',
    question: 'The order and degree of the differential equation [1 + (dy/dx)²]^(3/2) = d²y/dx² are respectively:',
    questionType: 'single_mcq',
    options: ['2 and 2', '2 and 3', '1 and 2', '2 and 1'],
    correctAnswer: '2 and 2',
    explanation: 'Squaring both sides to make it a polynomial in derivatives: [1 + (dy/dx)²]³ = (d²y/dx²)². The highest order derivative is d²y/dx² (order = 2) and its exponent is 2 (degree = 2).',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Order = highest derivative; Degree = power of highest derivative in polynomial form'
  },
  {
    id: 'math-kcet-9-2',
    subject: 'mathematics',
    chapter: 'math-9',
    topic: 'Integrating Factor of Linear DE',
    question: 'The integrating factor of the linear differential equation (x log x) (dy/dx) + y = 2 log x is:',
    questionType: 'single_mcq',
    options: ['log x', 'x', 'log(log x)', 'e^x'],
    correctAnswer: 'log x',
    explanation: 'Dividing by (x log x): dy/dx + [1 / (x log x)] y = 2 / x. Here P(x) = 1 / (x log x). Integrating factor IF = e^(∫ P dx) = e^(∫ 1/(x log x) dx). Let u = log x, du = 1/x dx. ∫ du/u = log u = log(log x). Therefore, IF = e^(log(log x)) = log x.',
    difficulty: 'Medium',
    source: 'KCET 2021',
    year: '2021',
    formulaNote: 'IF = e^(∫ P dx)'
  },

  // ==========================================
  // MATH-10: Vector Algebra
  // ==========================================
  {
    id: 'math-kcet-10-1',
    subject: 'mathematics',
    chapter: 'math-10',
    topic: 'Projection and Scalar Product',
    question: 'The projection of the vector a = 2î + 3ĵ + 2k̂ on the vector b = î + 2ĵ + k̂ is:',
    questionType: 'single_mcq',
    options: ['5 / √6', '5√6 / 3', '10 / √6', '5 / 6'],
    correctAnswer: '5√6 / 3',
    explanation: 'Projection of a on b = (a · b) / |b|. a · b = (2)(1) + (3)(2) + (2)(1) = 2 + 6 + 2 = 10. |b| = √(1² + 2² + 1²) = √6. Projection = 10 / √6 = (10√6)/6 = 5√6 / 3.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Projection of a on b = (a · b) / |b|'
  },
  {
    id: 'math-kcet-10-2',
    subject: 'mathematics',
    chapter: 'math-10',
    topic: 'Cross Product and Area of Parallelogram',
    question: 'The area of a parallelogram whose adjacent sides are determined by the vectors a = î - ĵ + 3k̂ and b = 2î - 7ĵ + k̂ is:',
    questionType: 'single_mcq',
    options: ['15√2', '15', '10√3', '20'],
    correctAnswer: '15√2',
    explanation: 'a × b = |[î, ĵ, k̂; 1, -1, 3; 2, -7, 1]| = î(-1 - (-21)) - ĵ(1 - 6) + k̂(-7 - (-2)) = 20î + 5ĵ - 5k̂. Area = |a × b| = √(20² + 5² + (-5)²) = √(400 + 25 + 25) = √450 = √(225 × 2) = 15√2 sq units.',
    difficulty: 'Medium',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'Area = |a × b|'
  },

  // ==========================================
  // MATH-11: Three Dimensional Geometry
  // ==========================================
  {
    id: 'math-kcet-11-1',
    subject: 'mathematics',
    chapter: 'math-11',
    topic: 'Shortest Distance Between Skew Lines',
    question: 'If a line makes angles α, β, γ with the positive coordinate axes, then the value of sin² α + sin² β + sin² γ is:',
    questionType: 'single_mcq',
    options: ['2', '1', '3', '0'],
    correctAnswer: '2',
    explanation: 'Direction cosines satisfy cos² α + cos² β + cos² γ = 1. Using sin² θ = 1 - cos² θ: (1 - cos² α) + (1 - cos² β) + (1 - cos² γ) = 3 - (cos² α + cos² β + cos² γ) = 3 - 1 = 2.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'cos² α + cos² β + cos² γ = 1 ⇒ sin² α + sin² β + sin² γ = 2'
  },

  // ==========================================
  // MATH-12: Linear Programming
  // ==========================================
  {
    id: 'math-kcet-12-1',
    subject: 'mathematics',
    chapter: 'math-12',
    topic: 'Corner Point Theorem',
    question: 'The corner points of the feasible region for an LPP are (0, 2), (3, 0), (6, 0), (6, 8) and (0, 5). Let Z = 4x + 6y be the objective function. The minimum value of Z occurs at:',
    questionType: 'single_mcq',
    options: ['(0, 2) and (3, 0)', 'Only (0, 2)', 'Only (3, 0)', '(6, 0)'],
    correctAnswer: '(0, 2) and (3, 0)',
    explanation: 'Evaluate Z = 4x + 6y at each corner point: at (0, 2): Z = 0 + 12 = 12. At (3, 0): Z = 12 + 0 = 12. At (6, 0): Z = 24. At (6, 8): Z = 24 + 48 = 72. At (0, 5): Z = 30. The minimum value 12 occurs at both (0, 2) and (3, 0), and hence along the entire line segment joining them.',
    difficulty: 'Medium',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'If min occurs at two corner points, it occurs at all points on the segment joining them'
  },

  // ==========================================
  // MATH-13: Probability
  // ==========================================
  {
    id: 'math-kcet-13-1',
    subject: 'mathematics',
    chapter: 'math-13',
    topic: 'Conditional Probability and Bayes Theorem',
    question: 'If P(A) = 0.8, P(B) = 0.5 and P(B|A) = 0.4, then the value of P(A ∩ B) and P(A|B) are respectively:',
    questionType: 'single_mcq',
    options: ['0.32 and 0.64', '0.32 and 0.40', '0.20 and 0.50', '0.40 and 0.80'],
    correctAnswer: '0.32 and 0.64',
    explanation: 'P(B|A) = P(A ∩ B) / P(A) ⇒ P(A ∩ B) = P(B|A) · P(A) = 0.4 × 0.8 = 0.32. Then P(A|B) = P(A ∩ B) / P(B) = 0.32 / 0.5 = 0.64.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'P(A ∩ B) = P(B|A) · P(A), P(A|B) = P(A ∩ B) / P(B)'
  },
  {
    id: 'math-kcet-13-2',
    subject: 'mathematics',
    chapter: 'math-13',
    topic: 'Independent Events',
    question: 'If A and B are independent events such that P(A) = 0.3 and P(B) = 0.6, then P(A ∪ B) is equal to:',
    questionType: 'single_mcq',
    options: ['0.72', '0.90', '0.18', '0.54'],
    correctAnswer: '0.72',
    explanation: 'For independent events: P(A ∩ B) = P(A) · P(B) = 0.3 × 0.6 = 0.18. Then P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.3 + 0.6 - 0.18 = 0.90 - 0.18 = 0.72.',
    difficulty: 'Easy',
    source: 'KCET 2021',
    year: '2021',
    formulaNote: 'P(A ∪ B) = P(A) + P(B) - P(A)·P(B)'
  },

  // ==========================================
  // ADDITIONAL HIGH-YIELD KCET & MTG MATHEMATICS MCQS
  // ==========================================
  {
    id: 'math-mtg-1-1',
    subject: 'mathematics',
    chapter: 'math-1',
    topic: 'Number of Relations and Equivalence Classes',
    question: 'Let A = {1, 2, 3}. The number of equivalence relations containing (1, 2) is:',
    questionKannada: 'ಗಣ A = {1, 2, 3} ಆಗಿರಲಿ. (1, 2) ಅನ್ನು ಒಳಗೊಂಡಿರುವ ಸಮಾನತೆಯ ಸಂಬಂಧಗಳ (Equivalence Relations) ಸಂಖ್ಯೆ ಎಷ್ಟು?',
    questionType: 'single_mcq',
    options: ['2', '1', '3', '4'],
    optionsKannada: ['2', '1', '3', '4'],
    correctAnswer: '2',
    explanation: 'Any equivalence relation must contain the identity relation {(1,1), (2,2), (3,3)}. If it contains (1,2), by symmetry it must contain (2,1). Thus R₁ = {(1,1), (2,2), (3,3), (1,2), (2,1)} is one equivalence relation. If we add any other pair, by transitivity and symmetry all pairs must be included, yielding R₂ = A × A. Thus exactly 2 equivalence relations are possible.',
    explanationKannada: 'ಯಾವುದೇ ಸಮಾನತೆಯ ಸಂಬಂಧವು ಕನಿಷ್ಠ {(1,1), (2,2), (3,3)} ಅನ್ನು ಹೊಂದಿರಬೇಕು. (1,2) ಇದ್ದರೆ ಸಮ್ಮಿತಿಯಿಂದ (2,1) ಇರಲೇಬೇಕು. ಆದ್ದರಿಂದ R₁ ಮತ್ತು ಸಾರ್ವತ್ರಿಕ ಸಂಬಂಧ R₂ = A × A ಮಾತ್ರ ಸಾಧ್ಯ (ಒಟ್ಟು 2).',
    difficulty: 'Medium',
    source: 'KCET / NCERT Fingertips',
    year: '2024',
    formulaNote: 'Smallest equivalence relation containing (1,2) has 5 elements; next is universal relation'
  },
  {
    id: 'math-mtg-2-1',
    subject: 'mathematics',
    chapter: 'math-2',
    topic: 'Inverse Trigonometric Identities',
    question: 'The value of tan⁻¹(√3) - sec⁻¹(-2) is equal to:',
    questionKannada: 'tan⁻¹(√3) - sec⁻¹(-2) ನ ಬೆಲೆಯು ಯಾವುದಕ್ಕೆ ಸಮಾನವಾಗಿದೆ?',
    questionType: 'single_mcq',
    options: ['-π / 3', 'π / 3', '2π / 3', 'π'],
    optionsKannada: ['-π / 3', 'π / 3', '2π / 3', 'π'],
    correctAnswer: '-π / 3',
    explanation: 'tan⁻¹(√3) = π/3. For sec⁻¹(-2), sec⁻¹(-x) = π - sec⁻¹(x) = π - π/3 = 2π/3. Therefore, tan⁻¹(√3) - sec⁻¹(-2) = π/3 - 2π/3 = -π/3.',
    explanationKannada: 'tan⁻¹(√3) = π/3 ಮತ್ತು sec⁻¹(-2) = π - sec⁻¹(2) = π - π/3 = 2π/3. ಆದ್ದರಿಂದ π/3 - 2π/3 = -π/3.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'sec⁻¹(-x) = π - sec⁻¹(x)'
  },
  {
    id: 'math-mtg-3-1',
    subject: 'mathematics',
    chapter: 'math-3',
    topic: 'Skew-Symmetric Matrix Properties',
    question: 'If A is a square matrix of order n such that A′ = -A (skew-symmetric), and n is odd, then the determinant |A| is equal to:',
    questionKannada: 'A ಯು n ಕ್ರಮದ ಒಂದು ವಿಷಮ-ಸಮ್ಮಿತ (Skew-Symmetric) ಮಾತೃಕೆಯಾಗಿದ್ದು (A′ = -A), n ಬೆಸ ಸಂಖ್ಯೆಯಾಗಿದ್ದರೆ, ನಿರ್ಧಾರಕ |A| ನ ಮೌಲ್ಯ:',
    questionType: 'single_mcq',
    options: ['0', '1', '-1', 'n'],
    optionsKannada: ['0', '1', '-1', 'n'],
    correctAnswer: '0',
    explanation: '|A| = |A′| = |-A| = (-1)ⁿ |A|. When n is odd, (-1)ⁿ = -1, which gives |A| = -|A| ⇒ 2|A| = 0 ⇒ |A| = 0. The determinant of an odd-order skew-symmetric matrix is always zero.',
    explanationKannada: '|A| = |-A| = (-1)ⁿ |A|. n ಬೆಸ ಸಂಖ್ಯೆಯಾದಾಗ (-1)ⁿ = -1, ಆದ್ದರಿಂದ |A| = -|A| ⇒ 2|A| = 0 ⇒ |A| = 0.',
    difficulty: 'Easy',
    source: 'KCET / NCERT Fingertips',
    year: '2024',
    formulaNote: 'det(Skew-symmetric matrix of odd order) = 0'
  },
  {
    id: 'math-mtg-3-2',
    subject: 'mathematics',
    chapter: 'math-3',
    topic: 'Matrix Multiplication and Invertibility',
    question: 'If A and B are symmetric matrices of the same order, then AB - BA is always a:',
    questionKannada: 'A ಮತ್ತು B ಒಂದೇ ಕ್ರಮದ ಸಮ್ಮಿತ ಮಾತೃಕೆಗಳಾಗಿದ್ದರೆ (Symmetric matrices), AB - BA ಯಾವಾಗಲೂ ಒಂದು:',
    questionType: 'single_mcq',
    options: ['Skew-symmetric matrix', 'Symmetric matrix', 'Zero matrix', 'Identity matrix'],
    optionsKannada: ['ವಿಷಮ-ಸಮ್ಮಿತ ಮಾತೃಕೆ (Skew-symmetric)', 'ಸಮ್ಮಿತ ಮಾತೃಕೆ (Symmetric)', 'ಶೂನ್ಯ ಮಾತೃಕೆ (Zero matrix)', 'ಅನನ್ಯತಾ ಮಾತೃಕೆ (Identity matrix)'],
    correctAnswer: 'Skew-symmetric matrix',
    explanation: '(AB - BA)′ = (AB)′ - (BA)′ = B′A′ - A′B′. Since A and B are symmetric, A′ = A and B′ = B. So (AB - BA)′ = BA - AB = -(AB - BA). Hence AB - BA is skew-symmetric.',
    explanationKannada: '(AB - BA)′ = B′A′ - A′B′ = BA - AB = -(AB - BA). ಆದ್ದರಿಂದ ಇದು ವಿಷಮ-ಸಮ್ಮಿತ ಮಾತೃಕೆಯಾಗಿದೆ.',
    difficulty: 'Easy',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: '(AB - BA)′ = -(AB - BA)'
  },
  {
    id: 'math-mtg-4-1',
    subject: 'mathematics',
    chapter: 'math-4',
    topic: 'Determinant and Adjoint Properties',
    question: 'If A is a non-singular square matrix of order 3 and |A| = 5, then the value of |adj(A)| is:',
    questionKannada: 'A ಯು 3 ನೇ ಕ್ರಮದ ಒಂದು ಚೌಕ ಮಾತೃಕೆಯಾಗಿದ್ದು |A| = 5 ಆಗಿದ್ದರೆ, |adj(A)| ನ ಮೌಲ್ಯ ಎಷ್ಟು?',
    questionType: 'single_mcq',
    options: ['25', '125', '5', '1/5'],
    optionsKannada: ['25', '125', '5', '1/5'],
    correctAnswer: '25',
    explanation: 'For an n × n square matrix, |adj(A)| = |A|ⁿ⁻¹. Here n = 3 and |A| = 5. So |adj(A)| = 5³⁻¹ = 5² = 25.',
    explanationKannada: 'n × n ಮಾತೃಕೆಗೆ |adj(A)| = |A|ⁿ⁻¹. ಇಲ್ಲಿ n = 3, ಆದ್ದರಿಂದ |adj(A)| = 5² = 25.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: '|adj(A)| = |A|ⁿ⁻¹, |adj(adj(A))| = |A|^{(n-1)²}'
  },
  {
    id: 'math-mtg-4-2',
    subject: 'mathematics',
    chapter: 'math-4',
    topic: 'Area of Triangle using Determinants',
    question: 'If the area of a triangle with vertices (2, -6), (5, 4) and (k, 4) is 35 sq units, then the values of k are:',
    questionKannada: '(2, -6), (5, 4) ಮತ್ತು (k, 4) ಶೃಂಗಬಿಂದುಗಳನ್ನು ಹೊಂದಿರುವ ತ್ರಿಭುಜದ ವಿಸ್ತೀರ್ಣವು 35 ಚದರ ಯೂನಿಟ್‌ಗಳಾಗಿದ್ದರೆ, k ನ ಮೌಲ್ಯಗಳು:',
    questionType: 'single_mcq',
    options: ['12, -2', '-12, 2', '-12, -2', '12, 2'],
    optionsKannada: ['12, -2', '-12, 2', '-12, -2', '12, 2'],
    correctAnswer: '12, -2',
    explanation: 'Area = (1/2) |det[[2, -6, 1], [5, 4, 1], [k, 4, 1]]| = ±35. Expanding: 2(4 - 4) - (-6)(5 - k) + 1(20 - 4k) = 6(5 - k) + 20 - 4k = 30 - 6k + 20 - 4k = 50 - 10k. Setting (1/2)(50 - 10k) = ±35 gives 50 - 10k = 70 ⇒ k = -2, or 50 - 10k = -70 ⇒ 10k = 120 ⇒ k = 12. Hence k = 12, -2.',
    explanationKannada: 'ವಿಸ್ತೀರ್ಣ = (1/2) |50 - 10k| = 35 ⇒ 50 - 10k = ±70. ಇದರಿಂದ k = 12 ಅಥವಾ k = -2 ದೊರೆಯುತ್ತದೆ.',
    difficulty: 'Medium',
    source: 'KCET / NCERT Fingertips',
    year: '2023',
    formulaNote: 'Δ = (1/2) |x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|'
  },
  {
    id: 'math-mtg-5-1',
    subject: 'mathematics',
    chapter: 'math-5',
    topic: 'Parametric Differentiation',
    question: 'If x = a(θ + sin θ) and y = a(1 - cos θ), then dy/dx at θ = π/2 is:',
    questionKannada: 'x = a(θ + sin θ) ಮತ್ತು y = a(1 - cos θ) ಆಗಿದ್ದರೆ, θ = π/2 ನಲ್ಲಿ dy/dx ನ ಮೌಲ್ಯ ಎಷ್ಟು?',
    questionType: 'single_mcq',
    options: ['1', '0', '-1', '√3'],
    optionsKannada: ['1', '0', '-1', '√3'],
    correctAnswer: '1',
    explanation: 'dx/dθ = a(1 + cos θ), dy/dθ = a(sin θ). dy/dx = (dy/dθ) / (dx/dθ) = [a sin θ] / [a (1 + cos θ)] = (2 sin(θ/2) cos(θ/2)) / (2 cos²(θ/2)) = tan(θ/2). At θ = π/2, dy/dx = tan(π/4) = 1.',
    explanationKannada: 'dy/dx = (a sin θ) / (a(1 + cos θ)) = tan(θ/2). θ = π/2 ಆದಾಗ dy/dx = tan(π/4) = 1.',
    difficulty: 'Medium',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'dy/dx = (dy/dθ)/(dx/dθ) = tan(θ/2)'
  },
  {
    id: 'math-mtg-5-2',
    subject: 'mathematics',
    chapter: 'math-5',
    topic: 'Derivative of Inverse Functions',
    question: 'If y = sin⁻¹((2x) / (1 + x²)), then dy/dx for |x| < 1 is:',
    questionKannada: 'y = sin⁻¹((2x) / (1 + x²)) ಮತ್ತು |x| < 1 ಆಗಿದ್ದರೆ, dy/dx ನ ಮೌಲ್ಯ:',
    questionType: 'single_mcq',
    options: ['2 / (1 + x²)', '1 / (1 + x²)', '-2 / (1 + x²)', '2 / √(1 - x²)'],
    optionsKannada: ['2 / (1 + x²)', '1 / (1 + x²)', '-2 / (1 + x²)', '2 / √(1 - x²)'],
    correctAnswer: '2 / (1 + x²)',
    explanation: 'For |x| < 1, sin⁻¹(2x / (1 + x²)) = 2 tan⁻¹(x). Differentiating with respect to x: dy/dx = 2 · d/dx [tan⁻¹(x)] = 2 / (1 + x²).',
    explanationKannada: '|x| < 1 ಆದಾಗ, sin⁻¹(2x / (1 + x²)) = 2 tan⁻¹(x). ಇದರ ವಿಕಲನವು 2 / (1 + x²) ಆಗುತ್ತದೆ.',
    difficulty: 'Easy',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'd/dx [2 tan⁻¹ x] = 2 / (1 + x²)'
  },
  {
    id: 'math-mtg-6-1',
    subject: 'mathematics',
    chapter: 'math-6',
    topic: 'Maxima and Minima',
    question: 'The maximum value of the function f(x) = (1/x)^x for x > 0 is:',
    questionKannada: 'x > 0 ಗೆ f(x) = (1/x)^x ಈ ಫಲನದ ಗರಿಷ್ಠ ಮೌಲ್ಯವು (Maximum value):',
    questionType: 'single_mcq',
    options: ['e^(1/e)', 'e^e', '(1/e)^e', '1'],
    optionsKannada: ['e^(1/e)', 'e^e', '(1/e)^e', '1'],
    correctAnswer: 'e^(1/e)',
    explanation: 'Let y = (1/x)^x = x^(-x). Taking natural log: ln y = -x ln x. Differentiating: (1/y) dy/dx = -(ln x + 1). Setting dy/dx = 0 gives ln x = -1 ⇒ x = 1/e. The second derivative test confirms a local maximum. Thus f(1/e) = (e)^(1/e) = e^(1/e).',
    explanationKannada: 'ln y = -x ln x. ವಿಕಲನದಿಂದ dy/dx = 0 ಇರಿಸಿದಾಗ ln x = -1 ⇒ x = 1/e. ಗರಿಷ್ಠ ಬೆಲೆ f(1/e) = (1 / (1/e))^(1/e) = e^(1/e).',
    difficulty: 'Hard',
    source: 'KCET / NCERT Fingertips',
    year: '2023',
    formulaNote: 'Max of (1/x)^x occurs at x = 1/e with value e^(1/e)'
  },
  {
    id: 'math-mtg-7-1',
    subject: 'mathematics',
    chapter: 'math-7',
    topic: 'Integration of Special Exponential Form',
    question: 'The value of ∫ e^x [(1 + sin x) / (1 + cos x)] dx is:',
    questionKannada: '∫ e^x [(1 + sin x) / (1 + cos x)] dx ನ ಸಂಕಲನದ ಮೌಲ್ಯ:',
    questionType: 'single_mcq',
    options: ['e^x tan(x/2) + C', 'e^x sec(x/2) + C', 'e^x cot(x/2) + C', '(1/2) e^x tan(x/2) + C'],
    optionsKannada: ['e^x tan(x/2) + C', 'e^x sec(x/2) + C', 'e^x cot(x/2) + C', '(1/2) e^x tan(x/2) + C'],
    correctAnswer: 'e^x tan(x/2) + C',
    explanation: 'Rewrite (1 + sin x)/(1 + cos x) = [1 + 2 sin(x/2) cos(x/2)] / [2 cos²(x/2)] = (1/2) sec²(x/2) + tan(x/2). This matches the standard form ∫ e^x [f(x) + f′(x)] dx = e^x f(x) + C, where f(x) = tan(x/2) and f′(x) = (1/2) sec²(x/2). Hence the integral is e^x tan(x/2) + C.',
    explanationKannada: '(1 + sin x)/(1 + cos x) = tan(x/2) + (1/2) sec²(x/2). ಇದು ∫ e^x [f(x) + f′(x)] dx = e^x f(x) + C ರೂಪದಲ್ಲಿದ್ದು, e^x tan(x/2) + C ಆಗುತ್ತದೆ.',
    difficulty: 'Medium',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: '∫ e^x [f(x) + f′(x)] dx = e^x f(x) + C'
  },
  {
    id: 'math-mtg-7-2',
    subject: 'mathematics',
    chapter: 'math-7',
    topic: 'King Property of Definite Integrals',
    question: 'The value of the definite integral ∫₀^(π/2) [√sin x / (√sin x + √cos x)] dx is:',
    questionKannada: 'ನಿಶ್ಚಿತ ಸಂಕಲನ ∫₀^(π/2) [√sin x / (√sin x + √cos x)] dx ನ ಮೌಲ್ಯ ಎಷ್ಟು?',
    questionType: 'single_mcq',
    options: ['π / 4', 'π / 2', 'π', '0'],
    optionsKannada: ['π / 4', 'π / 2', 'π', '0'],
    correctAnswer: 'π / 4',
    explanation: 'Using the King’s property ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a - x) dx, we get I = ∫₀^(π/2) [√cos x / (√cos x + √sin x)] dx. Adding both: 2I = ∫₀^(π/2) 1 dx = π/2 ⇒ I = π / 4.',
    explanationKannada: 'ಕಿಂಗ್ಸ್ ಸೂತ್ರದಂತೆ ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a - x) dx ಬಳಸಿ ಎರಡೂ ಸಮೀಕರಣಗಳನ್ನು ಕೂಡಿಸಿದಾಗ 2I = π/2 ⇒ I = π/4.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: '∫₀^(π/2) [sinⁿ x / (sinⁿ x + cosⁿ x)] dx = π/4'
  },
  {
    id: 'math-mtg-8-1',
    subject: 'mathematics',
    chapter: 'math-8',
    topic: 'Area Bounded by Parabola and Line',
    question: 'The area of the region bounded by the parabola y² = 4ax and the line y = mx is given by:',
    questionKannada: 'ಪರವಲಯ (Parabola) y² = 4ax ಮತ್ತು ಸರಳರೇಖೆ y = mx ನಿಂದ ಸುತ್ತುವರಿದ ಪ್ರದೇಶದ ವಿಸ್ತೀರ್ಣವು:',
    questionType: 'single_mcq',
    options: ['8a² / (3m³)', '4a² / (3m³)', '8a² / m²', '16a² / (3m³)'],
    optionsKannada: ['8a² / (3m³)', '4a² / (3m³)', '8a² / m²', '16a² / (3m³)'],
    correctAnswer: '8a² / (3m³)',
    explanation: 'The standard result for the area bounded between y² = 4ax and y = mx is Area = 8a² / (3m³). This is one of the highest-yield shortcut formulas tested in KCET and COMEDK.',
    explanationKannada: 'y² = 4ax ಮತ್ತು y = mx ನಡುವಿನ ವಿಸ್ತೀರ್ಣದ ಪ್ರಮಾಣಿತ ಶಾರ್ಟ್‌ಕಟ್ ಸೂತ್ರ Area = 8a² / (3m³).',
    difficulty: 'Medium',
    source: 'KCET / NCERT Fingertips',
    year: '2024',
    formulaNote: 'Area between y² = 4ax and y = mx is 8a² / (3m³)'
  },
  {
    id: 'math-mtg-9-1',
    subject: 'mathematics',
    chapter: 'math-9',
    topic: 'Integrating Factor of Linear DE',
    question: 'The integrating factor (I.F.) of the differential equation x (dy/dx) - y = 2x² is:',
    questionKannada: 'ಅವಕಲನ ಸಮೀಕರಣ x (dy/dx) - y = 2x² ನ ಸಂಕಲನ ಅಪವರ್ತನ (Integrating Factor) ಯಾವುದು?',
    questionType: 'single_mcq',
    options: ['1 / x', 'x', '-1 / x', 'e^(-x)'],
    optionsKannada: ['1 / x', 'x', '-1 / x', 'e^(-x)'],
    correctAnswer: '1 / x',
    explanation: 'Divide the entire equation by x to get standard linear form: dy/dx + (-1/x)y = 2x. Here P(x) = -1/x. Then I.F. = e^(∫ P dx) = e^(∫ -1/x dx) = e^(-ln x) = e^(ln(x⁻¹)) = 1/x.',
    explanationKannada: 'ಪ್ರಮಾಣಿತ ರೂಪ dy/dx - (1/x)y = 2x. P(x) = -1/x. ಆದ್ದರಿಂದ I.F. = e^(∫ -1/x dx) = e^(-ln x) = 1/x.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'I.F. = e^(∫ P(x) dx)'
  },
  {
    id: 'math-mtg-10-1',
    subject: 'mathematics',
    chapter: 'math-10',
    topic: 'Dot Product and Projection of Vectors',
    question: 'The projection of the vector a⃗ = 2î + 3ĵ + 2k̂ on the vector b⃗ = î + 2ĵ + k̂ is:',
    questionKannada: 'ಸದಿಶ a⃗ = 2î + 3ĵ + 2k̂ ನ ಪ್ರಕ್ಷೇಪಣೆಯು (Projection) ಸದಿಶ b⃗ = î + 2ĵ + k̂ ನ ಮೇಲೆ ಎಷ್ಟು?',
    questionType: 'single_mcq',
    options: ['5√(6) / 3', '5 / √6', '10 / √17', '6 / √5'],
    optionsKannada: ['5√(6) / 3', '5 / √6', '10 / √17', '6 / √5'],
    correctAnswer: '5√(6) / 3',
    explanation: 'Projection of a⃗ on b⃗ = (a⃗ · b⃗) / |b⃗|. Here a⃗ · b⃗ = (2)(1) + (3)(2) + (2)(1) = 2 + 6 + 2 = 10. |b⃗| = √(1² + 2² + 1²) = √6. Projection = 10 / √6 = (10√6) / 6 = 5√6 / 3.',
    explanationKannada: 'a⃗ ಯ b⃗ ಮೇಲಿನ ಪ್ರಕ್ಷೇಪಣೆ = (a⃗ · b⃗) / |b⃗| = (2 + 6 + 2) / √6 = 10 / √6 = 5√6 / 3.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Projection of a⃗ on b⃗ = (a⃗ · b⃗) / |b⃗|'
  },
  {
    id: 'math-mtg-10-2',
    subject: 'mathematics',
    chapter: 'math-10',
    topic: 'Cross Product Area of Parallelogram',
    question: 'If the adjacent sides of a parallelogram are represented by vectors a⃗ = 3î + ĵ + 4k̂ and b⃗ = î - ĵ + k̂, then its area in sq units is:',
    questionKannada: 'ಸಮಾಂತರ ಚತುರ್ಭುಜದ ಪಕ್ಕದ ಬಾಹುಗಳು a⃗ = 3î + ĵ + 4k̂ ಮತ್ತು b⃗ = î - ĵ + k̂ ಆಗಿದ್ದರೆ, ಅದರ ವಿಸ್ತೀರ್ಣ ಎಷ್ಟು ಚದರ ಯೂನಿಟ್‌ಗಳು?',
    questionType: 'single_mcq',
    options: ['√42', '√21', '42', '21'],
    optionsKannada: ['√42', '√21', '42', '21'],
    correctAnswer: '√42',
    explanation: 'Area = |a⃗ × b⃗|. Compute a⃗ × b⃗ = det[[î, ĵ, k̂], [3, 1, 4], [1, -1, 1]] = î(1 - (-4)) - ĵ(3 - 4) + k̂(-3 - 1) = 5î + ĵ - 4k̂. Magnitude |a⃗ × b⃗| = √(5² + 1² + (-4)²) = √(25 + 1 + 16) = √42.',
    explanationKannada: 'ವಿಸ್ತೀರ್ಣ = |a⃗ × b⃗|. a⃗ × b⃗ = 5î + ĵ - 4k̂. ಪರಿಮಾಣ = √(25 + 1 + 16) = √42 ಚದರ ಯೂನಿಟ್‌ಗಳು.',
    difficulty: 'Medium',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'Area of parallelogram = |a⃗ × b⃗|'
  },
  {
    id: 'math-mtg-11-1',
    subject: 'mathematics',
    chapter: 'math-11',
    topic: 'Shortest Distance between Skew Lines',
    question: 'The shortest distance between two parallel lines r⃗ = a⃗₁ + λb⃗ and r⃗ = a⃗₂ + μb⃗ is given by:',
    questionKannada: 'ಎರಡು ಸಮಾಂತರ ರೇಖೆಗಳು r⃗ = a⃗₁ + λb⃗ ಮತ್ತು r⃗ = a⃗₂ + μb⃗ ನಡುವಿನ ಕನಿಷ್ಠ ದೂರವು:',
    questionType: 'single_mcq',
    options: ['|(b⃗ × (a⃗₂ - a⃗₁))| / |b⃗|', '|((a⃗₂ - a⃗₁) · (b⃗₁ × b⃗₂))| / |b⃗₁ × b⃗₂|', '|(a⃗₂ - a⃗₁)| / |b⃗|', '|b⃗ · (a⃗₂ - a⃗₁)| / |b⃗|'],
    optionsKannada: ['|(b⃗ × (a⃗₂ - a⃗₁))| / |b⃗|', '|((a⃗₂ - a⃗₁) · (b⃗₁ × b⃗₂))| / |b⃗₁ × b⃗₂|', '|(a⃗₂ - a⃗₁)| / |b⃗|', '|b⃗ · (a⃗₂ - a⃗₁)| / |b⃗|'],
    correctAnswer: '|(b⃗ × (a⃗₂ - a⃗₁))| / |b⃗|',
    explanation: 'For parallel lines having the same direction vector b⃗, the shortest distance d = |b⃗ × (a⃗₂ - a⃗₁)| / |b⃗|. For skew non-parallel lines it involves the scalar triple product with (b⃗₁ × b⃗₂).',
    explanationKannada: 'ಸಮಾಂತರ ರೇಖೆಗಳಿಗೆ ಕನಿಷ್ಠ ದೂರ d = |b⃗ × (a⃗₂ - a⃗₁)| / |b⃗|.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'd = |b⃗ × (a⃗₂ - a⃗₁)| / |b⃗| for parallel lines'
  },
  {
    id: 'math-mtg-13-1',
    subject: 'mathematics',
    chapter: 'math-13',
    topic: 'Probability Distribution and Mean',
    question: 'A random variable X has the following probability distribution: P(X=0)=k, P(X=1)=2k, P(X=2)=3k. Then the value of k and the mean E(X) are:',
    questionKannada: 'ಒಂದು ಯಾದೃಚ್ಛಿಕ ಚಲಕ X ನ ಸಂಭವನೀಯತೆಯ ಹಂಚಿಕೆ: P(X=0)=k, P(X=1)=2k, P(X=2)=3k. ಹಾಗಾದರೆ k ನ ಬೆಲೆ ಮತ್ತು ಸರಾಸರಿ E(X):',
    questionType: 'single_mcq',
    options: ['k = 1/6, E(X) = 4/3', 'k = 1/6, E(X) = 1', 'k = 1/3, E(X) = 2', 'k = 1/5, E(X) = 7/5'],
    optionsKannada: ['k = 1/6, E(X) = 4/3', 'k = 1/6, E(X) = 1', 'k = 1/3, E(X) = 2', 'k = 1/5, E(X) = 7/5'],
    correctAnswer: 'k = 1/6, E(X) = 4/3',
    explanation: 'Sum of probabilities = 1 ⇒ k + 2k + 3k = 6k = 1 ⇒ k = 1/6. Mean E(X) = ∑ xᵢ P(xᵢ) = (0)(k) + (1)(2k) + (2)(3k) = 8k = 8(1/6) = 4/3.',
    explanationKannada: 'ಸಂಭವನೀಯತೆಗಳ ಮೊತ್ತ ∑ P(X) = 1 ⇒ 6k = 1 ⇒ k = 1/6. ಸರಾಸರಿ E(X) = 0·k + 1·(2k) + 2·(3k) = 8k = 8/6 = 4/3.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: '∑ P(X) = 1, E(X) = ∑ xᵢ · pᵢ'
  },

  // =========================================================================
  // MATHEMATICS: ASSERTION-REASONING & STATEMENT-BASED QUESTIONS (ALL CHAPTERS)
  // =========================================================================

  // MATH-1: Relations and Functions
  {
    id: 'math-ar-1',
    subject: 'mathematics',
    chapter: 'math-1',
    topic: 'Equivalence Relations & Bijective Functions',
    question: `Assertion (A): On the set A = {1, 2, 3}, the smallest relation R = {(1, 1), (2, 2), (3, 3)} is an equivalence relation.\nReason (R): A relation R on set A is an equivalence relation if and only if it is reflexive, symmetric, and transitive.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'The identity relation I_A = {(1, 1), (2, 2), (3, 3)} contains (a, a) for all a ∈ A (reflexive). If (a, b) ∈ R then a = b, so (b, a) ∈ R (symmetric). If (a, b) ∈ R and (b, c) ∈ R then a = b = c, so (a, c) ∈ R (transitive). Hence it is the smallest equivalence relation on A.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Identity relation is an equivalence relation: Reflexive, Symmetric, Transitive',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಗಣ A = {1, 2, 3} ನಲ್ಲಿ, ಅತಿ ಚಿಕ್ಕ ಸಂಬಂಧ R = {(1, 1), (2, 2), (3, 3)} ಒಂದು ಸಮಾನತೆಯ ಸಂಬಂಧವಾಗಿದೆ (equivalence relation).\nಕಾರಣ (R): ಗಣ A ಮೇಲಿನ ಸಂಬಂಧ R ಯು ಸ್ವreflexive, ಸಂವೇದಕ (symmetric) ಮತ್ತು ಸಂಕ್ರಮಕ (transitive) ಆಗಿದ್ದರೆ ಮಾತ್ರ ಅದು ಸಮಾನತೆಯ ಸಂಬಂಧವಾಗಿರುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: ಅನನ್ಯತಾ ಸಂಬಂಧವು ಸ್ವreflexive, ಸಂವೇದಕ ಮತ್ತು ಸಂಕ್ರಮಕ ಮೂರೂ ಗುಣಗಳನ್ನು ತೃಪ್ತಿಪಡಿಸುತ್ತದೆ.'
  },
  {
    id: 'math-stmt-1',
    subject: 'mathematics',
    chapter: 'math-1',
    topic: 'Invertible Functions & Composition',
    question: `Consider the following statements regarding functions:\nStatement I: A function f: X → Y is invertible if and only if f is bijective (both one-one and onto).\nStatement II: If functions f: A → B and g: B → C are both one-one (injective), then their composition g ∘ f: A → C is also one-one.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'Both statements are fundamental theorems in NCERT Class 12: Bijectivity is the necessary and sufficient condition for existence of f⁻¹. Also, if g(f(x₁)) = g(f(x₂)), since g is 1-1, f(x₁) = f(x₂), and since f is 1-1, x₁ = x₂, proving g ∘ f is 1-1.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Invertible ⇔ Bijective (One-one + Onto)',
    questionKannada: `ಪ್ರಮೇಯಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಈ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ:\nಹೇಳಿಕೆ I: ಒಂದು ಉತ್ಪನ್ನ f: X → Y ಪ್ರತಿಲೋಮೀಯವಾಗಲು (invertible), f ಯು ಬೈಜೆಕ್ಟಿವ್ (ಏಕೈಕ ಮತ್ತು ಆವರಿಸುವ) ಆಗಿರುವುದು ಅಗತ್ಯ ಮತ್ತು ಪರ್ಯಾಪ್ತ ಷರತ್ತಾಗಿದೆ.\nಹೇಳಿಕೆ II: f: A → B ಮತ್ತು g: B → C ಎರಡೂ ಏಕೈಕ (one-one) ಉತ್ಪನ್ನಗಳಾಗಿದ್ದರೆ, ಅವುಗಳ ಸಂಯೋಜನೆ g ∘ f: A → C ಕೂಡ ಏಕೈಕವಾಗಿರುತ್ತದೆ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: ವಿಲೋಮ ಅಸ್ತಿತ್ವಕ್ಕೆ ಬೈಜೆಕ್ಷನ್ ಅಗತ್ಯ, ಮತ್ತು ಎರಡು 1-1 ಉತ್ಪನ್ನಗಳ ಸಂಯೋಜನೆಯೂ 1-1 ಆಗಿರುತ್ತದೆ.'
  },

  // MATH-2: Inverse Trigonometric Functions
  {
    id: 'math-ar-2',
    subject: 'mathematics',
    chapter: 'math-2',
    topic: 'Principal Value Branches',
    question: `Assertion (A): The value of sin⁻¹(sin(2π/3)) is equal to π/3, not 2π/3.\nReason (R): The principal value branch of sin⁻¹x is [-π/2, π/2], and 2π/3 does not lie within this interval.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Since 2π/3 ∉ [-π/2, π/2], sin⁻¹(sin(2π/3)) cannot be 2π/3. Using identity sin(2π/3) = sin(π - π/3) = sin(π/3), and since π/3 ∈ [-π/2, π/2], the value is π/3. Reason correctly explains Assertion.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'sin⁻¹(sin θ) = θ only when θ ∈ [-π/2, π/2]',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): sin⁻¹(sin(2π/3)) ನ ಬೆಲೆಯು π/3 ಆಗಿರುತ್ತದೆ, 2π/3 ಅಲ್ಲ.\nಕಾರಣ (R): sin⁻¹x ನ ಪ್ರಧಾನ ಮೌಲ್ಯ ಶಾಖೆಯು (principal value branch) [-π/2, π/2] ಆಗಿದ್ದು, 2π/3 ಈ ಅಂತರದಲ್ಲಿ ಬರುವುದಿಲ್ಲ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: sin(2π/3) = sin(π/3) ಮತ್ತು π/3 ∈ [-π/2, π/2] ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಬರುತ್ತದೆ.'
  },

  // MATH-3: Matrices
  {
    id: 'math-stmt-3',
    subject: 'mathematics',
    chapter: 'math-3',
    topic: 'Symmetric and Skew-Symmetric Matrices',
    question: `Consider the following statements regarding square matrices:\nStatement I: Any square matrix A can be uniquely expressed as the sum of a symmetric matrix and a skew-symmetric matrix: A = (1/2)(A + A') + (1/2)(A - A').\nStatement II: All the principal diagonal elements of any skew-symmetric matrix are strictly zero.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'Both statements are standard NCERT theorems: A = P + Q where P = 1/2(A + A\') is symmetric and Q = 1/2(A - A\') is skew-symmetric. For a skew-symmetric matrix, a_ii = -a_ii ⇒ 2a_ii = 0 ⇒ a_ii = 0 for all diagonal entries.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'A = (A+A\')/2 + (A-A\')/2; a_ii = 0 for skew-symmetric',
    questionKannada: `ಚೌಕ ಮಾತೃಕೆಗಳ (square matrices) ಕುರಿತ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಗಮನಿಸಿ:\nಹೇಳಿಕೆ I: ಯಾವುದೇ ಚೌಕ ಮಾತೃಕೆ A ಅನ್ನು ಒಂದು ಸಮ್ಮಿತೀಯ ಮತ್ತು ಒಂದು ಅಪಸಮ್ಮಿತೀಯ ಮಾತೃಕೆಯ ಮೊತ್ತವಾಗಿ ಅನನ್ಯವಾಗಿ ವ್ಯಕ್ತಪಡಿಸಬಹುದು: A = (1/2)(A + A\') + (1/2)(A - A\').\nಹೇಳಿಕೆ II: ಯಾವುದೇ ಅಪಸಮ್ಮಿತೀಯ ಮಾತೃಕೆಯ (skew-symmetric) ಪ್ರಮುಖ ಕರ್ಣದ ಎಲ್ಲಾ ಅಂಶಗಳು ಶೂನ್ಯವಾಗಿರುತ್ತವೆ (a_ii = 0).`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: A = P + Q ವಿಭಜನೆ ಸಾಧ್ಯ ಮತ್ತು a_ii = -a_ii ಆಗುವುದರಿಂದ ಕರ್ಣದ ಅಂಶಗಳು ಶೂನ್ಯವಾಗಿರುತ್ತವೆ.'
  },

  // MATH-4: Determinants
  {
    id: 'math-ar-4',
    subject: 'mathematics',
    chapter: 'math-4',
    topic: 'Determinant of Skew-Symmetric Matrix',
    question: `Assertion (A): The determinant of any skew-symmetric matrix of odd order (such as 3×3 or 5×5) is always strictly zero.\nReason (R): For a skew-symmetric matrix A of order n, A' = -A. Taking determinants, |A| = |A'| = |-A| = (-1)ⁿ |A|. If n is odd, |A| = -|A| ⇒ 2|A| = 0 ⇒ |A| = 0.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'By determinant properties, det(A) = det(A\'). For skew-symmetric, A\' = -A. So det(A) = det(-A) = (-1)ⁿ det(A). If n is odd, (-1)ⁿ = -1, yielding det(A) = -det(A) ⇒ 2 det(A) = 0 ⇒ det(A) = 0. Reason is the exact formal proof.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: '|A| = (-1)^n |A| ⇒ |A| = 0 for odd order skew-symmetric matrix',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಬೆಸ ಕ್ರಮಾಂಕದ (ಉದಾ: 3×3 ಅಥವಾ 5×5) ಯಾವುದೇ ಅಪಸಮ್ಮಿತೀಯ ಮಾತೃಕೆಯ ನಿರ್ಧಾರಕವು (determinant) ಯಾವಾಗಲೂ ಶೂನ್ಯವಾಗಿರುತ್ತದೆ.\nಕಾರಣ (R): n ಕ್ರಮಾಂಕದ ಅಪಸಮ್ಮಿತೀಯ ಮಾತೃಕೆಗೆ A\' = -A. ನಿರ್ಧಾರಕ ತೆಗೆದುಕೊಂಡಾಗ |A| = |A\'| = |-A| = (-1)ⁿ |A|. n ಬೆಸ ಸಂಖ್ಯೆಯಾಗಿದ್ದರೆ, |A| = -|A| ⇒ 2|A| = 0 ⇒ |A| = 0.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸಮರ್ಪಕ ಗಣಿತೀಯ ವಿವರಣೆಯಾಗಿದೆ: (-1)³ = -1 ಆಗಿರುವುದರಿಂದ |A| = -|A| ⇒ |A| = 0.'
  },

  // MATH-5: Continuity and Differentiability
  {
    id: 'math-ar-5',
    subject: 'mathematics',
    chapter: 'math-5',
    topic: 'Differentiability implies Continuity',
    question: `Assertion (A): The modulus function f(x) = |x| is continuous at x = 0, but it is not differentiable at x = 0.\nReason (R): Every differentiable function is continuous, but the converse is not necessarily true.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'lim_{x→0} |x| = 0 = f(0), so f is continuous. Left derivative at 0 is -1 while right derivative is +1; since LHD ≠ RHD, f is not differentiable at x = 0. This provides the classic counterexample demonstrating that continuity does not imply differentiability.',
    difficulty: 'Easy',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'Differentiability ⇒ Continuity, but Continuity ⇏ Differentiability',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಮಾಡ್ಯುಲಸ್ ಉತ್ಪನ್ನ f(x) = |x| ಯು x = 0 ನಲ್ಲಿ ಅವಿಚ್ಛಿನ್ನವಾಗಿದೆ (continuous), ಆದರೆ x = 0 ನಲ್ಲಿ ವಿಕಲನೀಯವಾಗಿಲ್ಲ (not differentiable).\nಕಾರಣ (R): ಪ್ರತಿಯೊಂದು ವಿಕಲನೀಯ ಉತ್ಪನ್ನವು ಅವಿಚ್ಛಿನ್ನವಾಗಿರುತ್ತದೆ, ಆದರೆ ಇದರ ವಿಲೋಮವು (converse) ಸತ್ಯವಾಗಿರಬೇಕಾಗಿಲ್ಲ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: x = 0 ನಲ್ಲಿ ಎಡ ಮತ್ತು ಬಲ ವಿಕಲಜಗಳು (-1 ಮತ್ತು +1) ಸಮನಾಗಿಲ್ಲದಿರುವುದರಿಂದ ಇದು ವಿಕಲನೀಯವಲ್ಲ.'
  },

  // MATH-6: Application of Derivatives
  {
    id: 'math-stmt-6',
    subject: 'mathematics',
    chapter: 'math-6',
    topic: 'Monotonicity and Tangents',
    question: `Consider the following statements regarding derivatives:\nStatement I: If f'(x) > 0 for all x in an open interval (a, b), then f(x) is strictly increasing on [a, b].\nStatement II: At a point of local extremum of a differentiable function f(x), the tangent to the curve is strictly parallel to the x-axis (f'(c) = 0).`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'Both statements are core theorems: f\'(x) > 0 implies strictly increasing behavior by Mean Value Theorem. Fermat theorem guarantees that at any interior local extremum of a differentiable function, the derivative vanishes (slope of tangent m = 0, horizontal tangent).',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'f\'(x) > 0 ⇒ strictly increasing; local extremum ⇒ f\'(c) = 0',
    questionKannada: `ವಿಕಲಜಗಳ ಅನ್ವಯಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಗಮನಿಸಿ:\nಹೇಳಿಕೆ I: ಮುಕ್ತ ಅಂತರ (a, b) ದಲ್ಲಿ ಎಲ್ಲಾ x ಗೆ f\'(x) > 0 ಆಗಿದ್ದರೆ, f(x) ಯು [a, b] ನಲ್ಲಿ ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಏರಿಕೆಯಾಗುವ ಉತ್ಪನ್ನವಾಗಿದೆ (strictly increasing).\nಹೇಳಿಕೆ II: ವಿಕಲನೀಯ ಉತ್ಪನ್ನದ ಸ್ಥಳೀಯ ಗರಿಷ್ಠ ಅಥವಾ ಕನಿಷ್ಠ ಬಿಂದುವಿನಲ್ಲಿ ವಕ್ರರೇಖೆಗೆ ಎಳೆದ ಸ್ಪರ್ಶಕವು x-ಅಕ್ಷಕ್ಕೆ ಸಮಾನಾಂತರವಾಗಿರುತ್ತದೆ (f\'(c) = 0).`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: f\'(x) > 0 ಏರಿಕೆಯನ್ನು ಸೂಚಿಸುತ್ತದೆ, ಮತ್ತು ಗರಿಷ್ಠ/ಕನಿಷ್ಠ ಬಿಂದುಗಳಲ್ಲಿ ಸ್ಪರ್ಶಕದ ಇಳಿಜಾರು ಶೂನ್ಯವಾಗಿರುತ್ತದೆ.'
  },

  // MATH-7: Integrals
  {
    id: 'math-ar-7',
    subject: 'mathematics',
    chapter: 'math-7',
    topic: 'Definite Integral Properties (Odd Functions)',
    question: `Assertion (A): The value of the definite integral ∫_{-a}^{a} x³ cos x dx is equal to 0.\nReason (R): For any continuous odd function f(x) satisfying f(-x) = -f(x), the definite integral ∫_{-a}^{a} f(x) dx is identically zero.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Let f(x) = x³ cos x. Then f(-x) = (-x)³ cos(-x) = -x³ cos x = -f(x). Thus f(x) is an odd function. By standard definite integral property P₇, ∫_{-a}^a f(x) dx = 0 whenever f(x) is odd.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: '∫_{-a}^a f(x) dx = 0 if f(-x) = -f(x)',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ನಿರ್ದಿಷ್ಟ ಅನುಕಲನ ∫_{-a}^{a} x³ cos x dx ನ ಬೆಲೆಯು 0 ಗೆ ಸಮನಾಗಿರುತ್ತದೆ.\nಕಾರಣ (R): f(-x) = -f(x) ನಿಯಮವನ್ನು ತೃಪ್ತಿಪಡಿಸುವ ಯಾವುದೇ ಅವಿಚ್ಛಿನ್ನ ಬೆಸ ಉತ್ಪನ್ನಕ್ಕೆ (odd function), ನಿರ್ದಿಷ್ಟ ಅನುಕಲನ ∫_{-a}^{a} f(x) dx ಯಾವಾಗಲೂ ಶೂನ್ಯವಾಗಿರುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸಮಂಜಸ ವಿವರಣೆಯಾಗಿದೆ: f(x) = x³ cos x ಬೆಸ ಉತ್ಪನ್ನವಾಗಿದ್ದು, ಬೆಸ ಉತ್ಪನ್ನಗಳ ಸಮಪಾರ್ಶ್ವ ಮಿತಿಗಳಲ್ಲಿನ ಅನುಕಲನ ಶೂನ್ಯವಾಗಿರುತ್ತದೆ.'
  },

  // MATH-9: Differential Equations
  {
    id: 'math-stmt-9',
    subject: 'mathematics',
    chapter: 'math-9',
    topic: 'Order and Degree of Differential Equations',
    question: `Consider the following statements regarding differential equations:\nStatement I: The order of a differential equation is the order of the highest derivative occurring in the equation.\nStatement II: The degree of a differential equation is always defined for every differential equation regardless of whether derivatives occur inside trigonometric or exponential functions.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Statement I is correct but Statement II is incorrect',
    explanation: 'Statement I is correct. Statement II is incorrect: The degree of a differential equation is defined ONLY when the equation is expressible as a polynomial equation in derivatives. For example, dy/dx + sin(dy/dx) = 0 has order 1, but its degree is NOT defined.',
    difficulty: 'Medium',
    source: 'KCET Classic Trap',
    year: '2024',
    formulaNote: 'Order is always defined; Degree is defined only if polynomial in derivatives',
    questionKannada: `ವಿಕಲನ ಸಮೀಕರಣಗಳ (differential equations) ಕುರಿತ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಗಮನಿಸಿ:\nಹೇಳಿಕೆ I: ವಿಕಲನ ಸಮೀಕರಣದ ಕ್ರಮಾಂಕವು (order) ಸಮೀಕರಣದಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುವ ಗರಿಷ್ಠ ವಿಕಲಜದ ಕ್ರಮಾಂಕವಾಗಿರುತ್ತದೆ.\nಹೇಳಿಕೆ II: ವಿಕಲಜಗಳು ತ್ರಿಕೋನಮಿತಿ ಅಥವಾ ಘಾತೀಯ ಉತ್ಪನ್ನಗಳ ಒಳಗೆ ಇದ್ದರೂ ಸಹ ಪ್ರತಿಯೊಂದು ವಿಕಲನ ಸಮೀಕರಣದ ಡಿಗ್ರಿಯು (degree) ಯಾವಾಗಲೂ ವ್ಯಾಖ್ಯಾನಿಸಲ್ಪಡುತ್ತದೆ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ: ವಿಕಲಜಗಳಲ್ಲಿ ಸಮೀಕರಣವು ಬಹುಪದೋಕ್ತಿಯಾಗಿದ್ದರೆ (polynomial) ಮಾತ್ರ ಡಿಗ್ರಿಯನ್ನು ವ್ಯಾಖ್ಯಾನಿಸಬಹುದು.'
  },

  // MATH-12: Linear Programming
  {
    id: 'math-ar-12',
    subject: 'mathematics',
    chapter: 'math-12',
    topic: 'Corner Point Theorem in LPP',
    question: `Assertion (A): In a linear programming problem, the optimal (maximum or minimum) value of the objective function Z = ax + by must occur at one of the corner points (vertices) of the feasible region.\nReason (R): The feasible region determined by a set of linear inequalities is always a convex polygonal region, and the objective function is a linear function.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'By the Fundamental Theorem of Linear Programming, a linear function defined over a convex polygonal feasible region achieves its extreme values at extreme points (corner vertices).',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Optimal value in LPP always occurs at corner points of feasible region',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ರೇಖಾತ್ಮಕ ಯೋಜನಾ ಸಮಸ್ಯೆಯಲ್ಲಿ (LPP), ಉದ್ದೇಶಿತ ಉತ್ಪನ್ನ Z = ax + by ನ ಗರಿಷ್ಠ ಅಥವಾ ಕನಿಷ್ಠ ಮೌಲ್ಯವು ಕಾರ್ಯಸಾಧ್ಯ ವಲಯದ ಮೂಲೆ ಬಿಂದುಗಳಲ್ಲಿ (corner points) ಒಂದರಲ್ಲಿ ಇರಲೇಬೇಕು.\nಕಾರಣ (R): ರೇಖಾತ್ಮಕ ಅಸಮಾನತೆಗಳಿಂದ ಉಂಟಾಗುವ ಕಾರ್ಯಸಾಧ್ಯ ವಲಯವು ಯಾವಾಗಲೂ ಉಬ್ಬು ಬಹುಭುಜಾಕೃತಿಯಾಗಿದ್ದು (convex polygon), ಉದ್ದೇಶಿತ ಉತ್ಪನ್ನವು ರೇಖಾತ್ಮಕವಾಗಿರುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: LPP ಯ ಮೂಲಭೂತ ಸಿದ್ಧಾಂತದಂತೆ ಗರಿಷ್ಠ/ಕನಿಷ್ಠ ಮೌಲ್ಯಗಳು ಯಾವಾಗಲೂ ಶೃಂಗ ಬಿಂದುಗಳಲ್ಲಿ (corner points) ಇರುತ್ತವೆ.'
  }
];
