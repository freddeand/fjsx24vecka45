console.log("Godmorgon FJSX24 det är tisdag.");

// getElementById
// let rubrik = document.getElementById("rubrik");
// console.log(rubrik);

// getElementsByClassName
// let paragrafer = document.getElementsByClassName("text");
// console.log(paragrafer);

// querySelector och querySelectorAll
// let förstaItem = document.querySelector(".item");
// let allaItems = document.querySelectorAll(".item");
// console.log(förstaItem); // Endast första <li>
// console.log(allaItems); // NodeList av alla <li> med klassen 'item'

// PAUS
// textContent vs. innerHTML
// let rubrik = document.getElementById("rubrik");
// rubrik.textContent = "Välkommen till min sida!";

// Ändra Attribut
// let bild = document.getElementById("bild");
// bild.setAttribute("src", "bild2.jpg");
// bild.setAttribute("alt", "Bild 2");

// Ändra Stilar
// rubrik.style.color = "blue";
// rubrik.style.fontSize = "4em";

// Använda classList för att Hantera Klasser
// let knapp = document.getElementById("knapp");
// knapp.classList.add("aktiverad");
// knapp.classList.remove("aktiverad");
// knapp.classList.add("innanToggle");
// knapp.classList.toggle("innanToggle");
// knapp.classList.toggle("innanToggle2");

// console.log(knapp);

// --------------------------------

// Eventuellt vid tid:

// Iterera över HTMLCollection och NodeList

// Exempel med HTMLCollection:

// let paragrafer = document.getElementsByClassName("text");
// for (let i = 0; i < paragrafer.length; i++) {
//   paragrafer[i].style.color = "red";
// }

// Exempel med NodeList:

// let items = document.querySelectorAll(".item");
// items.forEach(function (item) {
//   item.style.fontWeight = "bold";
// });

// Skillnad mellan textContent och innerHTML
// Exempel som visar skillnaden:

// Använda textContent:

// let container = document.getElementById("container");
// console.log(container.textContent);
// Output: "Hej världen!"

// Använda innerHTML:

// console.log(container.innerHTML);
// Output: "<p>Hej <strong>världen</strong>!</p>"
