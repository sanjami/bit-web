$('#search-box').click(function (event) {

    var username = $('#search-box').val();

    var request = $.ajax({
        url: `https://api.github.com/search/users?q=${username}`,
        method: "GET",
    });

    request.done(function (msg) {
        console.log(msg);
        for (var i = 0; i < 12; i++) {
            var photo = msg.items[i].avatar_url;
            var name = msg.items[i].login;
            var img = $('<img>');
            img.attr('src', photo);
            img.addClass('style');
            var p = $('<p>');
            p.text(name);
            var container = $('<div>');
            container.addClass('float');
            container.append(p);
            container.append(img);
            $('#result').append(container);
        }
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

})