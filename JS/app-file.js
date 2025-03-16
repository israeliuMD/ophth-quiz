// Main application script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize quiz engine
    const quizEngine = new QuizEngine(questionsDb);
    
    // DOM elements
    const setupSection = document.querySelector('.setup-section');
    const quizSection = document.querySelector('.quiz-section');
    const resultsSection = document.querySelector('.results-section');
    const currentQuestionElement = document.getElementById('current-question');
    const progressBar = document.querySelector('.progress');
    const questionCounter = document.getElementById('question-counter');
    
    // Buttons
    const startQuizButton = document.getElementById('start-quiz');
    const prevQuestionButton = document.getElementById('prev-question');
    const nextQuestionButton = document.getElementById('next-question');
    const finishQuizButton = document.getElementById('finish-quiz');
    const reviewQuizButton = document.getElementById('review-quiz');
    const restartQuizButton = document.getElementById('restart-quiz');
    
    // Set up event listeners
    startQuizButton.addEventListener('click', startQuiz);
    prevQuestionButton.addEventListener('click', showPreviousQuestion);
    nextQuestionButton.addEventListener('click', showNextQuestion);
    finishQuizButton.addEventListener('click', finishQuiz);
    reviewQuizButton.addEventListener('click', reviewQuiz);
    restartQuizButton.addEventListener('click', restartQuiz);
    
    // Initialize available counts for each category
    updateAvailableCounts();
    
    // Update the question counter when inputs change
    const questionInputs = document.querySelectorAll('input[type="number"]');
    questionInputs.forEach(input => {
        input.addEventListener('change', updateTotalQuestionCount);
        input.addEventListener('input', updateTotalQuestionCount);
    });
    
    // Update total question count
    function updateTotalQuestionCount() {
        let total = 0;
        questionInputs.forEach(input => {
            total += parseInt(input.value) || 0;
        });
        questionCounter.textContent = total;
    }
    
    // Quiz functions
    function startQuiz() {
        // Collect category counts
        const categoryCounts = {};
        
        // Get all number inputs and their values
        const categoryInputs = document.querySelectorAll('input[type="number"]');
        categoryInputs.forEach(input => {
            const categoryId = input.id.replace('-count', '');
            const count = parseInt(input.value) || 0;
            categoryCounts[categoryId] = count;
        });
        
        // Check if at least one question is selected
        const totalQuestions = Object.values(categoryCounts).reduce((sum, count) => sum + count, 0);
        if (totalQuestions === 0) {
            alert("Please select at least one question to start the quiz.");
            return;
        }
        
        // Prepare quiz with selected categories
        const hasQuestions = quizEngine.prepareQuiz(categoryCounts);
        if (!hasQuestions) {
            alert("No questions available for the selected categories. Please try different selections.");
            return;
        }
        
        // Show quiz section and hide setup section
        setupSection.classList.add('hidden');
        quizSection.classList.remove('hidden');
        resultsSection.classList.add('hidden');
        
        // Display the first question
        displayCurrentQuestion();
    }
    
    function displayCurrentQuestion() {
        const question = quizEngine.getCurrentQuestion();
        
        // Update progress bar
        const progressPercentage = (quizEngine.getCurrentQuestionNumber() / quizEngine.getTotalQuestionsCount()) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        
        // Create question HTML
        let questionHTML = `
            <div class="question" data-id="${question.id}">
                <p><strong>Question ${quizEngine.getCurrentQuestionNumber()} of ${quizEngine.getTotalQuestionsCount()}:</strong></p>
                <p>${question.question}</p>
                <div class="options">
        `;
        
        // Add options
        question.options.forEach((option, index) => {
            const isSelected = quizEngine.getUserAnswer(question.id) === index;
            questionHTML += `
                <div class="option ${isSelected ? 'selected' : ''}" data-index="${index}">
                    ${String.fromCharCode(65 + index)}. ${option}
                </div>
            `;
        });
        
        // Add feedback and explanation containers
        questionHTML += `
                </div>
                <div class="feedback"></div>
                <div class="explanation">${question.explanation}</div>
            </div>
        `;
        
        // Set the HTML
        currentQuestionElement.innerHTML = questionHTML;
        
        // Add click event listeners to options
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', () => selectOption(option));
        });
        
        // Update navigation buttons
        updateNavigationButtons();
    }
    
    function selectOption(optionElement) {
        const questionId = optionElement.closest('.question').dataset.id;
        const optionIndex = parseInt(optionElement.dataset.index);
        
        // Remove selected class from all options
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Add selected class to clicked option
        optionElement.classList.add('selected');
        
        // Save user's answer
        quizEngine.answerQuestion(optionIndex);
    }
    
    function showPreviousQuestion() {
        if (quizEngine.previousQuestion()) {
            displayCurrentQuestion();
        }
    }
    
    function showNextQuestion() {
        if (quizEngine.nextQuestion()) {
            displayCurrentQuestion();
        }
    }
    
    function updateNavigationButtons() {
        // Previous button
        if (quizEngine.isFirstQuestion()) {
            prevQuestionButton.classList.add('hidden');
        } else {
            prevQuestionButton.classList.remove('hidden');
        }
        
        // Next/Finish buttons
        if (quizEngine.isLastQuestion()) {
            nextQuestionButton.classList.add('hidden');
            finishQuizButton.classList.remove('hidden');
        } else {
            nextQuestionButton.classList.remove('hidden');
            finishQuizButton.classList.add('hidden');
        }
    }
    
    function finishQuiz() {
        // Calculate score
        quizEngine.calculateScore();
        
        // Display results
        document.getElementById('final-score').textContent = quizEngine.getScorePercentage();
        document.getElementById('correct-count').textContent = 
            `You answered ${quizEngine.score} out of ${quizEngine.getTotalQuestionsCount()} questions correctly.`;
        
        // Show results section and hide quiz section
        quizSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
    }
    
    function reviewQuiz() {
        // Reset to the first question
        quizEngine.currentQuestionIndex = 0;
        
        // Show quiz section and hide results section
        quizSection.classList.remove('hidden');
        resultsSection.classList.add('hidden');
        
        // Display the first question with feedback
        displayReviewQuestion();
    }
    
    function displayReviewQuestion() {
        const question = quizEngine.getCurrentQuestion();
        
        // Update progress bar
        const progressPercentage = (quizEngine.getCurrentQuestionNumber() / quizEngine.getTotalQuestionsCount()) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        
        // Create question HTML
        let questionHTML = `
            <div class="question" data-id="${question.id}">
                <p><strong>Question ${quizEngine.getCurrentQuestionNumber()} of ${quizEngine.getTotalQuestionsCount()}:</strong></p>
                <p>${question.question}</p>
                <div class="options">
        `;
        
        // Add options with correct/incorrect highlighting
        question.options.forEach((option, index) => {
            const userAnswered = quizEngine.getUserAnswer(question.id) === index;
            const isCorrect = question.correctAnswer === index;
            
            let optionClass = '';
            if (userAnswered && isCorrect) {
                optionClass = 'selected correct';
            } else if (userAnswered && !isCorrect) {
                optionClass = 'selected incorrect';
            } else if (isCorrect) {
                optionClass = 'correct';
            }
            
            questionHTML += `
                <div class="option ${optionClass}" data-index="${index}">
                    ${String.fromCharCode(65 + index)}. ${option}
                </div>
            `;
        });
        
        // Add feedback
        const isCorrect = quizEngine.isAnswerCorrect(question.id);
        const feedbackClass = isCorrect ? 'correct-feedback' : 'incorrect-feedback';
        const feedbackText = isCorrect ? 'Correct!' : 'Incorrect';
        
        questionHTML += `
                </div>
                <div class="feedback ${feedbackClass}" style="display: block;">
                    ${feedbackText}
                </div>
                <div class="explanation" style="display: block;">${question.explanation}</div>
            </div>
        `;
        
        // Set the HTML
        currentQuestionElement.innerHTML = questionHTML;
        
        // Update navigation buttons for review mode
        updateReviewNavigationButtons();
    }
    
    function updateReviewNavigationButtons() {
        // Previous button
        if (quizEngine.isFirstQuestion()) {
            prevQuestionButton.classList.add('hidden');
        } else {
            prevQuestionButton.classList.remove('hidden');
        }
        
        // Next button
        if (quizEngine.isLastQuestion()) {
            nextQuestionButton.classList.add('hidden');
            finishQuizButton.classList.remove('hidden');
            finishQuizButton.textContent = 'Back to Results';
        } else {
            nextQuestionButton.classList.remove('hidden');
            finishQuizButton.classList.add('hidden');
        }
    }
    
    function showPreviousReviewQuestion() {
        if (quizEngine.previousQuestion()) {
            displayReviewQuestion();
        }
    }
    
    function showNextReviewQuestion() {
        if (quizEngine.nextQuestion()) {
            displayReviewQuestion();
        }
    }
    
    function restartQuiz() {
        // Show setup section and hide results section
        setupSection.classList.remove('hidden');
        resultsSection.classList.add('hidden');
    }
    
    // Modify event listeners for review mode
    prevQuestionButton.addEventListener('click', function() {
        if (resultsSection.classList.contains('hidden') && quizSection.classList.contains('hidden') === false) {
            // We're in quiz mode
            showPreviousQuestion();
        } else {
            // We're in review mode
            showPreviousReviewQuestion();
        }
    });
    
    nextQuestionButton.addEventListener('click', function() {
        if (resultsSection.classList.contains('hidden') && quizSection.classList.contains('hidden') === false) {
            // We're in quiz mode
            showNextQuestion();
        } else {
            // We're in review mode
            showNextReviewQuestion();
        }
    });
    
    finishQuizButton.addEventListener('click', function() {
        if (finishQuizButton.textContent === 'Back to Results') {
            // We're in review mode
            quizSection.classList.add('hidden');
            resultsSection.classList.remove('hidden');
        } else {
            // We're in quiz mode
            finishQuiz();
        }
    });
    
    // Update available questions counts
    function updateAvailableCounts() {
        const categoryInputs = document.querySelectorAll('input[type="number"]');
        categoryInputs.forEach(input => {
            const categoryId = input.id.replace('-count', '');
            const maxCount = questionsDb[categoryId] ? questionsDb[categoryId].length : 0;
            
            // Update max attribute
            input.setAttribute('max', maxCount);
            
            // Update displayed count
            const countSpan = input.nextElementSibling;
            if (countSpan) {
                countSpan.textContent = `/ ${maxCount} available`;
            }
            
            // Disable if no questions available
            if (maxCount === 0) {
                input.disabled = true;
                input.value = 0;
            }
        });
    }
});
