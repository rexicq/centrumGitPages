import React from 'react';
import AppProvider from 'store/provider';
import wrapPageElementWithTransition from 'helpers/wrapPageElement';
require('typeface-oswald');
require('babel-polyfill');
require('typeface-eb-garamond');
// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

export const onClientEntry = async () => {
  await import('babel-polyfill');
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
  }
}

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;
