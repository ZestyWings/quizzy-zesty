const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById("question-class")
const questionElement = document.getElementById("questions")
const answerButtonsElement = document .getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)


function startGame() { 
    console.log("Started")
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])


}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("button")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

// function resetState() {
//     nextButton.classList.add('hide')
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild
//         (answerButtonsElement.firstChild)
//     }
// }

function selectAnswer () { 

}

const questions = [
    {
        question: "What is 2+2?",
        answers: [
            {text: "4", correct: true },
            {text: "22", correct: false }
        ]
    }
]