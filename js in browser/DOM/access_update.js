function alertLi(){
    var selectedLi = document.querySelector('li:nth-child(2)').textContent;
    alert(selectedLi);
}

alertLi();

function replaceText(a) {
    var selectedLi = document.querySelector('ul').lastElementChild;
    selectedLi.textContent = a;
}

replaceText('new text');