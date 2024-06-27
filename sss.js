const ul = document.querySelector("#ul"); 
const fragmento = document.createDocumentFragment();

const lista = ["Firefox", "Chrome", "Opera", "Safari", "Internet Explorer"];

lista.forEach(function (datoLis) {
  const li = document.createElement("li");
  li.textContent = datoLis;
  fragmento.appendChild(li);
});

ul.appendChild(fragmento);
