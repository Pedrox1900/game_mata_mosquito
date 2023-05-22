var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

    if(nivel === 'normal') {
        criaMosquitoTempo = 1500
    }else if(nivel === 'dificil') {
        criaMosquitoTempo = 1000
    } else if(nivel === 'chucknorris'){
        criaMosquitoTempo = 750
      
}

function ajustaTamanhoPalcoJogo() {
     altura = window.innerHeight
     largura = window.innerWidth

     console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

    tempo -= 1
    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
    
   
}, 1000)

//posicionando o elemento html criado de forma randomica
function posicaoRandomica() {

//remover o mosquito anterior (caso exista)
if(document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove()

        //remover as vidas caso o ususario não clique a tempo
        if( vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/imagens/coracao_vazio.png"

            vidas++
        }
        
     

    }

var posicaoX = Math.floor(Math.random() * largura) -90
var posicaoY = Math.floor(Math.random() * altura) -90

//SE POSIÇÃO FOR MENOR QUE ZERO POSIÇÃO RECEBE 0, CASO CONTRARIO RECEBE O VALOR POSICÃO X OU Y
posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

//criar o elemento html 
 var mosquito = document.createElement('img')
 mosquito.src = 'imagens/imagens/mosca.png'
 mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
 //o nome da classe será o valor que sai da função tamanhoAleatorio, podendo ser mosquito1 mosquito2 ou mosquito3
 mosquito.style.left = posicaoX + 'px'
 mosquito.style.top = posicaoY + 'px'
 mosquito.style.position = 'absolute'
 mosquito.id = 'mosquito' //vai ser o responsavel por apagar o mosquito que ja existe pra criar outro a cada segundo, se ja tiver algum mosquito com id mosquito exluir e criar outro automaticamente
 mosquito.onclick = function() { 
   this.remove()
 }
 // a função acima vai remover o mosquito quando ele for clicado a tempo

 document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
    // a variavel classe vai receber um valor inteiro aleatorio de 0 até 2
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'
        
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}

