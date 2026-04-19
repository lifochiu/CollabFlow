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

// 定義任務的型別 (根據你目前的資料結構)
interface Task {
  id: string;
  title: string;
  description: string;
  createUser: string;
  status: "To Do" | "In Progress" | "Done";
  priority: "High" | "Medium" | "Low";
  participants: string;
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
        console.log("即時收到資料：", data);
        // 將 Firebase 物件轉換為陣列
        const allTasks: Task[] = Object.entries(data).map(([id, value]) => ({
          ...(value as any),
          id,
        }));

        // 根據狀態分類
        setTodoTasks(allTasks.filter((t) => t.status === "To Do"));
        setInProgressTasks(allTasks.filter((t) => t.status === "In Progress"));
        setDoneTasks(allTasks.filter((t) => t.status === "Done"));
        console.log("inside", todoTasks);
      } else {
        console.log("No task available");
      }
      setLoading(false);
    });

    return () => unsubscribe(); // 卸載時取消監聽
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

// 建立一個自定義 Hook 方便使用
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks 必須在 TaskProvider 內使用");
  }
  return context;
};
