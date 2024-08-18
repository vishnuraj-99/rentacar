// ---------nav bar toggling----------
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const sidebar = document.querySelector(".side-bar");
  const close = document.getElementById("closeButtonIcon");
  const BookACar = document.getElementById("BookACar");

  const bookTabs = document.getElementById("bookTabs");

  burger.addEventListener("click", () => {
    console.log("clicked");
    sidebar.classList.add("active");
  });

  close.addEventListener("click", () => {
    console.log("clicked");
    sidebar.classList.remove("active");
  });

  BookACar.addEventListener("click", () => {
    console.log("clicked");
    bookTabs.classList.toggle("active");
  });
});
//-------faq toggling--------
function toggleFAQ(element) {
  const icon = element.querySelector("img"); // Select the img directly
  const answer = element.querySelector(".license");

  if (answer.classList.contains("expanded")) {
    // Collapse the answer
    answer.classList.remove("expanded");
    icon.src = "/resources/assets/PlusIcon.svg";
  } else {
    // Expand the answer
    answer.classList.add("expanded");
    icon.src = "/resources/assets/crossIcon.svg";
  }
}
