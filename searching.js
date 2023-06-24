function LS(arr,val){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===val) return i;
    }

    return NaN;
}

function BS(arr,x){
    return true;
}

console.log(module);
module.exports={
    LinearSearch : LS,
    BinarySearch : BS
}
