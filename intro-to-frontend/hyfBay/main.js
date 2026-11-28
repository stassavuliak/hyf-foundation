const mainTag = document.querySelector("main");
const ul = document.createElement("ul");

function renderProducts(products) {
  ul.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    const li = document.createElement("li");
    ul.append(li);
    const title = document.createElement("h3");
    const price = document.createElement("p");
    const rating = document.createElement("span");

    title.textContent = products[i].name;
    price.textContent = `price: ${products[i].price} dkk`;
    rating.textContent = `rating: ${products[i].rating}/10`;

    li.append(title, price, rating);
  }
}

function createBtn() {
  const button = document.createElement("button");
  button.textContent = "Create product list";

  button.addEventListener("click", () => {
    const products = getAvailableProducts();
    renderProducts(products);
  });

  mainTag.append(button);
}

createBtn();
mainTag.append(ul);
