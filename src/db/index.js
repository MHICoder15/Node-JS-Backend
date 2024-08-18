import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
  try {
    const mongooseInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    )
    console.log(
      `\nMongoDB Connected!! DB HOST: ${mongooseInstance.connection.host}`
    )
  } catch (error) {
    console.log("MongoDB Connection Failed:", error)
    process.exit(1)
  }
}

export default connectDB
