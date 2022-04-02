                        //arreglos
/*  const arre1 = [1,true, false, "casa"];
 const nombre = ["pepito", "maria", "agustina"]; */

                  //acceder a posiciones del arreglo

/*  const numeros = [1, 2, 3, 4, 5];
console.log( numeros[0]);
console.log( numeros[3]);

let resultado = numeros [1] + numeros [2];
console.log(resultado); */

                        //recorrer un arreglo
/* const numeros = [1, 2, 3, 4, 5];
for (let index = 0; index < 5; index++) {
    alert(numeros[index]);
} */

// length sirve para saber la longitud del arreglo, qué tan largo es

/* const arre1 = [1,true, false, "casa"];
const nombre = ["pepito", "maria", "agustina"];
console.log(nombre.length); */

                    //agregar elementos y quitar elementos

 //const nombre = ["pepito", "maria", "agustina"];
//console.log(nombre.length);
//nombre.push("luis", "romina", "estefania"); /* agregar */
//console.log(nombre);
//nombre.unshift("luis"); /* agregar al principio del arreglo */
//console.log(nombre.length);
//nombre.pop();   /* quitar el ultimo */
//console.log(nombre); /* quitar el primero */
//nombre.shift();
//console.log(nombre); 


//nombre.splice(1,3); /* quitar arreglo especifico */
//console.log(nombre.length);


                    //join: pasar un arreglo a string
/* nombre.join();
console.log(nombre.join(", "));
console.log(nombre.join("* ")); */


                        //concat: unir arreglos



/*   const perros   = ["Pupy", "Ronnie"]
  const gatos = ["Mishi", "Garfield", "Zuri"]
  const mascotas = perros.concat(gatos)
  //console.log(mascotas) */
  // ["Pupy", “Ronnie”, "Mishi", “Garfield”, "Zuri"]
                        

            //slice: hace una copia de arreglo para hacer modificaciones
/* const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombres.slice(1, 3) */; // Nuevo array desde la posición 1 a 3.
 // masculinos contiene ['Pedro','Miguel']
            

            //indexof indica el elemento de un array
 //const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

/* console.log( nombres.indexOf('Rita') ) // ⇒ 0
console.log( nombres.indexOf('Ana') ) // ⇒ 3
console.log( nombres.indexOf('Julieta') ) */ // ⇒ -1

                //includes: me dice qué arreglos hay o no hay

//const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// console.log( nombres.includes('Rita') ) // ⇒ true
// console.log( nombres.includes('Miguel') ) // ⇒ true
// console.log( nombres.includes('Julieta') ) // ⇒ false


//reverse: invierte el orden de los array
/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
nombres.reverse()
console.log( nombres )  */
// ⇒ ['Vanesa', 'Ana','Miguel', 'Pedro','Rita']


/* //Declaraciòn de array vacío y variable para determinar cantidad
const listaNombres = [];
let   cantidad     = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
   let entrada = prompt("Ingresar nombre");
   listaNombres.push(entrada.toUpperCase());
   console.log(listaNombres.length);
}while(listaNombres.length != cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA","EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n"));
 */

/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// recibo el elemento a borrar por parámetro
const eliminar = (nombre) => {
    // busco su índice en el array
    let index = nombres.indexOf(nombre)

     // si existe, o sea es distinto a -1, lo borro con splice
    if (index != -1 ) {
        nombres.splice(index, 1)
    } 
}

eliminar('Pedro') */




                                // filter
/* let productos = [
    {nombre: "camisa", activo: true},
    {nombre: "correa", activo: false},
    {nombre: "blusa", activo: true},
    {nombre: "remera", activo: true},
    {nombre: "pantalon", activo: false},
    {nombre: "camisa", activo: true},
    {nombre: "vestido", activo: true},
    {nombre: "zapatos", activo: true},
    {nombre: "corbata", activo: false},
    {nombre: "chamarras", activo: true},
    {nombre: "buzos", activo: false},
    {nombre: "camisas", activo: true}
]

console.log(productos.filter (x => x.activo === true)); */



                                //map


/* const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

//const nombres = cursos.map((el) => el.precio)
const nombres = cursos.map((el) => el.nombre)
console.log(nombres)
// [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ] */


                                //date


//console.log(new Date);
