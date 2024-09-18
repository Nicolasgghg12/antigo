var select = document.getElementById('Select');
var body = document.getElementsByName('body');
function DeMaior() {
    var Idade = prompt('Digite Sua Idade')
    
    if(Idade >=18 ){
        select.removeAttribute('onclick','DeMaior()');
        !alert('Acesso a filmes de terror e talz. Permitido');
        select[5].removeAttribute('disabled');
        select[6].removeAttribute('disabled');
        select[7].removeAttribute('disabled');
        CriarOutrasOpcoes()
    }else{
        select.removeAttribute('onclick','DeMaior()');
        !alert('Acesso a filmes de terror e talz. Negado');
    }
}

function CriarOutrasOpcoes(){
    var terror = document.createElement('option');
        terror.setAttribute('value','opcao6');
        terror.setAttribute('class','terror');
    var textoEscritoTerror = document.createTextNode('Terror');
        
    var acao = document.createElement('option');
        acao.setAttribute('value','opcao7');
        acao.setAttribute('class','acao');
    var textoEscritoAcao = document.createTextNode('Ação');
        
    var guerra = document.createElement('option');
        guerra.setAttribute('value','opcao8');
        guerra.setAttribute('class','guerra');
    var textoEscritoGuerra = document.createTextNode('Guerra');

    var terrorSendoPegoDoHtml = document.getElementsByClassName('terror');
    var acaoSendoPegoDoHtml = document.getElementsByClassName('acao');
    var guerraSendoPegoDoHtml = document.getElementsByClassName('guerra');

   select[5].appendChild(terror);
   select[6].appendChild(acao);
   select[7].appendChild(guerra);

   terrorSendoPegoDoHtml[0].appendChild(textoEscritoTerror);
   acaoSendoPegoDoHtml[0].appendChild(textoEscritoAcao);
   guerraSendoPegoDoHtml[0].appendChild(textoEscritoGuerra);
}