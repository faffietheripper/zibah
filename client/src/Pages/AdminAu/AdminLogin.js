import React from "react";
import LoginButton from "../../Components/LoginButton/LoginButton";


export default function AdminLogin() {
  return (
    <div>
      <section className="flex flex-col lg:h-screen lg:items-center justify-center">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Hey there Ruth!</h1>
          <p className="mt-4 text-gray-500">Welcome to the Zibah Creations Administration Page. </p>
        </div>
        <div className="p-8">
          <LoginButton />
        </div>
      </section>
    </div>
  );
}
