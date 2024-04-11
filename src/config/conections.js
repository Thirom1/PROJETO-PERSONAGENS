import mongoose from "mongoose";

async function conectaDataBase() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.ywqjws5.mongodb.net/PersonagensDatabase?retryWrites=true&w=majority")
    return mongoose.connection
}

export default conectaDataBase