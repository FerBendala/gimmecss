$(function () {

    // variables
    var tEdit = ''              // => Text Edit
    var tfSize = '';            // => Font size


    /////////////////////////
    // Text edit
    $('input[aria-label="text-edit"]').on('input', function () {
        tEdit = $(this).val();
        $("#text-gradient-results").html('');
        $('#text-gradient-results').append(tEdit);
    });


    /////////////////////////
    // Font size
    $('#text-size').on('input', function () {
        tfSize = $(this).val();
        $('#text-gradient-results').css('fontSize', `${tfSize}px`);
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

        $('#text-gradient-results').css('fontSize', `${tfSize}px`);
        $('#text-size').val($(this).val());
    });


    // Color picker
    var gp = new Grapick({
        el: '#grapick',
        direction: 'right',
        min: 0,
        max: 100,
        height: '32px',
    });
    gp.addHandler(0, '#EC008C');
    gp.addHandler(50, '#f4347a');
    gp.addHandler(100, '#FC6767');
    gp.on('change', function (complete) {
        $('#text-gradient-results').css({
            'background': gp.getSafeValue(),
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent'
        });
        $('#code-result-container').html(`
            <pre><code class="css"><div style="display:none">.class{</div>background: ${gp.getValue()};
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;<div style="display:none">}</div></code></pre>
<div class="d-flex justify-content-end"><button class="tools-options__code__copy" id="code-result-copy" onclick="copyToClipboard('#code-result')">Copy to clipboard</button><span class="tools-options__code__badge">CSS</span></div>`
        );
        $('pre code').each(function (i, e) { hljs.highlightBlock(e) });
    })
    gp.emit('change');

    var swType = document.getElementById('switch-type');
    var swAngle = document.getElementById('switch-angle');

    swType.addEventListener('change', function (e) {
        gp.setType(this.value);
    })

    swAngle.addEventListener('change', function (e) {
        gp.setDirection(this.value);
    })

    /////////////////////////
    // CODE RESULTS
    // watch changes to add text-gradient values
    $('input').on('input change', function () {
        $('#code-result-container').html(`
        <pre><code class="css"><div style="display:none">.class{</div>background: ${gp.getValue()};
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;<div style="display:none">}</div></code></pre>
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
        location.reload();
    });

});