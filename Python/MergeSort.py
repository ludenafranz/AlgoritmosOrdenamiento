
# @author Franz Ludeña

def merge_arrays(arr, l, m, r):

    # Tamaño del subarreglo izquierdo
    n1 = m - l + 1

    # Tamaño del subarreglo derecho
    n2 = r - m

    # Arreglos auxiliares
    L = [0] * n1
    R = [0] * n2

    # Copiar elementos al arreglo izquierdo
    for i in range(n1):
        L[i] = arr[l + i]

    # Copiar elementos al arreglo derecho
    for j in range(n2):
        R[j] = arr[m + 1 + j]

    # Variables de control
    i = 0  # Índice del arreglo izquierdo
    j = 0  # Índice del arreglo derecho
    k = l  # Índice del arreglo principal

    # Comparar elementos y ordenar
    while i < n1 and j < n2:

        # Verifica cuál elemento es menor
        if L[i] <= R[j]:

            arr[k] = L[i]
            i += 1

        else:

            arr[k] = R[j]
            j += 1

        k += 1

    # Copiar elementos restantes del arreglo izquierdo
    while i < n1:

        arr[k] = L[i]
        i += 1
        k += 1

    # Copiar elementos restantes del arreglo derecho
    while j < n2:

        arr[k] = R[j]
        j += 1
        k += 1


# Método principal de Merge Sort
def merge_sort(arr, l, r):

    # Verifica si el arreglo puede dividirse
    if l < r:

        # Calcula el punto medio
        m = l + (r - l) // 2

        # Ordena mitad izquierda
        merge_sort(arr, l, m)

        # Ordena mitad derecha
        merge_sort(arr, m + 1, r)

        # Combina ambas mitades
        merge_arrays(arr, l, m, r)


# Arreglo de números desordenados
arr = [5, 1, 6, 2, 4, 3]

# Llamada al algoritmo
merge_sort(arr, 0, len(arr) - 1)

# Mostrar arreglo ordenado
print(arr)