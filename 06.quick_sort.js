// pick pivot, then make sure the left elements are smaller than pivot, and right elements are bigger
// repeat the process until arr is sorted
// O(nlogn)
// worst case: arr is reversed => pick random element as pivot to minimize the possibility

function partition(arr, left, right) {
    // choose first element as pivot
    let temp = arr[left]
    while (left < right) {
        // look for smaller elements from the right
        while (left < right && arr[right] >= temp) {
            right--
        }
        arr[left] = arr[right]
        // look for greateer elements from the left
        while (left < right && arr[left] <= temp) {
            left++
        }
        arr[right] = arr[left]
    }
    arr[left] = temp
    return left
}

function quick_sort(arr, left, right) {
    if (left < right) {
        let mid = partition(arr, left, right)
        quick_sort(arr, left, mid - 1)
        quick_sort(arr, mid + 1, right)
    }
}

let arr = [5, 7, 4, 6, 3, 1, 2, 9]
quick_sort(arr, 0, arr.length - 1)
console.log(arr)
