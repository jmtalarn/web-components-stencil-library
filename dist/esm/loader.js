import { p as promiseResolve, b as bootstrapLazy } from './index-ed5cb505.js';

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["card-component_2",[[1,"card-component",{"cardTitle":[1,"card-title"]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["rss-reader",[[1,"rss-reader"]]]], options);
  });
};

export { defineCustomElements };
