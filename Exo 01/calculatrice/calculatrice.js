var calculatrice = $('#cal_field');
$(function() {
    $( ".number" ).click(function() {
        var operation = ["/", "*", "-", "+"];
        var content = $(this).text();

        if ($.inArray(calculatrice.val().slice(-1), operation) != -1 && $.inArray(content, operation) != -1)
            return;

        content =  calculatrice.val()+content;
        calculatrice.val(content);
    });

    $( "#result" ).click(function() {
        var content = calculatrice.val();
        var result = eval(content);
        calculatrice.val(result);

    });

});

function resetCal() {
    calculatrice.val("")
}

