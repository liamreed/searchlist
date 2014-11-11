$(document).ready(function() {

    var listItem = $('section.search li');

    //Search
    $.expr[":"].contains = $.expr.createPseudo(function(arg) {
        return function( elem ) {
            return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });

    $('nav input').on('input',function() {
        listItem.hide()
        listItem
            .filter(':contains(' + $(this).val() + ')')
            .show();
    });

});
