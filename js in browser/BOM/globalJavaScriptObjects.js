// Math
// Random
// Create a function that builds an array of 10 random numbers between 1 and 50.
// The function prints that array out in the console and then returns it.


function random () {
    var arr = [];
    for(var i = 0; i < 10; i++){
        arr.push(Math.random()*49 + 1);
    }
    console.log(arr);
    return arr;
}

var arr = random();

// Round
// Create a function that uses the passed array of numbers and rounds all its elements to two decimals.
// Print out the modified array in the console.
// Use the first function for generating the input array.

function round (arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i].toFixed(2));
    }
    console.log(newArr);
}

round(arr);

// Floor
// Create a function that uses the passed array of numbers and rounds all its elements to the nearest integer.
// Print out the modified array in the console.
// Use the first function for generating the input array.
   
function floor (arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(Math.floor(arr[i]));
    }
    console.log(newArr);
}

floor(arr);

// Max
// Create a function that finds and prints out the biggest element in the passed array of numbers.

function max (arr) {
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}

max(arr); 

// Date
    function date () {

        var date = new Date();
        console.log(date);
        var time = date.toTimeString();
        console.log(time);
        var currentDate = date.toDateString();
        console.log(currentDate);
    }

    date();
// Print out the whole date object in the console.
// Print out the current time in the console.
// Print out the current date in the console.
