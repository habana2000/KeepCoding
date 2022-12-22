/* Componentes */
// ✔ filas
// ✔ columnas
// ✔ cartas
// jugador
// puntuación (si las cartas son iguales)
// contadores
// turnos
// ✔ figuras (de las cartas)
// mensajes
// celdas vacias
// simular cartas seleccionadas


/* Guión de lo que hay que hacer */
// Mostrar el tablero inicial
const ROWS = 3
const COLS = 2
const FIGURES =  ['😊','🧶','🚨']
console.log('Available figures:',FIGURES)

/* Tablero */
let board = []

// por cada fila
/*
for (let i = 0; i < ROWS; i++) {
    // por cada columna
    let row = []
    for (let j = 0; j < COLS; j++) {
        // console.log(j,i)
        row[j] = FIGURES[i]
    }
    board[i] = row
}
*/

// Vamos a hacer el tablero como un array de 1 dimensión 
for (let i = 0; i < ROWS * COLS / 2; i++) {
    for (let j = 0; j< 2; j++) {
       /*  board[i + j * ROWS] = FIGURES[i] */
       board.push(FIGURES[i])
    }
}
console.log(board)


// Funcion que mezcla las cartas

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  board = shuffle(board)
  console.log(board)
  
  // Ahora vamos a mostrar el tablero

  function printBoard(board) {
    for (let i  = 0; i < ROWS ; i++) {
        let line = ''
        for (let j = 0 ; j< COLS; j++) {
            line += board[ i * COLS + j]
        }
        console.log(line)
    }
    return
  }
  
  printBoard(board)

// ✔ Generar selección de cartas de manera aleatoria
// TODO Mostrarla por pantalla hasta que quede solucionado el juego
// TODO Una vez terminado el juego, se mostraran algunas estadísticas
// TODO Intentaremos añadir un poco de inteligencia para que el juego sea más listo