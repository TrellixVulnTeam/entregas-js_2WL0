// clase naipe: 
// .numero = numero de la carta
// .palo="palo de la carta"
// .valor = number, cuanto mayor mas fuerte
class Naipe{

  // recibe el numero de la carta y el numero del palo 
  constructor(numeroParam, paloParam){

    // establece el numero de la carta
    this.numero=numeroParam;
    // establece el palo de la carta
    switch (paloParam){
      case 0:
        this.palo="espada";
        break;
      case 1:
        this.palo="basto";
        break;
      case 2:
        this.palo="oro";
        break;
      case 3:
        this.palo="copa";
        break;
    }
    // establece el valor de la carta
    switch(numeroParam){

      case 1:
        if (this.palo == "espada"){
          this.valor = 14;
        } else if (this.palo == "basto"){
          this.valor = 13;
        } else {
          this.valor = 8;
        }
        break;

      case 7:
        if(this.palo == "espada"){
          this.valor = 12;
        }else if(this.palo == "oro"){
          this.valor = 11;
        }else{
          this.valor = 4;
        }
        break;

      case 3:
        this.valor = 10;
        break;
      case 2:
        this.valor = 9;
        break;
      case 12:
        this.valor = 7;
        break;
      case 11:
        this.valor = 6;
        break;
      case 10:
        this.valor = 5;
        break;
      case 6:
        this.valor = 3;
        break;
      case 5:
        this.valor = 2;
        break;
      case 4:
        this.valor = 1;
        break;
    }

  }

}

// funcion randomEntre
randomEntre = (min, max) => Math.random() * (max - min) + min;

// funcion repartir cartas
// inicializa el mazo y quita 6 cartas aleatorias y las coloca en las manos
function repartirCartas(){

  //inicializacion vectores de objetos Naipe
  let mazo = [];
  let manoPC = [];
  let manoJugador = [];

  // agrega todas las cartas al mazo

  // palos del 0 al 3
  for (let i = 0; i<=3;i++){
    
    // numeros del 1 al 12
    for(let j = 1; j<=12;j++){

      // excepto 8s y 9s
      if (j!=8 && j!=9){
        
        // instancia la nueva carta
        let NuevaCarta = new Naipe(j, i);

        // agrega la nueva carta al mazo
        mazo.push(NuevaCarta);

      }
      
    }

  }

  // Muestra MAZO en consola, antes de robar las cartas
  console.log(" ");
  console.log("MAZO ENTERO:")
  console.table(mazo);

  // repartida de cartas
  for (i=0; i<3; i++){

    // PC :

    // indice random aleatorio
    let random1 = randomEntre(0, mazo.length-1);
    
    // quito del mazo esa carta y la guardo en una variable
    let CartaRobada1 = mazo.splice(random1, 1);

    // agrego esa carta a la mano del PC
    // especifico [0] ya que .splice devuelve un array
    manoPC.push(CartaRobada1[0]);

    
    // JUGADOR:
    
    // indice random aleatorio
    let random2 = randomEntre(0, mazo.length-1);
    
    // quito del mazo esa carta y la guardo en una variable
    let CartaRobada2 = mazo.splice(random2, 1);

    // agrego esa carta a la mano del jugador2
    // especifico [0] ya que .splice devuelve un array
    manoJugador.push(CartaRobada2[0]);
    
  }

  // Muestra MAZO en consola con sus cartas robadas
  console.log(" ");
  console.log("MAZO CON CARTAS ROBADAS:")

  console.log(" ");
  console.log("MANO DEL PC:");
  console.log("tipo mano pc", manoPC);
  console.table(manoPC);
  
  console.log(" ");
  console.log("MANO DEL JUGADOR:");
  console.log("tipo mano jugador", manoJugador);
  console.table(manoJugador);
  
  
  // * carga las imágenes en las tags IMGs *
  for(let j = 0; j < manoJugador.length; j++){
    
    // construye el id del IMG utilizando el indice del for
    let idIMG = `carta-jugador-${j+1}`;

    // construye la ruta de la imagen a cargar, utilizando las propiedades del objeto
    let pathIMG = `/cards/${manoJugador[j].numero}${manoJugador[j].palo}.jpg`;

    // asigna ese source a cada tag IMG
    document.getElementById(idIMG).src = pathIMG;

    // muestro en consola las rutas de las cartas
    console.log(`path carta (${j+1}): ${pathIMG}`);

  }

}


// asocia la función repartirCartas() al click del boton correspondiente.

// guardo el tag en una variable
let boton = document.getElementById("btn-repartir-cartas");
// agrega listener para 'click
boton.addEventListener('click', function(){
  repartirCartas();
});





