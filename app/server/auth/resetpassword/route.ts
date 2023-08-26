import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel"; 
import { sendEmail } from "@/helpers/mailer";


connect()

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const reqBody = await req.json();
        const {token,email} = reqBody;
        let response;
        if(email){
            const userData = await User.findOne({email})
            await sendEmail({email,emailType: 'RESET', userId: userData._id})
            response = NextResponse.json({message: 'Password Reset Email Sent Successfully', success:true}, {status: 200})
        } else{
            const userData = await User.findOne({
                forgotPasswordToken: token
            })
            
            if(!userData){
                return NextResponse.json({error: 'Invalid Token'}, {status: 400})
            }
    
            if(new Date(`${userData.verifyTokenExpiry}`) < new Date()){
                return NextResponse.json({error: 'Token Expire'}, {status: 400})
            }
            userData.isVerified = true;
            userData.forgotPasswordToken = undefined;
            userData.forgotPasswordTokenExpiry = undefined;
    
            await userData.save()
            response = NextResponse.json({message: 'Password Reset token verified Successfully', success:true, email: userData.email}, {status: 200})
        }

        return response

    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500});
    }
    
}