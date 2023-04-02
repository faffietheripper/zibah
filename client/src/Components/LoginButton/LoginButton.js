import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="inline-block rounded-lg bg-teal-500 px-5 py-3 text-sm font-medium text-white" onClick={loginWithRedirect}>Log In</button>;
};

export default LoginButton;
