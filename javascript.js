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
//The value of pageLoadTime is not known prior to the page load, so it’s named normally. But it’s still a constant because it doesn’t change after assignment.

let admin, Name;
Name  = 'John';
admin = Name;
alert(admin);

const OUR_PLANET = 'Earth';
let username = prompt("Please enter your username");
console.log("Your name is " + username);

// Prompt the user to enter their birth day in the format "MM/DD/YYYY"
let birthday = prompt("Please enter your birth day (MM/DD/YYYY)");
// Convert the user's birth day string into a date object
let birthdate = new Date(birthday);
if (isNaN(birthdate.getTime())) {
    console.error("Invalid birth date. Please enter a date in the format MM/DD/YYYY.");
} //isNan is not a number es lo que arrojaría como true si no es una fecha válida
console.log("your birthday is "+ birthday);
// Get the current date

let today = new Date();
console.log("today is "+ today);


console.log("your birth date is "+ birthdate);

// Calculate the user's age in years
let age = today.getFullYear() - birthdate.getFullYear();
console.log("the current year is "+ today.getFullYear());
console.log("the year you were born was "+ birthdate.getFullYear());
console.log("your age taking the years into account is "+ age);

// Adjust the age if the user's birthday has not yet occurred this year
let m = today.getMonth() - birthdate.getMonth(); // Here, we're calculating the difference
//between the current month and the birth month of the user. The result is stored in the variable m.
console.log("estamos en el mes " + today.getMonth());
console.log("naciste en el mes de " + birthdate.getMonth());
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
console.log("El mes actual es: " + monthNames[today.getMonth()]);
console.log("Naciste en el mes de: " + monthNames[birthdate.getMonth()]);
console.log("la diferencia o resta entre el mes actual y el de tu nacimiento da: "+ m);
console.log("El día de hoy es: " + today.getDate());
console.log("el día de tu nacimiento fue: "+ birthdate.getDate());
if (today.getDate() < birthdate.getDate()) {
    console.log(today.getDate()+"<"+birthdate.getDate())
} else {
    console.log(today.getDate()+">"+birthdate.getDate())
}

console.log(today.getDate()+">"+birthdate.getDate())
if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) { 
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
document.write("Your age is: " + age);

/*For example, 1 === 1 returns true, but 1 === "1" returns false, because one is an integer and the other is a string.

The strict equality operator is often used instead of the normal equality operator ==
because the latter has some type coercion rules, meaning it can implicitly convert the types of
the operands before comparing them. The strict equality operator avoids this type coercion and ensures a
more accurate comparison of values.
*/
