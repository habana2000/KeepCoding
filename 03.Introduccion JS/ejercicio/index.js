/* Componentes */
// ✔filas
// ✔columnas
// cartas
// jugador
// puntuación (si las cartas son iguales)
// contadores
// turnos
// ✔figuras (de las cartas)
// mensajes
// celdas vacias
// simular cartas seleccionadas


/* Guión de lo que hay que hacer */
// Mostrar el tablero inicial
const ROWS = 3
const COLS = 2
const FIGURES =  ['❤','🧶','🚨']
console.log('Available figures:',FIGURES)

/* Tablero */
let board = []

// por cada fila
for (let i = 0; i < ROWS; i++) {
    // por cada columna
    let row = []
    for (let j = 0; j < COLS; j++) {
        // console.log(j,i)
        row[j] = FIGURES[i]
    }
    board[i] = row
}
console.log(board)

// TODO Generar selección de cartas de manera aleatoria
// TODO Mostrarla por pantalla hasta que quede solucionado el juego
// TODO Una vez terminado el juego, se mostraran algunas estadísticas
// TODO Intentaremos añadir un poco de inteligencia para que el juego sea más listo