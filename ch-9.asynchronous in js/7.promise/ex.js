const cart = ["shoes", "watch", "book", "phone"];

// const cart = "";

function createOrder(cart) {
  const order = new Promise((resolve, reject) => {
    if (cart.length === 0) {
      reject("cart is empty");
    }
    setTimeout(() => {
      resolve("12345");
    }, 3000);
  });

  return order;
}

const shop = createOrder(cart);

// console.log(shop);

shop
  .then((data) => {
    console.log(data);
  })
  .then(() => {
    throw new Error("payment failed");
  })
  .then(() => {
    console.log("order placed successfully");
  })
  .catch((err) => {
    console.log(err);
  });
