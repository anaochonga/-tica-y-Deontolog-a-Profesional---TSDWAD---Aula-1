const getFontSize = () => {
    return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--font-size')) 
}


const fontDown = element => {
    // escuchamos los clicks del elemento
    element.addEventListener('click', () => {
        // obtenemos el valor de la variable CSS
        let fontSize = getFontSize()
        console.log(typeof fontSize);
        // disminuimos el valor de esa variable en 0.9
        document.documentElement
        .style.setProperty('--font-size', `${fontSize * 0.9}`)
    })
}


const fontUp = element => {
    // escuchamos los clicks del elemento
    element.addEventListener('click', () => {
        // obtenemos el valor de la variable CSS
        let fontSize = getFontSize()
        console.log( `${fontSize * 1.1}`);
        // aumentamos el valor de esa variable en 1.1
        document.documentElement
            .style.setProperty('--font-size', `${fontSize * 1.1}`)

    })
}

fontUp(document.getElementById('font-up'))
fontDown(document.getElementById('font-down'))