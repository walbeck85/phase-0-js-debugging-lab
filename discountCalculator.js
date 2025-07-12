function calculateDiscountedPrice(quantity, pricePerItem) {
  debugger; // Start here

  let totalPrice = 0;

  for (let i = 0; i < quantity; i++) {
    debugger; // Loop watch
    totalPrice += pricePerItem;
  }

  if (quantity >= 10) {
    debugger; // Discount check
    totalPrice *= 0.9;
  }

  return totalPrice;
}

module.exports = calculateDiscountedPrice;

// Run the function (so the debugger has something to do)
calculateDiscountedPrice(10, 5);