document.addEventListener('DOMContentLoaded', function() {
    var coll = document.querySelectorAll(".collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            var content = this.nextElementSibling;
            content.style.display = (content.style.display === "none") ? "flex" : "none";
        });
    }
});

var points = 0;
        var answers = [];
        var totalQuestions = 3; // Update this with the total number of questions
        
        function trueAns(q) {
          if(answers[q] != 1) {
            points += 10; //Only + will not change the score because It's adding without putting. But here we have both adding && putting. 
            answers[q] = 1;
          }
        }
        
        function falseAns(q) {
          if(answers[q] == 1){
            points -= 10;
            answers[q] = -1;
          }
        }
        
        function totalSum() {
          if (answers.length < totalQuestions) {
            alert("Mohon jawab semua soal sebelum melihat skor!");
          } else {
            document.querySelector("#sc").innerHTML = points;
          }
        }