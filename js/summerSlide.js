document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "./resources/assets/summerPromotionBanner.svg", // Add all image paths here
    "./resources/assets/summerPromotionBanner.svg",
    "./resources/assets/summerPromotionBanner.svg",
    "./resources/assets/summerPromotionBanner.svg",
  ];

  const bannerImage = document.querySelector(".banner img");
  const controls = document.querySelectorAll(".control-btn");
  let currentSlide = 0;

  function showSlide(index) {
    bannerImage.src = images[index]; // Change the image source
    controls.forEach((control, i) => {
      control.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
  }

  controls.forEach((control) => {
    control.addEventListener("click", (event) => {
      const index = parseInt(event.target.getAttribute("data-slide"));
      showSlide(index);
      currentSlide = index;
    });
  });

  showSlide(currentSlide);
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
