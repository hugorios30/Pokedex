import mongoose from "mongoose";

const db = 'mongodb+srv://root:root123@pokedex.fulfdcn.mongodb.net/?retryWrites=true&w=majority';

mongoose.set("strictQuery", true,"useNewUrlParser", true);

const connectDB = async () => { 
    try {
        await mongoose.connect(db);
        console.log('MongoDB Pokedex is Connected');
    } catch (error) {
        console.error('Error on Database', error.message);
        process.exit(1);
    }
};

export default connectDB;