document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let answer1 = document.getElementById("answer1").value;
  let answer2 = document.getElementById("answer2").value;
  let answer3 = document.getElementById("answer3").value;
  let answer4 = document.getElementById("answer4").value;
  let answer5 = document.getElementById("answer5").value;
  let answer6 = document.getElementById("answer6").value;
  let answer7 = document.getElementById("answer7").value;
  let answer8 = document.getElementById("answer8").value;
  let answer9 = document.getElementById("answer9").value;
  let answer10 = document.getElementById("answer10").value;

  let message = `*VOTECH SURVEY*%OA
  Answer 1: ${answer1}%OA
  Answer 2: ${answer2}%OA
  Answer 3: ${answer3}%OA
  Answer 4: ${answer4}%OA
  Answer 5: ${answer5}%OA
  Answer 6: ${answer6}%OA
  Answer 7: ${answer7}%OA
  Answer 8: ${answer8}%OA
  Answer 9: ${answer9}%OA
  Answer 10: ${answer10}%OA`;

  //whatsapp
  let myNumber = "694386748";

  let url = `https://wa.me/${myNumber}?text=${message}`;


  //open whatsapp in 2secs
  
  setTimeout(() => {
    window.open(url, "_blank");
  }, 2000);

});