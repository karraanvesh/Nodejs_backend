function mapper(arr , fn)
{
    let n = arr.length;

    let result = [];

    for(let i = 0 ; i < n ; i++){
        let res = fn(arr[i] , i);
        result.push(res);
    }

    return result;
}

let arr = [1 , 2 , 3 , 4 , 5];
let x = mapper(arr , function cuber(val ,ind){

    console.log(val , ind);

    return val*val*val;
});

console.log(x , arr);