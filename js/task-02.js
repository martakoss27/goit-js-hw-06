const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemsList = document.querySelector("#ingredients");

ingredients.forEach((element) => {
  const list = document.createElement("li");
  list.textContent = element;
  list.classList.add(".item");
  itemsList.append(list);
  console.log(list);
});
