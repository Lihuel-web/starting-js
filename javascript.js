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

