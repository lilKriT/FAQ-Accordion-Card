// alert("added");

const faq = document.querySelector(".faq");
const questions = document.querySelectorAll(".faq > li");

// alert(faq.children.length);
for (const question of questions) {
  //   alert(question.children[0].textContent);
  question.addEventListener("click", (e) => {
    // alert(e.target);
    // this.classlist.add("test");
    // this.remove;
    // e.remove();
    // alert(question);
    question.classList.toggle("expanded");
  });
}

// alert("still");
