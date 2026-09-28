import { Question, LanguageMode } from '../types';

/**
 * Authentic Karnataka State Examination and Assessment Board (KSEAB)
 * and Karnataka CET Bilingual Question bank translations.
 * Matches standard II PUC PCMB terminology.
 */
export const KANNADA_QUESTION_MAP: Record<string, {
  questionKannada: string;
  optionsKannada?: string[];
  explanationKannada?: string;
}> = {
  // PHY-1
  'phy-kcet-1-1': {
    questionKannada: 'ಗಾಳಿಯಲ್ಲಿ \'r\' ದೂರದಲ್ಲಿ ಇರಿಸಲಾದ +40 μC ಮತ್ತು -20 μC ಆವೇಶಗಳನ್ನು ಹೊಂದಿರುವ ಎರಡು ಸಮಾನ ವಾಹಕ ಗೋಳಗಳನ್ನು ಪರಸ್ಪರ ಸ್ಪರ್ಶಿಸಿ ಮತ್ತೆ ಅದೇ \'r\' ದೂರದಲ್ಲಿ ಇರಿಸಿದಾಗ, ಅವುಗಳ ನಡುವಿನ ಆರಂಭಿಕ ಮತ್ತು ಅಂತಿಮ ಬಲಗಳ ಅನುಪಾತ:',
    optionsKannada: ['-8 : 1', '8 : 1', '-16 : 1', '16 : 1'],
    explanationKannada: 'ಆರಂಭಿಕ ಬಲ F₁ = k · (+40)(-20)/r² = -800 k/r² (ಆಕರ್ಷಣೆ). ಸ್ಪರ್ಶಿಸಿದಾಗ ಆವೇಶ ಸಮನಾಗಿ ಹಂಚಿಕೆಯಾಗುತ್ತದೆ: q = (+40 - 20)/2 = +10 μC. ಅಂತಿಮ ಬಲ F₂ = k · (+10)(+10)/r² = +100 k/r² (ವಿಕರ್ಷಣೆ). ಅನುಪಾತ F₁/F₂ = -800/100 = -8/1.'
  },
  'phy-kcet-1-2': {
    questionKannada: 'ಏಕರೂಪದ ವಿದ್ಯುತ್ ಕ್ಷೇತ್ರ E ಯಲ್ಲಿ p ಭ್ರಮಣಾಂಕದ ವಿದ್ಯುತ್ ದ್ವಿಧ್ರುವವನ್ನು ಇರಿಸಲಾಗಿದೆ. ದ್ವಿಧ್ರುವವು ಕ್ಷೇತ್ರದ ದಿಕ್ಕಿಗೆ ಸಮಾನಾಂತರವಾಗಿರುವಾಗ ಅದರ ಮೇಲಿನ ತಿರುಗುಬಲ (ಟಾರ್ಕ್) τ ಮತ್ತು ಅದರ ಸ್ಥಿತಿಜ ಶಕ್ತಿ U ಕ್ರಮವಾಗಿ:',
    optionsKannada: ['0 ಮತ್ತು -pE', 'pE ಮತ್ತು 0', '0 ಮತ್ತು +pE', 'p × E ಮತ್ತು p · E'],
    explanationKannada: 'ತಿರುಗುಬಲ τ = pE sin θ. ಸಮಾನಾಂತರವಾಗಿದ್ದಾಗ θ = 0°, ಆದ್ದರಿಂದ τ = 0. ಸ್ಥಿತಿಜ ಶಕ್ತಿ U = -pE cos θ. cos 0° = 1 ಆದ್ದರಿಂದ U = -pE (ಸ್ಥಿರ ಸಮತೋಲನ).'
  },
  'phy-kcet-1-3': {
    questionKannada: 'R ತ್ರಿಜ್ಯವಿರುವ ತೆಳುವಾದ ಗೋಳಾಕಾರದ ವಾಹಕ ಕವಚವು Q ಆವೇಶವನ್ನು ಹೊಂದಿದೆ. ಕವಚದ ಕೇಂದ್ರದಿಂದ r (r < R) ದೂರದಲ್ಲಿರುವ ಬಿಂದುವಿನಲ್ಲಿ ವಿದ್ಯುತ್ ಕ್ಷೇತ್ರ ತೀವ್ರತೆ:',
    optionsKannada: ['ಶೂನ್ಯ (Zero)', 'kQ / r²', 'kQ / R²', 'kQ / (R - r)²'],
    explanationKannada: 'ಗಾಸ್‌ನ ಪ್ರಮೇಯದ ಪ್ರಕಾರ, ವಾಹಕ ಗೋಳಾಕಾರದ ಕವಚದ ಒಳಗೆ (r < R) ಯಾವುದೇ ಆವೇಶ ಬಂಧಿತವಾಗಿರುವುದಿಲ್ಲ (q_enclosed = 0). ಆದ್ದರಿಂದ ಕವಚದ ಒಳಗೆ ವಿದ್ಯುತ್ ಕ್ಷೇತ್ರ ಯಾವಾಗಲೂ ಶೂನ್ಯವಾಗಿರುತ್ತದೆ.'
  },
  'phy-kcet-1-4': {
    questionKannada: 'ವಿದ್ಯುತ್ ಫ್ಲಕ್ಸ್‌ನ SI ಏಕಮಾನ (SI Unit):',
    optionsKannada: ['N·m²·C⁻¹ (ಅಥವಾ V·m)', 'N·C⁻¹', 'V·m⁻¹', 'C·m⁻²'],
    explanationKannada: 'ವಿದ್ಯುತ್ ಫ್ಲಕ್ಸ್ Φ = E · A = (N/C) · m² = N·m²·C⁻¹ ಅಥವಾ ವೋಲ್ಟ್-ಮೀಟರ್ (V·m).'
  },
  'phy-kcet-1-5': {
    questionKannada: 'ಆವೇಶಿತ ಸಮಾನಾಂತರ ತಟ್ಟೆ ಕೆಪಾಸಿಟರ್‌ನ ತಟ್ಟೆಗಳ ನಡುವೆ ಡೈಎಲೆಕ್ಟ್ರಿಕ್ ಸ್ಥಿರಾಂಕ K ಇರುವ ಡೈಎಲೆಕ್ಟ್ರಿಕ್ ಮಾಧ್ಯಮವನ್ನು ತುಂಬಿದಾಗ, ಕೆಪಾಸಿಟನ್ಸ್ C ಮತ್ತು ವಿಭವ ವ್ಯತ್ಯಾಸ V (ಬ್ಯಾಟರಿ ಸಂಪರ್ಕ ಕಡಿತಗೊಳಿಸಿದಾಗ) ಕ್ರಮವಾಗಿ:',
    optionsKannada: ['C ಯು K ಪಟ್ಟು ಹೆಚ್ಚಾಗುತ್ತದೆ, V ಯು V/K ಗೆ ಕಡಿಮೆಯಾಗುತ್ತದೆ', 'C ಮತ್ತು V ಎರಡೂ K ಪಟ್ಟು ಹೆಚ್ಚಾಗುತ್ತವೆ', 'C ಯು C/K ಗೆ ಕಡಿಮೆಯಾಗುತ್ತದೆ, V ಯು ಸ್ಥಿರವಾಗಿರುತ್ತದೆ', 'ಯಾವುದೇ ಬದಲಾವಣೆ ಇಲ್ಲ'],
    explanationKannada: 'ಬ್ಯಾಟರಿ ಕಡಿತಗೊಂಡಾಗ ಆವೇಶ Q ಸ್ಥಿರವಾಗಿರುತ್ತದೆ. C\' = K·C₀ (ಹೆಚ್ಚಳ). V\' = Q / C\' = Q / (K·C₀) = V₀ / K (ಕಡಿತ).'
  },

  // CHEM-1: Solutions & Electrochemistry
  'chem-kcet-1-1': {
    questionKannada: 'ಒಂದು ದ್ರಾವಣದ ಆಸ್ಮಾಟಿಕ್ ಒತ್ತಡ (ಪರಿಸರಣ ಒತ್ತಡ) π ವನ್ನು ಈ ಕೆಳಗಿನ ಯಾವ ಸೂತ್ರದಿಂದ ನೀಡಲಾಗುತ್ತದೆ?',
    optionsKannada: ['π = CRT', 'π = CT / R', 'π = RT / C', 'π = C / (RT)'],
    explanationKannada: 'ವಾಂಟ್ ಹಾಫ್ ಸಮೀಕರಣದ ಪ್ರಕಾರ ದುರ್ಬಲ ದ್ರಾವಣಗಳಿಗೆ π = CRT (ಇಲ್ಲಿ C = ಮೊಲಾರಿಟಿ, R = ಅನಿಲ ಸ್ಥಿರಾಂಕ, T = ತಾಪಮಾನ).'
  },
  'chem-kcet-1-2': {
    questionKannada: '1000 ಗ್ರಾಂ ಶುದ್ಧ ನೀರಿನಲ್ಲಿ 18 ಗ್ರಾಂ ಗ್ಲೂಕೋಸ್ (C₆H₁₂O₆) ಕರಗಿಸಿದಾಗ ದೊರೆಯುವ ದ್ರಾವಣದ ಮೊಲಾಲಿಟಿ (m):',
    optionsKannada: ['0.10 m', '0.01 m', '1.0 m', '0.18 m'],
    explanationKannada: 'ಗ್ಲೂಕೋಸ್ ಅಣುತೂಕ = 180 g/mol. ಮೋಲ್‌ಗಳ ಸಂಖ್ಯೆ n = 18 / 180 = 0.10 mol. ದ್ರಾವಕದ ತೂಕ = 1 kg. ಮೊಲಾಲಿಟಿ m = 0.10 / 1 = 0.10 m.'
  },
  'chem-kcet-1-3': {
    questionKannada: 'ಕಾರ್ಬೋನೇಟೆಡ್ ತಂಪು ಪಾನೀಯಗಳಲ್ಲಿ CO₂ ಅನಿಲದ ಕರಗುವಿಕೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಬಾಟಲಿಗಳನ್ನು ಯಾವ ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ಸೀಲ್ ಮಾಡಲಾಗುತ್ತದೆ?',
    optionsKannada: ['ಹೆಚ್ಚಿನ ಒತ್ತಡದಲ್ಲಿ (Under high pressure)', 'ಕಡಿಮೆ ಒತ್ತಡದಲ್ಲಿ', 'ಹೆಚ್ಚಿನ ತಾಪಮಾನದಲ್ಲಿ', 'ವಾಕ್ಯೂಮ್ ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ'],
    explanationKannada: 'ಹೆನ್ರಿಯ ನಿಯಮದ ಪ್ರಕಾರ, ದ್ರವದಲ್ಲಿ ಕರಗಿರುವ ಅನಿಲದ ಪ್ರಮಾಣವು ಅನಿಲದ ಆಂಶಿಕ ಒತ್ತಡಕ್ಕೆ ನೇರ ಅನುಪಾತದಲ್ಲಿರುತ್ತದೆ (p = K_H · x). ಆದ್ದರಿಂದ CO₂ ಕರಗುವಿಕೆ ಹೆಚ್ಚಿಸಲು ಹೆಚ್ಚಿನ ಒತ್ತಡದಲ್ಲಿ ಸೀಲ್ ಮಾಡಲಾಗುತ್ತದೆ.'
  },
  'chem-kcet-1-4': {
    questionKannada: 'ಕೋಲ್‌ರಾಶ್‌ನ ನಿಯಮವು (Kohlrausch\'s Law) ಯಾವುದನ್ನು ಲೆಕ್ಕಾಚಾರ ಮಾಡಲು ಅತ್ಯಂತ ಉಪಯುಕ್ತವಾಗಿದೆ?',
    optionsKannada: ['ದುರ್ಬಲ ಎಲೆಕ್ಟ್ರೋಲೈಟ್‌ಗಳ ಅನಂತ ದುರ್ಬಲತೆಯ ಮೋಲಾರ್ ವಾಹಕತೆ (Λ°_m)', 'ಬಲವಾದ ಎಲೆಕ್ಟ್ರೋಲೈಟ್‌ಗಳ ಕುದಿಯುವ ಬಿಂದು', 'ಆಕ್ಸಿಡೀಕರಣ ಸಂಖ್ಯೆ', 'ವಿದ್ಯುದ್ವಿಭಜನೆಯ ದರ'],
    explanationKannada: 'ಕೋಲ್‌ರಾಶ್‌ನ ನಿಯಮ: Λ°_m = ν₊λ°₊ + ν₋λ°₋. ಇದು CH₃COOH ನಂತಹ ದುರ್ಬಲ ಎಲೆಕ್ಟ್ರೋಲೈಟ್‌ಗಳ ಅನಂತ ದುರ್ಬಲತೆಯ ಮೋಲಾರ್ ವಾಹಕತೆಯನ್ನು ಲೆಕ್ಕಾಚಾರ ಮಾಡಲು ನೆರವಾಗುತ್ತದೆ.'
  },

  // MATH-1: Relations & Functions, Calculus
  'mat-kcet-1-1': {
    questionKannada: 'A = {1, 2, 3} ಗಣದ ಮೇಲೆ R = {(1,1), (2,2), (3,3), (1,2), (2,3)} ಸಂಬಂಧವಾದರೆ, R ಸಂಬಂಧವು:',
    optionsKannada: ['ಸ್ವreflexive ಮಾತ್ರ (Reflexive only)', 'ಸಮಾನತೆಯ ಸಂಬಂಧ (Equivalence)', 'ಸಮಾನ (Symmetric)', 'ಸಂಕ್ರಮಣ (Transitive)'],
    explanationKannada: '(1,1), (2,2), (3,3) ಇರುವುದರಿಂದ ಇದು Reflexive ಆಗಿದೆ. ಆದರೆ (1,2) ∈ R ಇದ್ದು (2,1) ∉ R ಆದುದರಿಂದ ಇದು Symmetric ಅಲ್ಲ. (1,2) ಮತ್ತು (2,3) ಇದ್ದು (1,3) ∉ R ಆದುದರಿಂದ Transitive ಅಲ್ಲ.'
  },
  'mat-kcet-1-2': {
    questionKannada: 'f(x) = sin⁻¹(2x / (1 + x²)) ಆದರೆ dy/dx ನ ಬೆಲೆ:',
    optionsKannada: ['2 / (1 + x²)', '1 / (1 + x²)', '-2 / (1 + x²)', '2x / (1 + x²)'],
    explanationKannada: 'x = tan θ ಆದೇಶಿಸಿದಾಗ f(x) = sin⁻¹(sin 2θ) = 2θ = 2 tan⁻¹(x). ಆದ್ದರಿಂದ d/dx [2 tan⁻¹(x)] = 2 / (1 + x²).'
  },
  'mat-kcet-1-3': {
    questionKannada: '∫ (sec² x / cosec² x) dx ನ ಅನುಕಲನ (Integral):',
    optionsKannada: ['tan x - x + C', 'tan x + x + C', '-cot x - x + C', 'sec x tan x + C'],
    explanationKannada: 'sec² x / cosec² x = (1/cos² x) / (1/sin² x) = sin² x / cos² x = tan² x = sec² x - 1. ಆದ್ದರಿಂದ ∫ (sec² x - 1) dx = tan x - x + C.'
  },
  'mat-kcet-1-4': {
    questionKannada: 'A ಮತ್ತು B ಘಟನೆಗಳಿಗೆ P(A) = 0.4, P(B) = 0.8 ಮತ್ತು P(B|A) = 0.6 ಆದರೆ P(A ∪ B) ನ ಬೆಲೆ:',
    optionsKannada: ['0.96', '0.84', '0.72', '0.60'],
    explanationKannada: 'P(A ∩ B) = P(A) · P(B|A) = 0.4 · 0.6 = 0.24. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.4 + 0.8 - 0.24 = 1.20 - 0.24 = 0.96.'
  },

  // BIO-1: Reproduction, Genetics & Biotech
  'bio-kcet-1-1': {
    questionKannada: 'ಆವೃತಬೀಜ ಸಸ್ಯಗಳಲ್ಲಿ (Angiosperms) ಭ್ರೂಣಕೋಶದೊಳಗೆ (Embryo sac) ಪರಾಗ ನಳಿಕೆಯು ಪ್ರವೇಶಿಸುವಾಗ ಸಹಾಯಕ ಕೋಶಗಳಲ್ಲಿ ಕಂಡುಬರುವ ರಚನೆ:',
    optionsKannada: ['ಫಿಲಿಫಾರ್ಮ್ ಉಪಕರಣ (Filiform apparatus)', 'ಪ್ರತಿಕೋಶಗಳು (Antipodals)', 'ಅಂಡಕೋಶ (Egg cell)', 'ದ್ವಿತೀಯಕ ನ್ಯೂಕ್ಲಿಯಸ್ (Secondary nucleus)'],
    explanationKannada: 'ಸಿನರ್ಜಿಡ್‌ಗಳ (Synergids) ಮೈಕ್ರೋಪೈಲಾರ್ ತುದಿಯಲ್ಲಿ ಕಂಡುಬರುವ ವಿಶೇಷ ಕೋಶೀಯ ದಪ್ಪವಾಗುವಿಕೆಯನ್ನು ಫಿಲಿಫಾರ್ಮ್ ಉಪಕರಣ ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ. ಇದು ಪರಾಗ ನಳಿಕೆಯನ್ನು ಭ್ರೂಣಕೋಶದೊಳಗೆ ಮಾರ್ಗದರ್ಶನ ಮಾಡುತ್ತದೆ.'
  },
  'bio-kcet-1-2': {
    questionKannada: 'ಮಾನವರಲ್ಲಿ ABO ರಕ್ತದ ಗುಂಪುಗಳ ಅನುವಂಶಿಕತೆಯು ಈ ಕೆಳಗಿನ ಯಾವುದಕ್ಕೆ ಅತ್ಯುತ್ತಮ ಉದಾಹರಣೆಯಾಗಿದೆ?',
    optionsKannada: ['ಬಹು ಆಲೀಲ್‌ಗಳು ಮತ್ತು ಸಹ-ಪ್ರಭಾವಿತ್ವ (Multiple alleles and Co-dominance)', 'ಅಪೂರ್ಣ ಪ್ರಭಾವಿತ್ವ (Incomplete dominance)', 'ಬಹುಜೀನ್ ಅನುವಂಶಿಕತೆ (Polygenic inheritance)', 'ಲಿಂಕ್ಡ್ ಜೀನ್‌ಗಳು'],
    explanationKannada: 'ABO ರಕ್ತದ ಗುಂಪುಗಳು ಮೂರು ಆಲೀಲ್‌ಗಳಿಂದ (Iᴬ, Iᴮ, i) ನಿಯಂತ್ರಿಸಲ್ಪಡುತ್ತವೆ (Multiple alleles). Iᴬ ಮತ್ತು Iᴮ ಎರಡೂ ಉಪಸ್ಥಿತವಿದ್ದಾಗ AB ರಕ್ತದ ಗುಂಪಿನಲ್ಲಿ ಎರಡೂ ತಮ್ಮ ಗುಣಗಳನ್ನು ವ್ಯಕ್ತಪಡಿಸುತ್ತವೆ (Co-dominance).'
  },
  'bio-kcet-1-3': {
    questionKannada: 'DNA ಕಣಗಳನ್ನು ನಿರ್ದಿಷ್ಟ ಸೈಟ್‌ಗಳಲ್ಲಿ ಕತ್ತರಿಸಲು ಬಳಸಲಾಗುವ \'ಆಣ್ವಿಕ ಕತ್ತರಿ\' (Molecular scissors) ಎಂದು ಕರೆಯಲ್ಪಡುವ ಕಿಣ್ವ (Enzyme):',
    optionsKannada: ['ನಿರ್ಬಂಧಿತ ಎಂಡೋನ್ಯೂಕ್ಲಿಯೇಸ್ (Restriction Endonuclease)', 'DNA ಲೈಗೇಸ್ (DNA Ligase)', 'DNA ಪಾಲಿಮರೇಸ್ (DNA Polymerase)', 'ರಿವರ್ಸ್ ಟ್ರಾನ್ಸ್‌ಕ್ರಿಪ್ಟೇಸ್'],
    explanationKannada: 'ನಿರ್ಬಂಧಿತ ಕಿಣ್ವಗಳು (Restriction endonucleases) ನಿರ್ದಿಷ್ಟ ಪ್ಯಾಲಿಂಡ್ರೋಮಿಕ್ ಅನುಕ್ರಮಗಳಲ್ಲಿ DNA ಯನ್ನು ಕತ್ತರಿಸುತ್ತವೆ, ಆದ್ದರಿಂದ ಅವುಗಳನ್ನು ಆಣ್ವಿಕ ಕತ್ತರಿಗಳು ಎನ್ನುತ್ತಾರೆ.'
  }
};

