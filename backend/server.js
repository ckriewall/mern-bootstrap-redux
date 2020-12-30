import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import colors from 'colors'

import connectDB from './config/db.js'
import studentRoutes from './routes/studentRoutes.js'

// Load environment variables
dotenv.config()

// Create the Express app
const app = express()

// Connect to Mongoose
connectDB()

// Log API Requests to Console
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Handle Routes
app.use('/api/students', studentRoutes)

// Listen for Connections
const port = process.env.PORT || 5000
app.listen(process.env.PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow
  )
})
