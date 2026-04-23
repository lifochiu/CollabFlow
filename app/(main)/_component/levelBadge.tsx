import React, { useState } from "react";
import { rtdb } from "@/app/backend/firebase";
import { ref, update } from "firebase/database";
interface LevelBadgeProps {
  level: "High" | "Medium" | "Low";
  id: string;
}
export default function LevelBadge({ level, id }: LevelBadgeProps) {
  const colors = {
    High: "bg-red-900/20 text-red-700",
    Medium: "bg-yellow-900/20 text-yellow-700",
    Low: "bg-green-900/20 text-green-700",
  };
  const [isOpen, setIsOpen] = useState(false);
  const handleUpdate = async (newStatus: string) => {
    try {
      const taskRef = ref(rtdb, `tasks/${id}`);

      await update(taskRef, {
        priority: newStatus,
      });
      setIsOpen(false);

      console.log("Status updated successfully!");
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Update failed. Please try again.");
    }
  };
  return (
    <>
      <div
        className={`${colors[level] || colors.Low} w-18 text-center rounded-full ml-3 mt-3 mb-3 cursor-pointer`}
        onClick={() => setIsOpen(true)}
      >
        {level}
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 backdrop-blur-sm
          transition-opacity duration-300 animate-in fade-in"
          onClick={() => setIsOpen(false)}
        >
          {/* Window */}
          <div
            className="bg-white p-8 rounded-xl shadow-2xl  w-[400px] h-[200px] m-4
            animate-in zoom-in-95 slide-in-from-bottom-2 duration-300 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">Change Priority</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 flex flex-row items-center justify-center">
              <div
                className={`${colors.High} w-18 text-center rounded-full ml-3 mt-3 mb-3 cursor-pointer`}
                onClick={() => handleUpdate("High")}
              >
                High
              </div>
              <div
                className={`${colors.Medium} w-18 text-center rounded-full ml-3 mt-3 mb-3 cursor-pointer`}
                onClick={() => handleUpdate("Medium")}
              >
                Medium
              </div>
              <div
                className={`${colors.Low} w-18 text-center rounded-full ml-3 mt-3 mb-3 cursor-pointer`}
                onClick={() => handleUpdate("Low")}
              >
                Low
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
