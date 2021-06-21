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

// Get complementary color
function getComplementaryColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    // return "#" + padZero(r) + padZero(g) + padZero(b);
    return "#" + padZero(r) + padZero(r) + padZero(r);
};
function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

// Make complementary color to input type color label
var input = document.getElementsByTagName('input');
for (var i = 0; i < input.length; i++) {
    if (input[i].type == 'color') {
        // On load page
        input[i].previousElementSibling.style.color = getComplementaryColor(input[i].value);

        // On changes
        input[i].addEventListener('input', (i) => {
            i.target.previousElementSibling.style.color = getComplementaryColor(i.target.value);
        });
    }
}