// trigger when page is ready
$(document).ready(function () {
    $('.js-filter').on('input', function () {

        // Declare variables
        var input, filter, boxes, box, a, i, txtValue;
        input = $(this);
        filter = input.val().toUpperCase();
        boxes = $('.js-boxes-search');
        box = $('.js-box-search');

        // Display none unmatched items
        for (i = 0; i < box.length; i++) {
            a = box[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                box[i].style.display = "";
            } else {
                box[i].style.display = "none";
            }
        }

        // Show no results text
        if ($(".js-box-search:visible").length === 0) {
            $('.js-no-results').remove();
            boxes.append('<h2 class="js-no-results box__title">No results available</h2>')
        } else {
            $('.js-no-results').remove();
        }
    });
});