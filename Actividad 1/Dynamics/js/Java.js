//Verifica que los tres datos ingresados sean números
do{
    var gama = prompt("¿En qué piso se encuentra Gama?");
} while(isNaN(gama) == true);
do{
    var A = prompt("¿En qué piso está el elevador A?");
} while(isNaN(A) == true);
do{
    var B = prompt("¿En qué piso está el elevador B?");
} while(isNaN(B) == true);


//Operaciones para descubrir cuál es el elevador más cercano
if(Math.abs(gama-A) > Math.abs(gama-B)){
    alert("Gama, el elevador más cercano a ti es el B.");
}
else if(Math.abs(gama-A) < Math.abs(gama-B)){
    alert("Gama, el elevador más cercano a ti es el A.");
}
else{
    alert("Gama, ambos elevadores están a la misma distancia de ti.");
}
