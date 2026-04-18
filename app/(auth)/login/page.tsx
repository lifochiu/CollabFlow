"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginAction } from "./action";

export default function Login() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Handle form submission logic here
    e.preventDefault();
    if (userName.trim() === "") {
      // || password.trim() === ""
      alert("Please fill in all fields.");
    } else {
      // alert(`Username: ${userName}\nPassword: ${password}`);
      await LoginAction(userName); // , password
      setUserName("");
      // setPassword("");
      router.push("/board");
    }
  };

  return (
    <div className="flex items-center justify-center m-10">
      <div className="p-4 w-lg border border-gray-800 rounded flex-col ">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            {/* <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Enter password"
            /> */}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-120"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
