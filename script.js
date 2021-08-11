// const quizContainer = document.getElementsByClassName('quiz')
// const resultContainer = document.getElementsByClassName('results')
// const submitButton = document.getElementsByClassName('submit')

const headerEl = document.getElementById('header');
// variable to populate answers and text
const textEl = document.getElementById('text');
// variable for unhiding buttons
const hideEl = document.querySelector('.hide');
// start button
const startButtonEl = document.getElementById('start-button');
// variable for timer on page
const timerEl = document.querySelector('.timer');
// make an ordered list for questions to populate
const aList = document.createElement('ol');
// area to print result
const result = document.getElementById('result')

    // make the answer buttons
const answerButton1 = document.createElement('button');
const answerButton2 = document.createElement('button');
const answerButton3 = document.createElement('button');
answerButton1.classList.add('answer-button', 'a');
answerButton2.classList.add('answer-button', 'b');
answerButton3.classList.add('answer-button', 'c');

    // variable to store number of correct answers aka user's score
var score = 0;
    // variable to set initial timer
let secondsRemaning = 75;
    // timer variable
var timerInterval;
const questions = [
    {
        question: "How many books are in the New Testament?",
        answers: {
            a: 24,
            b: 36,
            c: 27

        },
        correctAnswer: "c"
    },

    {
        question:"What type of insect did John the Baptist eat in the desert?",
        answers: {
            a: "ants",
            b: "locust",
            c: "scorpions"
        },
        correctAnswer: "b"
    },

    {
        question:"After Jesus was arrested, which apostle disowned him three times?",
        answers: {
            a: "andrew",
            b: "peter",
            c: "judas"
        },
        correctAnswer: "b"
    },

    {
        question:"Where did Mary and Joseph flee with the baby Jesus when an angel warned them Herod was trying to kill the child?",
        answers: {
            a: "bethlehem",
            b: "egypt",
            c: "judah"
        },
        correctAnswer: "b"
    },

    {
        question:"Who asked Pilate for Jesus body after the crucifixion?",
        answers: {
            a: "nicodemus",
            b: "joseph",
            c: "john"
        },
        correctAnswer: "a"
    },

    {
        question:"When did the events of the New Testament take place?",
        answers: {
            a: "3rd century",
            b: "1st century BC",
            c: "1st century AD"
        },
        correctAnswer: "c"
    },

    {
        question:"Who was not present when the other apostles saw Jesus risen from the dead?",
        answers: {
            a: "james",
            b: "peter",
            c: "thomas"
        },
        correctAnswer: "c"
    },

    {
        question:"What name did Jesus give to James & John?",
        answers: {
            a: "sons of heaven",
            b: "sons of thunder",
            c: "sons of the sea"
        },
        correctAnswer: "b"
    },

    {
        question:"What language were the books of the New Testament originally written in?",
        answers: {
            a: "greek",
            b: "latin",
            c: "hebrew"
        },
        correctAnswer: "a"
    },

    {
        question:"Jesus healed the mother-in-law of which apostle?",
        answers: {
            a: "john",
            b: "matthew",
            c: "peter"
        },
        correctAnswer: "c"
    },

]
// current question array
let currentQuestion;
let questionArray = [];
let i = 0;
// object to store initials and scores to local data
// var scoreObjs = JSON.parse(localStorage.getItem('scoreObj')) || [];

function enterScore() {
    // clear timer
    clearInterval(timerInterval);
    timerEl.textContent = '';
    console.log('GAME OVER');
    // print 'Game Over!'
    headerEl.textContent = 'Game Over!';
    // print the score to the page
    divEl = document.createElement('div');
    scoreEl = document.createElement('score');
    scoreEl.textContent = `Final Score: ${score}`;
    headerEl.appendChild(divEl);
    divEl.appendChild(scoreEl);
    // create input box
    var form = document.createElement('form');
    // var inputBox = document.createElement('input');
    // input box attributes
    // inputBox.setAttribute('type', 'text');
    // inputBox.setAttribute('placeholder', 'Enter Initials');
    // render input box to screen
    aList.replaceWith(form);
    form.appendChild(inputBox);

    // store the initials and go to high scores page
    // form.addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     // object that holds initials and scores
    //     var object = {
    //             name: inputBox.value,
    //             score: score
    //         }
    //         // push the object into the local storage
    //     scoreObjs.push(object)
    //     // localStorage.setItem('scoreObj', JSON.stringify(scoreObjs));
    //     // open the scores.html page if initials are not blank
    //     if (inputBox.value != '') {
    //         window.open('scores.html', '_self');
    //     };
    // });
};
// timer
function timer() {
    timerInterval = setInterval(function() {
        // decrement seconds left
        secondsRemaning--;
        // render seconds remaing to page
        timerEl.textContent = 'Timer: ' + secondsRemaning;
        // console.log(secondsRemaning)
        // console.log('WORKING')
        // if the user gets a question wrong, decrease the amount of seconds remaining by some amount
        // if (questions.answer == false) {
        //     // render 'Wrong' to the page
        //     //decrease amount of seconds remaining

        //     //if secondsRemaining == 0, stop the game and clear the timer
        if (secondsRemaning == 0) {
            //     clearInterval(timerInterval);
            clearInterval(timerInterval);
            timerEl.textContent = 'Timer: ' + secondsRemaning;
            enterScore();
        }
    }, 1000);
};

