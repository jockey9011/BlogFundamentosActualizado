function abrirImagen(imagen) {
  var ventanaNueva = window.open("", "", "width=" + imagen.naturalWidth + ", height=" + imagen.naturalHeight);
  ventanaNueva.document.write("<img src='" + imagen.src + "'>");
  ventanaNueva.document.close();
}