// this is function for Content items //
// Get all the heart icons
const likeIcons = document.querySelectorAll(".fa-regular.fa-heart");
const count = document.getElementById("count");
// Add click event listener to each heart icon
likeIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    this.classList.toggle("active");

    const likesCount = this.nextElementSibling;

    if (this.classList.contains("active")) {
      likesCount.textContent = parseInt(likesCount.textContent) + 1;
    } else {
      likesCount.textContent = parseInt(likesCount.textContent) - 1;
    }
  });
});

// Get all the card info elements
const cardInfos = document.querySelectorAll(".cardInfo");

// Add event listeners to each card info
cardInfos.forEach((cardInfo) => {
  const readIcon = cardInfo.querySelector(".read-icon");
  const crossIcon = cardInfo.querySelector(".fa-circle-xmark");

  //readIcon display block when already read
  readIcon.addEventListener("click", function (event) {
    this.style.display = "block"; // for readIcon
  });

  // Remove the news card when the cross icon is clicked
  crossIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    const newsCard = this.closest(".item-card");
    if (newsCard) {
      newsCard.remove();
    }
  });
});
