// remap jQuery to $
(function ($) {

    // trigger when page is ready
    $(document).ready(function () {

        // Add class when menu is on scroll
        $(window).scroll(function () {
            var y = $(this).scrollTop();
            if (y > 22) {
                $('.menu').addClass('scrolling');

                // Rotate rose on hover
                var rotation = (y / 5);
                $('.js-rose-icon').css('transform', 'rotate(' + rotation + 'deg)');

                // Hover rotate rose on hover
                $('.list__item__link--menu').on('mousemove', function () {
                    let rotation = ((y / 5) + 80);
                    $('.js-rose-icon').css('transform', 'rotate(' + rotation + 'deg)');
                }).on('mouseout', function () {
                    $('.js-rose-icon').css('transform', 'rotate(' + rotation + 'deg)');
                });
            } else {
                $('.menu').removeClass('scrolling');
            }
        });

        // Add class if is not home
        if (window.location.pathname.indexOf("/store") > -1) {
            $('.menu').addClass('store');
        } else if (window.location.pathname.indexOf("/location") > -1) {
            $('.menu').addClass('location');
        }
    });
}(window.jQuery || window.$));