// Using selectors inside the element
const questions = document.querySelectorAll(".question");
//console.log(questions);

questions.forEach(function (question) {
  //console.log(question);
  const questionBtns = question.querySelector(".question-btn");
  //console.log(questionBtn);
  questionBtns.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// Traversing the dom
// const questionBtns = document.querySelectorAll(".question-btn");

// questionBtns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     //console.log(e.currentTarget.parentElement.parentElement);
//     const question = e.currentTarget.parentElement.parentElement;
//     //console.log(question);
//     question.classList.toggle("show-text");
//   });
// });
