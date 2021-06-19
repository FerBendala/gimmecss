$(function () {

    // variables
    var max = 200;              // => Max value
    var min = -200;             // => Min value
    var bsHorizontal = 0;       // => Box shadow horizontal
    var bsVertical = 0;         // => Box shadow vertical
    var bsBlur = 0;             // => Box shadow blur
    var bsSpread = 0;           // => Box shadow spread
    var bsColor = '0, 0, 0';    // => Box shadow color
    var bsOpacity = 1           // => Box shadow color opacity
    var bsPosition = ''         // => Box shadow position (inset/outset)
    var bgColor = '';           // => Background color


    /////////////////////////
    // Box shadow horizontal
    $('#box-shadow-horizontal').on('input', function () {
        bsHorizontal = $(this).val();
        $('#box-shadow-results').css('box-shadow', `${bsPosition} ${bsHorizontal}px ${bsVertical}px ${bsBlur}px ${bsSpread}px rgba(${bsColor}, ${bsOpacity})`);
        $('input[aria-label="box-shadow-horizontal"]').val($(this).val());
    });

    $('input[aria-label="box-shadow-horizontal"]').on('input', function () {
        bsHorizontal = $(this).val();
        // Max value
        if ($(this).val() > max) {
            $(this).val(max);
            bsHorizontal = max;
        }
        // Min value
        if (min > $(this).val()) {
            $(this).val(min);
            bsHorizontal = min;
        }

        $('#box-shadow-results').css('box-shadow', `${bsPosition} ${bsHorizontal}px ${bsVertical}px ${bsBlur}px ${bsSpread}px rgba(${bsColor}, ${bsOpacity})`);
        $('#box-shadow-horizontal').val($(this).val());
    });


    /////////////////////////
    // Box shadow vertical
    $('#box-shadow-vertical').on('input', function () {
        bsVertical = $(this).val();
        $('#box-shadow-results').css('box-shadow', `${bsPosition} ${bsHorizontal}px ${bsVertical}px ${bsBlur}px ${bsSpread}px rgba(${bsColor}, ${bsOpacity})`);
        $('input[aria-label="box-shadow-vertical"]').val($(this).val());
    });

    $('input[aria-label="box-shadow-vertical"]').on('input', function () {
        bsVertical = $(this).val();
        // Max value
        if ($(this).val() > max) {
            $(this).val(max);
            bsVertical = max;
        }
        // Min value
        if (min > $(this).val()) {
            $(this).val(min);
            bsVertical = min;
        }

        $('#box-shadow-results').css('box-shadow', `${bsPosition} ${bsHorizontal}px ${bsVertical}px ${bsBlur}px ${bsSpread}px rgba(${bsColor}, ${bsOpacity})`);
        $('#box-shadow-vertical').val($(this).val());
    });


    /////////////////////////
    // Box shadow blur
    $('#box-shadow-blur').on('input', function () {
        bsBlur = $(this).val();
        $('#box-shadow-results').css('box-shadow', `${bsPosition} ${bsHorizontal}px ${bsVertical}px ${bsBlur}px ${bsSpread}px rgba(${bsColor}, ${bsOpacity})`);

        $('input[aria-label="box-shadow-blur"]').val($(this).val());
    });

    $('input[aria-label="box-shadow-blur"]').on('input', function () {
        bsBlur = $(this).val();
        // Max value
        if ($(this).val() > max) {
            $(this).val(max);
            bsBlur = max;
        }
        // Min value
        let min = 0
        if (min > $(this).val()) {
            $(this).val(min);
            bsBlur = min;
        }

        $('#box-shadow-results').css('box-shadow', `${bsPosition} ${bsHorizontal}px ${bsVertical}px ${bsBlur}px ${bsSpread}px rgba(${bsColor}, ${bsOpacity})`);
        $('#box-shadow-blur').val($(this).val());
    });


    /////////////////////////
    // Box shadow spread
    $('#box-shadow-spread').on('input', function () {
        bsSpread = $(this).val();
        $('#box-shadow-results').css('box-shadow', `${bsPosition} ${bsHorizontal}px ${bsVertical}px ${bsBlur}px ${bsSpread}px rgba(${bsColor}, ${bsOpacity})`);

        $('input[aria-label="box-shadow-spread"]').val($(this).val());
    });

    $('input[aria-label="box-shadow-spread"]').on('input', function () {
        bsSpread = $(this).val();
        // Max value
        if ($(this).val() > max) {
            $(this).val(max);
            bsSpread = max;
        }
        // Min value
        if (min > $(this).val()) {
            $(this).val(min);
            bsSpread = min;
        }

        $('#box-shadow-results').css('box-shadow', `${bsPosition} ${bsHorizontal}px ${bsVertical}px ${bsBlur}px ${bsSpread}px rgba(${bsColor}, ${bsOpacity})`);
        $('#box-shadow-spread').val($(this).val());
    });


    /////////////////////////
    // Container box-shadow box color
    $('#box-shadow-color').on('input propertychange', function () {
        bsColor = hexToRgbA($(this).val())
        $('#box-shadow-results').css('box-shadow', `${bsPosition} ${bsHorizontal}px ${bsVertical}px ${bsBlur}px ${bsSpread}px rgba(${bsColor}, ${bsOpacity})`);
    });


    /////////////////////////
    // Box shadow opacity
    $('#box-shadow-opacity').on('input', function () {
        bsOpacity = $(this).val();
        $('#box-shadow-results').css('box-shadow', `${bsPosition} ${bsHorizontal}px ${bsVertical}px ${bsBlur}px ${bsSpread}px rgba(${bsColor}, ${bsOpacity})`);

        $('input[aria-label="box-shadow-opacity"]').val($(this).val());
    });

    $('input[aria-label="box-shadow-opacity"]').on('input', function () {
        bsOpacity = $(this).val();
        // Max value
        let max = 1;
        if ($(this).val() > max) {
            $(this).val(max);
            bsOpacity = max;
        }
        // Min value
        let min = 0;
        if (min > $(this).val()) {
            $(this).val(min);
            bsOpacity = min;
        }

        $('#box-shadow-results').css('box-shadow', `${bsPosition} ${bsHorizontal}px ${bsVertical}px ${bsBlur}px ${bsSpread}px rgba(${bsColor}, ${bsOpacity})`);
        $('#box-shadow-opacity').val($(this).val());
    });


    /////////////////////////
    // Box shadow position
    $('#box-shadow-position').on('input', function () {

        if ($(this).val() == "on") {
            $(this).val("off");
            bsPosition = "inset"
        }
        else if ($(this).val() == "off") {
            $(this).val("on");
            bsPosition = ""
        }

        $('#box-shadow-results').css('box-shadow', `${bsPosition} ${bsHorizontal}px ${bsVertical}px ${bsBlur}px ${bsSpread}px rgba(${bsColor}, ${bsOpacity})`);
    });


    /////////////////////////
    // Background color
    $('#background-color').on('input propertychange', function () {
        bgColor = $(this).val();
        $('#box-shadow-results').css('backgroundColor', bgColor);
    });


    /////////////////////////
    // CODE RESULTS
    // watch changes to add text-shadow values
    $('input').on('input change', function () {
        $('#code-result-container').html(`
        <pre><code class="css">box-shadow: ${$('#box-shadow-results').css("boxShadow")};</code></pre>
        <div class="d-flex justify-content-end"><button class="tools-options__code__copy" id="code-result-copy" onclick="copyToClipboard('#code-result')">Copy to clipboard</button><span class="tools-options__code__badge">CSS</span></div>`
        );
        $('pre code').each(function (i, e) { hljs.highlightBlock(e) });
    });


    /////////////////////////
    // Reset input value in focus when val is 0
    $('input[aria-label*="box"]').on('click', function () {
        if ($(this).val() == 0) {
            $(this).val('');
        }
    });


    /////////////////////////
    // Reset button
    $('.reset').on('click', function () {
        // Null values to inputs
        $('input').val(null);
        $('input[type="range"]').val(0);

        // Remove Visual borders to results rectangle 
        $('#box-shadow-results').css('box-shadow', 'none')

        // Remove code
        $('#code-result-container').html('')
    });
});