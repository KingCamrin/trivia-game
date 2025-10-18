# 🎯 Trivia CLI Game

A fun, interactive command-line trivia game built with Node.js. Test your knowledge with timed questions and get instant feedback on your answers!

## 🚀 Features

- ⏱️ **Timed Questions**: 30 seconds per question with countdown warnings
- 🎯 **Multiple Choice**: Choose from 4 options for each question
- ✅ **Instant Feedback**: Get immediate results (correct ✅, incorrect ❌, or timeout ⏰)
- 📊 **Score Tracking**: See your running score and final results
- 🛑 **Smart Timer**: Timer stops immediately when you submit an answer

## 📋 Requirements

- **Node.js** (version 12 or higher)
- **Terminal/Command Line** access

## 🛠️ Installation

1. **Clone or download** this repository
2. **Navigate** to the project directory:
   ```bash
   cd travia-cli
   ```

## 🎮 How to Play

### Quick Start
```bash
node src/travia.js
```

### Game Flow
1. **Start**: Run the game and see the welcome message
2. **Questions**: Each question displays:
   - Question text
   - 4 multiple choice options (numbered 1-4)
   - 30-second countdown timer
3. **Answer**: Choose your answer (1, 2, 3, or 4)
4. **Feedback**: Get instant results:
   - ✅ Correct answer
   - ❌ Wrong answer (shows what you chose vs. correct answer)
   - ⏰ Timeout (if you don't answer in time)
5. **Score**: See your running score after each question
6. **Results**: Get your final score at the end

### Example Game Session
```
Welcome to the Trivia Game!
Question 1: What is the capital of France?
1. Berlin
2. Madrid
3. Paris
4. Rome
⏱️  You have 30 seconds to answer.

[You choose option 3]

✅ Correct!
Current score: 1/1

Question 2: What is 2 + 2?
1. 3
2. 4
3. 5
4. 6
⏱️  You have 30 seconds to answer.

[Timer runs out]

⏰ Time's up! The correct answer was: 4
Current score: 1/2

Game over! Your final score is: 1/2
```

## 🔧 Customization

### Adding Your Own Questions

Edit the `questions` array in `src/travia.js`:

```javascript
const questions = [
    { 
        question: "Your question here?", 
        options: ["Option 1", "Option 2", "Option 3", "Option 4"], 
        answer: "Option 2" 
    },
    // Add more questions...
];
```

### Changing the Timer

Modify the time limit (in seconds) when creating the game:

```javascript
const game = new TriviaGame(questions, 45); // 45 seconds per question
```

### Question Format

Each question must follow this structure:
```javascript
{
    question: "Question text?",
    options: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 2" // Must match exactly one of the options
}
```

## 📁 Project Structure

```
travia-cli/
├── src/
│   ├── travia.js          # Main game file
│   ├── example.js         # Example/demo file
│   └── Travia/           # Additional game files
├── ReadME.MD             # This file
└── package.json          # Project configuration (if added)
```

## 🎯 Game Features Explained

### Timer System
- **30-second countdown** for each question
- **5-second warnings** when time is running out
- **Automatic timeout** handling if no answer is provided
- **Immediate stop** when an answer is submitted

### Scoring System
- **+1 point** for each correct answer
- **0 points** for incorrect answers or timeouts
- **Running score** displayed after each question
- **Final score** shown as `correct/total` format

### Answer Validation
- Accepts answers as **numbers 1-4**
- **Case-sensitive** matching with the correct answer
- **Clear feedback** showing your choice vs. correct answer

## 🚧 Current Limitations

- **No user input**: Currently uses simulated answers for testing
- **No persistent storage**: Scores are not saved between games
- **Fixed questions**: Questions are hardcoded in the file

## 🔮 Future Enhancements

- [ ] Add real user input with `readline`
- [ ] Load questions from external JSON files
- [ ] Add difficulty levels
- [ ] Save high scores
- [ ] Add question categories
- [ ] Multi-player support
- [ ] Web interface

## 🤝 Contributing

Feel free to contribute by:
- Adding new questions
- Improving the user interface
- Adding new features
- Fixing bugs

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Have fun playing! 🎉**















































































































