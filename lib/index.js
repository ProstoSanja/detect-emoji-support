'use strict';

const checkTypes = {
	REGULAR: '\ud83d\udc28', // U+1F428 KOALA
	FLAGS: '\ud83c\uddea\ud83c\uddea', // U+1F1EA U+1F1EA EE-FLAG
}

function detect(checkType = checkTypes.REGULAR) {
    if (detect.cache !== null) {
        return detect.cache
    }

    if (typeof window === 'undefined') {
        return false;
    }

    var node = window.document.createElement('canvas');
    var ctx = node.getContext('2d');
    if (!ctx) {
        return false;
    }
    var backingStoreRatio =
        ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio ||
        1;
    var offset = 12 * backingStoreRatio;

    ctx.fillStyle = '#f00';
    ctx.textBaseline = 'top';
    ctx.font = '32px Arial';
    ctx.fillText(checkType, 0, 0);

    var data = ctx.getImageData(offset, offset, 1, 1).data;
    var cumulativeScore = 0;
    for (let i = 0; i < data.length; i++) {
        cumulativeScore += data[i]
    }
    var support = cumulativeScore !== 0;

    detect.cache = support

    return support;
};

detect.cache = null;

module.exports = detect;
module.exports.DetectionTypes = checkTypes;
