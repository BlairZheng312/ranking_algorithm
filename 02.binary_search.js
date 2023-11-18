function binary_search(arr, k) {
    let length = arr.length
    let right_index = length - 1
    let left_index = 0

    while (left_index <= right_index) {
        let mid_index = Math.floor((left_index + right_index) / 2)
        if (arr[mid_index] === k){
            return mid_index
        }else if (arr[mid_index] > k) {
            right_index = mid_index - 1
        } else {
            left_index = mid_index + 1
        }
    }
    return 'cannot find'
}

let arr = [3, 7, 9, 14, 19, 66, 88]
let result = binary_search(arr, 55)
console.log(result)