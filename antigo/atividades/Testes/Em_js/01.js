let Inscritos = ["Helena", "Chico", "Mário"];
var
Idade = 19;
Nome = "Jose";
Data = "xx/yy/zzzz";

if(Data <= "xx/yy/zzzz"){
    if(Idade >= 18){
        if (Inscritos.length <= 100) {
            Inscritos.push(Nome);  
            console.log("Posui "+Inscritos.length+" cadastros, e eles são:");
            console.log(Inscritos);           
            /** for(I=0;I <= Inscritos.length;I ++){
                console.log(Inscritos[I]);            
            }  */
        }else{
            console.log("Lista de cadastros cheio.");
        }
    }else {
            console.log("Não possui idade suficiente para se inscrever.");
        }
}else{
            console.log("Data inválida");
}