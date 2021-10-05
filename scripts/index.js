let tabuleiro = ['      ',
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',]


const JOGADORES = {"jogador1": "", "jogador2": ""}

const Todotabuleiro = document.getElementById('tabuleiro-divs')

document.querySelector(".startSection--jogadores").addEventListener("click", (event) => {
    let option
    if(event.target.className === "startSection--option"){
        option = event.target.firstElementChild
    }
    else if(event.target.className === "option--red" || event.target.className === "option--black"){
        option = event.target
    }

    if(option !== undefined){
        if(option.className === "option--red"){
            JOGADORES["jogador1"] = "option--red"
            JOGADORES["jogador2"] = "option--black"

            let divBlack = document.querySelector(".option--black").closest("div.startSection--option")
            divBlack.style.border = "1px solid gray"
            divBlack.style.backgroundColor = "transparent"

            let divRed = document.querySelector(".option--red").closest("div.startSection--option")
            divRed.style.border = "1px solid rgb(0, 0, 122)"
            divRed.style.backgroundColor = "lightblue"
        }
        else{
            JOGADORES["jogador1"] = "option--black"
            JOGADORES["jogador2"] = "option--red"

            let divBlack = document.querySelector(".option--black").closest("div.startSection--option")
            divBlack.style.border = "1px solid rgb(0, 0, 122)"
            divBlack.style.backgroundColor = "lightblue"

            let divRed = document.querySelector(".option--red").closest("div.startSection--option")
            divRed.style.border = "1px solid gray"
            divRed.style.backgroundColor = "transparent"
        }
    }
})

document.querySelector(".startSection button").addEventListener("click", () => {
    if(JOGADORES["jogador1"] !== ""){
        start()
    }
})

function start(){
    const sectionStart = document.querySelector(".startSection")
    sectionStart.style.display = "none";

    for (let i = 0; i < tabuleiro.length; i++) {
        const tabuleiroLinha = document.createElement('section')
        tabuleiroLinha.classList.add('tabuleiro-divs__column')
        for (let j = 0; j < 6; j++) {
            const celulaDiv = document.createElement('div')
            celulaDiv.classList.add('tabuleiro-divs__divs')
            tabuleiroLinha.appendChild(celulaDiv)
        }
        Todotabuleiro.appendChild(tabuleiroLinha)
    }
}

/* Não funciona
let colunas = document.querySelectorAll(".tabuleiro-divs__column")
colunas.forEach(coluna => coluna.addEventListener("click", (e) => {
    jogar()
}))
*/
/* Não funciona
tabuleiroLinha.addEventListener("click", () => {
    jogar()
})
*/ 
/* Não funciona
let colunas = document.querySelectorAll(".tabuleiro-divs__column").addEventListener("click", () => {
    jogar()
}) */

/* 
Funciona

Todotabuleiro.addEventListener("click", () => {
    jogar()
})
*/

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

function vitoriaHorizontal () {
    let jogA = "a"
    let jogB = "b"

    for(let y = 0; y < tabuleiro.length; y++) {
        for(let x = 0; x < tabuleiro[0].length; x++) {
            celula = tabuleiro[y][x]

            if(celula !== " ") {
                if (jogA === tabuleiro[y+1][x] && 
                    jogA === tabuleiro[y+2][x] && 
                    jogA === tabuleiro[y+3][x]) {
                        return true 
                    } else if (jogB === tabuleiro[y+1][x] && 
                        jogB === tabuleiro[y+2][x] && 
                        jogB === tabuleiro[y+3][x]) {
                            return true
                        }
            }
        }
    } return false
}
/* Outra alternativa
function vitoriaHorizontal () {
    let jogA = "a"
    let jogB = "b"
    for(let i = 0; i < tabuleiro.length; i++) {
        let somaJogadorA = 0
        let somaJogadorB = 0
        for(let j = 0; tabuleiro[i].length; j++) {
            if(tabuleiro[j][i] === jogA) {
                somaJogadorA++
                if(somaJogadorA === 4) {
                    return true
                } 
            } if (tabuleiro[j][i] === jogB) {
                somaJogadorB++
                if(somaJogadorB === 4) {
                    return true
                }
            }
        }
    }
    return false
}
*/