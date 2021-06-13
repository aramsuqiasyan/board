const board = document.querySelector("#board");
const colors = [
  "#00c6ff",
  "#0072ff",
  "#ffd194",
  "#556270",
  "#FF6B6B",
  "#9D50BB",
  "#6E48AA",
  "#780206",
  "#061161",
  "#B3FFAB",
  "#12FFF7",
  "#e74c3c",
  "#F9D423",
  "#FF4E50",
  "#ADD100",
  "#7B920A",
];
const SQUARES_NUMBER = 400;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  square.addEventListener("click", (event) => onClick(i));
  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.transition = "0s ease";
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.transition = "2s ease";
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function onClick(index) {
  const allSquares = document.querySelectorAll(".square");
  const indexes = [
    index,
    index - 1,
    index + 1,
    index - 2,
    index + 2,
    index - 19,
    index + 19,
    index - 20,
    index + 20,
    index - 21,
    index + 21,
    index - 40,
    index + 40,
  ];
  indexes.forEach((idx) => {
    const color = getRandomColor();
    allSquares[idx].style.transition = "0s ease";
    allSquares[idx].style.backgroundColor = color;
    allSquares[idx].style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    setTimeout(() => {
      removeColor(allSquares[idx]);
    }, 200);
  });
  board.style.transition = "0s ease";
  board.style.backgroundColor = getRandomColor();
  setTimeout(() => {
    board.style.transition = "2s ease";
    board.style.backgroundColor = "transparent";
  }, 200);
}
