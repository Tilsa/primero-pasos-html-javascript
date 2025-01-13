var vida, ataque, pocion;
var nombre, textoBienvenide;

nombre = "Kira";
textoBienvenide = "Hola";

vida = 100;
ataque = 10;
pocion = 20;

function ataqueEnemigo() {
  vida -= ataque;

  if (vida <= 0) {
    console.log("Game Over");
  } else {
    muestraVida();
}
  }

function tomarPocion() {
    vida += pocion;
    console.log(vida);
    if (vida => 100) {
        console.log("Vida al maximo");
    } else {
      muestraVida();
    }
}

function muestraVida() {
  console.log("Nivel de vida del heroe");
  console.log(vida);
}
  





console.log(textoBienvenide + " " + nombre);
// console.log(vida);
