let Pasword = "contraseña"
let Repasword = Pasword.split("")
let Encriptado = []
console.log(Repasword)
// encontrar el formato (Char)5(char en .JS)
for(let i = 0; i < Repasword.length; i++){
  Repasword [i] = (Repasword[i] + String.fromCharCode(5, 7, 9))
}
console.log(Encriptado)

//let encriptado = Repasword.valueOf(Array)
//console.log(encriptado)

//con este for, si se intercambia la "a" por la "e" pero 
// no se puede utilizar en multi letras
//for(let i = 0; i < Repasword.length; i++){
//    if(Repasword.indexOf("a"[i]) != -1)
//        Encriptado.push ("e"[i])
//            break;
//}
function encrypt(PalabraIngresada, EspaciosRecorridos) {
	let salida = '';
	let oldASCII; //donde se guarda el codigo ascii de una letra
	let newASCII; //codigo ascii resultante luego de sumarle EspaciosRecorridos
	//por cada letra de la entrada
	for (let c = 0; c < PalabraIngresada.length; c++) {
		oldASCII = PalabraIngresada[c].charCodeAt(); //obtenemos su codigo
		newASCII = oldASCII + EspaciosRecorridos; //desplazamos de lugar la letra al sumarle EspaciosRecorridos
		salida = salida.concat(String.fromCharCode(newASCII)); //convertimos el nuevo codigo a string y concatenamos
	}
	return salida;
}

function getSeed() {
	//operaciones arbitrarias para la generacion de la semilla
	let num = Math.floor(Math.random() * 15) + 1;
	num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
	return num;
}

//codigo para probrarlo
let s = getSeed(); //genera una semilla aleatoria para el cifrado de la cadena
console.log(s);
let res = encrypt('Contraseña', 1); //cifra la cadena
console.log(res);
