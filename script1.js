var btn1 = document.getElementById("btn1");

const colors = [
  "red", // 0
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "pink",
  "violet",
  "aqua",
  "brown", // 9
];

// Option 1
// let initialIndex = 0;

// btn1.addEventListener("click", function () {
//   document.body.style.backgroundColor = colors[initialIndex];
//   console.log(initialIndex);
//   if (initialIndex >= colors.length - 1) {
//     // 9 > 10
//     initialIndex = 0;
//   } else {
//     initialIndex++; // 1, 2,
//   }
// });

// Option 2
// btn1.addEventListener("click", function () {
//   const colorIndex = Math.floor(Math.random() * colors.length);
//   document.body.style.backgroundColor = colors[colorIndex];
// });

// Option 3
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

btn1.addEventListener("click", function () {
  //   RGB
  /* rgb(0-255, 0-255, 0-255) */
  const r = getRandomIntInclusive(0, 255);
  const g = getRandomIntInclusive(0, 255);
  const b = getRandomIntInclusive(0, 255);
  //   const a = Math.random().toFixed(1);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  //   document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
});
