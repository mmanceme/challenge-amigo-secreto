 // Arreglo para almacenar los amigos
    let amigos = [];

    // Función para agregar un amigo
    function agregarAmigo() {
      let input = document.getElementById("amigo");
      let nombre = input.value.trim();

      if (nombre) {
        amigos.push(nombre);

        // Mostrar en la lista
        let lista = document.getElementById("listaAmigos");
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombre;
        lista.appendChild(nuevoElemento);

        console.log("Amigos actuales:", amigos);

        // Limpiar el input
        input.value = "";
        input.focus();
      } else {
        alert("Por favor, ingresa un nombre válido.");
      }
    }