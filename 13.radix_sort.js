// count_sort requires large space
// bucket_sort requires less space, but involves insertion_sort/bubble_sort in each bucket
// => radix_sort: put elements in buckets by last digit, then second last digit, ..., 
// => no extra sorting required as each bucket is already in place by order
// time complexity: O(k*n) => k is the digit_length

function radix_sort(arr) {
    let maxNum = Math.max(...arr)
    let digit_length = 0
    let buckets = Array(10).fill([])

    // iterate k times (digit_length)
    while (10 ** digit_length <= maxNum) {
        arr.forEach(item => {
            digit = Math.floor(item / (10 ** digit_length)) % 10
            buckets[digit] = [...buckets[digit], item]
        })

        // clear arr
        arr.splice(0, arr.length)

        // fill the arr by the order of buckets
        buckets.forEach(item => {
            arr.push(...item)
        })

        // clear buckets
        buckets = Array(10).fill([])
        digit_length++
    }
}

let arr = [92, 63, 4, 3, 25, 7, 6, 113, 22, 4, 38, 8, 1000]

radix_sort(arr)
console.log(arr)