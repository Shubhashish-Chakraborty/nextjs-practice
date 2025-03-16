import { NextResponse } from "next/server";
import prisma from "../db";


export const GET = async () => {
    const data = await prisma.user.findMany();

    return NextResponse.json(data);
}