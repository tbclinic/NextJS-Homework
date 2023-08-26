import NextAuth from 'next-auth/next'
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/mongodb"
import GitHubProvider from 'next-auth/providers/github'

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: {
    jwt: true
  },
    jwt: {
      secret: 'dsadaskdsod',
  },
  callback: {
    async jwt({ token, user }) {
      if(user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id
      return session
    },
  },
})