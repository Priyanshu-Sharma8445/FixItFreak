import mongoose from "mongoose";

const connectdb= async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{dbName:'FixItFreak'})
        .then(
            console.log("Database connected.")
        )
    } catch (error) {
        console.log('Error in connecting databse : ',error);
    }
}

export default connectdb;