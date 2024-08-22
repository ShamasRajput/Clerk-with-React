import React from "react";
import { SignIn } from "@clerk/clerk-react";

function FactorOnePage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <SignIn path="/login" routing="path" signUpUrl="/signup" />
    </div>
  );
}

export default FactorOnePage;
