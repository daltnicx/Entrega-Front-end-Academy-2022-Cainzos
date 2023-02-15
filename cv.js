console.log("Hola mundo!");

const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
	navMenu.classList.toggle("nav-menu_visible")
})

menuLinks.forEach(menuLink =>{
  menuLink.addEventListener("click", function() {
    navMenu.classList.remove("nav-menu_visible");
  })
})

function openH(evt, HName) {
  var i, herram, links;
  herram = document.getElementsByClassName("herramientas");
  for (i = 0; i < herram.length; i++) {
    herram[i].style.display = "none";
  }
  links = document.getElementsByClassName("item-conocimiento");
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" active", "");
  }
  document.getElementById(HName).style.display = "block";
  evt.currentTarget.className += " active";
}
