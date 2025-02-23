import { handleError } from "../helper/handelError.js";
import User from "../models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const Register = async (req , res , next) => {
    try {
        const {username,email,password} = req.body
        const checkuser = await User.findOne({ email })
        
        if(checkuser)
        {
            // Throw error that other user exist with same email

            return next(handleError(409,'User already registerd with this email.')); //This next will directly call tha middleware in index.js
        }
        //else create user

        //hashing the password comes in req.body
        const hashedPassword = await bcrypt.hash(password,10);

        //now creating the user 
        await User.create({
            name : username,
            email,
            password : hashedPassword
        })

        //Now user is created successfully hence sending res
        return res.status(200).json({
            message : 'User Created successfully',
            success  : true
        })

    } catch (error) {
        console.log('Error in Register api controller : ',error);
        // next(handleError(500,error.message));
    }
}

export const Login = async (req , res , next) => {
    try {
        const {email , password} = req.body;

        const user = await User.findOne({ email });
        //First checking for user is present or not with same email
        if(!user) 
        {
            return next(handleError(550,'Useremail or Password is incorrect'));
        } 

        //else 
        //now check for correct password

        const checkPass =  bcrypt.compare(user.password , password);

        if(!checkPass)
        {
            return next(handleError(550,'Useremail or Password is incorrect'));
        }

        //now user's password is correct
        //first create a jwt token and save in a cookie

        const token =  jwt.sign({
            _id : user.id,
            name : user.name,
            email : user.email,
            avtar : user.avtar,
        },process.env.JWT_SECRET);

        //now save that token in form or using cookie
        
        res.cookie('access_token',token,{
            httpOnly: true,
            secure : process.env.NODE_ENV === 'production',
            sameSite : process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            path : '/'
        })


        //There is a problem if i will directly send user to frontend then password will  be visible to remove that either create a new user or delete password field from same user
        const newuser = user.toObject();
        delete newuser.password;
        //now send success
        res.status(200).json({
            message : 'user logged in succesfully',
            success : true,
            user : newuser
        })

    } catch (error) {
        return next(handleError(500,error.message));
    }
}


export const googleLogin = async (req,res,next)=>{
    try {
        
        const {name , email , avtar} = req.body;

        let user = await User.findOne({email});
        if(!user)
        {
            //will create user
            const password = await bcrypt.hash(Date.now().toString(), 10);
            user = await User.create({
                name , email , password,avtar
            })
        }

        //then set up token and cookie
        const token = jwt.sign({
            _id : user.id,
            name:user.name,
            email:user.email,
            avtar:user.avtar
        },process.env.JWT_SECRET);

        res.cookie('access_token',token,{
            httpOnly:true,
            secure : process.env.NODE_ENV==='production',
            sameSite : process.env.NODE_ENV === 'production'?'none':'strict',
            path:'/'
        });

        const newuser = user.toObject();
        delete newuser.password;

        res.status(200).json({
            message:'User logged in successfully',
            success : true,
            user : newuser
        })

    } catch (error) {
        return next(handleError(500,error.message))
    }
}




export const Logout = async (req , res) => {
    try {
        
        res.clearCookie('access_token',{
            httpOnly:true,
            secure: process.env.NODE_ENV==='production'?true:false,
            sameSite : process.env.NODE_ENV === 'production'?'none':'strict',
            path : '/'
        })

        res.status(200).json({
            success:true,
            message:'User logged-out'
        })

    } catch (error) {
        console.log('Error in Logout api controller : ',error);
    }
}