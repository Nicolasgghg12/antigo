var body = document.getElementsByName('body');
var conteudoCentral = document.getElementsByClassName('conteudo')[0];
function precoFinal(){
    var precoFinal = document.getElementsByClassName('precoFinal')[0];
    var sifrao = "R$ ";
    var valor = 0;
    var precoRetornar = document.createTextNode(sifrao += valor);
    precoFinal.appendChild(precoRetornar)
}
function Sumir(){
    var barraLateral = document.getElementsByClassName('conteudoLateralDireita')[0];
    barraLateral.remove();
    conteudoCentral.removeAttribute('style','right: 20%;');
    var imagem = document.getElementsByClassName('carrinho')[0];
        imagem.removeAttribute('onclick','Sumir()');
        imagem.setAttribute('onclick','aparecer()');
}
function aparecer(){
    conteudoCentral.setAttribute('style','right: 20%;');
    var imagem = document.getElementsByClassName('carrinho')[0];
        imagem.removeAttribute('onclick','aparecer()');
        imagem.setAttribute('onclick','Sumir()');
    var barraLateral = document.createElement('div');
        barraLateral.setAttribute('class','conteudoLateralDireita');
        barraLateral.setAttribute('style','transform: translateX(100%);');
        conteudoCentral.appendChild(barraLateral);
    }