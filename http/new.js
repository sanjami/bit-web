
document.querySelector('#btn').addEventListener('click', function () {

    var ourIp;
    ourIp = document.querySelector('#ip').value;
    
    // var xmlhttp = new XMLHttpRequest();
    // xmlhttp.open("GET", `http://freegeoip.net/xml/${ourIp}`, false);

    // xmlhttp.onreadystatechange = function () {
    //     var xmlDoc = xmlhttp.responseXML;
    //     console.log(xmlDoc);
    //     var from = xmlDoc.getElementsByTagName("CountryName")[0].childNodes[0].nodeValue;
    //     console.log(from);
    //     document.querySelector('#result').textContent = from;
    // }

    // xmlhttp.send()



    var request = new XMLHttpRequest();

    request.open('GET', `http://freegeoip.net/json/${ourIp}`, true);

    request.send();

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            console.log('Success!')
            var data = JSON.parse(request.responseText);
            var ip = data.ip;
            var country = data.country_name;
            console.log(data);
            document.querySelector('#result').textContent = `IP: ${ip} is from ${country}`;
        } else {
            console.log('error')
        }
    };

})


