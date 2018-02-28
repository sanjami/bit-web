document.querySelector('#send').onclick = function sendMessage () {
    console.log(event);
    var input = document.querySelector('input:first-of-type');
    var message = input.value;
    var messageText = document.createTextNode(message);
    var paragraph = document.createElement('p');
    paragraph.appendChild(messageText);
    document.querySelector('div').appendChild(paragraph);
    message = '';
};




document.querySelector('#send').onkeypress = function (event) {
    if(event.keyCode == 13) {
        sendMessage();
    }
};