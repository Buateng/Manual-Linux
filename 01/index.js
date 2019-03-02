let nombre =  "jose";


///template string
let saludo = "Hola como estás?";

function suma(a,b){
    let resultado = a+b;
    return Number(resultado);
}


//console.log(`${saludo} ${nombre} ${suma(2,2)} holahola`);

//metetodos string

//metodo sin parametro
saludo.toLowerCase();

//metodos con parametro
let str = "cama";
let res = str.split("");
let res2 = str.split().reverse();

//for loops

//objeto contiene clave y valor

let persona = {
    nombre: "herman",
    apellido: "morales",
    profesion: "dev",
};
//acceder al valor de un objeto
//persona.nombre;


let nombres = ["jose", "zaida", "herman", "gudiel"];
for (let i=0; i<nombres.length; i++) {
   console.log(nombres[i]);
}
//for of evalua sobre el valor a iterar
for(let n of  nombres){
    console.log(n);
}
//for in sobre el index de la iteración
for (let nombr in nombres){
    console.log(nombr);
}
//Foreach ejecuta una funciṕon sobre lo que voy a iterar

nombres.forEach((nombre)=>{
   console.log( nombre.toUpperCase());
});


if (res.toString() === res2.toString()){
    //console.log("es palíndromo")
}else {
    //console.log("ni mergas vos");
}

//console.log(res);

//event listener
addEventListener("keyup", (e)=> {
    //console.log(e);
});

let j = 0;
do{
    console.log(j);
    j++;
}while (j <= 0);


while(j<10){
    console.log(j);
    j++;
}

let nota =  30;
switch (nota) {
    case 10:
        console.log("nota no suficiente")
        break;
    case 20:
        console.log("nota correcta");
        break;
    default:
        console.log("nunca compliste");
}


if(12<20){
    console.log("es menor")
}else {
    console.log("no lo es")
}

if(11<20){
    console.log("lo es");
}
console.log("no lo es")


(12<20)?console.log("es menor"):console.log("no lo es");
