const environment = (process.env.NODE_ENV || 'development').trim();

if (environment === 'production') {
    console.log('********** In PROD ***********');
    // TOOD
} else {
    console.log('********** In DEV ***********');
    module.exports = [
      require('./webpack-config/dev.server.config'),
      require('./webpack-config/dev.client.config')
    ];
}