//menu hamburguer
const hamburgerBtn = document.getElementById('hamburger-btn');
const menuList = document.querySelector('.menu-list');

hamburgerBtn.addEventListener('click', function() {
  this.classList.toggle('active'); 
  menuList.classList.toggle('active'); 
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const usuario = document.getElementById('user').value;
  const senha = document.getElementById('senha').value;

  if (usuario === 'Kaua' && senha === 'Lipskk') {
      window.location.href = 'LojaKaua.html'; //!REVER OS CAMINHOS DE CADA ITEM
  } else if (usuario === 'Kevin' && senha === 'kevin102030') {
      window.location.href = 'LojaKevin.html'; //!REVER OS CAMINHOS DE CADA ITEM
  } else if (usuario === 'Eduardo' && senha === '1109') {
      window.location.href = 'Eduardo.html'; //!REVER OS CAMINHOS DE CADA ITEM
  } else if (usuario === 'João' && senha === 'jpgraciano2701') {
      window.location.href = 'Joao.html'; //!REVER OS CAMINHOS DE CADA ITEM
  } else if (usuario === 'Andre' && senha === 'DodôTop') {
    window.location.href = 'Andre.html' ; //!REVER OS CAMINHOS DE CADA ITEM
  } else {
      alert('Credenciais inválidas. Tente novamente.');
  }
});
