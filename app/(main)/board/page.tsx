"use client";
import React, { useState, useEffect } from "react";
import Card from "@/app/(main)/board/tasks";
import { rtdb } from "@/app/backend/firebase";
import { ref, onValue, set } from "firebase/database";
type PriorityLevel = "High" | "Medium" | "Low";

interface Task {
  id: string;
  title: string;
  description: string;
  createUser: string;
  status: string;
  priority: PriorityLevel;
  participants: string;
  userColor: { backgroundColor: string };
}

export default function Board() {
  const [todoTasks, setTodoTasks] = useState<Task[]>([]);
  const [inProgressTasks, setInProgressTasks] = useState<Task[]>([]);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);

  //update tasks state when there is any change in the database
  //and separate tasks into different lists based on their status
  useEffect(() => {
    const tasksRef = ref(rtdb, "tasks");
    const unsubscribe = onValue(tasksRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log(Object.entries(data));
        const allTasks = Object.entries(data).map(
          ([id, value]) =>
            ({
              ...(value as any),
              id,
            }) as Task,
        );
        setTodoTasks(allTasks.filter((t) => t.status === "To Do"));
        setInProgressTasks(allTasks.filter((t) => t.status === "In Progress"));
        setDoneTasks(allTasks.filter((t) => t.status === "Done"));
      } else {
        console.log("No task available");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  function test() {
    console.log("To Do Tasks:", todoTasks);
    console.log("In Progress Tasks:", inProgressTasks);
    console.log("Done Tasks:", doneTasks);
    // console.log(createUser);
  }

  return (
    <div className="flex flex-row justify-center mt-10 gap-x-8">
      <button onClick={test}>test</button>
      <div>
        <p className="mb-5 font-bold text-xl text-center">To Do</p>
        {todoTasks.map((task) => (
          <Card
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
