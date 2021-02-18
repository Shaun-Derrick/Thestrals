// SETUP MONGO/MONGOOSE
const mongoose = require("mongoose")

const url = process.env.MONGO_CONNECTION_URL
if (url === undefined || url === null || url.length === 0) {
  throw new Error(
    "Required environment variable MONGO_CONNECTION_URL is not set!"
  )
}

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.once("open", (_) => console.log("MongoDB is now connected: ", url))
db.on("error", (err) => console.error("MongoDB connection error!", err))

module.exports = mongoose
