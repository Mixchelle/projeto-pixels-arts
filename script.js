// Função para gerar cores
function generateColors() {
  const chars = '0123456789ABCDEF';
  let color = '#';
  Array.from({ length: 6 }).forEach(() => {
    color += chars.charAt(Math.floor(Math.random() * chars.length));
  });
  return color;
}

// Função para salvar o desenho atual no localStorage
function savePixelBoard() {
  const pixels = document.querySelectorAll('.pixel');
  const pixelColors = [];
  pixels.forEach((p) => {
    pixelColors.push(p.style.backgroundColor);
  });
  localStorage.setItem('pixelBoard', JSON.stringify(pixelColors));
}

// Função para recuperar o desenho atual do localStorage
function loadPixelBoard() {
  const pixelColors = JSON.parse(localStorage.getItem('pixelBoard'));
  if (pixelColors) {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((p, i) => {
      p.style.backgroundColor = pixelColors[i];
    });
  }
}

// Botão para gerar cores aleatórias
document.getElementById('button-random-color').addEventListener('click', () => {
  const salvarcores = [];

  Array.from({ length: 3 }).forEach((_, index) => {
    const corsave = generateColors();
    const divColor = document.getElementById(`color-${index + 2}`);
    divColor.style.backgroundColor = corsave;
    salvarcores.push(corsave);
  });

  localStorage.setItem('colorPalette', JSON.stringify(salvarcores));
});

// Função para gerar a paleta de cores salvas
function gerarPaleta() {
  const coresSalvas = localStorage.getItem('colorPalette');
  if (coresSalvas) {
    const cores = JSON.parse(coresSalvas);
    for (let i = 0; i < cores.length; i += 1) {
      const divCor = document.getElementById(`color-${i + 2}`);
      divCor.style.backgroundColor = cores[i];
    }
  }
}

window.addEventListener('load', () => {
  gerarPaleta();
  loadPixelBoard();
});

// Função para setar a cor selecionada no pixel
function setPixelColour(pixel) {
  const pixelElement = pixel;
  pixelElement.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  savePixelBoard();
}

// Botão para limpar o board
document.getElementById('clear-board').addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((p) => {
    const pixel = p;
    pixel.style.backgroundColor = 'white';
  });
  savePixelBoard();
});

// Seleciona a cor preta para o primeiro item da paleta
const oneLi = document.getElementById('color1');
oneLi.style.backgroundColor = 'black';

// Seleciona as cores vermelho, azul e rosa para os itens 2, 3 e 4 da paleta
const firstLi = document.getElementById('color-2');
firstLi.style.backgroundColor = 'red';
const secondLi = document.getElementById('color-3');
secondLi.style.backgroundColor = 'blue';
const thirdLi = document.getElementById('color-4');
thirdLi.style.backgroundColor = 'pink';

function handleChangeTech(event) {
  const techElement = document.querySelector('.selected');
  techElement.classList.remove('selected');
  event.target.classList.add('selected');
  generateColors();
}
oneLi.addEventListener('click', handleChangeTech);
firstLi.addEventListener('click', handleChangeTech);
secondLi.addEventListener('click', handleChangeTech);
thirdLi.addEventListener('click', handleChangeTech);
