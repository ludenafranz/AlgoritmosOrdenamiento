
/**
 * @author Franz Ludeña
 */

function mergeArrays(arr, l, m, r) {

    // Tamaño del subarreglo izquierdo
    let n1 = m - l + 1;

    // Tamaño del subarreglo derecho
    let n2 = r - m;

    // Arreglos auxiliares
    let L = new Array(n1);
    let R = new Array(n2);

    // Copiar elementos al arreglo izquierdo
    for (let i = 0; i < n1; i++) {
        L[i] = arr[l + i];
    }

    // Copiar elementos al arreglo derecho
    for (let j = 0; j < n2; j++) {
        R[j] = arr[m + 1 + j];
    }

    // Variables de control
    let i = 0; // Índice del arreglo izquierdo
    let j = 0; // Índice del arreglo derecho
    let k = l; // Índice del arreglo principal

    // Comparar elementos y ordenar
    while (i < n1 && j < n2) {

        // Verifica cuál elemento es menor
        if (L[i] <= R[j]) {

            arr[k] = L[i];
            i++;

        } else {

            arr[k] = R[j];
            j++;
        }

        k++;
    }

    // Copiar elementos restantes del arreglo izquierdo
    while (i < n1) {

        arr[k] = L[i];
        i++;
        k++;
    }

    // Copiar elementos restantes del arreglo derecho
    while (j < n2) {

        arr[k] = R[j];
        j++;
        k++;
    }
}


// Método principal de Merge Sort
function mergeSort(arr, l, r) {

    // Verifica si el arreglo puede dividirse
    if (l < r) {

        // Calcula el punto medio
        let m = Math.floor(l + (r - l) / 2);

        // Ordena mitad izquierda
        mergeSort(arr, l, m);

        // Ordena mitad derecha
        mergeSort(arr, m + 1, r);

        // Combina ambas mitades
        mergeArrays(arr, l, m, r);
    }
}


// Arreglo de números desordenados
let arr = [5, 1, 6, 2, 4, 3];

// Llamada al algoritmo
mergeSort(arr, 0, arr.length - 1);

// Mostrar arreglo ordenado
console.log(arr);