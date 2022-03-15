let ValorDeslo = document.getElementById('ValorDeslo')
let velocidade = document.getElementById('velocidade')
let tempo = document.getElementById('tempo')
let area = []
let text = document.getElementById('text')

let resultado = ValorDeslo.value / tempo.value
function limpar(){

    ValorDeslo.value = ""
    tempo.value = ""
    velocidade.value = ""
}
function calcular(){
    let resultado = ValorDeslo.value / tempo.value
     
    velocidade.value = resultado

    area.push(

        ValorDeslo.value,
        tempo.value,
        velocidade.value
    ) 

  
   text.innerHTML = `\n resultados: ${area} `
}