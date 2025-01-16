var vida, ataque, pocion;
var Pocion = 0
var colaFenix = 1
var pocionquemaduras = 2
var Veneno = 3
var nombre, textoBienvenide;
var numero_1, numero_2, resultado;
var turno = 1;
var atacar = 0;
var quemar = 1;
var envenenar = 2;
var fallar = 3;
vida = 100;

//ESTADOS DEL JUGADOR
var vivo = true;
var envenenado = false;
var quemado = false;

//JUGADAS CPU

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

numero_1 = prompt("Ingrese un numero");
numero_2 = prompt("Ingrese otro numero");
resultado = suma(numero_1, numero_2);
resultado = suma(numero_1, numero_2);

function suma(num1, num2) {
  var valor;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  valor = num1 + num2;
  return valor;
}

function JuegaTurno() {
  var jugadaCPU = Math.floor(Math.random() * 4);

  if(vida <= 0){
    vivo = false;
  }

  if(vida <= 0){
    vivo = false;
  }

  if (vivo == true) {
    console.log("Jugada CPU");

    if (jugadaCPU == atacar) {
      vida -= 10;
      console.log("He atacado al jugador");
    }
    if (jugadaCPU == quemar) {
      console.log("He quemado al jugador");
    }
    if (jugadaCPU == envenenar) {
      envenenado = true;
      console.log("He envenenado al jugador");
    }
    if (jugadaCPU == fallar) {
      console.log("He fallado");
    }
    muestraEstadoJugador();
  } else {
    console.log("Game Over");
  }
}

function muestraEstadoJugador() {
  if(vivo == true){
    console.log("Vida: " + vida);
    if(envenenado == true) 
      console.log("Usted esta envenenado");
    if(quemado == true)
      console.log("Usted esta quemado");
  } else {
    console.log("Game Over");
  }
}
function usarItem(objeto) {

if(objeto == pocion){
  vida += 50;
}
if(objeto == colaFenix){
  if(vivo == false) {
    vivo = true;
    vida = 30;
  } else {
    console.log("No puedes usar este item");
  }
}
if(objeto == pocionquemaduras){
  if(quemado == true)
    quemado = false;

  else {
   console.log("No puedes usar este item");
  }
}
if(objeto == Veneno){
  if (envenenado == true)
  envenenado = false;
  else {
    console.log("No puedes usar este item");
  }

}

  muestraEstadoJugador();



        console.log(textoBienvenide + " " + nombre);
}
  