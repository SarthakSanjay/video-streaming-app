import NextAuth from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
const handler = NextAuth({
    providers:[ 
        CredentialsProvider({
            name:"Credentials",
             credentials:{
                email:{label:"email",type:"text",placeholder:'email'},
                password:{label:"password",type:"password",placeholder:'password'}
             },
             async authorize(credentials:any){
                return {
                    id: 'user1 '
                }
             }
        })
    ]
})

export const GET = handler
export const POST = handler