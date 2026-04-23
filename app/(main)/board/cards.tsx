"use client";
import LevelBadge from "../_component/levelBadge";
import UserIcon from "../_component/user";
import React, { useState } from "react";
import StatusBadge from "../_component/statusBadge";
import DescriptionBox from "../board/descriptionBox";
import TitleBox from "../board/titleBox";
import ParticipantMember from "../board/participantMember";
type statusType = "To Do" | "In Progress" | "Done";
type PriorityLevel = "High" | "Medium" | "Low";
interface participants {
  userName: string;
  userColor: { backgroundColor: string };
}
interface CardProps {
  id: string;
  title: string;
  description: string;
  createUser: string;
  status: statusType;
  priority: PriorityLevel;
  participants: participants[];
  userColor: { backgroundColor: string };
}

export default function cards({
  id,
  title,
  description,
  createUser,
  status,
  priority,
  participants,
  userColor,
}: CardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="w-60 h-30 border border-b-black 
      rounded-md pl-5 pt-2 mb-5 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        onClick={() => setIsOpen(true)}
      >
        <p>{title}</p>
        <LevelBadge level={priority} id={id} />
        <div className="flex flex-row items-center justify-between mt-2">
          <UserIcon user={createUser} userColor={userColor} />
          <ParticipantMember participants={participants} />
        </div>
      </div>
      {isOpen && (
        //click outside to close
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm
          transition-opacity duration-300 animate-in fade-in"
          onClick={() => setIsOpen(false)}
        >
          {/* window */}
          <div
            className="bg-white p-8 rounded-xl shadow-2xl  w-200 h-200 m-4
            animate-in zoom-in-95 slide-in-from-bottom-2 duration-300 flex flex-col"
            onClick={(e) => e.stopPropagation()} //prevent click inside the window from closing
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">
                <TitleBox title={title} id={id} />
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 flex-1 flex flex-col overflow-y-auto">
              <div className="flex flex-row items-center">
                <span className="text-sm text-gray-500">Status: </span>
                <StatusBadge status={status} id={id} />
              </div>
              <div className="flex flex-row items-center">
                <span className="text-sm text-gray-500">Priority: </span>
                <LevelBadge level={priority} id={id} />
              </div>
              <div className="flex-1 overflow-y-auto">
                <span className="text-sm text-gray-500 ">Description: </span>
                <DescriptionBox
                  description={description}
                  id={id}
                  createUser={createUser}
                  participants={participants}
                />
              </div>
              {/* display creator */}
              <div className="pt-4 border-t flex items-center gap-3">
                <span className="text-sm text-gray-500">Creator: </span>
                <UserIcon user={createUser} userColor={userColor} />
              </div>
              {/* participants */}
              <div className="pt-4 border-t flex items-center gap-3">
                <span className="text-sm text-gray-500 mr-3">
                  Participants:{" "}
                </span>

                <ParticipantMember participants={participants} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
