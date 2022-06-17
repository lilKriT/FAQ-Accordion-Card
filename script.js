const faq = document.querySelector(".faq");
const questions = document.querySelectorAll(".faq > li");

for (const question of questions) {
  question.addEventListener("click", (e) => {
    if (question.classList.contains("expanded")) {
      question.classList.remove("expanded");
    } else {
      for (const q of questions) {
        q.classList.remove("expanded");
      }
      question.classList.add("expanded");
    }
  });
}
