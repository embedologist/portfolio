import { Project } from '@/types/portfolio';

export const PROJECTS: Project[] = [
  {
    title: "Sub-512MB Multimodal Edge Cardiology AI Model (Cardiac SLM)",
    duration: "6 months",
    category: "Edge AI & Small Language Models",
    badge: "Featured Edge AI • Open Sourced",
    link: "https://huggingface.co/litert-community/Cardiac_micro_model_Android_Wear",
    description: "Architected and open-sourced cardiac SLM, an edge-native multimodal cardiology AI model designed specifically for Wear OS smartwatches and mobile devices operating under strict constraints (<340MB RAM).",
    highlights: [
      "Built a lightweight 1D Conformer encoder processing 25Hz PPG signals to classify 5 cardiac rhythms with 97% accuracy and <10ms inference latency.",
      "Integrated biosignals via cross-attention into a 4-bit student LLM with on-device clinical RAG (1,500 clinical guidelines).",
      "Optimized for Google LiteRT (Android NNAPI) for real-time, ultra-low-power on-device cardiac triage without cloud dependency.",
      "Published and open-sourced to the community on Hugging Face LiteRT Community."
    ],
    technologies: ["Google LiteRT", "Android NNAPI", "Edge SLM / LLM", "1D Conformer", "PPG Signal Processing", "4-Bit Quantization", "On-Device RAG", "Wear OS"],
    impact: "97% classification accuracy and <10ms latency running locally within <340MB RAM on Wear OS."
  },
  {
    title: "AI-Based Human Metabolism Monitoring & Recommendation Platform",
    duration: "36 months",
    category: "Edge AI & Health Platforms",
    badge: "Multimodal Edge AI",
    description: "Owned product strategy, architecture, and delivery for an AI-driven human metabolism monitoring platform combining edge-processed biosignals on mobile devices with cloud analytics.",
    highlights: [
      "Directed integration of multi-source biosignal data (ECG, SpO2, Continuous Glucose Monitoring - CGM) over low-power BLE/NFC pipelines.",
      "Deployed Edge AI algorithms directly on mobile apps for real-time anomaly detection, filtering, and latency-free patient insights.",
      "Integrated Google Vertex AI cloud pipelines for deep longitudinal metabolic digital twin modeling and personalized clinical recommendations."
    ],
    technologies: ["Edge AI (Mobile)", "Google Vertex AI", "BLE / NFC", "ECG / SpO2 / CGM Biosignals", "Digital Twins", "Real-Time Telemetry"],
    impact: "30% improvement in patient engagement and 25% increase in monitoring accuracy for proactive metabolic care."
  },
  {
    title: "AI-Based Exercise Analysis & Form-Correction Platform",
    duration: "24 months",
    category: "Computer Vision & Edge AI",
    badge: "Computer Vision Edge AI",
    description: "Directed product and engineering delivery for a real-time computer vision physiotherapy platform shipping an early on-device AI co-pilot product experience for rehabilitation.",
    highlights: [
      "Delivered real-time computer vision tracking of 32 anatomical body joints across iOS and Android using Google LiteRT.",
      "Created an early AI co-pilot experience providing immediate voice and visual feedback on biomechanical form with zero cloud lag.",
      "Tailored pose-estimation models and clinical form-scoring algorithms to assist physical therapists and patients."
    ],
    technologies: ["Google LiteRT", "Computer Vision", "32-Joint Pose Tracking", "Edge Neural Networks", "Real-Time Audio/Visual Feedback", "iOS/Android"],
    impact: "Shipped production camera-based AI coaching co-pilot delivering real-time physiotherapy form correction."
  },
  {
    title: "Medical-Grade Wearable ECG & SpO2 Measurement Device",
    duration: "18 months",
    category: "TinyML & Wearables",
    badge: "TinyML & Biosensors",
    description: "Owned product design and go-to-market for a medical-grade TinyML-capable wearable ECG/SpO2 device across chest bands and smartwatches.",
    highlights: [
      "Designed and deployed TinyML inference models on resource-constrained microcontrollers for real-time arrhythmia filtering.",
      "Engineered secure BLE transmission pipelines to companion mobile applications for clinical review and cloud telemetry.",
      "Navigated regulatory-grade biosensing standards for commercial deployment across Indian and US markets."
    ],
    technologies: ["TinyML", "Medical-Grade ECG", "SpO2 Pulse Oximetry", "Microcontroller Firmware", "Secure BLE Pipeline", "Chest Bands & Smartwatches"],
    impact: "Commercialized medical-grade TinyML wearable diagnostic hardware across international markets."
  },
  {
    title: "Design & Development of Wearable Health Monitoring Devices",
    duration: "30 months",
    category: "Wearable Hardware & Ecosystem",
    badge: "0-to-1 Wearable Systems",
    description: "Designed and developed wearable smartwatches and heart rate monitors for continuous health tracking, leading the complete product lifecycle from concept to mass production.",
    highlights: [
      "Led entire product lifecycle including ideation, industrial design, electronic hardware, firmware, and companion mobile apps.",
      "Directed ODM manufacturing partnerships and international supply chains for high-volume consumer and healthcare scaling.",
      "Integrated continuous optical heart-rate monitoring (PPG) algorithms and low-power power management systems."
    ],
    technologies: ["Smartwatch Architecture", "Optical PPG Sensors", "ODM Manufacturing", "Embedded C/Firmware", "Mobile Companion Apps", "Power Management"],
    impact: "Scaled multiple smartwatch product lines from 0 to 1 with global ODM manufacturing."
  },
  {
    title: "COGS Optimization of Digital Therapeutic Device",
    duration: "24 months",
    category: "Medical Devices & Therapeutics",
    badge: "Medical Device Scaling",
    description: "Led a cross-functional redesign to optimize manufacturing cost while preserving clinical efficacy and performance for Edge AI driven prescription medical devices.",
    highlights: [
      "Streamlined Bill of Materials (BOM) and coordinated global component sourcing to reduce lead times and supply risks.",
      "Established scalable mass manufacturing in partnership with the world's largest medical device manufacturer.",
      "Delivered significant cost savings while maintaining strict device quality, biocompatibility, and tolerance standards."
    ],
    technologies: ["BOM Optimization", "Global Sourcing", "Edge AI Medical Hardware", "Design for Manufacturing (DfM)", "Global Scale Production"],
    impact: "Substantial COGS reduction and lead-time optimization enabling mass-scale commercialization."
  },
  {
    title: "Digital Therapeutic SaMD & SiMD Systems Management & Compliance",
    duration: "10 months",
    category: "Regulatory & Quality Systems",
    badge: "Regulatory & Quality",
    description: "Owned end-to-end product lifecycle engineering and technical management for digital therapeutic SaMD and SiMD devices across strict regulatory boundaries.",
    highlights: [
      "Led Verification and Validation (V&V), Electromagnetic Compatibility (EMC) testing, and comprehensive risk analyses.",
      "Achieved FDA design controls readiness in full compliance with ISO 13485 and IEC 60601 medical device standards.",
      "Aligned software architecture, embedded firmware, and clinical documentation for audit-proof submissions."
    ],
    technologies: ["SaMD & SiMD", "FDA Design Controls", "ISO 13485", "IEC 60601", "EMC Testing", "V&V Protocols"],
    impact: "Ensured full audit readiness and international regulatory compliance for prescription therapeutic programs."
  },
  {
    title: "Human Body Composition Analyzer (Bioimpedance)",
    duration: "24 months",
    category: "Diagnostic Instrumentation",
    badge: "Bioimpedance Instrumentation",
    description: "Led end-to-end development of a multi-frequency bioimpedance body composition analyzer in collaboration with CDMO partners in China.",
    highlights: [
      "Engineered precision bioimpedance spectroscopy hardware, analog front-end signal conditioning, and calibration firmware.",
      "Partnered with CDMOs in China to scale manufacturing quality, optimize injection molding, and refine PCB assembly.",
      "Integrated companion smartphone application for body fat, muscle mass, and visceral fat trend analytics."
    ],
    technologies: ["Bioimpedance Spectroscopy", "CDMO Partnerships", "Analog Front-End", "Firmware Calibration", "Hardware DfM"],
    impact: "20% improvement in measurement reliability and 15% reduction in unit production costs."
  },
  {
    title: "5-Part Blood Cell Counter (Hematology)",
    duration: "10 months",
    category: "Diagnostic Instrumentation",
    badge: "Embedded Diagnostics",
    description: "Delivered an embedded Linux-based 5-part hematology blood cell counter from hardware architecture and firmware through manufacturing readiness.",
    highlights: [
      "Engineered high-reliability embedded Linux software and signal processing calibration for microfluidic cell sensing.",
      "Integrated early cloud connectivity for centralized laboratory telemetry, automated reporting, and QC management.",
      "Completed full design verification and clinical laboratory compliance transfer for commercial release."
    ],
    technologies: ["Embedded Linux", "Hematology Diagnostics", "Microfluidics Signal Processing", "Firmware Architecture", "Cloud Connectivity"],
    impact: "Successfully delivered cloud-connected 5-part hematology analyzer ready for commercial manufacturing."
  }
];