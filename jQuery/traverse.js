$(function(){

    var selectImage =  $('.selected'); 
    selectImage.removeClass('selected');

    selectImage.parent('div').next('div').children('img:first').addClass('selected');


})