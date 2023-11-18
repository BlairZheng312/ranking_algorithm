// iterate arr, find the smallest element, put it in the sorted area
// repeat the process for unsorted area
// O(n**2)

function selection_sort(arr){
    let length = arr.length
    // iterate n times
    for(i=0;i<length-1;i++){
        let min_index = i
        // [j,length-1] is the unsorted area
        for(j=i+1;j<length;j++){
            if(arr[min_index]>arr[j]){
                min_index=j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min_index]
        arr[min_index] = temp
        console.log(arr)
    }
}

let arr = [9,8,7,1,2,3,10,28,6]
selection_sort(arr)
// console.log(arr)