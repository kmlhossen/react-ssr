import express from 'express'
const router = express.Router();

import homePageHandler from '../pages/index';


router.get('/', function (req, res, next) {
    homePageHandler(req, res, next);
});

router.get('/home', function (req, res, next) {
    homePageHandler(req, res, next);
});



export default  (expressApp) => {
    expressApp.use('/', router);
};