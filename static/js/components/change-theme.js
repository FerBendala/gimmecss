$(function () {
    // Change background of results on click
    $('.js-results-theme').on('click', function (event) {
        $('.tools-result').toggleClass('light');
        $(this).toggleClass('light');
        $(this).text(function(i, text){
            return text === "Light theme" ? "Dark theme" : "Light theme";
        })
    })
});