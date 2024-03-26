import mongoose from "mongoose";

let isConnected = false; // variable to check if mongoose is connected

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log("MONGODB_URL is not found");

    if(isConnected) return console.log("Already connected to MongoDB");

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error connecting to MongoDB", err);
    }
}