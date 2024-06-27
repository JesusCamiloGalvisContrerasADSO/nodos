import { usuarios } from "./modulo.js";

const $root = document.querySelector("#root");
const $card = document.createDocumentFragment();
const $template = document.querySelector("#template").content;
console.log($template)

usuarios()
  .then((listado) => {
    listado.forEach((usuario) => {
      $template.querySelector("h1").textContent=usuario.name;
      $template.querySelector("div > p").textContent = usuario.email;
      $template.querySelector("div > p ~ p").textContent = usuario.email;


      let clone = document.importNode($template, true);
      $card.appendChild(clone);
    });

    $root.appendChild($card);
  })
  .catch();




// import { usuarios } from "./modulo.js";

// const $root = document.querySelector("#root");
// const $card = document.createDocumentFragment();
// const $template = document.querySelector("#template").content;
// console.log($template);
// usuarios()
//   .then((listado) => {
//     listado.forEach((usuario) => {
//       $template.querySelector("h1").textContent = usuario.name;
//       $template.querySelector("div > p").textContent = usuario.email;
//       $template.querySelector("div > p ~ p").textContenet = usuario.id;

//       let clone = document.importNode($template, true);
//       $card.appendChild(clone);
//     });
//     $root.appendChild($card);
//   })
//   .catch();

