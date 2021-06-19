$(function () {

    // Color picker
    var gp = new Grapick({
        el: '#grapick',
        direction: 'center',
        min: 0,
        max: 100
    });
    gp.addHandler(0, '#d2312e', 0);
    gp.addHandler(50, '#a12623', 0);
    gp.addHandler(100, '#68191a', 0);
    gp.on('change', function (complete) {

        $('#background-gradient-results').css({
            'background': gp.getSafeValue(),
        });
        $('#code-result-container').html(`
            <pre><code class="css">background: ${gp.getValue()};</code></pre>
            <button class="tools-options__code__copy" id="code-result-copy" onclick="copyToClipboard('#code-result')">Copy to clipboard</button><span class="tools-options__code__badge">CSS</span>`
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
    });

    /////////////////////////
    // CODE RESULTS
    // watch changes to add background-gradient values
    $('input').on('input change', function () {
        $('#code-result-container').html(`
        <pre><code class="css">background: ${gp.getValue()};</code></pre>
        <button class="tools-options__code__copy" id="code-result-copy" onclick="copyToClipboard('#code-result')">Copy to clipboard</button><span class="tools-options__code__badge">CSS</span>`
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
        $('#background-gradient-results').css('background-gradient', 'none')

        // Remove code
        $('#code-result-container').html('')
    });

});