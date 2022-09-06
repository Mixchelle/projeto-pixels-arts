

//Função para gerar cores

function generateColors(){
    const chars = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i += 1) {
    color += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return color;
}

// botão para gerar cores aleatoria
document.getElementById('button-random-color').addEventListener('click', function btnColor (){
    for (let i = 2; i < 5; i += 1){
        let corsave = generateColors()
        let divColor = document.getElementById(`color-${i}`)
        divColor.style.backgroundColor = corsave
    }
})


function savecolor () {
const storage = JSON.stringify(corsave);
        localStorage.setItem('colorpallete', corsave)

}
function addSelect(event) {
    const select = document.querySelector('.selected');
    event.target.classList.add('selected');
    select.classList.remove('selected');
    input.value = '';
  }

function setPixelColour (pixel) {
    pixel.style.backgroundColor = penColour;
}

document.getElementById("clear-board").addEventListener('click', function btnclear(){
    const pixels = document.querySelectorAll('.pixel');
    for (const pixel of pixels) {
      pixel.style.backgroundColor = 'white';
    }
    }
)
function addSelect(event) {
    const select = document.querySelector('.selected');
    event.target.classList.add('selected');
    select.classList.remove('selected');
    input.value = '';
  }
  



let penColour = 'blue';

