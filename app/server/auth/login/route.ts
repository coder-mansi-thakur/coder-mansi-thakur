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
            return NextResponse.json({error: 'User not found'}, {status: 404})
        }

        const validPassword = await bcrypt.compare(password, userData.password);
        if(!validPassword){
            return NextResponse.json({error: 'Invalid Password'}, {status: 401})
        }

        if(!userData.isVerified){
            return NextResponse.json({error: 'User not verified'}, {status: 401})
        }

        const tokenData = {
            userName: userData.userName,
            email: userData.email
        }

        const token = await jwt.sign(tokenData, null, {expiresIn: "1h", algorithm: "none"})

        const response = NextResponse.json({message: 'User LoggedIn', success:true, data: tokenData }, {status: 200})
        response.cookies.set('token', token, {
            httpOnly: true
        })

        return response

    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500});
    }
    
}