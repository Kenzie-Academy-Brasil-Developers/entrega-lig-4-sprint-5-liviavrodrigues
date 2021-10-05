
let tabuleiro =
 [
    '      ',
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

function vitoriaVertical(tabuleiro){
    let jogA = "a"
    let jogB = "b"
    for(let i = 0; i < tabuleiro.length; i++){
        let somaJogAdorA = 0;
        let somaJogAdorB = 0;
        for(let j = 0; j < tabuleiro[i].length; j++){
            if(tabuleiro[i][j] === jogA){
                somaJogAdorA += 1;
                console.log(somaJogAdorA)
                if(somaJogAdorA === 4){
                    return true;
                }
            }
            else{
                somaJogAdorA = 0;
            }
            
            if(tabuleiro[i][j] === jogB){
                somaJogAdorB += 1;
                if(somaJogAdorB === 4){
                    return true;
                }
            }
            else{
                somaJogAdorB = 0;
            }
            
        }

    }
    return false;
}

function vitoriaDiagonalDireita(){
  let jogA = "a"
  let jogB = "b"
  
 let somaJogA = 0; 
let somaJogB = 0 

 for(let i = 0; i<3;i++){
      for(let j = 4; j>=0;j--){ 
       if(tabuleiro[i][j] === jogA){
        for(let k = 1; k<4;k++){
          if(tabuleiro[i][j] === tabuleiro[i+k][j-k]){
            somaJogA+=1   
          } 
        }
        if(somaJogA === 3){
          return true;
        }
       }
        if(tabuleiro[i][j] === jogB){
           for(let k = 1; k<4;k++){
             if(tabuleiro[i][j] === tabuleiro[i+k][j-k]){
                somaJogB+=1
              }
            } 
            if(somaJogB === 3){
              return true;
            }
         }
    }      
  } 
 return false;
}




