// assume few elements in a large range, say 12 elements in (0,100)
// use count_sort will take up 100 length space
// can use bucket_sort to put elements in smaller bucket, which will take up less space
// complexity depends on the distribution of elements => suitable for uniform distribution

function bucket_sort(arr, n = 10, max = 100) {
    let buckets = Array(n).fill([])
    arr.forEach(item => {
        let gap = max / n
        let i = Math.floor(item / gap)
        // put elements in buckets
        buckets[i] = [...buckets[i], item]

        // sort element when put it in the bucket, so that inside each bucket elements are always sorted
        for (j = buckets[i].length - 1; j >= 1; j--) {
            if (buckets[i][j] < buckets[i][j - 1]) {
                let temp = buckets[i][j]
                buckets[i][j] = buckets[i][j - 1]
                buckets[i][j - 1] = temp
            } else {
                break
            }
        }
    })

    // clear arr
    arr.splice(0, arr.length)

    // fill the arr by the order of buckets
    buckets.forEach(item=>{
        arr.push(...item)
    })
}

let arr = [92, 63, 4, 3, 25, 7, 6, 11, 22, 4, 38, 8]
bucket_sort(arr)
console.log(arr)