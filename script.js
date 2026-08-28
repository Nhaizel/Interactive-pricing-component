const slider = document.querySelector(".price-slider");
const viewsDisplay = document.querySelector(".views");
const amountDisplay = document.querySelector(".amount");
const toggle = document.querySelector("#monthly-bill");

const pricingData = {
  1: { views: "10K Pageviews", price: 8 },
  2: { views: "50K Pageviews", price: 12 },
  3: { views: "100K Pageviews", price: 16 },
  4: { views: "500K Pageviews", price: 24 },
  5: { views: "1M Pageviews", price: 36 },
};

function updatePrice() {
  const currentTier = pricingData[slider.value];
  let finalPrice = currentTier.price;

  // Apply 25% discount if yearly toggle is checked
  if (toggle.checked) {
    finalPrice = finalPrice * 0.75;
  }

  if (slider.value == 1) {
    slider.style.background =
      "linear-gradient(to right,var(--green-100) 0%, var(--green-100) 0%, var(--slate-200) 0%, var(--slate-200) 100% )";
  } else if (slider.value == 2) {
    slider.style.background =
      "linear-gradient(to right,var(--green-100) 0%, var(--green-100) 25%, var(--slate-200) 0%, var(--slate-200) 100% )";
  } else if (slider.value == 3) {
    slider.style.background =
      "linear-gradient(to right,var(--green-100) 0%, var(--green-100) 50%, var(--slate-200) 0%, var(--slate-200) 100% )";
  } else if (slider.value == 4) {
    slider.style.background =
      "linear-gradient(to right,var(--green-100) 0%, var(--green-100) 75%, var(--slate-200) 0%, var(--slate-200) 100% )";
  } else if (slider.value == 5) {
    slider.style.background =
      "linear-gradient(to right,var(--green-100) 0%, var(--green-100) 100%, var(--slate-200) 0%, var(--slate-200) 100% )";
  }

  viewsDisplay.textContent = currentTier.views;
  amountDisplay.textContent = `$${finalPrice.toFixed(2)}`;
}

slider.addEventListener("input", updatePrice);
toggle.addEventListener("click", updatePrice);

updatePrice();
