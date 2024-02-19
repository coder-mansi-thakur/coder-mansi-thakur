import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel"; 


connect()

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const reqBody = await req.json();
        const {token} = reqBody;
        
        const userData = await User.findOne({
            verifyToken: token
        })
        
        if(!userData){
            return NextResponse.json({error: 'Invalid Token'}, {status: 401})
        }

        if(new Date(`${userData.verifyTokenExpiry}`) < new Date()){
            return NextResponse.json({error: 'Token Expire'}, {status: 401})
        }

        userData.isVerified = true;
        userData.verifyToken = undefined;
        userData.verifyTokenExpiry = undefined;

        await userData.save()
        const response = NextResponse.json({message: 'User Verified', success:true}, {status: 200})

        return response

    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500});
    }
    
}