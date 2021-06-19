$(function () {

    // variables
    var max = 10;                 // => Max value
    var min = -10;                // => Min value
    var tEdit = ''                // => Text Edit
    var fColor = '';              // => Text color
    var fSize = '';               // => Font size
    var lHeight = 1;              // => Line height
    var fFamily = '';             // => Font family
    var fWeight = '';             // => Font weight
    var fStyle = '';              // => Font style
    var fVariant = '';            // => Font variant
    var tAlign = '';              // => Text align
    var tDecorationStyle = '';    // => Text decoration style
    var tDecorationLine = '';     // => Text decoration line
    var tdColor = '';             // => Text decoration color


    /////////////////////////
    // Text edit
    $('input[aria-label="text-edit"]').on('input', function () {
        tEdit = $(this).val();
        $("#font-styler-results").html('');
        $('#font-styler-results').append(tEdit);
    });


    /////////////////////////
    // Font size
    $('#font-size').on('input', function () {
        fSize = $(this).val();
        $('#font-styler-results').css('fontSize', `${fSize}px`);
        $('input[aria-label="font-size"]').val($(this).val());
    });

    $('input[aria-label="font-size"]').on('input', function () {
        fSize = $(this).val();
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

        $('#font-styler-results').css('fontSize', `${fSize}px`);
        $('#font-size').val($(this).val());
    });


    /////////////////////////
    // Line height
    $('#line-height').on('input', function () {
        lHeight = $(this).val();
        $('#font-styler-results').css('lineHeight', `${lHeight}`);
        $('input[aria-label="line-height"]').val($(this).val());
    });

    $('input[aria-label="line-height"]').on('input', function () {
        lHeight = $(this).val();
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

        $('#font-styler-results').css('lineHeight', `${lHeight}`);
        $('#line-height').val($(this).val());
    });


    /////////////////////////
    // Font family
    $('#font-family').on('input', function () {
        fFamily = $("#font-family option:selected").text();
        $('#font-styler-results').css('fontFamily', fFamily);
    });
    
    
    /////////////////////////
    // Font weight
    $('#font-weight').on('input', function () {
        fWeight = $("#font-weight option:selected").text();
        $('#font-styler-results').css('fontWeight', fWeight);
    });
    
    
    /////////////////////////
    // Font style
    $('#font-style').on('input', function () {
        fStyle = $("#font-style option:selected").text();
        $('#font-styler-results').css('fontStyle', fStyle);
    });
    
    
    /////////////////////////
    // Font variant
    $('#font-variant').on('input', function () {
        fVariant = $("#font-variant option:selected").text();
        $('#font-styler-results').css('fontVariant', fVariant);
    });
    
    
    /////////////////////////
    // Text align
    $('#text-align').on('input', function () {
        tAlign = $("#text-align option:selected").text();
        $('#font-styler-results').css('textAlign', tAlign);
    });
    
    
    /////////////////////////
    // Text decoration
    $('#text-decoration').on('input', function () {
        tDecorationLine = $("#text-decoration :selected").closest('optgroup').prop('label')
        tDecorationStyle = $("#text-decoration option:selected").text()

        $('#font-styler-results').css('textDecorationLine', tDecorationLine);
        $('#font-styler-results').css('textDecorationStyle', tDecorationStyle);
    });


    /////////////////////////
    // Text decoration color
    $('#text-decoration-color').on('input', function () {
        tdColor = $(this).val();
        $('#font-styler-results').css('textDecorationColor', tdColor);
    });
    
    
    /////////////////////////
    // Text transform
    $('#text-transform').on('input', function () {
        tAlign = $("#text-transform option:selected").text();
        $('#font-styler-results').css('textTransform', tAlign);
    });

    /////////////////////////
    // Text color
    $('#text-color').on('input', function () {
        fColor = $(this).val();
        $('#font-styler-results').css('color', fColor);
    });


    /////////////////////////
    // START CODE RESULTS
    $('#code-result-container').html(`
    <pre><code class="css"><div style="display:none">.class{</div>font-family: ${$('#font-styler-results').css("fontFamily")};
font-weight: ${$('#font-styler-results').css("fontWeight")};
font-style: ${$('#font-styler-results').css("fontStyle")};
font-size: ${$('#font-styler-results').css("fontSize")};

line-height: ${$('#font-styler-results').css("lineHeight")};

text-align: ${$('#font-styler-results').css("textAlign")};
text-decoration: ${$('#font-styler-results').css("textDecoration")};
text-transform: ${$('#font-styler-results').css("textTransform")};

color: ${$('#font-styler-results').css("color")};<div style="display:none">}</div></code></pre>
<div class="d-flex justify-content-end"><button class="tools-options__code__copy" id="code-result-copy" onclick="copyToClipboard('#code-result')">Copy to clipboard</button><span class="tools-options__code__badge">CSS</span></div>`
);

    /////////////////////////
    // CODE RESULTS
    // watch changes to add font-family values
    $('input, select').on('input change', function () {
        $('#code-result-container').html(`
            <pre><code class="css"><div style="display:none">.class{</div>font-family: ${$('#font-styler-results').css("fontFamily")};
font-weight: ${$('#font-styler-results').css("fontWeight")};
font-style: ${$('#font-styler-results').css("fontStyle")};
font-size: ${$('#font-styler-results').css("fontSize")};

line-height: ${$('#font-styler-results').css("lineHeight")};

text-align: ${$('#font-styler-results').css("textAlign")};
text-decoration: ${$('#font-styler-results').css("textDecoration")};
text-transform: ${$('#font-styler-results').css("textTransform")};

color: ${$('#font-styler-results').css("color")};<div style="display:none">}</div></code></pre>
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
        $('#font-styler-results').css('font-family', 'none')

        // Remove code
        $('#code-result-container').html('')
    });

    // Start hljs
    $('pre code').each(function (i, e) { hljs.highlightBlock(e) });
});