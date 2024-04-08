const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Load quiz questions from JSON file
const quizQuestions = JSON.parse(fs.readFileSync('quizQuestions.json', 'utf8'));

// Serve quiz questions
app.get('/quiz', (req, res) => {
  res.json(quizQuestions);
});

// Submit quiz answers
app.post('/submit', (req, res) => {
  const userAnswers = req.body.answers;
  if (!userAnswers || !Array.isArray(userAnswers) || userAnswers.length !== quizQuestions.length) {
    res.status(400).json({ error: 'Invalid submission format' });
    return;
  }

  let score = 0;
  const feedback = [];

  quizQuestions.forEach((question, index) => {
    if (userAnswers[index] === question.correctAnswer) {
      score++;
      feedback.push({ question: question.question, result: 'correct' });
    } else {
      feedback.push({ question: question.question, result: 'incorrect', correctAnswer: question.correctAnswer });
    }
  });

  res.json({ score, feedback });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
