import { usuarios } from "./modulo.js";

const $root = document.querySelector("#root");
// const $div = document.createElement("div");
// const $p = document.createElement("p");
// let texto = "Este seria el texto del elemento";
// // $div.textContent = texto;
// $div.classList.add("box");

// $p.textContent = texto;
// $p.classList.add("box__texto");

// $root.appendChild($div);
// $div.appendChild($p);

usuarios().then((listado) => {
  listado.forEach(usuario => {
    // aqui esta el nombre de usuario 
    const $div = document.createElement("div");
    $div.classList.add("box");
    const $h2 = document.createElement("h2");
    $h2.classList.add("box__texto");
    $h2.textContent = usuario.name;
    $root.appendChild($div);
    $div.appendChild($h2);

    //aqui esa el resto de datos
    const $p = document.createElement("p");
    $p.textContent = usuario.email
    $div.appendChild($p);
  });

});
