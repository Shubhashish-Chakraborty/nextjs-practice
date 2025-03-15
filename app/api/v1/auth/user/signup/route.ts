import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient();

export const GET = () => {
    return NextResponse.json({
        message: "SignUp Endpoint is ALright!!!!!"
    })
}


export const POST = async (req: NextRequest) => {
    try {
        const data = await req.json();

        await prisma.user.create({ /// await is important
            data: {
                username: data.username,
                password: data.password
            }
        });

        return NextResponse.json({
            success: true,
            message: `${data.username} Signed Up Successfully`
        });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Signup Failed", E: error }, { status: 500 });
    }
};