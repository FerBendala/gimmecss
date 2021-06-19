$(function () {

    // variables
    var max = 10;               // => Max value
    var min = -10;              // => Min value
    var tEdit = ''              // => Text Edit
    var tsHorizontal = 0;       // => Text shadow horizontal
    var tsVertical = 0;         // => Text shadow vertical
    var tsBlur = 0;             // => Text shadow blur
    var tsColor = '0, 0, 0';    // => Text shadow color
    var tsOpacity = 1           // => Text shadow color opacity
    var tColor = '';            // => Text color
    var tfSize = '';            // => Font size
    var tlHeight = 1;           // => Line height


    /////////////////////////
    // Text edit
    $('input[aria-label="text-edit"]').on('input', function () {
        tEdit = $(this).val();
        $("#text-shadow-results-text").html('');
        $('#text-shadow-results-text').append(tEdit);
    });


    /////////////////////////
    // Text shadow horizontal
    $('#text-shadow-horizontal').on('input', function () {
        tsHorizontal = $(this).val();
        $('#text-shadow-results-text').css('text-shadow', `${tsHorizontal}px ${tsVertical}px ${tsBlur}px rgba(${tsColor}, ${tsOpacity})`);
        $('input[aria-label="text-shadow-horizontal"]').val($(this).val());
    });

    $('input[aria-label="text-shadow-horizontal"]').on('change', function () {
        tsHorizontal = $(this).val();
        // Max value
        if ($(this).val() > max) {
            $(this).val(max);
            tsHorizontal = max;
        }
        // Min value
        if (min > $(this).val()) {
            $(this).val(min);
            tsHorizontal = min;
        }

        $('#text-shadow-results-text').css('text-shadow', `${tsHorizontal}px ${tsVertical}px ${tsBlur}px rgba(${tsColor}, ${tsOpacity})`);
        $('#text-shadow-horizontal').val($(this).val());
    });


    /////////////////////////
    // Text shadow vertical
    $('#text-shadow-vertical').on('input', function () {
        tsVertical = $(this).val();
        $('#text-shadow-results-text').css('text-shadow', `${tsHorizontal}px ${tsVertical}px ${tsBlur}px rgba(${tsColor}, ${tsOpacity})`);
        $('input[aria-label="text-shadow-vertical"]').val($(this).val());
    });

    $('input[aria-label="text-shadow-vertical"]').on('change', function () {
        tsVertical = $(this).val();
        // Max value
        if ($(this).val() > max) {
            $(this).val(max);
            tsVertical = max;
        }
        // Min value
        if (min > $(this).val()) {
            $(this).val(min);
            tsVertical = min;
        }

        $('#text-shadow-results-text').css('text-shadow', `${tsHorizontal}px ${tsVertical}px ${tsBlur}px rgba(${tsColor}, ${tsOpacity})`);
        $('#text-shadow-vertical').val($(this).val());
    });


    /////////////////////////
    // Text shadow blur
    $('#text-shadow-blur').on('input', function () {
        tsBlur = $(this).val();
        $('#text-shadow-results-text').css('text-shadow', `${tsHorizontal}px ${tsVertical}px ${tsBlur}px rgba(${tsColor}, ${tsOpacity})`);

        $('input[aria-label="text-shadow-blur"]').val($(this).val());
    });

    $('input[aria-label="text-shadow-blur"]').on('change', function () {
        tsBlur = $(this).val();
        // Max value
        if ($(this).val() > max) {
            $(this).val(max);
            tsBlur = max;
        }
        // Min value
        let min = 0
        if (min > $(this).val()) {
            $(this).val(min);
            tsBlur = min;
        }

        $('#text-shadow-results-text').css('text-shadow', `${tsHorizontal}px ${tsVertical}px ${tsBlur}px rgba(${tsColor}, ${tsOpacity})`);
        $('#text-shadow-blur').val($(this).val());
    });


    /////////////////////////
    // Container text-shadow Text color
    $('#text-shadow-color').on('input propertychange', function () {
        tsColor = hexToRgbA($(this).val())
        $('#text-shadow-results-text').css('text-shadow', `${tsHorizontal}px ${tsVertical}px ${tsBlur}px rgba(${tsColor}, ${tsOpacity})`);
    });


    /////////////////////////
    // Text shadow opacity
    $('#text-shadow-opacity').on('input', function () {
        tsOpacity = $(this).val();
        $('#text-shadow-results-text').css('text-shadow', `${tsHorizontal}px ${tsVertical}px ${tsBlur}px rgba(${tsColor}, ${tsOpacity})`);

        $('input[aria-label="text-shadow-opacity"]').val($(this).val());
    });

    $('input[aria-label="text-shadow-opacity"]').on('change', function () {
        tsOpacity = $(this).val();
        // Max value
        let max = 1;
        if ($(this).val() > max) {
            $(this).val(max);
            tsOpacity = max;
        }
        // Min value
        let min = 0;
        if (min > $(this).val()) {
            $(this).val(min);
            tsOpacity = min;
        }

        $('#text-shadow-results-text').css('text-shadow', `${tsHorizontal}px ${tsVertical}px ${tsBlur}px rgba(${tsColor}, ${tsOpacity})`);
        $('#text-shadow-opacity').val($(this).val());
    });


    /////////////////////////
    // Font size
    $('#text-size').on('input', function () {
        tfSize = $(this).val();
        $('#text-shadow-results-text').css('fontSize', `${tfSize}px`);
        $('input[aria-label="text-size"]').val($(this).val());
    });

    $('input[aria-label="text-size"]').on('input', function () {
        tfSize = $(this).val();
        // Max value
        let max = 100;
        if ($(this).val() > max) {
            $(this).val(max);
            fSize = max;
        }
        // Min value
        let min = 0;
        if (min > $(this).val()) {
            $(this).val(min);
            fSize = min;
        }

        $('#text-shadow-results-text').css('fontSize', `${tfSize}px`);
        $('#text-size').val($(this).val());
    });


    /////////////////////////
    // Line height
    $('#text-line-height').on('input', function () {
        tlHeight = $(this).val();
        $('#text-shadow-results-text').css('lineHeight', `${tlHeight}`);
        $('input[aria-label="text-line-height"]').val($(this).val());
    });

    $('input[aria-label="text-line-height"]').on('input', function () {
        tlHeight = $(this).val();
        // Max value
        let max = 2;
        if ($(this).val() > max) {
            $(this).val(max);
            fSize = max;
        }
        // Min value
        let min = 0.7;
        if (min > $(this).val()) {
            $(this).val(min);
            fSize = min;
        }

        $('#text-shadow-results-text').css('lineHeight', `${tlHeight}`);
        $('#text-line-height').val($(this).val());
    });


    /////////////////////////
    // Text color
    $('#text-color').on('input', function () {
        tColor = $(this).val();
        $('#text-shadow-results-text').css('color', tColor);
    });


    /////////////////////////
    // CODE RESULTS
    // watch changes to add text-shadow values
    $('input').on('input change', function () {
        $('#code-result-container').html(`
            
            <ol id="code-result" class="text-monospace">
                <pre><code class="css">text-shadow: ${$('#text-shadow-results-text').css("textShadow")};
font-size: ${$('#text-shadow-results-text').css("fontSize")};
line-height: ${$('#text-shadow-results-text').css("lineHeight")};
color: ${$('#text-shadow-results-text').css("color")};</code></pre>
                <div class="d-flex justify-content-end"><button class="tools-options__code__copy" id="code-result-copy" onclick="copyToClipboard('#code-result')">Copy to clipboard</button><span class="tools-options__code__badge">CSS</span></div>`
        );
        $('pre code').each(function (i, e) { hljs.highlightBlock(e) });
    });


    /////////////////////////
    // Reset input value in focus when val is 0
    $('input[aria-label*="Text"]').on('click', function () {
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
        $('#text-shadow-results').css('text-shadow', 'none')

        // Remove code
        $('#code-result-container').html('')
    });
});