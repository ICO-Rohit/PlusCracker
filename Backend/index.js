import express from 'express';
import connectDb from './database/db.js';
import dotenv from "dotenv";
import cookieRoute from './routes/cookieRoute.js'
dotenv.config();
const app = express();
app.use(express.json());

app.use('/', cookieRoute);
// app.get('/9533', (req, res) => {
//     console.log('works');
// })
app.listen(3000, () => {
    console.log(`Server is running on http://localhost: 3000`);
    connectDb();
});