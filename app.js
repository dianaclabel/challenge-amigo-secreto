const elBtn = document.querySelector(".button-add");
const elBtnsortear = document.querySelector(".button-draw");
const elBtnNew = document.getElementById("btn-next");

const listNamesUl = document.getElementById("listaAmigos");
const resultadoUl = document.getElementById("resultado");
let listNames = [];

const agregarAmigo = () => {
  listNamesUl.innerHTML = "";

  let input = document.getElementById("amigo");
  let inputValue = input.value.trim();

  if (inputValue !== "" && inputValue.length > 3) {
    listNames.push(inputValue);
    console.log(inputValue);
    input.value = "";
  }

  console.log(listNames);

  listNames.forEach((i) => {
    const nuevoNameLi = document.createElement("li");
    nuevoNameLi.textContent = i;
    listNamesUl.appendChild(nuevoNameLi);
  });
};

const sortearAmigo = () => {
  elBtn.disabled = true;
  elBtn.style.backgroundColor = "#e6e3e3";
  let random = Math.floor(Math.random() * listNames.length);
  let amigoSecreto = listNames[random];
  resultadoUl.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;

  if (elBtn.disabled === true) {
    elBtnNew.style.opacity = "1";
  }

  return;
};

const nuevoJuego = () => {
  listNames = [];
  elBtn.disabled = false;
  listNamesUl.innerHTML = "";
  resultadoUl.innerHTML = "";

  if (elBtn.disabled === false) {
    elBtnNew.style.opacity = "0";
  }
};

elBtn.addEventListener("click", agregarAmigo);
elBtnsortear.addEventListener("click", sortearAmigo);
elBtnNew.addEventListener("click", nuevoJuego);
