const express = require('express');
const app = express();
const userRouter = require('./app/routers/user.routers.js');

app.use(express.json());
app.use('/api', userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000 - http://localhost:3000/');
});