import mongoose from "mongoose";

async function connectDatabase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING)

    return mongoose.connection
}


export default connectDatabase


//mongodb+srv://admin:<password>@cluster0.ayg7vgx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0