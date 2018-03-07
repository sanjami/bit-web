var ourIp;


ourIp = document.querySelector('#ip').value;

// var xmlhttp = new XMLHttpRequest();
// xmlhttp.open("GET", "http://freegeoip.net/xml/ourIp", false);

// xmlhttp.onreadystatechange = function() {
//     var xmlDoc = xmlhttp.responseXML;
//     console.log(xmlDoc);
//     var from = xmlDoc.getElementsByTagName("CountryName")[0].childNodes[0].nodeValue;
//     console.log(from);
// }

// xmlhttp.send()


var request = new XMLHttpRequest();

request.open('GET', "http://freegeoip.net/json/4.2.2.2", true);

request.send();

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('Success!')
        var data = JSON.parse(request.responseText);
        
    } else {
        console.log('error')
    }
};