document.querySelector('#search').addEventListener('keydown', function (event) {

if(event.key = 'Enter'){

    var ourVal;
    ourVal = document.querySelector('#search').value;

    var request = $.ajax({
        url: "https://github-user-search/",
        method: "POST",
        data: { ourVal : ourVal},
        dataType: "json"
        });
        
        request.done(function( msg ) {
        console.log(msg)
        });
        
        request.fail(function( jqXHR, textStatus ) {
        alert( "Request failed: " + textStatus );
        });
        
}
    var ourVal;
    ourVal = document.querySelector('#search').value;



})