import NextAuth from "next-auth"
 import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "./mongodb-client"
export const { handlers, signIn, signOut, auth } = NextAuth({
 adapter: MongoDBAdapter(client),
  providers: [],
  pages : {
    error : "/login",
    verifyRequest : "/Verify-email",
    signIn : "/login"
  }
})