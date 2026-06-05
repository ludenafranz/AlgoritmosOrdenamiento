
# @author Franz Ludeña

def bubble_sort(nums):

    size = len(nums)

    # Bucle principal
    for i in range(size - 1):

        # Compara elementos vecinos
        for j in range(size - i - 1):

            # Intercambio de posiciones
            if nums[j] > nums[j + 1]:
                nums[j], nums[j + 1] = nums[j + 1], nums[j]


nums = [5, 1, 6, 2, 4, 3]

bubble_sort(nums)

print(nums)