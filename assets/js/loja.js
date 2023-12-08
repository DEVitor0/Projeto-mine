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

document.addEventListener('DOMContentLoaded', function () {
  const carvaoQuantidade = document.getElementById('carvão');
  const precoCarvao = document.getElementById('preço-carvão');

  carvaoQuantidade.addEventListener('click', function () {
    switch (this.textContent) {
      case '64X':
        this.textContent = '32X';
        atualizarPrecoCarvao(32);
        break;
      case '32X':
        this.textContent = '18X';
        atualizarPrecoCarvao(18);
        break;
      case '18X':
        this.textContent = '9X';
        atualizarPrecoCarvao(9);
        break;
      case '9X':
        this.textContent = '64X';
        atualizarPrecoCarvao(64);
        break;
      default:
        break;
    }
  });

  function atualizarPrecoCarvao(novaQuantidade) {
    const precosPorQuantidadeCarvao = {
      64: '$16',
      32: '$8',
      18: '$4',
      9: '$2'
    };

    const novoPrecoCarvao = precosPorQuantidadeCarvao[novaQuantidade];
    precoCarvao.textContent = novoPrecoCarvao;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const cobreQuantidade = document.getElementById('cobre');
  const precoCobre = document.getElementById('preço-cobre');

  cobreQuantidade.addEventListener('click', function () {
    switch (this.textContent) {
      case '64X':
        this.textContent = '32X';
        atualizarPrecoCobre(32);
        break;
      case '32X':
        this.textContent = '18X';
        atualizarPrecoCobre(18);
        break;
      case '18X':
        this.textContent = '9X';
        atualizarPrecoCobre(9);
        break;
      case '9X':
        this.textContent = '64X';
        atualizarPrecoCobre(64);
        break;
      default:
        break;
    }
  });

  function atualizarPrecoCobre(novaQuantidade) {
    const precosPorQuantidadeCobre = {
      64: '$14',
      32: '$7',
      18: '$4',
      9: '$2'
    };

    const novoPrecoCobre = precosPorQuantidadeCobre[novaQuantidade];
    precoCobre.textContent = novoPrecoCobre;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const ametistaQuantidade = document.getElementById('ametista');
  const precoAmetista = document.getElementById('preço-ametista');

  ametistaQuantidade.addEventListener('click', function () {
    switch (this.textContent) {
      case '64X':
        this.textContent = '32X';
        atualizarPrecoAmetista(32);
        break;
      case '32X':
        this.textContent = '18X';
        atualizarPrecoAmetista(18);
        break;
      case '18X':
        this.textContent = '9X';
        atualizarPrecoAmetista(9);
        break;
      case '9X':
        this.textContent = '64X';
        atualizarPrecoAmetista(64);
        break;
      default:
        break;
    }
  });

  function atualizarPrecoAmetista(novaQuantidade) {
    const precosPorQuantidadeAmetista = {
      64: '$10',
      32: '$5',
      18: '$3',
      9: '$2'
    };

    const novoPrecoAmetista = precosPorQuantidadeAmetista[novaQuantidade];
    precoAmetista.textContent = novoPrecoAmetista;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const ferroQuantidade = document.getElementById('ferro');
  const precoFerro = document.getElementById('preço-ferro');

  ferroQuantidade.addEventListener('click', function () {
    switch (this.textContent) {
      case '64X':
        this.textContent = '32X';
        atualizarPrecoFerro(32);
        break;
      case '32X':
        this.textContent = '18X';
        atualizarPrecoFerro(18);
        break;
      case '18X':
        this.textContent = '9X';
        atualizarPrecoFerro(9);
        break;
      case '9X':
        this.textContent = '64X';
        atualizarPrecoFerro(64);
        break;
      default:
        break;
    }
  });

  function atualizarPrecoFerro(novaQuantidade) {
    const precosPorQuantidadeFerro = {
      64: '$26',
      32: '$13',
      18: '$7',
      9: '$4'
    };

    const novoPrecoFerro = precosPorQuantidadeFerro[novaQuantidade];
    precoFerro.textContent = novoPrecoFerro;
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const ouroQuantidade = document.getElementById('ouro');
  const precoOuro = document.getElementById('preço-ouro');

  ouroQuantidade.addEventListener('click', function () {
    switch (this.textContent) {
      case '64X':
        this.textContent = '32X';
        atualizarPrecoOuro(32);
        break;
      case '32X':
        this.textContent = '18X';
        atualizarPrecoOuro(18);
        break;
      case '18X':
        this.textContent = '9X';
        atualizarPrecoOuro(9);
        break;
      case '9X':
        this.textContent = '64X';
        atualizarPrecoOuro(64);
        break;
      default:
        break;
    }
  });

  function atualizarPrecoOuro(novaQuantidade) {
    const precosPorQuantidadeOuro = {
      64: '$28',
      32: '$14',
      18: '$7',
      9: '$4'
    };

    const novoPrecoOuro = precosPorQuantidadeOuro[novaQuantidade];
    precoOuro.textContent = novoPrecoOuro;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const lapisQuantidade = document.getElementById('lapis');
  const precoLapis = document.getElementById('preço-lapis');

  lapisQuantidade.addEventListener('click', function () {
    switch (this.textContent) {
      case '64X':
        this.textContent = '32X';
        atualizarPrecoLapis(32);
        break;
      case '32X':
        this.textContent = '18X';
        atualizarPrecoLapis(18);
        break;
      case '18X':
        this.textContent = '9X';
        atualizarPrecoLapis(9);
        break;
      case '9X':
        this.textContent = '64X';
        atualizarPrecoLapis(64);
        break;
      default:
        break;
    }
  });

  function atualizarPrecoLapis(novaQuantidade) {
    const precosPorQuantidadeLapis = {
      64: '$24',
      32: '$12',
      18: '$6',
      9: '$4'
    };

    const novoPrecoLapis = precosPorQuantidadeLapis[novaQuantidade];
    precoLapis.textContent = novoPrecoLapis;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const diamanteQuantidade = document.getElementById('diamante');
  const precoDiamante = document.getElementById('preço-diamante');

  diamanteQuantidade.addEventListener('click', function () {
    switch (this.textContent) {
      case '64X':
        this.textContent = '32X';
        atualizarPrecoDiamante(32);
        break;
      case '32X':
        this.textContent = '18X';
        atualizarPrecoDiamante(18);
        break;
      case '18X':
        this.textContent = '9X';
        atualizarPrecoDiamante(9);
        break;
      case '9X':
        this.textContent = '64X';
        atualizarPrecoDiamante(64);
        break;
      default:
        break;
    }
  });

  function atualizarPrecoDiamante(novaQuantidade) {
    const precosPorQuantidadeDiamante = {
      64: '$70',
      32: '$60',
      18: '$40',
      9: '$28'
    };

    const novoPrecoDiamante = precosPorQuantidadeDiamante[novaQuantidade];
    precoDiamante.textContent = novoPrecoDiamante;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const quartzoQuantidade = document.getElementById('quartzo');
  const precoQuartzo = document.getElementById('preço-quartzo');

  quartzoQuantidade.addEventListener('click', function () {
    switch (this.textContent) {
      case '64X':
        this.textContent = '32X';
        atualizarPrecoQuartzo(32);
        break;
      case '32X':
        this.textContent = '18X';
        atualizarPrecoQuartzo(18);
        break;
      case '18X':
        this.textContent = '9X';
        atualizarPrecoQuartzo(9);
        break;
      case '9X':
        this.textContent = '64X';
        atualizarPrecoQuartzo(64);
        break;
      default:
        break;
    }
  });

  function atualizarPrecoQuartzo(novaQuantidade) {
    const precosPorQuantidadeQuartzo = {
      64: '$24',
      32: '$12',
      18: '$6',
      9: '$4'
    };

    const novoPrecoQuartzo = precosPorQuantidadeQuartzo[novaQuantidade];
    precoQuartzo.textContent = novoPrecoQuartzo;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const netheriteQuantidade = document.getElementById('netherite');
  const precoNetherite = document.getElementById('preço-netherite');

  netheriteQuantidade.addEventListener('click', function () {
    switch (this.textContent) {
      case '10X':
        this.textContent = '5X';
        atualizarPrecoNetherite(5);
        break;
      case '5X':
        this.textContent = '2X';
        atualizarPrecoNetherite(2);
        break;
      case '2X':
        this.textContent = '1X';
        atualizarPrecoNetherite(1);
        break;
      case '1X':
        this.textContent = '10X';
        atualizarPrecoNetherite(10);
        break;
      default:
        break;
    }
  });

  function atualizarPrecoNetherite(novaQuantidade) {
    const precosPorQuantidadeNetherite = {
      10: '$250',
      5: '$125',
      2: '$75',
      1: '$32'
    };

    const novoPrecoNetherite = precosPorQuantidadeNetherite[novaQuantidade];
    precoNetherite.textContent = novoPrecoNetherite;
  }
});


