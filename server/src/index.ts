import express from "express";
import dotenv from 'dotenv'
import dbConnect from "./config/dbConfig";
import cors from "cors";
import shortUrl from './routes/shortUrl'

dotenv.config();
const PORT = process.env.PORT || 5555;
dbConnect();
// Middlewares
const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors({
    origin: "https://url-shortener-askhan.netlify.app",
    credentials: true
}))

app.use("/api/",shortUrl)

app.listen(5555,()=>{
    console.log("Server Listening on PORT 5555");
})