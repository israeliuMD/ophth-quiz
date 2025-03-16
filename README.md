# ophth-quiz
game of mcqs from past exam powerpoints

# Ophthalmology MCQ Quiz

An interactive quiz application for ophthalmology examination preparation. This web-based application allows users to practice multiple-choice questions organized by topic and year.

## Features

- **Flexible Quiz Creation**: Select the number of questions you want from each topic and year
- **Interactive Experience**: Immediate feedback on answers
- **Review Mode**: Review your answers after completing the quiz
- **Score Tracking**: Keep track of your performance
- **Multilingual Support**: Questions in both English and Hebrew
- **Mobile Responsive**: Works on desktop and mobile devices

## Getting Started

### Online Version
Access the quiz online at [https://israeliumd.github.io/ophth-quiz/](https://israeliumd.github.io/ophth-quiz/)

### Local Installation
1. Clone this repository:


====================
2. Open `index.html` in your web browser.

No build process or server is required - this is a plain HTML/CSS/JavaScript application.

## Usage

1. **Select Quiz Content**: On the setup screen, choose how many questions you want from each topic and year.
2. **Start Quiz**: Click "Generate Quiz" to begin.
3. **Answer Questions**: Click on your chosen option.
4. **Navigate**: Use the Previous/Next buttons to navigate between questions.
5. **View Results**: See your score when you finish.
6. **Review Answers**: Review all questions with correct answers highlighted.

## Adding New Questions

Questions are stored in JavaScript format in the `js/data` directory. Each question follows this structure:

```javascript
{
"id": "unique-id",
"question": "The question text",
"options": [
 "Option 1",
 "Option 2",
 "Option 3",
 "Option 4"
],
"correctAnswer": 0, // Index of the correct option (0-based)
"explanation": "Explanation of the correct answer"
}
