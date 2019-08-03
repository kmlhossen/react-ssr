import path from 'path';

const homePageHandler = (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
}

export default homePageHandler;