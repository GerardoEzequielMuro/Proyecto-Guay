var selectInteres = document.getElementById("00N8b00000IEQF9");
var camposOcultos = document.getElementById("camposocultos");

selectInteres.addEventListener("change", function() {
  var opcionSeleccionada = selectInteres.value;

  if (opcionSeleccionada === "Donar") {
    camposOcultos.style.display = "block";
  } else if (opcionSeleccionada === "Ser_Voluntario_y_Donador"){
    camposOcultos.style.display = "block";
  } else if (opcionSeleccionada === "Ser Voluntario"){
    camposOcultos.style.display = "none";
  }
});
