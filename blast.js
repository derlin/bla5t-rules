// data.forEach(function(elt){
//     var $div = $('<div class="perso"></div>');
//     $div.append('<img class="number" src="' +  elt.number_img + '">');
//     $div.append('<img class="avatar" src="' +  elt.avatar_img + '">');
//     $div.append('<span class="name">' +  elt.name + '</span>');
//     $div.append('<span class="descr">' +  elt.descr + '</span>');
//     $('#main').append($div);
// });


data.forEach(function (elt) {
    var $tab = $('<tr></tr>');
    $tab.append('<td class="avatar"><img src="' + get_avatar_image_link(elt.avatar_img) + '"></td>');
    $tab.append('<td class="name">' + elt.name + '</td>');
    $tab.append('<td class="number"><img src="' + get_number_image_link(elt.number_img) + '"></td>');
    $tab.append('<td class="descr">' + (elt.action || "only points") + '</td>');
    $('#tab').append($tab);
});