document.addEventListener('DOMContentLoaded', function() {
  var coll = document.querySelectorAll(".collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
          var content = this.nextElementSibling;
          content.style.display = (content.style.display === "none" || content.style.display === "") ? "flex" : "none";
      });
  }
});

let points = 0;
let answeredQuestions = [];
const totalQuestions = 10;

function trueAns() {
  points += 10;
  let aq = 1
  answeredQuestions.push(aq);
}

function falseAns() {
  let aq = 1
  answeredQuestions.push(aq);;
}


function totalSum() {
  if (answeredQuestions.length < totalQuestions) {
    alert("Mohon jawab semua soal sebelum melihat skor!");
    console.log(answeredQuestions.length, totalQuestions);
  } else {
    let confirmation = confirm("Apakah anda yakin dengan jawaban anda? Button akan menjadi disable setelah anda memilih ya");
    if (confirmation) {
      document.querySelector("#sc").innerHTML = points;
      let button = document.querySelector("[name='showerOfScores']");
      button.disabled = true;
    }
  }
}

  function changeVideo(newVideoId) {
  var iframe = document.getElementById('youtubeVideo');
  iframe.src = "https://www.youtube.com/embed/" + newVideoId;
}