import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button className="inline-block rounded-lg bg-teal-500 px-5 py-3 text-sm font-medium text-white z-50" onClick={logout}>
        Sign out
      </button>
    )
  );
};

export default LogoutButton;
