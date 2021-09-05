# detect-emoji-support
Detect support for emoji character sets.

```js
const emojiSupport = require('detect-emoji-support');

if (emojiSupport()) {
    console.log('☕');
}
```

Detects support for flags specifically, if certain system (Windows 10/11) allows for emojis but not flags.  


```js
import emojiSupport, {DetectionTypes} from 'detect-emoji-support';

if (emojiSupport(DetectionTypes.FLAGS)) {
    console.log('🇪🇪');
}
```

Detection code ported from the Modernizr library into a stand-alone package.
https://github.com/Modernizr/Modernizr/blob/master/feature-detects/emoji.js
