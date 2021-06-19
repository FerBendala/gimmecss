$(function () {

    // variables
    var space = '&nbsp;&nbsp;&nbsp;&nbsp;'     // => Spaces
    var max = 100;                             // => Max value
    var min = 0;                               // => Min value

    let position01 = 'bottom';                 // => Position fixed
    let position02 = 'left';                   // => Position variable
    var aSize = 30;                            // => Arrow size
    var aBorder = 4;                           // => Arrow border
    var aBorderR = 4;                          // => Arrow border repeat
    var aColor = "#d2312e";                    // => Arrow color
    var abColor = "#a92724";                   // => Arrow border color
    var aPosition = 50;                        // => Arrow position

    /////////////////////////
    // Styles
    $('body').one().append(`
        <style id="style">
            .arrowBox {
                position: relative;
                background: #d2312e;
                border: 4px solid #a92724;
            }

            .arrowBox:after,
            .arrowBox:before {
                bottom: 100%;
                left: 50%;
                border: solid transparent;
                content: "";
                height: 0;
                width: 0;
                position: absolute;
                pointer-events: none;
            }

            .arrowBox:after {
                border-color: rgba(136, 183, 213, 0);
                border-bottom-color: #d2312e;
                border-width: 30px;
                margin-left: -30px;
            }

            .arrowBox:before {
                border-color: rgba(194, 225, 245, 0);
                border-bottom-color: #a92724;
                border-width: 36px;
                margin-left: -36px;
            }
        </style>
    `);


    /////////////////////////
    // Arrow direction
    $('input').on('click', function () {
        if ($(this).val() == 'top') {
            position01 = "bottom"
            position02 = "left"
        } else if ($(this).val() == 'right') {
            position01 = "left"
            position02 = "top"
        } else if ($(this).val() == 'bottom') {
            position01 = "top"
            position02 = "left"
        } else if ($(this).val() == 'left') {
            position01 = "right"
            position02 = "top"
        }


        $('#style').remove()
        if ($('#arrow-border-width').val() == 0) {
            $('body').append(`
                <style id="style">
                    .arrowBox {
                        position: relative;
                        background: ${aColor};
                    }
    
                    .arrowBox:after {
                        ${position01}: 100%;
                        ${position02}: ${aPosition}%;
                        border: solid transparent;
                        content: "";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                        border-color: transparent;
                        border-${position01}-color: ${aColor};
                        border-width: ${aSize}px;
                        margin-${position02}: -${aSize}px;
                    }
                </style>
            `);
        } else {
            $('body').append(`
                <style id="style">
                    .arrowBox {
                        position: relative;
                        background: ${aColor};
                        border: ${aBorder}px solid ${abColor};
                    }
    
                    .arrowBox:after,
                    .arrowBox:before {
                        ${position01}: 100%;
                        ${position02}: ${aPosition}%;
                        border: solid transparent;
                        content: "";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                    }
    
                    .arrowBox:after {
                        border-color: transparent;
                        border-${position01}-color: ${aColor};
                        border-width: ${aSize}px;
                        margin-${position02}: -${aSize}px;
                    }
    
                    .arrowBox:before {
                        border-color: transparent;
                        border-${position01}-color: ${abColor};
                        border-width: ${aBorderR}px;
                        margin-${position02}: -${aBorderR}px;
                    }
                </style>
            `);
        }
    });


    /////////////////////////
    // Arrow size
    $('#arrow-size').on('input', function () {
        aSize = $(this).val();
        aBorderR = parseFloat(aBorder) + parseFloat(aSize) + parseFloat(2);
        $('input[aria-label="arrow-size"]').val($(this).val());

        $('#style').remove()
        if ($('#arrow-position').val() == 0) {
            $('body').append(`
                <style id="style">
                    .arrowBox {
                        position: relative;
                        background: ${aColor};
                    }
    
                    .arrowBox:after {
                        ${position01}: 100%;
                        ${position02}: ${aPosition}%;
                        border: solid transparent;
                        content: "";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                        border-color: transparent;
                        border-${position01}-color: ${aColor};
                        border-width: ${aSize}px;
                        margin-${position02}: -${aSize}px;
                    }
                </style>
            `);
        } else {
            $('body').append(`
                <style id="style">
                    .arrowBox {
                        position: relative;
                        background: ${aColor};
                        border: ${aBorder}px solid ${abColor};
                    }
    
                    .arrowBox:after,
                    .arrowBox:before {
                        ${position01}: 100%;
                        ${position02}: ${aPosition}%;
                        border: solid transparent;
                        content: "";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                    }
    
                    .arrowBox:after {
                        border-color: transparent;
                        border-${position01}-color: ${aColor};
                        border-width: ${aSize}px;
                        margin-${position02}: -${aSize}px;
                    }
    
                    .arrowBox:before {
                        border-color: transparent;
                        border-${position01}-color: ${abColor};
                        border-width: ${aBorderR}px;
                        margin-${position02}: -${aBorderR}px;
                    }
                </style>
            `);
        }
    });

    $('input[aria-label="arrow-size"]').on('input', function () {
        aSize = $(this).val();
        aBorderR = parseFloat(aBorder) + parseFloat(aSize) + parseFloat(2);
        // Max value
        if ($(this).val() > max) {
            $(this).val(max);
            aSize = max;
        }
        // Min value
        if (min > $(this).val()) {
            $(this).val(min);
            aSize = min;
        }
        $('#arrow-size').val($(this).val());


        $('#style').remove()
        if ($('#arrow-border-width').val() == 0) {
            $('body').append(`
                <style id="style">
                    .arrowBox {
                        position: relative;
                        background: ${aColor};
                    }
    
                    .arrowBox:after {
                        ${position01}: 100%;
                        ${position02}: ${aPosition}%;
                        border: solid transparent;
                        content: "";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                        border-color: transparent;
                        border-${position01}-color: ${aColor};
                        border-width: ${aSize}px;
                        margin-${position02}: -${aSize}px;
                    }
                </style>
            `);
        } else {
            $('body').append(`
                <style id="style">
                    .arrowBox {
                        position: relative;
                        background: ${aColor};
                        border: ${aBorder}px solid ${abColor};
                    }
    
                    .arrowBox:after,
                    .arrowBox:before {
                        ${position01}: 100%;
                        ${position02}: ${aPosition}%;
                        border: solid transparent;
                        content: "";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                    }
    
                    .arrowBox:after {
                        border-color: transparent;
                        border-${position01}-color: ${aColor};
                        border-width: ${aSize}px;
                        margin-${position02}: -${aSize}px;
                    }
    
                    .arrowBox:before {
                        border-color: transparent;
                        border-${position01}-color: ${abColor};
                        border-width: ${aBorderR}px;
                        margin-${position02}: -${aBorderR}px;
                    }
                </style>
            `);
        }
    });


    /////////////////////////
    // Border width
    $('#arrow-border-width').on('input', function () {
        aBorder = $(this).val();
        aBorderR = parseFloat(aBorder) + parseFloat(aSize) + parseFloat(2);
        $('input[aria-label="arrow-border-width"]').val($(this).val());

        $('#style').remove()
        if ($('#arrow-position').val() == 0) {
            $('body').append(`
                <style id="style">
                    .arrowBox {
                        position: relative;
                        background: ${aColor};
                    }
    
                    .arrowBox:after {
                        ${position01}: 100%;
                        ${position02}: ${aPosition}%;
                        border: solid transparent;
                        content: "";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                        border-color: transparent;
                        border-${position01}-color: ${aColor};
                        border-width: ${aSize}px;
                        margin-${position02}: -${aSize}px;
                    }
                </style>
            `);
        } else {
            $('body').append(`
                <style id="style">
                    .arrowBox {
                        position: relative;
                        background: ${aColor};
                        border: ${aBorder}px solid ${abColor};
                    }
    
                    .arrowBox:after,
                    .arrowBox:before {
                        ${position01}: 100%;
                        ${position02}: ${aPosition}%;
                        border: solid transparent;
                        content: "";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                    }
    
                    .arrowBox:after {
                        border-color: transparent;
                        border-${position01}-color: ${aColor};
                        border-width: ${aSize}px;
                        margin-${position02}: -${aSize}px;
                    }
    
                    .arrowBox:before {
                        border-color: transparent;
                        border-${position01}-color: ${abColor};
                        border-width: ${aBorderR}px;
                        margin-${position02}: -${aBorderR}px;
                    }
                </style>
            `);
        }
    });

    $('input[aria-label="arrow-border-width"]').on('input', function () {
        aBorder = $(this).val();
        aBorderR = parseFloat(aBorder) + parseFloat(aSize) + parseFloat(2);
        // Max value
        if ($(this).val() > max) {
            $(this).val(max);
            aBorder = max;
        }
        // Min value
        if (min > $(this).val()) {
            $(this).val(min);
            aBorder = min;
        }
        $('#arrow-border-width').val($(this).val());

        $('#style').remove()
        if ($('#arrow-border-width').val() == 0) {
            $('body').append(`
                <style id="style">
                    .arrowBox {
                        position: relative;
                        background: ${aColor};
                    }
    
                    .arrowBox:after {
                        ${position01}: 100%;
                        ${position02}: ${aPosition}%;
                        border: solid transparent;
                        content: "";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                        border-color: transparent;
                        border-${position01}-color: ${aColor};
                        border-width: ${aSize}px;
                        margin-${position02}: -${aSize}px;
                    }
                </style>
            `);
        } else {
            $('body').append(`
                <style id="style">
                    .arrowBox {
                        position: relative;
                        background: ${aColor};
                        border: ${aBorder}px solid ${abColor};
                    }
    
                    .arrowBox:after,
                    .arrowBox:before {
                        ${position01}: 100%;
                        ${position02}: ${aPosition}%;
                        border: solid transparent;
                        content: "";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                    }
    
                    .arrowBox:after {
                        border-color: transparent;
                        border-${position01}-color: ${aColor};
                        border-width: ${aSize}px;
                        margin-${position02}: -${aSize}px;
                    }
    
                    .arrowBox:before {
                        border-color: transparent;
                        border-${position01}-color: ${abColor};
                        border-width: ${aBorderR}px;
                        margin-${position02}: -${aBorderR}px;
                    }
                </style>
            `);
        }
    });


    /////////////////////////
    // Arrow
    $('#arrow-position').on('input', function () {
        aPosition = $(this).val();
        $('input[aria-label="arrow-position"]').val($(this).val());
        $('#style').remove()

        if ($('#arrow-position').val() == 0) {
            $('body').append(`
                <style id="style">
                    .arrowBox {
                        position: relative;
                        background: ${aColor};
                    }
    
                    .arrowBox:after {
                        ${position01}: 100%;
                        ${position02}: ${aPosition}%;
                        border: solid transparent;
                        content: "";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                        border-color: transparent;
                        border-${position01}-color: ${aColor};
                        border-width: ${aSize}px;
                        margin-${position02}: -${aSize}px;
                    }
                </style>
            `);
        } else {
            $('body').append(`
                <style id="style">
                    .arrowBox {
                        position: relative;
                        background: ${aColor};
                        border: ${aBorder}px solid ${abColor};
                    }
    
                    .arrowBox:after,
                    .arrowBox:before {
                        ${position01}: 100%;
                        ${position02}: ${aPosition}%;
                        border: solid transparent;
                        content: "";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                    }
    
                    .arrowBox:after {
                        border-color: transparent;
                        border-${position01}-color: ${aColor};
                        border-width: ${aSize}px;
                        margin-${position02}: -${aSize}px;
                    }
    
                    .arrowBox:before {
                        border-color: transparent;
                        border-${position01}-color: ${abColor};
                        border-width: ${aBorderR}px;
                        margin-${position02}: -${aBorderR}px;
                    }
                </style>
            `);
        }
    });

    $('input[aria-label="arrow-position"]').on('input', function () {
        aPosition = $(this).val();
        // Max value
        if ($(this).val() > max) {
            $(this).val(max);
            aPosition = max;
        }
        // Min value
        if (min > $(this).val()) {
            $(this).val(min);
            aPosition = min;
        }
        $('#arrow-position').val($(this).val());

        $('#style').remove()
        if ($('#arrow-position').val() == 0) {
            $('body').append(`
                <style id="style">
                    .arrowBox {
                        position: relative;
                        background: ${aColor};
                    }
    
                    .arrowBox:after {
                        ${position01}: 100%;
                        ${position02}: ${aPosition}%;
                        border: solid transparent;
                        content: "";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                        border-color: transparent;
                        border-${position01}-color: ${aColor};
                        border-width: ${aSize}px;
                        margin-${position02}: -${aSize}px;
                    }
                </style>
            `);
        } else {
            $('body').append(`
                <style id="style">
                    .arrowBox {
                        position: relative;
                        background: ${aColor};
                        border: ${aBorder}px solid ${abColor};
                    }
    
                    .arrowBox:after,
                    .arrowBox:before {
                        ${position01}: 100%;
                        ${position02}: ${aPosition}%;
                        border: solid transparent;
                        content: "";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                    }
    
                    .arrowBox:after {
                        border-color: transparent;
                        border-${position01}-color: ${aColor};
                        border-width: ${aSize}px;
                        margin-${position02}: -${aSize}px;
                    }
    
                    .arrowBox:before {
                        border-color: transparent;
                        border-${position01}-color: ${abColor};
                        border-width: ${aBorderR}px;
                        margin-${position02}: -${aBorderR}px;
                    }
                </style>
            `);
        }
    });


    /////////////////////////
    // Arrow color
    $('#arrow-color').on('input', function () {
        aColor = $(this).val();

        $('#style').remove();
        if ($('#arrow-border-width').val() == 0) {
            $('body').append(`
                <style id="style">
                    .arrowBox {
                        position: relative;
                        background: ${aColor};
                    }
    
                    .arrowBox:after {
                        ${position01}: 100%;
                        ${position02}: ${aPosition}%;
                        border: solid transparent;
                        content: "";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                        border-color: transparent;
                        border-${position01}-color: ${aColor};
                        border-width: ${aSize}px;
                        margin-${position02}: -${aSize}px;
                    }
                </style>
            `);
        } else {
            $('body').append(`
                <style id="style">
                    .arrowBox {
                        position: relative;
                        background: ${aColor};
                        border: ${aBorder}px solid ${abColor};
                    }
    
                    .arrowBox:after,
                    .arrowBox:before {
                        ${position01}: 100%;
                        ${position02}: ${aPosition}%;
                        border: solid transparent;
                        content: "";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                    }
    
                    .arrowBox:after {
                        border-color: transparent;
                        border-${position01}-color: ${aColor};
                        border-width: ${aSize}px;
                        margin-${position02}: -${aSize}px;
                    }
    
                    .arrowBox:before {
                        border-color: transparent;
                        border-${position01}-color: ${abColor};
                        border-width: ${aBorderR}px;
                        margin-${position02}: -${aBorderR}px;
                    }
                </style>
            `);
        }
    });


    /////////////////////////
    // Arrow border color
    $('#arrow-border-color').on('input', function () {
        abColor = $(this).val();

        $('#style').remove();
        if ($('#arrow-border-width').val() == 0) {
            $('body').append(`
                <style id="style">
                    .arrowBox {
                        position: relative;
                        background: ${aColor};
                    }
    
                    .arrowBox:after {
                        ${position01}: 100%;
                        ${position02}: ${aPosition}%;
                        border: solid transparent;
                        content: "";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                        border-color: transparent;
                        border-${position01}-color: ${aColor};
                        border-width: ${aSize}px;
                        margin-${position02}: -${aSize}px;
                    }
                </style>
            `);
        } else {
            $('body').append(`
                <style id="style">
                    .arrowBox {
                        position: relative;
                        background: ${aColor};
                        border: ${aBorder}px solid ${abColor};
                    }
    
                    .arrowBox:after,
                    .arrowBox:before {
                        ${position01}: 100%;
                        ${position02}: ${aPosition}%;
                        border: solid transparent;
                        content: "";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                    }
    
                    .arrowBox:after {
                        border-color: transparent;
                        border-${position01}-color: ${aColor};
                        border-width: ${aSize}px;
                        margin-${position02}: -${aSize}px;
                    }
    
                    .arrowBox:before {
                        border-color: transparent;
                        border-${position01}-color: ${abColor};
                        border-width: ${aBorderR}px;
                        margin-${position02}: -${aBorderR}px;
                    }
                </style>
            `);
        }
    });


    /////////////////////////
    // CODE RESULTS
    // watch changes to add font-family values
    $('input, select').on('input change', function () {
        if ($('#arrow-border-width').val() == 0) {
            $('#code-result-container').html(`
                <pre><code class="css">.arrowBox {
${space}position: relative;
${space}background: ${aColor};
}

.arrowBox:after {
${space}${position01}: 100%;
${space}${position02}: ${aPosition}%;
${space}border: solid transparent;
${space}content: "";
${space}height: 0;
${space}width: 0;
${space}position: absolute;
${space}pointer-events: none;
${space}border-color: transparent;
${space}border-${position01}-color: ${aColor};
${space}border-width: ${aSize}px;
${space}margin-${position02}: -${aSize}px;
}</pre></code>
<div class="d-flex justify-content-end"><button class="tools-options__code__copy" id="code-result-copy" onclick="copyToClipboard('#code-result')">Copy to clipboard</button><span class="tools-options__code__badge">CSS</span></div>`
            );
        } else {
            $('#code-result-container').html(`
                <pre><code class="css">.arrowBox {
${space}position: relative;
${space}background: ${aColor};
${space}border: ${aBorder}px solid ${abColor};
}

.arrowBox:after,
.arrowBox:before {
${space}${position01}: 100%;
${space}${position02}: ${aPosition}%;
${space}border: solid transparent;
${space}content: "";
${space}height: 0;
${space}width: 0;
${space}position: absolute;
${space}pointer-events: none;
}

.arrowBox:after {
${space}border-color: transparent;
${space}border-${position01}-color: ${aColor};
${space}border-width: ${aSize}px;
${space}margin-${position02}: -${aSize}px;
}

.arrowBox:before {
${space}border-color: transparent;
${space}border-${position01}-color: ${abColor};
${space}border-width: ${aBorderR}px;
${space}margin-${position02}: -${aBorderR}px;
}</code></pre>
<div class="d-flex justify-content-end"><button class="tools-options__code__copy" id="code-result-copy" onclick="copyToClipboard('#code-result')">Copy to clipboard</button><span class="tools-options__code__badge">CSS</span></div>`
            );
        };
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

    aBorderR = parseFloat(aBorder) + parseFloat(aSize) + parseFloat(2);
});