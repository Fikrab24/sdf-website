"use client";

import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const login = () => {
    if (user === "admin" && pass === "1234") {
      window.location.href = "/dashboard";
    } else {
      alert("Wrong login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-96 p-8 rounded-2xl bg-white/5 border border-white/10">
        <h1 className="text-3xl text-cyan-400 mb-6">
          Admin Login
        </h1>

        <input
          placeholder="Username"
          className="w-full p-3 rounded bg-black border border-white/10 mb-4"
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-black border border-white/10 mb-4"
          onChange={(e) => setPass(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-cyan-500 py-3 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}