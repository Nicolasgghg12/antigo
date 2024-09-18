//.setAttribute ||  .appendChild ||  
var textoa = "ir site";
function aparecerNoCentro(){
    var body = document.getElementsByTagName('body');
    divCentro = document.createElement('div');
        divCentro.setAttribute("class","centro");
    body[0].appendChild(divCentro);
    var divcentro2 = document.getElementsByClassName('centro');
    var link1 = document.createElement('a');
        link1.setAttribute("href","../../AtividadeSenai/Guias/Index.html");
        link1.setAttribute("class","aa");
    divcentro2[0].appendChild(link1)
    var linka = document.getElementsByClassName('aa');

    var texto = document.createTextNode("link");
    linka[0].appendChild(texto);
}
function aparecerNoCentroEmCima(){
    var body = document.getElementsByTagName('body');
    divCentro = document.createElement('div');
        divCentro.setAttribute("class","centro2");
    body[0].appendChild(divCentro);
    var divcentro2 = document.getElementsByClassName('centro2');
    var link1 = document.createElement('a');
        link1.setAttribute("href","../../AtividadeSenai/Guias/Index.html");
        link1.setAttribute("class","ab");
    divcentro2[0].appendChild(link1)
    
    var imagemlink = document.createElement('img');
    imagemlink.setAttribute("src","../../Img/logo.jpg");
    var linka = document.getElementsByClassName('ab');
    linka[0].appendChild(imagemlink);
}

aparecerNoCentro()
aparecerNoCentroEmCima()
/*  
 
*/