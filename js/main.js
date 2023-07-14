const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const currentItem = document.querySelector(".active");
    currentItem.classList.remove("active");
    e.target.classList.add("active");
  });
});



const body = document.querySelector("body");
const btn = document.querySelector("#boton");

btn.addEventListener("click", function (e) {
  body.classList.toggle("Modo_Oscuro");
  btn.classList.toggle("Modo_Oscuro");
});

