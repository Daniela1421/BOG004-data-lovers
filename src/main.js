import {sortChampions} from "./data.js";
import {filterByKey} from "./data.js";
import data from './data/lol/lol.js';
let dataLOL = Object.values(data.data);

document.getElementById("btnChampion").addEventListener("click", hidepages)

function hidepages() {
  document.getElementById("pag1").style.display = "none";
  document.getElementById("pag2").style.display = "block";
  document.getElementById("pag3").style.display = "none";
}

//Mostrar en la pagina los filtros y el orden 

let bringForm = document.getElementById("cardPrincipal");

const showInScreen = (showChampion) => {
  bringForm.innerHTML = "";
  showChampion.forEach((champion) => {
    const image = champion.splash;
    let card = document.createElement("div");
    card.setAttribute("class", "cardChampion face");
    // CREANDO CON LITERAL TEMPLATE
    card.innerHTML = `
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h3>${champion.name}</h3>
          <img class = "image" src = ${image}>
          <h4>${champion.title}</h4>
        </div>
        <div class="flip-card-back">
          <h4>${champion.blurb}</h4>
        </div>
      </div>
    </div>
       
    `
    bringForm.appendChild(card);
  })
};

document.getElementById("btnAll").addEventListener("click", () => {
  showInScreen(dataLOL);
});

document.getElementById("btnKiller").addEventListener("click", () => {
  showInScreen(filterByKey(dataLOL, "Assassin"));
})//Filtro por asesinos

document.getElementById("btnMagic").addEventListener("click", () => {
  showInScreen(filterByKey(dataLOL, "Mage"));
})//Filtro por Magos

document.getElementById("btnFighter").addEventListener("click", () => {
  showInScreen(filterByKey(dataLOL, "Fighter"));
})//Filtro por Luchadores

document.getElementById("btnMarksman").addEventListener("click", () => {
  showInScreen(filterByKey(dataLOL, "Marksman"));
})//Filtro por Tiradores

document.getElementById("btnTank").addEventListener("click", () => {
  showInScreen(filterByKey(dataLOL, "Tank"));
})//Filtro por Tanques

document.getElementById("btnSupport").addEventListener("click", () => {
  showInScreen(filterByKey(dataLOL, "Support"));
})//Filtro por apoyos 

const bringOrder = document.getElementById("order")
bringOrder.addEventListener("change", () => {
  let orderChampions = sortChampions(dataLOL)
  if(bringOrder.value === "btnZA"){
    showInScreen(orderChampions);
  } else {
    showInScreen(orderChampions.reverse());
  }
})
