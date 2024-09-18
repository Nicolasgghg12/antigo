//cria o array
var aparecer = ["Exemplo1","Exemplo2","Exemplo3","Exemplo4","Exemplo5","Exemplo6"];
//cria a variavel que cria o ul
var listaUl = document.createElement('ul');
//variavel que vai pegar minha div meio
var centro = document.getElementsByClassName('meio');
//colocar a lista ul dentro dele
centro[0].appendChild(listaUl);
//pega o ul que esta dentro da div
var listaNaDiv = document.getElementsByTagName('ul')
// faz um for 
for(var i=0; i < aparecer.length; i++){
    //cria a variavel que cria os elementos li
    var liFor = document.createElement('li');
    //cia a variavel que cria um texto que aparece o array
    var textoLi = document.createTextNode(aparecer[i]);
    //faz com que ele fique sendo do li for
    liFor.appendChild(textoLi);
    //e que o li for seja cenro da div
    listaNaDiv[0].appendChild(liFor);
}

