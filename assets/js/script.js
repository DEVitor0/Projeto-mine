// Selecionar o botão do menu hamburguer
const hamburgerBtn = document.getElementById('hamburger-btn');
const menuList = document.querySelector('.menu-list');

// Adicionar evento de clique ao botão do menu hamburguer
hamburgerBtn.addEventListener('click', function() {
  this.classList.toggle('active'); // Adicionar ou remover a classe 'active' ao botão
  menuList.classList.toggle('active'); // Adicionar ou remover a classe 'active' ao menu
});
