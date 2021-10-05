let somaA = 0;
let somaB = 0 
let tabuleiro= 
[
'a     ',
' a    ', 
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
  
   for(let i =0; i<tabuleiro.length;i++){
       for(let j = 0; j< tabuleiro[i].length;j++){
         if(tabuleiro[i][j] === 'a' && tabuleiro[i]+1[j]+1){
             console.log('banana')
         }
        }
     
    }
 }
victoryDD()
