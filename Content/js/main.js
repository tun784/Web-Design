document.addEventListener("DOMContentLoaded", () => {
  fetchCategories();
  fetchNewProducts();
});

function fetchCategories() {
  fetch("data/categories.json")
    .then((response) => response.json())
    .then((categories) => {
      const categoriesDiv = document.getElementById("categories");
      categories.forEach((category) => {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");
        categoryDiv.innerHTML = `
                    <h3>${category.name}</h3>
                    <p>${category.description}</p>
                `;
        categoriesDiv.appendChild(categoryDiv);
      });
    })
    .catch((error) => console.error("Error loading categories:", error));
}

function fetchNewProducts() {
  fetch("data/products.json")
    .then((response) => response.json())
    .then((products) => {
      const newProductsDiv = document.getElementById("new-products");
      products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
                    <h3>${product.name}</h3>
                    <img src="images/${product.img}" alt="${product.name}" class="img-fluid">
                    <p>${product.description}</p>
                    <p>Price: ${product.price}</p>
                `;
        newProductsDiv.appendChild(productDiv);
      });
    })
    .catch((error) => console.error("Error loading new products:", error));
}
