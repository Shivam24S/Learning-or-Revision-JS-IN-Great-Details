function paymentDetail(x) {
  console.log(x);
}

function payment(amount, callback) {
  console.log(`Payment of ₹${amount} initiated.`);
  setTimeout(() => {
    if (amount > 0) {
      console.log(`₹${amount} deducted.`);
      callback(null, amount);
    } else {
      callback("Invalid payment amount.");
    }
  }, 1000);
}

payment(0, paymentDetail);
