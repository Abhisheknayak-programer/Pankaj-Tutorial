//// JAVASCRIPT EVENTS
const Main_section = document.querySelector(".first_section");
const Heading_1 = document.querySelector(".first_heading");
const Box = document.querySelector(".SquareBox");
// const Heading_1 = document.getElementsByClassName("first_heading");

const btn1 = document.querySelector("#button1");
const btn2 = document.querySelector("#button2");
const btn3 = document.querySelector("#button3");
const btn4 = document.querySelector("#button4");
// const btn = document.getElementById("button");

// console.log(Heading_1.textContent);

btn1.addEventListener("click", () => {
  Heading_1.classList.add("color_heading");
  Heading_1.innerHTML = "Pankaj Bhag Jao";
});

btn2.addEventListener("click", () => {
  Heading_1.classList.remove("color_heading");
  Heading_1.innerHTML = "Hello World";
});

btn3.addEventListener("click", () => {
  Heading_1.classList.toggle("color_heading");
});

Heading_1.addEventListener("mouseover", () => {
  Heading_1.style.fontSize = "100px";
  Heading_1.style.color = "crimson";
});

Heading_1.addEventListener("mouseout", () => {
  Heading_1.style.fontSize = "30px";
  Heading_1.style.color = "green";
});

btn4.addEventListener("dblclick", () => {
  Main_section.classList.toggle("MakeChange");
});

Box.addEventListener("mouseenter", () => {
  Box.style.backgroundColor = "Red";
  Box.style.color = "#fff";
});

Box.addEventListener("mouseout", () => {
  Box.style.backgroundColor = "transparent";
  Box.style.color = "#000";
});

document.addEventListener("keypress", (e) => {
  // console.log(e);
  if (e.key === "k") {
    console.log("Pankaj BhagJao");
    Main_section.style.backgroundColor = "blue";
  }

  if (e.key === "v") {
    console.log("Very Good");
    Main_section.style.backgroundColor = "brown";
  }

  if (e.key === "n") {
    Main_section.style.backgroundColor = "#f6f6f6";
  }
});

window.addEventListener("load", () => {
  Heading_1.textContent = "Bhag";
});
