var print = function (message) {
    console.log(message);
}

print("Good evening");

/* .navigator */

var browserPlatform = function() {
    var message = "Platform is " + navigator.platform + "\n" + " version is " + navigator.appVersion + "\n" + " company name is " + navigator.vendor;
    console.log(message);
}

browserPlatform();


var isOnline = function() {
    if(navigator.onLine == true) {
        console.log("online");
    } else {
        console.log("offline");
    }
}

isOnline();


/* .screen */

var browserScreen = function() {
    var current = "Current height is " + screen.availHeight + " and current width is " + screen.availWidth + "\n"; 
    var max = "Max height is " + screen.height + " max width is " + screen.width;
    console.log(current + max);
}

browserScreen();


/* .location */

var browserLocation = function() {
    console.log("Full URL is " + location.href + "\n" + " and domain name is " + location.hostname +  "\n" + " use protocol is " + location.protocol +  "\n" +  " parts of URL is " + location.pathname)
}

browserLocation();

// var reloadPage = function() {
//     location.reload();
// }

// reloadPage();

// var redirectTo =  function() {
//     location.href = "https://github.com"
// }

// redirectTo();

// var redirectTo = function() {
//     location.href = "file:///C:/Users/student/Desktop/Marija/bit-web/w5d1/js_browser.html";
// }

// redirectTo();


/* storage */

var storage = localStorage;

var stor = function(key, value) {
    storage.setItem(key, value)
};

stor("marija", "programer");


var getData = function(key) {
    if(storage.getItem(key) == undefined) {
        console.log("There is not data");
    } else {
        return storage.getItem(key);
    }
};

console.log(getData("marija"));

// var deleteData = function(key) {
//     storage.removeItem(key);
//     console.log(storage);
// };

// deleteData("marija");

// var storage = sessionStorage;

// var stor = function(key, value) {
//     storage.setItem(key, value)
// };

// stor("marija", "programer");


var getData = function(key) {
    if(storage.getItem(key) == undefined) {
        console.log("There is not data");
    } else {
        return storage.getItem(key);
    }
};

console.log(getData("marija"));

// var deleteData = function(key) {
//     storage.removeItem(key);
//     console.log(storage);
// };

// deleteData("marija")