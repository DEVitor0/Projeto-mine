const hamburgerBtn = document.getElementById('hamburger-btn');
const menuList = document.querySelector('.menu-list');

hamburgerBtn.addEventListener('click', function() {
  this.classList.toggle('active'); 
  menuList.classList.toggle('active'); 
});

document.addEventListener('DOMContentLoaded', function () {
  const pedregulhoQuantidade = document.getElementById('pedregulho');
  const precoPedregulho = document.getElementById('preço-pedregulho');

  pedregulhoQuantidade.addEventListener('click', function () {
    switch (this.textContent) {
      case '64X':
        this.textContent = '32X';
        atualizarPreco(32);
        break;
      case '32X':
        this.textContent = '18X';
        atualizarPreco(18);
        break;
      case '18X':
        this.textContent = '9X';
        atualizarPreco(9);
        break;
      case '9X':
        this.textContent = '64X';
        atualizarPreco(64);
        break;
      default:
        break;
    }
  });

  function atualizarPreco(novaQuantidade) {
    const precosPorQuantidade = {
      64: '$8',
      32: '$4',
      18: '$2',
      9: '$1'
    };

    const novoPreco = precosPorQuantidade[novaQuantidade];
    precoPedregulho.textContent = novoPreco;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const pedraLisaQuantidade = document.getElementById('pedra-lisa');
  const precoPedraLisa = document.getElementById('preço-pedra');

  pedraLisaQuantidade.addEventListener('click', function () {
    switch (this.textContent) {
      case '64X':
        this.textContent = '32X';
        atualizarPreco(32);
        break;
      case '32X':
        this.textContent = '18X';
        atualizarPreco(18);
        break;
      case '18X':
        this.textContent = '9X';
        atualizarPreco(9);
        break;
      case '9X':
        this.textContent = '64X';
        atualizarPreco(64);
        break;
      default:
        break;
    }
  });

  function atualizarPreco(novaQuantidade) {
    const precosPorQuantidade = {
      64: '$10',
      32: '$5',
      18: '$3',
      9: '$2'
    };

    const novoPreco = precosPorQuantidade[novaQuantidade];
    precoPedraLisa.textContent = novoPreco;
  }
});
