import mongoose from 'mongoose';
export const dbConnection = () => {
    mongoose
    .connect(process.env.MONGO_URI, {
        dbName: "Restaurant",

    }) 
    .then(() => {
        console.log("Database Connected Successfully!");
    }).catch(err=>{
        console.log("Database Connection Failed!", err);
    })
}