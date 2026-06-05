
/**
 * @author Franz Ludeña
 */

function bubbleSort(nums) {

    let size = nums.length;

    // Bucle principal
    for (let i = 0; i < size - 1; i++) {

        // Compara elementos vecinos
        for (let j = 0; j < size - i - 1; j++) {

            // Intercambio de posiciones
            if (nums[j] > nums[j + 1]) {

                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
}

let nums = [5, 1, 6, 2, 4, 3];

bubbleSort(nums);

console.log(nums);