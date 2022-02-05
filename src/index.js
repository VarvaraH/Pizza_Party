import "./styles.scss";

const appEl = document.getElementById("app");
const btn = document.getElementById("load-btn");
// const pizzaPicture = document.getElementById("pizzaPicture");
const PizzaPieces = document.getElementById("numberOfPizzaPieces");

appEl.innerHTML = `<p>Click 👆 this button</p>`;

btn.addEventListener("click", () => {
  appEl.innerHTML = "waiting...";

  fetch("https://gp-js-test.herokuapp.com/pizza")
    .then((response) => response.json())
    .then((data) => {
      const countOfPieces = getCountOfPizzaPieces(data.party);
      appEl.style.display = "none";
      // draw pizza
      PizzaPieces.innerHTML = `<p>Pizza for ${countOfPieces} participants<p>`;

      const numSections = countOfPieces;

      function drawLines() {
        let angle = 360 / numSections;
        console.log("angle:", angle);

        for (let i = 1; i <= numSections.sections; i++) {
          //сектора
        }
      }
      drawLines();
    });
});

function getCountOfPizzaPieces(people) {
  if (Array.isArray(people)) {
    return people.filter((i) => i.eatsPizza).length;
  } else {
    return 0;
  }
}
