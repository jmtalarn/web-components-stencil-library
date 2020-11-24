'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0d4ae52c.js');

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["card-component_3.cjs",[[1,"card-component",{"cardTitle":[1,"card-title"]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"rss-reader",{"url":[1],"name":[1],"count":[2]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