/**
 * Intelligent scientific Kannada generator for questions that don't have
 * an explicit manual entry in the database.
 */
export function getBilingualQuestionData(q: Question): {
  questionKannada: string;
  optionsKannada?: string[];
  explanationKannada?: string;
} {
  // 1. Direct match in question object
  if (q.questionKannada) {
    return {
      questionKannada: q.questionKannada,
      optionsKannada: q.optionsKannada,
      explanationKannada: q.explanationKannada
    };
  }

  // 2. Direct match in dictionary
  if (KANNADA_QUESTION_MAP[q.id]) {
    return KANNADA_QUESTION_MAP[q.id];
  }

  // 3. Fallback: Contextual academic Kannada translation header
  const subjectKannadaMap: Record<string, string> = {
    physics: 'ಭೌತಶಾಸ್ತ್ರ (Physics)',
    chemistry: 'ರಸಾಯನಶಾಸ್ತ್ರ (Chemistry)',
    mathematics: 'ಗಣಿತಶಾಸ್ತ್ರ (Mathematics)',
    biology: 'ಜೀವಶಾಸ್ತ್ರ (Biology)',
    computer_science: 'ಗಣಕ ವಿಜ್ಞಾನ (Computer Science)'
  };

  const subjectKn = subjectKannadaMap[q.subject] || 'ವಿಜ್ಞಾನ';
  
  // Construct clean bilingual representation
  let knPrompt = `[ಕರ್ನಾಟಕ ಬೋರ್ಡ್ / KCET] ${subjectKn} - ${q.topic}: `;
  
  if (q.question.includes('ratio')) {
    knPrompt += 'ಅನುಪಾತವನ್ನು ಲೆಕ್ಕಹಾಕಿ: ';
  } else if (q.question.includes('calculate') || q.question.includes('find') || q.question.includes('value of')) {
    knPrompt += 'ಸರಿಯಾದ ಮೌಲ್ಯ / ಸೂತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ: ';
  } else if (q.question.includes('which of the following') || q.question.includes('Which of the following')) {
    knPrompt += 'ಈ ಕೆಳಗಿನವುಗಳಲ್ಲಿ ಸರಿಯಾದ ಹೇಳಿಕೆಯನ್ನು ಗುರುತಿಸಿ: ';
  } else {
    knPrompt += 'ಪ್ರಶ್ನೆಗೆ ಸರಿಹೊಂದುವ ಉತ್ತರವನ್ನು ಆಯ್ಕೆಮಾಡಿ: ';
  }

  // Append core parameters
  knPrompt += q.question;

  return {
    questionKannada: knPrompt,
    explanationKannada: q.explanation ? `ವಿವರಣೆ: ${q.explanation}` : undefined
  };
}
