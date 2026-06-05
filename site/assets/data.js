/* =============================================================================
 *  YOUR CV CONTENT  —  edit this file, nothing else.
 *  Everything on the page is rendered from the object below.
 *  Auto-generated from your ~/repos; personal details are placeholders.
 * ============================================================================= */

window.CV = {
  /* ---- Who you are. EDIT the placeholders marked TODO. ---- */
  identity: {
    name: "Geri Capo",                                  // TODO confirm full name
    role: "Multidisciplinary Software & ML Engineer",
    tagline:
      "I build working systems across AI/LLMs, robotics, data engineering, and " +
      "visualization — and go deep enough in each to ship, evaluate, and verify, " +
      "not just prototype.",
    location: "City, Country",                          // TODO
    email: "geriicapo98@gmail.com",                     // TODO confirm / remove if you don't want it public
    available: "Open to opportunities",                 // TODO or set to "" to hide
    links: [
      { label: "github.com/gericapo98", href: "https://github.com/gericapo98", icon: "github" },
      { label: "github.com/0x000-byte", href: "https://github.com/0x000-byte", icon: "github" },
      { label: "Email", href: "mailto:geriicapo98@gmail.com", icon: "mail" },
      { label: "Download CV (PDF)", href: "cv-geri-capo.pdf", icon: "link" },
      // { label: "LinkedIn", href: "https://linkedin.com/in/you", icon: "link" },  // TODO add
    ],
  },

  /* ---- Fields of work. Each becomes a section of project cards. ---- */
  fields: [
    {
      id: "ai",
      name: "AI, LLMs & Applied GenAI",
      blurb:
        "Building and evaluating LLM-powered systems — reasoning, agents, NLP, " +
        "speech, and using generative models to drive real engineering pipelines.",
      skills: ["LLMs", "LangChain", "Hugging Face", "Ollama", "Apple MLX", "NLP", "ASR / Whisper"],
      projects: [
        {
          name: "modelica-genai-lab",
          featured: true,
          kind: "own",
          blurb:
            "Automated Modelica model generation, compilation & verification with GenAI. " +
            "Pipeline: prompt → .mo model → OpenModelica simulation → numeric comparison " +
            "(RMSE/tolerance) → optional STL property checks → deviation report.",
          tags: ["GenAI", "Modelica", "OMPython", "FMU/FMPy", "RTAMT (STL)", "Verification"],
          href: "https://github.com/gericapo98/modelica-genai-lab",
        },
        {
          name: "langchain-rpa-simkit",
          kind: "own",
          blurb:
            "LangChain toolkit that simulates RPA / agent workflows with typed " +
            "(pydantic) chains, packaged with uv and covered by tests.",
          tags: ["LangChain", "Agents", "Python", "pydantic"],
          href: "https://github.com/0x000-byte/langchain-rpa-simkit",
        },
        {
          name: "intent-engine",
          kind: "own",
          blurb:
            "Natural-language intent engine: candidate generation, NL parsing, and " +
            "ranking to map free text onto structured intents.",
          tags: ["NLP", "Intent detection", "Python"],
          href: "https://github.com/0x000-byte/intent-engine",
        },
        {
          name: "llms-lab",
          kind: "own",
          blurb:
            "Experiments in LLM reasoning — DeepSeek-Math evaluation and rStar " +
            "self-play reasoning tests.",
          tags: ["LLMs", "Reasoning", "Evaluation"],
          href: "https://github.com/gericapo98/llms-lab",
        },
        {
          name: "asr",
          kind: "own",
          blurb:
            "Whisper-based pipeline that transcribes lecture audio into aligned " +
            "SRT / VTT / TSV transcripts.",
          tags: ["ASR", "Whisper", "Python"],
          href: null,
        },
      ],
    },

    {
      id: "robotics",
      name: "Robotics & Autonomy",
      blurb:
        "ROS 2 robotics — reproducible setup, simulation workspaces, and an active " +
        "interest in navigation research.",
      skills: ["ROS 2 (Rolling)", "colcon", "Simulation", "Navigation"],
      projects: [
        {
          name: "ros2-common-setup",
          kind: "own",
          blurb: "Reusable ROS 2 Rolling environment setup, including bring-up on macOS.",
          tags: ["ROS 2", "DevOps", "macOS"],
          href: "https://github.com/0x000-byte/ros2-common-setup",
        },
        {
          name: "ros2_rolling_ws",
          kind: "own",
          blurb: "A ROS 2 Rolling colcon workspace (src / build / install) for experiments.",
          tags: ["ROS 2", "colcon", "Workspace"],
          href: null,
        },
        {
          name: "robot_sim",
          kind: "own",
          blurb: "A ROS 2 simulation playground for trying out robotics ideas.",
          tags: ["ROS 2", "Simulation"],
          href: null,
        },
      ],
    },

    {
      id: "data",
      name: "Data Engineering",
      blurb: "Lakehouse-style data pipelines and embedded analytical engines.",
      skills: ["DuckDB", "Apache Iceberg", "Docker Compose", "Python (uv)"],
      projects: [
        {
          name: "pyduck-iceberg",
          featured: true,
          kind: "own",
          blurb:
            "A DuckDB + Apache Iceberg lakehouse pipeline with a command-line interface " +
            "and a fully Dockerized stack.",
          tags: ["DuckDB", "Apache Iceberg", "Lakehouse", "CLI", "Docker"],
          href: "https://github.com/gericapo98/pyduck-iceberg",
        },
      ],
    },

    {
      id: "viz",
      name: "Data Visualization",
      blurb: "Turning data and abstract ideas into animations and plots.",
      skills: ["Manim", "Julia (Plots)", "Matplotlib", "SVG / motion"],
      projects: [
        {
          name: "visualization-lab",
          featured: true,
          kind: "own",
          blurb:
            "Hybrid toolkit for dynamic animations with Manim (Python) and plots with " +
            "Julia — built for explainers, demo videos, and interactive storytelling.",
          tags: ["Manim", "Julia", "Animation", "SVG"],
          href: "https://github.com/0x000-byte/visualization-lab",
        },
      ],
    },

    {
      id: "systems",
      name: "Systems, Security & Tooling",
      blurb:
        "Reproducible environments, network-security tooling, and pragmatic CLIs " +
        "that get a job done.",
      skills: ["Docker", "Linux / Ubuntu", "cloud-init", "Go", "Git", "Snort 3", "Zeek"],
      projects: [
        {
          name: "mangodex-client",
          kind: "own",
          blurb: "A Go command-line client for the MangaDex API.",
          tags: ["Go", "CLI", "REST API"],
          href: "https://github.com/gericapo98/mangadex-go-cli",
        },
        {
          name: "kahoot-dl",
          kind: "own",
          blurb: "Python tool to bulk-download all public Kahoot quizzes for a given creator.",
          tags: ["Python", "CLI", "Scraping"],
          href: null,
        },
        {
          name: "ubuntu-sandbox",
          kind: "own",
          blurb: "A reproducible Ubuntu development sandbox provisioned via cloud-init.",
          tags: ["Docker", "Linux", "IaC", "cloud-init"],
          href: "https://github.com/0x000-byte/ubuntu-sandbox",
        },
        {
          name: "my-latex-templates",
          kind: "own",
          blurb:
            "A curated, compile-tested collection of LaTeX templates (article, two-column " +
            "paper, Beamer, CV, thesis, and more).",
          tags: ["LaTeX", "Templates"],
          href: "https://github.com/gericapo98/my-latex-files",
        },
      ],
    },

    {
      id: "foundations",
      name: "Foundations & Explorations",
      blurb:
        "Academic grounding and side explorations — the breadth behind the projects.",
      skills: ["Clustering & EM", "Recommender systems", "mCRL2", "Unity / C#"],
      projects: [
        {
          name: "machine-learning",
          kind: "own",
          blurb:
            "ML coursework and notebooks covering clustering, expectation–maximization, " +
            "and supporting notes.",
          tags: ["ML", "Clustering", "EM", "Notebooks"],
          href: null,
        },
        {
          name: "resyst-study",
          kind: "own",
          blurb:
            "A self-built web study app (quiz + materials) for a Reactive Systems course.",
          tags: ["Web", "JavaScript", "Study tool"],
          href: null,
        },
        {
          name: "resys",
          kind: "own",
          blurb: "Reactive-systems modeling with mCRL2 — process algebra and model checking.",
          tags: ["mCRL2", "Formal Methods", "Model checking"],
          href: null,
        },
        {
          name: "MyUnityProject",
          kind: "own",
          blurb: "A Unity / C# sandbox for interactive 3D and game-development experiments.",
          tags: ["Unity", "C#", "Game Dev"],
          href: null,
        },
      ],
    },
  ],

  /* ---- Codebases & ecosystems you've STUDIED or USED (not authored). ---- */
  /* Kept honest and separate so nothing here is mistaken for your own work.  */
  ecosystems: {
    note: "Codebases and ecosystems I've studied, run, or contributed small fixes to — not authored.",
    groups: [
      {
        group: "LLM ecosystem",
        items: [
          { name: "Hugging Face Transformers", href: "https://github.com/huggingface/transformers" },
          { name: "Ollama", href: "https://github.com/ollama/ollama" },
          { name: "Apple MLX (mlx-lm)", href: "https://github.com/ml-explore/mlx-lm" },
        ],
      },
      {
        group: "Robotics research",
        items: [
          { name: "arena2d — 2D RL navigation", href: "https://github.com/ignc-research/arena2d" },
          { name: "flying_adversarial_patch — adversarial ML on UAVs", href: "https://github.com/IMRCLab/flying_adversarial_patch" },
        ],
      },
      {
        group: "Network security",
        items: [
          { name: "Snort 3 (IDS)", href: "https://github.com/snort3/snort3" },
          { name: "Zeek (network security monitor)", href: "https://zeek.org" },
        ],
      },
    ],
  },

  /* ---- Skills matrix. ---- */
  skills: [
    { group: "Languages", items: ["Python", "Go", "Julia", "C#", "JavaScript", "Bash", "C/C++", "LaTeX"] },
    { group: "AI / ML", items: ["LLMs", "LangChain", "Hugging Face Transformers", "Ollama", "Apple MLX", "NLP / intent parsing", "ASR (Whisper)", "Clustering & EM", "Recommender systems"] },
    { group: "Data", items: ["DuckDB", "Apache Iceberg", "Pandas", "NumPy", "Data pipelines", "uv packaging"] },
    { group: "Robotics", items: ["ROS 2 (Rolling)", "colcon", "Simulation", "Navigation (research)"] },
    { group: "Simulation & Verification", items: ["OpenModelica", "OMPython", "FMU / FMPy", "RTAMT (STL)", "mCRL2"] },
    { group: "Visualization", items: ["Manim", "Julia Plots", "Matplotlib", "SVG / motion"] },
    { group: "Systems & Security", items: ["Docker", "Linux / Ubuntu", "cloud-init", "macOS", "Git", "Snort 3 (IDS)", "Zeek (NSM)"] },
  ],
};
