//arrays
let animales = ['Gato', 'Perro', 'Chompipito', 'vaca', 'G', 'oso'];
let otro = ['tigre', 'oso'];
let edades = [25,14,  23, 15, 18, 12];

for (let i=0; i<animales.length; i++){
    //console.log(animales[i]);
}

animales.forEach((item, index)=>{
    //console.log(item, index);
    //otro = item;
});

//let last = animales.pop();
//console.log(animales.indexOf('Chompipito'));

//Array.prototype.sumar = 2+2;
//console.log(animales.saludar);

//console.log(otro.sumar);

//console.log(Array.from("gudiel"));

//const result = animales.filter(a => a.indexOf("v"));
//console.log(result);

let nombre = "Herman";

//console.log(animales.indexOf("Gato"));

let result = edades.find((e)=>{
    return e <= 15;
});
console.log(result);

//console.log(Array.isArray(animales[0]));
//console.log(Array.of("gudiel", "zailda", "jose"));

//console.log(typeof otro);

let abecedario = ['a','b'];
