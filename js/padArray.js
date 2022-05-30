// REMEMBER TO PSEUDOCODE
//const pad = (array, minSize, value=null) => {}

function padArray(arr, num, pad = 'None'){

    let diff = num - arr.length

    while(diff>0){
        arr.push(pad)
        diff--
    }

    return arr

}

console.log(padArray([1,2,3], 2, 'apple'))
console.log(padArray([1,2,3], 2))
