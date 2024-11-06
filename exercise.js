console.log("onsdags övningar");

// Övning 1: Enkel Räknare

// Uppgift:
// Skapa två knappar:

// En med id="ökaKnapp" och texten "Öka".
// En med id="minskaKnapp" och texten "Minska".
// **Lägg till ett p-element med id="räknare" som visar startvärdet 0.

// Använd JavaScript för att:

// Lägga till event listeners på knapparna.
// När "Öka" klickas, öka värdet med 1 och uppdatera texten i p-elementet.
// När "Minska" klickas, minska värdet med 1 och uppdatera texten.
// Syfte:
// Öva på att hantera klickhändelser och uppdatera DOM baserat på användarinteraktion.
let counter = 0;
let addBtn = document.getElementById("ökaKnapp");

addBtn.addEventListener("click", function () {
  let countPlus = document.getElementById("räknare");
  counter += 1;
  countPlus.innerHTML = counter;
});

let reduceBtn = document.getElementById("minskaKnapp");
reduceBtn.addEventListener("click", function () {
  let countMinus = document.getElementById("räknare");
  counter -= 1;
  countMinus.innerHTML = counter;
});
// ------------------------------------------------------------------------

// Övning 2: Formulärvalidering

// Uppgift:
// Skapa ett formulär med ett textfält (input type="text") och en knapp (input type="submit").

// Använd JavaScript för att:

// Lyssna på submit-händelsen på formuläret.
// Förhindra standardbeteendet (att sidan laddas om) med event.preventDefault().
// Kontrollera att textfältet inte är tomt.
// Om det är tomt, visa ett felmeddelande under formuläret.
// Om det inte är tomt, visa en bekräftelse.
// Syfte:
// Öva på att hantera formulärhändelser och validera användarinmatning.

let userInputWriteSomething = document.getElementById("mittFormulär");
let createdP = document.createElement("p");
let inputField = document.getElementById("textFält");
userInputWriteSomething.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
  if (inputField.value.trim() === "") {
    // let createdP = document.createElement("p");
    createdP.innerText = "FEL";
    console.log("Fel mata in en text");
  } else {
    createdP.innerText = "RÄTT";
    console.log("rätt ! GJ!");
  }
  if (!userInputWriteSomething.contains(createdP)) {
    userInputWriteSomething.appendChild(createdP);
  }
});
// ------------------------------------------------------------------------

// Övning 3: Ändra Bild vid Musöver

// Uppgift:
// Lägg till en bild (img) med id="minBild" och src="bild1.jpg".

// Använd JavaScript för att:

// Lyssna på mouseover och mouseout-händelser på bilden.
// När muspekaren är över bilden, ändra src till bild2.jpg.
// När muspekaren lämnar bilden, ändra tillbaka till bild1.jpg.
// Syfte:
// Öva på att hantera mus-händelser och ändra attribut på element.

let pic = document.getElementById("minBild");
let originalSrc = pic.getAttribute("src");

pic.addEventListener("mouseover", function () {
  pic.setAttribute(
    "src",
    "https://www.shutterstock.com/shutterstock/photos/2462607155/display_1500/stock-vector-lightning-with-shield-logo-vector-electric-safety-logo-inspiration-2462607155.jpg"
  );
  //   console.log(pic);
});

pic.addEventListener("mouseout", function () {
  pic.setAttribute("src", originalSrc);
});

// ------------------------------------------------------------------------

// Fler övningar som mängd tränar er om gårdagens och dagens ämen finns här:
// https://github.com/FJSX24/fjsx24vecka45/tree/wednesday-6nov-DOM-Bootcamp

// Blir ni klar tidigt kan ni leka runt och lägga till nya addEventListener
// https://www.shutterstock.com/shutterstock/photos/2462607155/display_1500/stock-vector-lightning-with-shield-logo-vector-electric-safety-logo-inspiration-2462607155.jpg
