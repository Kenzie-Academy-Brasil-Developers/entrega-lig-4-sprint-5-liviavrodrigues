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

// VITORIA VERTICAL - LÍVIA
function vitoriaVertical(tabuleiro){
    let jogA = "a"
    let jogB = "b"
    for(let i = 0; i < tabuleiro.length; i++){
        let somaJogadorA = 0;
        let somaJogadorB = 0;
        for(let j = 0; j < tabuleiro[i].length; j++){
            if(tabuleiro[i][j] === jogA){
                somaJogadorA += 1;
                console.log(somaJogadorA)
                if(somaJogadorA === 4){
                    return true;
                }
            }
            else{
                somaJogadorA = 0;
            }
            
            if(tabuleiro[i][j] === jogB){
                somaJogadorB += 1;
                if(somaJogadorB === 4){
                    return true;
                }
            }
            else{
                somaJogadorB = 0;
            }
            
        }

    }
    return false;
}