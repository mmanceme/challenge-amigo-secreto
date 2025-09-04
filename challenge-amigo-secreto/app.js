 // Arreglo para almacenar los amigos
    let amigos = [];

    // Función para agregar un amigo
    function agregarAmigo() {
      const input = document.getElementById("amigo");
      const nombre = input.value.trim();

      if (nombre) {
        amigos.push(nombre);

        // Mostrar en la lista
        const lista = document.getElementById("listaAmigos");
        const nuevoElemento = document.createElement("li");
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