$(document).ready(function() {

    var listItem = $('section.search li');

    //filter results
    $.expr[":"].contains = $.expr.createPseudo(function(arg) {
        return function( elem ) {
            return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });
    //onInput
    $('nav input').on('input',function() {
        listItem.hide()
        listItem
            .filter(':contains(' + $(this).val() + ')')
            .show();
    });

});
