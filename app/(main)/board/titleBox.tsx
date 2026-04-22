import React, { useState } from "react";
import { rtdb } from "@/app/backend/firebase";
import { ref, update } from "firebase/database";
interface titleBoxProps {
  title: string;
  id: string;
}

export default function titleBox({ title, id }: titleBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [newTitle, setNewTitle] = useState("");

  const handleUpdate = async (newTitle: string) => {
    try {
      const taskRef = ref(rtdb, `tasks/${id}`);

      await update(taskRef, {
        title: newTitle,
      });
      setIsOpen(false);

      console.log("Title updated successfully!");
    } catch (error) {
      console.error("Error updating title:", error);
      alert("Update failed. Please try again.");
    }
  };
  return (
    <>
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <p>{title}</p>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 backdrop-blur-sm
              transition-opacity duration-300 animate-in fade-in"
          onClick={() => setIsOpen(false)} // 點擊背景空白處關閉
        >
          {/* 視窗本體 */}
          <div
            className="bg-white p-8 rounded-xl shadow-2xl  w-[400px] h-[400px] m-4
                animate-in zoom-in-95 slide-in-from-bottom-2 duration-300 flex flex-col"
            onClick={(e) => e.stopPropagation()} // 防止點擊視窗內部也觸發關閉
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">Change Title</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate(newTitle);
              }}
            >
              <div className="flex flex-col ">
                <textarea
                  defaultValue={title}
                  className="text-base border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <button
                  type="submit"
                  className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
