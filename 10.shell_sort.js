// improved version of insertion_sort by dividing arr to smaller group
// insertion_sort is when gap === 1
// time complexity: up to gap, if gap is divided by halp each time, worst case scenario => O(n**2)

function insertion_sort(arr, gap) {
    let length = arr.length
    // draw the element from unsorted area
    for (i = gap; i < length; i++) {
        let temp = arr[i]
        // [0, i - 1] is the sorted area
        for (j = i - gap; j >= 0; j -= gap) {
            // if the element in the sorted area is bigger than temp, move the element right
            if (temp < arr[j]) {
                arr[j + gap] = arr[j]
            }
            // if the elment in the sorted area is smaller than temp, exit loop
            else {
                break
            }
        }
        arr[j + gap] = temp
    }
}

function shell_sort(arr) {
    let gap = Math.floor(arr.length / 2)
    while (gap >= 1) {
        insertion_sort(arr, gap)
        gap = Math.floor(gap / 2)
    }
}

let arr = [9, 6, 4, 3, 5, 7, 1, 22, 38, 8]
// insertion_sort(arr, 4)
shell_sort(arr)
console.log(arr)