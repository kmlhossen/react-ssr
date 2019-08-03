import express from 'express';
import mountRoute from './routes/index';

const app = express();
app.use(express.static('dist'))

mountRoute(app);


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});