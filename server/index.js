import express from 'express'
import  dotenv  from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import connectdb from './config/db.js';
import authRoute from './routes/Auth.route.js';
dotenv.config();
const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true,
}))


//Routes Setup

app.use('/api/auth',authRoute)




const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server run at port no : ${PORT}`)
    connectdb();
})


app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';

    return res.status(statusCode).json({
        success : false,
        statusCode,
        message

    })
})