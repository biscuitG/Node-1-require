function LS(arr,val){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===val) return i;
    }

    return NaN;
}

console.log("hello");
function BS(arr,x){
    return true;
}

function func(a,b){
    return a+b;
}

console.log(func(3,4));

console.log("hi");

console.log(module);
module.exports={
    LinearSearch : LS,
    BinarySearch : BS
}
