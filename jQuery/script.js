// $(function(){
//     console.log('Hello world!');
// })

$('li:first').addClass('b');
$('li').addClass('up');
$('.active').addClass('inactive');

var x = parseInt($('li').length/2);
$('li:eq(' + x + ')').addClass('bg');
