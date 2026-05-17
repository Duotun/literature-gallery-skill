window.PAPER_LIBRARY = [
  {
    id: "xr-objects",
    title: "Augmented Object Intelligence with XR-Objects",
    authors: [
      "Mustafa Doga Dogan",
      "Eric J. Gonzalez",
      "Karan Ahuja",
      "Ruofei Du",
      "Andrea Colaco",
      "Johnny Lee",
      "Mar Gonzalez-Franco",
      "David Kim"
    ],
    year: 2024,
    venue: "UIST 2024",
    area: "Augmented Reality",
    keywords: ["XR", "Multimodal LLM", "Object Intelligence", "Spatial Computing"],
    cover: "assets/covers/papers/xr-objects.png",
    description: "Turns everyday physical objects into interactive XR entities using segmentation, classification, and multimodal LLMs.",
    abstract:
      "XR-Objects explores Augmented Object Intelligence, where analog objects become context-aware portals for information and digital actions. The prototype combines real-time object segmentation and classification with multimodal large language models, then exposes object-specific context menus that let users query, manipulate, and act on their surroundings without pre-registering objects.",
    notes: [
      "Good anchor paper for object-centered interaction in spatial computing.",
      "Useful for comparing MLLM-based context menus against conventional voice assistants."
    ],
    links: {
      paper: "https://arxiv.org/abs/2404.13274",
      project: "",
      code: ""
    },
    status: "to-read"
  },
  {
    id: "llmr",
    title: "LLMR: Real-time Prompting of Interactive Worlds using Large Language Models",
    authors: [
      "Fernanda De La Torre",
      "Cathy Mengying Fang",
      "Han Huang",
      "Andrzej Banburski-Fahey",
      "Judith Amores Fernandez",
      "Jaron Lanier"
    ],
    year: 2024,
    venue: "CHI 2024",
    area: "Mixed Reality Authoring",
    keywords: ["LLM", "Mixed Reality", "Interactive Worlds", "Unity"],
    cover: "assets/covers/papers/llmr.png",
    description: "Uses LLMs to create and modify interactive mixed-reality scenes in real time.",
    abstract:
      "LLMR is a framework for text-driven creation and editing of interactive mixed-reality worlds. It combines scene understanding, task planning, self-debugging, and memory management to generate Unity-based objects, tools, scenes, and behaviors, then evaluates the system across authoring tasks and a user study.",
    notes: [
      "Strong reference for LLM orchestration patterns in real-time immersive authoring.",
      "Pairs well with Dreamcrafter when comparing text-first and direct-manipulation workflows."
    ],
    links: {
      paper: "https://arxiv.org/abs/2309.12276",
      project: "",
      code: ""
    },
    status: "to-read"
  },
  {
    id: "sonifyar",
    title: "SonifyAR: Context-Aware Sound Generation in Augmented Reality",
    authors: ["Xia Su", "Jon E. Froehlich", "Eunyee Koh", "Chang Xiao"],
    year: 2024,
    venue: "UIST 2024",
    area: "Augmented Reality Audio",
    keywords: ["AR", "Sound Generation", "LLM", "Programming by Demonstration"],
    cover: "assets/covers/papers/sonifyar.png",
    description: "Generates context-aware sound effects for AR events from demonstrated interactions and scene context.",
    abstract:
      "SonifyAR addresses the lack of sound-authoring support in AR by collecting contextual information about virtual content, user actions, and real-world surroundings. It uses an LLM-based pipeline to recommend, retrieve, generate, or transfer sound effects for AR events, then studies the authoring workflow with example applications.",
    notes: [
      "Relevant for multimodal generative systems beyond visual content.",
      "Good example of using demonstration to collect context for later generation."
    ],
    links: {
      paper: "https://arxiv.org/abs/2405.07089",
      project: "https://makeabilitylab.cs.washington.edu/project/SonifyAR/",
      code: ""
    },
    status: "to-read"
  },
  {
    id: "caring-ai",
    title: "CARING-AI: Towards Authoring Context-aware Augmented Reality INstruction through Generative Artificial Intelligence",
    authors: ["Xingyu Li", "Ruyi Zheng", "Haijun Xia", "Brian A. Smith"],
    year: 2025,
    venue: "arXiv",
    area: "AR Instruction Authoring",
    keywords: ["AR", "Instruction", "Generative AI", "Context Awareness"],
    cover: "assets/covers/papers/caring-ai.png",
    description: "Explores generative-AI workflows for creating context-aware AR instructions.",
    abstract:
      "CARING-AI studies how generative artificial intelligence can support authoring augmented-reality instructions that adapt to context. The system direction is relevant for task guidance, training, and situated assistance where generated content needs to remain grounded in the user's physical environment.",
    notes: [
      "Useful for instruction-following and assistive MR workflows.",
      "Complements SonifyAR by focusing on generated guidance rather than generated audio."
    ],
    links: {
      paper: "https://arxiv.org/abs/2501.16557",
      project: "",
      code: ""
    },
    status: "to-read"
  },
  {
    id: "prop-chromeleon",
    title: "Prop-Chromeleon: Adaptive Haptic Props in Mixed Reality through Generative Artificial Intelligence",
    authors: ["Haoyu Wang", "Fengyuan Zhu", "Bingjian Huang", "Zhecheng Wang", "Ludwig Sidenmark"],
    year: 2026,
    venue: "DIS 2026",
    area: "Mixed Reality Haptics",
    keywords: ["MR", "Haptics", "Generative AI", "Passive Props"],
    cover: "assets/covers/papers/prop-chromeleon.png",
    description: "Transforms everyday objects into adaptive mixed-reality haptic props through prompt-guided generation.",
    abstract:
      "Prop-Chromeleon studies mixed-reality haptics by anchoring generated virtual assets to physical props. Its pipeline aligns user-prompted virtual content with object geometry, evaluates shape similarity and prompt fidelity, and studies whether shape-aware generation improves realism, immersion, and enjoyment.",
    notes: [
      "Recent example of generative AI constrained by physical geometry.",
      "Useful for haptics and visual-tactile consistency in MR."
    ],
    links: {
      paper: "https://arxiv.org/abs/2605.00804",
      project: "",
      code: ""
    },
    status: "to-read"
  },
  {
    id: "dreamcrafter",
    title: "Dreamcrafter: Immersive Editing of 3D Radiance Fields Through Flexible, Generative Inputs and Outputs",
    authors: [
      "Cyrus Vachha",
      "Yixiao Kang",
      "Zach Dive",
      "Ashwat Chidambaram",
      "Anik Gupta",
      "Eunice Jun",
      "Bjoern Hartmann"
    ],
    year: 2025,
    venue: "CHI 2025",
    area: "VR Scene Editing",
    keywords: ["VR", "3D Radiance Fields", "Generative AI", "Scene Editing"],
    cover: "assets/covers/papers/dreamcrafter.png",
    description: "Combines immersive direct manipulation with generative AI for real-time 3D radiance-field editing.",
    abstract:
      "Dreamcrafter is a VR-based scene-editing system for 3D radiance fields such as NeRFs and Gaussian splats. It integrates generative AI modules with direct manipulation, natural language, and proxy representations so users can continue interacting while high-latency generation and editing operations run.",
    notes: [
      "Important for control design in immersive generative tools.",
      "Proxy interaction is a useful pattern for handling slow generative operations."
    ],
    links: {
      paper: "https://arxiv.org/abs/2512.20129",
      project: "https://dream-crafter.github.io",
      code: ""
    },
    status: "to-read"
  },
  {
    id: "mixr",
    title: "MiXR: Harvesting and Recomposing Geometry from Real-World Objects for In-Situ 3D Design",
    authors: [
      "Faraz Faruqi",
      "Demircan Tas",
      "Arthur Caetano",
      "Niccolo Meniconi",
      "Oguz Arslan",
      "Misha Sra",
      "Ruofei Du",
      "Stefanie Mueller",
      "Mustafa Doga Dogan"
    ],
    year: 2026,
    venue: "arXiv",
    area: "In-Situ 3D Design",
    keywords: ["XR", "3D Generative AI", "Geometry Harvesting", "Direct Manipulation"],
    cover: "assets/covers/papers/mixr.png",
    description: "Lets users harvest real-world geometry in XR, recompose it directly, and refine the result with generative models.",
    abstract:
      "MiXR targets the control gap in text- and image-prompted 3D generation. Users extract segments from captured objects, assemble new designs through direct 3D manipulation, and then use generative AI to synthesize a coherent model from the user-defined spatial composition.",
    notes: [
      "Good contrast with prompt-only 3D generation systems.",
      "Shows how physical context can become editable geometry for generative workflows."
    ],
    links: {
      paper: "https://arxiv.org/abs/2605.09620",
      project: "",
      code: ""
    },
    status: "to-read"
  },
  {
    id: "thing2reality",
    title: "Thing2Reality: Transforming 2D Content into Conditioned Multiviews and 3D Gaussian Objects for XR Communication",
    authors: [
      "Erzhen Hu",
      "Mingyi Li",
      "Jungtaek Hong",
      "Xun Qian",
      "Alex Olwal",
      "David Kim",
      "Seongkook Heo",
      "Ruofei Du"
    ],
    year: 2024,
    venue: "arXiv",
    area: "XR Communication",
    keywords: ["XR", "3D Gaussian Objects", "Remote Collaboration", "Multiview Generation"],
    cover: "assets/covers/papers/thing2reality.png",
    description: "Converts shared 2D or physical content into manipulable 3D objects for immersive remote communication.",
    abstract:
      "Thing2Reality supports XR communication by letting participants materialize digital or physical items as conditioned multiview renderings or 3D Gaussian objects. The system helps collaborators spatially reference, manipulate, and discuss objects that would otherwise remain flat 2D artifacts.",
    notes: [
      "Relevant for collaborative MR and shared spatial references.",
      "Useful bridge between image-based generation and communication workflows."
    ],
    links: {
      paper: "https://arxiv.org/abs/2410.07119",
      project: "",
      code: ""
    },
    status: "to-read"
  },
  {
    id: "spaceblender",
    title: "SpaceBlender: Creating Context-Rich Collaborative Spaces Through Generative 3D Scene Blending",
    authors: [
      "Nels Numan",
      "Shwetha Rajaram",
      "Balasaravanan Thoravi Kumaravel",
      "Nicolai Marquardt",
      "Andrew D. Wilson"
    ],
    year: 2024,
    venue: "UIST 2024",
    area: "Collaborative VR",
    keywords: ["VR", "3D Scene Blending", "Diffusion", "Collaboration"],
    cover: "assets/covers/papers/spaceblender.png",
    description: "Blends users' physical surroundings into shared VR environments using generative 3D scene completion.",
    abstract:
      "SpaceBlender builds context-rich collaborative VR spaces from user-provided 2D images. Its pipeline estimates depth, aligns meshes, uses language and vision models to derive scene prompts, and applies diffusion-based completion to blend physical surroundings into a unified virtual environment for telepresence tasks.",
    notes: [
      "Strong paper for generative environment design with physical-context grounding.",
      "Evaluation connects generated spaces to collaborative task performance."
    ],
    links: {
      paper: "https://arxiv.org/abs/2409.13926",
      project: "https://nels.dev/publication/spaceblender/",
      code: ""
    },
    status: "to-read"
  },
  {
    id: "eye2eye",
    title: "Seeing Eye to Eye: Enabling Cognitive Alignment Through Shared First-Person Perspective in Human-AI Collaboration",
    authors: [
      "Zhuyu Teng",
      "Pei Chen",
      "Yichen Cai",
      "Ruoqing Lu",
      "Zhaoqu Jiang",
      "Jiayang Li",
      "Weitao You",
      "Lingyun Sun"
    ],
    year: 2026,
    venue: "CHI 2026",
    area: "Situated AR Collaboration",
    keywords: ["AR", "Multimodal AI", "First-Person Perspective", "Cognitive Alignment"],
    cover: "assets/covers/papers/eye2eye.png",
    description: "Uses a shared first-person AR perspective to align user intent, scene context, and AI assistance in collaborative tasks.",
    abstract:
      "Eye2Eye frames first-person perspective as a channel for cognitive alignment in human-AI collaboration. The AR prototype combines joint attention coordination, revisable memory, and reflective feedback so a large-model assistant can interpret embodied cues, maintain common ground, and refine its understanding during situated tasks.",
    notes: [
      "Representative anchor for Generative Situated XR because it ties multimodal AI to real-time embodied context.",
      "Good reference for studying communication gulfs, shared attention, and common-ground maintenance in AR assistants."
    ],
    links: {
      paper: "https://arxiv.org/abs/2603.12701",
      project: "",
      code: ""
    },
    status: "representative"
  }
];
