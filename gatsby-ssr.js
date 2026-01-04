import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager  } from 'styled-components';
import AppProvider from 'store/provider';
import wrapPageElementWithTransition from 'helpers/wrapPageElement';

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  // React Context in SSR/build
  const sheet = new ServerStyleSheet();
  const ConnectedBody = () => <AppProvider>
  <StyleSheetManager sheet={sheet.instance}>{bodyComponent}</StyleSheetManager></AppProvider>;
  replaceBodyHTMLString(renderToString(<ConnectedBody />));

  // Add styled-components in SSR/build
  // renderToString(sheet.collectStyles(<ConnectedBody />));
  const styleElement = sheet.getStyleElement();
  setHeadComponents(sheet.getStyleElement());
};

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;
