var body = document.getElementsByTagName('body');
function deletardiv2() {
    var a = document.getElementsByClassName('container2')[0];
    var img = document.getElementById('aparecerSumir');
        img.removeAttribute('onclick','deletardiv2()');
        img.setAttribute('onclick','aparecer()');
    a.remove();
}
function aparecer() {
    var img = document.getElementById('aparecerSumir');
        img.removeAttribute('onclick','aparecer()');
        img.setAttribute('onclick','deletardiv2()');

    var a = document.createElement('div')
        a.setAttribute('class','container container2');
    body[0].appendChild(a);

    var labelEmail = document.createElement('label');
        labelEmail.setAttribute('for','EmailLogar');
        labelEmail.setAttribute('class','labelDeEmail');
    var textoLabelEmail = document.createTextNode('Email:');
        
    var informarEmail = document.createElement('input');
        informarEmail.setAttribute('type','email');
        informarEmail.setAttribute('placeholder','XXXXXX@gmail.com');
        informarEmail.setAttribute('id','EmailLogar');
        informarEmail.setAttribute('required','');

    var labelSenha = document.createElement('label');
    labelSenha.setAttribute('for','SenhaLogar');
    labelSenha.setAttribute('class','labelDeSenha');
    var textoLabelSenha = document.createTextNode('Senha:');

    var informarSenha = document.createElement('input');
        informarSenha.setAttribute('type','password');
        informarSenha.setAttribute('placeholder','***********');
        informarSenha.setAttribute('id','SenhaLogar');
        informarSenha.setAttribute('required','');
    var divCriadaParaLogin = document.getElementsByClassName('container2')[0]
   
    var textoDoBotaoEnviar = document.createTextNode('Logar');
    var botaoEnviar = document.createElement('button');
        botaoEnviar.setAttribute('type','submite');
        botaoEnviar.setAttribute('class','botaoEnviar');

    var textoDoBotaoFechar = document.createTextNode('X');
    var botaoFechar = document.createElement('button');
        botaoFechar.setAttribute('type','button');
        botaoFechar.setAttribute('class','botaoFechar');
        botaoFechar.setAttribute('onclick','deletardiv2()');

    divCriadaParaLogin.appendChild(labelEmail);
    divCriadaParaLogin.appendChild(informarEmail);
    divCriadaParaLogin.appendChild(labelSenha);
    divCriadaParaLogin.appendChild(informarSenha);
    divCriadaParaLogin.appendChild(botaoEnviar);
    divCriadaParaLogin.appendChild(botaoFechar);

    var colocarTextoNoLabelEmail = document.getElementsByClassName('labelDeEmail')[0];
    colocarTextoNoLabelEmail.appendChild(textoLabelEmail);
    var colocarTextoNoLabelSenha = document.getElementsByClassName('labelDeSenha')[0];
    colocarTextoNoLabelSenha.appendChild(textoLabelSenha);
    var colocarTextoNoBotaoEnviar = document.getElementsByClassName('botaoEnviar')[0];
    colocarTextoNoBotaoEnviar.appendChild(textoDoBotaoEnviar);
    var colocarTextoNoBotaoFechar = document.getElementsByClassName('botaoFechar')[0];
    colocarTextoNoBotaoFechar.appendChild(textoDoBotaoFechar);
}

/*
*/ 