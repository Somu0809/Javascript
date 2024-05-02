var a = "Madam";
var b = "Peace";

function palindrome(values){

    var newvalues = values.toLowerCase();
    var c = "";
    for(var i = 0; i<values.length; i++){
        c = newvalues.charAt(i) + c;
    }

    if(c == newvalues){
        console.log(values + " " + "(true)");
    }
    else{
        console.log(values + " " + "(false)");
    }
}

palindrome(a);
palindrome(b);