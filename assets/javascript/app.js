

$(document).ready(function () {

    //variables needed to play the game:

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unAnswered = 0;
    var timeRemaining = 16;
    var intervalId;
    var indexQandA = 0;
    var answered = false;
    var correct;

    // start game
    $('.startButton').on("click", function () {
        $('.startButton');
        start();
    });


    // questions and answers for the game:

    var game = [{

        question: "What is Crowley's nickname for Sam?",
        answer: ["Squirrel", "Moose", "Hedwig", "Jerry"],
        correct: "1",
        image: ("assets/images/moose.jpg")
    }, {
        question: "What is Crowley's nickname for Dean?",
        answer: ["Squirrel", "Moose", "Hedwig", "Jerry"],
        correct: "0",
        image: ("assets/images/squirrel.jpg")

    }, {
        question: "What was the title of the show originally going to be?",
        answer: ["The Winchesters", "Brothers Grimm", "Unnatural", "Ghost Hunters"],
        correct: "2",
        image: ("assets/images/unnatural.jpg")
    }, {
        question: "What is the nickname of Dean's car?",
        answer: ["Love Bug", "Christine", "Yoda", "Baby"],
        correct: "3",
        image: ("assets/images/baby2.jpg")

    }, {
        question: "What book does Charlie read to her comatose mother?",
        answer: ["The Wizard of Oz", "The Hobbit", "Harry Potter and the Sorcere's Stone", "The Fellowship of The Ring"],
        correct: "1",
        image: ("assets/images/charlie.jpg")

    }, {
        question: "What has Sam been scared of since childhood?",
        answer: ["Vampire", "Zombies", "Werewolves", "Clowns"],
        correct: "3",
        image: ("assets/images/clown.jpg")
    }, {
        question: "What is the license plate # of Dean's Chevy Impala during all of season 1 and most of season 2?",
        answer: ["CNK 803", "KAZ 2Y5", "GOD 4VR", "BQN 9R3"],
        correct: "1",
        image: ("assets/images/car.jpg")
    }

    ];


    // functions

    function start() {
        $('.start-button').remove();
        correctAnswers = 0;
        incorrectAnswers = 0;
        unAnswered = 0;
        loadandA();
    }

    function loadandA() {
        answered = false;
        timeRemaining = 16;
        intervalId = setInterval(timer, 1000);
        if (answered === false) {
            timer();
        }
        var correct = game(indexQandA).correct;
        var question = game[indexQandA].question;
        $('question').html(question);
        for (var i = 0; i < 4; i++) {
            var answer = game[indexQandA].answer[i];
            $('.answers').append('<h4 class=allAnswers id=' + i + '>' + answer + '</h4>');
        }

        $("h4").click(function () {
            var id = $(this).attr('id');
            if (id === correct) {
                answered = true;
                $('.question').text("The Correct Answer is: " + game[indexQandA].answer[correct]);
                correctAnswer();
            } else {
                answered = true;
                $('.question').text("YOUR ANSWER WAS: " + game[indexQandA].answer[id] + "But the Real Answer is: " + game[indexQandA].answer[correct]);
                incorrectAnswer();
            }

        });
    }

    function timer() {
        if (timeRemaining === 0) {
            answered = true;
            clearInterval(intervalID);
            $('.question').text("The Correct Answer is: " + game[indexQandA].answer[correct]);
            unAnswered();
        } else if (answered === true) {
            clearInterval(intervalId);
        } else {
            timeRemaining--;
            $('.timeRemaining').text('You have ' + timeRemaining + 'seconds left');
        }
    }

    function correctAnswer() {
        correctAnswers++;
        $('timeRemaining').text("You did it! You got the right answer!").css({
            'color': '#31A91A'
        });
        reset();
    }

    function incorrectAnswer() {
        incorrectAnswers++;
        $('timeRemaining').text("").css({
            'color': '#31A91A'
        });
        reset();
    }
    function unansweredQuestions() {
        unAnswered++;
        $('.timeRemaining').text("No clue? It's all good!").css({
            'color': '#31A91A'
        });
        reset();

    function reset () {
        $('.allAnswers').remove();


    }
    });