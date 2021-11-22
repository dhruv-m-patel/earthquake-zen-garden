import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import { StaticRouter } from 'react-router-dom';
import { ChunkExtractor } from '@loadable/server';
import ReduxStateDecorator from '../../client/redux/StateDecorator';
import { DEFAULT_STATE } from '../../client/redux/reducers';
import Router from '../../common/router';

export default function renderPage(req, res) {
  const statsFile = path.join(
    process.cwd(),
    './build-static/loadable-stats.json'
  );
  const extractor = new ChunkExtractor({
    statsFile,
    entrypoints: ['client'],
    publicPath: '/',
  });

  const context = {};
  if (context.url) {
    res.redirect(context.url);
    return;
  }

  const preloadedState = req.initialState || DEFAULT_STATE;

  const application = extractor.collectChunks(
    <StaticRouter location={req.url} context={context}>
      <ReduxStateDecorator initialState={preloadedState}>
        <Router />
      </ReduxStateDecorator>
    </StaticRouter>
  );
  const html = ReactDOMServer.renderToString(application);

  res.send(`
      <!DOCTYPE html>
      <html lang="en-US">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" priority="1" />
          <meta name="ie-compat" content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
          <title>Earthquake Zen Garden</title>
          ${extractor.getLinkTags()}
          <script id="stateData">window.__PRELOADED_STATE__ = ${JSON.stringify(
            preloadedState
          ).replace(/</g, '\\u003c')};</script>
          ${extractor.getStyleTags()}
        </head>
        <body>
          <div id="root">${html}</div>
          ${extractor.getScriptTags()}
        </body>
      </html>
    `);
}
