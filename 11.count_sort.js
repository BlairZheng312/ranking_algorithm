// assumption => all the elements within an arr are within certain amount, such as age
// count_sort will be the fastest, O(n)
// drawback: few elements in large range, will take large space => use bucket_sort

// assume elements are among (0,100)
function count_sort(arr, max = 100) {
    let arrCount = Array(max + 1).fill(0)
    // count the occurence of each element in arr
    arr.forEach(item => {
        arrCount[item]++
    })

    // clear arr
    arr.splice(0, arr.length)

    // fill the arr by reading the occurence of each element
    arrCount.forEach((item, index) => {
        for (i = 0; i < item; i++) {
            arr.push(index)
        }
    })
}

let arr = [9, 6, 4, 3, 5, 7, 6, 1, 22, 4, 38, 8]
count_sort(arr)
console.log(arr)