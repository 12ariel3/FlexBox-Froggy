const buttonElement = document.querySelector('.nextButton')

function addCSS(){
    const textAreaElemet = document.querySelector('.textArea')
    const css = textAreaElemet.value
    const forefront = document.querySelector('#forefront')
    forefront.style.cssText = css
}


buttonElement.addEventListener('click', addCSS)