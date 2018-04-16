
var go = false;
var interval;

function int (){
    var x = 0;
    interval = setInterval(function (){
        x += 1;
        document.querySelector('body').style.backgroundPosition =  x + 'px 494px' ;
    }, 30);
}

document.querySelector('body').addEventListener("keydown", run);

function run(event){
    if(event.keyCode == 39 && go == false) {
        document.querySelector('#marioStop').setAttribute('class', 'noVisible');
        document.querySelector('#marioRun').removeAttribute('class');
       int();
       go = true;
    }
};

document.querySelector('body').addEventListener('keyup', stop);

function stop(event){
    if(go == true) {
        document.querySelector('#marioRun').setAttribute('class', 'noVisible');
        document.querySelector('#marioStop').removeAttribute('class');
        clearInterval(interval);
        go = false;
    }
}
