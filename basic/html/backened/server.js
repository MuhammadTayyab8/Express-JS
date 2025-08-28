// backend/server.js
import express from 'express';
import cors from 'cors';
import user from './routes/user.js'

const app = express();
app.use(cors());
app.use(express.json());



app.use('/user', user);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
