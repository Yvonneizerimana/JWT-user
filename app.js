import dotenv from 'dotenv'
dotenv.config()

import mongoose from'mongoose'

import express_async_errors from 'express-async-errors'

import express from 'express'
const app = express()

import notFoundMiddleware from './middlewares/notFoundMiddleware.js'
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js'
import userRouter from "./routes/main.route.js"

app.use(express.json())

const url=process.env.MODULE_URI || "mongodb://localhost:27017/JWT"
mongoose.connect(url)
.then((err)=>{
    app.use("/api/user",userRouter)
    
//     app.use(notFoundMiddleware)
// app.use(errorHandlerMiddleware)

})
.catch(()=>{
    console.log("Error connecting to database")
})
const PORT=process.env.PORT || 8001
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})