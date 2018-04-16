
function sendMessage() {
    console.log(event);
    var input = document.querySelector('input:first-of-type');
    var message = input.value;
    var messageText = document.createTextNode(message);
    var paragraph = document.createElement('p');
    paragraph.appendChild(messageText);
    document.querySelector('div').appendChild(paragraph);
    input.value = '';
};

document.querySelector('#send').onclick = function (event) {
    sendMessage();
}
document.querySelector('body').onkeydown = function (event) {
    console.log(event);
    if (event.code == "Enter") {
        sendMessage();
    }
};