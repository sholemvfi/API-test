import { address } from "./assets/api.js";

const getProducts = async () => {
  const data = await fetch(address);
  const result = await data.json();

  //console.log(result);

  result.map((data) => {
    //---creating products with classname---

    const product = document.createElement("div");
    product.className = "prod";

    //---creating image---

    const prodImg = document.createElement("img");
    prodImg.src = data.image;

    //---creating div including title and category---

    const holder = document.createElement("div");
    const prodTitle = document.createElement("h3");
    const prodCategory = document.createElement("span");

    prodTitle.innerText = data.title;
    prodCategory.innerText = data.category;

    holder.appendChild(prodTitle);
    holder.appendChild(prodCategory);

    //---creating p for description---

    const prodDesc = document.createElement("p");
    prodDesc.innerText = data.description;

    //---creating product price---

    const prodPrice = document.createElement("button");
    prodPrice.innerText = data.price;

    //---appending all components to main div---
    product.appendChild(prodImg);
    product.appendChild(holder);
    product.appendChild(prodDesc);
    product.appendChild(prodPrice);

    //---appending main div to body---

    document.querySelector("body").appendChild(product);
  });
};

getProducts();
