const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach((element) => {
  const categoryName = element.querySelector("h2");
  const categoryItems = element.querySelectorAll("li");
  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${categoryItems.length}`);
});
