for (let i = 0; i < 1; i++) { // código para comprobar por mí mismo si const está presente fuera del scope 
    //del loop for
    if (i === 0) { //3 iguales para comparación exacta, un solo igual es para asignación de un valor de una variable
      const ALE = "capo";
      alert("Ale es "+ ALE);

    } else { 
      alert("Ale es undefined loop terminado"); //DE HECHO ni siquiera se puede acceder desde el else, sólo está en el if
      //pero qué bloque chico del scope
    }
  }
  alert("No se puede usar const fuera del loop"); // ya vi que no la puedo usar afuera del loop y me lo confirmó chatgpt
  //una alternativa que ofrece chatgpt es declarar la const como una matriz vacía y llenarla 3 veces con el loop:
// Declare an array to store the values of ALE inside the loop
const values = [];

// Start a for loop that runs 3 times
for (let i = 0; i < 3; i++) {
    // Check if the loop index is less than 3
    if (i < 2) { //se repite dos veces, una para el cero y otra para el 1
        // If the loop index is less than 2, push the value "capo" into the values array
        values.push("capo");
        // Show an alert quedó en párrafo with the current value of ALE
        document.addEventListener("DOMContentLoaded", function() {
          let p1 = document.createElement("p");
        p1.innerHTML = "Ale es " + values[i];
        document.body.appendChild(p1);
          });
    } else {
        // If the loop index is greater than or equal to 3, show an alert with the value of ALE before the loop ended
        document.addEventListener("DOMContentLoaded", function() {
          let p1 = document.createElement("p");
        p1.innerHTML = "Ale es " + values[i - 1] + " loop terminado"; //sin el menos uno obviamente no está definida
        document.body.appendChild(p1);
          });
        
    }
}

// After the loop has finished, assign the last value of the values array to the constant variable ALE
const ALE = values[values.length - 2]; //con el menos 2 tb funciona pq fue asignada a dos valores del array

// Show an alert with the final value of ALE -cambié el alert por párrafo porq tantos alerts son molestos
document.addEventListener("DOMContentLoaded", function() {
  let p1 = document.createElement("p");
p1.innerHTML = "Ale es " + ALE + " const fuera del loop exitosa";
document.body.appendChild(p1);
  });

  //aquí un ejemplo de chatgpt para hacer más corta la creación de párrafos:
  document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 2; i++) {
    if (i === 0) {
    let Lunita = "mau";
    let p1 = document.createElement("p");
    p1.innerHTML = "gaty negruzca se llama " + Lunita;
    document.body.appendChild(p1);
    } else {
    let p2 = document.createElement("p");
    p2.innerHTML = "Gaty negruzca es undefined en el else loop terminado ";
    document.body.appendChild(p2);
    }
    }
    let p3 = document.createElement("p");
    p3.innerHTML = "No se puede usar Lunita variable fuera del loop ";
    document.body.appendChild(p3);  
  });
    let ruru;
  document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 2; i++) {
    if (i === 0) {
    ruru = "ardilla";
    let p1 = document.createElement("p");
    p1.innerHTML = "gaty gritona se llama " + ruru;
    document.body.appendChild(p1);
    } else {
    let p2 = document.createElement("p");
    p2.innerHTML = "Gaty carey se llama " + ruru +" en el else loop terminado";
    document.body.appendChild(p2);
    }
    }
    let p3 = document.createElement("p");
    p3.innerHTML = "gaty carey se llama " + ruru + " fuera del loop";
    document.body.appendChild(p3);  
  });
    
  document.addEventListener("DOMContentLoaded", function() {
    let p1 = document.createElement("p");
  p1.innerHTML = ruru + " es loquilla, afuera de la función de creación de párrafos";
  document.body.appendChild(p1);
    });
//do while practice for adding consecutive numbers
    let result = 0; //alternativamente puedo poner result= '' para que solo agregue los números como strings dando 12345
let i = 0;

do {
  i = ++i; //esto lo puse de fancy pero era i = i+1 lo bueno es que me encontré con un error que colgaba el browser gracias a esto
  result = result + i;
  console.log(i + " +") //lo imprime en distintas líneas porq al fin y al cabo son diferentes console.log
} while (i < 5);

