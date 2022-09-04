const allCategories = document.querySelectorAll(".item");
console.log("Number of categories: ", allCategories.length);

//////

const firstCard = document.querySelector(".item");
const firstItem = document.querySelector("h2");
console.log("Category:", firstItem.textContent);

const firstItemSibl = firstItem.nextElementSibling.children;
console.log("Elements: ", firstItemSibl.length);

//////

const secondCard = firstCard.nextElementSibling;
const secondItem = secondCard.firstElementChild;
console.log("Category:", secondItem.textContent);

const secondItemSibl = secondItem.nextElementSibling.children;
console.log("Elements: ", secondItemSibl.length);

//////

const lastCard = secondCard.nextElementSibling;
const lastItem = lastCard.firstElementChild;
console.log("Category:", lastItem.textContent);

const lastItemSibl = lastItem.nextElementSibling.children;
console.log("Elements: ", lastItemSibl.length);
