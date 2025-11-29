// 1. Quiz Questions Array 
const q = [
    { q: "What language is used to style web pages?", a: "css" },
    { q: "What is the standard markup language for creating web pages?", a: "html" },
    { q: "What does HTML stand for?", a: "hypertext markup language" },
    { q: "Which language is primarily used for client-side scripting?", a: "javascript" },
    { q: "Which protocol is used to load web pages securely?", a: "https" }
];

// 2. Function to Run the Quiz
function runQuiz() {
    let score = 0;

    for (let i = 0; i < q.length; i++) {
        let ques = q[i].q;
        let ans = q[i].a;

        let resp = prompt(ques);

        if (resp !== null) {
            resp = resp.toLowerCase().trim();
        } else {
            resp = "";
        }

        if (resp === ans) {
            score++;
            alert("Correct! 🎉");
        } else {
            alert("Wrong! The correct answer is: " + ans);
        }
    }

    alert("Quiz Completed!\nYour final score is: " + score + " out of " + q.length);
}

// Run the Quiz
runQuiz();