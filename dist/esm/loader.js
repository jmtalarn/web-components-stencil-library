import { p as promiseResolve, b as bootstrapLazy } from './index-b51d5781.js';

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["card-component_3",[[1,"card-component",{"cardTitle":[1,"card-title"]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"rss-reader",{"url":[1],"name":[1],"count":[2],"articleWidth":[1,"article-width"],"display":[1],"articleStyle":[1,"article-style"],"articleExcerptHeight":[1,"article-excerpt-height"],"readMore":[1,"read-more"]}]]]], options);
  });
};

export { defineCustomElements };
