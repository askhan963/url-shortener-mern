
import mongoose, { Schema } from "mongoose";
import { nanoid } from "nanoid";
const urlSchema = new Schema({
    originalUrl: {
        type: String,
        require: true
    },
    shortUrl: {
        type: String,
        require: true,
        default: () => nanoid().substring(0,10)
    },
    clicks: {
        type: Number,
        default: 0
    }
},{
    timestamps: true
})

export const shortUrlModel = mongoose.model('shortUrl',urlSchema);