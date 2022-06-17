const faq = document.querySelector(".faq");
const questions = document.querySelectorAll(".faq > li");

for (const question of questions) {
  question.addEventListener("click", (e) => {
    question.classList.toggle("expanded");
  });
}