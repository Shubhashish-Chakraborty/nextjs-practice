import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json({
        message: "SignUp Endpoint is ALright!!!!!"
    })
}