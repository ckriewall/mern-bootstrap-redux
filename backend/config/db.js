import mongoose from 'mongoose'
import colors from 'colors'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, options)
    console.log(`MongoDB Connected: ${conn.connection.host}`.blue.underline)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export default connectDB
