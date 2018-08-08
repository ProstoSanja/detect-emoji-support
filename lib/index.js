'use strict';

function detect() {
    if (detect.cache !== null) {
        return detect.cache
    }

    if (typeof window === 'undefined') {
        return false;
    }

    var pixelRatio = window.devicePixelRatio || 1;
    var offset = 12 * pixelRatio;
    var node = window.document.createElement('canvas');
    var ctx = node.getContext('2d');
    if (!ctx) {
        return false;
    }

    ctx.fillStyle = '#f00';
    ctx.textBaseline = 'top';
    ctx.font = '32px Arial';
    ctx.fillText('\ud83d\udc28', 0, 0); // U+1F428 KOALA

    var support = ctx.getImageData(offset, offset, 1, 1).data[0] !== 0;

    detect.cache = support

    return support;
};

detect.cache = null;

module.exports = detect;