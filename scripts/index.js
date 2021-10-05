
let tabuleiro =
 [
    '     2',
    '    2 ',
    '   2  ',
    '  2   ',
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
//
// ONDE '1' REPRESENTA O JOGADOR 1, E '2', O JOGADOR 2

function victoryDD(){
  let soma1 = 0; 
let soma2 = 0 

 for(let i = 0; i<3;i++){
      for(let j = 4; j>=0;j--){ 
       if(tabuleiro[i][j] === '1'){
        for(let k = 1; k<4;k++){
          if(tabuleiro[i][j] === tabuleiro[i+k][j-k]){
            soma1+=1
            console.log(soma1)
          } 
        }
       }
        if(tabuleiro[i][j] === '2'){
           for(let k = 1; k<4;k++){
             if(tabuleiro[i][j] === tabuleiro[i+k][j-k]){
                soma2+=1
                console.log(soma2)
              }
            } 
         }
    }      
  }
  if(soma1 === 3){
    console.log('O jogador 1 ganhou') 
  }
 else if(soma2 === 3) {console.log('O jogador 2 ganhou')}

}

victoryDD()

