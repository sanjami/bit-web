
function sel() {
    var picture = document.getElementsByClassName('selected')[0];
    picture.className = '';
    var picture1 = picture.parentElement.nextElementSibling.firstElementChild.nextElementSibling;
    picture1.className = 'selected';
}

sel();



