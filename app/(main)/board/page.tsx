"use client";
import React, { useState, useEffect } from "react";
import Card from "@/app/(main)/board/cards";
import { rtdb } from "@/app/backend/firebase";
import { ref, onValue, set } from "firebase/database";
import { useTasks } from "../_component/taskProvider";

export default function Board() {
  const { todoTasks, inProgressTasks, doneTasks } = useTasks();
  return (
    <div className="flex flex-row justify-center mt-10 gap-x-8">
      <div>
        <p className="mb-5 font-bold text-xl text-center">To Do</p>
        {todoTasks.map((task) => (
          <Card
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            createUser={task.createUser}
            status={task.status}
            priority={task.priority}
            participants={task.participants}
            userColor={task.userColor}
          />
        ))}
      </div>
      <div>
        <p className="mb-5 font-bold text-xl text-center">In Progress</p>
        {inProgressTasks.map((task) => (
          <Card
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            createUser={task.createUser}
            status={task.status}
            priority={task.priority}
            participants={task.participants}
            userColor={task.userColor}
          />
        ))}
      </div>
      <div>
        <p className="mb-5 font-bold text-xl text-center">Done</p>
        {doneTasks.map((task) => (
          <Card
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            createUser={task.createUser}
            status={task.status}
            priority={task.priority}
            participants={task.participants}
            userColor={task.userColor}
          />
        ))}
      </div>
    </div>
  );
}
