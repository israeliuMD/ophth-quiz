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
Access the quiz online at [your-github-pages-url] (once deployed).

### Local Installation
1. Clone this repository:
   ```
   git clone https://github.com/your-username/ophth-quiz.git
   ```

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

Questions are stored in JSON format in the `data` directory. Each question follows this structure:

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
```

To add new questions:

1. Create or edit the appropriate file in the `data` directory
2. Ensure the questions follow the format above
3. Update the `questions.js` file to include your new data file

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

* Created for ophthalmology residents preparing for exams
* Based on real exam questions from 2017-2019
