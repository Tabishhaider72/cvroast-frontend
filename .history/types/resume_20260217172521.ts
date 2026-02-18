export interface ResumeRoastResponse {
  score: number;
  breakdown: {
    skills: number;
    experience: number;
    keywords: number;
    structure: number;
    impact: number;
  };
  summary: string;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
}
