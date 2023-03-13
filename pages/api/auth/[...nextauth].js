import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "798807471924-4a6q3iujq32q6uoi77fg0kkea0duou93.apps.googleusercontent.com",
      clientSecret: "GOCSPX - RgZUCLcEZvE7rSF - rzZROWVqUO1f",
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;

      return session;
    },
  },
};

export default NextAuth(authOptions);
