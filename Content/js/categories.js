document.addEventListener("DOMContentLoaded", () => {
  fetchCategories();
});

function fetchCategories() {
  fetch("data/categories.json")
    .then((response) => response.json())
    .then((categories) => {
      const categoriesDiv = document.getElementById("categories");
      categories.forEach((category) => {
        if (category.hide === "1") {
          const categoryElement = document.createElement("div");
          categoryElement.className = "col-md-4";
          categoryElement.innerHTML = `
                        <div class="category-card">
                            <a href="products.html?category=${category.id}">
                                <img src="${category.link}" alt="${category.name}" class="img-fluid">
                                <h3>${category.name}</h3>
                            </a>
                        </div>
                    `;
          categoriesDiv.appendChild(categoryElement);
        }
      });
    })
    .catch((error) => console.error("Error loading categories:", error));
}
