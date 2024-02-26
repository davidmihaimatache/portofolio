import "./style.css";

const appContainer = document.getElementById("app");
const bgColors = [
  "#ffffff",
  "#ffffffb4",
  "#ffffff69",
  "#ffffff50",
  "#ffffff1e",
  "000000",
];
let numberOfPixels = appContainer.clientHeight / 8;
console.log(numberOfPixels);
console.log(appContainer.clientHeight);

for (let i = 0; i < numberOfPixels; i++) {
  const rowElement = document.createElement("div");
  rowElement.className = "row";
  for (let j = 0; j < numberOfPixels; j++) {
    const squareElement = document.createElement("div");
    squareElement.className = "square";
    squareElement.timesHovered = 0;
    squareElement.addEventListener("mouseover", (e) => {
      e.stopPropagation();
      if (squareElement.timesHovered < bgColors.length)
        squareElement.timesHovered++;

      squareElement.style.backgroundColor =
        bgColors[squareElement.timesHovered];
    });

    rowElement.appendChild(squareElement);
  }
  appContainer.appendChild(rowElement);
}
