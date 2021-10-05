let tabuleiro= 
[
'      ',
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
 function victoryDD(){
     //Criar um loop que percorra os arrays
    //Descobrir os valores nas diagonais com base no valor das variabveis d oloop 
   for(let i =0; i<tabuleiro.length;i++){
       let tabuleiroLine = tabuleiro[i]
       for(let j = 0; j< tabuleiroLine.length;i++){
         if(tabuleiro[i][j] === ' '){
         console.log(tabuleiro[i][j])
        }
     }
    }
}
victoryDD()
