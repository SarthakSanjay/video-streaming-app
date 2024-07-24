"use server"

import prisma from "@/db";

export async function signup(email: string, password: string) {
    // should add zod validation here
    const user = await prisma.user.create({
        data: {
            username: email.split('@')[0],
            email: email,
            password: password
        }
    });

    console.log(user);

    return "Signed up!"
}