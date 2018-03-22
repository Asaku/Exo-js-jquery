var calculatrice = $('#cal_field');

$( ".number" ).click(function() {
    var operation = ["/", "*", "-", "+"];
    var content = $(this).text();
    if ($.inArray(calculatrice.val().slice(-1), operation) != -1 && $.inArray(content, operation) != -1)
        return;

    calculatrice.val(calculatrice.val()+content);
});

$( "#result" ).click(function() {
    calculatrice.val(eval(calculatrice.val()));
});


function resetCal() {
    calculatrice.val("")
}
