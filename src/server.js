import express from 'express';
import mountRoute from './routes/index';

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack-config/dev.client.config';

const app = express();
mountRoute(app);
app.use(express.static('dist'));

if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath
    }));
    app.use(webpackHotMiddleware(compiler))
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});