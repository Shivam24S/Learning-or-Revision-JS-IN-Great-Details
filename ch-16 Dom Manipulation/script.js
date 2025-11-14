// using id only

document.getElementById("para").textContent =
  "this is para changed using script";

//   now using class

document.getElementsByClassName("para2")[0].innerHTML =
  "<h1>this is class paragraph</h1>";

// querySelector

// return only single element which have first occurrence

document.querySelector("h4").textContent =
  "this is changed query selector paragraph";

const newPara = document.querySelector(".style");

newPara.style.color = "green";

// querySelectorAll

// return nodeList not single element

const paragraph = document.querySelectorAll("p");

console.log(paragraph);

for (p of paragraph) {
  // p.style.color = "blue";

  p.innerHTML = "<h1>this is changed  paragraph using query Selector all</h1>";
}

// events

// click event

// document.querySelector("#btn").addEventListener("click", () => {
//   document.getElementById("btn").textContent = "clicked";
//   alert("button clicked");
// });

// submit event

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const task = document.getElementById("task").value;
  const description = document.getElementById("description").value;

  console.log("data", { task, description });
});
