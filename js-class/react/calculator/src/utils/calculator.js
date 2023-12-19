export const CATEGORIES = [
  {
    name: "Participation",
    weight: 0.1,
  },
  {
    name: "Coursework",
    weight: 0.2,
  },
  {
    name: "Midterm Project",
    weight: 0.15,
  },
  {
    name: "Final Project",
    weight: 0.3,
  },
  {
    name: "Final Exam",
    weight: 0.25,
  },
];

export const INITIAL_GRADES = CATEGORIES.map((e) => ({ ...e, value: 0 }));
