let tabuleiro= ['      ',
'      ', 
'      ',
'      ',
'      ',
'      ',
'      ',]

const Todotabuleiro = document.getElementById('tabuleiro-divs')

for(let i =0; i<tabuleiro.length;i++){
    const tabuleiroLinha = document.createElement('section')
    tabuleiroLinha.classList.add('tabuleiro-divs__column')
    for(let j =0; j<6;j++){
        const celulaDiv = document.createElement('div')
        celulaDiv.classList.add('tabuleiro-divs__divs')
        tabuleiroLinha.appendChild(celulaDiv)
    }
    Todotabuleiro.appendChild(tabuleiroLinha)
}
/*
let atual = "vermelho"
let proximo = "preto"

let discosVermelhos = []
let discosPretos = []
let discosTotais = []
*/
const cells = document.querySelectorAll(".tabuleiro-divs__divs")
console.log(cells)

cells.addEventListener("click", event => {
    console.log(event.target.value)
})
// não estou conseguindo selecionar as células para adicionar o evento de click nelas.

/*
const cells = document.querySelector(".tabuleiro-divs__divs")
for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", handleClick)
}
*/
