import { Question } from '../data/questions'

export const getRandomQuestions = (questions: Question[], limit?: number, category?: string) => {
    if(category) {
        questions = questions.filter(question => question.category?.toLowerCase() === category.toLowerCase())
    }

    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }

    return questions.slice(0, limit ?? questions.length);
}