var arr = [1, 2, 3, 4];
var arr1 = [];

function even(a, b) {
    for (var i = 0; i < arr.length; i++) {

        var c = a[i]*2
        b.push(c);

    }
    console.log(b)
}

even(arr, arr1);