// question generator/ game start
function gamestart() {
    // hide start button
    startButtonEl.classList.add('hide');
    //start timer
    timer();

    // shuffle the question order
    questions.sort(() => Math.random());
    console.log('QUESTIONS: ', questions)
        // store the current question
    currentQuestion = questions[i];

    // ask a question
    questionAsker();
};

// populate the page with a question
questionAsker = () => {
    if (questionArray.length >= questions.length || secondsRemaning == 0) {
        enterScore();
    } else {
        // append the list to be populated to the textEl
        textEl.replaceWith(aList);

        // store current question
        currentQuestion = questions[i];
        // store questions into an array to check when there are no more questions to ask
        questionArray.push(questions[i]);
        // render the question to the page
        headerEl.innerHTML = questions[i].question;
        // set each list item texto to the answer's text
        answerButton1.innerHTML = questions[i].answers.a;
        answerButton2.innerHTML = questions[i].answers.b;
        answerButton3.innerHTML = questions[i].answers.c;
        // answerButton4.innerHTML = questions[i].answers.d;
        //render each answer to the list
        aList.appendChild(answerButton1);
        aList.appendChild(answerButton2);
        aList.appendChild(answerButton3);
        // aList.appendChild(answerButton4);
        console.log('value of i: ', i);
        console.log('CURRENT Q: ', currentQuestion);
    };
};


//EVENT LISTENERS

// on page load, populate start button and quiz info
addEventListener('load', () => {
    // if the header element exists on the page...
    if (headerEl) {
        // ...populate header
        headerEl.textContent = 'Welcome to the quiz'
    };
    // if text element exists on the page...
    if (textEl) {
        // ...populate the rules text
        textEl.innerHTML = 'You have 75 seconds for the quiz. Each wrong answer will decrease your time by 10 seconds. Correct answers will increase your score by one. At the end of the quiz, you may input your initials to save your highscore. Good luck!'
    };
    // if hide element exists on the page...
    if (hideEl) {
        // ...show the start button
        hideEl.classList.remove('hide');
    };

});

// bind listener to class name for button nested in body
// listen for click in body on class name
document.addEventListener('click', function(e) {
    // if the button clicked is an answer button,
    if (e.target.classList.contains('answer-button')) {
        console.log('answer buttons work');
        if (e.target.classList.contains(currentQuestion.correctAnswer)) {
            console.log('CORRECT ANSWER WORKING')
                // add one to score
            score++;
            if (result.classList.contains('wrong')) {
                // clear class list from result
                result.classList.remove('wrong');
            };

            // add 'correct' to class list to style lines RED
            result.classList.add('correct');
            // render 'correct!' to screen
            result.textContent = 'Correct!'
                // erase message after 1.5 seconds
            setTimeout(function() {
                result.textContent = ''
            }, 1000);
            // increment question index
            i++;
            // ask next quesiton
            questionAsker();
        } else {
            console.log('WRONG ANSWER WORKING')
                // for a wrong answer, take 10 seconds off the clock
            secondsRemaning -= 10;
            // clear class list from result
            result.classList.remove('correct');
            // add 'wrong' to class list to style lines RED
            result.classList.add('wrong');
            // render 'Wrong!' to the page
            result.textContent = 'Wrong!'
                // erase message after 1.5 seconds
            setTimeout(function() {
                result.textContent = ''
            }, 1000);
            //icrement question index
            i++;
            //ask next question
            questionAsker();
        };
    }
});

// if start button el exists on page...
if (startButtonEl) {
    // ...on button click start quiz
    startButtonEl.addEventListener('click', gamestart);
};
// function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

// 	function showQuestions(questions, quizContainer){
// 		// we'll need a place to store the output and the answer choices
// 	var output = [];
// 	var answers;

// 	// for each question...
// 	for(var i=0; i<questions.length; i++){
		
// 		// first reset the list of answers
// 		answers = [];

// 		// for each available answer to this question...
// 		for(letter in questions[i].answers){

// 			// ...add an html radio button
// 			answers.push(
// 				'<label>'
// 					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
// 					+ letter + ': '
// 					+ questions[i].answers[letter]
// 				+ '</label>'
// 			);
// 		}

// 		// add this question and its answers to the output
// 		output.push(
// 			'<div class="question">' + questions[i].question + '</div>'
// 			+ '<div class="answers">' + answers.join('') + '</div>'
// 		);
// 	}

// 	// finally combine our output list into one string of html and put it on the page
// 	quizContainer.innerHTML = output.join('');
// }
// 	}

// 	function showResults(questions, quizContainer, resultsContainer){
// 		// code will go here
// 	}

// 	// show the questions
// 	showQuestions(questions, quizContainer);

// 	// when user clicks submit, show results
// 	submitButton.onclick = function(){
// 		showResults(questions, quizContainer, resultsContainer);
// 	}
// }
