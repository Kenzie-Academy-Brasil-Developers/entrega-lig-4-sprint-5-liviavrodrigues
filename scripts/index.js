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