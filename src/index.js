import "./styles.scss";

const appEl = document.getElementById("app");
const btn = document.getElementById("load-btn");
// const pizzaPicture = document.getElementById("pizzaPicture");
const PizzaPieces = document.getElementById("numberOfPizzaPieces");

appEl.innerHTML = `<p>Click 👆 this button</p>`;

btn.addEventListener("click", () => {
  appEl.innerHTML = "waiting...";
  btn.classList.add("loading");

  fetch("https://gp-js-test.herokuapp.com/pizza")
    .then((response) => response.json())
    .then((data) => {
      const countOfPieces = getCountOfPizzaPieces(data.party);
      btn.classList.remove("loading");
      appEl.innerHTML = "";

      drawLines(countOfPieces);
      PizzaPieces.innerHTML = `<p>Pizza for ${countOfPieces} participants<p>`;
    });
});

function drawLines(countOfPieces) {
  let angle = 360 / countOfPieces;
  console.log("angle:", angle);
  const pizzListEl = document.getElementById("pizza");
  pizzListEl.innerHTML = "";
  let prevAngle = angle;

  for (let i = 1; i <= countOfPieces; i++) {
    const pieceEl = document.createElement("li");
    pieceEl.style.transform = `rotate(${prevAngle}deg)`;
    prevAngle += angle;
    console.log(pieceEl);
    pizzListEl.appendChild(pieceEl);
  }
}

function getCountOfPizzaPieces(people) {
  if (Array.isArray(people)) {
    return people.filter((i) => i.eatsPizza).length;
  } else {
    return 0;
  }
}
