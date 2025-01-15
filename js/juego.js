var vida, ataque, pocion;
var nombre, textoBienvenide;
var numero_1, numero_2, resultado;
var turno = 1;
var atacar = 0 ;
var quemar = 1;
var envenenar = 2;
var fallar = 3;
var vida = 100;

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
  
  numero_1 = prompt('Ingrese un numero');
  numero_2 = prompt('Ingrese otro numero');
  resultado = suma(numero_1, numero_2);
resultado = suma(numero_1, numero_2);

function suma(num1, num2){
 var valor;
num1 = parseInt(num1);
num2 = parseInt(num2);
valor = num1 + num2;
return (valor);
}

function JuegaTurno(){
  var jugadaCPU = Math.floor(Math.random() * 4);
  console.log("Jugada CPU: " + jugadaCPU);

  if(jugadaCPU == atacar){
    vida -= 10;
   console.log("He atacado all jugador");
   }
   if(jugadaCPU == quemar){

     console.log("He quemado al jugador");
   }
   if(jugadaCPU == envenenar){
      envenenado = true;
     console.log("He envenenado al jugador");
   }
   if(jugadaCPU == fallar){
     console.log("He fallado");
   }
   muestraEstadoJugador();
}

function muestraEstadoJugador(){

    console.log("Vida: " + vida);
    if(envenenado == true) 
      console.log("Usted esta envenenado");
    if(quemado == true)
      console.log("Usted esta quemado");
}








console.log(textoBienvenide + " " + nombre);
// console.log(vida);