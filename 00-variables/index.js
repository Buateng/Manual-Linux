//variables y constantes
//
//tipos de datos
//let numeros = [1,3,3,4]; //Array o matriz
//let objeto = {123};
//let texto = "hola"; //tipo string
//let cantidad = 22.2; // tipo numerico
//Nan not a number
//boolean = true o false


//operadores aritmeticos
// console.log(1+2);
// console.log(1*2);
// console.log(11/2);
// console.log(11%2);

//comparacion
//< > <= >= != === ==

// if(12%2 == 0){
//     console.log("es par");
// }else if(numeros[2]<4){
//     console.log("es verdadero")
// }


// function comparar(edad){
//     if((edad>2) ̣̣̣&&(edad<13)){
//         console.log("es verdad");
//     }

//BUCLE PARA QUE PERMITA INTRODUCIR MÁS DE UNA NOTA
do {
	//PIDE UNA NOTA POR TECLADO Y LA GUARDA EN LA VARIABLE nota
	var nota = prompt("Introduce tu nota");
	//SI SE INTRODUJO UN NÚMERO
	if (Number(nota) == nota) {
		//SI LA NOTA ES ENTRE 0 Y 10 COMPRUEBA EL RANGO Y DA UN MENSAJEif (nota > 0 && nota <= 10) {
    if (nota < 3) {
        alert("Muy deficiente");
    }
    else if (nota < 5) {
        alert("Insuficiete");
    }
    else if (nota < 6) {
        alert("Suficiente");
    }
    else if (nota < 7) {
        alert("Bien");
    }
    else if (nota < 9) {
        alert("Notable"); 5
    }
    else if (nota <= 10) {
        alert("Sobresaliente");
    }
}
//SI LA NOTA NO ES ENTRE 0 Y 10
else if (nota < 0){
    alert("Nota erronea");
}
else if (nota > 10){
    alert("Nota erronea");
}
}
//EL BUCLE VUELVE ARRIBA MIENTRAS NO SE HAYA PULSADO CANCELAR
 while (nota != undefined);	//Undefined es cuando se pulsa Cancelar.
 //no me imprime el "nora erronea" al meter númeors como -2 o 12, pero con el 12, al menos, 
 //no me escribe NamedNodeMap, pero con el -2 me sale nota deficiente como si solo fuera un 
 //0,1 o 2