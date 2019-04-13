import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import NoticeController from './controllers/NoticeController';

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cors());
app.options('*', cors());

app.use('/notice', NoticeController);

app.listen(7000, () => console.log('app is running on port 7000'));
