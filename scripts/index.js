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
let vermelho = document.createElement("div")
vermelho.setAttribute("class", "red")

let azul = document.createElement("div")
azul.setAttribute("class", "red")

let atual = vermelho
let proximo = azul

let discosVermelhos = []
let discosPretos = []
let discosTotais = []
*/

const columns = document.querySelectorAll(".tabuleiro-divs__column")
for(let i in columns) {
    console.log(i)
}

function handle (event) {
    console.log("ok")
}

// const cells = document.querySelector("#tabuleiro-divs")
// console.log(cells)

// Ao poder adicionar o evento de clique no tabuleiro
// Pretendo selecionar a coluna
/*
const handler = function(event) {
    const column = event.target.classList
    column.innerHTML = atual
}
*/