console.log("resultado de la suma de los  números consecutivos: " + result);
// Expected output: "12345" si hago lo de las comillas
    /*interesante dato: 
    do {
  i = i++; Aquí hay un problema porque el operador de incremento se aplica después de aplicar la igualdad
  esto significa que i=i se queda para cada siempre en cada loop i=0 nunca llegando a 5 y repitiendo por siempre colgando
  el browser.
  EN LUGAR de eso debería escribir ++i para que antes de asignar la igualdad se haga el incremento
  result = result + i;
  console.log(i + " +")
} while (i < 5);
    */ 
let userName = prompt("Please enter your username");
document.addEventListener("DOMContentLoaded", function() {
  let wp = document.createElement("h1"); //CON ESTO puedo crear lo que quiera hasta imágenes, img, ol, ul, li, a, etc.
  //and add it to the document using appendChild() or insertBefore() methods.
wp.innerHTML = "WELCOME "+ userName;
document.body.appendChild(wp);
// Change the font size of the header
wp.style.fontSize = "84px";
});
let x = 5;
--x; //--x++ is not valid, they should separate operations
++x;
let z = x;
document.addEventListener("DOMContentLoaded", function() {
  let wp = document.createElement("h1"); //CON ESTO puedo crear lo que quiera hasta imágenes, img, ol, ul, li, a, etc.
  //and add it to the document using appendChild() or insertBefore() methods.
wp.innerHTML = z;
document.body.appendChild(wp);
// Change the font size of the header
wp.style.color = "#FF0000";
});

let xy = 100 / "Apple";
console.log( isNaN(xy) + xy); //al intentar hacer la suma true es 1 y false es 0 1+NaN=Nan
/*The code you provided logs "NaN" to the console because the expression isNaN(xy) + xy results in the addition
 of a boolean value and a number, which is not a valid operation in JavaScript.

When you try to add a boolean value to a number, JavaScript converts the boolean value to a number (true becomes
   1 and false becomes 0) and then performs the addition. isNaN(xy) returns true, which is then converted 
   to the number 1 and added to xy, which is NaN.

Since NaN is a special value in JavaScript that represents the result of an undefined or unrepresentable 
number, any operation involving NaN will also result in NaN. As a result, the final value of the
 expression isNaN(xy) + xy is NaN, which is what is logged to the console. */

 let xz = 20 / "10"; //js trata de convertir en números los strings para hacer operaciones, excepto la suma porq ahí concatena da 2
console.log( !isNaN(xz) + xz); //esto da 3 porque el true se volvió 1. Es true pq no es NaN, es 10 ((true=1) + 2)

//otra forma interesante de crear párrafos
let myNumber = 2; 
let txt = "";
while (myNumber != Infinity) { //el loop sigue hasta que no alcance el valor de infinity que es muy grande pero no es infinito realmente
   myNumber = myNumber * myNumber;
   txt = "<p>"+ txt + myNumber + "</p>"; //esto me permite ir agrandando la variable txt, si quito txt sólo se imprime el valor
   //final que toma. También vi que lee bien los tags p y br o salto de línea
}
//console.log(txt); ojo en console log no me sirve porq toma el p como texto, debo insertarlo en el html para que el p se interprete
//como párrafo
document.addEventListener("DOMContentLoaded", function() {
  let p1 = document.createElement("p"); //acá creo el párrafo p
  //en la siguiente línea experimenté agregando el tag h1 de html para ver si lo leía y sí lo leyó
p1.innerHTML = "<h1>Este es el resultado del loop while al infinity</h1> "+ txt; //acá le digo qué va a contener p. Voy a poner el
// resultado del while anterior
document.body.appendChild(p1); //acá agrego el párrafo creado con su contenido al body del html
// Change the font size of the header
p1.style.color = "#104a8e";
});
//probando Infinity
let infi = 1e308*1.797;
let infiMasUno = 1e308 * 1.798;
document.addEventListener("DOMContentLoaded", function() {
  let h3 = document.createElement("h3"); //acá creo el párrafo p
  //en la siguiente línea experimenté agregando el tag h1 de html para ver si lo leía y sí lo leyó
h3.innerHTML = "cercano a infinity "+ infi + "<br>pasado de infinity: " + infiMasUno ; //acá le digo qué va a contener p. Voy a poner el
// resultado del while anterior
document.body.appendChild(h3); //acá agrego el párrafo creado con su contenido al body del html
// Change the font size of the header
h3.style.color = "#104a8e";
});
