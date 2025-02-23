import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name : {
        type : String,
        trim : true,
        required : true,
    },

    email : {
        type : String,
        trim : true,
        required : true,
        unique : true
    },


    avtar: {
        type : String,
        trim : true
    },

    password: {
        type : String,
        trim : true
    },

})

const User = mongoose.model('User',userSchema)
export default User;