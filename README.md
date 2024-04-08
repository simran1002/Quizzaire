# Quizzaire

This is a simple quiz application built with Node.js and Express. It allows users to take a quiz on different topics. After answering the questions, users can submit their answers and receive scroecard along with feedback on their performance.

## How to Run the Application Locally

Follow these steps to run the quiz application on your local machine:

1. **Clone the Repository**: 
Clone this repository to your local machine using the following command:
git clone <repository_url>

2. **Install Dependencies**:
Navigate to the project directory and install the dependencies by running:
npm install

3. **Start the Server**:
Start the Node.js server by running:
npm start

4. **Access the Application**:
Once the server is running, you can access the application in your web browser at:
http://localhost:3000

5. **Take the Quiz**:
Once the application is loaded, you can take the quiz by selecting answers for each question and clicking the "Submit Answers" button.

6. **View Quiz Result**:
After submitting your answers, you will receive a score and feedback on your performance. You can view the result on the same page.

## Technologies Used

- Node.js
- Express
- HTML
- CSS
- JavaScript

## Additional Information

- The quiz questions are stored in a JSON file (`questions.json`) and loaded dynamically by the server.
- Feedback on quiz performance is provided based on the correctness of answers submitted by the user.
- The application uses asynchronous requests to interact with the server and update the user interface dynamically.
