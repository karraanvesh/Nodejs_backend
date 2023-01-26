function linearSearch(arr , x)
{
    console.log("in linear search");
    let n = arr.length;
    for(let i = 0 ; i < n ; i++)
    {
        if(arr[i] === x)
        return i;
    }

    return NaN;
}

function binarySearch(arr , x)
{
    // we are expecting the array to be sorted

    console.log("in binary search");

    let n = arr.length;

    let low = 0 , high = n - 1;

    while(low <= high)
    {
        let mid = Math.floor(low + (high - low) / 2);

        if(arr[mid] == x) return mid;

        if(x < arr[mid])
        high = mid - 1

        else
        low = mid + 1;
    }

    return NaN;
}

// If we want any of the functions or variables to be exposed to the outside world and the other 
// files has to use the functionalities of the current file we need to explicitly mention in the current file which contains functionalities
// using exports 

module.exports = {
    linear : linearSearch ,
    binary : binarySearch
}

console.log("ending");