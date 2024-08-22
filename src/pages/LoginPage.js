import React from "react";
import { SignIn } from "@clerk/clerk-react";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn path="/login" routing="path" />
    </div>
  );
}
