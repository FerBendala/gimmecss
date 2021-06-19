$(function () {

    // variables
    var space = '&nbsp;&nbsp;&nbsp;&nbsp;'    // => Spaces
    var fName = '{ font name }';              // => Font name
    var fFile = '{ file }';                   // => Font file
    var fPath = '{ font path }';              // => Font path

    $('#code-result-container').html(`
        <pre id="code-result"><code class="css">@font-face {
${space}font-family: '${fName}';
${space}src: url('${fPath}/${fFile}.woff2') format('woff2'), 
         url('${fPath}/${fFile}.woff') format('woff');
${space}font-weight: normal;
${space}font-style: normal;
}</code></pre>
<div class="d-flex justify-content-end"><button class="tools-options__code__copy" id="code-result-copy" onclick="copyToClipboard('#code-result')">Copy to clipboard</button><span class="tools-options__code__badge">CSS</span></div>`
    );


    /////////////////////////
    // Font name
    $('input[aria-label="font-name"]').on('input', function () {
        fName = $(this).val();
    });


    /////////////////////////
    // Font file
    $('input[aria-label="font-file"]').on('input', function () {
        fFile = $(this).val();
    });


    /////////////////////////
    // Font path
    $('input[aria-label="font-path"]').on('input', function () {
        fPath = $(this).val();
    });


    /////////////////////////
    // CODE RESULTS
    // watch changes to add font-family values
    $('input, select').on('input change', function () {
        $('#code-result-container').html(`
        <pre id="code-result"><code class="css">@font-face {
${space}font-family: '${fName}';
${space}src: url('${fPath}/${fFile}.woff2') format('woff2'), 
         url('${fPath}/${fFile}.woff') format('woff');
${space}font-weight: normal;
${space}font-style: normal;
}</code></pre>
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

    $('pre code').each(function (i, e) { hljs.highlightBlock(e) });
});