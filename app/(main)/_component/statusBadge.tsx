import React, { useState } from "react";
import { rtdb } from "@/app/backend/firebase";
import { ref, update } from "firebase/database";
interface statusBadgeProps {
  status: "To Do" | "In Progress" | "Done";
  id: string;
}
const colors = {
  "To Do": "bg-gray-900/20 text-gray-700",
  "In Progress": "bg-blue-900/20 text-blue-700",
  Done: "bg-green-900/20 text-green-700",
};
export default function StatusBadge({ status, id }: statusBadgeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleUpdate = async (newStatus: string) => {
    try {
      const taskRef = ref(rtdb, `tasks/${id}`);

      await update(taskRef, {
        status: newStatus,
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
        className={`w-30 ml-3 mt-3 mb-3 text-center rounded-full ${colors[status]} cursor-pointer`}
        onClick={() => setIsOpen(true)}
      >
        {status}
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 backdrop-blur-sm
          transition-opacity duration-300 animate-in fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white p-8 rounded-xl shadow-2xl  w-[400px] h-[200px] m-4
            animate-in zoom-in-95 slide-in-from-bottom-2 duration-300 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">Change Status</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 flex flex-row items-center justify-center">
              <div
                className={`${colors["To Do"]} w-30 text-center rounded-full ml-3 mt-3 mb-3 cursor-pointer`}
                onClick={() => handleUpdate("To Do")}
              >
                To Do
              </div>
              <div
                className={`${colors["In Progress"]} w-30 text-center rounded-full ml-3 mt-3 mb-3 cursor-pointer`}
                onClick={() => handleUpdate("In Progress")}
              >
                In Progress
              </div>
              <div
                className={`${colors.Done} w-30 text-center rounded-full ml-3 mt-3 mb-3 cursor-pointer`}
                onClick={() => handleUpdate("Done")}
              >
                Done
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
