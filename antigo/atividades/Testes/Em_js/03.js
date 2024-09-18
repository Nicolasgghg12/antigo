var
pecas = 0;
pecas1 = 0;
pecas2 =0;

while(pecas < 5){
    pecas = pecas+1;
    console.log(pecas+" Peças pequenas");
 
}
while(pecas1 < 8){
    pecas1 = pecas1+1;
    console.log(pecas1+" Peças médias");
    
}
while(pecas2 < 10){
    pecas2 = pecas2+1;
    console.log(pecas2+" Peças grandes");
    
}
quantidade = (pecas+pecas1+pecas2);
console.log("Você tem: "+pecas+" peças pequenas, "+pecas1+" peças médias e "+pecas2+" peças grandes sendo no total "+quantidade+" de peças")