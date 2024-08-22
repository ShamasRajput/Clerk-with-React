import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import LoginCallback from "./pages/LoginCallback";
import ProtectedRoute from "./components/ProtectedRoute";
import FactorOnePage from "./pages/FactorOnePage";
import FactorTwoPage from "./pages/FactorTwoPage";

const publishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API

function App() {
  return (
    <ClerkProvider frontendApi={frontendApi} publishableKey={publishableKey}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/factor-one" element={<FactorOnePage />} />
          <Route path="/login/factor-two" element={<FactorTwoPage />} />
          <Route path="/login/sso-callback" element={<LoginCallback />} />
          <Route path="/" element={<ProtectedRoute component={HomePage} />} />
        </Routes>
      </Router>
    </ClerkProvider>
  );
}

export default App;
