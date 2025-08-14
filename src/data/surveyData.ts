export interface SurveyDataPoint {
  heading: string;
  text: string;
  hasGraph: boolean;
  graph?: {
    title: string;
    data: Array<{
      label: string;
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
  },
  {
    heading: "97%",
    text: "97% of those who completed the program rated CCA strongly/highly professional",
    hasGraph: true,
    graph: {
      title: "Service level",
      data: [
        { label: "Satisfactory", value: 3, color: "#ff6b6b" },
        { label: "Strong in most areas", value: 26, color: "#4ecdc4" },
        { label: "Highly professional and polished", value: 71, color: "#004146" },
      ],
    },
  },
  {
    heading: "92%",
    text: "92% found the program fairly easy or easy to adhere to",
    hasGraph: true,
    graph: {
      title: "Difficulty",
      data: [
        { label: "Had trouble adhering to the program", value: 8, color: "#ff6b6b" },
        { label: "Fairly easy", value: 23, color: "#4ecdc4" },
        { label: "Very easy", value: 69, color: "#004146" },
      ],
    },
  },
  {
    heading: "97%",
    text: "97% said their individual needs were supported",
    hasGraph: true,
    graph: {
      title: "Individual needs",
      data: [
        { label: "Didn't fit my individual needs", value: 3, color: "#ff6b6b" },
        { label: "Yes - in most ways", value: 26, color: "#4ecdc4" },
        { label: "Yes - very much so", value: 71, color: "#004146" },
      ],
    },
  },
  {
    heading: "95%",
    text: "95% would recommend the program to others",
    hasGraph: true,
    graph: {
      title: "Recommendation",
      data: [
        { label: "Would not recommend", value: 0, color: "#ff6b6b" },
        { label: "May recommend", value: 5, color: "#4ecdc4" },
        { label: "Yes - would recommend", value: 95, color: "#004146" },
      ],
    },
  },
  {
    heading: "88%",
    text: "88% were able to specify one symptom of improvement. 61% nominated two or more improved symptoms",
    hasGraph: false,
  },
  {
    heading: "99%",
    text: "99% say the program added value or 'significant value' to their health and quality of life",
    hasGraph: true,
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