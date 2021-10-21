// Click - btn-truco
let botonTruco = document.getElementById(`btn-truco`);
botonTruco.addEventListener('click', function(){

  setBotonesTruco();

});

// Click - btn-retruco
let botonRetruco = document.getElementById(`btn-retruco`);
botonRetruco.addEventListener('click', function(){

  setBotonesRetruco();

});

// Click - btn-vale-4
let botonVale4 = document.getElementById(`btn-vale-4`);
botonVale4.addEventListener('click', function(){

  setBotonesVale4();

});

// Click - btn-real-envido
let botonRealEnvido = document.getElementById(`btn-real-envido`);
botonRealEnvido.addEventListener('click', function(){

  setBotonesRealEnvido();

});

// Click - btn-falta-envido
let botonFaltaEnvido = document.getElementById(`btn-falta-envido`);
botonFaltaEnvido.addEventListener('click', function(){

  setBotonesFaltaEnvido();

});


// Click - btn-nuevo-juego
let botonNuevoJuego = document.getElementById(`btn-nuevo-juego`);
botonNuevoJuego.addEventListener('click', function(){

  setBotonesNuevoJuego();
  mostrarCartasInit();
  storageInfoInit();
  
  checkDisableButtonsPuntos();
  mostrarPuntos();

});


// Click - btn-repartir-cartas
let botonRepartirCartas = document.getElementById(`btn-repartir-cartas`);
botonRepartirCartas.addEventListener('click', function(){
  
  console.clear();
  
  repartirCartas();
  mostrarCartasRepartidas();
  setBotonesRepartirCartas();

  botonRepartirCartas.disabled = `true`;
  botonRepartirCartas.classList.add(`btn-disabled`);

});


// Click en carta-jugador-1
let IMGcartaJugador1 = document.getElementById('carta-jugador-1')  
IMGcartaJugador1.addEventListener('click', function(){
  let turnoActual = localStorage.getItem('turnoActual');
  if (turnoActual=='jugador'){
    jugarCartaJugador(this.src);
    mostrarMesa('jugador');
    disableCard(this.id);
    setTimeout(() => {PCJugarCarta()}, 3000);
  }
});

// Click en carta-jugador-2
let IMGcartaJugador2 = document.getElementById('carta-jugador-2')  
IMGcartaJugador2.addEventListener('click', function(){
  let turnoActual = localStorage.getItem('turnoActual');
  if (turnoActual=='jugador'){
    jugarCartaJugador(this.src);
    mostrarMesa('jugador');
    disableCard(this.id);
    setTimeout(() => {PCJugarCarta()}, 3000);
  }
});

// Click en carta-jugador-3
let IMGcartaJugador3 = document.getElementById('carta-jugador-3')  
IMGcartaJugador3.addEventListener('click', function(){
  let turnoActual = localStorage.getItem('turnoActual');
  if (turnoActual=='jugador'){
    jugarCartaJugador(this.src);
    mostrarMesa('jugador');
    disableCard(this.id);
    setTimeout(() => {PCJugarCarta()}, 3000);
  }
});





// *  *  *  *  * PROVISORIO PARA 2DA ENTREGA DEL PROYECTO *  *  *  *  *

// Click btn-sumar-puntos-jugador
let btnSumarPuntosJugador = document.getElementById('btn-sumar-puntos-jugador');
btnSumarPuntosJugador.addEventListener('click', () => {

  
  sumarPuntos('jugador', 1);
  mostrarPuntos();

  

 
});

// Click btn-restar-puntos-jugador
let btnRestarPuntosJugador = document.getElementById('btn-restar-puntos-jugador');
btnRestarPuntosJugador.addEventListener('click', () => {
  sumarPuntos('jugador', -1);
  mostrarPuntos();
});

// Click btn-sumar-puntos-pc
let btnSumarPuntosPC = document.getElementById('btn-sumar-puntos-pc');
btnSumarPuntosPC.addEventListener('click', () => {
  sumarPuntos('PC', 1);
  mostrarPuntos();
});

// Click btn-restar-puntos-pc
let btnRestarPuntosPC = document.getElementById('btn-restar-puntos-pc');
btnRestarPuntosPC.addEventListener('click', () => {
  sumarPuntos('PC', -1);
  mostrarPuntos();
});









