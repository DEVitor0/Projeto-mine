const hamburgerBtn = document.getElementById('hamburger-btn');
const menuList = document.querySelector('.menu-list');

hamburgerBtn.addEventListener('click', function () {
  this.classList.toggle('active');
  menuList.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
  const items = [
    { id: 'pedregulho', precoId: 'preço-pedregulho', precos: { 64: '$8', 32: '$4', 18: '$2', 9: '$1' } },
    { id: 'pedra-lisa', precoId: 'preço-pedra', precos: { 64: '$10', 32: '$5', 18: '$3', 9: '$2' } },
    { id: 'carvão', precoId: 'preço-carvão', precos: { 64: '$16', 32: '$8', 18: '$4', 9: '$2' } },
    { id: 'cobre', precoId: 'preço-cobre', precos: { 64: '$14', 32: '$7', 18: '$4', 9: '$2' } },
    { id: 'ferro', precoId: 'preço-ferro', precos: { 64: '$26', 32: '$13', 18: '$7', 9: '$4' } },
    { id: 'ouro', precoId: 'preço-ouro', precos: { 64: '$28', 32: '$14', 18: '$7', 9: '$4' } },
    { id: 'lapis', precoId: 'preço-lapis', precos: { 64: '$24', 32: '$12', 18: '$6', 9: '$4' } },
    { id: 'diamante', precoId: 'preço-diamante', precos: { 64: '$70', 32: '$60', 18: '$40', 9: '$28' } },
    { id: 'quartzo', precoId: 'preço-quartzo', precos: { 64: '$24', 32: '$12', 18: '$6', 9: '$4' } },
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
    baga: { 64: 10, 32: 5, 18: 3, 9: 2 },
    melancia: { 64: 10, 32: 5, 18: 3, 9: 2 },
    cacau: { 64: 16, 32: 8, 18: 4, 9: 2 },
  };

  for (const itemId in itens) {
    setupQuantidadePreco(itemId, itens[itemId]);
  }
});

//Acima é JP e abaixo é Souza

document.addEventListener('DOMContentLoaded', function () {
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

  const novosItens = {
    cerejeira: { 64: 10, 32: 5, 18: 3, 9: 2 },
    Scarvalho: { 64: 10, 32: 5, 18: 3, 9: 2 },
    Sbetula: { 64: 10, 32: 5, 18: 3, 9: 2 },
    Sabeto: { 64: 10, 32: 5, 18: 3, 9: 2 },
    Sescuro: { 64: 10, 32: 5, 18: 3, 9: 2 },
    SSelva: { 64: 10, 32: 5, 18: 3, 9: 2 },
    Smangue: { 64: 10, 32: 5, 18: 3, 9: 2 },
  };

  for (const itemId in novosItens) {
    setupQuantidadePreco(itemId, novosItens[itemId]);
  }
});

//acima é andre e abaixo é dragonov

// Função genérica para atualizar o preço no elemento HTML
function atualizarPreco(precoElemento, novoPreco) {
  precoElemento.textContent = `$${novoPreco}`;
}

document.addEventListener('DOMContentLoaded', function () {
  function configurarElemento(idElemento, idPreco, precoConfig) {
    const quantidade = document.getElementById(idElemento);
    const preco = document.getElementById(idPreco);

    quantidade.addEventListener('click', function () {
      switch (this.textContent) {
        case precoConfig[0].quantidade:
          this.textContent = precoConfig[1].quantidade;
          atualizarPreco(preco, precoConfig[1].preco);
          break;
        case precoConfig[1].quantidade:
          this.textContent = precoConfig[2].quantidade;
          atualizarPreco(preco, precoConfig[2].preco);
          break;
        case precoConfig[2].quantidade:
          this.textContent = precoConfig[3].quantidade;
          atualizarPreco(preco, precoConfig[3].preco);
          break;
        case precoConfig[3].quantidade:
          this.textContent = precoConfig[0].quantidade;
          atualizarPreco(preco, precoConfig[0].preco);
          break;
        default:
          break;
      }
    });
  }

  // Configuração dos elementos
  configurarElemento('cristal', 'preço-cristal', [
    { quantidade: '12X', preco: 16 },
    { quantidade: '6X', preco: 8 },
    { quantidade: '3X', preco: 4 },
    { quantidade: '1X', preco: 2 }
  ]);

  configurarElemento('xp', 'preço-xp', [
    { quantidade: '64X', preco: 20 },
    { quantidade: '32X', preco: 10 },
    { quantidade: '18X', preco: 5 },
    { quantidade: '9X', preco: 3 }
  ]);

  configurarElemento('Cdourada', 'preço-Cdourada', [
    { quantidade: '64X', preco: 18 },
    { quantidade: '32X', preco: 9 },
    { quantidade: '18X', preco: 4 },
    { quantidade: '9X', preco: 2 }
  ]);

  configurarElemento('maçaD', 'preço-maçaD', [
    { quantidade: '64X', preco: 22 },
    { quantidade: '32X', preco: 11 },
    { quantidade: '18X', preco: 6 },
    { quantidade: '9X', preco: 3 }
  ]);
});

