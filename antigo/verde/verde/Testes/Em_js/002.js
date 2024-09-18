function receber (){
    var
     f = document.forms[0];
     g = "";

 
 
     for(i=0;i <= f.length; i++){

         if(f[i].checked){
             g = g + g[i].value;
         }
 
 
     }
 
     document.getElementById('result').value = ("a" + g);
 }
 