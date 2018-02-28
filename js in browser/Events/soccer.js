document.querySelector('#field').onclick = function play(event) {
    console.log(event);
    var img = document.querySelector('img');
    img.style.left = event.clientX + "px";
    img.style.top = event.clientY + "px";
}