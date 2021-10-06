let tabuleiro =
    [
        '      ',
        '      ',
        '      ',
        '      ',
        '      ',
        '      ',
        '      ']


let JOGADORES = {"jogador1": "", "jogador2": ""}
let JOGADOR_ATUAL = "";
const Todotabuleiro = document.getElementById('tabuleiro-divs')


Todotabuleiro.addEventListener("click", (event) => {
    if(event.target.tagName === "DIV"){
        let section = event.target.closest("section");
        jogar(section);
    }
})

document.querySelector(".startSection--jogadores").addEventListener("click", (event) => {
    let option
    if (event.target.className === "startSection--option") {
        option = event.target.firstElementChild
    }
    else if (event.target.className === "option--red" || event.target.className === "option--black") {
        option = event.target
    }

    if (option !== undefined) {
        if (option.className === "option--red") {
            JOGADORES["jogador1"] = "option--red"
            JOGADORES["jogador2"] = "option--black"

            let divBlack = document.querySelectorAll(".startSection--option")[1]
            divBlack.style.border = "1px solid gray"
            divBlack.style.backgroundColor = "transparent"

            let divRed = document.querySelectorAll(".startSection--option")[0]
            divRed.style.border = "1px solid darkblue"
            divRed.style.backgroundColor = "lightblue"
        }
        else {
            JOGADORES["jogador1"] = "option--black"
            JOGADORES["jogador2"] = "option--red"

            let divBlack = document.querySelectorAll(".startSection--option")[1]
            divBlack.style.border = "1px solid darkblue"
            divBlack.style.backgroundColor = "lightblue"

            let divRed = document.querySelectorAll(".startSection--option")[0]
            divRed.style.border = "1px solid gray"
            divRed.style.backgroundColor = "transparent"
        }
    }
})

document.querySelector(".startSection button").addEventListener("click", () => {
    if(JOGADORES["jogador1"] !== ""){
        JOGADOR_ATUAL = "jogador1"
        let txtJogador = document.querySelector(".jogador")
        txtJogador.innerHTML = `Jogue: ${JOGADOR_ATUAL} <div class="${JOGADORES[JOGADOR_ATUAL]}"></div>`

        let divRed = document.querySelectorAll(".startSection--option")[0]
        divRed.style.border = "1px solid gray"
        divRed.style.backgroundColor = "transparent"

        let divBlack = document.querySelectorAll(".startSection--option")[1]
        divBlack.style.border = "1px solid gray"
        divBlack.style.backgroundColor = "transparent"

        start()
    }
})





function jogar(section){
    for(let x = section.children.length-1; x >= 0; x--){
        let disco = section.children[x].firstElementChild

        if(disco === null){
            disco = document.createElement("div")
            disco.classList.add(JOGADORES[JOGADOR_ATUAL])
            section.children[x].appendChild(disco)

            let i = [...Todotabuleiro.children].indexOf(section)
            let j = (JOGADOR_ATUAL === "jogador1")? "a" : "b"

            let linha = tabuleiro[i].split("")
            linha.splice(x, 1, j)
            tabuleiro[i] = linha.join("")


            if(!vitoria(tabuleiro) && !empate(tabuleiro)){
                if(JOGADOR_ATUAL === "jogador1"){
                    JOGADOR_ATUAL = "jogador2"
                } else{
                    JOGADOR_ATUAL = "jogador1"
                }
    
                let txtJogador = document.querySelector(".jogador")
                txtJogador.innerHTML = `Jogue: ${JOGADOR_ATUAL} <div class="${JOGADORES[JOGADOR_ATUAL]}"></div>`
            }

            break
        }

        if(x === 0){
            alert("Coluna Cheia! Tente em outra")
        }
    }
}


