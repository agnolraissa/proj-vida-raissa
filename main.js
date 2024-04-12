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
        
    