import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel";
import bcryptjs from "bcryptjs";
import {sendEmail} from '@/helpers/mailer'


connect()

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        
        const {userName, password, email} = reqBody;

        const userData = await User.findOne({email})
        if(userData){
            return NextResponse.json({error: 'User already exists'}, {status: 400})
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password, salt)
        const newUser = new User({
            userName,
            email,
            password: hashPassword
        })

        const savedUser = await newUser.save()

        await sendEmail({email, emailType: 'VERIFY', userId: savedUser._id})

        return NextResponse.json({message: 'User created successfully', success:true, email}, {status: 200})

    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500});
    }
    
}