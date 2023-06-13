const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemsList = document.querySelector("#ingredients");

const liNodes = [];
ingredients.forEach((element) => {
  const list = document.createElement("li");
  list.textContent = element;
  list.classList.add(".item");
  liNodes.push(list);
});
itemsList.append(...liNodes);
console.log(liNodes);
