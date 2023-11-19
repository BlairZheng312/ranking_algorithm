// find top k elements in arr of n
// quick_sort: O(n*logn)
// bubble-sort, selection-sort, insertion-sort: O(n*k)
// min-heap-sort: O(n*logk)

function sift(arr, low, high) {
    let i = low
    let j = 2 * i + 1
    let temp = arr[low]

    while (j <= high) {
        if (j + 1 <= high && arr[j + 1] < arr[j]) {
            j = j + 1
        }
        if (temp > arr[j]) {
            arr[i] = arr[j]
            i = j
            j = 2 * i + 1
        } else {
            break
        }
    }
    arr[i] = temp
}

function heap_topk(arr, k) {
    // get first k elements of arr
    let heap = arr.slice(0, k)

    // build min-heap for the first k elements
    for (i = Math.floor((k - 2) / 2); i >= 0; i--) {
        sift(heap, i, k - 1)
    }

    // iterate the [k, n-1] elements through heap, so that only top k elements remain in the min-heap
    let length = arr.length
    for (i = k; i < length; i++) {
        if (arr[i] > heap[0]) {
            heap[0] = arr[i]
            sift(heap, 0, k - 1)
        }
    }

    // heap => arr
    for (i = k - 1; i >= 0; i--) {
        let temp = heap[0]
        heap[0] = heap[i]
        heap[i] = temp
        sift(heap, 0, i - 1)
    }
    console.log(heap)
}

let arr = [100, 5, 7, 4, 6, 200, 3, 1, 2, 9, 8, 22, 38]
heap_topk(arr, 5)