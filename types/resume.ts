export interface ResumeRoastResponse {
  score: number;
  breakdown: {
    skills: number;
    experience: number;
    keywords: number;
    structure: number;
    impact: number;
  };
  candidateName: string;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  hrRecommendation: string;
  suggestions: string[];
}
