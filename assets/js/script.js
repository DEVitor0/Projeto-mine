//menu hamburguer
function executeMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const menuList = document.querySelector('.menu-list');

  hamburgerBtn.addEventListener('click', function () {
    this.classList.toggle('active');
    menuList.classList.toggle('active');
  });
}
executeMenu()

function mostrarConteudo(tipo) {
  const eventos = document.getElementById('eventos');
  const noticias = document.getElementById('noticias');
  const regras = document.getElementById('regras');

  if (tipo === 'eventos') {
      eventos.style.display = 'block';
      noticias.style.display = 'none';
      regras.style.display = 'none';
  } else if (tipo === 'noticias') {
      eventos.style.display = 'none';
      noticias.style.display = 'block';
      regras.style.display = 'none';
  } else if (tipo === 'regras') {
      eventos.style.display = 'none';
      noticias.style.display = 'none';
      regras.style.display = 'block';
  }
}

