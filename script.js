function generateColors(){

    const chars = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i += 1) {
    color += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return color;
}

document.getElementById('button-random-color').addEventListener('click', () =>{
    for (let i = 2; i < 5; i += 1){
        let divColor = document.getElementById(`color-${i}`)
        divColor.style.backgroundColor = (generateColors())
    }
})



