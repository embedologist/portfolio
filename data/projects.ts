import { Project } from '@/types/portfolio';

export const PROJECTS: Project[] = [
  {
    title: "AI-Based Human Metabolism Monitoring & Recommendation Platform",
    duration: "36 months",
    description: "Owned product strategy and delivery for an AI-driven metabolism monitoring platform, defining requirements and roadmap for personalized health insights.",
    highlights: [
      "Directed integration of multi-source biosignal data (ECG, SpO2, CGM) via BLE/NFC into a unified mobile application.",
      "Partnered with engineering to build secure, cloud-based analytics on Google Vertex AI.",
      "Transformed multimodal biosignal health data into clinically actionable real-time recommendations."
    ],
    technologies: ["Google Vertex AI", "BLE / NFC", "ECG / SpO2 / CGM Biosignals", "Cloud Analytics"],
    impact: "30% improvement in patient engagement and monitoring accuracy, strengthening early detection."
  },
  {
    title: "COGS Optimization of Digital Therapeutic Device",
    duration: "24 months",
    description: "Led cross-functional redesign of a wearable digital therapeutic device to optimize manufacturing cost while preserving quality and performance.",
    highlights: [
      "Streamlined Bill of Materials (BOM) and coordinated global sourcing to drastically cut lead times.",
      "Established scalable manufacturing in partnership with the world's largest device manufacturer."
    ],
    technologies: ["BOM Optimization", "Global Sourcing", "DfM (Design for Manufacturing)", "Quality Assurance"],
    impact: "Significant COGS reduction and establishment of global-scale mass production."
  },
  {
    title: "Wearable ECG & SpO2 Measurement Device",
    duration: "36 months",
    description: "Owned product design and go-to-market for a medical-grade wearable ECG/SpO2 device targeting Indian and US markets.",
    highlights: [
      "Spanned multiple ergonomic form factors including chest bands and smartwatches.",
      "Directed secure BLE data pipeline to companion mobile application for clinical review and cloud storage."
    ],
    technologies: ["BLE Data Pipeline", "ECG Sensors", "SpO2 Analytics", "FDA / Medical Compliance Readiness"],
    impact: "Successfully commercialized cross-market wearable diagnostic hardware."
  },
  {
    title: "Human Body Composition Analyzer",
    duration: "30 months",
    description: "Led end-to-end product development of a bioimpedance-based body composition analyzer from hardware/firmware through companion app.",
    highlights: [
      "Partnered with CDMOs in China to scale manufacturing quality and efficiency.",
      "Engineered high-accuracy bioimpedance measurement firmware and calibration software."
    ],
    technologies: ["Bioimpedance Instrumentation", "CDMO Partnerships", "Firmware Engineering", "iOS/Android Apps"],
    impact: "20% improvement in measurement reliability and 15% reduction in unit production costs."
  },
  {
    title: "AI-Based Exercise Analysis Platform",
    duration: "24 months",
    description: "Directed development of a computer-vision AI product for real-time physiotherapy exercise analysis and automated form correction.",
    highlights: [
      "Delivered computer-vision tracking of 32 body joints across iOS and Android.",
      "Created an early AI-copilot experience with real-time voice and visual feedback."
    ],
    technologies: ["Computer Vision", "Joint Pose Estimation (32 Joints)", "Mobile AI Deployment", "Real-Time Speech UI"],
    impact: "High user retention AI physiotherapy copilot with real-time feedback."
  },
  {
    title: "5-Part Blood Cell Counter",
    duration: "12 months",
    description: "Led product and engineering delivery of an embedded Linux-based diagnostic system from hardware architecture through calibration and validation.",
    highlights: [
      "Engineered high-reliability embedded system software and signal processing calibration.",
      "Prepared full manufacturing transfer and clinical compliance verification."
    ],
    technologies: ["Embedded Linux", "Microfluidics Signal Processing", "Clinical Validation", "Hardware Design"],
    impact: "Successful launch of commercial 5-part hematology analyzer."
  }
];