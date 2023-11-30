let shoppingList = [];
function addToShoppingList(shoppingList, item) {
  shoppingList.push(item);
}

for (let i = 0; i < 3; i++) {
  addToShoppingList(shoppingList, {
    name: "ticket",
    cost: 5,
  });
}
console.log("shoppingList", shoppingList);

let sum = 0;
shoppingList.forEach((element) => (sum += element.cost));
console.log("sum", sum);

let wishList = [];
function addToWishList(wishList, item) {
  wishList.push(item);
}

for (let i = 0; i < 2; i++) {
  addToWishList(wishList, {
    name: "Cooking Pan",
    cost: 20,
  });
}
console.log("wishList", wishList);

sum = 0;
wishList.forEach((element) => (sum += element.cost));
console.log("sum", sum);

// Apply the 50% discount to the cooking pan
// Add a cooking pan to the shoppingList
// Sum up shoppingList costs and the wishList costs

function applyDiscount(item, discountPercentage) {
  item.cost = item.cost * (1 - discountPercentage / 100);
}

wishList.forEach((element) => applyDiscount(element, 50));
console.log("wishList", wishList);

addToShoppingList(shoppingList, wishList[0]);
console.log("shoppingList", shoppingList);

sum = 0;
shoppingList.forEach((element) => (sum += element.cost));
wishList.forEach((element) => (sum += element.cost));
console.log("sum", sum);
