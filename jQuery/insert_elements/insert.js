var arr = ['img/Fashion_Art.jpg', 'img/fashion-beauty.jpg', 'img/fashion-women.jpg', 'img/fashion.jpg', 'img/fashion1.jpg', 'img/vogue.jpeg'];

for(var i = 0; i<arr.length; i++){

   var image = $('<img>').attr({
       'src': arr[i],   
    });
    image.css('float', 'left');
   $('body').append(image);
}


var title = $('<h1>Amazing Gallery</h1>');
$('body').prepend(title);

$('img').each(function(index, element){
    var size = Math.floor(200 * Math.random() +300);
    $(element).css('width', size);
})

$('img').each(function(index, element){
    if(parseInt($(this).css('width')) > 400){
        $(element).css('border', '3px solid #e02967');
    }
});