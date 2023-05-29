//Will count and display in the console the number of categories in ul#categories, that is, li.item elements.
const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

//For each li.item element in the ul#categories list,
// will find and display in the console the element header text (<h2> tag),
// and the number of elements in the category (all nested <li>).

numberOfCategories.forEach((element) => {
  const categoryName = element.querySelector("h2");
  const categoryItems = element.querySelectorAll("li");
  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${categoryItems.length}`);
});
