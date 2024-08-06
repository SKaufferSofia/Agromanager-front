import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import { GOOGLE_ID, GOOGLE_SECRET, NEXTAUTH_SECRET } from "@/lib/server/envs";

const handler = NextAuth({
  providers: [
    Google({
      clientId: GOOGLE_ID || "",
      clientSecret: GOOGLE_SECRET || "",
    }),
  ],
  secret: NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }: any) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
