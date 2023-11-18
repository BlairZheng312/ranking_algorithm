// iterate arr, insert the element drawn from the unsorted area to the sorted area
// O(n**2)

function insertion_sort(arr) {
    let length = arr.length
    // draw the element from unsorted area
    for (i = 1; i < length; i++) {
        let temp = arr[i]
        // [0, i - 1] is the sorted area
        for (j = i - 1; j >= 0; j--) {
            // if the element in the sorted area is bigger than temp, move the element right
            if (temp < arr[j]) {
                arr[j + 1] = arr[j]
            }
            // if the elment in the sorted area is smaller than temp, exit loop
            else {
                break
            }
        }
        arr[j + 1] = temp
        console.log(arr)
    }
}

let arr = [9, 6, 4, 3, 5, 7, 1, 22,38,8]
insertion_sort(arr)