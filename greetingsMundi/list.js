$(document).ready(function() {
    var list = document.createElement("ul");
    var item = newElem("li", "Fu'd");
    
    $(item).appendTo(list);
    $(list).append(newElem("li","Uup"));
    $(list).append(newElem("li","Beeyond"));
    $(list).append(newElem("li","Aany"));
    $(list).append(newElem("li","Reepair"));

    $('#app').append(list);
});

// helper methods
function newElem(type, stringVal) {
    var el = document.createElement(type);
    $(el).text(stringVal);
    return el;
};