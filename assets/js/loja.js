const hamburgerBtn = document.getElementById('hamburger-btn');
const menuList = document.querySelector('.menu-list');

hamburgerBtn.addEventListener('click', function() {
  this.classList.toggle('active'); 
  menuList.classList.toggle('active'); 
});

document.addEventListener('DOMContentLoaded', function () {
  const items = [
    { id: 'pedregulho', precoId: 'preço-pedregulho', precos: { 64: '$8', 32: '$4', 18: '$2', 9: '$1' } },
    { id: 'pedra-lisa', precoId: 'preço-pedra', precos: { 64: '$10', 32: '$5', 18: '$3', 9: '$2' } },
    { id: 'carvão', precoId: 'preço-carvão', precos: { 64: '$16', 32: '$8', 18: '$4', 9: '$2' } },
    { id: 'cobre', precoId: 'preço-cobre', precos: { 64: '$14', 32: '$7', 18: '$4', 9: '$2' } },
    { id: 'ametista', precoId: 'preço-ametista', precos: { 64: '$10', 32: '$5', 18: '$3', 9: '$2' } },
    { id: 'ferro', precoId: 'preço-ferro', precos: { 64: '$26', 32: '$13', 18: '$7', 9: '$4' } },
    { id: 'ouro', precoId: 'preço-ouro', precos: { 64: '$28', 32: '$14', 18: '$7', 9: '$4' } },
    { id: 'lapis', precoId: 'preço-lapis', precos: { 64: '$24', 32: '$12', 18: '$6', 9: '$4' } },
    { id: 'diamante', precoId: 'preço-diamante', precos: { 64: '$70', 32: '$60', 18: '$40', 9: '$28' } },
    { id: 'quartzo', precoId: 'preço-quartzo', precos: { 64: '$24', 32: '$12', 18: '$6', 9: '$4' } },
    { id: 'netherite', precoId: 'preço-netherite', precos: { 10: '$250', 5: '$125', 2: '$75', 1: '$32' } },
  ];

  items.forEach(item => {
    const quantidade = document.getElementById(item.id);
    const preco = document.getElementById(item.precoId);

    quantidade.addEventListener('click', function () {
      switch (this.textContent) {
        case '64X':
          this.textContent = '32X';
          atualizarPreco(preco, item.precos[32]);
          break;
        case '32X':
          this.textContent = '18X';
          atualizarPreco(preco, item.precos[18]);
          break;
        case '18X':
          this.textContent = '9X';
          atualizarPreco(preco, item.precos[9]);
          break;
        case '9X':
          this.textContent = '64X';
          atualizarPreco(preco, item.precos[64]);
          break;
        default:
          break;
      }
    });
  });

  function atualizarPreco(precoElemento, novoPreco) {
    precoElemento.textContent = novoPreco;
  }
});

function deslogado() {
  window.alert('atualmente você está desconectado de sua conta. Conecte-se para efetuar a compra')
}

//acima é vikthpo e para baixo é a loja do kevin

document.addEventListener('DOMContentLoaded', function () {
  const itensComPreco = {
    'carvalho': 15,
    'abeto': 15,
    'betula': 15,
    'escuro': 15,
    'selva': 15,
    'acacia': 15,
    'mangue': 15,
    'cerejeira': 15,
    'carmesim': 15,
    'distorcida': 15
  };

  for (const itemId in itensComPreco) {
    const quantidade = document.getElementById(itemId);
    const preco = document.getElementById(`preço-${itemId}`);

    if (quantidade && preco) {
      quantidade.addEventListener('click', function () {
        switch (this.textContent) {
          case '64X':
            this.textContent = '32X';
            atualizarPreco(preco, 8);
            break;
          case '32X':
            this.textContent = '18X';
            atualizarPreco(preco, 4);
            break;
          case '18X':
            this.textContent = '9X';
            atualizarPreco(preco, 2);
            break;
          case '9X':
            this.textContent = '64X';
            atualizarPreco(preco, 15);
            break;
          default:
            break;
        }
      });
    }
  }

  function atualizarPreco(precoElemento, novoPreco) {
    precoElemento.textContent = `$${novoPreco}`;
  }
});

//acima é kevin e abaixo é JP

document.addEventListener('DOMContentLoaded', function () {
  // Função genérica para atualizar o preço
  function setupQuantidadePreco(itemId, precoPorQuantidade) {
    const quantidade = document.getElementById(itemId);
    const preco = document.getElementById(`preço-${itemId}`);

    quantidade.addEventListener('click', function () {
      switch (this.textContent) {
        case '64X':
          this.textContent = '32X';
          atualizarPreco(preco, precoPorQuantidade[32]);
          break;
        case '32X':
          this.textContent = '18X';
          atualizarPreco(preco, precoPorQuantidade[18]);
          break;
        case '18X':
          this.textContent = '9X';
          atualizarPreco(preco, precoPorQuantidade[9]);
          break;
        case '9X':
          this.textContent = '64X';
          atualizarPreco(preco, precoPorQuantidade[64]);
          break;
        default:
          break;
      }
    });
  }

  function atualizarPreco(precoElemento, novoPreco) {
    precoElemento.textContent = `$${novoPreco}`;
  }

  const itens = {
    cenoura: { 64: 14, 32: 7, 18: 4, 9: 2 },
    batata: { 64: 14, 32: 7, 18: 4, 9: 2 },
    maça: { 64: 14, 32: 7, 18: 4, 9: 2 },
    Strigo: { 64: 14, 32: 7, 18: 4, 9: 2 },
    Sabobora: { 64: 14, 32: 7, 18: 4, 9: 2 },
    trigo: { 64: 15, 32: 8, 18: 4, 9: 2 },
    Smelancia: { 64: 15, 32: 8, 18: 4, 9: 2 },
    vaca: { 64: 15, 32: 8, 18: 4, 9: 2 },
    ovelha: { 64: 15, 32: 8, 18: 4, 9: 2 },
    porco: { 64: 15, 32: 8, 18: 4, 9: 2 },
    galinha: { 64: 15, 32: 8, 18: 4, 9: 2 },
    baga: { 64: 10, 32: 5, 18: 3, 9: 2 },
    melancia: { 64: 10, 32: 5, 18: 3, 9: 2 },
    cacau: { 64: 16, 32: 8, 18: 4, 9: 2 },
  };

  for (const itemId in itens) {
    setupQuantidadePreco(itemId, itens[itemId]);
  }
});
