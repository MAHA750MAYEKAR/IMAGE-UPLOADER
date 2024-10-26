import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

export default async function DBconnect() {
    try {
        await mongoose.connect(DB_URL)
        console.log('connected to database');
        

    }
    catch (err) {
        console.log(err);

    }

}