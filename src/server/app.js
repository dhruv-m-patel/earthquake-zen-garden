import path from 'path';
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import enrouten from 'express-enrouten';
import 'fetch-everywhere';
import renderPage from './middleware/renderPage';

function finalErrorHandler(err, req, res, next) {
  if (err) {
    if (!err.status) {
      console.error(err.message, err.stack);
    }
    res
      .status(Number(err.response?.status || err.status) || 500)
      .json(err.response ? err.response.data : { message: err.message });
  } else {
    next();
  }
}

const app = express();

app.disable('x-powered-by');
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(morgan('combined'));
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../../static')));
app.use(express.static(path.resolve(__dirname, '../../build-static')));

const config = require(path.resolve(__dirname, '../../webpack.config.js'));

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  app.use(
    WebpackDevMiddleware(compiler, {
      stats: { colors: true },
      publicPath: config.output.publicPath,
    })
  );
  app.use(WebpackHotMiddleware(compiler));
} else {
  // If running in non-development mode, expose the public path as static
  app.use(express.static(config.output.path));
}

// Support directory-based routing by default
app.use(
  enrouten({
    directory: path.resolve(__dirname, './routes'),
  })
);

app.use('*', renderPage);

// Add final error handler for api endpoints
app.use(finalErrorHandler);

export default app;
