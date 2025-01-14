var vida, Ataque, pocion;
var nombre, textoBienvenide;
var numero_1, numero_2, resultado;

nombre = "Kira";
textoBienvenide = "Hola";

vida = 100;
ataque = 10;
pocion = 20;

function ataqueEnemigo(potencia, nombreAtaque) {
  vida -= ataque;
  vida -= potencia;
  console.log("El enemigo ha atacado con " + nombreAtaque);
  console.log("Vida restante: " + vida);
  muestraVida(nombreAtaque);
  if (vida <= 0) {
    console.log("Game Over");
  } else {
    muestraVida();
}
  }

function tomarPocion() {
    vida += pocion;
    console.log(vida);
}

function muestraVida() {
  console.log("Nivel de vida del heroe");
  console.log(vida);
  
}
  
function accion(){
  numero1 = prompt('Ingrese un numero');
  numero2 = prompt('Ingrese otro numero');
  resultado = suma(numero1, numero2);
}

function suma(num1, num2){
 var valor;
 valor = num1 + num2;
 return (valor);
}


console.log(textoBienvenide + " " + nombre);
// console.log(vida);