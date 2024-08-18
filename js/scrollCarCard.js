document.querySelectorAll(".popularCarCard").forEach((card, index) => {
  card.addEventListener("click", () => {
    const container = document.getElementById("popularCardRow");
    const cardWidth = card.offsetWidth;

    // Scroll to the card that was clicked
    container.scrollLeft = cardWidth * index;
  });
});
