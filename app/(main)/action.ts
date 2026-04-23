"use server";
import { rtdb } from "@/app/backend/firebase";
import {
  ref,
  push,
  set,
  child,
  get,
  orderByChild,
  equalTo,
  query,
  onValue,
} from "firebase/database";
import {
  getGlobalUserName,
  getGlobalUserColor,
} from "@/app/(auth)/login/action";
import { use } from "react";

async function createTask(title: string, description: string) {
  const taskListRef = ref(rtdb, "tasks");
  const newTaskRef = push(taskListRef);
  await set(newTaskRef, {
    title: title,
    description: description,
    createUser: await getGlobalUserName(),
    status: "To Do",
    priority: "Medium",
    participants: [await getGlobalUserName()],
    userColor: await getGlobalUserColor(),
  });
}

export { createTask };
