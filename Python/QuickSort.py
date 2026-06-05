
# @author Franz Ludeña

def quick_sort(arr, low, high):

    # Verifica si todavía existen elementos por ordenar
    if low < high:

        # Obtiene la posición correcta del pivote
        pivot_index = partition(arr, low, high)

        # Ordena la parte izquierda del pivote
        quick_sort(arr, low, pivot_index - 1)

        # Ordena la parte derecha del pivote
        quick_sort(arr, pivot_index + 1, high)


# Método para dividir el arreglo usando un pivote
def partition(arr, low, high):

    # Selecciona el último elemento como pivote
    pivot = arr[high]

    # Índice del elemento menor
    i = low - 1

    # Recorre el arreglo desde low hasta high - 1
    for j in range(low, high):

        # Verifica si el elemento actual es menor al pivote
        if arr[j] < pivot:

            # Avanza el índice del elemento menor
            i += 1

            # Intercambio de elementos
            arr[i], arr[j] = arr[j], arr[i]

    # Coloca el pivote en su posición correcta
    arr[i + 1], arr[high] = arr[high], arr[i + 1]

    # Retorna la posición final del pivote
    return i + 1


# Arreglo de números desordenados
arr = [5, 1, 6, 2, 4, 3]

# Llamada al algoritmo QuickSort
quick_sort(arr, 0, len(arr) - 1)

# Muestra el arreglo ordenado
print(arr)