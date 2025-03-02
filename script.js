const btnNo = document.querySelector("#btn-random");

function moverAleatoriamente(btn) {
    btn.style.position = "absolute";
    btn.style.fontWeight = "bolder";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

// Evento para computadoras (mouse)
btnNo.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target);
});

// Eventos para móviles (pantalla táctil)
btnNo.addEventListener("touchstart", function (e) {
    e.preventDefault(); // Evita que el botón se presione antes de moverse
    moverAleatoriamente(e.target);
});

btnNo.addEventListener("touchmove", function (e) {
    e.preventDefault();
    moverAleatoriamente(e.target);
});