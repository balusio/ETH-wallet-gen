import express from 'express';
import router from '@routes';

const app = express();

app.use(express.json());
app.use(router());
app.listen(4200, () => {
  console.log('app is listening to port 4200');
});
