'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f5720457.js');

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["card-component_2.cjs",[[1,"card-component",{"cardTitle":[1,"card-title"]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["rss-reader.cjs",[[1,"rss-reader"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
