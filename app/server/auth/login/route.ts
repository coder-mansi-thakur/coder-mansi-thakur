import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel"; 
import bcrypt from "bcryptjs"    
import jwt from "jsonwebtoken"       


connect()

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const reqBody = await req.json();
        const {userName, password, email} = reqBody;

        const userData = email ? await User.findOne({email}) : await User.findOne({userName})
        if(!userData){
            return NextResponse.json({error: 'User not found'}, {status: 400})
        }
        const validPassword = await bcrypt.compare(password, userData.password);
        if(!validPassword){
            return NextResponse.json({error: 'Invalid Password'}, {status: 400})
        }

        const tokenData = {
            id: userData._id,
            username: userData.userName,
            email: userData.email,
            isVerified: userData.isVerified
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1h"})

        const response = NextResponse.json({message: 'User LoggedIn', success:true, data: tokenData, }, {status: 200})
        response.cookies.set('token', token, {
            httpOnly: true
        })

        return response

    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500});
    }
    
}