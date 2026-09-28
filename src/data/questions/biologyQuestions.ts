import { Question } from '../../types';

export const biologyQuestions: Question[] = [
  // ==========================================
  // BIO-1: Sexual Reproduction in Flowering Plants
  // ==========================================
  {
    id: 'bio-kcet-1-1',
    subject: 'biology',
    chapter: 'bio-1',
    topic: 'Double Fertilization & Endosperm Ploidy',
    question: 'In angiosperms, the ploidy levels of the cells of the aleurone layer, embryo, and synergids are respectively:',
    questionType: 'single_mcq',
    options: ['3n, 2n, and n', '2n, 3n, and n', '3n, n, and 2n', 'n, 2n, and 3n'],
    correctAnswer: '3n, 2n, and n',
    explanation: 'The aleurone layer is part of the endosperm formed by triple fusion (one haploid sperm + secondary nucleus 2n = 3n). The embryo develops from the zygote (syngamy of n + n = 2n). Synergids are components of the female gametophyte (embryo sac) and are haploid (n).',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Aleurone/Endosperm = 3n, Embryo = 2n, Synergids = n'
  },
  {
    id: 'bio-kcet-1-2',
    subject: 'biology',
    chapter: 'bio-1',
    topic: 'Anatropous Ovule and Filiform Apparatus',
    question: 'The filiform apparatus is a characteristic cellular thickening present at the micropylar tip of:',
    questionType: 'single_mcq',
    options: ['Synergids', 'Egg cell', 'Antipodal cells', 'Central cell'],
    correctAnswer: 'Synergids',
    explanation: 'The filiform apparatus consists of finger-like projections of the synergid cell wall at the micropylar end that play an essential role in guiding the entry of the pollen tube into the synergid.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Filiform apparatus in synergids guides pollen tube entry'
  },

  // ==========================================
  // BIO-2: Human Reproduction
  // ==========================================
  {
    id: 'bio-kcet-2-1',
    subject: 'biology',
    chapter: 'bio-2',
    topic: 'Spermatogenesis and Sertoli Cells',
    question: 'Which hormone acts directly on Leydig cells (interstitial cells) to stimulate the synthesis and secretion of androgens (testosterone)?',
    questionType: 'single_mcq',
    options: ['Luteinizing Hormone (LH / ICSH)', 'Follicle Stimulating Hormone (FSH)', 'Prolactin', 'Oxytocin'],
    correctAnswer: 'Luteinizing Hormone (LH / ICSH)',
    explanation: 'Luteinizing Hormone (LH) acts on the Leydig (interstitial) cells to stimulate synthesis and secretion of androgens (testosterone). FSH acts on Sertoli cells to stimulate spermiogenesis.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'LH stimulates Leydig cells (Androgens); FSH stimulates Sertoli cells'
  },
  {
    id: 'bio-kcet-2-2',
    subject: 'biology',
    chapter: 'bio-2',
    topic: 'Menstrual Cycle & LH Surge',
    question: 'Ovulation in the human female cycle is triggered by:',
    questionType: 'single_mcq',
    options: [
      'Rapid secretion of LH leading to its maximum level (LH surge) mid-cycle',
      'Sudden drop in estrogen level',
      'High level of progesterone produced by corpus luteum',
      'Inhibition of FSH and LH'
    ],
    correctAnswer: 'Rapid secretion of LH leading to its maximum level (LH surge) mid-cycle',
    explanation: 'Both LH and FSH attain a peak level in the middle of the menstrual cycle (about the 14th day). Rapid secretion of LH leading to maximum level mid-cycle, called LH surge, induces rupture of Graafian follicle and release of the ovum (ovulation).',
    difficulty: 'Easy',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'LH surge on ~day 14 triggers ovulation'
  },

  // ==========================================
  // BIO-3: Reproductive Health
  // ==========================================
  {
    id: 'bio-kcet-3-1',
    subject: 'biology',
    chapter: 'bio-3',
    topic: 'Assisted Reproductive Technologies (ART)',
    question: 'In the test-tube baby programme, the transfer of an embryo with up to 8 blastomeres into the fallopian tube is termed:',
    questionType: 'single_mcq',
    options: ['ZIFT (Zygote Intra-Fallopian Transfer)', 'IUT (Intra-Uterine Transfer)', 'GIFT (Gamete Intra-Fallopian Transfer)', 'ICSI (Intra-Cytoplasmic Sperm Injection)'],
    correctAnswer: 'ZIFT (Zygote Intra-Fallopian Transfer)',
    explanation: 'The zygote or early embryo with up to 8 blastomeres is transferred into the fallopian tube (ZIFT). Embryos with more than 8 blastomeres are transferred into the uterus (IUT).',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: '≤ 8 blastomeres → ZIFT (Fallopian tube); > 8 blastomeres → IUT (Uterus)'
  },
  {
    id: 'bio-kcet-3-2',
    subject: 'biology',
    chapter: 'bio-3',
    topic: 'Non-steroidal Contraceptives (Saheli)',
    question: 'Saheli, an oral contraceptive for females developed by CDRI Lucknow, is a:',
    questionType: 'single_mcq',
    options: [
      'Non-steroidal preparation taken once a week',
      'Steroidal pill taken daily',
      'Progesterone-only implant',
      'Copper-releasing device'
    ],
    correctAnswer: 'Non-steroidal preparation taken once a week',
    explanation: 'Saheli (centchroman/ormeloxifene) is a "once-a-week" non-steroidal oral contraceptive pill developed by the Central Drug Research Institute (CDRI), Lucknow. It has very few side effects and high contraceptive value.',
    difficulty: 'Easy',
    source: 'KCET 2021',
    year: '2021',
    formulaNote: 'Saheli = Non-steroidal once-a-week pill (CDRI Lucknow)'
  },

  // ==========================================
  // BIO-4: Principles of Inheritance and Variation
  // ==========================================
  {
    id: 'bio-kcet-4-1',
    subject: 'biology',
    chapter: 'bio-4',
    topic: 'Mendelian Genetics and Dihybrid Cross',
    question: 'In a dihybrid cross between round yellow seeded pea plants (RrYy) and wrinkled green seeded pea plants (rryy) (test cross), the phenotypic ratio of the offspring is:',
    questionType: 'single_mcq',
    options: ['1 : 1 : 1 : 1', '9 : 3 : 3 : 1', '1 : 2 : 1', '3 : 1'],
    correctAnswer: '1 : 1 : 1 : 1',
    explanation: 'A dihybrid test cross (RrYy × rryy) yields 4 phenotypic classes in equal proportions: Round Yellow (1) : Round Green (1) : Wrinkled Yellow (1) : Wrinkled Green (1).',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Dihybrid test cross ratio = 1 : 1 : 1 : 1'
  },
  {
    id: 'bio-kcet-4-2',
    subject: 'biology',
    chapter: 'bio-4',
    topic: 'Chromosomal Disorders & Karyotypes',
    question: 'Klinefelter’s syndrome in humans is characterised by the karyotype:',
    questionType: 'single_mcq',
    options: ['47, XXY', '45, XO', '47, +21', '47, XYY'],
    correctAnswer: '47, XXY',
    explanation: 'Klinefelter’s syndrome is caused by the presence of an additional copy of an X-chromosome resulting in the karyotype 47, XXY (overall masculine development with feminine features like gynaecomastia; sterile).',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Klinefelter = 47, XXY; Turner = 45, XO; Down = 47 (+21)'
  },

  // ==========================================
  // BIO-5: Molecular Basis of Inheritance
  // ==========================================
  {
    id: 'bio-kcet-5-1',
    subject: 'biology',
    chapter: 'bio-5',
    topic: 'Lac Operon Regulation',
    question: 'In the lac operon of Escherichia coli, the repressor protein is synthesised constitutively by the:',
    questionType: 'single_mcq',
    options: ['i gene (inhibitor / regulatory gene)', 'z gene', 'y gene', 'a gene'],
    correctAnswer: 'i gene (inhibitor / regulatory gene)',
    explanation: 'The i gene codes for the repressor protein of the lac operon. It is expressed constitutively (all the time). When lactose (allolactose inducer) binds to the repressor, it inactivates it, allowing RNA polymerase access to the promoter.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'i gene → Lac repressor; z → β-galactosidase; y → Permease; a → Transacetylase'
  },
  {
    id: 'bio-kcet-5-2',
    subject: 'biology',
    chapter: 'bio-5',
    topic: 'Chargaff Rule of DNA Equivalence',
    question: 'If a double stranded DNA molecule has 20% Cytosine, what is the percentage of Adenine in this DNA according to Chargaff’s rule?',
    questionType: 'single_mcq',
    options: ['30%', '20%', '40%', '60%'],
    correctAnswer: '30%',
    explanation: 'According to Chargaff’s rule: %G = %C = 20%. Therefore, %(G + C) = 40%. The remaining 60% must be %(A + T). Since %A = %T, percentage of Adenine = 60% / 2 = 30%.',
    difficulty: 'Easy',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'A = T and G = C; A + T + G + C = 100%'
  },

  // ==========================================
  // BIO-6: Evolution
  // ==========================================
  {
    id: 'bio-kcet-6-1',
    subject: 'biology',
    chapter: 'bio-6',
    topic: 'Hardy-Weinberg Equilibrium',
    question: 'In a random mating population at Hardy-Weinberg equilibrium, the frequency of a recessive allele a is 0.4. The frequency of heterozygous individuals (Aa) in the population is:',
    questionType: 'single_mcq',
    options: ['0.48', '0.16', '0.36', '0.24'],
    correctAnswer: '0.48',
    explanation: 'Given q = 0.4. Since p + q = 1, p = 1 - 0.4 = 0.6. The frequency of heterozygous individuals is 2pq = 2 × 0.6 × 0.4 = 0.48 (48%).',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'p² + 2pq + q² = 1; Heterozygotes = 2pq'
  },
  {
    id: 'bio-kcet-6-2',
    subject: 'biology',
    chapter: 'bio-6',
    topic: 'Homologous vs Analogous Organs',
    question: 'The thorns of Bougainvillea and tendrils of Cucurbita are examples of:',
    questionType: 'single_mcq',
    options: [
      'Homologous organs representing divergent evolution',
      'Analogous organs representing convergent evolution',
      'Vestigial organs',
      'Atavism'
    ],
    correctAnswer: 'Homologous organs representing divergent evolution',
    explanation: 'Both thorns of Bougainvillea and tendrils of Cucurbita are modified axillary buds (same anatomical origin / homology) adapted for different functions (protection vs climbing), representing divergent evolution.',
    difficulty: 'Easy',
    source: 'KCET 2021',
    year: '2021',
    formulaNote: 'Bougainvillea thorn & Cucurbita tendril: Both axillary buds → Homologous'
  },

  // ==========================================
  // BIO-7: Human Health and Disease
  // ==========================================
  {
    id: 'bio-kcet-7-1',
    subject: 'biology',
    chapter: 'bio-7',
    topic: 'Infectious Agents and Vector Transmission',
    question: 'Wuchereria bancrofti and Wuchereria malayi, the filarial worms causing Elephantiasis, are transmitted to human host through the bite of infected:',
    questionType: 'single_mcq',
    options: ['Female Culex mosquito', 'Female Anopheles mosquito', 'Female Aedes mosquito', 'Tsetse fly'],
    correctAnswer: 'Female Culex mosquito',
    explanation: 'The filarial parasites Wuchereria bancrofti and W. malayi are transmitted to humans through the bite of infected female Culex mosquitoes. Anopheles transmits malaria; Aedes transmits dengue and chikungunya.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Culex → Filariasis; Aedes → Dengue/Chikungunya; Anopheles → Malaria'
  },
  {
    id: 'bio-kcet-7-2',
    subject: 'biology',
    chapter: 'bio-7',
    topic: 'Innate and Acquired Immunity',
    question: 'The yellowish fluid colostrum secreted by mother during the initial days of lactation contains abundant antibodies of which class to protect the infant?',
    questionType: 'single_mcq',
    options: ['IgA', 'IgG', 'IgE', 'IgM'],
    correctAnswer: 'IgA',
    explanation: 'Colostrum is rich in secretory IgA antibodies which provide passive immunity to the newborn infant against gastrointestinal and respiratory infections.',
    difficulty: 'Easy',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'Colostrum → IgA (Passive Immunity); Placental transfer → IgG'
  },

  // ==========================================
  // BIO-8: Microbes in Human Welfare
  // ==========================================
  {
    id: 'bio-kcet-8-1',
    subject: 'biology',
    chapter: 'bio-8',
    topic: 'Bioactive Molecules & Statins',
    question: 'Statins, used as blood cholesterol-lowering agents, are commercially produced by the yeast:',
    questionType: 'single_mcq',
    options: ['Monascus purpureus', 'Trichoderma polysporum', 'Saccharomyces cerevisiae', 'Aspergillus niger'],
    correctAnswer: 'Monascus purpureus',
    explanation: 'Statins produced by the yeast Monascus purpureus act by competitively inhibiting the enzyme HMG-CoA reductase responsible for cholesterol synthesis. Cyclosporin A is produced by Trichoderma polysporum.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Monascus purpureus → Statins (Inhibits HMG-CoA reductase)'
  },
  {
    id: 'bio-kcet-8-2',
    subject: 'biology',
    chapter: 'bio-8',
    topic: 'Biogas Production (Methanogens)',
    question: 'Methanobacterium, present in the anaerobic sludge and rumen of cattle, produces biogas which predominantly consists of:',
    questionType: 'single_mcq',
    options: ['Methane (CH₄) and CO₂', 'Propane and Butane', 'Hydrogen and Oxygen', 'Nitrogen and CO'],
    correctAnswer: 'Methane (CH₄) and CO₂',
    explanation: 'Biogas produced by anaerobic digestion of cellulosic material by methanogenic bacteria (like Methanobacterium) predominantly consists of Methane (~50-70%), Carbon dioxide (~30-40%), and traces of H₂ and H₂S.',
    difficulty: 'Easy',
    source: 'KCET 2020',
    year: '2020',
    formulaNote: 'Biogas = CH₄ (50-70%) + CO₂ (30-40%)'
  },

  // ==========================================
  // BIO-9: Biotechnology: Principles and Processes
  // ==========================================
  {
    id: 'bio-kcet-9-1',
    subject: 'biology',
    chapter: 'bio-9',
    topic: 'Restriction Enzymes & Palindromic Sequences',
    question: 'The restriction endonuclease EcoRI recognises the specific palindromic nucleotide sequence:',
    questionType: 'single_mcq',
    options: [
      "5' - GAATTC - 3' and 3' - CTTAAG - 5'",
      "5' - AAGCTT - 3' and 3' - TTCGAA - 5'",
      "5' - GGATCC - 3' and 3' - CCTAGG - 5'",
      "5' - CCCGGG - 3' and 3' - GGGCCC - 5'"
    ],
    correctAnswer: "5' - GAATTC - 3' and 3' - CTTAAG - 5'",
    explanation: "EcoRI inspects the length of DNA and recognises 5'-GAATTC-3', cleaving specifically between G and A on both strands to produce sticky/cohesive ends.",
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: "EcoRI cuts between G and A in 5'-GAATTC-3'"
  },
  {
    id: 'bio-kcet-9-2',
    subject: 'biology',
    chapter: 'bio-9',
    topic: 'Polymerase Chain Reaction (PCR)',
    question: 'Taq polymerase, used in the extension step of PCR, is isolated from the thermophilic bacterium:',
    questionType: 'single_mcq',
    options: ['Thermus aquaticus', 'Bacillus thuringiensis', 'Escherichia coli', 'Agrobacterium tumefaciens'],
    correctAnswer: 'Thermus aquaticus',
    explanation: 'Taq DNA polymerase remains stable during high-temperature denaturation steps (~94°C) because it is isolated from the thermophilic bacterium Thermus aquaticus.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Taq polymerase from Thermus aquaticus is thermostable'
  },

  // ==========================================
  // BIO-10: Biotechnology and its Applications
  // ==========================================
  {
    id: 'bio-kcet-10-1',
    subject: 'biology',
    chapter: 'bio-10',
    topic: 'RNA Interference (RNAi)',
    question: 'In RNA interference (RNAi), cellular defense mechanism involves silencing of a specific mRNA due to a complementary:',
    questionType: 'single_mcq',
    options: ['Double-stranded RNA (dsRNA)', 'Single-stranded DNA', 'Transfer RNA', 'Ribosomal RNA'],
    correctAnswer: 'Double-stranded RNA (dsRNA)',
    explanation: 'RNAi takes place in all eukaryotic organisms as a method of cellular defense. It involves silencing of a target mRNA due to a complementary double-stranded RNA (dsRNA) molecule that binds to and prevents translation of the mRNA (silencing).',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'RNAi: dsRNA triggers mRNA degradation/silencing'
  },
  {
    id: 'bio-kcet-10-2',
    subject: 'biology',
    chapter: 'bio-10',
    topic: 'Bt Cotton and Cry Toxins',
    question: 'The Bt toxin protein produced by Bacillus thuringiensis does not kill the bacterium itself because:',
    questionType: 'single_mcq',
    options: [
      'The toxin exists as an inactive protoxin and becomes active only in alkaline pH of insect gut',
      'The bacterium has anti-toxin enzymes',
      'The toxin is enclosed in a thick protective capsule',
      'The bacterium is resistant to all proteins'
    ],
    correctAnswer: 'The toxin exists as an inactive protoxin and becomes active only in alkaline pH of insect gut',
    explanation: 'The Bt toxin protein exists as inactive protoxins in the bacterium. Once an insect ingests the inactive protoxin, it is converted into an active form of toxin due to the alkaline pH of the gut which solubilises the crystals.',
    difficulty: 'Easy',
    source: 'KCET 2022',
    year: '2022',
    formulaNote: 'Bt protoxin activated by alkaline pH in insect midgut'
  },

  // ==========================================
  // BIO-11: Organisms and Populations
  // ==========================================
  {
    id: 'bio-kcet-11-1',
    subject: 'biology',
    chapter: 'bio-11',
    topic: 'Population Growth Curves',
    question: 'In the Verhulst-Pearl Logistic Growth equation dN/dt = rN · ((K - N) / K), the parameter K represents:',
    questionType: 'single_mcq',
    options: ['Carrying capacity of the environment', 'Intrinsic rate of natural increase', 'Population density at time t', 'Environmental resistance'],
    correctAnswer: 'Carrying capacity of the environment',
    explanation: 'In the logistic growth equation, K is the carrying capacity — the maximum population density of a given species that a particular habitat can sustainably support with its finite resources.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'dN/dt = rN · [(K - N) / K]'
  },

  // ==========================================
  // BIO-12: Ecosystem
  // ==========================================
  {
    id: 'bio-kcet-12-1',
    subject: 'biology',
    chapter: 'bio-12',
    topic: 'Decomposition and Humification',
    question: 'The dark coloured, amorphous colloidal substance produced during decomposition that is highly resistant to microbial action is:',
    questionType: 'single_mcq',
    options: ['Humus', 'Detritus', 'Litter', 'Peat'],
    correctAnswer: 'Humus',
    explanation: 'Humification leads to accumulation of a dark coloured amorphous substance called humus that is highly resistant to microbial action and undergoes decomposition at an extremely slow rate, acting as a reservoir of nutrients.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Humus: Dark, amorphous, colloidal, resistant to microbial attack'
  },

  // ==========================================
  // BIO-13: Biodiversity and Conservation
  // ==========================================
  {
    id: 'bio-kcet-13-1',
    subject: 'biology',
    chapter: 'bio-13',
    topic: 'In-situ and Ex-situ Conservation',
    question: 'Which of the following is an example of Ex-situ conservation of biodiversity?',
    questionType: 'single_mcq',
    options: ['Zoological parks and Seed banks', 'National Parks', 'Biosphere Reserves', 'Wildlife Sanctuaries'],
    correctAnswer: 'Zoological parks and Seed banks',
    explanation: 'Ex-situ conservation involves taking threatened animals and plants out from their natural habitat and placing them in special care settings such as Zoological parks, Botanical gardens, and Cryopreservation/Seed banks. National parks, sanctuaries, and biosphere reserves are In-situ.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Ex-situ: Zoo, Botanical Garden, Cryo/Seed Bank; In-situ: National Park, Sanctuary, Biosphere Reserve'
  },

  // ==========================================
  // MTG NCERT AT YOUR FINGERTIPS - BIOLOGY DRILLS
  // ==========================================
  {
    id: 'bio-mtg-1-1',
    subject: 'biology',
    chapter: 'bio-1',
    topic: 'Pollen Grain Wall & Sporopollenin',
    question: 'Sporopollenin, one of the most resistant organic biological materials known, is present in which layer of the pollen grain wall?',
    questionKannada: 'ತಿಳಿದಿರುವ ಅತ್ಯಂತ ನಿರೋಧಕ ಸಾವಯವ ಜೈವಿಕ ಪದಾರ್ಥಗಳಲ್ಲಿ ಒಂದಾದ ಸ್ಪೋರೋಪೋಲೆನಿನ್, ಪರಾಗ ರೇಣುವಿನ ಭಿತ್ತಿಯ ಯಾವ ಪದರದಲ್ಲಿದೆ?',
    questionType: 'single_mcq',
    options: ['Exine', 'Intine', 'Germ pore', 'Tapetum'],
    optionsKannada: ['ಎಕ್ಸೈನ್ (ಹೊರಪದರ)', 'ಇಂಟೈನ್ (ಒಳಪದರ)', 'ಅಂಕುರ ರಂಧ್ರ (Germ pore)', 'ಟಪೆಟಮ್'],
    correctAnswer: 'Exine',
    explanation: 'Sporopollenin forms the exine layer of pollen grains. It is extremely resistant to high temperatures, strong acids and alkali, and no enzyme that degrades sporopollenin is so far known.',
    explanationKannada: 'ಸ್ಪೋರೋಪೋಲೆನಿನ್ ಪರಾಗ ರೇಣುಗಳ ಹೊರಪದರವಾದ ಎಕ್ಸೈನ್ ಅನ್ನು ರೂಪಿಸುತ್ತದೆ. ಇದು ಅತಿ ಹೆಚ್ಚಿನ ತಾಪಮಾನ, ಬಲವಾದ ಆಮ್ಲಗಳು ಮತ್ತು ಕ್ಷಾರಗಳನ್ನು ತಡೆದುಕೊಳ್ಳಬಲ್ಲದು.',
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'Exine: Sporopollenin (resistant); Intine: Pectocellulose'
  },
  {
    id: 'bio-mtg-1-2',
    subject: 'biology',
    chapter: 'bio-1',
    topic: 'Perisperm in Seeds',
    question: 'Persistent nucellus remaining in the mature seed of black pepper and beet is termed as:',
    questionKannada: 'ಕಾಳುಮೆಣಸು ಮತ್ತು ಬೀಟ್‌ರೂಟ್‌ನ ಪಕ್ವ ಬೀಜದಲ್ಲಿ ಉಳಿದಿರುವ ನಿರಂತರ ಭ್ರೂಣಪೋಷಕ (ನ್ಯೂಸೆಲ್ಲಸ್) ಅಂಗಾಂಶವನ್ನು ಏನೆಂದು ಕರೆಯುತ್ತಾರೆ?',
    questionType: 'single_mcq',
    options: ['Perisperm', 'Pericarp', 'Endosperm', 'Scutellum'],
    optionsKannada: ['ಪೆರಿಸ್ಪರ್ಮ್ (ಪರಿಭ್ರೂಣಪೋಷ)', 'ಪೆರಿಕಾರ್ಪ್ (ಹಣ್ಣಿನ ಭಿತ್ತಿ)', 'ಎಂಡೋಸ್ಪರ್ಮ್ (ಭ್ರೂಣಪೋಷ)', 'ಸ್ಕೂಟೆಲ್ಲಮ್'],
    correctAnswer: 'Perisperm',
    explanation: 'In some seeds such as black pepper and beet, remnants of nucellus are persistent. This residual, persistent nucellus is called the perisperm.',
    explanationKannada: 'ಕಾಳುಮೆಣಸು ಮತ್ತು ಬೀಟ್‌ನಂತಹ ಬೀಜಗಳಲ್ಲಿ, ನ್ಯೂಸೆಲ್ಲಸ್‌ನ ಅವಶೇಷಗಳು ನಿರಂತರವಾಗಿ ಉಳಿದಿರುತ್ತವೆ. ಈ ನಿರಂತರ ನ್ಯೂಸೆಲ್ಲಸ್ ಅನ್ನು ಪೆರಿಸ್ಪರ್ಮ್ ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ.',
    difficulty: 'Medium',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'Persistent nucellus = Perisperm (Black pepper, Beet)'
  },
  {
    id: 'bio-mtg-2-1',
    subject: 'biology',
    chapter: 'bio-2',
    topic: 'Sperm Morphology & Acrosome Enzymes',
    question: 'Which part of the mammalian spermatozoon contains hydrolytic enzymes like hyaluronidase required for ovum penetration?',
    questionKannada: 'ಸಸ್ತನಿಗಳ ಶುಕ್ರಾಣುವಿನ ಯಾವ ಭಾಗವು ಅಂಡಾಣುವನ್ನು ಪ್ರವೇಶಿಸಲು ಅಗತ್ಯವಾದ ಹೈಲುರೊನಿಡೇಸ್‌ನಂತಹ ಜಲವಿಚ್ಛೇದಕ ಕಿಣ್ವಗಳನ್ನು ಒಳಗೊಂಡಿದೆ?',
    questionType: 'single_mcq',
    options: ['Acrosome', 'Middle piece', 'Centriole', 'Axial filament'],
    optionsKannada: ['ಆಕ್ರೋಸೋಮ್', 'ಮಧ್ಯ ಭಾಗ (Middle piece)', 'ಸೆಂಟ್ರಿಯೋಲ್', 'ಅಕ್ಷೀಯ ತಂತು'],
    correctAnswer: 'Acrosome',
    explanation: 'The acrosome is filled with enzymes that help in fertilization of the ovum by penetrating the follicular cells and zona pellucida (sperm lysins, hyaluronidase).',
    explanationKannada: 'ಆಕ್ರೋಸೋಮ್ ಕಿಣ್ವಗಳಿಂದ ತುಂಬಿರುತ್ತದೆ (ಹೈಲುರೊನಿಡೇಸ್), ಇದು ಅಂಡಾಣುವಿನ ಜೋನಾ ಪೆಲ್ಲುಸಿಡಾವನ್ನು ಭೇದಿಸಿ ಫಲೀಕರಣಕ್ಕೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.',
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'Acrosome = Golgi modification containing sperm lysins (Hyaluronidase)'
  },
  {
    id: 'bio-mtg-2-2',
    subject: 'biology',
    chapter: 'bio-2',
    topic: 'Endocrinology of Pregnancy & Relaxin',
    question: 'The hormone Relaxin is secreted in the later stages of human pregnancy primarily by the:',
    questionKannada: 'ಮಾನವ ಗರ್ಭಧಾರಣೆಯ ನಂತರದ ಹಂತಗಳಲ್ಲಿ ರಿಲ್ಯಾಕ್ಸಿನ್ ಹಾರ್ಮೋನ್ ಅನ್ನು ಮುಖ್ಯವಾಗಿ ಸ್ರವಿಸುವ ಅಂಗ ಯಾವುದು?',
    questionType: 'single_mcq',
    options: ['Ovary (Corpus luteum)', 'Placenta', 'Anterior pituitary', 'Uterus endometrium'],
    optionsKannada: ['ಅಂಡಾಶಯ (ಕಾರ್ಪಸ್ ಲೂಟಿಯಮ್)', 'ಜರಾಯು (Placenta)', 'ಮುಂಭಾಗದ ಪಿಟ್ಯುಟರಿ', 'ಗರ್ಭಾಶಯದ ಎಂಡೊಮೆಟ್ರಿಯಮ್'],
    correctAnswer: 'Ovary (Corpus luteum)',
    explanation: 'According to NCERT, hCG, hPL and relaxin are produced in women only during pregnancy; relaxin is secreted by the ovary in the later phase of pregnancy to soften pelvic ligaments.',
    explanationKannada: 'ಎನ್‌ಸಿಇಆರ್‌ಟಿ ಪ್ರಕಾರ, ರಿಲ್ಯಾಕ್ಸಿನ್ ಹಾರ್ಮೋನ್ ಗರ್ಭಧಾರಣೆಯ ನಂತರದ ಹಂತದಲ್ಲಿ ಅಂಡಾಶಯದಿಂದ (Ovary) ಸ್ರವಿಸಲ್ಪಡುತ್ತದೆ.',
    difficulty: 'Medium',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'hCG & hPL from placenta; Relaxin from ovary in late pregnancy'
  },
  {
    id: 'bio-mtg-3-1',
    subject: 'biology',
    chapter: 'bio-3',
    topic: 'Hormone Releasing Intrauterine Devices',
    question: 'Which of the following is an example of a hormone-releasing Intrauterine Device (IUD)?',
    questionKannada: 'ಕೆಳಗಿನವುಗಳಲ್ಲಿ ಯಾವುದು ಹಾರ್ಮೋನ್ ಬಿಡುಗಡೆ ಮಾಡುವ ಗರ್ಭಾಶಯದ ಒಳಗಿನ ಸಾಧನಕ್ಕೆ (IUD) ಉದಾಹರಣೆಯಾಗಿದೆ?',
    questionType: 'single_mcq',
    options: ['LNG-20 and Progestasert', 'Multiload 375', 'CuT and Cu7', 'Lippes loop'],
    optionsKannada: ['LNG-20 ಮತ್ತು ಪ್ರೊಜೆಸ್ಟಾಸರ್ಟ್', 'ಮಲ್ಟಿಲೋಡ್ 375', 'ಕಾಪರ್-ಟಿ (CuT) ಮತ್ತು Cu7', 'ಲಿಪ್ಪೆಸ್ ಲೂಪ್'],
    correctAnswer: 'LNG-20 and Progestasert',
    explanation: 'Hormone-releasing IUDs include Progestasert and LNG-20. CuT, Cu7, and Multiload 375 are copper-releasing IUDs. Lippes loop is a non-medicated IUD.',
    explanationKannada: 'ಹಾರ್ಮೋನ್ ಬಿಡುಗಡೆ ಮಾಡುವ ಐಯುಡಿಗಳು: LNG-20 ಮತ್ತು ಪ್ರೊಜೆಸ್ಟಾಸರ್ಟ್. CuT, Cu7 ಮತ್ತು Multiload 375 ತಾಮ್ರ ಬಿಡುಗಡೆ ಮಾಡುವ ಸಾಧನಗಳು.',
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'Hormone IUDs: Progestasert, LNG-20; Cu IUDs: CuT, Cu7, Multiload 375'
  },
  {
    id: 'bio-mtg-3-2',
    subject: 'biology',
    chapter: 'bio-3',
    topic: 'Non-steroidal Contraceptive Saheli',
    question: "'Saheli', the oral non-steroidal contraceptive pill taken once a week with very few side effects, was developed by scientists at:",
    questionKannada: "'ಸಹೇಲಿ' ಎಂಬ ಅತ್ಯಂತ ಕಡಿಮೆ ಅಡ್ಡಪರಿಣಾಮಗಳನ್ನು ಹೊಂದಿರುವ ಸ್ಟೀರಾಯ್ಡ್ ಅಲ್ಲದ ಸಾಪ್ತಾಹಿಕ ಗರ್ಭನಿರೋಧಕ ಮಾತ್ರೆಯನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಿದ ವಿಜ್ಞಾನಿಗಳ ಸಂಸ್ಥೆ ಯಾವುದು?",
    questionType: 'single_mcq',
    options: ['CDRI (Central Drug Research Institute), Lucknow', 'AIIMS, New Delhi', 'ICMR, New Delhi', 'IARI, New Delhi'],
    optionsKannada: ['ಸಿಡಿಆರ್‌ಐ (CDRI), ಲಕ್ನೋ', 'ಏಮ್ಸ್ (AIIMS), ನವದೆಹಲಿ', 'ಐಸಿಎಂಆರ್ (ICMR), ನವದೆಹಲಿ', 'ಐಎಆರ್‌ಐ (IARI), ನವದೆಹಲಿ'],
    correctAnswer: 'CDRI (Central Drug Research Institute), Lucknow',
    explanation: 'Saheli — a new oral contraceptive for females containing centchroman (non-steroidal preparation) was developed by scientists at Central Drug Research Institute (CDRI) in Lucknow, India.',
    explanationKannada: "'ಸಹೇಲಿ' ಮಾತ್ರೆಯನ್ನು ಭಾರತದ ಲಕ್ನೋದ ಸೆಂಟ್ರಲ್ ಡ್ರಗ್ ರಿಸರ್ಚ್ ಇನ್‌ಸ್ಟಿಟ್ಯೂಟ್ (CDRI) ನ ವಿಜ್ಞಾನಿಗಳು ಸಂಶೋಧಿಸಿ ಅಭಿವೃದ್ಧಿಪಡಿಸಿದರು.",
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'Saheli: Non-steroidal once-a-week pill from CDRI Lucknow (Centchroman)'
  },
  {
    id: 'bio-mtg-4-1',
    subject: 'biology',
    chapter: 'bio-4',
    topic: 'Monohybrid Test Cross Ratio',
    question: 'In a test cross between a heterozygous tall pea plant (Tt) and a homozygous dwarf pea plant (tt), the phenotypic ratio of offspring is:',
    questionKannada: 'ವಿಷಮಯುಗ್ಮಜ ಎತ್ತರದ ಬಟಾಣಿ ಗಿಡ (Tt) ಮತ್ತು ಸಮಯುಗ್ಮಜ ಕುಬ್ಜ ಗಿಡದ (tt) ನಡುವಿನ ಪರೀಕ್ಷಾ ಸಂಕರಣದಲ್ಲಿ (Test Cross) ಉಂಟಾಗುವ ಸಂತತಿಯ ಫಿನೋಟೈಪಿಕ್ ಅನುಪಾತ ಎಷ್ಟು?',
    questionType: 'single_mcq',
    options: ['1 : 1', '3 : 1', '1 : 2 : 1', '9 : 3 : 3 : 1'],
    optionsKannada: ['1 : 1', '3 : 1', '1 : 2 : 1', '9 : 3 : 3 : 1'],
    correctAnswer: '1 : 1',
    explanation: 'A monohybrid test cross involves crossing F1 (Tt) with recessive parent (tt). Gametes produced: T and t from Tt; only t from tt. Resulting offspring: 50% Tt (Tall) : 50% tt (Dwarf) = 1:1 ratio.',
    explanationKannada: 'Tt x tt ಪರೀಕ್ಷಾ ಸಂಕರಣದಲ್ಲಿ: 50% ಎತ್ತರ (Tt) ಮತ್ತು 50% ಕುಬ್ಜ (tt) ಸಸ್ಯಗಳು ದೊರೆಯುತ್ತವೆ. ಅನುಪಾತ 1 : 1.',
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'Monohybrid test cross phenotypic ratio = 1 : 1; Dihybrid test cross = 1:1:1:1'
  },
  {
    id: 'bio-mtg-4-2',
    subject: 'biology',
    chapter: 'bio-4',
    topic: 'Aneuploidy & Down Syndrome',
    question: "Down's syndrome in humans is caused due to which cytogenetic abnormality?",
    questionKannada: 'ಮಾನವರಲ್ಲಿ ಡೌನ್ ಸಿಂಡ್ರೋಮ್ ಉಂಟಾಗಲು ಕಾರಣವಾದ ವರ್ಣತಂತು ಅಸಹಜತೆ ಯಾವುದು?',
    questionType: 'single_mcq',
    options: ['Trisomy of chromosome 21', 'Monosomy of X chromosome (45, XO)', 'Trisomy of sex chromosome (47, XXY)', 'Trisomy of chromosome 18'],
    optionsKannada: ['21 ನೇ ವರ್ಣತಂತುವಿನ ಟ್ರೈಸೋಮಿ', 'X ವರ್ಣತಂತುವಿನ ಮಾನೋಸೋಮಿ (45, XO)', 'ಲೈಂಗಿಕ ವರ್ಣತಂತುವಿನ ಟ್ರೈಸೋಮಿ (47, XXY)', '18 ನೇ ವರ್ಣತಂತುವಿನ ಟ್ರೈಸೋಮಿ'],
    correctAnswer: 'Trisomy of chromosome 21',
    explanation: 'Down syndrome is caused by the presence of an additional copy of chromosome number 21 (trisomy 21). Discovered by Langdon Down in 1866.',
    explanationKannada: 'ಡೌನ್ ಸಿಂಡ್ರೋಮ್ 21 ನೇ ವರ್ಣತಂತುವಿನ ಹೆಚ್ಚುವರಿ ಪ್ರತಿಯ ಉಪಸ್ಥಿತಿಯಿಂದ (ಟ್ರೈಸೋಮಿ 21) ಉಂಟಾಗುತ್ತದೆ.',
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: "Down's: 21 Trisomy (47); Turner's: 45,XO; Klinefelter's: 47,XXY"
  },
  {
    id: 'bio-mtg-4-3',
    subject: 'biology',
    chapter: 'bio-4',
    topic: 'Sickle Cell Anemia Point Mutation',
    question: 'Sickle-cell anemia is caused by a point mutation leading to substitution of Glutamic acid by which amino acid at the 6th position of the beta-globin chain?',
    questionKannada: 'ಕುಡಗೋಲು ಕಣ ರಕ್ತಹೀನತೆ (Sickle-cell anemia) ರೋಗದಲ್ಲಿ ಬೀಟಾ-ಗ್ಲೋಬಿನ್ ಸರಪಳಿಯ 6 ನೇ ಸ್ಥಾನದಲ್ಲಿರುವ ಗ್ಲುಟಾಮಿಕ್ ಆಮ್ಲದ ಬದಲಾಗಿ ಯಾವ ಅಮೈನೋ ಆಮ್ಲವು ಆದೇಶಗೊಳ್ಳುತ್ತದೆ?',
    questionType: 'single_mcq',
    options: ['Valine', 'Leucine', 'Alanine', 'Glycine'],
    optionsKannada: ['ವ್ಯಾಲೈನ್ (Valine)', 'ಲ್ಯೂಸಿನ್ (Leucine)', 'ಅಲನೈನ್ (Alanine)', 'ಗ್ಲೈಸಿನ್ (Glycine)'],
    correctAnswer: 'Valine',
    explanation: 'The defect is caused by the substitution of Glutamic acid (Glu) by Valine (Val) at the sixth position of the beta globin chain due to a single base substitution at the sixth codon from GAG to GUG.',
    explanationKannada: 'GAG ಕೋಡಾನ್ GUG ಗೆ ಬದಲಾಗುವುದರಿಂದ 6 ನೇ ಸ್ಥಾನದಲ್ಲಿ ಗ್ಲುಟಾಮಿಕ್ ಆಮ್ಲದ ಬದಲಿಗೆ ವ್ಯಾಲೈನ್ ಆದೇಶಗೊಂಡು ರಕ್ತಹೀನತೆ ಉಂಟಾಗುತ್ತದೆ.',
    difficulty: 'Medium',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'HbA (GAG - Glutamic Acid) -> HbS (GUG - Valine at 6th position)'
  },
  {
    id: 'bio-mtg-5-1',
    subject: 'biology',
    chapter: 'bio-5',
    topic: 'Hershey-Chase Experiment Isotopes',
    question: 'In the Hershey-Chase bacteriophage experiment (1952), which radioactive isotopes were used to label DNA and viral protein capsule respectively?',
    questionKannada: 'ಹರ್ಷೆ-ಚೇಸ್ ಅವರ ಬ್ಯಾಕ್ಟೀರಿಯೊಫೇಜ್ ಪ್ರಯೋಗದಲ್ಲಿ (1952), ಡಿಎನ್‌ಎ ಮತ್ತು ವೈರಸ್ ಪ್ರೋಟೀನ್ ಕೋಶವನ್ನು ಲೇಬಲ್ ಮಾಡಲು ಕ್ರಮವಾಗಿ ಯಾವ ವಿಕಿರಣಶೀಲ ಸಮಸ್ಥಾನಿಗಳನ್ನು ಬಳಸಲಾಯಿತು?',
    questionType: 'single_mcq',
    options: ['32P and 35S', '35S and 32P', '15N and 14N', '14C and 3H'],
    optionsKannada: ['32P ಮತ್ತು 35S', '35S ಮತ್ತು 32P', '15N ಮತ್ತು 14N', '14C ಮತ್ತು 3H'],
    correctAnswer: '32P and 35S',
    explanation: 'Hershey and Chase used radioactive phosphorus 32P to label DNA (since DNA contains P but no S) and radioactive sulfur 35S to label protein coats (proteins contain S but no P). Bacteria infected with 32P viruses showed radioactivity inside the cells, proving DNA is the genetic material.',
    explanationKannada: 'ಡಿಎನ್‌ಎ ಯಲ್ಲಿ ರಂಜಕವಿದ್ದು ಗಂಧಕವಿಲ್ಲದಿರುವುದರಿಂದ 32P ಬಳಸಲಾಯಿತು; ಪ್ರೋಟೀನ್‌ನಲ್ಲಿ ಗಂಧಕವಿರುವುದರಿಂದ 35S ಬಳಸಲಾಯಿತು.',
    difficulty: 'Medium',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'DNA labeled with 32P (Phosphorus); Protein coat labeled with 35S (Sulfur)'
  },
  {
    id: 'bio-mtg-5-2',
    subject: 'biology',
    chapter: 'bio-5',
    topic: 'Lac Operon Structural Genes',
    question: "In the lac operon of Escherichia coli, the 'z' structural gene encodes for the enzyme:",
    questionKannada: "ಎಸ್ಚೆರಿಚಿಯಾ ಕೋಲೈ (E. coli) ಬ್ಯಾಕ್ಟೀರಿಯಾದ ಲ್ಯಾಕ್ ಒಪೆರಾನ್‌ನಲ್ಲಿ, 'z' ರಚನಾತ್ಮಕ ಜೀನ್ ಯಾವ ಕಿಣ್ವವನ್ನು ಸಂಕೇತಿಸುತ್ತದೆ?",
    questionType: 'single_mcq',
    options: ['Beta-galactosidase', 'Permease', 'Transacetylase', 'RNA Polymerase'],
    optionsKannada: ['ಬೀಟಾ-ಗ್ಯಾಲಕ್ಟೋಸಿಡೇಸ್ (Beta-galactosidase)', 'ಪರ್ಮಿಯೇಸ್ (Permease)', 'ಟ್ರಾನ್ಸ್‌ಅಸಿಟೈಲೇಸ್ (Transacetylase)', 'ಆರ್‌ಎನ್‌ಎ ಪಾಲಿಮರೇಸ್'],
    correctAnswer: 'Beta-galactosidase',
    explanation: 'The lac operon consists of three structural genes: z codes for beta-galactosidase (hydrolyzes lactose into glucose and galactose), y codes for permease, and a codes for transacetylase.',
    explanationKannada: 'ಲ್ಯಾಕ್ ಒಪೆರಾನ್: z ಜೀನ್ ಬೀಟಾ-ಗ್ಯಾಲಕ್ಟೋಸಿಡೇಸ್ ಅನ್ನು, y ಜೀನ್ ಪರ್ಮಿಯೇಸ್ ಅನ್ನು ಮತ್ತು a ಜೀನ್ ಟ್ರಾನ್ಸ್‌ಅಸಿಟೈಲೇಸ್ ಅನ್ನು ಸಂಕೇತಿಸುತ್ತದೆ.',
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'z -> Beta-galactosidase; y -> Permease; a -> Transacetylase'
  },
  {
    id: 'bio-mtg-5-3',
    subject: 'biology',
    chapter: 'bio-5',
    topic: 'DNA Replication & Ligase',
    question: 'During DNA replication, the discontinuously synthesized Okazaki fragments on the lagging strand are joined together by the enzyme:',
    questionKannada: 'ಡಿಎನ್‌ಎ ಪ್ರತಿಕೃತಿಯ ಸಮಯದಲ್ಲಿ, ಮಂದಗತಿಯ ಎಳೆಯಲ್ಲಿ (Lagging strand) ತುಂಡುತುಂಡಾಗಿ ಸಂಶ್ಲೇಷಿಸಲ್ಪಟ್ಟ ಒಕಾಜಾಕಿ ತುಣುಕುಗಳನ್ನು ಪರಸ್ಪರ ಬೆಸೆಯುವ ಕಿಣ್ವ ಯಾವುದು?',
    questionType: 'single_mcq',
    options: ['DNA Ligase', 'DNA Polymerase I', 'Helicase', 'Topoisomerase'],
    optionsKannada: ['ಡಿಎನ್‌ಎ ಲಿಗೇಸ್ (DNA Ligase)', 'ಡಿಎನ್‌ಎ ಪಾಲಿಮರೇಸ್ I', 'ಹೆಲಿಕೇಸ್ (Helicase)', 'ಟೋಪೋಐಸೋಮರೇಸ್'],
    correctAnswer: 'DNA Ligase',
    explanation: 'Okazaki fragments synthesized on the lagging template strand are covalently linked together by DNA ligase to form a continuous strand.',
    explanationKannada: 'ಮಂದಗತಿಯ ಎಳೆಯಲ್ಲಿ ಸಂಶ್ಲೇಷಿಸಲ್ಪಟ್ಟ ಒಕಾಜಾಕಿ ತುಣುಕುಗಳನ್ನು ಡಿಎನ್‌ಎ ಲಿಗೇಸ್ ಕಿಣ್ವವು ಫಾಸ್ಫೋಡೈಎಸ್ಟರ್ ಬಂಧದಿಂದ ಜೋಡಿಸುತ್ತದೆ.',
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'Lagging strand: Okazaki fragments joined by DNA Ligase'
  },
  {
    id: 'bio-mtg-6-1',
    subject: 'biology',
    chapter: 'bio-6',
    topic: 'Homologous Organs & Divergent Evolution',
    question: 'The thorns of Bougainvillea and tendrils of Cucurbita represent which type of evolutionary anatomical structures?',
    questionKannada: 'ಬೋಗನ್‌ವಿಲ್ಲಾದ ಮುಳ್ಳುಗಳು ಮತ್ತು ಕುಕುರ್ಬಿಟಾದ ಮಿಡಿತಂತುಗಳು (Tendrils) ಯಾವ ರೀತಿಯ ವಿಕಾಸಾತ್ಮಕ ರಚನೆಗಳನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತವೆ?',
    questionType: 'single_mcq',
    options: ['Homologous organs (Divergent evolution)', 'Analogous organs (Convergent evolution)', 'Vestigial organs', 'Atavistic organs'],
    optionsKannada: ['ಸಮಾನ ಮೂಲದ ಅಂಗಗಳು (Homologous organs - ಅಪಸರಣ ವಿಕಾಸ)', 'ಸಮಾನ ಕಾರ್ಯದ ಅಂಗಗಳು (Analogous organs - ಅಭಿಸರಣ ವಿಕಾಸ)', 'ಅವಶೇಷ ಅಂಗಗಳು (Vestigial organs)', 'ಪೂರ್ವಜತ್ವ ಲಕ್ಷಣಗಳು (Atavism)'],
    correctAnswer: 'Homologous organs (Divergent evolution)',
    explanation: 'Both thorn of Bougainvillea and tendril of Cucurbita are axillary bud modifications sharing the same embryonic origin and basic anatomy, but adapted for different functions (defense vs climbing) — an example of homology and divergent evolution.',
    explanationKannada: 'ಬೋಗನ್‌ವಿಲ್ಲಾದ ಮುಳ್ಳು ಮತ್ತು ಕುಕುರ್ಬಿಟಾದ ಮಿಡಿತಂತು ಎರಡೂ ಕಂಕುಳು ಮೊಗ್ಗಿನ ಮಾರ್ಪಾಡುಗಳಾಗಿದ್ದು, ಸಮಾನ ಮೂಲವನ್ನು ಹೊಂದಿವೆ (ಅಪಸರಣ ವಿಕಾಸ).',
    difficulty: 'Medium',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'Homology = Common origin, different function (Divergent evolution)'
  },
  {
    id: 'bio-mtg-6-2',
    subject: 'biology',
    chapter: 'bio-6',
    topic: 'Hardy-Weinberg Equilibrium Calculation',
    question: "In a population at Hardy-Weinberg equilibrium, if the frequency of recessive allele 'q' is 0.4, what is the frequency of heterozygous individuals (2pq)?",
    questionKannada: "ಹಾರ್ಡಿ-ವೈನ್‌ಬರ್ಗ್ ಸಮತೋಲನದಲ್ಲಿರುವ ಜನಸಂಖ್ಯೆಯಲ್ಲಿ, ಅಪ್ರಬಲ ಅಲೀಲ್‌ನ ಆವರ್ತನ 'q' = 0.4 ಆಗಿದ್ದರೆ, ವಿಷಮಯುಗ್ಮಜ ವ್ಯಕ್ತಿಗಳ ಆವರ್ತನ (2pq) ಎಷ್ಟು?",
    questionType: 'single_mcq',
    options: ['0.48', '0.36', '0.16', '0.24'],
    optionsKannada: ['0.48', '0.36', '0.16', '0.24'],
    correctAnswer: '0.48',
    explanation: 'p + q = 1. Since q = 0.4, p = 1 - 0.4 = 0.6. Frequency of heterozygotes = 2pq = 2 * (0.6) * (0.4) = 0.48 (48%).',
    explanationKannada: 'p = 1 - q = 1 - 0.4 = 0.6. ವಿಷಮಯುಗ್ಮಜ (2pq) = 2 x 0.6 x 0.4 = 0.48 (48%).',
    difficulty: 'Medium',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'Hardy-Weinberg: p² + 2pq + q² = 1 and p + q = 1'
  },
  {
    id: 'bio-mtg-7-1',
    subject: 'biology',
    chapter: 'bio-7',
    topic: 'Malarial Parasite & Hemozoin',
    question: 'The toxic granular substance released upon the rupture of RBCs during Plasmodium infection that causes periodic bouts of high fever and chills is:',
    questionKannada: 'ಪ್ಲಾಸ್ಮೋಡಿಯಂ ಸೋಂಕಿನ ಸಮಯದಲ್ಲಿ ಕೆಂಪು ರಕ್ತ ಕಣಗಳು (RBC) ಒಡೆದಾಗ ಬಿಡುಗಡೆಯಾಗುವ ಮತ್ತು ಚಳಿಯೊಂದಿಗೆ ಮರುಕಳಿಸುವ ಜ್ವರಕ್ಕೆ ಕಾರಣವಾಗುವ ವಿಷಕಾರಿ ಹರಳು ವಸ್ತು ಯಾವುದು?',
    questionType: 'single_mcq',
    options: ['Hemozoin', 'Hemoglobin', 'Histamine', 'Hemolysin'],
    optionsKannada: ['ಹಿಮೋಜೋಯಿನ್ (Hemozoin)', 'ಹಿಮೋಗ್ಲೋಬಿನ್', 'ಹಿಸ್ಟಮೈನ್', 'ಹಿಮೋಲೈಸಿನ್'],
    correctAnswer: 'Hemozoin',
    explanation: 'The rupture of RBCs is associated with the release of a toxic substance, hemozoin, which is responsible for the chill and high fever recurring every 3 to 4 days in malaria.',
    explanationKannada: 'ಆರ್‌ಬಿಸಿ ಒಡೆದಾಗ ಬಿಡುಗಡೆಯಾಗುವ ಹಿಮೋಜೋಯಿನ್ ಎಂಬ ವಿಷಕಾರಿ ವಸ್ತುವೇ ಮಲೇರಿಯಾ ಜ್ವರ ಮತ್ತು ಚಳಿಗೆ ಕಾರಣವಾಗಿದೆ.',
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'Rupture of RBCs -> Release of Hemozoin -> Chills and high fever'
  },
  {
    id: 'bio-mtg-7-2',
    subject: 'biology',
    chapter: 'bio-7',
    topic: 'Antibody in Colostrum (IgA)',
    question: 'Which immunoglobulin class is predominantly abundant in colostrum (first yellowish milk) that provides passive immunity to the newborn infant?',
    questionKannada: 'ನವಜಾತ ಶಿಶುವಿಗೆ ನಿಷ್ಕ್ರಿಯ ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ನೀಡುವ ಕೊಲೊಸ್ಟ್ರಮ್ (ಮೊದಲ ಹಳದಿ ಹಾಲು) ನಲ್ಲಿ ಪ್ರಧಾನವಾಗಿರುವ ಇಮ್ಯುನೊಗ್ಲಾಬ್ಯುಲಿನ್ (ಪ್ರತಿಕಾಯ) ಯಾವುದು?',
    questionType: 'single_mcq',
    options: ['IgA', 'IgG', 'IgE', 'IgM'],
    optionsKannada: ['IgA', 'IgG', 'IgE', 'IgM'],
    correctAnswer: 'IgA',
    explanation: 'The yellowish fluid colostrum secreted by mother during the initial days of lactation has abundant antibodies of the IgA class to protect the infant from gut and mucosal pathogens.',
    explanationKannada: 'ಕೊಲೊಸ್ಟ್ರಮ್‌ನಲ್ಲಿ IgA ವರ್ಗದ ಪ್ರತಿಕಾಯಗಳು ಅಧಿಕ ಪ್ರಮಾಣದಲ್ಲಿದ್ದು ಮಗುವಿಗೆ ಸ್ವಾಭಾವಿಕ ನಿಷ್ಕ್ರಿಯ ರೋಗನಿರೋಧಕತೆಯನ್ನು ನೀಡುತ್ತವೆ.',
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'Colostrum = IgA (Passive immunity); Placental transfer = IgG'
  },
  {
    id: 'bio-mtg-8-1',
    subject: 'biology',
    chapter: 'bio-8',
    topic: 'Microbial Statins & Cholesterol Inhibition',
    question: 'Statins, the blood-cholesterol lowering agents acting as competitive inhibitors of HMG-CoA reductase, are commercially obtained from:',
    questionKannada: "ರಕ್ತದಲ್ಲಿನ ಕೊಲೆಸ್ಟ್ರಾಲ್ ಮಟ್ಟವನ್ನು ಕಡಿಮೆ ಮಾಡುವ 'ಸ್ಟ್ಯಾಟಿನ್' ಗಳನ್ನು ವಾಣಿಜ್ಯಿಕವಾಗಿ ಯಾವ ಸೂಕ್ಷ್ಮಜೀವಿಯಿಂದ ಪಡೆಯಲಾಗುತ್ತದೆ?",
    questionType: 'single_mcq',
    options: ['Monascus purpureus (yeast)', 'Trichoderma polysporum', 'Aspergillus niger', 'Streptococcus'],
    optionsKannada: ['ಮೊನಾಸ್ಕಸ್ ಪರ್ಪ್ಯೂರಿಯಸ್ (Monascus purpureus - ಯೀಸ್ಟ್)', 'ಟ್ರೈಕೋಡರ್ಮಾ ಪಾಲಿಸ್ಪೋರಮ್', 'ಆಸ್ಪರ್ಜಿಲಸ್ ನೈಜರ್', 'ಸ್ಟ್ರೆಪ್ಟೋಕೊಕಸ್'],
    correctAnswer: 'Monascus purpureus (yeast)',
    explanation: 'Statins produced by the yeast Monascus purpureus have been commercialised as blood-cholesterol lowering agents. It acts by competitively inhibiting the enzyme responsible for synthesis of cholesterol.',
    explanationKannada: 'ಮೊನಾಸ್ಕಸ್ ಪರ್ಪ್ಯೂರಿಯಸ್ ಎಂಬ ಯೀಸ್ಟ್‌ನಿಂದ ಸ್ಟ್ಯಾಟಿನ್‌ಗಳನ್ನು ಪಡೆಯಲಾಗುತ್ತದೆ. ಇದು ಕೊಲೆಸ್ಟ್ರಾಲ್ ಸಂಶ್ಲೇಷಣೆಯನ್ನು ತಡೆಯುತ್ತದೆ.',
    difficulty: 'Medium',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'Statins: Monascus purpureus (Inhibits cholesterol synthesis)'
  },
  {
    id: 'bio-mtg-8-2',
    subject: 'biology',
    chapter: 'bio-8',
    topic: 'Immunosuppressive Cyclosporin A',
    question: 'Cyclosporin A, an important bioactive molecule used as an immunosuppressive agent in organ-transplant patients, is produced by the fungus:',
    questionKannada: "ಅಂಗಾಂಗ ಕಸಿ ರೋಗಿಗಳಲ್ಲಿ ರೋಗನಿರೋಧಕ ನಿಗ್ರಹಕವಾಗಿ (Immunosuppressive agent) ಬಳಸಲಾಗುವ 'ಸೈಕ್ಲೋಸ್ಪೊರಿನ್ ಎ' ಅನ್ನು ಉತ್ಪಾದಿಸುವ ಶಿಲೀಂಧ್ರ ಯಾವುದು?",
    questionType: 'single_mcq',
    options: ['Trichoderma polysporum', 'Penicillium notatum', 'Saccharomyces cerevisiae', 'Clostridium butylicum'],
    optionsKannada: ['ಟ್ರೈಕೋಡರ್ಮಾ ಪಾಲಿಸ್ಪೋರಮ್ (Trichoderma polysporum)', 'ಪೆನಿಸಿಲಿಯಂ ನೋಟೇಟಮ್', 'ಸ್ಯಾಕರೊಮೈಸಿಸ್ ಸೆರೆವಿಸಿಯೇ', 'ಕ್ಲಾಸ್ಟ್ರಿಡಿಯಮ್ ಬ್ಯುಟಿಲಿಕಮ್'],
    correctAnswer: 'Trichoderma polysporum',
    explanation: 'Cyclosporin A, that is used as an immunosuppressive agent in organ-transplant patients, is produced by the fungus Trichoderma polysporum.',
    explanationKannada: 'ಟ್ರೈಕೋಡರ್ಮಾ ಪಾಲಿಸ್ಪೋರಮ್ ಎಂಬ ಶಿಲೀಂಧ್ರದಿಂದ ಸೈಕ್ಲೋಸ್ಪೊರಿನ್ ಎ ಉತ್ಪತ್ತಿಯಾಗುತ್ತದೆ.',
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'Cyclosporin A: Trichoderma polysporum (Immunosuppressive agent)'
  },
  {
    id: 'bio-mtg-9-1',
    subject: 'biology',
    chapter: 'bio-9',
    topic: 'Restriction Endonuclease EcoRI Recognition Sequence',
    question: 'In recombinant DNA technology, the restriction endonuclease EcoRI cuts double-stranded DNA specifically at which palindromic nucleotide recognition sequence?',
    questionKannada: 'ಪುನರ್ಸಂಯೋಜಿತ ಡಿಎನ್‌ಎ ತಂತ್ರಜ್ಞಾನದಲ್ಲಿ, ನಿರ್ಬಂಧಿತ ಎಂಡೋನ್ಯೂಕ್ಲಿಯೇಸ್ ಕಿಣ್ವ EcoRI ಯು ಡಿಎನ್‌ಎಯ ಯಾವ ನಿರ್ದಿಷ್ಟ ಪಾಲಿಂಡ್ರೋಮಿಕ್ ನ್ಯೂಕ್ಲಿಯೊಟೈಡ್ ಅನುಕ್ರಮದಲ್ಲಿ ಕತ್ತರಿಸುತ್ತದೆ?',
    questionType: 'single_mcq',
    options: ["5'-GAATTC-3'", "5'-GGATCC-3'", "5'-AAGCTT-3'", "5'-CTGCAG-3'"],
    optionsKannada: ["5'-GAATTC-3'", "5'-GGATCC-3'", "5'-AAGCTT-3'", "5'-CTGCAG-3'"],
    correctAnswer: "5'-GAATTC-3'",
    explanation: "EcoRI recognizes the 6 base-pair palindromic sequence 5'-GAATTC-3' (and 3'-CTTAAG-5') and cuts between G and A on both strands, leaving single-stranded sticky ends.",
    explanationKannada: "EcoRI ಕಿಣ್ವವು 5'-GAATTC-3' ಪಾಲಿಂಡ್ರೋಮ್ ಅನುಕ್ರಮದಲ್ಲಿ G ಮತ್ತು A ನಡುವೆ ಕತ್ತರಿಸಿ ಅಂಟಂಟಾದ ತುದಿಗಳನ್ನು (Sticky ends) ಉಂಟುಮಾಡುತ್ತದೆ.",
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: "EcoRI recognition sequence: 5'-G↓AATTC-3'"
  },
  {
    id: 'bio-mtg-9-2',
    subject: 'biology',
    chapter: 'bio-9',
    topic: 'Agarose Gel Electrophoresis & Ethidium Bromide',
    question: 'During agarose gel electrophoresis, the stained DNA fragments can be visualized only after exposure to UV radiation when stained with:',
    questionKannada: 'ಅಗರೋಸ್ ಜೆಲ್ ಎಲೆಕ್ಟ್ರೋಫೋರೆಸಿಸ್‌ನಲ್ಲಿ, ನೇರಳಾತೀತ (UV) ಕಿರಣಗಳಿಗೆ ಒಡ್ಡಿದಾಗ ಮಾತ್ರ ಡಿಎನ್‌ಎ ತುಣುಕುಗಳು ಸ್ಪಷ್ಟವಾಗಿ ಗೋಚರಿಸಲು ಬಳಸುವ ಬಣ್ಣದ ಕಾರಕ (Stain) ಯಾವುದು?',
    questionType: 'single_mcq',
    options: ['Ethidium bromide', 'Bromophenol blue', 'Methylene blue', 'Acetocarmine'],
    optionsKannada: ['ಎಥಿಡಿಯಮ್ ಬ್ರೋಮೈಡ್ (Ethidium bromide)', 'ಬ್ರೋಮೋಫಿನಾಲ್ ಬ್ಲೂ', 'ಮಿಥಿಲೀನ್ ಬ್ಲೂ', 'ಅಸಿಟೊಕಾರ್ಮೈನ್'],
    correctAnswer: 'Ethidium bromide',
    explanation: 'The separated DNA fragments can be visualized only after staining the DNA with a compound known as ethidium bromide followed by exposure to UV radiation (giving bright orange bands).',
    explanationKannada: 'ಎಥಿಡಿಯಮ್ ಬ್ರೋಮೈಡ್‌ನಿಂದ ವರ್ಣಲೇಪಿತ ಡಿಎನ್‌ಎ ತುಣುಕುಗಳು UV ಬೆಳಕಿನಲ್ಲಿ ಪ್ರಕಾಶಮಾನವಾದ ಕಿತ್ತಳೆ ಬಣ್ಣದ ಪಟ್ಟಿಗಳಾಗಿ (Orange bands) ಗೋಚರಿಸುತ್ತವೆ.',
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'EtBr + UV light -> Bright orange colored DNA bands'
  },
  {
    id: 'bio-mtg-10-1',
    subject: 'biology',
    chapter: 'bio-10',
    topic: 'Bt Cotton Pest Resistance Genes',
    question: 'The genes cryIAc and cryIIAb in Bacillus thuringiensis are engineered into crops to provide resistance against:',
    questionKannada: 'ಬ್ಯಾಸಿಲಸ್ ತುರಿಂಜಿಯೆನ್ಸಿಸ್ (Bacillus thuringiensis) ಬ್ಯಾಕ್ಟೀರಿಯಾದ cryIAc ಮತ್ತು cryIIAb ಜೀನ್‌ಗಳನ್ನು ಬೆಳೆಗಳಲ್ಲಿ ಸೇರಿಸುವುದರಿಂದ ಅವು ಯಾವ ಕೀಟಗಳ ವಿರುದ್ಧ ಪ್ರತಿರೋಧವನ್ನು ನೀಡುತ್ತವೆ?',
    questionType: 'single_mcq',
    options: ['Cotton bollworms', 'Corn borer', 'Root-knot nematode (Meloidogyne)', 'Aphids'],
    optionsKannada: ['ಹತ್ತಿಯ ಕಾಯಿ ಕೊರೆಯುವ ಹುಳುಗಳು (Cotton bollworms)', 'ಮುಸುಕಿನ ಜೋಳ ಕೊರೆಯುವ ಹುಳು (Corn borer)', 'ಬೇರು ಗಂಟು ಜಂತುಹುಳು (Meloidogyne)', 'ಗಿಡಹೇನುಗಳು (Aphids)'],
    correctAnswer: 'Cotton bollworms',
    explanation: 'The proteins encoded by the genes cryIAc and cryIIAb control cotton bollworms, that of cryIAb controls corn borer.',
    explanationKannada: 'cryIAc ಮತ್ತು cryIIAb ಜೀನ್‌ಗಳು ಹತ್ತಿಯ ಕಾಯಿ ಕೊರೆಯುವ ಹುಳುಗಳನ್ನು ನಿಯಂತ್ರಿಸುತ್ತವೆ. cryIAb ಕಾರ್ನ್ ಬೋರರ್ ಅನ್ನು ನಿಯಂತ್ರಿಸುತ್ತದೆ.',
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'cryIAc & cryIIAb -> Cotton bollworms; cryIAb -> Corn borer'
  },
  {
    id: 'bio-mtg-10-2',
    subject: 'biology',
    chapter: 'bio-10',
    topic: 'Proinsulin to Mature Insulin Processing',
    question: 'In human proinsulin, which segment is removed during the proteolytic maturation into active, functional insulin?',
    questionKannada: 'ಮಾನವನ ಪ್ರೊಇನ್ಸುಲಿನ್ ಸಕ್ರಿಯ ಇನ್ಸುಲಿನ್ ಆಗಿ ಪಕ್ವಗೊಳ್ಳುವ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ ತೆಗೆದುಹಾಕಲಾಗುವ ಪೆಪ್ಟೈಡ್ ತುಣುಕು ಯಾವುದು?',
    questionType: 'single_mcq',
    options: ['C-peptide', 'A-chain', 'B-chain', 'Disulfide bridges'],
    optionsKannada: ['ಸಿ-ಪೆಪ್ಟೈಡ್ (C-peptide)', 'ಎ-ಸರಪಳಿ (A-chain)', 'ಬಿ-ಸರಪಳಿ (B-chain)', 'ಡೈಸಲ್ಫೈಡ್ ಬಂಧಗಳು'],
    correctAnswer: 'C-peptide',
    explanation: 'Proinsulin contains an extra stretch of amino acids called the C-peptide. This C-peptide is not present in mature insulin and is removed during maturation into insulin.',
    explanationKannada: 'ಪ್ರೊಇನ್ಸುಲಿನ್‌ನಲ್ಲಿ ಹೆಚ್ಚುವರಿಯಾಗಿರುವ ಸಿ-ಪೆಪ್ಟೈಡ್ (C-peptide) ಪಕ್ವ ಇನ್ಸುಲಿನ್‌ನಲ್ಲಿ ಇರುವುದಿಲ್ಲ, ಇದು ಪಕ್ವತೆಯ ಸಮಯದಲ್ಲಿ ಬೇರ್ಪಡುತ್ತದೆ.',
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'Mature Insulin = A chain + B chain linked by Disulfide bonds (No C-peptide)'
  },
  {
    id: 'bio-mtg-11-1',
    subject: 'biology',
    chapter: 'bio-11',
    topic: "Ecological Adaptations & Allen's Rule",
    question: "'Mammals from colder climates generally have shorter ears and shorter limbs to minimize heat loss.' This ecological rule is stated as:",
    questionKannada: "'ಶೀತ ಹವಾಮಾನದ ಸಸ್ತನಿಗಳು ದೇಹದ ಉಷ್ಣತೆಯ ನಷ್ಟವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸಣ್ಣ ಕಿವಿಗಳು ಮತ್ತು ಸಣ್ಣ ಕಾಲು-ಕೈಗಳನ್ನು ಹೊಂದಿರುತ್ತವೆ.' ಈ ಪರಿಸರ ನಿಯಮವನ್ನು ಏನೆಂದು ಕರೆಯುತ್ತಾರೆ?",
    questionType: 'single_mcq',
    options: ["Allen's rule", "Bergmann's rule", "Gloger's rule", "Jordan's rule"],
    optionsKannada: ["ಅಲೆನ್ಸ್ ನಿಯಮ (Allen's rule)", "ಬರ್ಗ್‌ಮನ್ಸ್ ನಿಯಮ", "ಗ್ಲೋಗರ್ಸ್ ನಿಯಮ", "ಜೋರ್ಡಾನ್ಸ್ ನಿಯಮ"],
    correctAnswer: "Allen's rule",
    explanation: "In polar seas and colder climates, mammals have shorter ears and limbs to minimize heat loss. This is called Allen's Rule.",
    explanationKannada: "ಶೀತ ಪ್ರದೇಶದ ಸಸ್ತನಿಗಳಲ್ಲಿ ಉಷ್ಣತೆಯ ನಷ್ಟವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸಣ್ಣ ಕಿವಿಗಳು ಮತ್ತು ಕೈಕಾಲುಗಳು ಇರುತ್ತವೆ. ಇದನ್ನು 'ಅಲೆನ್ಸ್ ನಿಯಮ' ಎನ್ನುತ್ತಾರೆ.",
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: "Allen's rule: Shorter extremities in colder climates"
  },
  {
    id: 'bio-mtg-11-2',
    subject: 'biology',
    chapter: 'bio-11',
    topic: 'Population Interactions: Commensalism',
    question: 'An interaction where one species benefits while the other species is neither harmed nor benefited (e.g., orchid growing as an epiphyte on a mango branch) is called:',
    questionKannada: 'ಒಂದು ಜಾತಿಗೆ ಪ್ರಯೋಜನವಾಗಿ, ಮತ್ತೊಂದು ಜಾತಿಗೆ ಯಾವುದೇ ಹಾನಿಯಾಗಲಿ ಅಥವಾ ಲಾಭವಾಗಲಿ ಆಗದಿರುವ ಪರಿಸರ ಸಂಬಂಧವನ್ನು (ಉದಾ: ಮಾವಿನ ಮರದ ಕೊಂಬೆಯ ಮೇಲೆ ಬೆಳೆಯುವ ಆರ್ಕಿಡ್) ಏನೆಂದು ಕರೆಯುತ್ತಾರೆ?',
    questionType: 'single_mcq',
    options: ['Commensalism', 'Mutualism', 'Amensalism', 'Parasitism'],
    optionsKannada: ['ಸಹಭೋಜನತ್ವ (Commensalism)', 'ಪರಸ್ಪರಾವಲಂಬನೆ (Mutualism)', 'ಅಮೆನ್ಸಲಿಸಂ (Amensalism)', 'ಪರಾವಲಂಬನೆ (Parasitism)'],
    correctAnswer: 'Commensalism',
    explanation: 'Commensalism is the interaction in which one species benefits and the other is neither harmed nor benefited (+/0 interaction).',
    explanationKannada: 'ಒಂದಕ್ಕೆ ಲಾಭವಾಗಿ ಮತ್ತೊಂದಕ್ಕೆ ಲಾಭವೂ ಇಲ್ಲದ, ನಷ್ಟವೂ ಇಲ್ಲದ (+ / 0) ಜೈವಿಕ ಪರಸ್ಪರ ಕ್ರಿಯೆಯನ್ನು ಸಹಭೋಜನತ್ವ (Commensalism) ಎನ್ನುತ್ತಾರೆ.',
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'Commensalism: (+ / 0); Mutualism: (+ / +); Amensalism: (- / 0)'
  },
  {
    id: 'bio-mtg-12-1',
    subject: 'biology',
    chapter: 'bio-12',
    topic: 'Ecological Pyramid of Energy',
    question: 'Which ecological pyramid is NEVER inverted under any natural condition and is always upright?',
    questionKannada: 'ಯಾವುದೇ ನೈಸರ್ಗಿಕ ಪರಿಸ್ಥಿತಿಯಲ್ಲೂ ಎಂದಿಗೂ ತಲೆಕೆಳಗಾಗದೆ ಯಾವಾಗಲೂ ನೇರವಾಗಿರುವ ಪರಿಸರ ಪಿರಮಿಡ್ ಯಾವುದು?',
    questionType: 'single_mcq',
    options: ['Pyramid of energy', 'Pyramid of biomass', 'Pyramid of numbers', 'Pyramid of standing crop'],
    optionsKannada: ['ಶಕ್ತಿಯ ಪಿರಮಿಡ್ (Pyramid of energy)', 'ಜೈವಿಕ ದ್ರವ್ಯರಾಶಿಯ ಪಿರಮಿಡ್ (Biomass)', 'ಸಂಖ್ಯಾ ಪಿರಮಿಡ್ (Numbers)', 'ಬೆಳೆಯ ಪಿರಮಿಡ್'],
    correctAnswer: 'Pyramid of energy',
    explanation: 'Pyramid of energy is always upright, can never be inverted, because when energy flows from a particular trophic level to the next trophic level, some energy is always lost as heat at each step (only ~10% is transferred).',
    explanationKannada: 'ಶಕ್ತಿಯ ಹರಿವು ಯಾವಾಗಲೂ ಏಕಮುಖವಾಗಿದ್ದು, ಒಂದು ಪೋಷಣಾ ಸ್ತರದಿಂದ ಮತ್ತೊಂದಕ್ಕೆ ಕೇವಲ 10% ಶಕ್ತಿಯಷ್ಟೇ ವರ್ಗಾವಣೆಯಾಗುವುದರಿಂದ ಶಕ್ತಿಯ ಪಿರಮಿಡ್ ಯಾವಾಗಲೂ ನೇರವಾಗಿರುತ್ತದೆ.',
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'Pyramid of Energy is ALWAYS upright (10% law)'
  },
  {
    id: 'bio-mtg-13-1',
    subject: 'biology',
    chapter: 'bio-13',
    topic: 'The Evil Quartet of Biodiversity Loss',
    question: "The 'Evil Quartet' is a sobriquet used by ecologists to describe the four major causes of:",
    questionKannada: "ಪರಿಸರ ತಜ್ಞರು 'ದುಷ್ಟ ಚತುಷ್ಟಯ' (Evil Quartet) ಎಂಬ ಶಬ್ದವನ್ನು ಯಾವುದರ ನಾಲ್ಕು ಪ್ರಮುಖ ಕಾರಣಗಳನ್ನು ವಿವರಿಸಲು ಬಳಸುತ್ತಾರೆ?",
    questionType: 'single_mcq',
    options: ['Biodiversity loss and species extinction', 'Greenhouse effect and global warming', 'Ozone layer depletion', 'Eutrophication in lakes'],
    optionsKannada: ['ಜೀವವೈವಿಧ್ಯತೆಯ ನಷ್ಟ ಮತ್ತು ಅಳಿವು', 'ಹಸಿರುಮನೆ ಪರಿಣಾಮ ಮತ್ತು ಜಾಗತಿಕ ತಾಪಮಾನ', 'ಓಝೋನ್ ಪದರದ ಸವಕಳಿ', 'ಸರೋವರಗಳಲ್ಲಿ ಯೂಟ್ರೋಫಿಕೇಶನ್'],
    correctAnswer: 'Biodiversity loss and species extinction',
    explanation: 'The Evil Quartet refers to the four major causes of accelerated species extinction: 1) Habitat loss and fragmentation, 2) Over-exploitation, 3) Alien species invasions, and 4) Co-extinctions.',
    explanationKannada: "'ದುಷ್ಟ ಚತುಷ್ಟಯ' (Evil Quartet) ಜೀವವೈವಿಧ್ಯತೆಯ ಕ್ಷೀಣತೆ ಮತ್ತು ಜಾತಿಗಳ ಅಳಿವಿಗೆ ಕಾರಣವಾದ 4 ಪ್ರಮುಖ ಅಂಶಗಳನ್ನು ಸೂಚಿಸುತ್ತದೆ.",
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'Evil Quartet: 1. Habitat loss 2. Over-exploitation 3. Alien species 4. Co-extinctions'
  },
  {
    id: 'bio-mtg-13-2',
    subject: 'biology',
    chapter: 'bio-13',
    topic: 'Global Biodiversity Hotspots in India',
    question: 'Which of the following regions in India is recognized as a global biodiversity hotspot?',
    questionKannada: 'ಭಾರತದ ಕೆಳಗಿನ ಯಾವ ಪ್ರದೇಶವನ್ನು ಜಾಗತಿಕ ಜೀವವೈವಿಧ್ಯ ತಾಣ (Biodiversity Hotspot) ಎಂದು ಗುರುತಿಸಲಾಗಿದೆ?',
    questionType: 'single_mcq',
    options: ['Western Ghats and Sri Lanka', 'Thar Desert', 'Gangetic Plain', 'Rann of Kutch'],
    optionsKannada: ['ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು (Western Ghats)', 'ಥಾರ್ ಮರುಭೂಮಿ', 'ಗಂಗಾನದಿಯ ಬಯಲು ಪ್ರದೇಶ', 'ಕಚ್ ರನ್'],
    correctAnswer: 'Western Ghats and Sri Lanka',
    explanation: 'India hosts globally significant biodiversity hotspots: Western Ghats & Sri Lanka, Indo-Burma, and Himalaya. They show exceptionally high levels of species richness and high degree of endemism.',
    explanationKannada: 'ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು ಅತ್ಯಂತ ಹೆಚ್ಚು ಜೀವವೈವಿಧ್ಯತೆ ಮತ್ತು ಸ್ಥಳೀಯ ಜಾತಿಗಳನ್ನು (Endemism) ಹೊಂದಿರುವ ಜಾಗತಿಕ ಜೀವವೈವಿಧ್ಯ ತಾಣವಾಗಿದೆ.',
    difficulty: 'Easy',
    source: 'MTG NCERT at your Fingertips',
    year: 'NCERT Fingertips',
    formulaNote: 'India hotspots: Western Ghats, Indo-Burma, Himalaya'
  },

  // =========================================================================
  // BIOLOGY: ASSERTION-REASONING & STATEMENT-BASED QUESTIONS (ALL CHAPTERS)
  // =========================================================================

  // BIO-1: Sexual Reproduction in Flowering Plants
  {
    id: 'bio-ar-1',
    subject: 'biology',
    chapter: 'bio-1',
    topic: 'Sporopollenin & Pollen Wall',
    question: `Assertion (A): Pollen grains are well preserved as fossils for millions of years without decomposing.\nReason (R): The exine of pollen grains is composed of sporopollenin, which is one of the most resistant biological materials known, unaffected by high temperatures, strong acids, or enzymes.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Sporopollenin can withstand high temperatures and strong acids and alkali. No enzyme that degrades sporopollenin is so far known. Because of the presence of sporopollenin in the exine, pollen grains are well preserved as fossils.',
    difficulty: 'Easy',
    source: 'KCET & NEET A/R',
    year: '2024',
    formulaNote: 'Exine has sporopollenin (most resistant organic material)',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಪರಾಗರೇಣುಗಳು ಕೊಳೆಯದೆ ಲಕ್ಷಾಂತರ ವರ್ಷಗಳ ಕಾಲ ಪಳೆಯುಳಿಕೆಗಳಾಗಿ (fossils) ಉತ್ತಮವಾಗಿ ಸಂರಕ್ಷಿಸಲ್ಪಡುತ್ತವೆ.\nಕಾರಣ (R): ಪರಾಗರೇಣುಗಳ ಎಕ್ಸೈನ್ (exine) ಸ್ಪೊರೊಪೊಲೆನಿನ್ ಎಂಬ ಅತ್ಯಂತ ನಿರೋಧಕ ಜೈವಿಕ ವಸ್ತುವಿನಿಂದ ಮಾಡಲ್ಪಟ್ಟಿದೆ, ಇದು ಅಧಿಕ ತಾಪಮಾನ, ಪ್ರಬಲ ಆಮ್ಲಗಳು ಅಥವಾ ಕಿಣ್ವಗಳಿಂದ ವಿಘಟನೆಯಾಗುವುದಿಲ್ಲ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸಮರ್ಪಕ ವಿವರಣೆಯಾಗಿದೆ: ಸ್ಪೊರೊಪೊಲೆನಿನ್ ಯಾವುದೇ ಕಿಣ್ವ ಅಥವಾ ಆಮ್ಲದಿಂದ ನಾಶವಾಗದಿರುವುದರಿಂದ ಪರಾಗಗಳು ಪಳೆಯುಳಿಕೆಗಳಾಗಿ ಉಳಿಯುತ್ತವೆ.'
  },
  {
    id: 'bio-stmt-1',
    subject: 'biology',
    chapter: 'bio-1',
    topic: 'Double Fertilization & Triple Fusion',
    question: `Consider the following statements regarding angiosperm reproduction:\nStatement I: Double fertilization is a unique event restricted exclusively to flowering plants (angiosperms).\nStatement II: In double fertilization, one male gamete fuses with the egg cell (syngamy) to form a diploid zygote, and the second male gamete fuses with two polar nuclei (triple fusion) to form a triploid primary endosperm nucleus (PEN).`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'Both statements are true. Double fertilization comprises syngamy (n + n → 2n zygote) and triple fusion (n + 2n → 3n PEN), which is a diagnostic hallmark of angiosperms discovered by S.G. Nawaschin.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Syngamy (n+n=2n) + Triple fusion (n+2n=3n) = Double Fertilization',
    questionKannada: `ಆವೃತಬೀಜ ಸಸ್ಯಗಳ (angiosperms) ಸಂತಾನೋತ್ಪತ್ತಿಯ ಕುರಿತ ಹೇಳಿಕೆಗಳನ್ನು ಗಮನಿಸಿ:\nಹೇಳಿಕೆ I: ಇಮ್ಮಡಿ ನಿಷೇಚನವು (double fertilization) ಕೇವಲ ಆವೃತಬೀಜ ಸಸ್ಯಗಳಲ್ಲಿ ಮಾತ್ರ ಕಂಡುಬರುವ ಅನನ್ಯ ಪ್ರಕ್ರಿಯೆಯಾಗಿದೆ.\nಹೇಳಿಕೆ II: ಇಮ್ಮಡಿ ನಿಷೇಚನದಲ್ಲಿ, ಒಂದು ಗಂಡು ಲಿಂಗಾಣು ಅಂಡಾಣುವಿನೊಂದಿಗೆ ಸೇರಿ (ಸಿಂಗಮಿ) ದ್ವಿಗುಣ ಯುಗ್ಮಜವನ್ನು (2n) ಉಂಟುಮಾಡಿದರೆ, ಎರಡನೇ ಗಂಡು ಲಿಂಗಾಣು ಎರಡು ಧ್ರುವೀಯ ಬೀಜಕೇಂದ್ರಗಳೊಂದಿಗೆ ಸೇರಿ (ತ್ರಿವಳಿ ಸಂಯೋಗ) ತ್ರಿಗುಣ ಪ್ರಾಥಮಿಕ ಭ್ರೂಣಪೋಷಕ ಕೋಶಕೇಂದ್ರವನ್ನು (3n PEN) ರೂಪಿಸುತ್ತದೆ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: ಸಿಂಗಮಿ (2n) ಮತ್ತು ತ್ರಿವಳಿ ಸಂಯೋಗ (3n) ಎರಡೂ ಸೇರಿ ಆವೃತಬೀಜ ಸಸ್ಯಗಳಲ್ಲಿ ಇಮ್ಮಡಿ ನಿಷೇಚನವನ್ನು ಉಂಟುಮಾಡುತ್ತವೆ.'
  },

  // BIO-2: Human Reproduction
  {
    id: 'bio-ar-2',
    subject: 'biology',
    chapter: 'bio-2',
    topic: 'Scrotum and Thermoregulation of Testes',
    question: `Assertion (A): The human testes are situated outside the abdominal cavity within a pouch called the scrotum.\nReason (R): The scrotum maintains the scrotal temperature at 2 to 2.5°C lower than the internal core body temperature, which is essential for normal spermatogenesis.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Spermatogenesis requires a lower temperature (34.5 - 35°C) than normal internal body temperature (37°C). The extra-abdominal location of testes inside scrotum facilitates this thermoregulation.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Scrotum temperature: 2 - 2.5°C below body temperature for spermatogenesis',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಮಾನವನ ವೃಷಣಗಳು (testes) ಉದರದ ಕುಳಿಯ ಹೊರಗೆ ವೃಷಣ ಚೀಲದಲ್ಲಿ (scrotum) ಸ್ಥಿತವಾಗಿವೆ.\nಕಾರಣ (R): ವೃಷಣ ಚೀಲವು ದೇಹದ ಆಂತರಿಕ ಉಷ್ಣತೆಗಿಂತ 2 ರಿಂದ 2.5°C ಕಡಿಮೆ ತಾಪಮಾನವನ್ನು ಕಾಪಾಡುತ್ತದೆ, ಇದು ವೀರ್ಯಾಣು ಜನನಕ್ಕೆ (spermatogenesis) ಅತ್ಯಗತ್ಯವಾಗಿದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: ವೀರ್ಯಾಣುಗಳ ಉತ್ಪತ್ತಿಗೆ 2-2.5°C ಕಡಿಮೆ ತಾಪಮಾನ ಬೇಕಾಗಿರುವುದರಿಂದ ವೃಷಣಗಳು ದೇಹದ ಹೊರಗೆ ಇರುತ್ತವೆ.'
  },

  // BIO-3: Reproductive Health
  {
    id: 'bio-stmt-3',
    subject: 'biology',
    chapter: 'bio-3',
    topic: 'Contraceptive Methods & Saheli',
    question: `Consider the following statements regarding reproductive health contraceptives:\nStatement I: Saheli is an oral contraceptive for females that contains a non-steroidal preparation (centchroman) and is taken once a week after an initial intake schedule.\nStatement II: Copper-releasing IUDs (e.g. CuT, Cu7, Multiload 375) release copper ions that suppress sperm motility and reducing their fertilising capacity.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'Both statements are accurate NCERT facts: Saheli was developed by CDRI Lucknow, is non-steroidal with once-a-week dosage and high contraceptive efficacy. Cu-IUDs increase phagocytosis of sperms within the uterus and Cu ions suppress sperm motility.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Saheli: Non-steroidal once-a-week pill (CDRI); Cu-IUDs suppress sperm motility',
    questionKannada: `ಸಂತಾನೋತ್ಪತ್ತಿ ಆರೋಗ್ಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಗಮನಿಸಿ:\nಹೇಳಿಕೆ I: 'ಸಹೇಲಿ' ಮಹಿಳೆಯರಿಗಾಗಿ ಇರುವ ಬಾಯಿಯ ಮೂಲಕ ಸೇವಿಸುವ ಸ್ಟೀರಾಯ್ಡ್-ರಹಿತ (non-steroidal) ಗರ್ಭನಿರೋಧಕ ಮಾತ್ರೆ ಆಗಿದ್ದು, ಇದನ್ನು ವಾರಕ್ಕೊಮ್ಮೆ ತೆಗೆದುಕೊಳ್ಳಲಾಗುತ್ತದೆ.\nಹೇಳಿಕೆ II: ತಾಮ್ರವನ್ನು ಬಿಡುಗಡೆ ಮಾಡುವ IUD ಗಳು (CuT, Multiload 375) ವೀರ್ಯಾಣುಗಳ ಚಲನಶೀಲತೆಯನ್ನು ಕುಗ್ಗಿಸಿ ನಿಷೇಚನ ಸಾಮರ್ಥ್ಯವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತವೆ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: ಸಹೇಲಿ CDRI ಲಕ್ನೋ ಅಭಿವೃದ್ಧಿಪಡಿಸಿದ ಸ್ಟೀರಾಯ್ಡ್-ರಹಿತ ವಾರಕ್ಕೊಮ್ಮೆ ಸೇವಿಸುವ ಮಾತ್ರೆಯಾಗಿದೆ ಮತ್ತು Cu-IUD ವೀರ್ಯಾಣು ಚಲನಶೀಲತೆ ತಡೆಯುತ್ತದೆ.'
  },

  // BIO-4: Principles of Inheritance and Variation
  {
    id: 'bio-ar-4',
    subject: 'biology',
    chapter: 'bio-4',
    topic: 'Sickle Cell Anemia & Point Mutation',
    question: `Assertion (A): Sickle-cell anemia is an autosomal recessive genetic disorder caused by a single point mutation in the beta-globin chain of hemoglobin.\nReason (R): The substitution of glutamic acid by valine at the sixth position of the beta-globin chain occurs due to a single base substitution from GAG to GUG codon.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Sickle cell anemia is controlled by a pair of allele Hb^A and Hb^S. The disease is caused by substitution of Glutamic acid (Glu) by Valine (Val) at the 6th position of beta-globin chain due to point mutation from GAG to GUG in the mRNA codon.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'GAG → GUG: Glutamic acid → Valine at 6th position of β-globin',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಕುಡಗೋಲು ಕಣ ರಕ್ತಹೀನತೆ (Sickle-cell anemia) ಹಿಮೋಗ್ಲೋಬಿನ್‌ನ ಬೀಟಾ-ಗ್ಲೋಬಿನ್ ಸರಣಿಯಲ್ಲಿನ ಏಕ ಬಿಂದು ರೂಪಾಂತರದಿಂದ (point mutation) ಉಂಟಾಗುವ ಆಟೋಸೋಮಲ್ ರಿಸೆಸಿವ್ ಅಸ್ವಸ್ಥತೆಯಾಗಿದೆ.\nಕಾರಣ (R): ಬೀಟಾ-ಗ್ಲೋಬಿನ್ ಸರಣಿಯ 6 ನೇ ಸ್ಥಾನದಲ್ಲಿ GAG ಇಂದ GUG ಕೋಡಾನ್‌ಗೆ ಬದಲಾಗುವುದರಿಂದ ಗ್ಲುಟಾಮಿಕ್ ಆಮ್ಲದ ಜಾಗದಲ್ಲಿ ವ್ಯಾಲಿನ್ ಆದೇಶಗೊಳ್ಳುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸಮರ್ಪಕ ವಿವರಣೆಯಾಗಿದೆ: 6ನೇ ಸ್ಥಾನದಲ್ಲಿ GAG → GUG ರೂಪಾಂತರವು ಗ್ಲುಟಾಮಿಕ್ ಆಮ್ಲವನ್ನು ವ್ಯಾಲಿನ್ ಆಗಿ ಬದಲಿಸಿ ರಕ್ತಹೀನತೆ ಉಂಟುಮಾಡುತ್ತದೆ.'
  },

  // BIO-5: Molecular Basis of Inheritance
  {
    id: 'bio-stmt-5',
    subject: 'biology',
    chapter: 'bio-5',
    topic: 'Properties of Genetic Code',
    question: `Consider the following statements regarding the genetic code:\nStatement I: The genetic code is degenerate because multiple distinct codons can code for the same single amino acid.\nStatement II: The genetic code is nearly universal, meaning that a codon like UUU codes for phenylalanine in bacteria as well as in human beings.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'Both statements are correct. There are 64 codons, 61 coding for 20 amino acids (degeneracy). The code is universal across prokaryotes and eukaryotes with minor exceptions in mitochondrial codons.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Genetic code: Degenerate (61 codons for 20 amino acids) & Universal',
    questionKannada: `ಜೆನೆಟಿಕ್ ಕೋಡ್‌ಗೆ (genetic code) ಸಂಬಂಧಿಸಿದ ಈ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಗಮನಿಸಿ:\nಹೇಳಿಕೆ I: ಜೆನೆಟಿಕ್ ಕೋಡ್ 'ಡಿಜನರೇಟ್' (degenerate) ಆಗಿದೆ, ಏಕೆಂದರೆ ಒಂದೇ ಅಮೈನೋ ಆಮ್ಲವನ್ನು ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ಕೋಡಾನ್‌ಗಳು ಸಂಕೇತಿಸಬಹುದು.\nಹೇಳಿಕೆ II: ಜೆನೆಟಿಕ್ ಕೋಡ್ ಸಾರ್ವತ್ರಿಕವಾಗಿದೆ (universal), ಅಂದರೆ UUU ಕೋಡಾನ್ ಬ್ಯಾಕ್ಟೀರಿಯಾದಲ್ಲೂ ಮತ್ತು ಮಾನವರಲ್ಲೂ ಫಿನೈಲ್‌ಅಲನೈನ್ ಅನ್ನು ಸಂಕೇತಿಸುತ್ತದೆ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: 61 ಕೋಡಾನ್‌ಗಳು 20 ಅಮೈನೋ ಆಮ್ಲಗಳನ್ನು ಸೂಚಿಸುವುದು ಡಿಜನರೇಸಿಯಾಗಿದೆ, ಮತ್ತು ಜೀವಪ್ರಪಂಚದಲ್ಲಿ ಕೋಡ್ ಸಾರ್ವತ್ರಿಕವಾಗಿದೆ.'
  },

  // BIO-6: Evolution
  {
    id: 'bio-ar-6',
    subject: 'biology',
    chapter: 'bio-6',
    topic: 'Homology vs Analogy',
    question: `Assertion (A): The thorns of Bougainvillea and tendrils of Cucurbita represent homologous structures.\nReason (R): Both thorns of Bougainvillea and tendrils of Cucurbita arise as modifications of axillary buds (same origin) but perform different functions (divergent evolution).`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Homology indicates common origin/ancestry despite different functional adaptations (divergent evolution). Both thorns in Bougainvillea and tendrils in Cucurbita are modified axillary buds.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Homology: Same origin (axillary bud), different functions → Divergent evolution',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಬೊಗನ್‌ವಿಲ್ಲಾದ ಮುಳ್ಳುಗಳು ಮತ್ತು ಕುಕುರ್ಬಿಟಾದ ನುಣುಪುಬಳ್ಳಿಗಳು (tendrils) ಸಜಾತೀಯ ರಚನೆಗಳನ್ನು (homologous structures) ಪ್ರತಿನಿಧಿಸುತ್ತವೆ.\nಕಾರಣ (R): ಇವೆರಡೂ ಕಂಕುಳು ಮೊಗ್ಗುಗಳ (axillary buds) ಮಾರ್ಪಾಡುಗಳಿಂದ ಹುಟ್ಟಿಕೊಂಡಿದ್ದು (ಒಂದೇ ಮೂಲ), ವಿಭಿನ್ನ ಕಾರ್ಯಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತವೆ (ವಿಕೇಂದ್ರೀಯ ವಿಕಾಸ).`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: ಒಂದೇ ಮೂಲದ (ಕಂಕುಳು ಮೊಗ್ಗು) ರಚನೆಗಳು ವಿಭಿನ್ನ ಕಾರ್ಯ ನಿರ್ವಹಿಸುವುದು ಸಜಾತೀಯತೆ (ಹೋಮಾಲಜಿ).'
  },

  // BIO-7: Human Health and Disease
  {
    id: 'bio-stmt-7',
    subject: 'biology',
    chapter: 'bio-7',
    topic: 'Innate vs Acquired Immunity',
    question: `Consider the following statements regarding human immune defense:\nStatement I: Lysozyme present in human saliva and tears acts as a physiological barrier of innate immunity preventing bacterial infections.\nStatement II: Colostrum secreted by mother during the initial days of lactation contains abundant antibodies (IgA) that provide passive immunity to the newborn infant.`,
    questionType: 'single_mcq',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctAnswer: 'Both Statement I and Statement II are correct',
    explanation: 'Both statements are true. Innate physiological barriers include acid in stomach, saliva in mouth, tears from eyes containing lysozyme. Colostrum has IgA which provides natural passive immunity.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Lysozyme = physiological barrier; Colostrum = IgA antibodies (Passive immunity)',
    questionKannada: `ಮಾನವ ರೋಗನಿರೋಧಕ ವ್ಯವಸ್ಥೆಗೆ ಸಂಬಂಧಿಸಿದ ಕೆಳಗಿನ ಹೇಳಿಕೆಗಳನ್ನು ಗಮನಿಸಿ:\nಹೇಳಿಕೆ I: ಲಾಲಾರಸ ಮತ್ತು ಕಣ್ಣೀರಿನಲ್ಲಿರುವ ಲೈಸೋಜೈಮ್ ಕಿಣ್ವವು ಬ್ಯಾಕ್ಟೀರಿಯಾದ ಸೋಂಕನ್ನು ತಡೆಯುವ ಸಹಜ ಪ್ರತಿರಕ್ಷೆಯ ಶಾರೀರಿಕ ತಡೆಗೋಡೆಯಾಗಿ (physiological barrier) ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.\nಹೇಳಿಕೆ II: ಮಗುವಿಗೆ ಜನ್ಮ ನೀಡಿದ ಆರಂಭಿಕ ದಿನಗಳಲ್ಲಿ ತಾಯಿಯ ಮೊಲೆಹಾಲಿನಲ್ಲಿ (ಕೊಲೊಸ್ಟ್ರಮ್) ಹೇರಳವಾದ IgA ಪ್ರತಿಕಾಯಗಳಿದ್ದು, ಇವು ನವಜಾತ ಶಿಶುವಿಗೆ ನಿಷ್ಕ್ರಿಯ ಪ್ರತಿರಕ್ಷೆಯನ್ನು (passive immunity) ನೀಡುತ್ತವೆ.`,
    optionsKannada: [
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ಸರಿಯಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಮತ್ತು ಹೇಳಿಕೆ II ಎರಡೂ ತಪ್ಪಾಗಿವೆ',
      'ಹೇಳಿಕೆ I ಸರಿಯಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ತಪ್ಪಾಗಿದೆ',
      'ಹೇಳಿಕೆ I ತಪ್ಪಾಗಿದೆ ಆದರೆ ಹೇಳಿಕೆ II ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಹೇಳಿಕೆಗಳು ಸರಿಯಾಗಿವೆ: ಲೈಸೋಜೈಮ್ ಶಾರೀರಿಕ ತಡೆಗೋಡೆಯಾಗಿದ್ದರೆ, ಕೊಲೊಸ್ಟ್ರಮ್‌ನಲ್ಲಿರುವ IgA ಮಗುವಿಗೆ ನಿಷ್ಕ್ರಿಯ ಪ್ರತಿರಕ್ಷೆ ನೀಡುತ್ತದೆ.'
  },

  // BIO-9: Biotechnology Principles
  {
    id: 'bio-ar-9',
    subject: 'biology',
    chapter: 'bio-9',
    topic: 'Restriction Enzymes & Molecular Scissors',
    question: `Assertion (A): Restriction endonucleases cut DNA molecules at specific palindromic recognition sequences, creating overhanging single-stranded ends called sticky ends.\nReason (R): Sticky ends facilitate recombinant DNA formation because they form complementary base pairs easily with the help of DNA ligase enzyme.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Restriction endonucleases recognize specific palindromes and cleave slightly away from the center of symmetry, leaving single-stranded sticky ends. These sticky ends hydrogen bond with complementary cut ends, facilitating ligation by DNA ligase into a recombinant vector.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'EcoRI creates sticky ends at 5\'-GAATTC-3\'; ligase joins them',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ರೆಸ್ಟ್ರಿಕ್ಷನ್ ಎಂಡೋನ್ಯೂಕ್ಲಿಯೇಸ್‌ಗಳು DNA ಅಣುಗಳನ್ನು ನಿರ್ದಿಷ್ಟ ಪ್ಯಾಲಿಂಡ್ರೋಮಿಕ್ ಅನುಕ್ರಮಗಳಲ್ಲಿ ಕತ್ತರಿಸಿ 'ಜಿಗುಟು ತುದಿಗಳನ್ನು' (sticky ends) ಸೃಷ್ಟಿಸುತ್ತವೆ.\nಕಾರಣ (R): ಜಿಗುಟು ತುದಿಗಳು DNA ಲಿಗೇಸ್ ಕಿಣ್ವದ ಸಹಾಯದಿಂದ ಪೂರಕ ಬೇಸ್ ಜೋಡಿಗಳನ್ನು ಸುಲಭವಾಗಿ ರೂಪಿಸಿ ಮರುಸಂಯೋಜಿತ DNA ತಯಾರಿಕೆಗೆ ನೆರವಾಗುತ್ತವೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: ಜಿಗುಟು ತುದಿಗಳು ಪೂರಕ ಜಲಜನಕ ಬಂಧಗಳನ್ನು ಸುಲಭವಾಗಿ ರೂಪಿಸುವುದರಿಂದ rDNA ತಂತ್ರಜ್ಞಾನದಲ್ಲಿ ಅತ್ಯಗತ್ಯ.'
  },

  // BIO-11: Organisms and Populations
  {
    id: 'bio-ar-11',
    subject: 'biology',
    chapter: 'bio-11',
    topic: 'Thermoregulation & Allen Rule',
    question: `Assertion (A): Very small animals like shrews and hummingbirds are rarely found in polar regions.\nReason (R): Small animals have a larger surface area relative to their body volume, causing them to lose body heat very rapidly in cold environments.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Heat loss or heat gain is a function of surface area. Since small animals have a larger surface area-to-volume ratio, they lose body heat very quickly when it is cold outside and must expend much metabolic energy to generate heat, making polar survival energetically unfavorable.',
    difficulty: 'Easy',
    source: 'KCET 2023',
    year: '2023',
    formulaNote: 'Surface area to volume ratio is high in small animals → rapid heat loss',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಶ್ರೂ (shrews) ಮತ್ತು ಹಮ್ಮಿಂಗ್‌ಬರ್ಡ್‌ಗಳಂತಹ ಅತ್ಯಂತ ಚಿಕ್ಕ ಪ್ರಾಣಿಗಳು ಧ್ರುವ ಪ್ರದೇಶಗಳಲ್ಲಿ ಬಹಳ ಅಪರೂಪವಾಗಿ ಕಂಡುಬರುತ್ತವೆ.\nಕಾರಣ (R): ಸಣ್ಣ ಪ್ರಾಣಿಗಳು ತಮ್ಮ ದೇಹದ ಪರಿಮಾಣಕ್ಕೆ ಹೋಲಿಸಿದರೆ ಹೆಚ್ಚಿನ ಮೇಲ್ಮೈ ವಿಸ್ತೀರ್ಣವನ್ನು ಹೊಂದಿದ್ದು, ಶೀತ ವಾತಾವರಣದಲ್ಲಿ ದೇಹದ ಶಾಖವನ್ನು ವೇಗವಾಗಿ ಕಳೆದುಕೊಳ್ಳುತ್ತವೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ: ವಿಸ್ತೀರ್ಣ/ಪರಿಮಾಣದ ಅನುಪಾತ ಹೆಚ್ಚಾಗಿರುವುದರಿಂದ ಸಣ್ಣ ಪ್ರಾಣಿಗಳು ಶೀತ ಪ್ರದೇಶಗಳಲ್ಲಿ ದೇಹದ ಉಷ್ಣತೆ ಕಾಪಾಡಿಕೊಳ್ಳುವುದು ಕಷ್ಟಕರ.'
  },

  // BIO-12: Ecosystem
  {
    id: 'bio-ar-12',
    subject: 'biology',
    chapter: 'bio-12',
    topic: 'Pyramid of Energy',
    question: `Assertion (A): The pyramid of energy in any natural ecosystem is always upright and can never be inverted.\nReason (R): Energy transfer between successive trophic levels follows Lindeman's 10% law, with 90% of energy lost as metabolic heat at each transfer step.`,
    questionType: 'single_mcq',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    explanation: 'Energy flows unidirectionally from producers to consumers. At each trophic transfer, only about 10% of chemical energy is fixed into biomass of the higher trophic level while 90% is dissipated as heat, guaranteeing an always upright energy pyramid.',
    difficulty: 'Easy',
    source: 'KCET 2024',
    year: '2024',
    formulaNote: 'Lindeman 10% Law: Pyramid of energy is ALWAYS upright',
    questionKannada: `ಪ್ರತಿಪಾದನೆ (A): ಯಾವುದೇ ನೈಸರ್ಗಿಕ ಪರಿಸರ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಶಕ್ತಿಯ ಪಿರಮಿಡ್ ಯಾವಾಗಲೂ ನೇರವಾಗಿರುತ್ತದೆ (upright) ಮತ್ತು ಎಂದಿಗೂ ತಲೆಕೆಳಗಾಗಲು ಸಾಧ್ಯವಿಲ್ಲ.\nಕಾರಣ (R): ಅನುಕ್ರಮ ಪೋಷಣಾ ಸ್ತರಗಳ ನಡುವೆ ಶಕ್ತಿಯ ವರ್ಗಾವಣೆಯು ಲಿಂಡ್‌ಮನ್‌ನ 10% ನಿಯಮವನ್ನು ಅನುಸರಿಸುತ್ತದೆ ಮತ್ತು ಪ್ರತಿ ಹಂತದಲ್ಲೂ 90% ಶಕ್ತಿಯು ಶಾಖವಾಗಿ ವ್ಯಯವಾಗುತ್ತದೆ.`,
    optionsKannada: [
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಾಗಿದೆ',
      '(A) ಮತ್ತು (R) ಎರಡೂ ಸರಿಯಾಗಿವೆ ಆದರೆ (R) ಯು (A) ಗೆ ಸರಿಯಾದ ವಿವರಣೆಯಲ್ಲ',
      '(A) ಸರಿಯಾಗಿದೆ ಆದರೆ (R) ತಪ್ಪಾಗಿದೆ',
      '(A) ತಪ್ಪಾಗಿದೆ ಆದರೆ (R) ಸರಿಯಾಗಿದೆ'
    ],
    explanationKannada: 'ಎರಡೂ ಸರಿಯಾಗಿವೆ ಮತ್ತು ಸಮರ್ಪಕ ವಿವರಣೆಯಾಗಿದೆ: ಪ್ರತಿ ಪೋಷಣಾ ಸ್ತರದಲ್ಲೂ ಕೇವಲ 10% ಶಕ್ತಿ ಮಾತ್ರ ಮುಂದಿನ ಹಂತಕ್ಕೆ ತಲುಪುವುದರಿಂದ ಶಕ್ತಿಯ ಪಿರಮಿಡ್ ಸದಾ ನೇರವಾಗಿರುತ್ತದೆ.'
  }
];
