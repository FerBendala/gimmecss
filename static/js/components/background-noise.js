$(function () {

    var max = 100;
    var min = 0;
    var opacity = 0.1;
    var density = 255;
    var bgColor = '#d2312e';

    /////////////////////////
    // Background noise
    function noisy(opacity, density) {
        var wrapper = $("#background-noise-results");
        var canvas = document.createElement("canvas");
        var w = canvas.width = 200;
        var h = canvas.height = 200;
        var ctx = canvas.getContext("2d");
        var x, y;
        opacity = $('#noise-opacity').val();
        density = $('#noise-density').val();
        for (x = 0; x < w; ++x) {
            for (y = 0; y < h; ++y) {
                num = Math.floor(Math.random() * density);
                ctx.fillStyle = ["rgba(", num, ",", num, ",", num, ",", opacity, ")"].join('');
                ctx.fillRect(x, y, 1, 1);
            }
        }

        wrapper.css({
            'background-image': ["url(", canvas.toDataURL("image/png"), ")"].join(''),
        });

        /////////////////////////
        // Download
        $('.download').attr('href', canvas.toDataURL("image/png"));
    }

    /////////////////////////
    // Noise opacity
    $('#noise-opacity').on('input', function () {
        opacity = $(this).val();
        $('input[aria-label="noise-opacity"]').val($(this).val());

        noisy(opacity);
    });

    $('input[aria-label="noise-opacity"]').on('input', function () {
        opacity = $(this).val() * 255;
        $('#noise-opacity').val($(this).val());
        // Max value
        let max = 1;
        if ($(this).val() > max) {
            $(this).val(max);
            opacity = max;
        }
        // Min value
        if (min > $(this).val()) {
            $(this).val(min);
            opacity = min;
        }

        noisy(opacity);
    });

    /////////////////////////
    // Noise opacity
    $('#noise-density').on('input', function () {
        density += $(this).val();
        $('input[aria-label="noise-density"]').val($(this).val());

        noisy(density);
    });

    $('input[aria-label="noise-density"]').on('input', function () {
        // Max value
        if ($(this).val() > max) {
            $(this).val(max);
            density = max;
        }
        // Min value
        let min = 1;
        if (min > $(this).val()) {
            $(this).val(min);
            density = min;
        }
        density = $(this).val();
        $('#noise-density').val($(this).val());

        noisy(density);
    });

    /////////////////////////
    // Background color
    $('#background-color').on('input propertychange', function () {
        bgColor = $(this).val();
        $('#background-noise-results').css('backgroundColor', bgColor);
    });

    /////////////////////////
    // START CODE RESULTS
    $('#code-result-container').html(`
            <pre class="overflow-auto"><code class="css"><div style="display:none">.class{</div>background-color: ${$('#background-noise-results').css("backgroundColor")};
background-repeat: ${$('#background-noise-results').css("backgroundRepeat")};
background-position: ${$('#background-noise-results').css("backgroundPosition")};
background-image: ${$('#background-noise-results').css("backgroundImage")};<div style="display:none">}</div></pre></code>
                <div class="d-flex justify-content-end"><button class="tools-options__code__copy" id="code-result-copy" onclick="copyToClipboard('#code-result')">Copy to clipboard</button><span class="tools-options__code__badge">CSS</span></div>`
        );


    /////////////////////////
    // CODE RESULTS
    // watch changes to add background-noise values
    $('input').on('input change', function () {
        $('#code-result-container').html(`
            <pre class="overflow-auto"><code class="css"><div style="display:none">.class{</div>background-color: ${$('#background-noise-results').css("backgroundColor")};
background-repeat: ${$('#background-noise-results').css("backgroundRepeat")};
background-position: ${$('#background-noise-results').css("backgroundPosition")};
background-image: ${$('#background-noise-results').css("backgroundImage")};<div style="display:none">}</div></pre></code>
                <div class="d-flex justify-content-end"><button class="tools-options__code__copy" id="code-result-copy" onclick="copyToClipboard('#code-result')">Copy to clipboard</button><span class="tools-options__code__badge">CSS</span></div>`
        );

        // Start hljs
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
        location.reload();
    });

    $('pre code').each(function (i, e) { hljs.highlightBlock(e) });
});