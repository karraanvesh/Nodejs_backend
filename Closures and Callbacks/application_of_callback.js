let arr = [1 , 2 , 3 , 4 , 5];

/**
 * map is the inbuilt function which expects a callback function
 * map function returns an array which is the collection of values which we recieve in every time 
 * the callback function executes
 * Such that it will not alter the orignal array
 */
let x = arr.map(function squarer(val , ind)
{
    /**
     * ind -> is the index in the array
     * val -> is the element present at that ind (arr[ind])
     */

    console.log(val , ind);

    return val * val;

});

console.log(x , arr);