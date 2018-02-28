function check() {
    var allInput = document.querySelectorAll('input');

    for(var i = 0; i<allInput.length; i++){
        if(allInput[i].hasAttribute('required')){
            if(allInput[i].value == ''){
                allInput[i].setAttribute('class', 'borderRed');
            }
        }
    }
}