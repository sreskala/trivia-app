export interface Question {
    id: number;
    category: string;
    prompt: string;
    possibleAnswers: string[];
}
  
export const questionsArray: Question[] = [
    {
      id: 1,
      category: "The Solar System",
      prompt:
        `Who is credited with the discovery that Jupiter has moons, 
        the planet’s four largest moons now being collectively named after him?`,
      possibleAnswers: ["galileo", "galileo galilei"],
    },
    {
        id: 2,
        category: "The Solar System",
        prompt: "What forms clouds on both Uranus and Neptune?",
        possibleAnswers: ["methane"]
    },
    {
        id: 3,
        category: "The Solar System",
        prompt: `The Trojans are a group of asteroids that orbit in a 
        gravitationally neutral area between Jupiter and Saturn. 
        What is the inappropriate name borne by the first Trojan to be discovered in 1906?`,
        possibleAnswers: ["achilles"]
    },
    {
        id: 4,
        category: "test category",
        prompt: 'this is just a test!!',
        possibleAnswers: ['ok']
    }, {
        id: 5,
        category: "Sam Reskala",
        prompt: 'What is my favorite food?',
        possibleAnswers: ["wings", "pizza", "beer"]
    }, {
        id: 6,
        category: "Sam Reskala",
        prompt: "What is my favorite movie?",
        possibleAnswers: ["Forest Gump", "Inglorious Basterds"]
    }
];
  