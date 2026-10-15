import { HuggingFaceProject } from '@/types/portfolio';

export const HUGGINGFACE_PROJECTS: HuggingFaceProject[] = [
  {
    title: "Thyroid Cancer Risk Prediction Model",
    description: "Interactive Machine Learning space designed to analyze patient clinical parameters and predict thyroid cancer risk probabilities using lightweight clinical ML models.",
    embedUrl: "https://embedologist-thyroid-cancer-risk-prediction.hf.space",
    tags: ["Machine Learning", "Oncology AI", "Clinical Decision Support", "Python", "Gradio"],
    metrics: "High sensitivity classification on validation cohorts"
  },
  {
    title: "PCOS Risk Predictor",
    description: "Interactive diagnostic AI platform for early evaluation of Polycystic Ovary Syndrome (PCOS) risk using multi-factor metabolic and hormonal indicators.",
    embedUrl: "https://embedologist-pcos-risk-predictor.hf.space",
    tags: ["Endocrinology AI", "Diagnostic Analytics", "Metabolic Risk", "Gradio", "HuggingFace"],
    metrics: "Optimized feature selection for early risk detection"
  }
];