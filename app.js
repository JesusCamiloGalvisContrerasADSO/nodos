import { usuarios } from "./modulo.js";

const $root = document.querySelector("#root");
const $fragmento = document.createDocumentFragment();
// const $div = document.createElement("div");
// const $p = document.createElement("p");
// let texto = "Este seria el texto del elemento";
// // $div.textContent = texto;
// $div.classList.add("box");

// $p.textContent = texto;
// $p.classList.add("box__texto");

// $root.appendChild($div);
// $div.appendChild($p);

$root.classList.add("container");
$root.classList.add("caja")

usuarios().then((listado) => {
  listado.forEach(usuario => {
    // aqui esta el nombre de usuario 
    const $div = document.createElement("div");
    $div.classList.add("box");
    const $h2 = document.createElement("h2");
    $h2.classList.add("box__texto");
    $h2.textContent = usuario.name;
    $fragmento.appendChild($div);
    $div.appendChild($h2);

    //aqui esa el resto de datos
    const $email = document.createElement("p");
    $email.textContent = usuario.email
    $div.appendChild($email);

    const $tel = document.createElement("p");
    $tel.textContent = usuario.phone
    $div.appendChild($tel);

    const $user = document.createElement("p");
    $user.textContent = usuario.username;
    $div.appendChild($user);

    const $web = document.createElement("p");
    $web.textContent = usuario.website;
    $div.appendChild($web);

    const $id = document.createElement("p");
    $id.textContent = usuario.id;
    $div.appendChild($id);

    const $adres = document.createElement("p");
    $id.textContent = (`ciudad: ${usuario.address.city} `);
    $div.appendChild($adres);

    const $direccion = document.createElement("p");
    $direccion.textContent = `dirección: ${usuario.address.suite} `;
    $div.appendChild($direccion);
  });

  $root.appendChild($fragmento)
});
