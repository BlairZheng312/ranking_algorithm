function linear_search(arr, k){
    arr.forEach((element, index) => {
        if(element === k){
            console.log(index)
        }
    });
}

let arr = [3,7,2,4,1,66]
linear_search(arr, 2)