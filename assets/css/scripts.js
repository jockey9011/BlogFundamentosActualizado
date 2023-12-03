function abrirImagen(rutaImagen) {
  var imagenAmpliada = document.getElementById("imagenAmpliada");
  imagenAmpliada.innerHTML = "<img src='" + rutaImagen + "'>";
  imagenAmpliada.style.display = "block";
}

function cerrarImagen() {
  var imagenAmpliada = document.getElementById("imagenAmpliada");
  imagenAmpliada.style.display = "none";
  imagenAmpliada.innerHTML = "";
}