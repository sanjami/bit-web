
document.querySelector('img').setAttribute('src', './images/mario.png');
var interval;
function int (){
    var x = 0;
        interval = setInterval(function (){
            x+=1;
            document.querySelector('body').style.backgroundPosition =  x + 'px 494px' ;
        }, 50);
        console.log(interval);
}

document.querySelector('body').addEventListener("keydown", run);

function run(event){
    if(event.keyCode == 39) {
        document.querySelector('img').setAttribute('src', './images/mario_running.gif');
       int();
    }
};

document.querySelector('body').addEventListener('keyup', stop);

function stop(event){
    document.querySelector('img').setAttribute('src', './images/mario.png');
    console.log("izasli sa vrednoscu:" + interval);
    clearInterval(interval);
    document.querySelector('body').style.backgroundPosition = '0px 494px' ;
}
