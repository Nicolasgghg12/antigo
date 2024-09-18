var a = ["peça1","peça2","peça3","peça4","peça5","peça6","peça7","peça8","peça9","peça10","peça11",]; 

if(a.length <= 10){
    
}else{
    console.log("Quantidade não suportada");
}


for(i=0;i < a.length;i++){
    var b = a[i];
    if(b.length < 3){
        console.log(b+" não podera ser cadastrado, por pussuir nome inferior a 3 caracteres");
    }else{
        console.log(b+" a peça pode ser cadastrada.");
    }
}

var c = 50;

if(c >= 100){
    console.log("Peso suficiente");
}else{
    console.log("Peso insuficiente");
}