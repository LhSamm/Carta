const ventana = document.getElementById('ventanaPregunta');
const preguntaTexto = document.getElementById('preguntaTexto');
const siBtn = document.getElementById('siBtn');
const noBtn = document.getElementById('noBtn');

const abrirCartaBtn = document.getElementById('abrirCarta');
const carta = document.getElementById('carta');

let respuestasNo = [
    "Are you sure? ❤️",
    "Really?",
    "I don't believe it",
    "Say yes",
    "Please",
    "Pleaseee",
    "One more opportunity",
    "Really, you go to this way",
    "How did you get here?"
];

let contadorNo = 0;
const maxIntentosNo = respuestasNo.length;

// Respuesta Sí
siBtn.addEventListener('click', () => {
    ventana.style.display = 'none';
    abrirCartaBtn.style.display = 'block';
});

// Respuesta No
noBtn.addEventListener('click', () => {
    if (contadorNo < maxIntentosNo) {
        preguntaTexto.textContent = respuestasNo[contadorNo];
        preguntaTexto.classList.add('animate-shake');
        setTimeout(() => preguntaTexto.classList.remove('animate-shake'), 400);
        contadorNo++;
    } else {
        preguntaTexto.textContent = "Okay, now you have to say yes 😉";
        noBtn.disabled = true;
        noBtn.style.cursor = "not-allowed";
        noBtn.style.opacity = 0.5;
    }
});

// Abrir carta
abrirCartaBtn.addEventListener('click', () => {
    carta.classList.add('abierta');
    abrirCartaBtn.style.display = 'none';
});
