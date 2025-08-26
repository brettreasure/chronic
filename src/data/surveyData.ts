export interface SurveyDataPoint {
  heading: string;
  text: string;
  hasGraph: boolean;
  variant?: 'default' | 'dark-cyan' | 'double-border';
  isVerticalChart?: boolean;
  footnote?: string;
  graph?: {
    title: string;
    data: Array<{
      label: string;
      description?: string;
      value: number;
      color?: string;
    }>;
  };
}

export const surveyData: SurveyDataPoint[] = [
  {
    heading: "84%",
    text: "84% of participants completed the program",
    hasGraph: false,
    variant: "double-border",
    footnote: "*Attended 80% + of prescribed exercise sessions during the program.",
  },
  {
    heading: "97%",
    text: "97% of those who completed the program rated CCA strongly/highly professional",
    hasGraph: true,
    variant: "dark-cyan",
    graph: {
      title: "Service level",
      data: [
        { label: "Satisfactory", description: "Satisfactory", value: 3, color: "#ff6b6b" },
        { label: "Strong in most areas", description: "Strong in most areas", value: 26, color: "#4ecdc4" },
        { label: "Highly professional", description: "Highly professional and polished", value: 71, color: "#004146" },
      ],
    },
  },
  {
    heading: "92%",
    text: "92% found the program fairly easy\nor easy to adhere to",
    hasGraph: true,
    variant: "dark-cyan",
    footnote: "*The right dose of exercise medicine at the right time, for the right reason, has been proved more effective than some prescriptive drugs. Getting the dose right and ensuring compliance are vital for high value outcomes.",
    graph: {
      title: "Difficulty",
      data: [
        { label: "Had trouble", description: "Had trouble adhering to the program", value: 8, color: "#ff6b6b" },
        { label: "Fairly easy", description: "Fairly easy", value: 23, color: "#4ecdc4" },
        { label: "Very easy", description: "Very easy", value: 69, color: "#004146" },
      ],
    },
  },
  {
    heading: "95%",
    text: "95% would recommend the program to others",
    hasGraph: true,
    variant: "dark-cyan",
    graph: {
      title: "Recommendation",
      data: [
        { label: "Won't recommend", description: "Would not recommend", value: 0, color: "#ff6b6b" },
        { label: "May recommend", description: "May recommend", value: 5, color: "#4ecdc4" },
        { label: "Yes - would recommend", description: "Yes - would recommend", value: 95, color: "#004146" },
      ],
    },
  },
  {
    heading: "88%",
    text: "88% were able to specify one symptom of improvement. 61% nominated two or more improved symptoms",
    hasGraph: true,
    variant: "dark-cyan",
    isVerticalChart: true,
    graph: {
      title: "Improved symptoms",
      data: [
        { label: "One or more symptoms", value: 88, color: "#8B1538" },
        { label: "Two or more symptoms", value: 61, color: "#8B1538" },
      ],
    },
  },
  {
    heading: "99%",
    text: "99% say the program added value or 'significant value' to their health and quality of life",
    hasGraph: true,
    variant: "dark-cyan",
    graph: {
      title: "Significance",
      data: [
        { label: "No value", value: 1, color: "#ff6b6b" },
        { label: "Some value", value: 42, color: "#4ecdc4" },
        { label: "Significant value", value: 57, color: "#004146" },
      ],
    },
  },
];