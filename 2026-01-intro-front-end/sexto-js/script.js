document.body.style.backgroundColor = "red";

document.body.onclick = function () {
  const bg = document.body.style.backgroundColor;
  bg === "red" && (document.body.style.backgroundColor = "blue");
  bg === "blue" && (document.body.style.backgroundColor = "red");
};
