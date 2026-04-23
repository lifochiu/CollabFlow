import React, { useState } from "react";
import { rtdb } from "@/app/backend/firebase";
import { ref, update } from "firebase/database";
import {
  getGlobalUserName,
  getGlobalUserColor,
} from "@/app/(auth)/login/action";
interface participants {
  userName: string;
  userColor: { backgroundColor: string };
}
interface DescriptionBoxProps {
  description: string;
  id: string;
  createUser: string;
  participants: participants[];
}
export default function DescriptionBox({
  description,
  id,
  createUser,
  participants,
}: DescriptionBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [getParticipants, setParticipants] = useState([]);
  const [newDescription, setNewDescription] = useState("");

  const handleUpdate = async (newDesc: string) => {
    try {
      const taskRef = ref(rtdb, `tasks/${id}`);

      await update(taskRef, {
        description: newDesc,
      });
      if ((await getGlobalUserName()) != createUser) {
        await update(taskRef, {
          participants: [
            ...participants,
            {
              userName: await getGlobalUserName(),
              userColor: await getGlobalUserColor(),
            },
          ],
        });
      }
      setIsOpen(false);

      console.log("Description updated successfully!");
    } catch (error) {
      console.error("Error updating description:", error);
      alert("Update failed. Please try again.");
    }
  };

  return (
    <>
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <p>{description}</p>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 backdrop-blur-sm
          transition-opacity duration-300 animate-in fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white p-8 rounded-xl shadow-2xl  w-[400px] h-[400px] m-4
            animate-in zoom-in-95 slide-in-from-bottom-2 duration-300 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">Change Description</h2>
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
                handleUpdate(newDescription);
              }}
            >
              <div className="flex flex-col ">
                <textarea
                  defaultValue={description}
                  className=" border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setNewDescription(e.target.value)}
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
