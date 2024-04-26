var arr = [1,2,3,4];
var arr1 = [];

function even(a,b){
    for(var i =0; i<arr.length; i++){
        if(a[i]%2 == 0){
            b.push(a[i]);
        }
    }
    console.log(b)
}

even(arr,arr1);