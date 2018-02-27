// history property

// function historypage() {

//      history.go(-2);
// }

// historypage();

// alert("helo world");

// prompt('Do you love Js?');

// function sayHi() {
//     alert("HI!");
// }

// setTimeout(sayHi, 3000);

// var inter = setInterval(sayHi, 2000);
// clearInterval(inter);

function usermessage() {
    alert("HELLO");
}

usermessage();

var answer = function() {
    return prompt("How are you?");
}

var a = answer();

var confirmAnswer = function(a) {
    return confirm("Are you sure that your answer is " + a);
} 

var b  = confirmAnswer(a);

function submitanswer(result) {
    if(result == true) {
        alert("Success");
    }
}

submitanswer(b);