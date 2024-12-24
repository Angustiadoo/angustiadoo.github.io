// Leer mensaje personalizado desde los parámetros de la URL
const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURIComponent(messageCustom);
}

// Referencias a los botones
const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');

// Inicializar estado de los botones
btnCloseElement.disabled = true;

// Evento para abrir la carta
btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;

  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;

    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    // Mostrar animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';
  }, 500);
});

// Evento para cerrar la carta y redirigir a otra página
btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    // Ocultar animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none';

    // Redirigir a la página con la carta adicional
    window.location.href = 'carta-adicional.html';
  }, 500);
});
