const inputChange = document.querySelector('input#font-size-control')
const abracadabra = document.querySelector('span#text')

inputChange.addEventListener('change', x => {
    abracadabra.style.fontSize = `${x.target.value }px`
})