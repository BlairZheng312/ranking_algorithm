// time complexity O(nlogn)
// space complexity O(n)

// assume arr[low, mid], arr[mid+1, high] is sorted
function merge(arr, low, mid, high) {
    let i = low
    let j = mid + 1
    let temp = []
    // iterate arr[low, mid], arr[mid+1, high] to compare every element
    while (i <= mid && j <= high) {
        if (arr[i] < arr[j]) {
            temp.push(arr[i])
            i++
        } else {
            temp.push(arr[j])
            j++
        }
    }

    // if arr[mid+1, high] is sorted in arr, add remaining arr[low, mid] to the end of arr
    while (i <= mid) {
        temp.push(arr[i])
        i++
    }
    // if arr[low, mid] is sorted in arr, add remaining arr[mid+1, high] to the end of arr
    while (j <= high) {
        temp.push(arr[j])
        j++
    }

    arr.splice(low, high - low + 1, ...temp)
}

function merge_sort(arr, low, high) {
    if (low < high) {
        let mid = Math.floor((low + high) / 2)
        merge_sort(arr, low, mid)
        merge_sort(arr, mid + 1, high)
        merge(arr, low, mid, high)
    }
}

let arr = [5, 7, 4, 6, 3, 1, 2, 9, 8, 22, 38]
let high = arr.length - 1
merge_sort(arr, 0, high)
console.log(arr)