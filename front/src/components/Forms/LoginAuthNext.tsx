"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@material-tailwind/react";
import { getToken } from "next-auth/jwt";

const LoginAuthNext = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

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
      <Button
        size="sm"
        variant="outlined"
        className="flex items-center gap-3 text-textColor border border-textGreen hover:text-gray-900"
        onClick={signInWithGoogle}
      >
        <img
          src="https://docs.material-tailwind.com/icons/google.svg"
          alt="metamask"
          className="h-6 w-6"
        />
        Continue con Google
      </Button>
      {/* <button onClick={signInWithGoogle}>Iniciar sessión con Google</button> */}
    </div>
  );
};

export default LoginAuthNext;
