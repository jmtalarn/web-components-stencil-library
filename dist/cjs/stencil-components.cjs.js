'use strict';

const index = require('./index-0d4ae52c.js');

/*
 Stencil Client Patch Browser v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stencil-components.cjs.js', document.baseURI).href));
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["card-component_3.cjs",[[1,"card-component",{"cardTitle":[1,"card-title"]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"rss-reader",{"url":[1],"name":[1],"count":[2]}]]]], options);
});
