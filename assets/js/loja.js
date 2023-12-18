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
  const itensComPreco = {
    'preço-cenoura': 14,
    'preço-batata': 14,
    'preço-maça': 14,
    'preço-Strigo': 14,
    'preço-Sabobora': 14
  };

  for (const itemId in itensComPreco) {
    const quantidade = document.getElementById(itemId.replace('preço-', ''));
    const preco = document.getElementById(itemId);

    if (quantidade && preco) {
      quantidade.addEventListener('click', function () {
        switch (this.textContent) {
          case '64X':
            this.textContent = '32X';
            atualizarPreco(preco, 7);
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
            atualizarPreco(preco, 14);
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

document.addEventListener('DOMContentLoaded', function () {
  const itensComPreco = {
    'preço-trigo': 15,
    'preço-Smelancia': 15,
    'preço-vaca': 15,
    'preço-ovelha': 15,
    'preço-porco': 15,
    'preço-galinha': 15
  };

  for (const itemId in itensComPreco) {
    const quantidade = document.getElementById(itemId.replace('preço-', ''));
    const preco = document.getElementById(itemId);

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


document.addEventListener('DOMContentLoaded', function () {
  const bagaQuantidade = document.getElementById('baga');
  const precoBaga = document.getElementById('preço-baga');

  bagaQuantidade.addEventListener('click', function () {
    switch (this.textContent) {
      case '64X':
        this.textContent = '32X';
        atualizarPrecoBaga('$5');
        break;
      case '32X':
        this.textContent = '18X';
        atualizarPrecoBaga('$3');
        break;
      case '18X':
        this.textContent = '9X';
        atualizarPrecoBaga('$2');
        break;
      case '9X':
        this.textContent = '64X';
        atualizarPrecoBaga('$10');
        break;
      default:
        break;
    }
  });

  function atualizarPrecoBaga(novoPreco) {
    precoBaga.textContent = novoPreco;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const melanciaQuantidade = document.getElementById('melancia');
  const precoMelancia = document.getElementById('preço-melancia');

  melanciaQuantidade.addEventListener('click', function () {
    switch (this.textContent) {
      case '64X':
        this.textContent = '32X';
        atualizarPrecoMelancia('$5');
        break;
      case '32X':
        this.textContent = '18X';
        atualizarPrecoMelancia('$3');
        break;
      case '18X':
        this.textContent = '9X';
        atualizarPrecoMelancia('$2');
        break;
      case '9X':
        this.textContent = '64X';
        atualizarPrecoMelancia('$10');
        break;
      default:
        break;
    }
  });

  function atualizarPrecoMelancia(novoPreco) {
    precoMelancia.textContent = novoPreco;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const cacauQuantidade = document.getElementById('cacau');
  const precoCacau = document.getElementById('preço-cacau');

  cacauQuantidade.addEventListener('click', function () {
    switch (this.textContent) {
      case '64X':
        this.textContent = '32X';
        atualizarPrecoCacau('$8');
        break;
      case '32X':
        this.textContent = '18X';
        atualizarPrecoCacau('$4');
        break;
      case '18X':
        this.textContent = '9X';
        atualizarPrecoCacau('$2');
        break;
      case '9X':
        this.textContent = '64X';
        atualizarPrecoCacau('$16');
        break;
      default:
        break;
    }
  });

  function atualizarPrecoCacau(novoPreco) {
    precoCacau.textContent = novoPreco;
  }
});
