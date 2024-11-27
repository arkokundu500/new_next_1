import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.once('connected',() => {
            console.log("Database connected successfully");
        })

        connection.on('error',(err) => {
            console.log("An error has occured with the database connection"+ err);
            process.exit();
        })
    }
    catch(error){
        console.log("Something goes wrong with the database connection");
        console.log(error);
    }
}