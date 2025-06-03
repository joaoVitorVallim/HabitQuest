const express = require('express');
const connectDB = require('./db');

const userRoutes = require('./routes/userRoute');
//const { checkToken } = require('./middlewares/authMiddleware');

require('dotenv').config();
//connectDB();

const app = express();
app.use(express.json());



app.use('/user', userRoutes);
//app.use('/user', checkToken, userRoutes);




const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
