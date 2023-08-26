import { NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";    

connect()

export async function GET() {
    try {
        const response = NextResponse.json({message: 'LogOut Successful', success:true}, {status: 200})
        response.cookies.set('token', '', {
            httpOnly: true
        })

        return response

    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500});
    }
    
}