"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { onValue, ref, set } from "firebase/database";
import { rtdb } from "@/app/backend/firebase";

interface participants {
  userName: string;
  userColor: { backgroundColor: string };
}

interface Task {
  id: string;
  title: string;
  description: string;
  createUser: string;
  status: "To Do" | "In Progress" | "Done";
  priority: "High" | "Medium" | "Low";
  participants: participants[];
  userColor: { backgroundColor: string };
}

interface TaskContextType {
  todoTasks: Task[];
  inProgressTasks: Task[];
  doneTasks: Task[];
  loading: boolean;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [todoTasks, setTodoTasks] = useState<Task[]>([]);
  const [inProgressTasks, setInProgressTasks] = useState<Task[]>([]);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tasksRef = ref(rtdb, "tasks");
    const unsubscribe = onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const allTasks: Task[] = Object.entries(data).map(([id, value]) => ({
          ...(value as any),
          id,
        }));

        setTodoTasks(allTasks.filter((t) => t.status === "To Do"));
        setInProgressTasks(allTasks.filter((t) => t.status === "In Progress"));
        setDoneTasks(allTasks.filter((t) => t.status === "Done"));
        console.log("inside", todoTasks);
      } else {
        console.log("No task available");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  console.log("final", todoTasks);

  return (
    <TaskContext.Provider
      value={{ todoTasks, inProgressTasks, doneTasks, loading }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
