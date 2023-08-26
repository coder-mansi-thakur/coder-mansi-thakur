import User from '@/models/userModel'
import bcryptjs from 'bcryptjs';
import transport from '@/mailConfig/mailConfig'
import { toast } from 'react-hot-toast';

export const sendEmail = async ({email, emailType, userId}: any) => {
    try {
        const hashedUserId = await bcryptjs.hash(userId.toString(),10);
        const mailOptions = {
            from: process.env.MAIL_FROM_EMAIL,
            to: email,
            subject: '',
            html: ''
        }
        
        if(emailType === 'VERIFY'){
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedUserId,
                verifyTokenExpiry: Date.now() + 3600000
            })
            mailOptions.subject = 'Verify Email'
            mailOptions.html = `<p>Click <a href="${process.env.domain}/verifyemail?token=${hashedUserId}"> here </a> to verify your email.</p>`
        } else if(emailType === 'RESET'){
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedUserId,
                forgotPasswordTokenExpiry: Date.now() + 3600000
            })
            mailOptions.subject = 'Reset Password'
            mailOptions.html = `<p>Click <a href="${process.env.domain}/resetpassword?token=${hashedUserId}"> here </a> to reset your password.</p>`
        }
        await transport.sendMail(mailOptions)

    } catch (error) {
        console.log(error)
    }
}