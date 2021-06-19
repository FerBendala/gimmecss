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
        $("#font-family-results").html('');
        $('#font-family-results').append(tEdit);
    });


    /////////////////////////
    // Font size
    $('#font-size').on('input', function () {
        fSize = $(this).val();
        $('#font-family-results').css('fontSize', `${fSize}px`);
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

        $('#font-family-results').css('fontSize', `${fSize}px`);
        $('#font-size').val($(this).val());
    });


    /////////////////////////
    // Line height
    $('#line-height').on('input', function () {
        lHeight = $(this).val();
        $('#font-family-results').css('lineHeight', `${lHeight}`);
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

        $('#font-family-results').css('lineHeight', `${lHeight}`);
        $('#line-height').val($(this).val());
    });


    /////////////////////////
    // Font family
    $('#font-family').on('input', function () {
        fFamily = $("#font-family option:selected").text();
        $('#font-family-results').css('fontFamily', fFamily);
    });
    
    
    /////////////////////////
    // Font weight
    $('#font-weight').on('input', function () {
        fWeight = $("#font-weight option:selected").text();
        $('#font-family-results').css('fontWeight', fWeight);
    });
    
    
    /////////////////////////
    // Font style
    $('#font-style').on('input', function () {
        fStyle = $("#font-style option:selected").text();
        $('#font-family-results').css('fontStyle', fStyle);
    });
    
    
    /////////////////////////
    // Font variant
    $('#font-variant').on('input', function () {
        fVariant = $("#font-variant option:selected").text();
        $('#font-family-results').css('fontVariant', fVariant);
    });
    
    
    /////////////////////////
    // Text align
    $('#text-align').on('input', function () {
        tAlign = $("#text-align option:selected").text();
        $('#font-family-results').css('textAlign', tAlign);
    });
    
    
    /////////////////////////
    // Text decoration
    $('#text-decoration').on('input', function () {
        tDecorationLine = $("#text-decoration :selected").closest('optgroup').prop('label')
        tDecorationStyle = $("#text-decoration option:selected").text()

        $('#font-family-results').css('textDecorationLine', tDecorationLine);
        $('#font-family-results').css('textDecorationStyle', tDecorationStyle);
    });


    /////////////////////////
    // Text decoration color
    $('#text-decoration-color').on('input', function () {
        tdColor = $(this).val();
        $('#font-family-results').css('textDecorationColor', tdColor);
    });
    
    
    /////////////////////////
    // Text transform
    $('#text-transform').on('input', function () {
        tAlign = $("#text-transform option:selected").text();
        $('#font-family-results').css('textTransform', tAlign);
    });

    /////////////////////////
    // Text color
    $('#text-color').on('input', function () {
        fColor = $(this).val();
        $('#font-family-results').css('color', fColor);
    });


    /////////////////////////
    // CODE RESULTS
    // watch changes to add font-family values
    $('input, select').on('input change', function () {
        $('#code-result-container').html(`
            <pre><code class="css">font-family: ${$('#font-family-results').css("fontFamily")};
font-weight: ${$('#font-family-results').css("fontWeight")};
font-style: ${$('#font-family-results').css("fontStyle")};
font-size: ${$('#font-family-results').css("fontSize")};

line-height: ${$('#font-family-results').css("lineHeight")};

text-align: ${$('#font-family-results').css("textAlign")};
text-decoration: ${$('#font-family-results').css("textDecoration")};
text-transform: ${$('#font-family-results').css("textTransform")};

color: ${$('#font-family-results').css("color")};</code></pre>
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
        $('#font-family-results').css('font-family', 'none')

        // Remove code
        $('#code-result-container').html('')
    });
});