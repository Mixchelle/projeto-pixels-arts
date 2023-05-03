// Função para gerar cores
function generateColors() {
  const chars = '0123456789ABCDEF';
  let color = '#';
  Array.from({ length: 6 }).forEach(() => {
    color += chars.charAt(Math.floor(Math.random() * chars.length));
  });
  return color;
}

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
      const elemento = p;
      const color = pixelColors[i];
      elemento.style.backgroundColor = color;
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
function setPixelColour(event) {
  const pixelElement = event.target;
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

const boardSizeInput = document.querySelector('#board-size');
const generateBoardButton = document.querySelector('#generate-board');
const pixelBoard = document.querySelector('#pixel-board');

function createPixelBoard(size) {
  pixelBoard.innerHTML = '';
  for (let i = 0; i < size; i++) {
    const line = document.createElement('div');
    line.classList.add('line-pixel-board');
    for (let j = 0; j < size; j++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.addEventListener('click', (event) => {
        setPixelColour(event);
      });
      line.appendChild(pixel);
    }
    pixelBoard.appendChild(line);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createPixelBoard(5);
});

generateBoardButton.addEventListener('click', () => {
  const size = parseInt(boardSizeInput.value);
  if (size >= 5 && size <= 50) {
    createPixelBoard(size);
  } else {
    alert('Board inválido!');
  }
}); // creates initial 5x5 pixel board

function downloadPixelArt() {
  const pixelArt = localStorage.getItem('pixelBoard');
  if (pixelArt) {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 400; // ajuste o tamanho do canvas de acordo com o tamanho do seu pixel art
    const ctx = canvas.getContext('2d');
    const imgData = ctx.createImageData(400, 400);
    const arrPixelArt = JSON.parse(pixelArt);
    for (let i = 0; i < arrPixelArt.length; i++) {
      const pixel = arrPixelArt[i];
      const index = i * 4;
      const color = pixel.slice(1); // remove o caractere '#' do início da string
      imgData.data[index] = parseInt(color.slice(0, 2), 16); // converte os valores hexadecimais em inteiros
      imgData.data[index + 1] = parseInt(color.slice(2, 4), 16);
      imgData.data[index + 2] = parseInt(color.slice(4, 6), 16);
      imgData.data[index + 3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
    const downloadLink = document.createElement('a');
    downloadLink.download = 'pixel-art.png';
    downloadLink.href = canvas.toDataURL();
    downloadLink.click();
  }
}


// Adicione um botão no HTML com id "download-pixel-art"
const downloadButton = document.getElementById('download-pixel-art');

// Adicione um event listener no botão para disparar a função de download
downloadButton.addEventListener('click', downloadPixelArt);
