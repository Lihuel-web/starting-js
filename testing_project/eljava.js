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