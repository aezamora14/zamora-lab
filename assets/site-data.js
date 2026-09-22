/*
  ZAMORA LAB — SITE CONTENT
  ─────────────────────────────────────────────────────────────────────────────
  Everything that appears on the site lives in this one file. Edit the text
  below, commit, and GitHub Pages redeploys automatically. No build step.

  Quick guide
  • People ............ `people` (current members) and `alumni`
  • Research .......... `research` (order = order on the page)
  • Technology ........ `technology`
  • Publications ...... `publications` (newest first) + `bookChapters`
  • Gallery ........... `gallery` — drop photos in /images and add an entry
  • News .............. `news` (optional; leave empty to hide the section)
  • Open positions .... `positions`
*/

window.ZAMORA_LAB_DATA = {

  /* ── Identity & links ─────────────────────────────────────────────── */
  lab: {
    name: "Zamora Lab",
    institution: "University of California, Davis",
    unit: "Division of Malignant Hematology, Cellular Therapy & Transplantation",
    department: "Department of Internal Medicine · UC Davis School of Medicine",
    address: "2921 Stockton Blvd, Sacramento, CA 95817",
    email: "aezamora@health.ucdavis.edu",
    tagline: "Decoding antitumor immunity to build more precise cell-based therapies.",
    intro: "The Zamora Lab studies the immune- and tumor-centric mechanisms that shape effective antitumor responses. We combine cellular engineering with multi-omic and single-cell technologies to understand immune recognition, treatment response, and therapeutic resistance—and to translate those insights into personalized cancer immunotherapies.",
    mission: "Connect immune-cell specificity, molecular state, and directly measured function to understand why cancer immunotherapies succeed—or fail.",
    links: {
      bibliography: "https://www.ncbi.nlm.nih.gov/myncbi/collections/mybibliography/",
      linkedin: "https://www.linkedin.com/in/anthony-zamora-65b9546b",
      pubmed: "https://pubmed.ncbi.nlm.nih.gov/?term=Zamora+AE%5BAuthor%5D&sort=date",
      facultyProfile: "https://immunology.ucdavis.edu/people/anthony-zamora",
      gradGroup: "https://immunology.ucdavis.edu/",
      github: "https://github.com/aezamora14"
    }
  },

  /* ── At-a-glance figures shown under the hero ─────────────────────── */
  stats: [
    { value: "5", label: "Research programs" },
    { value: "35", label: "Peer-reviewed papers & chapters" },
    { value: "2013", label: "First publication in the field" },
    { value: "2025", label: "Lab established at UC Davis" }
  ],

  /* ── Research programs ────────────────────────────────────────────── */
  research: [
    {
      title: "CAR-T Cell Biology & Engineering",
      short: "Defining cell-intrinsic features that drive CAR-T persistence, function, safety, and clinical efficacy.",
      goal: "Connect CAR-T phenotype, polyfunctionality, cytotoxicity, and transcriptional state with treatment response while developing improved engineering strategies.",
      details: "Longitudinal studies use single-cell functional profiling at key points during CAR-T manufacture and in-vivo expansion. The lab compares responder and non-responder products, studies how manufacturing conditions influence cell state, and develops experimental and computational approaches to improve next-generation CAR constructs.",
      image: "images/car-t-il7-il15-workflow.webp",
      imageAlt: "Workflow schematic for CAR-T cell biology and engineering studies",
      tags: ["CAR-T", "Single-cell function", "Cell engineering", "Clinical response"]
    },
    {
      title: "TCR-T Cells & Public Neoantigens",
      short: "Discovering recurrent cancer neoantigens and the TCRs capable of recognizing them.",
      goal: "Identify actionable public neoantigens, define determinants of tumor immunogenicity, and engineer TCR-T therapies with broader applicability.",
      details: "The program focuses on recurrent cancer mutations and gene fusions that may generate shared neoepitopes across patients with compatible HLA molecules. Studies integrate antigen discovery, TCR repertoire analysis, T-cell phenotype and function, and engineering of tumor-reactive TCRs.",
      image: "images/tcr-t-discovery-pipeline.webp",
      imageAlt: "TCR-T discovery pipeline schematic",
      tags: ["TCR-T", "Neoantigens", "Gene fusions", "HLA"]
    },
    {
      title: "GVHD & Allogeneic Transplantation",
      short: "Understanding how regulatory T-cell biology can be manipulated to limit graft-versus-host disease.",
      goal: "Delineate IL-27/IL-27R signaling in Treg survival, suppressive function, metabolic fitness, and control of alloreactive T-cell repertoires.",
      details: "This work combines mechanistic models of GVHD with single-cell RNA and TCR sequencing to resolve regulatory and alloreactive T-cell clonotypes. A major focus is how IL-27 signaling and GILT influence Treg reconstitution and suppressive capability after allogeneic hematopoietic stem-cell transplantation.",
      image: "images/sctcr-seq-conga-workflow.webp",
      imageAlt: "Single-cell TCR sequencing and CoNGA analysis workflow",
      tags: ["GVHD", "Treg", "IL-27", "scRNA + TCR"]
    },
    {
      title: "Therapy-Induced Immune Remodeling",
      short: "Tracking how combination immunotherapy reshapes tumors, blood, and the TCR repertoire.",
      goal: "Determine whether longitudinal changes in the immune landscape and blood–tumor TCR overlap can serve as biomarkers of therapeutic response.",
      details: "The lab analyzes samples from a Phase I/II study of epacadostat, SD-101, and radiotherapy in advanced solid tumors and lymphoma, comparing longitudinal immune states in the tumor microenvironment and peripheral blood. Blood draws and tumor biopsies collected before, during, and after treatment feed immune and tumor analyses, TCR-repertoire profiling, and blood–tumor TCR-overlap measurements.",
      image: "images/epacadostat-sd101-rt-trial-schema.webp",
      imageAlt: "Trial schema: epacadostat, SD-101, and radiation dosing over six weeks with blood draws and biopsies feeding immune analysis, tumor analysis, TCR repertoire, and TCR overlap readouts",
      tags: ["Clinical trial", "TME", "TCR overlap", "Biomarkers"]
    },
    {
      title: "AI-based Discovery of Adrenal-Specific Programs Driving T-Cell Clonotypic Remodeling & Immunotherapy Resistance",
      short: "Integrating TCR identity, RNA state, clonal behavior, and adrenal context to prioritize T-cell clonotypes for functional testing.",
      goal: "Identify adrenal-specific programs associated with T-cell clonotypic remodeling and immunotherapy resistance, and test their functional consequences.",
      details: "The project uses AI-based prioritization to integrate paired TCR sequences, transcriptional programs, clonal expansion and persistence, and adrenal tissue signals. Clonotypes are ranked by productive-like and adrenal-conditioned features to guide functional validation on the Beacon platform, with readouts of single-cell killing, cytokine secretion, proliferation, and TCR/RNA recovery.",
      image: "images/adrenal-ai-clonotype-workflow.webp",
      imageAlt: "AI-based adrenal clonotype prioritization workflow",
      wide: true,
      tags: ["AI", "Adrenal microenvironment", "TCR clonotypes", "Immunotherapy resistance"]
    }
  ],

  /* ── Integrated approach ──────────────────────────────────────────── */
  approach: {
    headline: "Measure the cell. Resolve the receptor. Test the function.",
    body: "We integrate computational analysis with experimental validation so that candidate immune states and clonotypes can be linked back to measurable biological function.",
    steps: ["Patient & model samples", "Single-cell profiling", "TCR / repertoire analysis", "Multi-omic integration", "Functional validation"],
    competencies: [
      { title: "Single-cell genomics", text: "Transcriptomics, immune-receptor sequencing, cell-state annotation, and clonotype-resolved analysis." },
      { title: "Functional profiling", text: "Longitudinal single-cell measurements of phenotype, secretion, cytotoxicity, and immune-cell heterogeneity." },
      { title: "Computational immunology", text: "Repertoire analysis, multidimensional integration, predictive modeling, and data-driven candidate prioritization." },
      { title: "Cell engineering", text: "CAR-T and TCR-T strategies designed to improve specificity, persistence, potency, and therapeutic safety." }
    ]
  },

  /* ── Technology platforms ─────────────────────────────────────────── */
  technology: [
    { name: "10x Genomics Chromium Controller", type: "Single cell", image: "images/10x-chromium-controller.webp", description: "High-throughput single-cell transcriptomic and immune-receptor profiling." },
    { name: "Bruker Cellular Analysis Beacon", type: "Single cell", image: "images/beacon-platform.webp", description: "Longitudinal single-cell functional assays linking phenotype, secretion, and cytotoxicity." }
  ],

  /* ── People ───────────────────────────────────────────────────────── */
  people: [
    {
      name: "Anthony E. Zamora, PhD",
      role: "Principal Investigator · Associate Professor",
      affiliation: "Division of Malignant Hematology, Cellular Therapy & Transplantation · Department of Internal Medicine · UC Davis",
      bio: "Dr. Zamora is a cancer immunologist whose work spans NK-cell and T-cell biology, neoantigen recognition, cellular engineering, and single-cell immune profiling. He trained in Immunology at UC Davis with William J. Murphy and completed postdoctoral training with Paul G. Thomas at St. Jude Children's Research Hospital before joining the Medical College of Wisconsin faculty and returning to UC Davis in 2025.",
      image: "images/anthony-zamora.webp",
      links: [
        { label: "UC Davis profile", href: "https://immunology.ucdavis.edu/people/anthony-zamora" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/anthony-zamora-65b9546b" },
        { label: "Email", href: "mailto:aezamora@health.ucdavis.edu" }
      ]
    },
    {
      name: "Jessica Schmeling, BS",
      role: "Graduate Student Researcher",
      affiliation: "Graduate Group in Immunology · UC Davis",
      bio: "Jessica earned her BS in Biology from Miami University, where she studied metagenomic signatures associated with type 1 diabetes. After clinical work and research on small-cell lung cancer immune biology, she joined the Zamora Lab in 2023 to pursue cell-based cancer immunotherapy and continued with the lab at UC Davis as a Graduate Group in Immunology student in 2025.",
      image: "images/jessica-schmeling.webp",
      links: [
        { label: "Email", href: "mailto:jlschmeling@ucdavis.edu" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/jessica-schmeling-59a492252/" }
      ]
    }
  ],

  /*
    Alumni — one card per former member (Medical College of Wisconsin era
    unless noted). Fields:
      role   — position in the lab and years
      focus  — one line on what they worked on (optional)
      now    — current position (optional)
      image  — headshot in /images (optional; initials are shown without one)
  */
  alumni: [
    {
      name: "Alfredo Colina, PhD",
      role: "Graduate Student, 2020–2025",
      focus: "Multimodal single-cell functional potency assays for bispecific CAR-T cells; PhD in Microbiology & Immunology, MCW.",
      now: "Senior Scientist, Regeneron",
      image: "images/alfredo-colina.webp",
      links: [ { label: "LinkedIn", href: "https://www.linkedin.com/in/alfredo-colina" } ]
    },
    {
      name: "Ravi Shah, PhD",
      role: "Research Scientist → Senior Research Scientist, 2020–2025",
      focus: "Synthetic-biology CAR-T circuits, single-cell and TCR-repertoire analysis, and institutional NGS platform development.",
      now: "Associate Research Scientist, St. Jude Children's Research Hospital (since 2026)",
      image: "images/ravi-shah.webp",
      links: [ { label: "LinkedIn", href: "https://www.linkedin.com/in/ravishah210" } ]
    },
    {
      name: "Erin Cygan, MS",
      role: "Graduate Student, 2020–2023",
      focus: "Thesis on the immunogenicity of the conserved ETV6/RUNX1 gene fusion versus patient-specific missense neoantigens in HLA-A*02:01.",
      now: "QA Senior Associate, Catalent",
      image: "images/erin-cygan.webp",
      links: [ { label: "LinkedIn", href: "https://www.linkedin.com/in/erin-cygan-580304187" } ]
    },
    {
      name: "Tanya Kozlik, MS",
      role: "Research Technologist → Research Associate, 2020–2023",
      focus: "Next-generation sequencing and neoantigen discovery workflows; MS in Biomedical Sciences, UW–Milwaukee.",
      now: "PhD Candidate in Microbiology & Immunology, Medical College of Wisconsin",
      image: "images/tanya-kozlik.webp",
      links: [ { label: "LinkedIn", href: "https://www.linkedin.com/in/tanya-kozlik-8458a73b" } ]
    },
    {
      name: "Marlenny Vargas-Cortes",
      role: "Research Technologist, 2023–2025",
      focus: "Supported CAR-T and TCR-T projects with single-cell NGS and kept the lab running day to day; Alverno College alumna.",
      now: "Research Technologist, Medical College of Wisconsin",
      image: "images/marlenny-vargas-cortes.webp",
      links: [ { label: "LinkedIn", href: "https://www.linkedin.com/in/marlennyvargascortes/" } ]
    },
    {
      name: "Anand George",
      role: "Student Researcher, 2023–2025",
      focus: "Compared the functional capacity and transcriptional profiles of CAR T cells and bispecific T-cell engagers (BiTEs).",
      now: "Undergraduate, Massachusetts Institute of Technology",
      image: "images/anand-george.webp",
      links: [ { label: "LinkedIn", href: "https://www.linkedin.com/in/anand-george-482460426" } ]
    }
  ],

  /* ── Full bio for the About section ───────────────────────────────── */
  about: {
    paragraphs: [
      "Dr. Anthony E. Zamora obtained his PhD in Immunology from the University of California, Davis in 2015. During his doctoral training under the guidance of Dr. William J. Murphy, he performed studies on the immunoregulatory roles of NK-cell subsets on T cells during viral infection, cancer, and following allogeneic hematopoietic stem cell transplantation. He additionally studied the impact of age and obesity on systemic cancer immunotherapy regimens across multiple cancers, asking how fundamental biological parameters shape therapeutic intervention and disease outcome.",
      "He then completed a four-year postdoctoral fellowship in the Department of Immunology at St. Jude Children's Research Hospital under the guidance of Dr. Paul G. Thomas. His research focused on the determinants of antitumor immunity—identifying the immunogenic targets expressed by cancer cells that can be effectively recognized and eliminated by the immune system.",
      "In 2019, Dr. Zamora joined the Division of Hematology and Oncology, Department of Medicine, at the Medical College of Wisconsin as an Assistant Professor, with a secondary appointment in Microbiology & Immunology and membership in the Cancer Center and the Center for Immunology. In August 2025 he joined the Division of Malignant Hematology, Cellular Therapy and Transplantation in the Department of Internal Medicine at UC Davis as an Associate Professor, where his laboratory integrates cancer immunology, cellular engineering, immune-receptor biology, and single-cell technologies to develop more precise cell-based therapies."
    ],
    timeline: [
      { year: "2015", text: "PhD in Immunology, UC Davis (Murphy Lab)" },
      { year: "2015–19", text: "Postdoctoral Fellow, St. Jude Children's Research Hospital (Thomas Lab)" },
      { year: "2019", text: "Assistant Professor, Medical College of Wisconsin" },
      { year: "2025", text: "Associate Professor, UC Davis School of Medicine" }
    ]
  },

  /* ── Publications (from PubMed, newest first) ─────────────────────── */
  publications: [
    { year: 2026, type: "article", title: "Chronic xenogeneic GVHD after CAR T cell therapy limits long-term safety assessment of CAR effects using NSG mouse model", authors: "Firoz WA, Sheng MK, Ruivo P, Vick LV, Collins CP, Nielsen RN, Shah RK, Khuat LT, Xiong Y, Dave M, Judge SJ, Canter RJ, Monjazeb AM, Blazar BR, Zamora AE, Murphy WJ", journal: "Blood Advances", pmid: "42566762", doi: "10.1182/bloodadvances.2025019559" },
    { year: 2026, type: "article", title: "Intrinsic tumor cell line immunogenicity may drive CAR-independent T cell responses and confound CAR T cell preclinical modeling", authors: "Sheng MK, Firoz WA, Loi K, Vick LV, Collins CP, Nielsen RN, Schmeling JL, Gulati S, Judge SJ, Canter RJ, Monjazeb AM, Zamora AE, Murphy WJ", journal: "Journal for ImmunoTherapy of Cancer", pmid: "42493214", doi: "10.1136/jitc-2026-015074", pmc: "PMC13404409" },
    { year: 2026, type: "review", title: "The Immune Biology of the Adrenal Gland Microenvironment and Its Role in Metastatic Progression", authors: "Liu NM, Sholevar CJ, Karimzadeh M, Uppuluri J, Van Dongen C, Graves CE, Campbell MJ, Zamora AE, Judge SJ, Canter RJ", journal: "International Journal of Molecular Sciences", pmid: "41683577", doi: "10.3390/ijms27031153", pmc: "PMC12897121" },
    { year: 2025, type: "article", title: "Phase 2 trial (NCI-COTC030) of adjuvant inhaled recombinant human IL-15 combined with amputation and adjuvant chemotherapy in dogs with appendicular osteosarcoma", authors: "Rebhun RB, Cruz SM, York D, Mazcko CN, Razmara AM, Patkar S, Judge SJ, Sholevar CJ, Shah RK, Zamora AE, Al-Nadaf S, Vail DM, Fan TM, Burton JH, Luker ME, Skorupski KA, Lejeune AT, Woolard K, Stewart SL, Sparger EE, Young J, Cohen-Davidyan T, Huang E, Beck JA, Murphy WJ, Kent MS, Culp WTN, LeBlanc AK, Canter RJ", journal: "Frontiers in Immunology", pmid: "41209004", doi: "10.3389/fimmu.2025.1672790", pmc: "PMC12589053" },
    { year: 2025, type: "article", title: "SATB1 is a key regulator of quiescence in stem-like CD8+ T cells", authors: "Lin S, Niu H, Zhang Y, Gai K, Brown R, Brown A, Shen J, Xu Z, Shah RK, Schmeling JL, Vargas-Cortes M, Zamora AE, Kohwi-Shigematsu T, Fan J, Zhang B, Cui W", journal: "Nature Immunology", pmid: "40847243", doi: "10.1038/s41590-025-02257-w", pmc: "PMC12492489" },
    { year: 2025, type: "article", title: "Phase I/II Study of Adaptive Manufactured Lentiviral Anti-CD20/Anti-CD19 Chimeric Antigen Receptor T Cells for Relapsed, Refractory Mantle Cell Lymphoma", authors: "Shah NN, Colina AS, Johnson BD, Szabo A, Furqan F, Kearl T, Schneider D, Vargas-Cortes M, Schmeling JL, Dwinell MB, Palen K, Longo W, Hematti P, Zamora AE, Hari P, Bucklan D, Cunningham A, Hamadani M, Fenske TS", journal: "Journal of Clinical Oncology", pmid: "40163793", doi: "10.1200/JCO-24-02158" },
    { year: 2025, type: "article", title: "Intestinal epithelium-derived IL-34 reprograms macrophages to mitigate gastrointestinal tract graft-versus-host disease", authors: "Rayasam A, Moe A, Kudek M, Shah RK, Yuan CY, Miller JM, Rau M, Patton M, Wanat K, Colonna M, Zamora AE, Drobyski WR", journal: "Science Translational Medicine", pmid: "39937882", doi: "10.1126/scitranslmed.adn3963", pmc: "PMC12771561" },
    { year: 2024, type: "review", title: "Current advances in experimental and computational approaches to enhance CAR T cell manufacturing protocols and improve clinical efficacy", authors: "Colina AS, Shah V, Shah RK, Kozlik T, Dash RK, Terhune S, Zamora AE", journal: "Frontiers in Molecular Medicine", pmid: "39086435", doi: "10.3389/fmmed.2024.1310002", pmc: "PMC11285593" },
    { year: 2024, type: "article", title: "Type 2 cannabinoid receptor expression on microglial cells regulates neuroinflammation during graft-versus-host disease", authors: "Moe A, Rayasam A, Sauber G, Shah RK, Doherty A, Yuan CY, Szabo A, Moore BM 2nd, Colonna M, Cui W, Romero J, Zamora AE, Hillard CJ, Drobyski WR", journal: "Journal of Clinical Investigation", pmid: "38662453", doi: "10.1172/JCI175205", pmc: "PMC11142740" },
    { year: 2024, type: "article", title: "DNAJB1-PRKACA fusion neoantigens elicit rare endogenous T cell responses that potentiate cell therapy for fibrolamellar carcinoma", authors: "Kirk AM, Crawford JC, Chou CH, Guy C, Pandey K, Kozlik T, Shah RK, Chung S, Nguyen P, Zhang X, Wang J, Bell M, Mettelman RC, Allen EK, Pogorelyy MV, Kim H, Minervina AA, Awad W, Bajracharya R, White T, Long D Jr, Gordon B, Morrison M, Glazer ES, Murphy AJ, Jiang Y, Fitzpatrick EA, Yarchoan M, Sethupathy P, Croft NP, Purcell AW, Federico SM, Stewart E, Gottschalk S, Zamora AE, DeRenzo C, Strome SE, Thomas PG", journal: "Cell Reports Medicine", pmid: "38508137", doi: "10.1016/j.xcrm.2024.101469", pmc: "PMC10983114" },
    { year: 2023, type: "review", title: "Utilizing immunogenomic approaches to prioritize targetable neoantigens for personalized cancer immunotherapy", authors: "Shah RK, Cygan E, Kozlik T, Colina A, Zamora AE", journal: "Frontiers in Immunology", pmid: "38149253", doi: "10.3389/fimmu.2023.1301100", pmc: "PMC10749952" },
    { year: 2023, type: "article", title: "Simulating the Evolution of Signaling Signatures During CART-Cell and Tumor Cell Interactions", authors: "Shah V, Womack J, Zamora AE, Terhune SS, Dash RK", journal: "Annual International Conference of the IEEE Engineering in Medicine and Biology Society", pmid: "38083755", doi: "10.1109/EMBC40787.2023.10340076" },
    { year: 2023, type: "article", title: "Widening demographic gaps in CAR-T therapy utilization for multiple myeloma in the United States", authors: "Lin M, Estrada-Merly N, Eapen M, Zamora AE, Pezzin LE, Winn AN, Philip J, Schinke C, Drobyski WR, Anderson LD Jr, D'Souza A", journal: "Bone Marrow Transplantation", pmid: "37673983", doi: "10.1038/s41409-023-02102-4", pmc: "PMC11646697" },
    { year: 2023, type: "preprint", title: "Microglial cell expression of the type 2 cannabinoid receptor regulates immune-mediated neuroinflammation", authors: "Moe A, Rayasam A, Sauber G, Shah RK, Yuan CY, Szabo A, Moore BM, Colonna M, Cui W, Romero J, Zamora AE, Hillard CJ, Drobyski WR", journal: "bioRxiv", pmid: "37645843", doi: "10.1101/2023.08.10.552854", pmc: "PMC10462026" },
    { year: 2023, type: "preprint", title: "Simulating the Evolution of Signaling Signatures during CART-Cell – Tumor Cell Interactions", authors: "Shah V, Womack J, Zamora AE, Terhune SS, Dash RK", journal: "arXiv", pmid: "36798455", pmc: "PMC9934731" },
    { year: 2022, type: "article", title: "Antigen cross-presentation in young tumor-bearing hosts promotes CD8+ T cell terminal differentiation", authors: "Moustaki A, Crawford JC, Alli S, Fan Y, Boi S, Zamora AE, McDonald NMN, Wu G, Nakitandwe J, Newman S, Foy S, Silkov A, Thomas PG, Pappo A, Dyer MA, Stewart E, Federico S, Youngblood B", journal: "Science Immunology", pmid: "35119937", doi: "10.1126/sciimmunol.abf6136", pmc: "PMC8990347" },
    { year: 2021, type: "article", title: "Activation status dictates the function of unlicensed natural killer cells in mice and humans", authors: "Aguilar EG, Dunai C, Judge SJ, Zamora AE, Khuat LT, Vick LV, Collins CP, Stoffel KM, Alvarez M, Barao I, Miller JS, Blazar BR, Chevallier P, Retiere C, Canter RJ, Murphy WJ", journal: "Blood Advances", pmid: "34496010", doi: "10.1182/bloodadvances.2021004589", pmc: "PMC8945636" },
    { year: 2021, type: "article", title: "Tumor-intrinsic and -extrinsic determinants of response to blinatumomab in adults with B-ALL", authors: "Zhao Y, Aldoss I, Qu C, Crawford JC, Gu Z, Allen EK, Zamora AE, Alexander TB, Wang J, Goto H, Imamura T, Akahane K, Marcucci G, Stein AS, Bhatia R, Thomas PG, Forman SJ, Mullighan CG, Roberts KG", journal: "Blood", pmid: "32881995", doi: "10.1182/blood.2020006287", pmc: "PMC7845009" },
    { year: 2019, type: "article", title: "Pediatric patients with acute lymphoblastic leukemia generate abundant and functional neoantigen-specific CD8+ T cell responses", authors: "Zamora AE, Crawford JC, Allen EK, Guo XJ, Bakke J, Carter RA, Abdelsamed HA, Moustaki A, Li Y, Chang TC, Awad W, Dallas MH, Mullighan CG, Downing JR, Geiger TL, Chen T, Green DR, Youngblood BA, Zhang J, Thomas PG", journal: "Science Translational Medicine", pmid: "31243155", doi: "10.1126/scitranslmed.aat8549", pmc: "PMC7020562" },
    { year: 2019, type: "article", title: "Genome-wide CRISPR screen reveals PSMA6 to be an essential gene in pancreatic cancer cells", authors: "Bakke J, Wright WC, Zamora AE, Oladimeji P, Crawford JC, Brewer CT, Autry RJ, Evans WE, Thomas PG, Chen T", journal: "BMC Cancer", pmid: "30898113", doi: "10.1186/s12885-019-5455-1", pmc: "PMC6429770" },
    { year: 2018, type: "article", title: "Lung γδ T Cells Mediate Protective Responses during Neonatal Influenza Infection that Are Associated with Type 2 Immunity", authors: "Guo XJ, Dash P, Crawford JC, Allen EK, Zamora AE, Boyd DF, Duan S, Bajracharya R, Awad WA, Apiwattanakul N, Vogel P, Kanneganti TD, Thomas PG", journal: "Immunity", pmid: "30170813", doi: "10.1016/j.immuni.2018.07.011", pmc: "PMC6345262" },
    { year: 2018, type: "review", title: "Hitting the Target: How T Cells Detect and Eliminate Tumors", authors: "Zamora AE, Crawford JC, Thomas PG", journal: "Journal of Immunology", pmid: "29311380", doi: "10.4049/jimmunol.1701413", pmc: "PMC6116355" },
    { year: 2017, type: "article", title: "Transcription factor ZNF148 is a negative regulator of human muscle differentiation", authors: "Bakke J, Wright WC, Zamora AE, Ong SS, Wang YM, Hoyer JD, Brewer CT, Thomas PG, Chen T", journal: "Scientific Reports", pmid: "28811660", doi: "10.1038/s41598-017-08267-5", pmc: "PMC5557752" },
    { year: 2017, type: "article", title: "SNP-mediated disruption of CTCF binding at the IFITM3 promoter is associated with risk of severe influenza in humans", authors: "Allen EK, Randolph AG, Bhangale T, Dogra P, Ohlson M, Oshansky CM, Zamora AE, Shannon JP, Finkelstein D, Dressen A, DeVincenzo J, Caniza M, Youngblood B, Rosenberger CM, Thomas PG", journal: "Nature Medicine", pmid: "28714988", doi: "10.1038/nm.4370", pmc: "PMC5702558" },
    { year: 2017, type: "article", title: "Licensing delineates helper and effector NK cell subsets during viral infection", authors: "Zamora AE, Aguilar EG, Sungur CM, Khuat LT, Dunai C, Lochhead GR, Du J, Pomeroy C, Blazar BR, Longo DL, Venstrom JM, Baumgarth N, Murphy WJ", journal: "JCI Insight", pmid: "28515356", doi: "10.1172/jci.insight.87032", pmc: "PMC5436543" },
    { year: 2016, type: "review", title: "Cell-Intrinsic Barriers of T Cell-Based Immunotherapy", authors: "Ghoneim HE, Zamora AE, Thomas PG, Youngblood BA", journal: "Trends in Molecular Medicine", pmid: "27825667", doi: "10.1016/j.molmed.2016.10.002", pmc: "PMC5135632" },
    { year: 2016, type: "article", title: "Blocking Indolamine-2,3-Dioxygenase Rebound Immune Suppression Boosts Antitumor Effects of Radio-Immunotherapy in Murine Models and Spontaneous Canine Malignancies", authors: "Monjazeb AM, Kent MS, Grossenbacher SK, Mall C, Zamora AE, Mirsoian A, Chen M, Kol A, Shiao SL, Reddy A, Perks JR, Culp WTN, Sparger EE, Canter RJ, Sckisel GD, Murphy WJ", journal: "Clinical Cancer Research", pmid: "26979392", doi: "10.1158/1078-0432.CCR-15-3026", pmc: "PMC5010514" },
    { year: 2015, type: "review", title: "Models to Study NK Cell Biology and Possible Clinical Application", authors: "Zamora AE, Grossenbacher SK, Aguilar EG, Murphy WJ", journal: "Current Protocols in Immunology", pmid: "26237009", doi: "10.1002/0471142735.im1437s110", pmc: "PMC4772895" },
    { year: 2014, type: "article", title: "Bystander activation and anti-tumor effects of CD8+ T cells following Interleukin-2 based immunotherapy is independent of CD4+ T cell help", authors: "Monjazeb AM, Tietze JK, Grossenbacher SK, Hsiao HH, Zamora AE, Mirsoian A, Koehn B, Blazar BR, Weiss JM, Wiltrout RH, Sckisel GD, Murphy WJ", journal: "PLoS One", pmid: "25119341", doi: "10.1371/journal.pone.0102709", pmc: "PMC4131875" },
    { year: 2014, type: "article", title: "Influenza infection results in local expansion of memory CD8+ T cells with antigen non-specific phenotype and function", authors: "Sckisel GD, Tietze JK, Zamora AE, Hsiao HH, Priest SO, Wilkins DE, Lanier LL, Blazar BR, Baumgarth N, Murphy WJ", journal: "Clinical & Experimental Immunology", pmid: "23937663", doi: "10.1111/cei.12186", pmc: "PMC3898557" },
    { year: 2013, type: "article", title: "Aging predisposes to acute inflammatory induced pathology after tumor immunotherapy", authors: "Bouchlaka MN, Sckisel GD, Chen M, Mirsoian A, Zamora AE, Maverakis E, Wilkins DE, Alderson KL, Hsiao HH, Weiss JM, Monjazeb AM, Hesdorffer C, Ferrucci L, Longo DL, Blazar BR, Wiltrout RH, Redelman D, Taub DD, Murphy WJ", journal: "Journal of Experimental Medicine", pmid: "24081947", doi: "10.1084/jem.20131219", pmc: "PMC3804937" },
    { year: 2013, type: "article", title: "Murine NK-cell licensing is reflective of donor MHC-I following allogeneic hematopoietic stem cell transplantation in murine cytomegalovirus responses", authors: "Sungur CM, Tang-Feldman YJ, Zamora AE, Alvarez M, Pomeroy C, Murphy WJ", journal: "Blood", pmid: "23818546", doi: "10.1182/blood-2013-02-483503", pmc: "PMC3750345" },
    { year: 2013, type: "review", title: "Immunoediting and antigen loss: overcoming the achilles heel of immunotherapy with antigen non-specific therapies", authors: "Monjazeb AM, Zamora AE, Grossenbacher SK, Mirsoian A, Sckisel GD, Murphy WJ", journal: "Frontiers in Oncology", pmid: "23898464", doi: "10.3389/fonc.2013.00197", pmc: "PMC3724213" }
  ],

  bookChapters: [
    { year: 2014, type: "chapter", title: "Impact of aging and body mass on cancer immunotherapy outcomes", authors: "Sckisel GD, Monjazeb AM, Mirsoian A, Zamora AE, Grossenbacher SK, Murphy WJ", journal: "In R.C. Rees (ed.), Tumor Immunology and Immunotherapy, pp. 15–30. Oxford University Press" },
    { year: 2013, type: "chapter", title: "Impact of obesity and aging on the tumor immuno-environment", authors: "Mirsoian A, Sckisel GD, Zamora AE, Murphy WJ", journal: "In M.R. Shurin, V. Umansky & A. Malyguine (eds.), The Tumor Immunoenvironment, pp. 223–250. Springer" }
  ],

  /* Names bolded in author lists (current and former lab members). */
  highlightAuthors: ["Zamora AE", "Schmeling JL", "Colina AS", "Colina A", "Shah RK", "Cygan E", "Kozlik T", "Vargas-Cortes M"],

  /* ── Gallery ──────────────────────────────────────────────────────── */
  /*
    Add lab photos to /images and list them here (newest first works well).
    Optional `span`: "wide" (2 columns) or "tall" (2 rows) to vary the grid.
    Photos are shown at a 3-column grid on desktop and cropped to fit, so
    landscape or square photos look best.
  */
  gallery: [
    { image: "images/gallery/team-sequencing-room.webp", caption: "The Zamora Lab team.", span: "wide" },
    { image: "images/gallery/alfredo-beacon-platform.webp", caption: "Alfredo running a single-cell functional assay on the Beacon platform.", span: "tall" },
    { image: "images/gallery/team-photo-lab.webp", caption: "Team photo in the lab." },
    { image: "images/gallery/anand-sequencer.webp", caption: "Anand with the lab's sequencer." },
    { image: "images/gallery/madison-marathon-finish.webp", caption: "Lab runners after the Madison Marathon.", span: "tall" },
    { image: "images/gallery/alfredo-poster-car-t.webp", caption: "Alfredo presenting his poster on single-cell multimodal functional analysis of bispecific CD20/CD19 CAR T cells.", span: "wide" },
    { image: "images/gallery/jessica-talk-neoantigens.webp", caption: "Jessica presenting her work on the parameters that shape cancer-neoantigen immunogenicity." },
    { image: "images/gallery/team-with-sequencer.webp", caption: "Lab members with the Beacon platform.", span: "wide" },
    { image: "images/gallery/poster-session.webp", caption: "Poster session at a scientific meeting." },
    { image: "images/gallery/lab-birthday.webp", caption: "Celebrating a lab birthday.", span: "tall" },
    { image: "images/gallery/poster-presentation.webp", caption: "Poster presentation at a scientific meeting.", span: "wide" },
    { image: "images/gallery/lab-meeting-presentation.webp", caption: "Lab meeting." },
    { image: "images/gallery/bioinformatics-workshop.webp", caption: "Introduction to Bioinformatics workshop with the team." },
    { image: "images/gallery/team-working-session.webp", caption: "Working session in the conference room." },
    { image: "images/gallery/team-at-conference.webp", caption: "The team at a scientific conference." },
    { image: "images/gallery/conference-colleague.webp", caption: "Catching up at a conference." },
    { image: "images/gallery/team-night-out.webp", caption: "Off the clock with the team." },
    { image: "images/gallery/boston-colleagues.webp", caption: "With colleagues in Boston." },
    { image: "images/gallery/madison-marathon-medals.webp", caption: "Medals in hand at the Madison Marathon." },
    { image: "images/gallery/madison-marathon-race.webp", caption: "Race day at the Madison Marathon." },
    { image: "images/gallery/bike-ride.webp", caption: "Out for a bike ride." },
    { image: "images/gallery/team-collage.webp", caption: "Zamora Lab team collage.", span: "wide" }
  ],

  /* ── News (optional). Newest first. Leave empty [] to hide. ───────── */
  news: [
    { date: "2026-08", text: "New paper in Blood Advances on chronic xenogeneic GVHD limiting long-term CAR-T safety assessment in NSG mice." },
    { date: "2026-07", text: "Our study on intrinsic tumor cell line immunogenicity confounding CAR-T preclinical models is out in the Journal for ImmunoTherapy of Cancer." },
    { date: "2025-10", text: "SATB1 as a key regulator of quiescence in stem-like CD8+ T cells published in Nature Immunology." },
    { date: "2025-08", text: "The Zamora Lab opens at UC Davis School of Medicine in the Division of Malignant Hematology, Cellular Therapy & Transplantation." }
  ],

  /* ── Join ─────────────────────────────────────────────────────────── */
  join: {
    headline: "Interested in cancer immunology, cellular therapy, TCR biology, or single-cell science?",
    body: "We welcome inquiries from prospective trainees and collaborators whose interests overlap with our research. Please include a brief statement of interest and a CV when you reach out.",
    positions: [
      { title: "Postdoctoral fellows", text: "Candidates with a background in immunology, cancer biology, genomics, or computational biology. Experience with single-cell methods or T-cell engineering is a plus, not a requirement." },
      { title: "Graduate students", text: "Students in the UC Davis Graduate Group in Immunology and related programs are encouraged to reach out about rotations." },
      { title: "Undergraduates & staff", text: "Motivated undergraduates and research staff interested in wet-lab or computational projects are welcome to inquire about openings." },
      { title: "Collaborators", text: "We partner with clinical and basic-science groups on immune monitoring, TCR repertoire analysis, and single-cell functional profiling." }
    ]
  }
};
