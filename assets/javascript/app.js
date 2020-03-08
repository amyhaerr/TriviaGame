

$(document).ready(function () {


    //variables needed to play the game:

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unAnswered = 0;
    var timeRemaining = 8;
    var interValidId;
    var indexQandA = 0;
    var answered = false;
    var correct;




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

}];

}];

});