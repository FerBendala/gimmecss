$(function () {

    // variables
    var max = 200;            // => Max value
    var min = 0;              // => Min value
    var bAll = 0;             // => Border radius
    var bTLeft = 0;           // => Border top left radius
    var bTRight = 0;          // => Border top right radius
    var bBRight = 0;          // => Border bottom right radius
    var bBLeft = 0;           // => Border bottom left radius
    var bWidth = 0;           // => Border width
    var bStyle = "";          // => Border style
    var bColor = "#ab1766";   // => Border color
    var bgColor = "";         // => Background color


    /////////////////////////
    // Border all radius
    $('#border-all').on('input', function () {
        bAll = $(this).val();
        $('#border-radius-results').css('border-radius', `${bAll}px`);
        $('input[aria-label="border-all"]').val($(this).val());

        // Add values to other inputs
        let btl = $('#border-radius-results').css("borderTopLeftRadius");
        let btr = $('#border-radius-results').css("borderTopRightRadius");
        let bbr = $('#border-radius-results').css("borderBottomRightRadius");
        let bbl = $('#border-radius-results').css("borderBottomLeftRadius");

        $('#border-top-left').val(parseInt(btl));
        $('input[aria-label="border-top-left"]').val(parseInt(btl));

        $('#border-top-right').val(parseInt(btr));
        $('input[aria-label="border-top-right"]').val(parseInt(btr));

        $('#border-bottom-right').val(parseInt(bbr));
        $('input[aria-label="border-bottom-right"]').val(parseInt(bbr));

        $('#border-bottom-left').val(parseInt(bbl));
        $('input[aria-label="border-bottom-left"]').val(parseInt(bbl));
    });

    $('input[aria-label="border-all"]').on('input', function () {
        bAll = $(this).val();
        // Max value
        if ($(this).val() > max) {
            $(this).val(max);
            bAll = max;
        }
        // Min value
        if (min > $(this).val()) {
            $(this).val(min);
            bAll = min;
        }


        $('#border-radius-results').css('border-radius', `${bAll}px`);
        $('#border-all').val($(this).val());


        // Add values to other inputs
        let btl = $('#border-radius-results').css("borderTopLeftRadius");
        let btr = $('#border-radius-results').css("borderTopRightRadius");
        let bbr = $('#border-radius-results').css("borderBottomRightRadius");
        let bbl = $('#border-radius-results').css("borderBottomLeftRadius");


        $('#border-top-left').val(parseInt(btl));
        $('input[aria-label="border-top-left"]').val(parseInt(btl));

        $('#border-top-right').val(parseInt(btr));
        $('input[aria-label="border-top-right"]').val(parseInt(btr));

        $('#border-bottom-right').val(parseInt(bbr));
        $('input[aria-label="border-bottom-right"]').val(parseInt(bbr));

        $('#border-bottom-left').val(parseInt(bbl));
        $('input[aria-label="border-bottom-left"]').val(parseInt(bbl));
    });


    /////////////////////////
    // Border top left radius
    $('#border-top-left').on('input', function () {
        bTLeft = $(this).val();
        $('#border-radius-results').css('border-top-left-radius', `${bTLeft}px`);

        $('input[aria-label="border-top-left"]').val($(this).val());
    });

    $('input[aria-label="border-top-left"]').on('input', function () {
        bTLeft = $(this).val();
        // Max value
        if ($(this).val() > max) {
            $(this).val(max);
            bTLeft = max;
        }
        // Min value
        if (min > $(this).val()) {
            $(this).val(min);
            bTLeft = min;
        }

        $('#border-radius-results').css('border-top-left-radius', `${bTLeft}px`);
        $('#border-top-left').val($(this).val());
    });


    /////////////////////////
    // Border top right radius
    $('#border-top-right').on('input', function () {
        bTRight = $(this).val();
        $('#border-radius-results').css('border-top-right-radius', `${bTRight}px`);

        $('input[aria-label="border-top-right"]').val($(this).val());
    });

    $('input[aria-label="border-top-right"]').on('input', function () {
        bTRight = $(this).val();
        // Max value
        if ($(this).val() > max) {
            $(this).val(max);
            bTRight = max;
        }
        // Min value
        if (min > $(this).val()) {
            $(this).val(min);
            bTRight = min;
        }

        $('#border-radius-results').css('border-top-right-radius', `${bTRight}px`);
        $('#border-top-right').val($(this).val());
    });


    /////////////////////////
    // Border bottom right radius
    $('#border-bottom-right').on('input', function () {
        bBRight = $(this).val();
        $('#border-radius-results').css('border-bottom-right-radius', `${bBRight}px`);

        $('input[aria-label="border-bottom-right"]').val($(this).val());
    });

    $('input[aria-label="border-bottom-right"]').on('input', function () {
        bBRight = $(this).val();
        // Max value
        if ($(this).val() > max) {
            $(this).val(max);
            bTRight = max;
        }
        // Min value
        if (min > $(this).val()) {
            $(this).val(min);
            bTRight = min;
        }

        $('#border-radius-results').css('border-bottom-right-radius', `${bBRight}px`);
        $('#border-bottom-right').val($(this).val());
    });


    /////////////////////////
    // Border bottom left radius
    $('#border-bottom-left').on('input', function () {
        bBLeft = $(this).val();
        $('#border-radius-results').css('border-bottom-left-radius', `${bBLeft}px`);

        $('input[aria-label="border-bottom-left"]').val($(this).val());
    });

    $('input[aria-label="border-bottom-left"]').on('input', function () {
        bBLeft = $(this).val();
        // Max value
        if ($(this).val() > max) {
            $(this).val(max);
            bBLeft = max;
        }
        // Min value
        if (min > $(this).val()) {
            $(this).val(min);
            bBLeft = min;
        }

        $('#border-radius-results').css('border-bottom-left-radius', `${bBLeft}px`);
        $('#border-bottom-left').val($(this).val());
    });


    /////////////////////////
    // Border width
    $('#border-width').on('input', function () {
        bWidth = $(this).val();
        $('#border-radius-results').css('borderWidth', `${bWidth}px`);

        $('input[aria-label="border-width"]').val($(this).val());
    });

    $('input[aria-label="border-width"]').on('input', function () {
        bWidth = $(this).val();
        // Max value
        if ($(this).val() > max) {
            $(this).val(max);
            bWidth = max;
        }
        // Min value
        if (min > $(this).val()) {
            $(this).val(min);
            bWidth = min;
        }

        $('#border-radius-results').css('borderWidth', `${bWidth}px`);
        $('#border-width').val($(this).val());
    });


    /////////////////////////
    // Border style
    $('#border-style').on('input', function () {
        bStyle = $("#border-style option:selected").text();
        $('#border-radius-results').css('borderStyle', bStyle);
    });


    /////////////////////////
    // Border color
    $('#border-radius-results').css('borderColor', bColor);
    $('#border-color').on('input propertychange', function () {
        bColor = $(this).val();
        $('#border-radius-results').css('borderColor', bColor);
    });


    /////////////////////////
    // Background color
    $('#background-color').on('input propertychange', function () {
        bgColor = $(this).val();
        $('#border-radius-results').css('backgroundColor', bgColor);
    });


    /////////////////////////
    // START CODE RESULTS
    $('#code-result-container').html(`
            <pre><code class="css"><div style="display:none">.class{</div>border-radius: ${$('#border-radius-results').css("borderRadius")};
border: ${$('#border-radius-results').css("border")};<div style="display:none">}</div></pre></code>
                <div class="d-flex justify-content-end"><button class="tools-options__code__copy" id="code-result-copy" onclick="copyToClipboard('#code-result')">Copy to clipboard</button><span class="tools-options__code__badge">CSS</span></div>`);

    /////////////////////////
    // CODE RESULTS
    // watch changes to add text-shadow values
    $('input, select').on('input change', function () {
        $('#code-result-container').html(`
            <pre><code class="css"><div style="display:none">.class{</div>border-radius: ${$('#border-radius-results').css("borderRadius")};
border: ${$('#border-radius-results').css("border")};<div style="display:none">}</div></pre></code>
                <div class="d-flex justify-content-end"><button class="tools-options__code__copy" id="code-result-copy" onclick="copyToClipboard('#code-result')">Copy to clipboard</button><span class="tools-options__code__badge">CSS</span></div>`);
        $('pre code').each(function (i, e) { hljs.highlightBlock(e) });
    });


    /////////////////////////
    // Reset input value in focus when val is 0
    $('input[aria-label*="border"]').on('click', function () {
        if ($(this).val() == 0) {
            $(this).val('');
        }
    });


    /////////////////////////
    // Disable all border radius input if any other input radius is active
    $('#border-top-left, input[aria-label="border-top-left"], #border-top-right, input[aria-label="border-top-right"], #border-bottom-right, input[aria-label="border-bottom-right"], #border-bottom-left, input[aria-label="border-bottom-left"]').on('input change', function () {
        $('#border-all').prop("disabled", false).val(0);
        $('input[aria-label="border-all"]').prop("disabled", false).val(null);
    });


    /////////////////////////
    // Reset button
    $('.reset').on('click', function () {
        location.reload();
    });

    // Start hljs
    $('pre code').each(function (i, e) { hljs.highlightBlock(e) });
});