//Login do usuario

document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const usuario = params.get('usuario');

  if (usuario) {
    const boasVindasDiv = document.getElementById('boas-vindas');
    const paragrafo = boasVindasDiv.querySelector('p');
    paragrafo.innerText = `Seja bem-vindo, ${usuario}!`;

    const saldoElement = document.getElementById('saldo');
    saldoElement.style.display = 'flex';

    const saldos = {
      'Kaua': 270,
      'Kevin': 310,
      'Eduardo': 130,
      'João': 380,
      'Andre': 420
    };

    let saldoDoJogador = saldos[usuario];

    const saldoParagrafo = document.getElementById('saldoJogador');
    saldoParagrafo.innerText = `$${saldoDoJogador}`;

    const botaoCompra = document.querySelectorAll('.botão');

    botaoCompra.forEach(botao => {
      botao.addEventListener('click', function (event) {
        const produtoSelecionado = this.parentNode.querySelector('h3').textContent;
        const quantidade = this.parentNode.querySelector('.quantidades').textContent;

        if (!usuario) {
          event.preventDefault();
          window.alert('Atualmente você se encontra desconectado. Conecte-se para efetuar compras');
          return;
        }

        const precoProduto = parseInt(this.parentNode.querySelector('.preços-personalizados').textContent.slice(1));

        const saldoSuficiente = verificarSaldoSuficiente(usuario, precoProduto);

        if (!saldoSuficiente || precoProduto > saldoDoJogador || saldoDoJogador <= 0) {
          event.preventDefault();
          if (saldoDoJogador <= 0) {
            window.alert('Saldo insuficiente. Você não possui saldo para comprar este produto.');
          } else {
            window.alert('Saldo insuficiente. Você não possui saldo suficiente para comprar este produto.');
          }
          return;
        }

        const dataHoraAtual = new Date();
        const dia = dataHoraAtual.getDate();
        const mes = dataHoraAtual.getMonth() + 1;
        const hora = dataHoraAtual.getHours();
        const minutos = dataHoraAtual.getMinutes();

        const confirmacaoCompra = `Você deseja comprar ${quantidade} de ${produtoSelecionado}?`;

        const confirmacao = window.confirm(confirmacaoCompra);

        if (confirmacao) {
          const novoSaldo = saldoDoJogador - precoProduto;
          saldoParagrafo.innerText = `$${novoSaldo}`;
          window.alert(`Parabéns! Você comprou ${quantidade} de ${produtoSelecionado} às ${hora}:${minutos} do dia ${dia}/${mes} por ${precoProduto} pontos. Seu novo saldo é: ${novoSaldo} pontos`);
          saldoDoJogador = novoSaldo;
        }
      });
    });
  } else {
    const botaoCompra = document.querySelectorAll('.botão');

    botaoCompra.forEach(botao => {
      botao.addEventListener('click', function (event) {
        event.preventDefault();
        window.alert('Você está desconectado. Por favor, faça o login para efetuar compras');
      });
    });
  }

  function verificarSaldoSuficiente(usuario, precoProduto) {
    const saldos = {
      'Kaua': 270,
      'Kevin': 310,
      'Eduardo': 130,
      'João': 380,
      'Andre': 420
    };

    const saldoDoJogador = saldos[usuario];

    return saldoDoJogador >= precoProduto;
  }
});
