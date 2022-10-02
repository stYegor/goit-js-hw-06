const allCategories = document.querySelectorAll(".item");
console.log("Number of categories: ", allCategories.length);

const nameOfCategoties = document.querySelectorAll("h2");
nameOfCategoties.forEach(function (nameOfCategoties) {
  console.log("Category: ", nameOfCategoties.textContent);
  console.log(
    "Elements: ",
    nameOfCategoties.nextElementSibling.childElementCount
  );
});
