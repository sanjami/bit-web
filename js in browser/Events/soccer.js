document.querySelector('#field').onclick = function play(event) {
    console.log(event);
    var img = document.querySelector('img');
    img.style.left = event.clientX -100 + "px";
    img.style.top = event.clientY -100 + "px";
}