// Using Jquery to manage a basic cart

//Adding the price of an item and a quantity.
$(document).ready(function() {
$('.add').click(function() {
   $('#total').text(parseInt($('#total').text()) + parseInt($(this).data('amount')));
   $('#totalitems').text(parseInt($('#totalitems').text()) + parseInt($(this).data('quantity')));
});
})
//Subtracting the price of an item and a quantity.
$(document).ready(function() {
$('.subtract').click(function() {
   $('#total').text(parseInt($('#total').text()) + parseInt($(this).data('amount')));
   $('#totalitems').text(parseInt($('#totalitems').text()) + parseInt($(this).data('quantity')));
});
})
