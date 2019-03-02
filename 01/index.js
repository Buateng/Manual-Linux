let nombre =  "jose";


///template string
let saludo = "Hola como estás?";

function suma(a,b){
    let resultado = a+b;
    return Number(resultado);
}


console.log(`${saludo} ${nombre} ${suma(2,2)} hola
hola
hola
hola
`);

//metetodos

let str = "cama";
let res = str.split("");
let res2 = str.split().reverse();


for (let i=0; i<res.length; i++){
    console.log(res[i]);
}


if (res.toString() === res2.toString()){
    console.log("es palíndromo")
}else {
    console.log("ni mergas");
}

console.log(res);


addEventListener("keyup", (e)=> {
    console.log(e);
});
