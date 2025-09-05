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
   function sortearAmigo() {
  // 1. Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  // 2. Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // 3. Obtener el nombre sorteado
  let amigoSorteado = amigos[indiceAleatorio];

  // 4. Mostrar el resultado en el HTML
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "🎉 El amigo sorteado es: <strong>" + amigoSorteado + "</strong>";
}
