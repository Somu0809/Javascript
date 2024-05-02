var arr = [1,2,3,3,4,5,5];
var newarr = [];

for(var i = 0; i<arr.length-1; i++){
    if(arr[i] != arr[i+1]){
        newarr.push(arr[i]);
    }
}

console.log(newarr);