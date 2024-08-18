import dotenv from "dotenv"
import connectDB from "./db/index.js"
dotenv.config({ path: "./.env" })

connectDB()

// import express from "express"
// import mongoose from "mongoose"
// import { DB_NAME } from "./constants.js"
// import dotenv from "dotenv"
// dotenv.config({ path: "./.env" })

// const app = express()

// ;(async () => {
//   try {
//     console.log("MONGODB_URI", process.env.MONGODB_URI)

//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error", (error) => {
//       console.log("ERROR:", error)
//       throw error
//     })

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`)
//     })
//   } catch (error) {
//     console.error("ERROR:", error)
//     throw error
//   }
// })()
