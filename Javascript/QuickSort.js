
/**
 * @author Franz Ludeña
 */

function quickSort(arr, low, high) {

    // Verifica si todavía existen elementos por ordenar
    if (low < high) {

        // Obtiene la posición correcta del pivote
        let pivotIndex = partition(arr, low, high);

        // Ordena la parte izquierda del pivote
        quickSort(arr, low, pivotIndex - 1);

        // Ordena la parte derecha del pivote
        quickSort(arr, pivotIndex + 1, high);
    }
}


// Método para dividir el arreglo usando un pivote
function partition(arr, low, high) {

    // Selecciona el último elemento como pivote
    let pivot = arr[high];

    // Índice del elemento menor
    let i = low - 1;

    // Recorre el arreglo desde low hasta high - 1
    for (let j = low; j < high; j++) {

        // Verifica si el elemento actual es menor al pivote
        if (arr[j] < pivot) {

            // Avanza el índice del elemento menor
            i++;

            // Intercambio de elementos
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Coloca el pivote en su posición correcta
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    // Retorna la posición final del pivote
    return i + 1;
}


// Arreglo de números desordenados
let arr = [5, 1, 6, 2, 4, 3];

// Llamada al algoritmo QuickSort
quickSort(arr, 0, arr.length - 1);

// Muestra el arreglo ordenado
console.log(arr);