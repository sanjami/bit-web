
function findLi() {
    var activeLi = document.getElementsByClassName("active")[0];
   // var activeLi = document.querySelector("ul:last-of-type ")
  activeLi.className = " ";
   
   var findLi = activeLi.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild;
   findLi.className = "active";
}

findLi();