"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginAuthNext = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log(session);

  if (status === "loading") {
    return <p>Authenticating...</p>;
  }

  if (session) {
    router.push("/dashboard/plots");
  }

  const signInWithGoogle = () => {
    signIn("google");
  };

  return (
    <div>
      <p>Please sign in</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default LoginAuthNext;
