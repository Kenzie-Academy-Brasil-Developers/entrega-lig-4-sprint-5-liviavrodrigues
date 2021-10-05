
let tabuleiro =
 [
    '      ',
    '      ',
    '      ',
    '   1  ',
    '  1   ',
    ' 1    ',
    '1     ',]


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
let soma1 = 0; 
let soma2 = 0 

function victoryDD(){
  
 for(let i = 5; i>=tabuleiro.length;i--){
      for(let j = 0; j< tabuleiro[i].length;j++){
       if(tabuleiro[i][j] === '1'){
         console.log('v1')
         soma1+=1
         if(tabuleiro[i]-1[j]+1 === '1'){
          console.log('v2')
            soma1+=1
            if(tabuleiro[i]+2[j]+2 === '1'){
              console.log('v3')
             soma1+=1
             if(tabuleiro[i]+3 [j]+3 === '1')
                console.log('jogador 1 venceu')
                else{soma1 = 0;}
              }
              
            }
          }
        
        if(tabuleiro[i][j] === '2'){
           soma2+=1
          if(tabuleiro[i]-1[j]-1 === '2'){
            soma2+=1
            if(tabuleiro[i]-2[j]-2=== '2'){
             soma2+=1
             if(tabuleiro[i]-3 [j]-3 === '2')
                console.log('jogador 2 venceu')
              }
              else{soma2=0}
            }
          }
        }
        
      }      
}
victoryDD()

