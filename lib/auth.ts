import NextAuth from "next-auth"
import Resend from "next-auth/providers/resend"
 import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "./mongodb-client"
export const { handlers, signIn, signOut, auth } = NextAuth({
 adapter: MongoDBAdapter(client),
 providers: [ 
  Resend({
 from: 'generate-invoice <onboarding@resend.dev>',
 })],
  pages : {
    error : "/login",
    verifyRequest : "/Verify-email",
    signIn : "/login"
  }
})