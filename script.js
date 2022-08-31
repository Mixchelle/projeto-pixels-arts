// Create color palette
function genereteColors(){

    const chars = '0123456789ABCDEF'
    let color = '#'

    for(let = i; i < 7; i += 1) {
        color += chars.charAt(Math.floor(Math.random() * chars.length))
    }
     return color;
}

document.getElementById('btn -action')addEventListener('click', () => {
    
    for (let i = 0; i < 6; i += 1) {
        let div color = document.getElementById('color-$' {i})
        div_color.style.backgroundColor = 'red'
    }
})