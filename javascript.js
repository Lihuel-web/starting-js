console.log("Hello, world!")
let pirulin;
pirulin = 'redonda';

alert(pirulin)

let lala = 'gaty'; //define the variable and assign a value at once
alert(lala);

let mau = 'miu', ru = 'mee', suaves = 'run run'; //declarar varias variables juntas
alert(mau + ' ' + ru + ' ' + suaves);


let mimu = 'esponjosa' //comma first o al final o similares para leerse mejor línea a línea
    , verb = 'es'
    , colormiu = 'negruzca';
alert(mimu+' '+verb+' '+colormiu);

let $este = 2, _oeste = 3, camelCaseExample = -3; //errores en nombres de variables: let 1a; // cannot start with a digit 
console.log($este+_oeste*camelCaseExample) //let my-name; // hyphens '-' aren't allowed in the name. Es caseSensitive

//let let = 5; // can't name a variable "let", error! let y return están reservadas pero puedo ponerle mayus y listo
//let return = 5; // also can't name it "return", error!

//const son variables que no varían jamás, como tu fecha de nacimiento o este ejemplo de colores en hexadecimal
//la importancia de esto es que puedo usar palabras reales en inglés en lugar de memorizar el hexadecimal
//ah Y SE USAN MAYUS CON GUION BAJO NORMALMENTE
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00
//there are constants that are known prior to execution (like a hexadecimal value for red) and there are constants
// that are calculated in run-time, during the execution, but do not change after their initial assignment.
//For instance:

//const pageLoadTime = /* time taken by a webpage to load */;
//The value of pageLoadTime is not known prior to the page load, so it’s named normally. But it’s still a constant 
//because it doesn’t change after assignment.

let admin, Name;
Name  = 'John';
admin = Name;
alert(admin);

const OUR_PLANET = 'Earth';
function confirmAction() { //hay que sacar la función de adentro del for porque declarada adentro del for 
  //pierde el scope el break
for (let i = 0; i < 3; i++) {
let username = prompt("Please enter your username"); //acá voy a crear un loop para confirmar el nombre para practicar
let confirmAction = confirm("Your name is " + username + " ¿shall we continue?");//voy a cambiar los console.log por
//alerts y acá el alert por un confirm button
if (confirmAction == true) {
  alert("Welcome "+ username);
  break;
} else {
  alert("Ok, please enter your name again");
}
}
}
confirmAction(); //esto es muy importante para llamar y activar a la función, si no es ignorada. Y hacerlo afuera del loop
//for para que todo se active


/* Prompt the user to enter their birth day in the format "MM/DD/YYYY"
let birthday = prompt("Please enter your birth day (MM/DD/YYYY)");
 Convert the user's birth day string into a date object
let birthdate = new Date(birthday);
if (isNaN(birthdate.getTime())) {
    console.error("Invalid birth date. Please enter a date in the format MM/DD/YYYY.");
} isNan is not a number es lo que arrojaría como true si no es una fecha válida
ESTE COMENTARIO ES CÓDIGO VIEJO DE PRÁCTICA PERO SIN EL LOOP NO ES ÚTIL EL CARTEL DE ERROR CON LA FECHA*/

let birthday, birthdate; //super importante declarar las variables afuera y antes del loop for porque 
//sino quedan adentro de su scope e inaccesibles fuera de ahí
// Use a for loop to continuously prompt the user for their birthdate
for (let i = 0; i < 3; i++) { //el let de acá sirve para crear dos variables, la del prompt que puede ser cualquier cosa
  //inclusive palabras y a partir del prompt una variable que debe ser una fecha o si no da isNaN not a number, o error
    birthday = prompt("Please enter your birth day (MM/DD/YYYY)"); //crea el prompt junto a un campo para ingresar datos de la var
    birthdate = new Date(birthday); //new Date(birthday) crea un objeto de fecha con sus horas minutos y segundos a partir
    //de lo que pongo entre paréntesis
    // OJOOO AQUÍ ES IMPORTANTE NO PONER LET AUNQUE ME LO PIDA VISUAL CODE PORQUE SI NO SE VUELVEN A DECLARAR LAS VARIABLES ADENTRO
    //DEL LOOP Y AHÍ SE QUEDAN. lo que hay que hacer es quitar el let para que sólo se actualicen las variables ya declaradas
    // Check if the birthdate is a valid date
    if (!isNaN(birthdate.getTime())) { //si !NO es un isNaN o sea error entonces break, rompo el loop
      // If the birthdate is a valid date, break out of the loop
      break;
    } else { //el else sería que sí es isNaN la fecha o sea no es una fecha válida
      // If the birthdate is not a valid date, show an error message y repite
      alert("Invalid birth date. Please enter a date in the format MM/DD/YYYY.");
    }
  }
  alert(birthdate);
  // If a valid birthdate was not entered after three attempts, show an error message
  if (isNaN(birthdate.getTime())) {
    alert("Too many attempts. Please try again later.");
  } else {
    alert("Your birthdate is " + birthdate);
  }
  document.addEventListener("DOMContentLoaded", function() {
  let p1 = document.createElement("p");
p1.innerHTML = "your birthday is "+ birthday;
document.body.appendChild(p1);
  });

