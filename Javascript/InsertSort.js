
/**
 * @author Franz Ludeña
 */

function insertionSort(arr) {

    // Recorre el arreglo desde el segundo elemento
    for (let i = 1; i < arr.length; i++) {

        let key = arr[i];
        let j = i - 1;

        // Desplaza elementos mayores
        while (j >= 0 && arr[j] > key) {

            arr[j + 1] = arr[j];
            j--;
        }

        // Inserta la clave
        arr[j + 1] = key;
    }
}

let arr = [5, 2, 4, 6, 1, 3];

insertionSort(arr);

console.log(arr);