import { Experience } from '@/types/portfolio';

export const EXPERIENCES: Experience[] = [
  {
    company: "Dr. Reddy's Laboratories",
    role: "Lead Engineer - Capability Architect",
    location: "India",
    duration: "Oct 2023 - Present",
    description: [
      "Own end-to-end product lifecycle management for complex, multi-domain therapeutic devices, aligning mechanical, hardware, and software engineering teams around a unified roadmap.",
      "Serve as capability architect for technology transfers, translating R&D innovation into scalable, commercially viable products with global manufacturing partners.",
      "Define and drive V&V and EMC testing programs to ensure products meet quality, safety, and regulatory requirements ahead of launch.",
      "Manage multiple concurrent development programs, balancing innovation with schedule, cost, and design-control constraints in a regulated environment."
    ],
    technologies: ["Design Controls", "V&V", "EMC Testing", "Regulatory Compliance", "Cross-Domain Hardware/Software Integration"],
    impact: "Accelerated commercial transfer readiness for multi-domain digital therapeutic platforms."
  },
  {
    company: "Oxstren Wearable Tech",
    role: "Chief Technology Officer",
    location: "India",
    duration: "Feb 2014 - Sep 2023",
    description: [
      "Owned technology and product strategy for a wearable and diagnostic AI startup, defining vision, roadmap, and execution from the ground up, scaling core product lines from 0 to 1.",
      "Led full product lifecycle—market discovery, requirements, design, development, validation, and launch—for AI/ML-enabled wearable and diagnostic products.",
      "Built and mentored cross-functional teams spanning hardware, embedded software, AI/ML, and systems integration.",
      "Directed integration of multi-disciplinary stacks (sensors, embedded systems, cloud, AI/ML) into cohesive data-driven healthcare experiences.",
      "Established supplier networks and OEM/ODM partnerships to scale products from prototype to mass production."
    ],
    technologies: ["AI/ML", "BLE/NFC", "Google Vertex AI", "AWS", "BioMEMS", "Embedded Systems", "OEM/ODM Sourcing"],
    impact: "Scaled startup from concept to commercial delivery; achieved 30% improvement in patient engagement."
  },
  {
    company: "Mumbai University",
    role: "Research Associate",
    location: "Mumbai, India",
    duration: "Jul 2012 - Jan 2014",
    description: [
      "Led early-stage research and product discovery initiatives in BioMEMS and advanced instrumentation.",
      "Mentored engineering teams and drove IP creation across multiple student-led product projects."
    ],
    technologies: ["BioMEMS", "Advanced Instrumentation", "Biomedical Systems", "IP Creation"],
    impact: "Fostered innovation pipeline and multi-project patent strategy."
  },
  {
    company: "AGD Biomedicals",
    role: "Embedded Application Engineer",
    location: "India",
    duration: "Jul 2011 - Jun 2012",
    description: [
      "Engineered embedded hardware architecture and firmware for diagnostic products, improving performance and time-to-market.",
      "Delivered an embedded Linux-based blood cell counter and integrated cloud connectivity for scalable data-driven healthcare."
    ],
    technologies: ["Embedded Linux", "Firmware Engineering", "Diagnostic Hardware", "IoT Cloud Connectivity"],
    impact: "Successfully delivered 5-part blood cell counter firmware and hardware integration."
  }
];