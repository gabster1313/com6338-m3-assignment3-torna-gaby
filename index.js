var questionsArr = [
        {
            question: 'Is Harry Styles debut album called Harry Styles?',
            answer: true
        },
        {
            question:'Harry was the lead singer of the band, The Wanted.',
            answer: false
        },
        {
            question:'There were 5 members in 1D.',
            answer: true   
        },    
        {
            question:'Love on Tour and Live on Tour are names of Harrys tours.',
            answer: true
        },
        {
            question:'Harry is American.',
            answer: false
        }

    ];
    function runQuiz() {
        var score=0;
        for(var i = 0; i < questionsArr.length; i++) {
            var userAnswer = confirm(questionsArr[i].question)
       
        if (userAnswer === questionsArr[i].answer) {
            score++; 
        }
    }
    var finalScore = Math.round((score / questionsArr.length) * 100);
    alert((`Your final score is ${finalScore}%`));
}

    