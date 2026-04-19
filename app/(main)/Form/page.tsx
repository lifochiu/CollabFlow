"use client";
import React, { useState } from "react";
import { createTask } from "@/app/(main)/action";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Handle form submission logic here
    e.preventDefault();
    if (title.trim() === "" && description.trim() === "") {
      alert("Please fill in all fields.");
    } else {
      createTask(title, description);
      setTitle("");
      setDescription("");
      router.push("/board");
    }
  };

  return (
    <div className="flex items-center justify-center m-10">
      <div className="p-4 w-lg border border-gray-800 rounded flex-col ">
        <h2 className="text-2xl font-bold mb-4">Create New Task</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Enter title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Enter description"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-120"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
