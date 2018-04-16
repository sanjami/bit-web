// function dropdownLi(arr, element){
//     var createSelect;
//     var createOption;
//     var createTextNode;
//      createSelect = document.createElement('select');
//     for(var i=0; i<arr.length; i++){
//          createOption = document.createElement('option');
//          textOption = document.createTextNode(arr[i]);
//         createOption.appendChild(textOption);
//         createSelect.appendChild(createOption);
       
//     }
//     element.appendChild(createSelect);
// }

// var firstDiv = document.querySelector('div:first-of-type');

// dropdownLi(['first',  'second', 'third'], firstDiv);

// var lastDiv = document.querySelector('div:last-of-type');

// dropdownLi(['blue', 'green', 'yellow'], lastDiv);


function dropdownIn(arr, element) {
    var createSelect = "<select>"
    for(var i=0; i<arr.length; i++){
        var option = "<option>" + arr[i]+'</option>'
      createSelect += option;
   }
 var select = createSelect + '</select>';
 element.innerHTML = select;
}

var lastDiv = document.querySelector('div:last-of-type');
dropdownIn(['blue', 'green', 'yellow'], lastDiv);
