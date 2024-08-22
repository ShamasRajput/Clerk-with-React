import React from "react";
import { Link } from "react-router-dom";
import { useAuth, UserButton, useClerk } from "@clerk/clerk-react";

export default function Navbar() {
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk(); // Import signOut function from useClerk

  const handleSignOut = () => {
    signOut(); // Call signOut function when the user clicks "Log Out"
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        {isSignedIn ? (
          <li>
            <button onClick={handleSignOut} className="text-red-500">
              Log Out
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        {isSignedIn && (
          <li>
            <UserButton />
          </li>
        )}
      </ul>
    </nav>
  );
}
