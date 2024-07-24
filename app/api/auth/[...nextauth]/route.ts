import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "next-runtime-env";
import { JWT } from "next-auth/jwt";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("No credentials provided");
        }

        const loginUrl = `${env("NEXT_PUBLIC_BASE_URL")}auth/login/`;
        const res = await fetch(loginUrl, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        if (res.status===200) {
          const jsonResponse = await res.json();
          console.log(jsonResponse);
          if (jsonResponse.token) {
            return jsonResponse;
          } else {
            throw new Error(jsonResponse.message);
          }
        } else {
          const errorResponse = await res.json();
          throw new Error(errorResponse.message || res.statusText);
        }
      },
    }),
  ],
  pages: {
    signIn: "/signup",
    signOut: "/",
  },
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user = session.user || { token: "", id: "" };
        session.user.token = token.accessToken as string;
        session.user.username = token.username as string;
        session.user.role = token.role as string;
        session.user.email = token.email as string;
        session.user.user_id = token.id as string;
      }
      return session;
    },
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
