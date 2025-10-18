    // Trivia game implementation (cleaned comments for readability)

    class TriviaGame {
        /**
         * @param {Array} questions - Array of { question, options, answer } objects
         * @param {number} timeLimit - Seconds allowed per question
         */
        constructor(questions, timeLimit) {
            this.questions = questions;
            this.timeLimit = timeLimit;
            this.currentQuestionIndex = 0;
            this.score = 0;
            this.timer = null;
        }

        // Begin the game and ask the first question
        startGame() {
            console.log("Welcome to the Trivia Game!");
            this.askQuestion();
        }

        // Display the current question and options, then start the timer
        askQuestion() {
            if (this.currentQuestionIndex < this.questions.length) {
                const question = this.questions[this.currentQuestionIndex];
                console.log(`Question ${this.currentQuestionIndex + 1}: ${question.question}`);
                question.options.forEach((option, index) => {
                    console.log(`${index + 1}. ${option}`);
                });
                this.startTimer();
            } else {
                this.endGame();
            }
        }

        // Start or restart the per-question countdown
        startTimer() {
            let timeLeft = this.timeLimit;
            console.log(`⏱️  You have ${timeLeft} seconds to answer.`);

            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }

            this.timer = setInterval(() => {
                timeLeft--;
                if (timeLeft > 0 && timeLeft <= 5) {
                    console.log(`⏰ ${timeLeft} seconds remaining...`);
                }
                if (timeLeft <= 0) {
                    clearInterval(this.timer);
                    this.timer = null;
                    console.log("⏰ Time's up!");
                    this.checkAnswer(null); // treated as no answer
                }
            }, 1000);
        }

        /**
         * Validate the player's answer for the current question.
         * @param {number|null} answer - 1-based choice number or null if timed out/no answer
         */
        checkAnswer(answer) {
            if (this.currentQuestionIndex >= this.questions.length) return;

            // Stop the timer immediately when an answer is submitted
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }

            const question = this.questions[this.currentQuestionIndex];
            
            if (answer === null) {
                console.log(`⏰ Time's up! The correct answer was: ${question.answer}`);
            } else if (question && question.options[answer - 1] === question.answer) {
                console.log("✅ Correct!");
                this.score++;
            } else {
                console.log(`❌ Incorrect! You chose: ${question.options[answer - 1]}`);
                console.log(`The correct answer was: ${question.answer}`);
            }

            console.log(`Current score: ${this.score}/${this.currentQuestionIndex + 1}\n`);
            
            this.currentQuestionIndex++;
            
            // Add a small delay before asking the next question for better readability
            setTimeout(() => this.askQuestion(), 1500);
        }

        // Show final score
        endGame() {
            console.log(`Game over! Your final score is: ${this.score}/${this.questions.length}`);
        }
    }


