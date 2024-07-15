import CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { signIn } from "next-auth/react";

export const NEXT_AUTH = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
          const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
  
          if (user) {
            return user;
          } else {
            return null;
          }
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID || '',
        clientSecret: process.env.GOOGLE_SECRET || ''
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID || '',
        clientSecret: process.env.GITHUB_SECRET || ''
      })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      // jwt: ({token, user}) =>{
      //     token.userId = token.sub
      //     console.log(token)
      //     return token
      // },
      session: ({ session, token, user }: any) => {
        if (session && session.user) {
          session.user.id = token.userId;
        }
        return session;
      },
    },
    pages: {
        signIn : '/signin'
    }
  }