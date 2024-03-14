
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import morgan from 'morgan'
import authRoutes from './routes/authRoute.js'

const app=express()

//confing .env
dotenv.config()

//database config
connectDB()

//middlewear
app.use(express.json())
app.use(morgan("dev"))

//routes
app.use('/api/v1/auth',authRoutes)


app.get("/",(req,res)=>{
    res.send('<h1>welcome in restart page</h1>')
})
const port= 5000;
const restart=process.env.RESTART;

app.listen(port,()=>{
    console.log(`${port} welcome back ${restart}`)
})