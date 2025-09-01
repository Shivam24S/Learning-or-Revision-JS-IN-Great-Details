const greet = () => {
  console.log("good morning");
};

const intervalId = setInterval(greet, 2000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
