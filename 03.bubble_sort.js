// move bigger element towards the right
// O(n**2)

function bubble_sort(arr) {
    let length = arr.length
    // iterate n times
    for (i = 0; i < length - 1; i++) {
        // to mark whether arr is already sorted
        let exchange = false
        // [0, length - 1 - i] is the unsorted area
        for (j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                exchange = true
            }
        }
        console.log(arr)
        // if no element switched, arr is already sorted, exit loop
        if (!exchange) {
            return arr
        }
    }
}

let arr = [9, 8, 3, 4, 5, 6]
let result = bubble_sort(arr)