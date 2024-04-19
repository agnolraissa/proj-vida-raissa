    const botoes = document.querySelectorAll(".ativo");
    const textos = document.querySelectorAll(".aba-conteudo");
    for (let i=0;i<botoes.length; i++) {
        botoes[i].onclick = function(){

            for (let j=0; j<botoes.length; j++){
                textos[j].classList.remove("ativo");
                textos[j].classList.remove("ativo");
            }
            
            textos[i].classList.add("ativo"); 
            textos[i].classList.add("ativo"); 
        }
    }
        
 const contadores = document.querySelector(" .contador");
 
const tempoObjetivo1 = new Date("2024-07-05T00:00:00");

const tempoAtual = Date();

 contadores[0].texContent = calculaTempo (tempoObjetivo1);
 

 function calculaTempo (tempoObjetivo){
    let tempoAtual = new Date ()
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
 
 
}