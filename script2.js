// Filter elements
const categoryFilter = document.getElementById("category-filter");
const priceFilter = document.getElementById("price-filter");
const pizzaCards = document.querySelectorAll(".pizza-card");

// Pizza modal elements
const modal = document.getElementById("pizza-modal");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalPrice = document.getElementById("modal-price");
const modalDescription = document.getElementById("modal-description");
const closeModalBtn = document.querySelector(".close-btn");

// Apply filters when dropdowns change
categoryFilter.addEventListener("change", filterPizzas);
priceFilter.addEventListener("change", filterPizzas);

function filterPizzas() {
  const selectedCategory = categoryFilter.value.toLowerCase();
  const selectedPrice = priceFilter.value;

  pizzaCards.forEach((card) => {
    const category = card.getAttribute("data-category").toLowerCase();
    const price = parseFloat(card.getAttribute("data-price"));

    const matchesCategory =
      selectedCategory === "all" || selectedCategory === category;

    const matchesPrice =
      selectedPrice === "all" ||
      (selectedPrice === "low" && price < 10) ||
      (selectedPrice === "medium" && price >= 10 && price <= 15) ||
      (selectedPrice === "high" && price > 15);

    card.style.display = matchesCategory && matchesPrice ? "block" : "none";
  });
}

// Open modal when clicking a pizza image
document.querySelectorAll(".pizza-image").forEach((image) => {
  image.addEventListener("click", (e) => {
    const card = e.target.closest(".pizza-card");
    modalTitle.textContent = card.getAttribute("data-name");
    modalCategory.textContent = Category: ${card.getAttribute("data-category")};
    modalPrice.textContent = Price: $${card.getAttribute("data-price")};
    modalDescription.textContent = card.getAttribute("data-description");
    modal.style.display = "flex";
  });
});

// Close modal
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});