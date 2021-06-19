// Copy paste buttton
function copyToClipboard(element) {
    var text = $('.css').html();
    text = text.replace(/&nbsp;/g, '');
    text = text.replace(/<\/?span[^>]*>/g, "");
    text = text.replace(/<\/?span>/g, '\r');
    text = text.replace(/<\/?div style="display:none">.class{/g, '\r');
    text = text.replace(/<\/?div style="display:none">}/g, '\r');
    text = text.replace(/<\/?div[^>]*>/g, "");
    element = $('<textarea>').appendTo('body').val(text).select();
    document.execCommand('copy');
    element.remove();
}

// Convert hex to rgba
function hexToRgbA(hex) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',');
    }
    throw new Error('Bad Hex');
}