function start() {
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


function vitoriaVertical(tabuleiro) {
    let jogA = "a"
    let jogB = "b"
    for (let i = 0; i < tabuleiro.length; i++) {
        let somaJogAdorA = 0;
        let somaJogAdorB = 0;
        for (let j = 0; j < tabuleiro[i].length; j++) {
            if (tabuleiro[i][j] === jogA) {
                somaJogAdorA += 1;
                if (somaJogAdorA === 4) {
                    
                    return true;
                }
            }
            else {
                somaJogAdorA = 0;
            }

            if (tabuleiro[i][j] === jogB) {
                somaJogAdorB += 1;
                if (somaJogAdorB === 4) {
                    
                    return true;
                }
            }
            else {
                somaJogAdorB = 0;
            }
        }
    }
    return false;
}
function vitoriaDiagonalEsquerda(){
    let sections = Todotabuleiro.children

    for (let x = sections.length - 1; x >= 3; x--) {
        let filhosSec = sections[x].children

        for (let y = filhosSec.length - 1; y >= 3; y--) {
            if (filhosSec[y].firstElementChild !== null) {

                let disco = filhosSec[y].firstElementChild
                for (let z = 1; z < 4; z++) {
                    let outroDisco = sections[x - z].children[y - z].firstElementChild
                    if (outroDisco === null) {
                        break
                    } else if (outroDisco.className !== disco.className) {
                        break
                    }
                    if (z === 3) {
                        
                        return true
                    }
                }
            }
        }
    }

    return false;
}
function vitoriaDiagonalDireita(tabuleiro) {
    let jogA = "a"
    let jogB = "b"

    let somaJogA = 0;
    let somaJogB = 0

    for (let i = 0; i < 4; i++) {
        for (let j = 4; j >= 0; j--) {
            if (tabuleiro[i][j] === jogA) {
                for (let k = 1; k < 4; k++) {
                    if (tabuleiro[i][j] === tabuleiro[i + k][j - k]) {
                        somaJogA += 1
                    }
                }
                if (somaJogA === 3) {
                    
                    return true;
                }
            }
            if (tabuleiro[i][j] === jogB) {
                for (let k = 1; k < 4; k++) {
                    if (tabuleiro[i][j] === tabuleiro[i + k][j - k]) {
                        somaJogB += 1
                    }
                }
                if (somaJogB === 3) {
                    
                    return true;
                }
            }
        }
    }
    return false;
}
function vitoriaHorizontal(tabuleiro) {
    let jogA = "a"
    let jogB = "b"

    for (let y = 0; y < tabuleiro.length - 3; y++) {
        for (let x = 0; x < tabuleiro[0].length; x++) {
            celula = tabuleiro[y][x]

            if (celula !== " ") {
                if (jogA === tabuleiro[y][x] &&
                    jogA === tabuleiro[y + 1][x] &&
                    jogA === tabuleiro[y + 2][x] &&
                    jogA === tabuleiro[y + 3][x]) {
                        
                        return true
                } else if (jogB === tabuleiro[y][x] &&
                    jogB === tabuleiro[y + 1][x] &&
                    jogB === tabuleiro[y + 2][x] &&
                    jogB === tabuleiro[y + 3][x]) {
                        
                        return true
                }
            }
        }
    } return false
}


function vitoria(tabuleiro){
    if(
        vitoriaHorizontal(tabuleiro) ||
        vitoriaVertical(tabuleiro) ||
        vitoriaDiagonalDireita(tabuleiro) ||
        vitoriaDiagonalEsquerda()
    ){
        const displayVitoria = document.querySelector(".sectionVictory");
        displayVitoria.classList.remove("display--none");
        displayVitoria.classList.add("section--visible");

        displayVitoria.querySelector("h1").textContent = `Você venceu ${JOGADOR_ATUAL}!!`

        return true;
    }
    else{
        return false;
    }
}

function empate(tabuleiro){
    let empate = true;

    for(i = 0; i < tabuleiro.length; i++){
        for(j = 0; j < tabuleiro[i].length; j++){
            if(tabuleiro[i][j] === " "){
                empate = false;
            }
        }
    }

    return empate;
}


const buttonReset = document.querySelector(".sectionVictory button")
buttonReset.addEventListener("click", () => {
    reset()
})


function reset() {
    JOGADORES["jogador1"] = ""
    JOGADORES["jogador2"] = ""
    JOGADOR_ATUAL = "";
    tabuleiro = [
        '      ',
        '      ',
        '      ',
        '      ',
        '      ',
        '      ',
        '      ']

    const sectionStart = document.querySelector(".startSection")
    sectionStart.style.display = "flex";

    const displayVitoria = document.querySelector(".sectionVictory");
    displayVitoria.classList.add("display--none");
    displayVitoria.classList.remove("section--visible");

    Todotabuleiro.innerHTML = ""

}

