// 2. Hogwarts House generator
const input = document.getElementById("inputName");
const sortButton = document.getElementById("sortBtn");
const tag = document.getElementById("tag");

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

sortButton.addEventListener("click", () => {
  const inputValue = input.value.trim();

  if (inputValue) {
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    tag.textContent = `${inputValue} belongs in ${randomHouse}`;
  } else {
    tag.textContent = "Please write your name first";
  }
});
