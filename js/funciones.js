const formulario = document.getElementById("formur");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensajp");

formulario.addEventListener("submit" , function(evento){
evento.preventDefault();
mensaje.textContent = "✅Cliente añadido: " + nombre.value + "("+ correo.value + ")";
})

