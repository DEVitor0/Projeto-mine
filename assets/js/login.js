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

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const usuario = document.getElementById('user').value;
  const senha = document.getElementById('senha').value;

  const usuarios = {
    'Kaua': 'Lipskk',
    'Kevin': 'kevin102030',
    'Eduardo': '1109',
    'João': 'jpgraciano2701',
    'Andre': 'DodôTop'
  };

  if (usuario in usuarios && usuarios[usuario] === senha) {
    window.location.href = `Loja.html?usuario=${usuario}`;
  } else {
    alert('Credenciais inválidas. Tente novamente.');
  }
});
