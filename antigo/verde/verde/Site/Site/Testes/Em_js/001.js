var a = null;
    b = null;


    
function receber (){
   var
    a = document.getElementById('two').value;
    b = document.getElementById('one').value;
    f = document.forms[0];
    g = "";
    c = parseInt (a);
    d = parseInt (b);
    e = null;



    for(i=0;i < f.length; i++){
        if(f[i].checked){
            g = g + g[i].value;
        }


    }
    switch (g) {
        case "*":
            e = (c*d);
        break;
        
        case "/":
            e = (c/d);
        break;

        case "-":
            e = (c-d);
        break;

        case "+":
            e = (c+d);
        break;

        default:
            e = "Consulte o suporte";
            break;
    }

   document.getElementById('aparecer').innerHTML = e;
}

/*    

*/