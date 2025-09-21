let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const mensaje = document.getElementById("mensaje-error");

    if (nombre === "") {
        mensaje.textContent = "Por favor, inserte un nombre.";
        return;
    }
    mensaje.textContent = "";

    amigos.push(nombre);
    input.value = "";
    input.focus();
    mostrarAmigos();
    actualizarBotonSortear();
}

function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigos.length === 0) return;

    const indice = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigos[indice]}</strong></li>`;

    amigos.splice(indice, 1);
    mostrarAmigos();
    actualizarBotonSortear();
}

function actualizarBotonSortear() {
    const btnSortear = document.getElementById("btnSortear");
    btnSortear.disabled = amigos.length === 0;
}
