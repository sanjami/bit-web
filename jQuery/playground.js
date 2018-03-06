$(function () {
    var counter = 0;

    $('body').on('click', function (event) {
        console.log(counter)
        counter++;
        if (counter < 10) {
            $('img').css({
                'top': parseInt(event.pageY) - 100,
                'left': parseInt(event.pageX) - 100
                
            })
        }

    })

    $('button').on('click', function () {

        $('body').off('click');
    })


})