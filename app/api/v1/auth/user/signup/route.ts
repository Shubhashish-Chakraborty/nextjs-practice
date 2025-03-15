import { NextRequest, NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json({
        message: "SignUp Endpoint is ALright!!!!!"
    })
}

export const POST = async (req:NextRequest) => {

    const body = await req.json();

    return NextResponse.json({message: "okay"})
} 