//document.write("your birthday is "+ birthday); aquí cambié al uso document.write para que quede todo en el html
//ohh pero todo quedaba en la misma línea y no se entendía nada así que cambié a crear páragrafos en el body vacío del html
//ohh pero me daba el error "Uncaught TypeError: Cannot read properties of null (reading 'appendChild')"
//por eso tuve que agregar el código recomendado por chatgpt para que espere a que cargue la página antes de correr el script
//esto se debía a que no había un body para crear el párrafo ya que el script se ejecuta antes

// Get the current date

let today = new Date();
document.addEventListener("DOMContentLoaded", function() {
  let p1 = document.createElement("p");
p1.innerHTML = "today is "+ today +
              "<br><br> your birth date is "+ birthdate;
document.body.appendChild(p1);
  });

// Calculate the user's age in years
let age = today.getFullYear() - birthdate.getFullYear();
document.addEventListener("DOMContentLoaded", function() {
  let p1 = document.createElement("p");
p1.innerHTML = "the current year is "+ today.getFullYear() +
              "<br><br> the year you were born was " + birthdate.getFullYear() + 
              "<br><br> your age taking the years into account is " + age;
document.body.appendChild(p1);
  });

// Adjust the age if the user's birthday has not yet occurred this year
let m = today.getMonth() - birthdate.getMonth(); // Here, we're calculating the difference
//between the current month and the birth month of the user. The result is stored in the variable m.
document.addEventListener("DOMContentLoaded", function() {
let p1 = document.createElement("p");
p1.innerHTML = "estamos en el mes " + today.getMonth() +
              "<br><br> naciste en el mes de " + birthdate.getMonth() + 
              "<br><br> your age taking the months into account is " + age; //en realidad todavía no tomo en cuenta los meses
document.body.appendChild(p1);
  });
//ojoooo esto da menos uno al mes porque está basado en que enero es el mes cero wooow
/* según chat gpt: The getMonth() method in JavaScript returns the month as a zero-based value, meaning
that January is represented as 0, February is represented as 1, and so on. So, if the
current month is February, for example, today.getMonth() would return 1, not 2.

This can sometimes lead to unexpected results, especially if you're not aware of the
zero-based nature of the method. If you want to display the month as a human-readable value,
you can add 1 to the result of getMonth() before using it. You can also use an array of
month names to display the month name instead of the zero-based value.

Here's an example of how to display the current month as a human-readable value:

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

console.log("Today is " + monthNames[today.getMonth()]);
aquí pondré el array*/
const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"
];
document.addEventListener("DOMContentLoaded", function() {
  let p1 = document.createElement("p");
  p1.innerHTML = "El mes actual es: " + monthNames[today.getMonth()] +
                "<br><br> Naciste en el mes de: " + monthNames[birthdate.getMonth()] + 
                "<br><br> la diferencia o resta entre el mes actual y el de tu nacimiento da: "+ m +
                "<br><br> El día de hoy es: " + today.getDate() +
                "<br><br> el día de tu nacimiento fue: "+ birthdate.getDate();
  document.body.appendChild(p1);
    });
if (today.getDate() < birthdate.getDate()) {
  document.addEventListener("DOMContentLoaded", function() {
    let p1 = document.createElement("p");
    p1.innerHTML = "la fecha de hoy: " + today.getDate() +" es menor que "+ "tu fecha de nacimiento: " + birthdate.getDate();
    document.body.appendChild(p1);
      });
} else {
  document.addEventListener("DOMContentLoaded", function() {
    let p1 = document.createElement("p");
    p1.innerHTML = "la fecha de hoy: " + today.getDate() +" es mayor que "+ "tu fecha de nacimiento: " + birthdate.getDate();
    document.body.appendChild(p1);
      });
}

if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) { //m era el mes de hoy menos el mes del cumpleaños
    age--;
}

// || means OR operator, si una de los dos condiciones es cierta arroja true y hace la acción de restar
//&& es AND, los dos deben ser true para arrojar true
/*This if statement checks two conditions:

If the value of m is less than 0, it means that the user's birth month has not yet occurred this year.
In this case, we decrement the age by 1.

If the value of m is equal to 0 (i.e., the user's birth month is this month), it means that the user's
birth day is still to occur this year. In this case, we check the current day of the month against
the user's birth day. If the current day is less than the user's birth day, we decrement the age by 1.

So, if either of these conditions is true, it means that the user's birthday has not yet occurred this year,
and we decrement the age by 1.*/

// Write the user's age to the web page
document.addEventListener("DOMContentLoaded", function() {
  let p1 = document.createElement("p");
  p1.innerHTML = "Your age is: " + age;
  document.body.appendChild(p1);
    });

/*For example, 1 === 1 returns true, but 1 === "1" returns false, because one is an integer and the other is a string.

The strict equality operator is often used instead of the normal equality operator ==
because the latter has some type coercion rules, meaning it can implicitly convert the types of
the operands before comparing them. The strict equality operator avoids this type coercion and ensures a
more accurate comparison of values.
*/
