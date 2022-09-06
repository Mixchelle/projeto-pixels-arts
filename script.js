
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
    let salvarcores = []   
      
    for (let i = 2; i < 5; i += 1){
        let corsave = generateColors()
        let divColor = document.getElementById(`color-${i}`)
        divColor.style.backgroundColor = corsave;
    
    }
})
 


  let penColour = 'black';

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

const oneLi = document.getElementById('color1')
const firstLi = document.getElementById('color-2');
const secondLi = document.getElementById('color-3');
const thirdLi = document.getElementById('color-4');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

function handleChangeTech(event) {
  const techElement = document.querySelector('.selected');
  techElement.classList.remove('selected');
  event.target.classList.add('selected');
  input.value = '';
}
oneLi.addEventListener('click', handleChangeTech)
firstLi.addEventListener('click', handleChangeTech);
secondLi.addEventListener('click', handleChangeTech);
thirdLi.addEventListener('click', handleChangeTech);
