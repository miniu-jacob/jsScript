function findSmallestElement(arr){
    let result = arr[0];
    if (arr.length === 0 ){
        return 0;
    }

    for (let i = 1; i < arr.length; i++){
        if (result > arr[i]){
            result = arr[i];
        }
    }
    return result;
}

let smallestNumber = findSmallestElement([100, 200, 3, 10, 4, 2])
console.log(smallestNumber)