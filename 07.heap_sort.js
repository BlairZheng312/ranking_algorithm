// assume in the heap, only the top root element doesn't follow max-heap
// child elements follow max-heap
// O(logn)
function sift(arr, low, high) {
    // i points to the top root element
    let i = low

    // j points to the left child node
    let j = 2 * i + 1

    // temp is the root element that needs to be put in place
    let temp = arr[low]

    while (j <= high) {
        // if right child exists and is bigger than left child, j points to the right child node
        if (j + 1 <= high && arr[j + 1] > arr[j]) {
            j = j + 1
        }

        // if temp is smaller than child element, move child up, shift i & j down
        if (temp < arr[j]) {
            arr[i] = arr[j]
            i = j
            j = 2 * i + 1
        }
        // if temp is greater than child, exit loop
        else {
            break
        }
    }

    // end of loop, put temp in place
    arr[i] = temp
}

// O(nlogn)
function heap_sort(arr) {
    let length = arr.length

    // to construct max-heap
    // i is last element's parent element
    for (i = Math.floor((length - 2) / 2); i >= 0; i--) {
        sift(arr, i, length - 1)
    }

    // to sort elements from max-heap
    for (i = length - 1; i >= 0; i--) {
        let temp = arr[0]
        arr[0] = arr[i]
        arr[i] = temp
        sift(arr, 0, i - 1)
    }
}

let arr = [5, 7, 4, 6, 3, 1, 2, 9, 8, 22, 38]
heap_sort(arr)
console.log(arr)