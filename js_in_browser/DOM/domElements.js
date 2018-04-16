// zadatak Selecting OneMultiple Elements

// Create function that selects list and applies a class that seets some background color to it

var ourList = document.getElementById("red");
ourList.className = "backgroundRed";


// create a second function that select all li elements on the page....



function allLI() {
    var changeLi = document.querySelectorAll("li");

     for(var i = 0; i < changeLi.length; i++){

         changeLi[i].className = "coloryellow";
     }   
}
allLI();

// create one more order lis and function that should select li elements from last ul element. Each li element should take 
// some bg color and tranfsorm to uppercase.


// function findLastLiTag() {
//     var lastUl = document.querySelectorAll("ul")
//     var oneLi = lastUl[lastUl.length-1].querySelectorAll("li");

//     for(i = 0; i < oneLi.length; i++) {
//         oneLi[i].className = "lastlitags";
//     }
// }

// findLastLiTag();

function findLastLiTag() {
    var lastUl = document.querySelectorAll("ul:last-of-type li")
    for(i = 0; i < lastUl.length; i++) {
        lastUl[i].className = "lastlitags";
    }
}

findLastLiTag();