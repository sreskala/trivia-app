import { Question } from "../data/questions";

export const getUniqueCategories = (questions: Question[]): string[] => {
    let uniqueArray = [...new Set(questions.map(({category})=>category))]
    uniqueArray.push("All Categories")
    
    return uniqueArray;
}