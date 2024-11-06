console.log("Godmorgon FJSX24 det är onsdag.");

// addEventListener:

// "Syntaxen är: element.addEventListener('event', funktion);"
// --------------------------------------------------

// Vanliga Händelser

// Lista några vanliga händelser:

// --------------------------------------------------
// click - När användaren klickar på ett element:

let btn = document.getElementById("minKnapp");

btn.addEventListener("click", function (event) {
  event.preventDefault(); // Denna rad förhindrar att sidan laddas om/renderas

  console.log("Nu klickade du på vår button");
  console.log("event: ", event);
  console.log("event: ", event.target.innerText);
});

// 2
// let changeTextBtn = document.getElementById("ändraKnapp");
// let headline = document.getElementById("rubrik");

// changeTextBtn.addEventListener("click", function () {
//   headline.textContent =
//     "Texten har ändrats pgr av vi klickade på Ändra Text knappen.";
// });

// --------------------------------------------------

// mouseover - När muspekaren flyttas över ett element OCH mouseout - När muspekaren lämnar ett element.
// let blueDiv = document.getElementById("ruta");

// blueDiv.addEventListener("mouseover", function () {
//   blueDiv.style.backgroundColor = "red";
// });

// blueDiv.addEventListener("mouseout", function () {
//   blueDiv.style.backgroundColor = "green";
// });

// --------------------------------------------------

// submit - När ett formulär skickas.
let inputNameForm = document.getElementById("mittFormular");

inputNameForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Denna rad förhindrar att sidan laddas om/renderas
  //   console.log("event: ", event.target);
  //   console.log("event: ", event.target.innerHtml);

  //   let formIput = document.getElementById("namn").value;
  //   console.log("formIput ", formIput);

  //   let createdP = document.createElement("p");

  //   createdP.innerText = formIput;

  //   console.log("createdP: ", createdP);
});
// --------------------------------------------------

// Event-objektet
