// alert("added");

const faq = document.querySelector(".faq");
const questions = document.querySelectorAll(".faq > li");

// alert(faq.children.length);
for (const question of faq.children) {
  question.addEventListener("click", (e) => {
    alert(e.target);
    // e.remove();
  });
}
