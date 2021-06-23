// trigger when page is ready
$(document).ready(function () {

    // Show label on value
    $('select, input').on('input click', function () {
        $(this).siblings('label').addClass('active');
    });
    $('select, input').on('focusout', function () {
        if (!$(this).val()) {
            $(this).siblings('label').removeClass('active');
        }
    });
});