// Quiz engine class
class QuizEngine {
    constructor(questionsDb) {
        this.questionsDb = questionsDb;
        this.selectedQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.score = 0;
    }

    // Get random questions from a category
    getRandomQuestions(category, count) {
        if (!this.questionsDb[category] || this.questionsDb[category].length === 0) {
            return [];
        }

        if (count >= this.questionsDb[category].length) {
            return [...this.questionsDb[category]]; // Return all questions if count is greater than available
        }
        
        const shuffled = [...this.questionsDb[category]];
        this.shuffleArray(shuffled);
        return shuffled.slice(0, count);
    }

    // Shuffle an array (Fisher-Yates algorithm)
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Prepare quiz with selected categories and counts
    prepareQuiz(categoryCounts) {
        this.selectedQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.score = 0;

        // Get questions from each category
        for (const category in categoryCounts) {
            if (categoryCounts[category] > 0) {
                const questions = this.getRandomQuestions(category, categoryCounts[category]);
                this.selectedQuestions = [...this.selectedQuestions, ...questions];
            }
        }

        // Shuffle all questions
        this.shuffleArray(this.selectedQuestions);
        
        return this.selectedQuestions.length > 0;
    }

    // Get current question
    getCurrentQuestion() {
        return this.selectedQuestions[this.currentQuestionIndex];
    }

    // Answer current question
    answerQuestion(optionIndex) {
        const question = this.getCurrentQuestion();
        if (question) {
            this.userAnswers[question.id] = optionIndex;
        }
    }

    // Move to next question
    nextQuestion() {
        if (this.currentQuestionIndex < this.selectedQuestions.length - 1) {
            this.currentQuestionIndex++;
            return true;
        }
        return false;
    }

    // Move to previous question
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            return true;
        }
        return false;
    }

    // Calculate score
    calculateScore() {
        this.score = 0;
        
        this.selectedQuestions.forEach(question => {
            if (this.userAnswers[question.id] === question.correctAnswer) {
                this.score++;
            }
        });
        
        return this.score;
    }

    // Get score as percentage
    getScorePercentage() {
        return Math.round((this.score / this.selectedQuestions.length) * 100);
    }

    // Check if a question has been answered
    isQuestionAnswered(questionId) {
        return this.userAnswers[questionId] !== undefined;
    }

    // Get user's answer for a question
    getUserAnswer(questionId) {
        return this.userAnswers[questionId];
    }

    // Check if user's answer is correct
    isAnswerCorrect(questionId) {
        const question = this.selectedQuestions.find(q => q.id === questionId);
        if (!question) return false;
        
        return this.userAnswers[questionId] === question.correctAnswer;
    }

    // Get total questions count
    getTotalQuestionsCount() {
        return this.selectedQuestions.length;
    }

    // Get current question index (1-based for display)
    getCurrentQuestionNumber() {
        return this.currentQuestionIndex + 1;
    }

    // Check if it's the first question
    isFirstQuestion() {
        return this.currentQuestionIndex === 0;
    }

    // Check if it's the last question
    isLastQuestion() {
        return this.currentQuestionIndex === this.selectedQuestions.length - 1;
    }
}
